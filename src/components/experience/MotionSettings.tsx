"use client";
import { useEffect, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";

const key = "gcit-motion-paused";
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
    document.documentElement.dataset.motion = paused ? "paused" : "on";
  }, [paused]);
  const toggle = () => {
    try { localStorage.setItem(key, String(!paused)); } catch { return; }
    window.dispatchEvent(new Event("gcit-motion"));
  };
  return <button className="motion-control" onClick={toggle} aria-label={paused ? "Play visual effects" : "Pause visual effects"} aria-pressed={paused} title={paused ? "Play visual effects" : "Pause visual effects"}>
    {paused ? <Play size={14} /> : <Pause size={14} />}<span>Motion {paused ? "off" : "on"}</span>
  </button>;
}
