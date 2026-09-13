import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Code2,
  Compass,
  Layers3,
} from "lucide-react";
import {
  certifications,
  certUrl,
  providerById,
  isAvailable,
  type Experience,
} from "@/lib/certifications";
export default function AiPathways() {
  const paths: {
    id: string;
    title: string;
    subtitle: string;
    intro: string;
    role: string;
    experience: Experience;
    icon: typeof Compass;
    certs: string[];
    project: string;
  }[] = [
    {
      id: "begin",
      title: "Start with AI",
      subtitle: "FOUNDATIONS · 0–1 YEAR",
      intro:
        "Understand what AI can do, where it helps and the basics of working with it. Choose a technical or a business foundation.",
      role: "ai-engineer",
      experience: "beginner",
      icon: Compass,
      certs: [
        "aws/ai-practitioner",
        "microsoft/azure-ai-fundamentals",
        "google-cloud/generative-ai-leader",
        "oracle/agentic-ai-foundations",
      ],
      project:
        "Try a small AI use case and record where its answers work, fail or need a human check.",
    },
    {
      id: "build",
      title: "Build AI applications",
      subtitle: "PRACTITIONERS · 1–3 YEARS",
      intro:
        "Turn programming and platform skills into useful applications. Focus on agents, retrieval, integrations and evaluation.",
      role: "ai-engineer",
      experience: "working",
      icon: Code2,
      certs: [
        "microsoft/azure-ai-apps-agents",
        "microsoft/azure-ai-cloud-developer",
        "databricks/generative-ai-engineer",
        "databricks/context-engineer",
        "salesforce/agentforce-specialist",
        "microsoft/ai-agent-builder",
        "snowflake/snowpro-gen-ai",
      ],
      project:
        "Build an assistant with reliable retrieval, citations, access controls and a test set to measure answer quality.",
    },
    {
      id: "specialise",
      title: "Operate & specialise",
      subtitle: "EXPERIENCED PRACTITIONERS · 3+ YEARS",
      intro:
        "Build on real delivery experience. Show that you can deploy, secure, evaluate and improve production AI and ML systems.",
      role: "ml-engineer",
      experience: "senior",
      icon: Layers3,
      certs: [
        "aws/generative-ai-developer",
        "google-cloud/professional-ml-engineer",
        "microsoft/ml-operations-engineer",
        "aws/machine-learning-engineer",
        "databricks/machine-learning-professional",
      ],
      project:
        "Deploy a production-style AI service with monitoring, safety evaluations, cost controls and rollback.",
    },
    {
      id: "lead",
      title: "Lead AI adoption",
      subtitle: "BUSINESS, PRODUCT & PROGRAMME LEADERS",
      intro:
        "Choose this path if you guide investment, transformation or governance. Coding is not the focus; business context and responsible decisions are.",
      role: "business-leader",
      experience: "working",
      icon: Compass,
      certs: [
        "aws/ai-business-strategist",
        "microsoft/ai-business-professional",
        "microsoft/ai-transformation-leader",
        "google-cloud/generative-ai-leader",
        "iapp/aigp",
      ],
      project:
        "Create an AI business case with success metrics, governance, stakeholder responsibilities and a staged adoption plan.",
    },
  ];
  return (
    <main className="cf ai-page">
      <section className="ai-page-hero">
        <div className="cf-shell">
          <span className="cf-eyebrow">
            <Sparkles size={16} /> AI CERTIFICATION PATHWAYS
          </span>
          <h1>
            AI certifications.
            <br />
            <em>Matched to your experience.</em>
          </h1>
          <p>
            AI literacy, application development, production ML and business
            leadership are different skills. Choose the path that fits the work
            you want to do.
          </p>
          <div className="ai-jump-links">
            {paths.map((p) => (
              <a href={`#${p.id}`} key={p.id}>
                {p.title} <ArrowRight size={14} />
              </a>
            ))}
          </div>
          <span className="hero-source-date">
            <Check size={14} /> Official sources checked 13 September 2026
          </span>
        </div>
      </section>
      <div className="cf-shell ai-path-list">
        {paths.map((path, i) => (
          <section className="ai-path-section" id={path.id} key={path.id}>
            <div className="ai-path-heading">
              <span className="path-index">0{i + 1}</span>
              <div>
                <span className="cf-eyebrow">{path.subtitle}</span>
                <h2>{path.title}</h2>
                <p>{path.intro}</p>
                <Link
                  href={`/certifications?role=${path.role}&experience=${path.experience}&ai=true`}
                  className="all-paths"
                >
                  Personalise this path <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="ai-path-options">
              {path.certs
                .flatMap((key) =>
                  certifications.filter(
                    (c) => `${c.provider}/${c.id}` === key && isAvailable(c),
                  ),
                )
                .map((c) => (
                  <Link className="ai-option" href={certUrl(c)} key={c.id}>
                    <div>
                      <span>{providerById(c.provider)?.name}</span>
                      {c.status && (
                        <small className="beta-tag">Bookable beta</small>
                      )}
                    </div>
                    <strong>{c.name}</strong>
                    <span>
                      {c.exam} <ArrowUpRight size={17} />
                    </span>
                  </Link>
                ))}
            </div>
            <div className="path-project">
              <Code2 size={20} />
              <p>
                <strong>Put it into practice</strong>
                {path.project}
              </p>
            </div>
          </section>
        ))}
        <section className="cloud-guide">
          <span className="cf-eyebrow">AWS, AZURE OR GOOGLE CLOUD?</span>
          <h2>Follow the work, then the cloud.</h2>
          <div>
            <article>
              <h3>AWS</h3>
              <p>
                For teams using Bedrock, SageMaker, Glue and AWS infrastructure.
                AI Practitioner is a foundation; Generative AI Developer is an
                advanced implementation path.
              </p>
            </article>
            <article>
              <h3>Microsoft</h3>
              <p>
                For Azure and Foundry builders, Fabric teams or organisations
                using Copilot. AB-730 and AB-731 focus on business work; AI-103
                and AI-200 focus on development.
              </p>
            </article>
            <article>
              <h3>Google Cloud</h3>
              <p>
                For Vertex AI, BigQuery and Google Cloud environments.
                Generative AI Leader suits business understanding; Professional
                ML Engineer fits experienced technical work.
              </p>
            </article>
          </div>
          <p className="cloud-guide-note">
            Databricks and Snowflake can complement more than one cloud. You do
            not need to collect all three cloud providers’ certifications. Check
            the technology used in your current team and target roles first.
          </p>
        </section>
        <div className="ai-end">
          <h2>Make it your own.</h2>
          <p>
            Compare certifications by role, platform and experience, then save
            the options that matter.
          </p>
          <Link href="/certifications?ai=true" className="cf-btn cf-btn-dark">
            Open the AI certification finder <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
