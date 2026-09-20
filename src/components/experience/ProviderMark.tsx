import { providerById } from "@/lib/certifications";
import { Cloud, Layers3, Snowflake, Network, ShieldCheck } from "lucide-react";
export default function ProviderMark({ provider, compact = false }: { provider: string; compact?: boolean }) {
  return <span className={`provider-wordmark provider-${provider} ${compact ? "provider-compact" : ""}`}>
    {provider === "anthropic" ? <><span className="claude-mark" aria-hidden="true">✳</span>{!compact && "Claude"}</>
      : provider === "servicenow" ? <span>ServiceNow</span>
      : provider === "comptia" ? <span className="comptia-mark">CompTIA</span>
      : provider === "iapp" ? <span>IAPP <small>AIGP</small></span>
      : provider === "isaca" ? <span>ISACA</span>
      : provider === "red-hat" ? <span>Red Hat</span>
      : provider === "linux-foundation" ? <span>Linux Foundation</span>
      : provider === "hashicorp" ? <span>HashiCorp</span>
      : provider === "scrum-org" ? <span>Scrum.org</span>
      : provider === "oracle" ? <span>Oracle</span>
      : provider === "aws" ? <span className="aws-wordmark">aws<i /></span>
      : provider === "microsoft" ? <><span className="ms-mark" aria-hidden="true"><i /><i /><i /><i /></span>{!compact && "Microsoft"}</>
      : provider === "google-cloud" ? <><span className="google-g">G</span>{!compact && "Google Cloud"}</>
      : provider === "pmi" ? <><span className="pmi-mark">PMI</span>{!compact && <small>PMP®</small>}</>
      : provider === "databricks" ? <><Layers3 />{!compact && "databricks"}</>
      : provider === "snowflake" ? <><Snowflake />{!compact && "snowflake"}</>
      : provider === "salesforce" ? <><Cloud />{!compact && "salesforce"}</>
      : provider === "cisco" ? <><Network />{!compact && "CISCO"}</>
      : provider === "isc2" ? <><ShieldCheck />{!compact && "ISC2"}</>
      : <span>{providerById(provider)?.mark || provider.toUpperCase()}</span>}
  </span>;
}
