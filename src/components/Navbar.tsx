"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { whatsappUrl } from "@/lib/certifications";
import BrandMark from "./experience/BrandMark";
import MotionSettings from "./experience/MotionSettings";
import { WhatsAppIcon } from "./experience/WhatsAppConcierge";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Certifications", path: "/certifications" },
  { name: "Career switch", path: "/careers" },
  { name: "PMP", path: "/certifications/pmi/pmp" },
  { name: "AI certifications", path: "/ai-certifications" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape" && open) {setOpen(false); toggle.current?.focus();} };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="gc-nav"><div className="gc-container gc-nav-inner">
      <Link href="/" onClick={() => setOpen(false)} aria-label="Global Certs IT home"><BrandMark/></Link>
      <nav className="gc-nav-links" aria-label="Main navigation">{navLinks.map(link=><Link key={link.path} aria-current={pathname===link.path ? "page" : undefined} href={link.path}>{link.name === "AI certifications" && <Sparkles size={13}/>} {link.name}</Link>)}</nav>
      <div className="gc-nav-actions"><MotionSettings/><a className="gc-nav-whatsapp" href={whatsappUrl("Hi Global Certs IT! I am interested in a global certification. Please share the price and payment details.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18}/><span>WhatsApp us</span><ArrowUpRight size={14}/></a><button ref={toggle} className="gc-mobile-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="gc-mobile-navigation" onClick={()=>setOpen(!open)}>{open ? <X size={24}/> : <Menu size={24}/>}</button></div>
    </div>{open && <nav className="gc-mobile-navigation" id="gc-mobile-navigation" aria-label="Mobile navigation">{[...navLinks,{name:"Contact us",path:"/contact"}].map(link=><Link href={link.path} key={link.path} onClick={()=>setOpen(false)}>{link.name}<ArrowUpRight size={17}/></Link>)}</nav>}</header>
  </>;
}
