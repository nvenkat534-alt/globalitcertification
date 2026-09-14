"use client";
import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Compass, Home, Search, Sparkles, X } from "lucide-react";
import { certUrl, certificationEnquiry, providers, type Certification } from "@/lib/certifications";
import ProviderMark from "./ProviderMark";
const groups = ["All certifications", "PMP & Agile", "Cloud", "AI", "Data & Analytics", "Security", "Business Apps", "Networking"];
const colours: Record<string,string> = {pmi:"#c4a1ff",aws:"#ffc477",microsoft:"#77cfff","google-cloud":"#88e0b6",anthropic:"#f0b197",sap:"#89cbff",salesforce:"#79d8f6",cisco:"#89e6db",comptia:"#ff9cb8",databricks:"#ffa396",snowflake:"#8bdbff",isaca:"#b6a9ff",isc2:"#a5e1a1"};
export default function GlobalCatalogue({items}:{items:Certification[]}) {
  const [group,setGroup] = useState("All certifications");
  const [provider,setProvider] = useState("all");
  const [query,setQuery] = useState("");
  const [limit,setLimit] = useState(18);
  const matches = useMemo(() => items.filter(c => {
    const category = group === "All certifications" || (group === "PMP & Agile" && ["pmi","scrum-org"].includes(c.provider)) || (group === "Cloud" && Boolean(c.roles["cloud-engineer"] || c.roles["cloud-architect"])) || (group === "AI" && c.ai) || (group === "Data & Analytics" && Boolean(c.roles["data-engineer"] || c.roles["data-analyst"])) || (group === "Security" && Boolean(c.roles.cybersecurity)) || (group === "Business Apps" && ["sap","salesforce"].includes(c.provider)) || (group === "Networking" && c.provider === "cisco");
    return category && (provider === "all" || c.provider === provider) && `${c.name} ${c.exam} ${c.provider} ${c.skills.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase());
  }).sort((a,b) => Number(b.id === "pmp") - Number(a.id === "pmp") || a.name.localeCompare(b.name)),[items,group,provider,query]);
  function reset(){setGroup("All certifications");setProvider("all");setQuery("");setLimit(18);}
  return <main className="global-catalogue">
    <section className="atlas-hero">
      <div className="atlas-glow atlas-glow-one" aria-hidden="true"/><div className="atlas-glow atlas-glow-two" aria-hidden="true"/>
      <div className="gc-container">
        <nav className="atlas-breadcrumb" aria-label="Catalogue navigation"><Link href="/"><Home size={16}/> Home</Link><span>/</span><span>All global certifications</span></nav>
        <div className="atlas-hero-grid"><div>
          <span className="atlas-kicker"><Sparkles size={16}/> BIG POSSIBILITIES. ONE PLACE TO EXPLORE.</span>
          <h1>World-class skills.<br/><span>Your next certification.</span></h1>
          <p>PMP. Cloud. AI. SAP. Cybersecurity. Explore the full collection, understand your options and take the next step with confidence.</p>
          <div className="atlas-actions"><a className="atlas-primary" href="#all-certifications">Browse all {items.length} certifications <ArrowRight size={18}/></a><Link className="atlas-secondary" href="/certifications">Help me choose <Compass size={18}/></Link></div>
          <div className="atlas-assurance"><span>No sign-up needed</span><span>Exam & eligibility details</span><span>Pricing support</span></div>
        </div><div className="atlas-art" aria-hidden="true"><div className="atlas-ring"/><div className="atlas-ring atlas-ring-inner"/><div className="atlas-core"><BadgeCheck size={44}/><strong>GLOBAL</strong><span>CERTIFICATIONS</span></div><span className="atlas-float atlas-float-one">PMP <small>LEAD WITH CONFIDENCE</small></span><span className="atlas-float atlas-float-two">Cloud <small>BUILD WHAT’S NEXT</small></span><span className="atlas-float atlas-float-three">AI <small>EXPLORE NEW POSSIBILITIES</small></span></div></div>
        <div className="atlas-stat-row"><div><strong>{items.length}</strong><span>certifications to explore</span></div><div><strong>{providers.length}</strong><span>global providers</span></div><div><strong>Your pace.</strong><span>Browse → Read details → Request pricing</span></div></div>
      </div>
    </section>
    <section className="gc-container atlas-directory" id="all-certifications">
      <div className="atlas-section-heading"><div><span className="atlas-kicker">THE COMPLETE COLLECTION</span><h2>Find something that moves you forward.</h2><p>Start browsing below. Search and filters are optional.</p></div><Link href="/" className="atlas-home"><Home size={16}/> Back to Home</Link></div>
      <div className="atlas-tools"><label className="atlas-search"><Search size={20}/><span className="sr-only">Search all certifications</span><input type="search" value={query} placeholder="Search PMP, AWS, Azure, SAP…" onChange={e=>{setQuery(e.target.value);setLimit(18);}}/>{query && <button aria-label="Clear catalogue search" onClick={()=>setQuery("")}><X size={18}/></button>}</label><label className="atlas-provider"><span>Provider</span><select aria-label="Filter by provider" value={provider} onChange={e=>{setProvider(e.target.value);setLimit(18);}}><option value="all">All providers</option>{providers.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label></div>
      <div className="atlas-categories" role="group" aria-label="Certification categories">{groups.map(g=><button key={g} aria-pressed={g===group} onClick={()=>{setGroup(g);setLimit(18);}}>{g}</button>)}</div>
      <div className="atlas-results"><p role="status">{matches.length} certification{matches.length===1 ? "" : "s"}{matches.length>limit ? ` · showing ${limit}` : ""}</p>{(group!==groups[0] || provider!=="all" || query) && <button onClick={reset}>Clear filters <X size={14}/></button>}</div>
      <div className="atlas-card-grid">{matches.slice(0,limit).map((c,i)=><article className="atlas-card" key={`${c.provider}/${c.id}`} style={{"--card-accent":colours[c.provider] || "#b2bfff","--entry-delay":`${Math.min(i,5)*45}ms`} as CSSProperties}>
        <div className="atlas-card-header"><ProviderMark provider={c.provider}/><span>{c.level}</span></div>
        <div className="atlas-card-body"><span className="atlas-exam">{c.exam}</span><h3><Link href={certUrl(c)}>{c.name}</Link></h3><p>{c.why}</p><div className="atlas-tags">{c.skills.slice(0,3).map(s=><span key={s}>{s}</span>)}</div>{c.access && <p className="atlas-access">{c.access}</p>}{c.status === "Beta" && <p className="atlas-access">Bookable beta exam</p>}</div>
        <div className="atlas-card-actions"><Link href={certUrl(c)}>View certification details <ArrowRight size={17}/></Link><Link href={certificationEnquiry([c])}>Request pricing <ArrowUpRight size={16}/></Link></div>
      </article>)}</div>
      {!matches.length && <div className="atlas-empty"><Search size={32}/><h3>No matching certifications yet.</h3><p>Try another exam name or clear your filters to see the complete collection.</p><button className="atlas-primary" onClick={reset}>Show all certifications</button></div>}
      {matches.length>limit && <button className="atlas-load atlas-secondary" onClick={()=>setLimit(n=>n+18)}>Show more certifications <span>{matches.length-limit} more</span><ArrowRight size={17}/></button>}
      <aside className="atlas-help"><div><span className="atlas-kicker">STILL EXPLORING?</span><h2>Find the right starting point.</h2><p>Use your role and experience to narrow your options, or explore everything Global Certs IT offers.</p></div><div><Link className="atlas-primary" href="/certifications">Help me choose <Compass size={17}/></Link><Link className="atlas-secondary" href="/">Explore our homepage <Home size={17}/></Link></div></aside>
    </section>
  </main>;
}
