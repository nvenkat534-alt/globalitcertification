export const META_PIXEL_ID = "1103233019317006";
export const ADS_CONSENT_KEY = "gcit-ad-measurement-v1";
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
    const p = new URLSearchParams(location.search), values: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const value = p.get(key); if (value && /^[a-zA-Z0-9_./ -]{1,150}$/.test(value)) values[key] = value;
    }
    if (Object.keys(values).length) localStorage.setItem("gcit-campaign-v1", JSON.stringify({ values, expires: Date.now() + 7 * 86400000 }));
  } catch {}
}
export function readAttribution(): Record<string, string> {
  try { const stored = JSON.parse(localStorage.getItem("gcit-campaign-v1") || "null"); return stored?.expires > Date.now() ? stored.values : {}; } catch { return {}; }
}
