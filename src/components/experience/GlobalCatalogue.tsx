"use client";
import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Compass, Home, Search, Sparkles, X, Layers3, Cloud, ShieldCheck, Network, BriefcaseBusiness, Database, ArrowLeft } from "lucide-react";
import { certUrl, certificationEnquiry, providers, type Certification } from "@/lib/certifications";
import ProviderMark from "./ProviderMark";
const groups = ["All certifications", "PMP & Agile", "Cloud", "AI", "Data & Analytics", "Security", "Business Apps", "Networking"];
const colours: Record<string,string> = {pmi:"#c4a1ff",aws:"#ffc477",microsoft:"#77cfff","google-cloud":"#88e0b6",anthropic:"#f0b197",sap:"#89cbff",salesforce:"#79d8f6",cisco:"#89e6db",comptia:"#ff9cb8",databricks:"#ffa396",snowflake:"#8bdbff",isaca:"#b6a9ff",isc2:"#a5e1a1"};
export default function GlobalCatalogue({items}:{items:Certification[]}) {
  const [spotlight,setSpotlight] = useState(0);
  const spotlightIds = ["pmp", "solutions-architect-associate", "azure-administrator", "claude-developer-foundations"];
  const spotlightItems = spotlightIds.map(id => items.find(c => c.id === id)).filter((c): c is Certification => Boolean(c));
  const featured = spotlightItems[spotlight % spotlightItems.length];
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
        <div className="atlas-hero-grid"><div className="atlas-editorial-copy">
          <span className="atlas-kicker"><span className="atlas-live-dot"/> THE GLOBAL CERTIFICATION COLLECTION</span>
          <h1>Make your<br/>next move.<br/><span>Globally.</span></h1>
          <p>One ambition. A world of possibilities.<br/>Discover certifications in project management, cloud, AI and beyond.</p>
          <div className="atlas-actions"><a className="atlas-primary" href="#all-certifications">Explore the collection <ArrowUpRight size={19}/></a><Link className="atlas-secondary" href="/certifications">Find my path <Compass size={18}/></Link></div>
          <div className="atlas-assurance"><span>Browse freely</span><span>Understand your exam</span><span>Get pricing</span></div>
        </div>
        {featured && <div className="atlas-feature-stage" style={{"--feature-colour":colours[featured.provider] || "#f0b197"} as CSSProperties}>
          <div className="atlas-stage-orbit" aria-hidden="true"/><div className="atlas-stage-orbit atlas-stage-orbit-two" aria-hidden="true"/>
          <div className="atlas-feature-topline"><span>IN THE SPOTLIGHT</span><span>{String(spotlight + 1).padStart(2,"0")} / {String(spotlightItems.length).padStart(2,"0")}</span></div>
          <Link href={certUrl(featured)} className="atlas-credential-book" key={featured.id} aria-label={`Explore ${featured.name}`}>
            <div className="atlas-book-spine" aria-hidden="true"/>
            <div className="atlas-book-cover"><div className="atlas-book-top"><ProviderMark provider={featured.provider}/><ArrowUpRight size={20}/></div><span className="atlas-book-label">CERTIFICATION GUIDE</span><div className="atlas-book-sculpture" aria-hidden="true"><i/><i/><i/><BadgeCheck size={46}/></div><strong>{featured.exam}</strong><span className="atlas-book-name">{featured.name}</span><div className="atlas-book-bottom"><span>{featured.level}</span><span>GLOBAL CERTS IT</span></div></div>
          </Link>
          <div className="atlas-feature-caption"><span>YOUR NEXT CHAPTER STARTS HERE</span><Link href={certUrl(featured)}>Explore this certification <ArrowUpRight size={16}/></Link></div>
          <div className="atlas-spotlight-controls" role="group" aria-label="Featured certification selection">{spotlightItems.map((c,i)=><button key={c.id} aria-label={`Show ${c.name}`} aria-pressed={spotlight===i} onClick={()=>setSpotlight(i)}>{c.provider === "pmi" ? "PMP" : c.provider === "aws" ? "AWS" : c.provider === "microsoft" ? "Microsoft" : "Claude"}</button>)}</div>
        </div>}
        </div>
        <div className="atlas-stat-row"><div><strong>{items.length}</strong><span>certifications to explore</span></div><div><strong>{providers.length}</strong><span>global providers</span></div><div><strong>Your pace.</strong><span>Browse → Read details → Request pricing</span></div></div>
      </div>
    </section>
    <div className="atlas-brand-strip" aria-label="Browse leading providers"><div className="gc-container"><span>GLOBAL NAMES.<br/><strong>YOUR POSSIBILITIES.</strong></span>{["pmi","aws","microsoft","google-cloud","salesforce","anthropic"].map(id=><button key={id} aria-label={`Browse ${providers.find(p=>p.id===id)?.name} certifications`} onClick={()=>{setProvider(id);setGroup(groups[0]);setQuery("");setLimit(18);document.getElementById("all-certifications")?.scrollIntoView({behavior:"smooth"});}}><ProviderMark provider={id}/></button>)}</div></div>
    <div className="atlas-paper"><section className="gc-container atlas-directory" id="all-certifications">
      <div className="atlas-section-heading"><div><span className="atlas-kicker">CURATED FOR YOUR NEXT CHAPTER</span><h2>Different ambitions.
            Extraordinary possibilities.</h2><p>Explore the full collection. Find your field, choose a provider or search for an exam.</p></div><Link href="/" className="atlas-home"><Home size={16}/> Back to Home</Link></div>
      <div className="atlas-tools"><label className="atlas-search"><Search size={20}/><span className="sr-only">Search all certifications</span><input type="search" value={query} placeholder="Search PMP, AWS, Azure, SAP…" onChange={e=>{setQuery(e.target.value);setLimit(18);}}/>{query && <button aria-label="Clear catalogue search" onClick={()=>setQuery("")}><X size={18}/></button>}</label><label className="atlas-provider"><span>Provider</span><select aria-label="Filter by provider" value={provider} onChange={e=>{setProvider(e.target.value);setLimit(18);}}><option value="all">All providers</option>{providers.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label></div>
      <div className="atlas-categories" role="group" aria-label="Certification categories">{groups.map((g,i)=><button key={g} aria-pressed={g===group} onClick={()=>{setGroup(g);setLimit(18);}}><span className="atlas-category-icon">{i===0 ? <Layers3/> : i===1 ? <BriefcaseBusiness/> : i===2 ? <Cloud/> : i===3 ? <Sparkles/> : i===4 ? <Database/> : i===5 ? <ShieldCheck/> : i===6 ? <BriefcaseBusiness/> : <Network/>}</span>{g}</button>)}</div>
      <div className="atlas-results"><p role="status">{matches.length} certification{matches.length===1 ? "" : "s"}{matches.length>limit ? ` · showing ${limit}` : ""}</p>{(group!==groups[0] || provider!=="all" || query) && <button onClick={reset}>Clear filters <X size={14}/></button>}</div>
      <div className="atlas-card-grid">{matches.slice(0,limit).map((c,i)=><article className="atlas-card" key={`${c.provider}/${c.id}`} style={{"--card-accent":colours[c.provider] || "#b2bfff","--entry-delay":`${Math.min(i,5)*45}ms`} as CSSProperties}>
        <div className="atlas-card-header"><ProviderMark provider={c.provider}/><span>{c.level}</span></div>
        <div className={`atlas-card-art art-${i%4}`} aria-hidden="true"><span className="atlas-art-code">{c.exam}</span><div className="atlas-art-geometry"><i/><i/><i/><i/></div><span className="atlas-art-edition">GLOBAL CERTIFICATION / {String(i+1).padStart(2,"0")}</span></div>
        <div className="atlas-card-body"><span className="atlas-exam">{c.exam}</span><h3><Link href={certUrl(c)}>{c.name}</Link></h3><p>{c.why}</p><div className="atlas-tags">{c.skills.slice(0,3).map(s=><span key={s}>{s}</span>)}</div>{c.access && <p className="atlas-access">{c.access}</p>}{c.status === "Beta" && <p className="atlas-access">Bookable beta exam</p>}</div>
        <div className="atlas-card-actions"><Link href={certUrl(c)}>View certification details <ArrowRight size={17}/></Link><Link href={certificationEnquiry([c])}>Request pricing <ArrowUpRight size={16}/></Link></div>
      </article>)}</div>
      {!matches.length && <div className="atlas-empty"><Search size={32}/><h3>No matching certifications yet.</h3><p>Try another exam name or clear your filters to see the complete collection.</p><button className="atlas-primary" onClick={reset}>Show all certifications</button></div>}
      {matches.length>limit && <button className="atlas-load atlas-secondary" onClick={()=>setLimit(n=>n+18)}>Show more certifications <span>{matches.length-limit} more</span><ArrowRight size={17}/></button>}
      <aside className="atlas-help"><div><span className="atlas-kicker">STILL EXPLORING?</span><h2>Find the right starting point.</h2><p>Use your role and experience to narrow your options, or explore everything Global Certs IT offers.</p></div><div><Link className="atlas-primary" href="/certifications">Help me choose <Compass size={17}/></Link><Link className="atlas-secondary" href="/">Explore our homepage <Home size={17}/></Link></div></aside>
    </section></div>
  </main>;
}
