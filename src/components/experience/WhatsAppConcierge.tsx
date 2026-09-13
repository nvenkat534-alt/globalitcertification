"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { whatsappUrl } from "@/lib/certifications";
export function WhatsAppIcon({ size = 21 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.3 3.7A11.2 11.2 0 0 0 2.8 17.2L1.3 22.7l5.6-1.5A11.2 11.2 0 0 0 20.3 3.7Z" stroke="currentColor" strokeWidth="1.6"/><path d="M8.1 6.5c-.3-.5-.5-.5-.8-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3s1 2.6 1.2 2.8c.1.2 2 3.2 4.9 4.4 2.4.9 2.9.7 3.4.7s1.6-.7 1.8-1.3.2-1.2.2-1.3c-.1-.1-.3-.2-.6-.3l-1.9-.9c-.3-.1-.5-.2-.7.2l-.8 1c-.1.2-.3.2-.6.1a7.3 7.3 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.5l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.3Z" fill="currentColor"/></svg>;
}
export default function WhatsAppConcierge() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [certification, setCertification] = useState("PMP / PMI Project Management");
  const [goal, setGoal] = useState("Price & payment details");
  const [nudge, setNudge] = useState(false);
  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem("gcit-enquiry-dismissed") === "true"; } catch {}
    if (dismissed) return;
    const timer = window.setTimeout(() => setNudge(true), 14000);
    return () => window.clearTimeout(timer);
  }, []);
  const dismiss = () => {setNudge(false); try {sessionStorage.setItem("gcit-enquiry-dismissed", "true");} catch {}};
  const show = () => {dismiss(); dialog.current?.showModal();};
  const general = whatsappUrl("Hi Global Certs IT! I am interested in a global certification. Please share the price and payment details.");
  return <>
    <div className="whatsapp-dock">
      {nudge && <div className="whatsapp-nudge"><button aria-label="Dismiss certification help" onClick={dismiss}><X size={14}/></button><strong>Which certification is next for you?</strong><p>Ready to book? Get pricing and payment details.</p><button className="nudge-action" onClick={show}>Choose a certification <ArrowUpRight size={14}/></button></div>}
      <button className="whatsapp-dock-button" onClick={show} aria-label="Open certification enquiry options"><span className="dock-icon"><WhatsAppIcon size={25}/></span><span><strong>Chat on WhatsApp</strong><small>Pricing & booking</small></span><ArrowUpRight size={17}/></button>
    </div>
    <div className="mobile-enquiry-bar"><a href={general} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={22}/><span>WhatsApp us<small>Get pricing & booking</small></span><ArrowUpRight size={20}/></a><button onClick={show} aria-label="Choose a certification to enquire about"><MessageCircle size={21}/></button></div>
    <dialog className="gc-dialog enquiry-dialog" ref={dialog} aria-labelledby="enquiry-title" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}}>
      <button className="dialog-close" aria-label="Close enquiry options" onClick={()=>dialog.current?.close()}><X size={22}/></button>
      <span className="enquiry-icon"><WhatsAppIcon size={30}/></span><span className="gc-kicker">LET’S TALK CERTIFICATIONS</span><h2 id="enquiry-title">Your next certification<br/>starts with a message.</h2><p>Choose what you need. We’ll put the details into your WhatsApp message.</p>
      <label>Which certification are you considering?<select value={certification} onChange={e=>setCertification(e.target.value)}>{["PMP / PMI Project Management", "SAP S/4HANA / Integration", "Claude / Anthropic", "Salesforce / Agentforce", "Databricks", "Cisco", "ISACA", "CompTIA", "AIGP / IAPP Privacy", "AWS", "Microsoft Azure / Fabric", "Google Cloud", "AI & Generative AI", "Data Engineering / Analytics", "Other global certification"].map(v=><option key={v}>{v}</option>)}</select></label>
      <label>How can we help?<select value={goal} onChange={e=>setGoal(e.target.value)}>{["Price & payment details", "Book an exam voucher", "Existing order support"].map(v=><option key={v}>{v}</option>)}</select></label>
      <a className="gc-button gc-button-whatsapp" target="_blank" rel="noopener noreferrer" href={whatsappUrl(`Hi Global Certs IT! I am interested in ${certification}. Enquiry: ${goal}.`)}><WhatsAppIcon/> Continue to WhatsApp <ArrowUpRight size={18}/></a><small className="enquiry-note">WhatsApp opens with your message. Tap Send to contact us.</small><span className="enquiry-number">+91 93928 28155 · Telugu & English</span>
    </dialog>
  </>;
}
