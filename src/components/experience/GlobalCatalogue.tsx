"use client";
import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, Compass, Home, MessageCircle, Search, X } from "lucide-react";
import { certKey, certUrl, certificationEnquiry, providers, type Certification } from "@/lib/certifications";
import { catalogueCategories, filterCatalogue, orderedProviders, popularCertKeys, type CatalogueSort } from "@/lib/catalogue";
import ProviderMark from "./ProviderMark";

type Filters = { query: string; provider: string; category: string; sort: CatalogueSort };
const defaults: Filters = {query: "", provider: "all", category: "All fields", sort: "popular"};
export default function GlobalCatalogue({items}: {items: Certification[]}) {
  const searchParams = useSearchParams();
  const filters = useMemo<Filters>(() => ({
    query: searchParams.get("q") || "",
    provider: providers.some(p => p.id === searchParams.get("provider")) ? searchParams.get("provider")! : "all",
    category: catalogueCategories.find(c => c === searchParams.get("category")) || "All fields",
    sort: searchParams.get("sort") === "name" ? "name" : searchParams.get("sort") === "provider" ? "provider" : "popular",
  }), [searchParams]);
  const [showProviders, setShowProviders] = useState(false);
  const {query, provider, category, sort} = filters;
  const matches = useMemo(() => filterCatalogue(items, filters), [items, filters]);
  const counts = useMemo(() => new Map(providers.map(p => [p.id, items.filter(c => c.provider === p.id).length])), [items]);
  const popular = popularCertKeys.slice(0, 6).map(key => items.find(c => certKey(c) === key)).filter((c): c is Certification => Boolean(c));
  const currentProvider = providers.find(p => p.id === provider);
  const isFiltered = Boolean(query || provider !== "all" || category !== "All fields");
  function update(change: Partial<Filters>) {
    const next = {...filters, ...change};
    const url = new URL(window.location.href);
    for (const [key, value, fallback] of [["q",next.query,""],["provider",next.provider,"all"],["category",next.category,"All fields"],["sort",next.sort,"popular"]]) {
      if (value !== fallback) url.searchParams.set(key,value); else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", url);
  }
  function reset() { update(defaults); }
  function chooseProvider(id: string) {
    update({...defaults, provider: id});
    setShowProviders(false);
    document.getElementById("catalogue-search")?.focus({preventScroll: true});
  }
  return <main className="global-catalogue catalogue-hub">
    <section className="catalogue-intro gc-container">
      <nav className="catalogue-breadcrumb" aria-label="Breadcrumb"><Link href="/"><Home size={16}/> Home</Link><span>/</span><span>All certifications</span></nav>
      <div className="catalogue-heading"><div><p className="catalogue-eyebrow">GLOBAL CERTS IT · CERTIFICATION DIRECTORY</p><h1>All your certifications.<br/><span>One place to explore.</span></h1><p>Search an exam, choose your field, or browse a provider. Popular certifications come first.</p></div><div className="catalogue-total"><strong>{items.length}</strong><span>certifications across<br/>{orderedProviders.filter(p => counts.get(p.id)).length} providers</span><Link href="/certifications">Help me choose <Compass size={17}/></Link></div></div>
      <nav className="catalogue-popular" aria-label="Popular certification shortcuts"><span>Quick links</span>{popular.map(c => <Link key={certKey(c)} href={certUrl(c)}>{c.provider === "aws" ? "AWS SAA" : c.provider === "microsoft" ? "Azure AZ-104" : c.provider === "google-cloud" ? "Google Cloud ACE" : c.provider === "salesforce" ? "Salesforce Admin" : c.provider === "servicenow" ? "ServiceNow CSA" : c.exam}<ArrowUpRight size={14}/></Link>)}</nav>
    </section>
    <section className="catalogue-workspace gc-container" id="all-certifications" aria-label="Certification catalogue">
      <div className="catalogue-controls">
        <label className="catalogue-search"><Search size={21}/><span className="sr-only">Search all certifications</span><input id="catalogue-search" aria-label="Search all certifications" type="search" value={query} placeholder="Search exam, skill or provider — PMP, Azure, ISTQB…" onChange={e => update({query: e.target.value})}/>{query && <button aria-label="Clear search" onClick={() => update({query: ""})}><X size={19}/></button>}</label>
        <label className="catalogue-select"><span>Provider</span><select value={provider} onChange={e => update({provider: e.target.value})} aria-label="Filter by provider"><option value="all">All providers</option>{orderedProviders.map(p => <option key={p.id} value={p.id}>{p.name} ({counts.get(p.id) || 0})</option>)}</select></label>
        <label className="catalogue-select catalogue-sort"><span>Sort by</span><select value={sort} onChange={e => update({sort: e.target.value as CatalogueSort})} aria-label="Sort certifications"><option value="popular">Popular first</option><option value="provider">Provider order</option><option value="name">Name A–Z</option></select></label>
      </div>
      <label className="catalogue-select catalogue-mobile-field"><span>Field</span><select value={category} onChange={e => update({category: e.target.value})} aria-label="Filter by field">{catalogueCategories.map(g => <option key={g} value={g}>{g}</option>)}</select></label>
      <div className="catalogue-fields" role="group" aria-label="Filter by field">{catalogueCategories.map(g => <button key={g} aria-pressed={g === category} onClick={() => update({category: g})}>{g}</button>)}</div>
      <div className="catalogue-provider-toggle"><button aria-expanded={showProviders} aria-controls="catalogue-provider-directory" onClick={() => setShowProviders(value => !value)}>Browse all {providers.length} providers <ChevronDown size={18} className={showProviders ? "is-open" : ""}/></button><span>Choose a provider to see its certifications here.</span></div>
      {showProviders && <div className="catalogue-provider-grid" id="catalogue-provider-directory">{orderedProviders.map(p => <button key={p.id} onClick={() => chooseProvider(p.id)} aria-pressed={provider === p.id}><ProviderMark provider={p.id}/><span>{counts.get(p.id) || 0} certifications <ArrowRight size={14}/></span></button>)}</div>}
      <div className="catalogue-result-heading"><div><h2>{currentProvider ? `${currentProvider.name} certifications` : category !== "All fields" ? category : "Explore all certifications"}</h2><p role="status" aria-live="polite">{matches.length} certification{matches.length === 1 ? "" : "s"}{query && ` matching “${query}”`}{sort === "popular" && " · Popular first"}</p></div>{isFiltered && <button className="catalogue-reset" onClick={reset}>Clear all filters <X size={16}/></button>}</div>
      {currentProvider && <p className="catalogue-provider-description">{currentProvider.description}</p>}
      <div className="catalogue-results">{matches.map(c => {
        const p = providers.find(p => p.id === c.provider)!;
        return <article className="catalogue-cert" key={certKey(c)} style={{"--provider-accent": p.color} as CSSProperties}>
          <div className="catalogue-cert-top"><button onClick={() => chooseProvider(c.provider)} aria-label={`Show all ${p.name} certifications`}><ProviderMark provider={c.provider}/></button><span className="catalogue-level">{c.level}</span></div>
          <div className="catalogue-cert-body"><p className="catalogue-exam">{c.exam}</p><h3><Link href={certUrl(c)}>{c.name}</Link></h3><p>{c.why}</p><div className="catalogue-skills">{c.skills.slice(0,3).map(skill => <span key={skill}>{skill}</span>)}</div>{(c.access || c.status) && <p className="catalogue-access">{c.access || "Beta exam"}</p>}</div>
          <div className="catalogue-cert-actions"><Link href={certUrl(c)} aria-label={`View ${c.name} details`}>View details <ArrowRight size={17}/></Link><a href={certificationEnquiry([c])} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${c.name} on WhatsApp`}><MessageCircle size={16}/> WhatsApp enquiry</a></div>
        </article>;
      })}</div>
      {!matches.length && <div className="catalogue-empty"><Search size={32}/><h3>No certifications match these filters.</h3><p>Try a shorter exam name or clear your provider and field filters.</p><button onClick={reset}>Show all certifications <ArrowRight size={17}/></button></div>}
      <div className="catalogue-footer"><p>Need help choosing? Compare certifications by your role and experience.</p><Link href="/certifications">Find my certification path <Compass size={18}/></Link><a href="#all-certifications">Back to search ↑</a></div>
    </section>
  </main>;
}
