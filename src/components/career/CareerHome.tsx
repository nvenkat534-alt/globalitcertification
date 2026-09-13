import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Layers3,
  MessageCircle,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import {
  certifications,
  certUrl,
  isAvailable,
  providers,
  roles,
  whatsappUrl,
} from "@/lib/certifications";
import RoleIcon from "./Icons";
export default function CareerHome() {
  const active = certifications.filter((c) => isAvailable(c));
  const highlights = [
    "ai-business-strategist",
    "azure-ai-apps-agents",
    "context-engineer",
  ]
    .map((id) => active.find((c) => c.id === id)!)
    .filter(Boolean);
  return (
    <main className="cf career-home">
      <section className="career-hero">
        <div className="hero-grain" />
        <div className="cf-shell hero-layout">
          <div className="hero-copy">
            <span className="hero-kicker">
              <span /> A CLEARER PATH TO YOUR NEXT ROLE
            </span>
            <h1>
              Your ambition.
              <br />
              The right skills.
              <br />
              <em>What’s next?</em>
            </h1>
            <p>
              Find the global certification that fits your career.
              <br className="desktop-br" /> Built around your role, experience
              and the tools you use.
            </p>
            <div className="hero-actions">
              <Link href="/certifications" className="cf-btn cf-btn-mint">
                Find my certification <ArrowUpRight size={20} />
              </Link>
              <Link href="/ai-certifications" className="hero-text-link">
                <Sparkles size={16} /> Explore AI pathways
              </Link>
            </div>
            <div className="hero-proof">
              <span>
                <Check size={14} /> Official exam sources
              </span>
              <span>
                <Check size={14} /> Role-based guidance
              </span>
              <span>
                <Check size={14} /> No sign-up
              </span>
            </div>
          </div>
          <div
            className="career-map"
            aria-label="Example data engineer certification pathway"
          >
            <div className="map-orbit orbit-one" />
            <div className="map-orbit orbit-two" />
            <div className="map-dot dot-one" />
            <div className="map-dot dot-two" />
            <div className="map-center">
              <Compass size={38} strokeWidth={1.2} />
              <span>
                YOUR NEXT
                <br />
                <strong>CHAPTER</strong>
              </span>
            </div>
            <Link
              href="/certifications?role=data-engineer"
              className="map-role"
            >
              <span className="map-role-icon">
                <RoleIcon name="database" size={23} />
              </span>
              <span>
                <small>START WITH YOUR ROLE</small>
                <strong>Data Engineer</strong>
              </span>
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/certifications/microsoft/fabric-data-engineer"
              className="map-cert map-cert-one"
            >
              <div>
                <span className="map-brand azure-brand">M</span>
                <small>MICROSOFT FABRIC</small>
                <ArrowUpRight size={15} />
              </div>
              <strong>Fabric Data Engineer</strong>
              <p>
                DP-700 <span>Associate</span>
              </p>
            </Link>
            <Link
              href="/certifications/aws/data-engineer-associate"
              className="map-cert map-cert-two"
            >
              <div>
                <span className="map-brand aws-brand">aws</span>
                <small>AMAZON WEB SERVICES</small>
                <ArrowUpRight size={15} />
              </div>
              <strong>Data Engineer</strong>
              <p>
                DEA-C01 <span>Associate</span>
              </p>
            </Link>
            <div className="map-caption">
              <span className="map-caption-line" /> One role. Different
              platforms.
              <br />A path that makes sense for you.
            </div>
          </div>
        </div>
        <div className="cf-shell hero-bottom">
          <span>EXPLORE THE ECOSYSTEMS YOU WORK IN</span>
          <div>
            <b>
              aws<span>⌣</span>
            </b>
            <b className="microsoft-word">
              <i />
              Microsoft
            </b>
            <b>Google Cloud</b>
            <b>databricks</b>
            <b>❄ snowflake</b>
            <b>PMI</b>
          </div>
        </div>
      </section>
      <section className="cf-shell home-roles">
        <div className="section-heading">
          <div>
            <span className="cf-eyebrow">START WITH YOU</span>
            <h2>
              Where do you want
              <br />
              to go next?
            </h2>
          </div>
          <p>
            There isn’t one best certification for everyone.
            <br />
            Choose a role. We’ll help you find your fit.
          </p>
        </div>
        <div className="home-role-grid">
          {roles
            .filter((r) =>
              [
                "data-engineer",
                "ai-engineer",
                "cloud-engineer",
                "project-manager",
                "cybersecurity",
                "data-analyst",
              ].includes(r.id),
            )
            .map((r, i) => (
              <Link
                href={`/certifications?role=${r.id}`}
                className="home-role"
                key={r.id}
              >
                <div className="home-role-top">
                  <span className={`home-role-icon tone-${i}`}>
                    <RoleIcon name={r.icon} size={27} />
                  </span>
                  <ArrowUpRight size={21} />
                </div>
                <h3>{r.name}</h3>
                <p>{r.description}</p>
                <span className="role-count">
                  {active.filter((c) => c.roles[r.id]).length} certification
                  options <ArrowRight size={14} />
                </span>
              </Link>
            ))}
        </div>
        <Link href="/certifications" className="all-paths">
          Explore all {roles.length} career paths <ArrowRight size={18} />
        </Link>
      </section>
      <section className="cf-shell">
        <div className="ai-feature">
          <div className="ai-feature-copy">
            <span className="cf-eyebrow">
              <Sparkles size={15} /> THE NEXT WAVE OF AI
            </span>
            <h2>
              AI is changing work.
              <br />
              <em>Find your place in it.</em>
            </h2>
            <p>
              Building agents? Deploying models? Leading adoption? Explore
              different AI pathways for technical and business careers, from
              first steps to advanced specialisations.
            </p>
            <Link href="/ai-certifications" className="cf-btn cf-btn-dark">
              Discover my AI path <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="ai-feature-paths">
            {[
              {
                n: "01",
                title: "Understand AI",
                text: "Foundation & business skills",
                icon: "compass",
              },
              {
                n: "02",
                title: "Build with AI",
                text: "Applications, data & agents",
                icon: "sparkles",
              },
              {
                n: "03",
                title: "Lead & specialise",
                text: "Production systems & strategy",
                icon: "layers",
              },
            ].map((s) => (
              <div key={s.n}>
                <span className="ai-step-num">{s.n}</span>
                <RoleIcon name={s.icon} />
                <span>
                  <strong>{s.title}</strong>
                  <small>{s.text}</small>
                </span>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cf-shell home-latest">
        <div className="section-heading">
          <div>
            <span className="cf-eyebrow">ON YOUR RADAR</span>
            <h2>New exams. New possibilities.</h2>
          </div>
          <span className="checked-pill">
            <Check size={13} /> Checked 13 Sep 2026
          </span>
        </div>
        <div className="latest-grid">
          {highlights.map((c) => (
            <Link href={certUrl(c)} key={c.id} className="latest-card">
              <div>
                <span>{providers.find((p) => p.id === c.provider)?.name}</span>
                <span className={c.status ? "beta-tag" : "new-tag"}>
                  {c.status ? "Bookable beta" : "New / updated"}
                </span>
              </div>
              <h3>{c.name}</h3>
              <p>{c.why}</p>
              <span className="latest-link">
                Meet this certification <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="how-section">
        <div className="cf-shell">
          <div className="section-heading">
            <div>
              <span className="cf-eyebrow">
                LESS GUESSWORK. MORE DIRECTION.
              </span>
              <h2>A better way to choose.</h2>
            </div>
            <p>
              From a confusing list of exam names
              <br />
              to a shortlist that fits your work.
            </p>
          </div>
          <div className="how-grid">
            {[
              {
                n: "01",
                title: "Choose your direction",
                text: "Tell us your role, experience and platform. Explore certifications connected to your goals.",
                icon: Compass,
              },
              {
                n: "02",
                title: "Understand the difference",
                text: "Compare skills, career relevance and readiness. Check the official exam details before deciding.",
                icon: Layers3,
              },
              {
                n: "03",
                title: "Take your next step",
                text: "Read eligibility and registration steps on the website, then send your shortlist on WhatsApp for pricing.",
                icon: MessageCircle,
              },
            ].map((s) => (
              <div key={s.n}>
                <span>{s.n}</span>
                <s.icon size={28} strokeWidth={1.4} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cf-shell">
        <div className="pmp-banner">
          <div>
            <span className="cf-eyebrow">FOR PEOPLE WHO LEAD PROJECTS</span>
            <h2>
              Your project experience.
              <br />A clearer PMP pathway.
            </h2>
            <p>
              Explore PMP eligibility, see how it compares with CAPM and
              PMI-ACP, and get help planning your next step.
            </p>
            <Link
              href="/certifications?role=project-manager&provider=pmi"
              className="cf-btn cf-btn-outline"
            >
              Explore project management <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="pmp-badge">
            <Target size={40} strokeWidth={1.2} />
            <strong>PMP</strong>
            <span>
              PROJECT MANAGEMENT
              <br />
              PROFESSIONAL
            </span>
            <small>Explore · Prepare · Progress</small>
          </div>
        </div>
      </section>
      <section className="cf-shell home-final">
        <span className="cf-eyebrow">LET’S MAKE YOUR NEXT MOVE COUNT</span>
        <h2>A little clarity goes a long way.</h2>
        <p>
          Tell us what you do and where you want to go.
          <br />
          We’ll help you work out the next step.
        </p>
        <a
          href={whatsappUrl(
            "Hi Global Certs IT! I am interested in a global certification. Please share the price and payment details.",
          )}
          className="cf-btn cf-btn-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talk to us on WhatsApp <MessageCircle size={18} />
        </a>
        <span className="home-final-detail">
          Certification guidance · Exam eligibility · Voucher enquiries
        </span>
      </section>
    </main>
  );
}
