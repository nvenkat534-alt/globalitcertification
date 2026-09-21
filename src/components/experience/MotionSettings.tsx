"use client";
import { useEffect, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";

const key = "gcit-motion-paused";
let temporaryPreference: boolean | undefined;

export function setPausedMotion(paused: boolean) {
  temporaryPreference = paused;
  try {
    localStorage.setItem(key, String(paused));
    temporaryPreference = undefined;
  } catch {
    // The control must still work when a browser blocks local storage.
  }
  if (paused) {
    const url = new URL(window.location.href);
    if (url.searchParams.get("motion") === "on") {
      url.searchParams.delete("motion");
      window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    }
  }
  document.documentElement.dataset.motion = paused ? "paused" : "on";
  window.dispatchEvent(new Event("gcit-motion"));
}

function subscribe(callback: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", callback);
  window.addEventListener("gcit-motion", callback);
  window.addEventListener("storage", callback);
  return () => {
    preference.removeEventListener("change", callback);
    window.removeEventListener("gcit-motion", callback);
    window.removeEventListener("storage", callback);
  };
}
function snapshot() {
  if (temporaryPreference !== undefined) return temporaryPreference;
  try {
    const saved = localStorage.getItem(key);
    if (saved !== null) return saved === "true";
  } catch {}
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
export function usePausedMotion() {
  return useSyncExternalStore(subscribe, snapshot, () => true);
}
export default function MotionSettings() {
  const paused = usePausedMotion();
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("motion") !== "on") return;
    setPausedMotion(false);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "on";
  }, [paused]);
  const toggle = () => setPausedMotion(!paused);
  return <button className="motion-control" onClick={toggle} aria-label={paused ? "Play visual effects" : "Pause visual effects"} aria-pressed={paused} title={paused ? "Play visual effects" : "Pause visual effects"}>
    {paused ? <Play size={14} /> : <Pause size={14} />}<span>Motion {paused ? "off" : "on"}</span>
  </button>;
}
