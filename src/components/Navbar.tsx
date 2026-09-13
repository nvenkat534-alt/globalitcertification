"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, MessageCircle, Sparkles, X } from "lucide-react";
import { whatsappUrl } from "@/lib/certifications";
const navLinks = [
  { name: "Certification finder", path: "/certifications" },
  { name: "AI pathways", path: "/ai-certifications" },
  { name: "PMP", path: "/certifications/pmi/pmp" },
  { name: "Contact", path: "/contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-nav">
        <div className="nav-inner">
          <Link href="/" onClick={() => setOpen(false)} className="site-brand">
            <span className="brand-symbol">
              <Compass />
            </span>
            <span>
              Global Certs <span>IT</span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                className={pathname === l.path ? "active" : ""}
                href={l.path}
              >
                {l.name === "AI pathways" && <Sparkles size={12} />} {l.name}
              </Link>
            ))}
          </nav>
          <a
            className="nav-contact"
            href={whatsappUrl(
              "Hi Global Certs IT! I would like certification guidance.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={14} /> Let’s talk
          </a>
          <button
            className="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {open && (
          <nav
            className="nav-mobile-menu"
            id="mobile-nav"
            aria-label="Mobile navigation"
          >
            {navLinks.map((l) => (
              <Link href={l.path} key={l.path} onClick={() => setOpen(false)}>
                {l.name}
              </Link>
            ))}
            <a
              className="nav-contact"
              href={whatsappUrl(
                "Hi Global Certs IT! I would like certification guidance.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> Talk on WhatsApp
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
