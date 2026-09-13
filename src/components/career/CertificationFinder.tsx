"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  ChevronDown,
  Columns3,
  Compass,
  ExternalLink,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  X,
  Bookmark,
  Share2,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import RoleIcon from "./Icons";
import {
  certifications,
  certKey,
  certUrl,
  experiences,
  fitScore,
  getMatches,
  isAvailable,
  providers,
  providerById,
  REVIEWED_ON,
  roles,
  whatsappUrl,
  type Certification,
  type Experience,
} from "@/lib/certifications";

type Props = {
  initialRole?: string;
  initialProvider?: string;
  initialExperience?: Experience;
  initialQuery?: string;
  initialAi?: boolean;
  initialSaved?: string[];
  initialShortlist?: boolean;
  today: string;
  compact?: boolean;
};
export default function CertificationFinder({
  initialRole = "all",
  initialProvider = "all",
  initialExperience = "all",
  initialQuery = "",
  initialAi = false,
  initialSaved = [],
  initialShortlist = false,
  today,
  compact = false,
}: Props) {
  const [role, setRole] = useState(initialRole),
    [provider, setProvider] = useState(initialProvider),
    [experience, setExperience] = useState<Experience>(initialExperience),
    [query, setQuery] = useState(initialQuery),
    [aiOnly, setAiOnly] = useState(initialAi),
    [includeBeta, setIncludeBeta] = useState(true),
    [savedOnly, setSavedOnly] = useState(initialShortlist);
  const [saved, setSaved] = useState<string[]>(initialSaved),
    [compared, setCompared] = useState<string[]>([]),
    [compareOpen, setCompareOpen] = useState(false),
    [notice, setNotice] = useState(""),
    [limit, setLimit] = useState(12),
    [sort, setSort] = useState("fit");
  const dialog = useRef<HTMLDialogElement>(null),
    hydrated = useRef(false);
  useEffect(() => {
    try {
      const local: unknown = JSON.parse(
        localStorage.getItem("gcit-shortlist-v1") || "[]",
      );
      if (Array.isArray(local))
        setSaved((s) =>
          Array.from(
            new Set([
              ...s,
              ...local.filter(
                (v): v is string =>
                  typeof v === "string" &&
                  certifications.some(
                    (c) => certKey(c) === v && isAvailable(c, today),
                  ),
              ),
            ]),
          ),
        );
    } catch {}
    hydrated.current = true;
  }, [today]);
  useEffect(() => {
    if (hydrated.current)
      try {
        localStorage.setItem("gcit-shortlist-v1", JSON.stringify(saved));
      } catch {}
  }, [saved]);
  useEffect(() => {
    if (compareOpen) dialog.current?.showModal();
    else dialog.current?.close();
  }, [compareOpen]);
  const activeRole = roles.find((r) => r.id === role);
  const matches = useMemo(() => {
    const list = getMatches({
      role,
      experience,
      provider,
      query,
      aiOnly,
      includeBeta,
      today,
    }).filter((c) => !savedOnly || saved.includes(certKey(c)));
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "level")
      list.sort((a, b) => a.stage - b.stage || a.name.localeCompare(b.name));
    return list;
  }, [
    role,
    experience,
    provider,
    query,
    aiOnly,
    includeBeta,
    today,
    savedOnly,
    saved,
    sort,
  ]);
  const selected = certifications.filter(
    (c) => compared.includes(certKey(c)) && isAvailable(c, today),
  );
  const savedCerts = certifications.filter(
    (c) => saved.includes(certKey(c)) && isAvailable(c, today),
  );
  function reset() {
    setRole("all");
    setProvider(initialProvider);
    setExperience("all");
    setQuery("");
    setAiOnly(initialAi);
    setIncludeBeta(true);
    setSavedOnly(false);
    setLimit(12);
    setSort("fit");
  }
  function selectRole(id: string) {
    setRole(id);
    setLimit(12);
  }
  function toggleSaved(c: Certification) {
    const key = certKey(c);
    setSaved((v) =>
      v.includes(key) ? v.filter((x) => x !== key) : [...v, key],
    );
  }
  function toggleCompare(c: Certification) {
    const key = certKey(c);
    if (compared.includes(key)) {
      setCompared((v) => v.filter((x) => x !== key));
      return;
    }
    if (compared.length === 3) {
      setNotice(
        "You can compare three certifications at a time. Remove one to add another.",
      );
      return;
    }
    setCompared((v) => [...v, key]);
    setNotice("");
  }
  function enquiry(items: Certification[]) {
    return whatsappUrl(
      `Hi Global Certs IT! I would like certification guidance.\nRole: ${activeRole?.name || "Exploring roles"}\nExperience: ${experiences.find((e) => e.id === experience)?.label}\nPlatform: ${providerById(provider)?.name || "Open to advice"}\nShortlist:\n${items.map((c) => `• ${c.name} (${c.exam})`).join("\n")}\nPlease help me choose the right exam and confirm eligibility and voucher availability.`,
    );
  }
  async function share() {
    const params = new URLSearchParams();
    if (role !== "all") params.set("role", role);
    if (provider !== "all") params.set("provider", provider);
    if (experience !== "all") params.set("experience", experience);
    if (query) params.set("q", query);
    if (aiOnly) params.set("ai", "true");
    if (savedCerts.length) {
      params.set("saved", savedCerts.map(certKey).join(","));
      params.set("shortlist", "true");
    }
    const url = `${window.location.origin}/certifications?${params.toString()}`;
    try {
      await navigator.clipboard.writeText(url);
      setNotice("Link copied. It includes your filters and shortlist.");
    } catch {
      setNotice(`Copy this link: ${url}`);
    }
  }
  return (
    <div className="cf finder-page">
      <section className={`finder-intro ${compact ? "compact" : ""}`}>
        <div className="cf-shell">
          <div className="cf-eyebrow">
            <Compass size={15} />
            {initialProvider !== "all"
              ? `${providerById(initialProvider)?.name} CERTIFICATIONS`
              : "GLOBAL IT CERTIFICATION FINDER"}
          </div>
          <div className="intro-row">
            <div>
              <h1>
                Find your next
                <br />
                <span>global certification.</span>
              </h1>
              <p>
                {providerById(initialProvider)?.description ||
                  "Choose your role, experience and technology. Compare relevant certifications, check exam details and send your shortlist on WhatsApp."}
              </p>
            </div>
            <div className="review-stamp">
              <CheckCheck size={22} />
              <div>
                <strong>Official sources checked</strong>
                <span>13 September 2026</span>
              </div>
            </div>
          </div>
          <div className="finder-tabs">
            <span>
              <Compass size={17} /> Explore by role
            </span>
            <Link href="/ai-certifications">
              <Sparkles size={17} /> AI career pathways{" "}
              <ArrowUpRight size={15} />
            </Link>
            <button
              onClick={() => {
                setSavedOnly(!savedOnly);
                setLimit(12);
              }}
              aria-pressed={savedOnly}
            >
              <Bookmark size={17} /> My shortlist <b>{savedCerts.length}</b>
            </button>
          </div>
        </div>
      </section>
      <section className="cf-shell finder-content" id="finder">
        <div className="step-heading">
          <span className="step-number">01</span>
          <div>
            <h2>What do you want to do?</h2>
            <p>Choose your current role or the role you want next.</p>
          </div>
          <button
            className={`all-roles ${role === "all" ? "active" : ""}`}
            onClick={() => selectRole("all")}
            aria-pressed={role === "all"}
          >
            All roles
          </button>
        </div>
        <div className="role-grid">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => selectRole(r.id)}
              className={`role-tile ${r.id === role ? "selected" : ""}`}
              aria-pressed={r.id === role}
            >
              <span className="role-icon">
                <RoleIcon name={r.icon} />
              </span>
              <span>
                <strong>{r.name}</strong>
                <small>{r.description}</small>
              </span>
              {role === r.id && <Check size={15} className="role-check" />}
            </button>
          ))}
        </div>
        <div className="step-heading step-two">
          <span className="step-number">02</span>
          <div>
            <h2>Choose your experience and platform.</h2>
            <p>Your experience and technology stack make a difference.</p>
          </div>
        </div>
        <div className="filter-panel">
          <div className="filter-fields">
            <label>
              <span>YOUR EXPERIENCE</span>
              <div className="select-wrap">
                <select
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value as Experience);
                    setLimit(12);
                  }}
                  aria-label="Your experience"
                >
                  {experiences.map((e) => (
                    <option value={e.id} key={e.id}>
                      {e.label} · {e.detail}
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} />
              </div>
            </label>
            <label>
              <span>YOUR PLATFORM</span>
              <div className="select-wrap">
                <select
                  value={provider}
                  onChange={(e) => {
                    setProvider(e.target.value);
                    setLimit(12);
                  }}
                  aria-label="Your platform"
                >
                  <option value="all">All platforms · help me choose</option>
                  {providers.map((p) => (
                    <option value={p.id} key={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} />
              </div>
            </label>
            <label className="search-field">
              <span>LOOKING FOR SOMETHING?</span>
              <div>
                <Search size={17} />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setLimit(12);
                  }}
                  placeholder="Try DP-700, RAG, PMP…"
                  aria-label="Search certifications"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </label>
          </div>
          <div className="filter-toggles">
            <label>
              <input
                type="checkbox"
                checked={aiOnly}
                onChange={(e) => {
                  setAiOnly(e.target.checked);
                  setLimit(12);
                }}
              />
              <Sparkles size={15} /> AI certifications only
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeBeta}
                onChange={(e) => setIncludeBeta(e.target.checked)}
              />{" "}
              Include bookable beta exams
            </label>
            <button onClick={reset}>
              <RotateCcw size={14} /> Reset filters
            </button>
          </div>
        </div>
        {activeRole && (
          <aside className="role-advice">
            <span className="advice-icon">
              <RoleIcon name={activeRole.icon} />
            </span>
            <div>
              <strong>Choosing a certification for {activeRole.name}</strong>
              <p>{activeRole.advice}</p>
            </div>
            <a
              href={enquiry(matches.slice(0, 3))}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk it through <ArrowUpRight size={16} />
            </a>
          </aside>
        )}
        <div className="results-heading">
          <div>
            <span className="cf-eyebrow">YOUR OPTIONS</span>
            <h2>
              {savedOnly
                ? "Your shortlist"
                : activeRole
                  ? `${activeRole.name} certifications`
                  : "Explore the certification catalog"}{" "}
              <span>{matches.length}</span>
            </h2>
          </div>
          <div>
            <button className="share-button" onClick={share}>
              <Share2 size={15} /> Share
            </button>
            <label className="sort-select">
              <SlidersHorizontal size={15} />
              <select
                aria-label="Sort certifications"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="fit">Best fit first</option>
                <option value="level">Foundation first</option>
                <option value="name">A–Z</option>
              </select>
            </label>
          </div>
        </div>
        {notice && (
          <p className="cf-notice" role="status">
            {notice}
            <button
              aria-label="Dismiss notification"
              onClick={() => setNotice("")}
            >
              <X size={16} />
            </button>
          </p>
        )}
        <p className="rating-note">
          {role === "all"
            ? "Choose a role to see its fit rating."
            : "Fit ratings combine role relevance (70%) and experience readiness (30%)."}{" "}
          <a href="#ratings">
            How ratings work <ArrowUpRight size={12} />
          </a>
        </p>
        <div aria-live="polite" className="sr-only">
          {matches.length} certifications match your filters.
        </div>
        {matches.length ? (
          <div className="cert-grid">
            {matches.slice(0, limit).map((c, index) => {
              const p = providerById(c.provider)!;
              const key = certKey(c);
              const score = fitScore(c, role, experience);
              const isStretch =
                (experience === "beginner" && c.stage > 0) ||
                (experience === "working" && c.stage === 2);
              return (
                <article
                  className={`cert-card ${index === 0 && role !== "all" ? "top-match" : ""}`}
                  key={key}
                >
                  {index === 0 && role !== "all" && (
                    <div className="top-match-label">
                      <Sparkles size={13} /> HIGHEST MATCH FOR YOUR FILTERS
                    </div>
                  )}
                  <div className="cert-card-top">
                    <div className="provider-identity">
                      <span
                        className={`provider-mark p-${c.provider}`}
                        style={{ color: p.color }}
                      >
                        {p.mark}
                      </span>
                      <span>
                        {p.name}
                        <small>{c.exam}</small>
                      </span>
                    </div>
                    <button
                      className={`save-cert ${saved.includes(key) ? "is-saved" : ""}`}
                      onClick={() => toggleSaved(c)}
                      aria-label={`${saved.includes(key) ? "Remove" : "Save"} ${c.name}${saved.includes(key) ? " from shortlist" : " to shortlist"}`}
                      aria-pressed={saved.includes(key)}
                    >
                      <Bookmark
                        size={20}
                        fill={saved.includes(key) ? "currentColor" : "none"}
                      />
                    </button>
                  </div>
                  <div className="cert-tags">
                    <span>{c.level}</span>
                    {c.status && (
                      <span className="beta-tag">Beta · registration open</span>
                    )}
                    {c.fresh && <span className="new-tag">New / updated</span>}
                    {c.ai && (
                      <span className="ai-tag">
                        <Sparkles size={11} /> AI
                      </span>
                    )}
                  </div>
                  <h3>
                    <Link href={certUrl(c)}>{c.name}</Link>
                  </h3>
                  <p className="cert-why">{c.why}</p>
                  <div className="skill-tags">
                    {c.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="card-readiness">
                    <strong>
                      {isStretch ? "A stretch goal" : "BEFORE YOU BOOK"}
                    </strong>
                    <p>{c.readiness}</p>
                  </div>
                  <div className="cert-card-bottom">
                    <div className="fit-rating">
                      {role !== "all" ? (
                        <>
                          <Star size={15} fill="currentColor" />
                          <strong>
                            {score.toFixed(1)}
                            <small>/5</small>
                          </strong>
                          <span>role fit</span>
                        </>
                      ) : (
                        <>
                          <CheckCheck size={16} />
                          <span>Source checked</span>
                        </>
                      )}
                      <a
                        href={c.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Official source for ${c.name}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <label className="compare-check">
                      <input
                        type="checkbox"
                        checked={compared.includes(key)}
                        onChange={() => toggleCompare(c)}
                      />{" "}
                      Compare
                    </label>
                  </div>
                  <Link className="cert-details" href={certUrl(c)}>
                    Explore certification <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={32} />
            <h3>No certifications match yet.</h3>
            <p>
              {savedOnly
                ? "Save a certification with the bookmark button, or turn off other filters to see your shortlist."
                : "Try a different platform, a broader search, or another role. Retired exams are excluded."}
            </p>
            <button className="cf-btn cf-btn-dark" onClick={reset}>
              Reset filters <ArrowRight size={17} />
            </button>
          </div>
        )}
        {matches.length > limit && (
          <div className="load-more">
            <button
              className="cf-btn cf-btn-outline"
              onClick={() => setLimit((l) => l + 12)}
            >
              Show more certifications <ArrowDown size={17} />
            </button>
            <span>
              Showing {Math.min(limit, matches.length)} of {matches.length}
            </span>
          </div>
        )}
        {savedCerts.length > 0 && (
          <div className="shortlist-callout">
            <Bookmark size={25} />
            <div>
              <h3>Your next move is taking shape.</h3>
              <p>
                {savedCerts.length} saved certification
                {savedCerts.length !== 1 ? "s" : ""}. Get help choosing and
                checking exam availability.
              </p>
            </div>
            <a
              className="cf-btn cf-btn-dark"
              href={enquiry(savedCerts)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss my shortlist <MessageCircle size={17} />
            </a>
          </div>
        )}
        <div className="guidance-grid">
          <section id="ratings">
            <span className="cf-eyebrow">A RATING WITH A REASON</span>
            <h2>Relevance, explained.</h2>
            <p>
              These are Global Certs IT editorial fit ratings, not official
              provider rankings or learner reviews. A 5/5 role match is directly
              aligned with the role; 4/5 adds supporting skills. Experience
              adjusts the score to help you distinguish a practical next step
              from a stretch goal.
            </p>
            <p>
              With “Any experience”, ratings show role relevance alone. A
              credential supports your profile; practical skills, projects and
              your target employer’s technology still matter.
            </p>
          </section>
          <section>
            <span className="cf-eyebrow">KEEP YOUR CHOICE CURRENT</span>
            <h2>Know what you’re booking.</h2>
            <p>
              Official pages were checked on {REVIEWED_ON}. Bookable betas are
              labelled. Known retired exams are excluded from recommendations.
              Confirm exam versions, regional availability, eligibility and fees
              on the linked official page before paying.
            </p>
            <p>
              The catalog is curated and reviewed, not a live feed. New releases
              need another source review. Your saved shortlist stays in this
              browser.
            </p>
          </section>
        </div>
        {activeRole && (
          <div className="project-callout">
            <div>
              <span className="cf-eyebrow">TURN KNOWLEDGE INTO EVIDENCE</span>
              <h2>One certification. One real project.</h2>
              <p>{activeRole.project}</p>
            </div>
            <span className="project-symbol">
              <RoleIcon name={activeRole.icon} size={54} />
            </span>
          </div>
        )}
      </section>
      {compared.length > 0 && (
        <div
          className="compare-dock"
          role="region"
          aria-label="Certification comparison"
        >
          <span className="compare-dock-icon">
            <Columns3 size={21} />
          </span>
          <div>
            <strong>{compared.length} selected</strong>
            <small>Compare up to three</small>
          </div>
          <div className="compare-mini">
            {selected.map((c) => (
              <button
                key={certKey(c)}
                onClick={() => toggleCompare(c)}
                title={`Remove ${c.name}`}
                aria-label={`Remove ${c.name} from comparison`}
              >
                {providerById(c.provider)?.name}
                <X size={13} />
              </button>
            ))}
          </div>
          <button
            className="cf-btn cf-btn-mint"
            disabled={compared.length < 2}
            onClick={() => setCompareOpen(true)}
          >
            Compare <ArrowRight size={16} />
          </button>
          <button
            className="clear-compare"
            aria-label="Clear comparison"
            onClick={() => setCompared([])}
          >
            <X size={19} />
          </button>
        </div>
      )}
      <dialog
        ref={dialog}
        className="cf-compare-modal cf"
        onCancel={() => setCompareOpen(false)}
        onClick={(e) => {
          if (e.target === dialog.current) setCompareOpen(false);
        }}
      >
        <div className="modal-heading">
          <div>
            <span className="cf-eyebrow">SIDE BY SIDE</span>
            <h2>Make a confident choice.</h2>
          </div>
          <button
            aria-label="Close comparison"
            onClick={() => setCompareOpen(false)}
          >
            <X size={23} />
          </button>
        </div>
        <div className="comparison-scroll" data-lenis-prevent>
          <table>
            <caption className="sr-only">
              Compare selected certifications by relevance, skills, readiness
              and eligibility
            </caption>
            <thead>
              <tr>
                <th scope="col">Certification</th>
                {selected.map((c) => (
                  <th scope="col" key={certKey(c)}>
                    <small>{providerById(c.provider)?.name}</small>
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Exam", value: (c: Certification) => c.exam },
                { name: "Level", value: (c: Certification) => c.level },
                {
                  name: "Role fit",
                  value: (c: Certification) =>
                    role === "all"
                      ? "Select a role to rate"
                      : `${fitScore(c, role, experience).toFixed(1)} / 5`,
                },
                {
                  name: "Career relevance",
                  value: (c: Certification) => c.why,
                },
                {
                  name: "Skills",
                  value: (c: Certification) => c.skills.join(" · "),
                },
                { name: "Readiness", value: (c: Certification) => c.readiness },
                {
                  name: "Eligibility",
                  value: (c: Certification) => c.eligibility,
                },
                {
                  name: "Availability",
                  value: (c: Certification) =>
                    [
                      c.status === "Beta"
                        ? "Bookable beta"
                        : "Listed by provider",
                      c.note,
                    ]
                      .filter(Boolean)
                      .join(". "),
                },
              ].map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  {selected.map((c) => (
                    <td key={certKey(c)}>{row.value(c)}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row">Official details</th>
                {selected.map((c) => (
                  <td key={certKey(c)}>
                    <a
                      href={c.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View provider page <ExternalLink size={13} />
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <p>Source review: 13 September 2026 · Ratings are editorial.</p>
          <a
            className="cf-btn cf-btn-dark"
            href={enquiry(selected)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask about these exams <MessageCircle size={16} />
          </a>
        </div>
      </dialog>
    </div>
  );
}
