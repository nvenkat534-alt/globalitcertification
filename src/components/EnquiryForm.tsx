"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { certifications, roles, whatsappUrl } from "@/lib/certifications";
import { experienceOptions, services, timelines } from "@/lib/enquiry-validation";
import { captureAttribution, readAttribution, trackReceivedEnquiry } from "@/lib/campaign-tracking";

export default function EnquiryForm({ initialCertification = "", initialRole = "" }: { initialCertification?: string; initialRole?: string }) {
  const [pending, setPending] = useState(false), [error, setError] = useState("");
  const [receipt, setReceipt] = useState<{ id: string; message: string } | null>(null);
  const requestId = useRef(""); const startedAt = useRef(0); const submitting = useRef(false);
  useEffect(() => { requestId.current = crypto.randomUUID(); startedAt.current = Date.now(); captureAttribution(); }, []);
  const general = whatsappUrl("Hi Global Certs IT! I would like pricing and payment details for a certification.");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (submitting.current) return;
    submitting.current = true;
    const form = new FormData(event.currentTarget), data = Object.fromEntries(form.entries());
    setPending(true); setError("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch("/api/enquiries", { signal: controller.signal, method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, consent: form.get("consent") === "on", requestId: requestId.current, startedAt: startedAt.current, attribution: readAttribution() }) });
      if (response.status === 429) {
        const seconds = Number(response.headers.get("Retry-After")) || 60;
        throw new Error(`Too many attempts. Please wait ${Math.ceil(seconds / 60)} minute(s) and try again, or contact us on WhatsApp.`);
      }
      if (!response.headers.get("content-type")?.includes("application/json")) throw new Error("The service is temporarily busy. Your form is still here; please try again or contact us on WhatsApp.");
      const result = await response.json();
      if (!response.ok || result.received !== true || typeof result.receiptId !== "string") throw new Error(result.error || "We couldn't save your enquiry. Please try again.");
      const message = `Hi Global Certs IT! I submitted website enquiry ${result.receiptId}.\nCertification: ${data.certification}\nService: ${data.service}\nTarget: ${data.timeline}\nRole: ${data.role} (${data.experience})\nExam country: ${data.country}\nName: ${data.name}\nPlease share pricing and payment details.`;
      setReceipt({ id: result.receiptId, message });
      trackReceivedEnquiry(result.receiptId);
    } catch (e) { setError(controller.signal.aborted ? "The connection took too long. Your form is still here. Please try again; a saved enquiry will not be duplicated." : e instanceof Error ? e.message : "Unable to submit. Please try again."); }
    finally { clearTimeout(timeout); submitting.current = false; setPending(false); }
  }
  if (receipt) return <section className="enquiry-received" aria-live="polite">
    <CheckCircle2 size={48}/><span className="gc-kicker">ENQUIRY RECEIVED</span><h2>Your next step is on its way.</h2>
    <p>Your details have been saved for Global Certs IT. You can also continue on WhatsApp with your selected certification and reference.</p>
    <div className="receipt-reference">Reference <strong>{receipt.id}</strong></div>
    <a className="enquiry-submit" href={whatsappUrl(receipt.message)} target="_blank" rel="noopener noreferrer">Continue on WhatsApp <ArrowUpRight size={18}/></a>
    <small>WhatsApp opens with your message. Tap Send there to start the conversation.</small>
    <Link href="/certifications">Continue exploring certifications →</Link>
  </section>;
  return <form className="certification-enquiry-form" onSubmit={submit}>
    <fieldset disabled={pending}><legend><span>01</span> Your certification plan</legend>
      <label className="enquiry-full">Certification or exam code<input name="certification" list="enquiry-certifications" defaultValue={initialCertification} required minLength={2} maxLength={800} placeholder="For example, PMP or Azure Administrator (AZ-104)"/>
        <datalist id="enquiry-certifications">{certifications.map(c => <option key={`${c.provider}-${c.exam}`} value={`${c.name} (${c.exam})`}/>)}</datalist>
      </label>
      <label>Current or target role<input name="role" list="enquiry-roles" defaultValue={initialRole} required minLength={2} maxLength={100} placeholder="For example, SAP SD Consultant"/><datalist id="enquiry-roles">{roles.map(r => <option key={r.id} value={r.name}/>)}</datalist></label>
      <label>Experience<select name="experience" required defaultValue=""><option value="" disabled>Select experience</option>{experienceOptions.map(v => <option key={v}>{v}</option>)}</select></label>
      <label>Exam country<input name="country" autoComplete="country-name" required minLength={2} maxLength={80} defaultValue="India"/></label>
      <label>When are you planning your exam?<select name="timeline" required defaultValue=""><option value="" disabled>Select your timeline</option>{timelines.map(v => <option key={v}>{v}</option>)}</select></label>
      <label className="enquiry-full">What do you need?<select name="service" required defaultValue="Exam voucher pricing">{services.map(v => <option key={v}>{v}</option>)}</select></label>
    </fieldset>
    <fieldset disabled={pending}><legend><span>02</span> Where we can reach you</legend>
      <label>Your name<input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your full name"/></label>
      <label>WhatsApp number<input name="phone" type="tel" autoComplete="tel" required maxLength={25} placeholder="+91 98765 43210"/><small>Include the country code.</small></label>
      <label className="enquiry-full">Email <small>Optional</small><input name="email" type="email" autoComplete="email" maxLength={160} placeholder="you@example.com"/></label>
      <label className="enquiry-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
    </fieldset>
    <label className="enquiry-consent"><input name="consent" type="checkbox" required disabled={pending}/><span>I understand this is paid, independent certification support and agree to be contacted about this enquiry. <Link href="/privacy">Privacy policy</Link></span></label>
    {error && <div className="enquiry-error" role="alert">{error} <a href={general} target="_blank" rel="noopener noreferrer">Contact us on WhatsApp</a></div>}
    <button type="submit" className="enquiry-submit" disabled={pending}>{pending ? "Sending your enquiry…" : "Send my enquiry"}<Send size={18}/></button>
    <p className="enquiry-footnote"><ShieldCheck size={16}/>Your enquiry is saved privately. You can continue on WhatsApp after submitting.</p>
  </form>;
}
