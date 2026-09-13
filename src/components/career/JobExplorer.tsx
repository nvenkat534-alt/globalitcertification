"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Globe2, MapPin, RefreshCw, Search } from "lucide-react";
import { careerById, careerPaths, jobBoardLinks } from "@/lib/career-paths";
import { isTechJob, type JobFeed } from "@/lib/job-types";
import { mentions } from "@/lib/resume-review";
import { CareerNav } from "./CareerHub";

export default function JobExplorer({ initialRole }: { initialRole?: string }) {
  const [role, setRole] = useState(careerById(initialRole || "")?.id || "tech");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState(false);
  const [source, setSource] = useState("all");
  const [feed, setFeed] = useState<JobFeed | null>(null);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(12);
  const [request, setRequest] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/jobs", { signal: controller.signal }).then(async response => {
      const data = await response.json();
      if (!Array.isArray(data.jobs) || !Array.isArray(data.sources)) throw new Error("Unexpected response");
      if (!controller.signal.aborted) {setFeed(data); setError(response.ok ? "" : "The job sources are temporarily unavailable. You can use the direct searches below.");}
    }).catch(e => {if (e.name !== "AbortError") setError("We couldn’t load the daily feed. Retry, or use the direct job-board searches below.");}).finally(() => {if (!controller.signal.aborted) setBusy(false);});
    return () => controller.abort();
  }, [request]);
  const path = careerById(role);
  const jobs = useMemo(() => (feed?.jobs || []).filter(j => (role !== "tech" || isTechJob(j)) && (!path || path.search.some(term => mentions(j.title + " " + j.tags.join(" "), term))) && (!query.trim() || query.trim().toLowerCase().split(/\s+/).every(q => `${j.searchText} ${j.company.toLowerCase()}`.includes(q))) && (!location.trim() || j.location.toLowerCase().includes(location.trim().toLowerCase())) && (!remote || j.remote) && (source === "all" || j.source === source)), [feed, path, role, query, location, remote, source]);
  const boards = jobBoardLinks(query || path?.title || "IT", location || "India");
  const reset = () => {setRole("tech"); setQuery(""); setLocation(""); setRemote(false); setSource("all"); setLimit(12);};
  return <main className="career-hub"><div className="gc-container"><CareerNav active="jobs"/><header className="ch-tool-hero"><span className="gc-kicker"><BriefcaseBusiness size={15}/> THE NEXT OPPORTUNITY</span><h1>Your skills.<br/><em>New possibilities.</em></h1><p>Browse daily listings, check the employer’s requirements and apply on the source site. Search Indian job boards directly for wider local coverage.</p></header>
    <section className="ch-job-boards"><div><span className="gc-kicker">INDIA & WIDER JOB SEARCH</span><h2>Take your search further.</h2><p>These links search external job boards for <b>{query || path?.title || "IT"}</b>{location && ` in ${location}`}. They are searches, not listings imported into this website.</p></div><div>{boards.map(b => <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer">Search {b.name}<ArrowUpRight size={17}/></a>)}</div></section>
    <section className="ch-section"><div className="ch-section-title"><div><span className="gc-kicker">DAILY SOURCE LISTINGS</span><h2>Find a role worth exploring.</h2></div><Link className="gc-text-link" href="/careers/resume">Prepare my résumé <ArrowUpRight size={16}/></Link></div>
      <div className="ch-job-filters"><label className="ch-field">Role<select value={role} onChange={e => {setRole(e.target.value); setLimit(12);}}><option value="tech">IT & digital roles</option><option value="all">All source listings</option>{careerPaths.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}</select></label><label className="ch-field">Keyword<div className="ch-search"><Search size={18}/><input value={query} onChange={e => {setQuery(e.target.value); setLimit(12);}} placeholder="SAP, company, skill…"/></div></label><label className="ch-field">Location text<div className="ch-search"><MapPin size={18}/><input value={location} onChange={e => {setLocation(e.target.value); setLimit(12);}} placeholder="India, Berlin, Worldwide…"/></div></label><label className="ch-field">Source<select value={source} onChange={e => {setSource(e.target.value); setLimit(12);}}><option value="all">Both sources</option><option value="remotive">Remotive</option><option value="arbeitnow">Arbeitnow</option></select></label></div><div className="ch-job-controls"><label className="ch-checkbox"><input type="checkbox" checked={remote} onChange={e => {setRemote(e.target.checked); setLimit(12);}}/> Remote-labelled roles only</label><button className="ch-inline-button" onClick={reset}>Reset filters</button></div>
      <div className="ch-feed-status"><div><span className="ch-live-dot"/><p>{busy ? "Loading source listings…" : feed ? `Feed checked ${new Date(feed.checkedAt).toLocaleString("en-GB", { timeZone: "UTC", day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })} UTC` : "Feed unavailable"}<small>Refreshed daily. Remotive publishes its public feed with a 24-hour delay.</small></p></div><button aria-label="Reload job feed" disabled={busy} onClick={() => {setBusy(true); setError(""); setRequest(n => n + 1);}}><RefreshCw size={17}/></button></div>
      {feed && <div className="ch-source-status">{feed.sources.map(s => <div key={s.id}><b>{s.name} · {s.status === "ok" ? `${s.count} recent source listings` : "Temporarily unavailable"}</b><p>{s.coverage}</p></div>)}</div>}
      {error && <p className="ch-error" role="alert">{error}</p>}<p className="ch-result-count" role="status">{busy ? "Checking available listings…" : `${jobs.length} matching ${jobs.length === 1 ? "listing" : "listings"} in these feeds`}</p>
      <div className="ch-jobs-grid">{jobs.slice(0, limit).map(j => <article className="ch-job-card" key={j.id}><div className="ch-job-card-top"><span>{j.company}</span><span className="ch-pill">{j.remote ? "Remote-labelled" : "Check work arrangement"}</span></div><h3>{j.title}</h3><p className="ch-job-location"><MapPin size={15}/>{j.location}</p><p>{j.excerpt}{j.excerpt.length >= 280 && "…"}</p><footer><div><span>Source: <a href={j.source === "remotive" ? "https://remotive.com/" : "https://www.arbeitnow.com/"} target="_blank" rel="noopener noreferrer">{j.source === "remotive" ? "Remotive" : "Arbeitnow"}</a></span><small>Posted {new Date(j.postedAt).toLocaleDateString("en-GB", { timeZone: "UTC", day: "numeric", month: "short", year: "numeric" })}</small></div><a href={j.url} target="_blank" rel="noopener noreferrer" className="gc-button gc-button-outline">View & apply <ArrowUpRight size={16}/></a></footer></article>)}</div>
      {!busy && jobs.length === 0 && <div className="ch-empty"><Globe2 size={35}/><h3>No matching listing in these feeds.</h3><p>This does not mean there are no jobs for your role. Broaden your filters or use the searches above, especially for SAP roles in India.</p><button className="gc-button gc-button-outline" onClick={reset}>Show IT & digital listings</button></div>}{jobs.length > limit && <button className="gc-button gc-button-light ch-load-more" onClick={() => setLimit(n => n + 12)}>Show 12 more listings</button>}
      <div className="ch-note">Listings are supplied by <a href="https://remotive.com/remote-jobs/api" target="_blank" rel="noopener noreferrer">Remotive</a> and <a href="https://www.arbeitnow.com/blog/job-board-api" target="_blank" rel="noopener noreferrer">Arbeitnow</a>. We show entries posted within the last 45 days. A source listing can close between refreshes. Remote work may still require a particular country, language or work authorisation; confirm eligibility and availability on the source page.</div>
    </section></div></main>;
}
