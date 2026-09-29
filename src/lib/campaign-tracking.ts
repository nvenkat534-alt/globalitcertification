import { cleanAttribution, isGoogleAttribution, whatsappReferenceUrl } from "./enquiry-attribution";
export const META_PIXEL_ID = "1103233019317006";
// Ask again because v2 adds consented Google-to-WhatsApp reference matching.
export const ADS_CONSENT_KEY = "gcit-ad-measurement-v2";
type Pixel = ((...args: unknown[]) => void) & { queue: unknown[][]; loaded: boolean; version: string; callMethod?: (...args: unknown[]) => void; push?: Pixel };
declare global { interface Window { fbq?: Pixel; _fbq?: Pixel } }
export function measurementAllowed() {
  try { return localStorage.getItem(ADS_CONSENT_KEY) === "granted"; } catch { return false; }
}
export function initPixel() {
  if (!measurementAllowed() || !["www.globalcertsit.com", "globalcertsit.com"].includes(location.hostname)) return;
  if (!window.fbq) {
    const pixel = function (...args: unknown[]) { if (pixel.callMethod) pixel.callMethod(...args); else pixel.queue.push(args); } as Pixel;
    pixel.queue = []; pixel.loaded = true; pixel.version = "2.0"; pixel.push = pixel;
    window.fbq = pixel; window._fbq = pixel;
    const script = document.createElement("script"); script.async = true; script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  window.fbq("consent", "grant");
  if (!document.documentElement.dataset.gcitPixel) {
    window.fbq("set", "autoConfig", false, META_PIXEL_ID);
    window.fbq("init", META_PIXEL_ID);
    document.documentElement.dataset.gcitPixel = "ready";
  }
}
export function trackReceivedEnquiry(receiptId: string) {
  try {
    initPixel();
    if (!window.fbq || !measurementAllowed() || !["www.globalcertsit.com", "globalcertsit.com"].includes(location.hostname)) return;
    const key = `gcit-lead-${receiptId}`;
    if (sessionStorage.getItem(key)) return;
    window.fbq("trackSingle", META_PIXEL_ID, "Lead", { content_category: "Certification enquiry" }, { eventID: receiptId });
    sessionStorage.setItem(key, "sent");
  } catch { /* Measurement must not prevent a successfully received enquiry. */ }
}
export function captureAttribution() {
  try {
    if (!measurementAllowed()) return;
    const values = cleanAttribution(Object.fromEntries(new URLSearchParams(location.search)));
    if (Object.keys(values).length) localStorage.setItem("gcit-campaign-v1", JSON.stringify({ values, expires: Date.now() + 7 * 86400000 }));
  } catch {}
}
export function readAttribution(): Record<string, string> {
  if (!measurementAllowed()) return {};
  try { const stored = JSON.parse(localStorage.getItem("gcit-campaign-v1") || "null"); return stored?.expires > Date.now() ? cleanAttribution(stored.values) : {}; } catch { return {}; }
}

export function clearAttribution() {
  try { localStorage.removeItem("gcit-campaign-v1"); } catch {}
}

// A click is only an unconfirmed intent. No Lead, qualified-lead or purchase event fires here.
// Keep navigation synchronous; a failed measurement request must never block WhatsApp.
export function trackWhatsAppClick(event: MouseEvent) {
  if (!event.isTrusted || (event.type === "auxclick" && event.button !== 1) || !measurementAllowed()) return;
  if (!["www.globalcertsit.com", "globalcertsit.com"].includes(location.hostname)) return;
  const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
  if (!anchor) return;
  try {
    const attribution = readAttribution();
    if (!isGoogleAttribution(attribution)) return;
    const reference = `GC-${crypto.randomUUID().replaceAll("-", "").slice(0, 16)}`;
    const href = whatsappReferenceUrl(anchor.href, reference);
    if (!href) return;
    anchor.href = href;
    void fetch("/api/enquiry-intents", {
      method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
      body: JSON.stringify({ reference, consent: true, attribution, landingPath: location.pathname }),
    }).catch(() => {});
  } catch { /* Keep the original WhatsApp link usable. */ }
}
