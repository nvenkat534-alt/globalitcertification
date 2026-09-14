import { createHash, randomBytes } from "node:crypto";
export type RateDecision = { allowed: boolean; retryAfter: number };
// Local backstop; the Vercel WAF applies a shared per-region limit before compute.
export function createEnquiryLimiter(now = Date.now, maxKeys = 10_000) {
  const entries = new Map<string, { count: number; reset: number }>();
  const salt = randomBytes(16).toString("hex");
  let lastSweep = 0;
  return (request: Request): RateDecision => {
    const time = now();
    if (time - lastSweep >= 60_000) {
      for (const [key, value] of entries) if (value.reset <= time) entries.delete(key);
      lastSweep = time;
    }
    // Vercel overwrites this header. Do not trust user-provided x-forwarded-for in production.
    const ip = (request.headers.get("x-vercel-forwarded-for") || "unknown").split(",")[0].trim();
    const key = createHash("sha256").update(salt + ip).digest("hex");
    let entry = entries.get(key);
    if (!entry || entry.reset <= time) {
      if (!entry && entries.size >= maxKeys) return { allowed: false, retryAfter: 60 };
      entry = { count: 0, reset: time + 600_000 }; entries.set(key, entry);
    }
    if (entry.count >= 30) return { allowed: false, retryAfter: Math.max(1, Math.ceil((entry.reset - time) / 1000)) };
    entry.count++;
    return { allowed: true, retryAfter: 0 };
  };
}
