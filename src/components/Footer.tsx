import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import BrandMark from "./experience/BrandMark";
import { whatsappUrl } from "@/lib/certifications";
export default function Footer() {
  return (
    <footer className="career-footer">
      <div className="cf-shell">
        <div className="footer-top">
          <div>
            <Link href="/" className="site-brand">
              <BrandMark />
            </Link>
            <p>
              Global IT certifications. Personal guidance.
              <br />
              PMP · Cloud · AI · Data · Cybersecurity.
            </p>
            <a
              href={whatsappUrl(
                "Hi Global Certs IT! I would like certification guidance.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-chat"
            >
              <MessageCircle size={15} /> +91 93928 28155{" "}
              <ArrowUpRight size={13} />
            </a>
          </div>
          <div>
            <h2>GLOBAL CERTIFICATIONS</h2>
            <Link href="/certifications">Certification finder</Link>
            <Link href="/ai-certifications">AI career pathways</Link>
            <Link href="/certifications?role=data-engineer">
              Data engineering
            </Link>
            <Link href="/certifications/pmi/pmp">PMP certification</Link>
          </div>
          <div>
            <h2>PLAN YOUR NEXT MOVE</h2>
            <Link href="/careers">Career switch hub</Link>
            <Link href="/careers/resume">Résumé review</Link>
            <Link href="/careers/jobs">Daily job listings</Link>
            <Link href="/certifications/aws">AWS</Link>
            <Link href="/certifications/microsoft">Microsoft</Link>
            <Link href="/certifications/google-cloud">Google Cloud</Link>
            <Link href="/certifications/databricks">
              Databricks & data careers
            </Link>
          </div>
          <div>
            <h2>LET’S CONNECT</h2>
            <Link href="/contact">Contact us</Link>
            <a href="mailto:nvenkat534@gmail.com">nvenkat534@gmail.com</a>
            <a
              href="https://instagram.com/global_certification_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={11} />
            </a>
            <p>
              Benz Circle, Vijayawada
              <br />
              Andhra Pradesh, India
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Global Certs IT</span>
          <span>Independent certification guidance. Provider names and marks belong to their owners.</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
