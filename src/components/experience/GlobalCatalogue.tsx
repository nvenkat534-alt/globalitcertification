"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowDown, ArrowRight, ArrowUpRight, Award, Blocks, BriefcaseBusiness, Check, ChevronDown, Cloud, Compass, Database, GitCompareArrows, GraduationCap, Layers3, Network, Search, ShieldCheck, SlidersHorizontal, Sparkles, Terminal, TestTubeDiagonal, X } from "lucide-react";
import { certKey, certUrl, certificationEnquiry, providers, roles, whatsappUrl, type Certification } from "@/lib/certifications";
import { catalogueCategories, catalogueLevels, filterCatalogue, inCatalogueCategory, orderedProviders, popularCertKeys, type CatalogueSort } from "@/lib/catalogue";
import ProviderMark from "./ProviderMark";
import { WhatsAppIcon } from "./WhatsAppConcierge";

type Filters = { query: string; provider: string; category: string; level: string; sort: CatalogueSort };
const defaults: Filters = { query: "", provider: "all", category: "All fields", level: "all", sort: "popular" };
const fields = [
  { category: "Project Management & Agile", title: "Project management", detail: "PMP · Scrum · SAFe · ITIL", Icon: BriefcaseBusiness, color: "#c5b4ff" },
  { category: "Cloud", title: "Cloud computing", detail: "AWS · Azure · Google Cloud", Icon: Cloud, color: "#83cfff" },
  { category: "AI", title: "AI & generative AI", detail: "AI engineering · Business AI", Icon: Sparkles, color: "#bda7ff" },
  { category: "Data & Analytics", title: "Data & analytics", detail: "Databricks · Snowflake · Fabric", Icon: Database, color: "#72dbc8" },
  { category: "Cybersecurity", title: "Cybersecurity", detail: "CompTIA · EC-Council · ISACA", Icon: ShieldCheck, color: "#f3b593" },
  { category: "Business Apps & Automation", title: "Business applications", detail: "Salesforce · ServiceNow · SAP", Icon: Blocks, color: "#e9b4e0" },
  { category: "Networking", title: "Networking", detail: "Cisco · Juniper · Fortinet", Icon: Network, color: "#8ecde8" },
  { category: "Testing & QA", title: "Software testing", detail: "ISTQB Foundation · AI Testing", Icon: TestTubeDiagonal, color: "#a4d7b2" },
  { category: "DevOps & Linux", title: "DevOps & Linux", detail: "Kubernetes · Terraform · Linux", Icon: Terminal, color: "#d7ca93" },
  { category: "Business Analysis & Architecture", title: "Analysis & architecture", detail: "IIBA · TOGAF", Icon: Layers3, color: "#a9bfff" },
  { category: "Quality & Six Sigma", title: "Quality & Six Sigma", detail: "ASQ Green Belt · Black Belt", Icon: Award, color: "#e0c28e" },
];
const spotlight = [
  { key: "pmi/pmp", title: "PMP®", subtitle: "Project Management Professional", description: "For experienced professionals ready to lead complex projects.", tag: "PROJECT LEADERSHIP", className: "pmp", Icon: BriefcaseBusiness },
  { key: "aws/solutions-architect-associate", title: "AWS Solutions Architect", subtitle: "Associate · SAA-C03", description: "Build your foundation in resilient, secure cloud architecture.", tag: "CLOUD ARCHITECTURE", className: "aws", Icon: Cloud },
  { key: "microsoft/azure-administrator", title: "Azure Administrator", subtitle: "Associate · AZ-104", description: "Develop your path in Azure infrastructure and operations.", tag: "CLOUD OPERATIONS", className: "azure", Icon: Blocks },
];
const shortNames: Record<string, string> = { "google-cloud/associate-cloud-engineer": "Google Cloud ACE", "salesforce/platform-administrator": "Salesforce Administrator", "servicenow/certified-system-administrator": "ServiceNow CSA" };
const providerName = (id: string) => providers.find(p => p.id === id)?.name || id;
const audience = (c: Certification) => Object.keys(c.roles).slice(0, 2).map(id => roles.find(r => r.id === id)?.name).filter(Boolean).join(" · ");

