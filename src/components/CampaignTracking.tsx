"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ADS_CONSENT_KEY, captureAttribution, initPixel, measurementAllowed, META_PIXEL_ID } from "@/lib/campaign-tracking";

export default function CampaignTracking() {
  const pathname = usePathname();
  const [showChoice, setShowChoice] = useState(false), [revision, setRevision] = useState(0);
  const lastView = useRef("");
  const applicable = pathname === "/" || pathname.startsWith("/certifications") || pathname === "/enquire" || pathname === "/contact";
  useEffect(() => {
    captureAttribution();
    if (!applicable) return;
    try { setShowChoice(!localStorage.getItem(ADS_CONSENT_KEY)); } catch {}
    if (measurementAllowed()) {
      initPixel();
      if (lastView.current !== pathname && window.fbq) {
        window.fbq("trackSingle", META_PIXEL_ID, "PageView"); lastView.current = pathname;
      }
    }
  }, [pathname, applicable, revision]);
  function choose(value: "granted" | "declined") {
    try { localStorage.setItem(ADS_CONSENT_KEY, value); } catch {}
    if (value === "declined" && window.fbq) window.fbq("consent", "revoke");
    setShowChoice(false); setRevision(v => v + 1);
  }
  if (!applicable) return null;
  return <>
    {showChoice && <aside className="measurement-choice" aria-label="Advertising measurement choice">
      <div><strong>Help us measure useful enquiries</strong><p>Allow Meta advertising cookies to measure visits and completed enquiries. Your form details and résumé are not sent with these events. <Link href="/privacy">Privacy details</Link></p></div>
      <button type="button" onClick={() => choose("granted")}>Allow measurement</button><button type="button" onClick={() => choose("declined")}>Decline</button>
    </aside>}
    {!showChoice && <button className="measurement-settings" type="button" onClick={() => setShowChoice(true)}>Ad cookie settings</button>}
  </>;
}
