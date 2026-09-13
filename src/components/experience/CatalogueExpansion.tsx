import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { certifications, providers, isAvailable, whatsappUrl } from "@/lib/certifications";
import ProviderMark from "./ProviderMark";
import { WhatsAppIcon } from "./WhatsAppConcierge";

const highlights: Record<string, string> = {
  anthropic: "Claude · Associate · Developer · Architect",
  salesforce: "Administrator · Agentforce · Data 360 · Developer",
  databricks: "Data engineering · GenAI · ML · Context engineering",
  cisco: "CCST · CCNA · CCNP · CCIE · Automation",
  pmi: "PMP · CAPM · PgMP · PMI-CPMAI · Risk · PMO",
  iapp: "AIGP · CIPM · CIPT · CIPP",
  isaca: "CISA · CISM · CRISC · AAIA · AAISM · AAIR",
  comptia: "A+ · Network+ · Security+ · CySA+ · SecurityX",
  aws: "Cloud · Architecture · AI · Data engineering",
  microsoft: "Azure · Fabric · Power BI · Copilot · AI",
  "google-cloud": "Cloud · Data · ML · Generative AI",
  snowflake: "SnowPro Core · Engineering · Analytics · GenAI",
  "red-hat": "Linux administration · RHCSA",
  "linux-foundation": "Kubernetes administration · CKA",
  hashicorp: "Infrastructure as code · Terraform",
  isc2: "Security leadership · CISSP",
  oracle: "Agentic AI foundations",
  "scrum-org": "Scrum · PSM I",
};

export function ProviderDirectory() {
  const order = ["anthropic", "salesforce", "databricks", "cisco", "pmi", "iapp", "isaca", "comptia", "aws", "microsoft", "google-cloud", "snowflake", "isc2", "red-hat", "linux-foundation", "hashicorp", "oracle", "scrum-org"];
  return <section className="gc-container gc-section provider-directory" id="providers">
    <div className="gc-section-heading"><div><span className="gc-kicker">FIND YOUR PLATFORM. SEE YOUR OPTIONS.</span><h2>Global names.<br/><span>Your next credential.</span></h2></div><p>Explore {providers.length} providers. Every credential includes<br/>career relevance, eligibility and registration guidance.</p></div>
    <div className="provider-directory-grid">{order.map(id => {
      const provider = providers.find(p => p.id === id)!;
      const count = certifications.filter(c => c.provider === id && isAvailable(c)).length;
      return <Link key={id} href={`/certifications/${id}`} className={`provider-directory-card directory-${id}`}>
        <div><ProviderMark provider={id} /><ArrowUpRight size={17}/></div>
        <p>{highlights[id]}</p><span>{count} {count === 1 ? "credential" : "credentials"}{id === "anthropic" && " · Partner access"}</span>
        <span className="sr-only">Explore {provider.name} certifications</span>
      </Link>;
    })}</div>
  </section>;
}

export function ClaudeSpotlight() {
  return <section className="gc-container claude-section" aria-labelledby="claude-title">
    <div className="claude-feature">
      <div className="claude-feature-copy"><span className="gc-kicker">ANTHROPIC / CLAUDE CERTIFICATIONS</span><h2 id="claude-title">Work with Claude.<br/><span>Show what you can do.</span></h2>
        <p>Using Claude at work, building an application or designing an enterprise solution? Choose the credential that matches your role.</p>
        <div className="claude-value"><span><Check size={15}/> Role-based skills</span><span><Check size={15}/> Proctored assessment</span><span><Check size={15}/> Official digital badge</span></div>
        <Link className="gc-button gc-button-light" href="/certifications/anthropic">Explore Claude & registration <ArrowUpRight size={18}/></Link>
        <p className="claude-access"><strong>Before you register:</strong> exam access is through the Claude Partner Network. Check your organisation’s practitioner access.</p>
        <a className="gc-text-link" href="https://academy.claude.com/" target="_blank" rel="noopener noreferrer">New to Claude? Explore public learning <ArrowUpRight size={15}/></a>
      </div>
      <div className="claude-paths"><div className="claude-sun-scene" aria-hidden="true"><div className="claude-sun">✳</div><div className="claude-sun-ring"/></div>
        {[{id:"claude-associate-foundations",label:"Use it at work",name:"Associate: Foundations"},{id:"claude-developer-foundations",label:"Build with the API",name:"Developer: Foundations"},{id:"claude-architect-foundations",label:"Design agent systems",name:"Architect: Foundations"},{id:"claude-architect-professional",label:"Architect at scale",name:"Architect: Professional"}].map((c,i)=><Link key={c.id} href={`/certifications/anthropic/${c.id}`}><span>0{i+1}</span><div><small>{c.label}</small><strong>{c.name}</strong></div><ArrowUpRight size={17}/></Link>)}
      </div>
    </div>
  </section>;
}

export function CareerJourneys() {
  const journeys = [
    { icon: <Layers3/>, label: "THE DATA PATH", title: "From SQL skills to a lakehouse project.", context: "A data analyst wants to move into engineering on Databricks.", route: "Data Engineer Associate → hands-on pipeline project", result: "Build a portfolio example showing ingestion, transformations and data-quality checks.", href: "/certifications/databricks/data-engineer-associate", exam: "Databricks Data Engineer Associate" },
    { icon: <Sparkles/>, label: "THE AI DELIVERY PATH", title: "From project planning to an AI pilot.", context: "A project professional wants to guide an AI initiative with a clear business purpose.", route: "PMI-CPMAI → scoped AI pilot and delivery plan", result: "Create a business case, data-readiness checklist and measurable pilot acceptance criteria.", href: "/certifications/pmi/pmi-cpmai", exam: "PMI-CPMAI" },
    { icon: <ShieldCheck/>, label: "THE SECURITY PATH", title: "From IT support to security practice.", context: "An IT support professional wants to develop security operations skills.", route: "Security+ → detection lab → CySA+ when ready", result: "Document a threat scenario, alert investigation and response report to demonstrate practical learning.", href: "/certifications/comptia/security-plus", exam: "CompTIA Security+" },
  ];
  return <section className="gc-container gc-section career-journeys" id="career-journeys">
    <div className="gc-section-heading"><div><span className="gc-kicker">TURN A CERTIFICATION INTO A PLAN</span><h2>Picture your<br/><span>next chapter.</span></h2></div><p>Illustrative career journeys.<br/>These are examples, not customer testimonials or promised results.</p></div>
    <div className="career-journey-grid">{journeys.map(j=><article key={j.exam} className="career-journey-card"><div className="journey-top"><span>{j.icon}</span><small>ILLUSTRATIVE EXAMPLE</small></div><span className="gc-kicker">{j.label}</span><h3>{j.title}</h3><p>{j.context}</p><div className="journey-route"><span>POSSIBLE NEXT STEPS</span><strong>{j.route}</strong></div><p><b>Put it into practice:</b> {j.result}</p><Link href={j.href}>Explore this certification <ArrowRight size={15}/></Link></article>)}</div>
    <div className="journey-contact"><p>Your experience shapes your path. Let’s discuss yours.</p><a className="gc-text-link" href={whatsappUrl("Hi Global Certs IT! Please help me plan a certification path. My current role: . My experience: . My target role: .")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18}/> Plan my next step <ArrowUpRight size={16}/></a></div>
  </section>;
}