export default function GlobalCatalogue({ items }: { items: Certification[] }) {
  const searchParams = useSearchParams();
  const filters = useMemo<Filters>(() => ({
    query: searchParams.get("q") || "",
    provider: providers.some(p => p.id === searchParams.get("provider")) ? searchParams.get("provider")! : "all",
    category: catalogueCategories.find(c => c === searchParams.get("category")) || "All fields",
    level: catalogueLevels.find(l => l === searchParams.get("level")) || "all",
    sort: searchParams.get("sort") === "name" ? "name" : searchParams.get("sort") === "provider" ? "provider" : "popular",
  }), [searchParams]);
  const { query, provider, category, level, sort } = filters;
  const [showFields, setShowFields] = useState(false);
  const [showProviders, setShowProviders] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [expanded, setExpanded] = useState({ key: "", count: 12 });
  const [selected, setSelected] = useState<string[]>([]);
  const comparison = useRef<HTMLDialogElement>(null);
  const matches = useMemo(() => filterCatalogue(items, filters), [items, filters]);
  const counts = useMemo(() => new Map(providers.map(p => [p.id, items.filter(c => c.provider === p.id).length])), [items]);
  const fieldCounts = useMemo(() => new Map(fields.map(f => [f.category, items.filter(c => inCatalogueCategory(c, f.category)).length])), [items]);
  const currentProvider = providers.find(p => p.id === provider);
  const isFiltered = Boolean(query || provider !== "all" || category !== "All fields" || level !== "all");
  const filterKey = JSON.stringify(filters);
  const visibleCount = expanded.key === filterKey ? expanded.count : 12;
  const displayed = matches.slice(0, visibleCount);
  const compared = selected.map(key => items.find(c => certKey(c) === key)).filter((c): c is Certification => Boolean(c));
  const filterCount = Number(provider !== "all") + Number(category !== "All fields") + Number(level !== "all");
  function jump(id: string) {
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }));
  }
  function update(change: Partial<Filters>, scroll = false) {
    const next = { ...filters, ...change };
    const url = new URL(window.location.href);
    for (const [key, value, fallback] of [["q", next.query, ""], ["provider", next.provider, "all"], ["category", next.category, "All fields"], ["level", next.level, "all"], ["sort", next.sort, "popular"]]) {
      if (value !== fallback) url.searchParams.set(key, value); else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", url);
    if (scroll) jump("all-certifications");
  }
  function chooseProvider(id: string) { update({ ...defaults, provider: id }, true); }
  function toggleCompare(key: string) { setSelected(current => current.includes(key) ? current.filter(k => k !== key) : current.length < 3 ? [...current, key] : current); }
  function FilterControls() {
    return <>
      <label className="cc-control"><span>Provider</span><select aria-label="Filter by provider" value={provider} onChange={e => update({ provider: e.target.value })}><option value="all">All {providers.length} providers</option>{orderedProviders.map(p => <option value={p.id} key={p.id}>{p.name} ({counts.get(p.id)})</option>)}</select></label>
      <label className="cc-control"><span>Certification level</span><select aria-label="Filter by certification level" value={level} onChange={e => update({ level: e.target.value })}><option value="all">All levels</option>{catalogueLevels.map(l => <option key={l}>{l}</option>)}</select></label>
      <label className="cc-control cc-mobile-category"><span>Career field</span><select aria-label="Filter by field" value={category} onChange={e => update({ category: e.target.value })}>{catalogueCategories.map(c => <option key={c}>{c}</option>)}</select></label>
      <div className="cc-field-filter"><span>Career field</span><button aria-pressed={category === "All fields"} onClick={() => update({ category: "All fields" })}><Compass size={17}/> All fields <small>{items.length}</small></button>{fields.map(({ category: field, title, Icon }) => <button key={field} aria-pressed={category === field} onClick={() => update({ category: field })}><Icon size={17}/><span>{title}</span><small>{fieldCounts.get(field)}</small></button>)}</div>
    </>;
  }
  return <main className="cc-page">
    <header className="cc-hero">
      <div className="cc-wrap">
        <div className="cc-breadcrumb"><Link href="/">Home</Link><span>/</span><span>Certification directory</span></div>
        <div className="cc-hero-grid">
          <div className="cc-hero-copy"><p className="cc-eyebrow"><span/> YOUR NEXT CHAPTER STARTS HERE</p><h1>Big ambitions.<br/><em>The right certification.</em></h1><p>Find the credential that fits your next move.<br className="cc-desktop-break"/> From project leadership to cloud, AI and beyond.</p><div className="cc-hero-stats"><span><strong>{items.length}</strong> certifications</span><i/><span><strong>{providers.length}</strong> providers</span><i/><span><strong>{fields.length}</strong> career fields</span></div></div>
          <aside className="cc-path-card" aria-label="Help choosing a certification"><div className="cc-path-top"><span className="cc-path-icon"><Compass size={27}/></span><span>YOUR CAREER. YOUR DIRECTION.</span><ArrowUpRight size={20}/></div><h2>A clearer path<br/>to what’s next.</h2><p>Start with your role and experience. Explore certifications that fit.</p><Link href="/certifications">Find my certification path <ArrowRight size={19}/></Link><div className="cc-path-line"><span>01 <b>Your role</b></span><i/><span>02 <b>Your level</b></span><i/><span>03 <b>Your path</b></span></div></aside>
        </div>
        <form className="cc-search" onSubmit={e => { e.preventDefault(); jump("all-certifications"); }} role="search"><Search size={24}/><label className="sr-only" htmlFor="catalogue-search">Search all certifications</label><input id="catalogue-search" type="search" autoComplete="off" value={query} placeholder="Which certification are you looking for?" onChange={e => update({ query: e.target.value })}/>{query && <button type="button" className="cc-search-clear" aria-label="Clear search" onClick={() => update({ query: "" })}><X size={19}/></button>}<button className="cc-search-submit" type="submit">Explore <ArrowRight size={19}/></button></form>
        <div className="cc-search-hints"><span>Try a search</span>{["PMP", "AWS", "ServiceNow", "ISTQB", "SAP"].map(term => <button key={term} onClick={() => update({ ...defaults, query: term }, true)}>{term}<ArrowUpRight size={12}/></button>)}<span className="cc-search-help">Exam names, codes, skills or providers</span></div><Link className="cc-mobile-path" href="/certifications"><Compass size={17}/> Not sure? Find my certification path <ArrowRight size={16}/></Link>
      </div>
    </header>
    <nav className="cc-section-nav" aria-label="Explore this page"><div className="cc-wrap"><a href="#popular-certifications" onClick={isFiltered ? e => { e.preventDefault(); update(defaults); jump("popular-certifications"); } : undefined}><Sparkles size={16}/> Popular picks</a><a href="#career-fields" onClick={isFiltered ? e => { e.preventDefault(); update(defaults); jump("career-fields"); } : undefined}>By career field</a><a href="#all-certifications">All certifications <span>{items.length}</span></a><a href="#certification-providers">By provider</a><a href="#catalogue-search" className="cc-nav-search" aria-label="Back to certification search"><Search size={18}/></a></div></nav>
    {!isFiltered && <>
      <section className="cc-wrap cc-section" id="popular-certifications" aria-labelledby="popular-title">
        <div className="cc-section-title"><div><span className="cc-eyebrow">THE SHORTLIST</span><h2 id="popular-title">Popular for a reason.</h2></div><a href="#all-certifications">Explore all certifications <ArrowUpRight size={18}/></a></div>
        <div className="cc-spotlights">{spotlight.map(feature => {
          const c = items.find(c => certKey(c) === feature.key); if (!c) return null;
          return <article className={`cc-spotlight cc-spotlight-${feature.className}`} key={feature.key}><div className="cc-spotlight-top"><ProviderMark provider={c.provider}/><span>{c.level}</span></div><div className="cc-spotlight-art" aria-hidden="true"><feature.Icon strokeWidth={1.2}/><span>{feature.tag}</span><i/><i/></div><div className="cc-spotlight-copy"><h3><Link href={certUrl(c)}>{feature.title}</Link></h3><span>{feature.subtitle}</span><p>{feature.description}</p></div><div className="cc-spotlight-actions"><Link href={certUrl(c)} aria-label={`Explore ${c.name}`}>Explore certification <ArrowUpRight size={18}/></Link><a aria-label={`Get ${feature.title} pricing on WhatsApp`} href={certificationEnquiry([c])} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={19}/></a></div></article>;
        })}</div>
        <div className="cc-also"><span>Also on the shortlist</span>{popularCertKeys.slice(3, 6).map(key => { const c = items.find(c => certKey(c) === key); return c ? <Link key={key} href={certUrl(c)}><ProviderMark compact provider={c.provider}/><span>{shortNames[key]}</span><ArrowUpRight size={15}/></Link> : null; })}</div>
      </section>
      <section className="cc-wrap cc-section cc-fields-section" id="career-fields" aria-labelledby="fields-title"><div className="cc-section-title"><div><span className="cc-eyebrow">FOLLOW YOUR DIRECTION</span><h2 id="fields-title">What do you want to build?</h2></div><p>Choose a field. Find your next credential.</p></div><div className="cc-fields-grid">{fields.slice(0, showFields ? fields.length : 6).map(({ category: field, title, detail, Icon, color }) => <button key={field} onClick={() => update({ ...defaults, category: field }, true)} style={{ "--field-color": color } as CSSProperties}><span className="cc-field-icon"><Icon size={24}/></span><span className="cc-field-copy"><strong>{title}</strong><small>{detail}</small></span><span className="cc-field-count">{fieldCounts.get(field)}<ArrowUpRight size={17}/></span></button>)}</div><button className="cc-more-fields" aria-expanded={showFields} onClick={() => setShowFields(v => !v)}>{showFields ? "Show main career fields" : `See all ${fields.length} career fields`}<ChevronDown size={17} className={showFields ? "cc-rotate" : ""}/></button></section>
    </>}
    <section className="cc-wrap cc-section cc-catalogue" id="all-certifications" aria-labelledby="catalogue-title">
      <div className="cc-section-title"><div><span className="cc-eyebrow">YOUR CERTIFICATION DIRECTORY</span><h2 id="catalogue-title">{currentProvider ? currentProvider.name : category !== "All fields" ? fields.find(f => f.category === category)?.title : query ? "Let’s find your certification." : "Every ambition. Every option."}</h2></div><p>Select up to 3 certifications to compare.</p></div>
      <button className="cc-filter-toggle cc-mobile-refine" aria-expanded={mobileFilters} aria-controls="catalogue-filter-controls" onClick={() => setMobileFilters(v => !v)}><SlidersHorizontal size={17}/> {mobileFilters ? "Hide filters" : "Filter certifications"}{filterCount > 0 && <span>{filterCount}</span>}<ChevronDown size={16}/></button>
      <div className="cc-catalogue-layout"><aside className={`cc-filters ${mobileFilters ? "cc-filters-open" : ""}`} aria-label="Catalogue filters"><div className="cc-filter-heading"><SlidersHorizontal size={18}/><strong>Refine your search</strong>{isFiltered && <button onClick={() => update(defaults)}>Reset</button>}</div><div className="cc-filter-controls" id="catalogue-filter-controls">{FilterControls()}<Link className="cc-filter-help" href="/certifications"><GraduationCap size={24}/><strong>Not sure where to start?</strong><span>Get a path for your role.</span><ArrowRight size={18}/></Link></div></aside>
        <div className="cc-results-area">
          <div className="cc-toolbar"><p role="status" aria-live="polite"><strong>{matches.length}</strong> certification{matches.length === 1 ? "" : "s"}{query && <span> for “{query}”</span>}</p><label className="cc-sort"><span className="sr-only">Sort certifications</span><select aria-label="Sort certifications" value={sort} onChange={e => update({ sort: e.target.value as CatalogueSort })}><option value="popular">Popular first</option><option value="provider">By provider</option><option value="name">Name A–Z</option></select><ChevronDown size={15}/></label></div>
          {isFiltered && <div className="cc-applied" aria-label="Active filters">{query && <button onClick={() => update({ query: "" })}>Search: {query}<X size={14}/></button>}{provider !== "all" && <button onClick={() => update({ provider: "all" })}>{providerName(provider)}<X size={14}/></button>}{category !== "All fields" && <button onClick={() => update({ category: "All fields" })}>{category}<X size={14}/></button>}{level !== "all" && <button onClick={() => update({ level: "all" })}>{level}<X size={14}/></button>}<button className="cc-clear-all" onClick={() => update(defaults, true)}>Clear all</button></div>}
          {currentProvider && <p className="cc-provider-note">{currentProvider.description}</p>}
          <div className="cc-results">{displayed.map(c => {
            const key = certKey(c); const p = providers.find(p => p.id === c.provider)!; const checked = selected.includes(key);
            return <article className="cc-cert" key={key} style={{ "--brand-color": p.color } as CSSProperties}><div className="cc-cert-brand"><button onClick={() => chooseProvider(c.provider)} aria-label={`Show all ${p.name} certifications`}><ProviderMark provider={c.provider}/></button><span>{c.level}</span></div><div className="cc-cert-content"><p className="cc-cert-code">{c.exam}</p><h3><Link href={certUrl(c)}>{c.name}</Link></h3><p className="cc-cert-summary">{c.why}</p><div className="cc-skills">{c.skills.slice(0, 2).map(skill => <span key={skill}>{skill}</span>)}</div>{(c.access || c.status) && <p className="cc-access">{c.access || "Beta exam"}</p>}</div><div className="cc-cert-actions"><Link href={certUrl(c)} aria-label={`View ${c.name} details`}>View details <ArrowUpRight size={17}/></Link><a href={certificationEnquiry([c])} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${c.name} on WhatsApp`}><WhatsAppIcon size={17}/> Enquire</a></div><label className="cc-compare-check"><input type="checkbox" aria-label={`Compare ${c.name}`} checked={checked} disabled={!checked && selected.length >= 3} onChange={() => toggleCompare(key)}/><span>{checked ? "Added to comparison" : "Compare"}</span><GitCompareArrows size={14}/></label></article>;
          })}</div>
          {!matches.length && <div className="cc-empty"><Search size={34}/><h3>Let’s try a different search.</h3><p>No certifications match this combination. Remove a filter or try an exam name such as PMP, CTFL or AZ-104.</p><button onClick={() => update(defaults, true)}>Show all certifications <ArrowRight size={18}/></button></div>}
          {matches.length > displayed.length && <div className="cc-load-more"><p>Showing {displayed.length} of {matches.length} certifications</p><div><button onClick={() => setExpanded({ key: filterKey, count: visibleCount + 12 })}>Show 12 more <ArrowDown size={17}/></button><button onClick={() => setExpanded({ key: filterKey, count: matches.length })}>Show all {matches.length}</button></div></div>}
          {matches.length > 0 && matches.length <= displayed.length && <p className="cc-end-results"><Check size={16}/> You’re viewing all {matches.length} matching certification{matches.length === 1 ? "" : "s"}.</p>}
        </div>
      </div>
    </section>
    <section className="cc-wrap cc-section cc-providers" id="certification-providers" aria-labelledby="providers-title"><div className="cc-section-title"><div><span className="cc-eyebrow">FIND YOUR ECOSYSTEM</span><h2 id="providers-title">The names you know.<br/>The options you need.</h2></div><p>{providers.length} providers. One place to explore.</p></div><div className="cc-provider-grid">{orderedProviders.slice(0, showProviders ? orderedProviders.length : 12).map(p => <button key={p.id} onClick={() => chooseProvider(p.id)}><ProviderMark provider={p.id}/><span>{counts.get(p.id)} certification{counts.get(p.id) === 1 ? "" : "s"}<ArrowUpRight size={16}/></span></button>)}</div><button className="cc-more-fields" aria-expanded={showProviders} onClick={() => setShowProviders(v => !v)}>{showProviders ? "Show featured providers" : `Browse all ${providers.length} providers`}<ChevronDown size={17} className={showProviders ? "cc-rotate" : ""}/></button></section>
    <section className="cc-wrap cc-section cc-guidance"><div className="cc-guidance-card"><span className="cc-guidance-symbol"><Compass size={54} strokeWidth={1.1}/></span><div><span className="cc-eyebrow">A LITTLE GUIDANCE GOES A LONG WAY</span><h2>Your next step,<br/>made simpler.</h2><p>Tell us your role, experience and the certification you’re considering. We’ll help with exam information, vouchers and your next steps.</p><div><a className="cc-primary-link" href={whatsappUrl("Hi Global Certs IT! Please help me choose a certification for my role and experience.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={19}/> Talk to us <ArrowUpRight size={17}/></a><span>Telugu & English</span></div></div></div><div className="cc-faq"><span className="cc-eyebrow">GOOD TO KNOW</span><h2>A few quick answers.</h2>{[{q:"Can I take the exam online?",a:"Many providers offer remotely proctored exams. Some credentials require a test centre, a course or a practical assessment. Open a certification’s details to check its exam format and official registration guidance."},{q:"How do I choose between certifications?",a:"Choose the platform used in your current or target role. Compare the level, skills and eligibility of up to three options here, or use the career path finder for a role-based starting point."},{q:"How do I get the price or an exam voucher?",a:"Tap Enquire on a certification. WhatsApp opens with the exam name already included, so you can ask us about current pricing, voucher availability and booking steps."}].map(f => <details key={f.q}><summary>{f.q}<ChevronDown size={17}/></summary><p>{f.a}</p></details>)}</div></section>
    {selected.length > 0 && <div className="cc-compare-bar" role="region" aria-label="Certification comparison selection"><div><GitCompareArrows size={21}/><strong>{selected.length}/3 selected</strong><span>{compared.map(c => <button key={certKey(c)} onClick={() => toggleCompare(certKey(c))} aria-label={`Remove ${c.name} from comparison`}>{c.exam}<X size={13}/></button>)}</span></div><button className="cc-compare-launch" disabled={selected.length < 2} onClick={() => comparison.current?.showModal()}>{selected.length < 2 ? "Select one more" : "Compare now"}<ArrowRight size={17}/></button><button className="cc-compare-clear" aria-label="Clear comparison" onClick={() => setSelected([])}><X size={20}/></button></div>}
    <dialog ref={comparison} className="cc-compare-dialog" aria-labelledby="comparison-title" onClick={e => { if (e.target === e.currentTarget) comparison.current?.close(); }}><header><div><span className="cc-eyebrow">MAKE AN INFORMED CHOICE</span><h2 id="comparison-title">Find your best fit.</h2><p>Compare the requirements before deciding.</p></div><button autoFocus aria-label="Close certification comparison" onClick={() => comparison.current?.close()}><X size={24}/></button></header><p className="cc-comparison-hint">Swipe the table to see each certification <ArrowRight size={14}/></p><div className="cc-comparison-scroll" tabIndex={0} role="region" aria-label="Comparison table, scroll horizontally on small screens" data-lenis-prevent><table style={{ minWidth: 130 + compared.length * 210 }}><thead><tr><th scope="col">Certification</th>{compared.map(c => <th scope="col" key={certKey(c)}><ProviderMark provider={c.provider}/><h3>{c.name}</h3></th>)}</tr></thead><tbody>{[{ label: "Level", value: (c: Certification) => c.level }, { label: "Relevant roles", value: audience }, { label: "Skills covered", value: (c: Certification) => c.skills.join(" · ") }, { label: "Readiness", value: (c: Certification) => c.readiness }, { label: "Eligibility", value: (c: Certification) => c.eligibility }, { label: "Exam format", value: (c: Certification) => c.examMode || "Check official exam delivery options in the certification details." }].map(row => <tr key={row.label}><th scope="row">{row.label}</th>{compared.map(c => <td key={certKey(c)}>{row.value(c)}</td>)}</tr>)}<tr><th scope="row">Next step</th>{compared.map(c => <td key={certKey(c)}><Link href={certUrl(c)}>Full details <ArrowUpRight size={15}/></Link><a href={certificationEnquiry([c])} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17}/> Enquire</a></td>)}</tr></tbody></table></div></dialog>
  </main>;
}
