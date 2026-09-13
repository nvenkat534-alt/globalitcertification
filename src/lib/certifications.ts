/** Official exam availability checked 2026-09-13. Career guidance and fit scores are editorial. */
export const REVIEWED_ON = "2026-09-13";
export type Experience = "all" | "beginner" | "working" | "senior";
export const experiences: { id: Experience; label: string; detail: string }[] =
  [
    { id: "all", label: "Any experience", detail: "Explore every level" },
    {
      id: "beginner",
      label: "Getting started",
      detail: "0–1 year in this field",
    },
    {
      id: "working",
      label: "Building experience",
      detail: "1–3 years in this field",
    },
    {
      id: "senior",
      label: "Ready to specialise",
      detail: "3+ years in this field",
    },
  ];
export const roles = [
  {
    id: "data-engineer",
    name: "Data Engineer",
    icon: "database",
    description: "Pipelines, lakehouses & reliable data",
    advice:
      "Start with the platform used by your team. Add Spark or Snowflake when it matches the systems you actually build.",
    project:
      "Build a batch-to-streaming pipeline with quality checks, orchestration and a documented recovery plan.",
  },
  {
    id: "ai-engineer",
    name: "AI & GenAI Engineer",
    icon: "sparkles",
    description: "AI applications, RAG & intelligent agents",
    advice:
      "Choose an application-building exam for your cloud. Learn evaluation, security and retrieval alongside prompting.",
    project:
      "Ship a grounded assistant with citations, an evaluation dataset, access controls and a cost dashboard.",
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    icon: "chart",
    description: "SQL, dashboards & business insights",
    advice:
      "Prioritise your reporting stack. Power BI, Fabric and Databricks validate different parts of the analytics workflow.",
    project:
      "Create a semantic model and dashboard that answers three business questions, with documented data-quality checks.",
  },
  {
    id: "ml-engineer",
    name: "ML Engineer",
    icon: "brain",
    description: "Models, deployment & MLOps",
    advice:
      "Production ML exams become more useful after you can train, deploy and monitor a model. Pick your operating platform first.",
    project:
      "Deploy a model through CI/CD, track drift and latency, and demonstrate a safe rollback.",
  },
  {
    id: "cloud-engineer",
    name: "Cloud Engineer",
    icon: "cloud",
    description: "Cloud operations & infrastructure",
    advice:
      "Build hands-on administration skills on one cloud before collecting credentials across several clouds.",
    project:
      "Deploy a private application with identity controls, monitoring, backups and infrastructure as code.",
  },
  {
    id: "cloud-architect",
    name: "Cloud Architect",
    icon: "layers",
    description: "Architecture, scale & resilience",
    advice:
      "Use architecture certifications to formalise real design experience. Expert exams are a later step, not a beginner shortcut.",
    project:
      "Design a resilient system and explain its availability, recovery, security and cost trade-offs.",
  },
  {
    id: "devops",
    name: "DevOps & SRE",
    icon: "workflow",
    description: "Automation, Kubernetes & reliability",
    advice:
      "Combine your cloud with the tools you use: Kubernetes for orchestration and Terraform for infrastructure automation.",
    project:
      "Build a deployment pipeline with policy checks, staged releases, service-level objectives and rollback.",
  },
  {
    id: "software-developer",
    name: "Software Developer",
    icon: "code",
    description: "Cloud applications & backend services",
    advice:
      "Choose an exam aligned with the runtime and cloud where you ship applications. Add AI when it is part of your product.",
    project:
      "Build an authenticated API with integration tests, deployment automation and production observability.",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: "shield",
    description: "Defence, governance & cloud security",
    advice:
      "Separate technical defence from security management. Experience requirements matter for senior credentials such as CISSP.",
    project:
      "Build a detection-and-response lab and document threat models, alert triage and incident handling.",
  },
  {
    id: "network-engineer",
    name: "Network Engineer",
    icon: "network",
    description: "Connectivity, routing & hybrid networks",
    advice:
      "Learn routing and troubleshooting first, then add the cloud networking credential used by your organisation.",
    project:
      "Design and troubleshoot a segmented network with routing, VPN connectivity and a clear failure-recovery plan.",
  },
  {
    id: "project-manager",
    name: "Project Manager",
    icon: "briefcase",
    description: "PMP, agile delivery & programme skills",
    advice:
      "Choose CAPM for a foundation, PMP for eligible project leaders, and agile credentials for teams using agile delivery.",
    project:
      "Document a real project with a charter, stakeholder plan, risk register, delivery approach and measured outcomes.",
  },
  {
    id: "business-leader",
    name: "Business & AI Leader",
    icon: "compass",
    description: "AI strategy, adoption & business value",
    advice:
      "You do not need a developer certification to lead AI adoption. Focus on use-case selection, governance and measuring value.",
    project:
      "Develop an AI business case with success measures, a risk assessment, an adoption plan and a pilot decision.",
  },
  {
    id: "crm-consultant",
    name: "CRM & Business Apps",
    icon: "users",
    description: "Salesforce, Copilot & business solutions",
    advice:
      "Choose the ecosystem your clients use. Learn the underlying platform before adding AI agents and solution architecture.",
    project:
      "Deliver a business workflow with permissions, clean data, an agent escalation path and user acceptance tests.",
  },
  { id: "sap-consultant", name: "SAP Consultant", icon: "layers", description: "S/4HANA processes & enterprise integration", advice: "Choose the business process and deployment edition used in your target role. Pair official SAP learning with authorised practice.", project: "Document a business process or integration with configuration rationale, test cases and failure recovery." },
] as const;
export type RoleId = (typeof roles)[number]["id"];
export const providers = [
  { id: "sap", name: "SAP", mark: "SAP", color: "#218aba", description: "SAP S/4HANA Sales and Integration Suite credentials. Match the deployment edition, practise in the official learning system and check current assessment access." },
  { id: "anthropic", name: "Anthropic / Claude", mark: "✳", color: "#c27d62", description: "Explore Claude credentials for business users, developers and architects. Proctored exams currently require Claude Partner Network access; public Claude Academy learning is a separate route." },
  { id: "comptia", name: "CompTIA", mark: "CompTIA", color: "#ce405c", description: "Vendor-neutral IT support, networking, cybersecurity, Linux, cloud and data credentials. Check the live exam version and regional booking options through CompTIA Central." },
  {
    id: "aws",
    name: "AWS",
    mark: "aws",
    color: "#bc6a16",
    description:
      "Choose AWS when your work uses Amazon cloud services, Bedrock, SageMaker, Glue or Redshift.",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    mark: "M",
    color: "#2374b6",
    description:
      "Choose Microsoft for Azure, Fabric, Power BI, Microsoft Foundry or Copilot. Match the credential to the product, not just the vendor.",
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    mark: "G",
    color: "#37865b",
    description:
      "Choose Google Cloud for BigQuery, Vertex AI, GKE and Google Cloud infrastructure.",
  },
  {
    id: "databricks",
    name: "Databricks",
    mark: "D",
    color: "#ca4c38",
    description:
      "Choose Databricks for Spark, lakehouse engineering, ML and AI built on the Databricks platform. It can complement AWS, Azure or Google Cloud.",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    mark: "❄",
    color: "#2988b8",
    description:
      "Choose Snowflake for data warehousing, engineering, analytics and Cortex AI on the Snowflake platform.",
  },
  {
    id: "pmi",
    name: "PMI",
    mark: "PMI",
    color: "#7653b5",
    description:
      "Choose PMI for project leadership and agile delivery. Check the education and experience requirements before applying.",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    mark: "sf",
    color: "#1c89c9",
    description:
      "Choose Salesforce for administration, development, Agentforce, Data 360, business analysis and Tableau.",
  },
  {
    id: "cisco",
    name: "Cisco",
    mark: "C",
    color: "#227d91",
    description:
      "Choose Cisco for networking, cybersecurity, automation, enterprise infrastructure and specialist technology tracks.",
  },
  {
    id: "red-hat",
    name: "Red Hat",
    mark: "RH",
    color: "#b73737",
    description: "Choose Red Hat for practical Linux administration skills.",
  },
  {
    id: "linux-foundation",
    name: "Linux Foundation",
    mark: "LF",
    color: "#346395",
    description:
      "Choose Kubernetes credentials for hands-on, cloud-independent container operations.",
  },
  {
    id: "hashicorp",
    name: "HashiCorp",
    mark: "H",
    color: "#6654b7",
    description:
      "Choose Terraform for infrastructure-as-code skills across cloud environments.",
  },
  {
    id: "isc2",
    name: "ISC2",
    mark: "ISC²",
    color: "#39735c",
    description:
      "Choose ISC2 for broad security foundations or experienced security leadership.",
  },
  {
    id: "iapp",
    name: "IAPP",
    mark: "IAPP",
    color: "#305981",
    description: "Choose AIGP for responsible AI governance across platforms.",
  },
  {
    id: "isaca",
    name: "ISACA",
    mark: "IS",
    color: "#296886",
    description:
      "Choose ISACA for information security management and governance.",
  },
  {
    id: "oracle",
    name: "Oracle",
    mark: "O",
    color: "#b84338",
    description:
      "Choose Oracle for agentic AI fundamentals and Oracle ecosystem knowledge.",
  },
  {
    id: "scrum-org",
    name: "Scrum.org",
    mark: "S",
    color: "#457fa6",
    description:
      "Choose Scrum.org for Scrum knowledge and effective team facilitation.",
  },
] as const;
export type ProviderId = (typeof providers)[number]["id"];
export type Certification = {
  id: string;
  name: string;
  exam: string;
  provider: ProviderId;
  level:
    | "Foundation"
    | "Associate"
    | "Professional"
    | "Specialty"
    | "Expert"
    | "Business";
  stage: 0 | 1 | 2;
  roles: Partial<Record<RoleId, 4 | 5>>;
  skills: string[];
  why: string;
  readiness: string;
  eligibility: string;
  source: string;
  access?: "Partner access";
  sourceKind?: "Issuer badge";
  aliases?: string[];
  ai?: boolean;
  fresh?: boolean;
  status?: "Beta";
  note?: string;
  retireOn?: string;
  availableFrom?: string;
};
const aws = (slug: string) =>
  `https://aws.amazon.com/certification/certified-${slug}/`;
const ms = (slug: string) =>
  `https://learn.microsoft.com/en-us/credentials/certifications/${slug}/`;
const gc = (slug: string) =>
  `https://cloud.google.com/learn/certification/${slug}`;
const db = (slug: string) =>
  `https://www.databricks.com/learn/certification/${slug}`;
const sf = (slug: string) =>
  `https://learn.snowflake.com/en/certifications/${slug}/`;
function c(
  id: string,
  name: string,
  exam: string,
  provider: ProviderId,
  level: Certification["level"],
  stage: Certification["stage"],
  roleWeights: Certification["roles"],
  skills: string[],
  why: string,
  readiness: string,
  source: string,
  extra: Partial<Certification> = {},
): Certification {
  return {
    id,
    name,
    exam,
    provider,
    level,
    stage,
    roles: roleWeights,
    skills,
    why,
    readiness,
    source,
    eligibility:
      "Check the official exam page for the current registration and credential requirements.",
    ...extra,
  };
}
export const certifications: Certification[] = [
{"id": "s4hana-sales", "name": "SAP Certified - Implementation Consultant for SAP S/4HANA Cloud Private Edition, Sales", "exam": "C_TS462", "provider": "sap", "level": "Associate", "stage": 1, "roles": {"sap-consultant": 5}, "skills": ["SAP SD", "Order to cash", "Pricing", "Billing", "S/4HANA"], "why": "Validates sales process and configuration skills for mentored SAP S/4HANA private-edition or on-premise project work.", "readiness": "Practise sales processes, pricing, delivery and billing in an authorised SAP learning system.", "source": "https://learning.sap.com/certifications/sap-certified-associate-sap-s-4hana-sales", "eligibility": "Check the SAP Universal ID setup, Learning Hub subscription with certification attempts, available attempts and technical readiness on the official assessment page.", "note": "SAP currently lists this as a system-based assessment. Confirm the live format and subscription before purchase.", "fresh": true},
{"id": "integration-developer", "name": "SAP Certified - Integration Developer", "exam": "C_CPI", "provider": "sap", "level": "Associate", "stage": 1, "roles": {"sap-consultant": 5}, "skills": ["SAP Integration Suite", "SAP CPI", "APIs", "iFlows"], "why": "Validates core integration development knowledge for mentored enterprise integration work.", "readiness": "Build, test and monitor integration flows, including authentication, mapping and failure handling.", "source": "https://learning.sap.com/certifications/sap-certified-associate-integration-developer", "eligibility": "Check the SAP Universal ID setup, Learning Hub subscription with certification attempts, available attempts and technical readiness on the official assessment page.", "note": "SAP currently lists this as a system-based assessment. Confirm the live format and subscription before purchase.", "fresh": true},
  c(
    "cloud-practitioner",
    "AWS Certified Cloud Practitioner",
    "CLF-C02",
    "aws",
    "Foundation",
    0,
    {
      "cloud-engineer": 5,
      "cloud-architect": 4,
      "business-leader": 4,
      "software-developer": 4,
    },
    ["Cloud concepts", "AWS services", "Security", "Billing"],
    "Build a common cloud vocabulary before moving into a technical AWS role. It supports foundational understanding rather than proving production engineering ability.",
    "Start here if you are new to cloud; pair it with basic AWS labs.",
    aws("cloud-practitioner"),
  ),
  c(
    "ai-practitioner",
    "AWS Certified AI Practitioner",
    "AIF-C01",
    "aws",
    "Foundation",
    0,
    {
      "ai-engineer": 5,
      "ml-engineer": 4,
      "business-leader": 5,
      "project-manager": 4,
      "data-engineer": 4,
    },
    ["AI fundamentals", "Generative AI", "Responsible AI", "AWS AI services"],
    "Useful for understanding AWS AI capabilities and discussing AI solutions with technical teams. A starting point before implementation-focused exams.",
    "A good first AI credential; learn basic AI concepts and AWS services.",
    aws("ai-practitioner"),
    { ai: true },
  ),
  c(
    "ai-business-strategist",
    "AWS Certified AI Business Strategist",
    "AI Business Strategist beta",
    "aws",
    "Business",
    1,
    { "business-leader": 5, "project-manager": 5, "crm-consultant": 4 },
    ["AI investment", "Business cases", "Governance", "Adoption"],
    "Supports roles that decide where AI creates value, secure investment and manage adoption. The exam assesses business judgment, not AWS implementation skills.",
    "AWS recommends six months working with or alongside AI initiatives; coding is not required.",
    aws("ai-business-strategist"),
    {
      ai: true,
      fresh: true,
      status: "Beta",
      availableFrom: "2026-09-01",
      note: "Registration for the beta opened 1 September 2026. Check the provider for appointments and beta result timelines.",
    },
  ),
  c(
    "data-engineer-associate",
    "AWS Certified Data Engineer – Associate",
    "DEA-C01",
    "aws",
    "Associate",
    1,
    { "data-engineer": 5, "data-analyst": 4, "ml-engineer": 4 },
    ["Data ingestion", "Glue & Redshift", "Orchestration", "Data quality"],
    "A direct fit for engineers building AWS data pipelines. Shows platform-specific knowledge that supports dependable analytics and AI data foundations.",
    "Build SQL/Python pipelines and practise AWS data services before booking.",
    aws("data-engineer-associate"),
  ),
  c(
    "machine-learning-engineer",
    "AWS Certified Machine Learning Engineer – Associate",
    "MLA-C01 / MLA-C02 beta",
    "aws",
    "Associate",
    1,
    { "ml-engineer": 5, "ai-engineer": 4, "data-engineer": 4, devops: 4 },
    ["SageMaker", "Model deployment", "MLOps", "Monitoring"],
    "Fits engineers putting models into production and maintaining reliable ML systems on AWS. Adds operational depth beyond an AI foundation credential.",
    "AWS targets about one year using SageMaker and other AWS ML engineering services.",
    aws("machine-learning-engineer-associate"),
    {
      ai: true,
      fresh: true,
      note: "MLA-C02 beta registration is open. MLA-C01 in English is available through 28 September 2026; check language and version before booking.",
    },
  ),
  c(
    "generative-ai-developer",
    "AWS Certified Generative AI Developer – Professional",
    "AIP-C01",
    "aws",
    "Professional",
    2,
    {
      "ai-engineer": 5,
      "software-developer": 5,
      "ml-engineer": 4,
      "cloud-architect": 4,
    },
    ["Amazon Bedrock", "RAG", "AI agents", "Evaluation"],
    "A strong specialisation for developers building production generative AI applications on AWS, including secure retrieval, agent workflows and operational quality.",
    "AWS targets 2+ years building production applications and one year implementing generative AI solutions.",
    aws("generative-ai-developer-professional"),
    { ai: true, fresh: true },
  ),
  c(
    "solutions-architect-associate",
    "AWS Certified Solutions Architect – Associate",
    "SAA-C03",
    "aws",
    "Associate",
    1,
    {
      "cloud-architect": 5,
      "cloud-engineer": 5,
      devops: 4,
      "software-developer": 4,
    },
    ["Architecture", "Resilience", "Security", "Cost optimisation"],
    "Helps cloud engineers connect services into reliable designs. A useful architecture foundation before taking on larger AWS systems.",
    "AWS recommends around one year designing cloud solutions.",
    aws("solutions-architect-associate"),
  ),
  c(
    "solutions-architect-professional",
    "AWS Certified Solutions Architect – Professional",
    "Solutions Architect Professional",
    "aws",
    "Professional",
    2,
    { "cloud-architect": 5, "cloud-engineer": 4, devops: 4 },
    ["Complex architecture", "Migration", "Governance", "Multi-account design"],
    "Best for architects already making decisions across complex AWS environments. Supports architecture discussions that span several teams and applications.",
    "AWS recommends 2+ years designing and implementing AWS solutions.",
    aws("solutions-architect-professional"),
    {
      note: "AWS has announced an exam update. Confirm the current version and language when booking.",
    },
  ),
  c(
    "developer-associate",
    "AWS Certified Developer – Associate",
    "Developer Associate",
    "aws",
    "Associate",
    1,
    { "software-developer": 5, devops: 4, "ai-engineer": 4 },
    ["Serverless", "APIs", "Deployment", "Debugging"],
    "Useful for developers who build and maintain applications on AWS. Align preparation with a real deployed application rather than service memorisation.",
    "Have practical programming experience and experience with AWS application services.",
    aws("developer-associate"),
    {
      note: "AWS has announced an exam update. Confirm the current version when booking.",
    },
  ),
  c(
    "cloudops-engineer",
    "AWS Certified CloudOps Engineer – Associate",
    "SOA-C03",
    "aws",
    "Associate",
    1,
    { "cloud-engineer": 5, devops: 5, "network-engineer": 4 },
    ["Operations", "Monitoring", "Recovery", "Networking"],
    "A direct operations credential for running AWS workloads, troubleshooting incidents and improving reliability. It is the current successor to the SysOps name.",
    "AWS targets around one year deploying, managing and operating AWS workloads.",
    aws("cloudops-engineer-associate"),
    {
      fresh: true,
      note: "Replaces the SysOps Administrator Associate name. Simplified Chinese and Korean exam delivery retires after 19 November 2026.",
    },
  ),
  c(
    "devops-engineer-professional",
    "AWS Certified DevOps Engineer – Professional",
    "DevOps Engineer Professional",
    "aws",
    "Professional",
    2,
    { devops: 5, "cloud-engineer": 4, "software-developer": 4 },
    [
      "CI/CD",
      "Infrastructure automation",
      "Observability",
      "Incident response",
    ],
    "Fits experienced engineers responsible for release automation and resilient AWS operations. Most useful alongside hands-on delivery ownership.",
    "Build experience operating AWS systems and automating deployments before this professional exam.",
    aws("devops-engineer-professional"),
  ),
  c(
    "security-specialty",
    "AWS Certified Security – Specialty",
    "Security Specialty",
    "aws",
    "Specialty",
    2,
    { cybersecurity: 5, "cloud-architect": 4, "cloud-engineer": 4 },
    ["IAM", "Threat detection", "Data protection", "Cloud security"],
    "A cloud-specific security specialisation for protecting AWS workloads and reviewing architectural security decisions.",
    "Practise AWS security controls and incident investigation; intended for experienced practitioners.",
    aws("security-specialty"),
  ),
  c(
    "azure-fundamentals",
    "Microsoft Certified: Azure Fundamentals",
    "AZ-900",
    "microsoft",
    "Foundation",
    0,
    {
      "cloud-engineer": 5,
      "cloud-architect": 4,
      "business-leader": 4,
      "software-developer": 4,
    },
    ["Cloud concepts", "Azure services", "Governance", "Pricing"],
    "Builds Azure vocabulary for a first cloud role or for working with Microsoft-based technical teams.",
    "A starting point for people new to Azure.",
    ms("azure-fundamentals"),
  ),
  c(
    "azure-ai-fundamentals",
    "Microsoft Certified: Azure AI Fundamentals",
    "AI-901",
    "microsoft",
    "Foundation",
    0,
    { "ai-engineer": 5, "software-developer": 4, "ml-engineer": 4 },
    ["AI concepts", "Microsoft Foundry", "Python basics", "AI solutions"],
    "The current Azure AI foundation exam for aspiring technical AI professionals. Provides a bridge into building Azure AI applications.",
    "Learn basic Python syntax, programming techniques and Azure resources. This is more technical than a business AI credential.",
    ms("azure-ai-fundamentals"),
    {
      ai: true,
      fresh: true,
      note: "AI-901 is the current exam. The older AI-900 exam is not recommended in this catalog.",
    },
  ),
  c(
    "azure-ai-apps-agents",
    "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    "AI-103",
    "microsoft",
    "Associate",
    1,
    { "ai-engineer": 5, "software-developer": 5, "ml-engineer": 4 },
    ["Microsoft Foundry", "AI agents", "RAG", "Multimodal AI"],
    "A direct fit for developers creating and deploying AI apps and agents in Microsoft Foundry.",
    "Be comfortable developing Python applications and working with Azure and generative AI.",
    ms("azure-ai-apps-and-agents-developer-associate"),
    { ai: true, fresh: true },
  ),
  c(
    "azure-ai-cloud-developer",
    "Microsoft Certified: Azure AI Cloud Developer Associate",
    "AI-200",
    "microsoft",
    "Associate",
    1,
    { "software-developer": 5, "ai-engineer": 5, "cloud-engineer": 4 },
    ["AI backends", "Azure services", "Security", "Monitoring"],
    "Fits backend developers building the cloud services that support AI applications through the full development lifecycle.",
    "Build backend development, Azure deployment and application-security experience.",
    ms("azure-ai-cloud-developer-associate"),
    { ai: true, fresh: true },
  ),
  c(
    "ml-operations-engineer",
    "Microsoft Certified: Machine Learning Operations Engineer Associate",
    "AI-300",
    "microsoft",
    "Associate",
    2,
    { "ml-engineer": 5, devops: 5, "ai-engineer": 4, "data-engineer": 4 },
    ["Azure ML", "MLOps", "GenAIOps", "Observability"],
    "Brings together traditional model operations and generative AI operations. Useful for engineers who own deployment, evaluation and monitoring.",
    "Microsoft expects Python, a data-science background and experience with Azure ML, Foundry and DevOps.",
    ms("operationalizing-machine-learning-and-generative-ai-solutions"),
    { ai: true, fresh: true },
  ),
  c(
    "ai-business-professional",
    "Microsoft Certified: AI Business Professional",
    "AB-730",
    "microsoft",
    "Business",
    0,
    { "business-leader": 5, "project-manager": 4, "crm-consultant": 4 },
    ["Microsoft 365 Copilot", "Prompting", "Content analysis", "Productivity"],
    "For business users who want to apply AI in everyday work and make better use of Microsoft 365 Copilot.",
    "Be comfortable using Microsoft 365 apps and generative AI productivity tools; coding is not required.",
    ms("ai-business-professional"),
    { ai: true, fresh: true },
  ),
  c(
    "ai-transformation-leader",
    "Microsoft Certified: AI Transformation Leader",
    "AB-731",
    "microsoft",
    "Business",
    1,
    { "business-leader": 5, "project-manager": 5, "crm-consultant": 4 },
    ["AI strategy", "Business transformation", "Copilot", "Governance"],
    "For decision-makers leading AI adoption and organisational change in the Microsoft ecosystem.",
    "Best with experience making business decisions and guiding organisational change; coding is not required.",
    ms("ai-transformation-leader"),
    { ai: true, fresh: true },
  ),
  c(
    "ai-agent-builder",
    "Microsoft Certified: AI Agent Builder Associate",
    "AB-620",
    "microsoft",
    "Associate",
    1,
    { "crm-consultant": 5, "ai-engineer": 5, "software-developer": 4 },
    ["Copilot Studio", "Agents", "Integrations", "RAG"],
    "Fits consultants and advanced builders creating enterprise agents with Copilot Studio and connected business systems.",
    "Have hands-on Copilot Studio experience, prompt engineering and REST API integration knowledge.",
    ms("ai-agent-builder-associate"),
    { ai: true, fresh: true },
  ),
  c(
    "agentic-business-architect",
    "Microsoft Certified: Agentic AI Business Solutions Architect",
    "AB-100",
    "microsoft",
    "Expert",
    2,
    {
      "crm-consultant": 5,
      "cloud-architect": 5,
      "business-leader": 4,
      "ai-engineer": 4,
    },
    ["AI architecture", "Business processes", "Integration", "Governance"],
    "For experienced solution architects bringing multiple Microsoft products together into AI-driven business solutions.",
    "Build substantial solution-architecture and business application experience first.",
    ms("agentic-ai-business-solutions-architect"),
    {
      ai: true,
      fresh: true,
      eligibility:
        "Review Microsoft’s current qualifying certification requirements as well as the AB-100 exam before planning this expert credential.",
    },
  ),
  c(
    "fabric-data-engineer",
    "Microsoft Certified: Fabric Data Engineer Associate",
    "DP-700",
    "microsoft",
    "Associate",
    1,
    { "data-engineer": 5, "data-analyst": 4 },
    ["Microsoft Fabric", "Pipelines", "SQL & PySpark", "Lakehouse"],
    "A direct fit for Microsoft Fabric data engineers building, orchestrating and managing analytical data solutions.",
    "Practise Fabric ingestion and orchestration, SQL and PySpark.",
    ms("fabric-data-engineer-associate"),
  ),
  c(
    "fabric-analytics-engineer",
    "Microsoft Certified: Fabric Analytics Engineer Associate",
    "DP-600",
    "microsoft",
    "Associate",
    1,
    { "data-analyst": 5, "data-engineer": 5 },
    ["Semantic models", "Fabric warehouses", "Lakehouses", "Analytics"],
    "Useful when your role connects engineering with enterprise analytics and semantic models in Microsoft Fabric.",
    "Have experience creating and managing analytical assets and querying data.",
    ms("fabric-analytics-engineer-associate"),
  ),
  c(
    "power-bi-data-analyst",
    "Microsoft Certified: Power BI Data Analyst Associate",
    "PL-300",
    "microsoft",
    "Associate",
    1,
    { "data-analyst": 5, "business-leader": 4 },
    ["Power BI", "DAX", "Power Query", "Data modelling"],
    "A focused choice for analysts turning business data into models, reports and actionable insights in Power BI.",
    "Build reports using Power Query, data modelling and DAX before booking.",
    ms("data-analyst-associate"),
  ),
  c(
    "azure-data-fundamentals",
    "Microsoft Certified: Azure Data Fundamentals",
    "DP-900",
    "microsoft",
    "Foundation",
    0,
    { "data-engineer": 5, "data-analyst": 5, "ml-engineer": 4 },
    ["Relational data", "Nonrelational data", "Analytics", "Azure data"],
    "A starting point for understanding data workloads before specialising in Fabric, databases or engineering.",
    "Beginner-friendly; follow with SQL practice and a small data project.",
    ms("azure-data-fundamentals"),
  ),
  c(
    "azure-administrator",
    "Microsoft Certified: Azure Administrator Associate",
    "AZ-104",
    "microsoft",
    "Associate",
    1,
    { "cloud-engineer": 5, "cloud-architect": 4, devops: 4 },
    ["Azure administration", "Networking", "Identity", "Compute & storage"],
    "A direct operational credential for managing Azure environments and an important step in the Azure architect pathway.",
    "Build experience with PowerShell, Azure CLI, the Azure portal, ARM/Bicep and Microsoft Entra ID, alongside operating systems, networking and virtualisation.",
    ms("azure-administrator"),
    { eligibility: "Earn the credential by passing AZ-104. Microsoft does not list another certification as a prerequisite; hands-on Azure administration knowledge is recommended. Use a personal Microsoft account when scheduling through Pearson VUE.", note: "Current exam: AZ-104. The English skills outline applies from 17 April 2026. Assessment time: 100 minutes. Role-based certification renewal is every 12 months through Microsoft Learn. Checked 13 September 2026; regional pricing and languages are on the official page." },
  ),
  c(
    "azure-solutions-architect",
    "Microsoft Certified: Azure Solutions Architect Expert",
    "AZ-305 + prerequisite",
    "microsoft",
    "Expert",
    2,
    { "cloud-architect": 5, "cloud-engineer": 4 },
    ["Infrastructure design", "Resilience", "Governance", "Data platforms"],
    "For experienced architects translating business requirements into Azure infrastructure designs.",
    "Advanced IT operations and Azure design experience is recommended.",
    ms("azure-solutions-architect"),
    {
      eligibility:
        "Earn Azure Administrator Associate and pass AZ-305 to meet the certification requirements.",
    },
  ),
  c(
    "devops-expert",
    "Microsoft Certified: DevOps Engineer Expert",
    "AZ-400 + prerequisite",
    "microsoft",
    "Expert",
    2,
    { devops: 5, "software-developer": 4, "cloud-engineer": 4 },
    ["GitHub", "Azure DevOps", "Delivery pipelines", "Observability"],
    "Useful for engineers responsible for delivering software and managing the flow from source control to production.",
    "Have experience both administering and developing in Azure, with strength in at least one.",
    ms("devops-engineer"),
    {
      eligibility:
        "AZ-400 also requires a qualifying associate certification. Check the official page for the current accepted prerequisite options.",
    },
  ),
  c(
    "security-operations-analyst",
    "Microsoft Certified: Security Operations Analyst Associate",
    "SC-200",
    "microsoft",
    "Associate",
    1,
    { cybersecurity: 5 },
    ["Microsoft Sentinel", "Defender", "Threat hunting", "Incident response"],
    "A practical specialisation for SOC analysts investigating and responding to threats in Microsoft security tools.",
    "Build familiarity with security operations and Microsoft threat detection tools.",
    ms("security-operations-analyst"),
  ),
  c(
    "azure-network-engineer",
    "Microsoft Certified: Azure Network Engineer Associate",
    "AZ-700",
    "microsoft",
    "Associate",
    1,
    { "network-engineer": 5, "cloud-engineer": 4, "cloud-architect": 4 },
    [
      "Azure networking",
      "Hybrid connectivity",
      "Load balancing",
      "Private access",
    ],
    "Fits engineers designing and operating Azure network infrastructure and hybrid connections.",
    "Build networking fundamentals and hands-on Azure configuration experience.",
    ms("azure-network-engineer-associate"),
  ),
  c(
    "cloud-digital-leader",
    "Google Cloud Digital Leader",
    "Cloud Digital Leader",
    "google-cloud",
    "Foundation",
    0,
    { "business-leader": 5, "cloud-engineer": 4, "project-manager": 4 },
    [
      "Cloud concepts",
      "Business value",
      "Google Cloud",
      "Digital transformation",
    ],
    "For professionals explaining how Google Cloud supports business goals before moving into implementation.",
    "No formal prerequisites; collaboration with technical professionals is helpful.",
    gc("cloud-digital-leader"),
  ),
  c(
    "generative-ai-leader",
    "Google Cloud Generative AI Leader",
    "Generative AI Leader",
    "google-cloud",
    "Business",
    0,
    {
      "business-leader": 5,
      "project-manager": 5,
      "ai-engineer": 4,
      "crm-consultant": 4,
    },
    ["Generative AI", "Business strategy", "Google AI", "Model output"],
    "A nontechnical AI credential for identifying use cases and guiding adoption in a Google Cloud context.",
    "Open to any role, with or without hands-on technical experience.",
    gc("generative-ai-leader"),
    { ai: true },
  ),
  c(
    "associate-data-practitioner",
    "Google Cloud Associate Data Practitioner",
    "Associate Data Practitioner",
    "google-cloud",
    "Associate",
    0,
    { "data-engineer": 5, "data-analyst": 5, "ml-engineer": 4 },
    ["Data preparation", "Pipelines", "Analytics", "Data management"],
    "An earlier-career route into working with data on Google Cloud before moving to professional specialisations.",
    "Practise Google Cloud data services and basic data preparation before attempting the exam.",
    gc("data-practitioner"),
  ),
  c(
    "professional-data-engineer",
    "Google Cloud Professional Data Engineer",
    "Professional Data Engineer",
    "google-cloud",
    "Professional",
    2,
    { "data-engineer": 5, "data-analyst": 4, "cloud-architect": 4 },
    ["BigQuery", "Data systems", "Data processing", "Operational reliability"],
    "A direct fit for engineers designing and managing Google Cloud data systems. Most useful when supported by real platform delivery experience.",
    "Google recommends 3+ years of industry experience, including 1+ year designing and managing Google Cloud solutions.",
    gc("data-engineer"),
  ),
  c(
    "professional-ml-engineer",
    "Google Cloud Professional Machine Learning Engineer",
    "Professional ML Engineer",
    "google-cloud",
    "Professional",
    2,
    { "ml-engineer": 5, "ai-engineer": 5, "data-engineer": 4 },
    ["Vertex AI", "ML pipelines", "MLOps", "Generative AI"],
    "Fits experienced engineers building and operating ML and AI solutions on Google Cloud.",
    "Build strong programming, data processing, model deployment and Google Cloud experience.",
    gc("machine-learning-engineer"),
    { ai: true },
  ),
  c(
    "associate-cloud-engineer",
    "Google Cloud Associate Cloud Engineer",
    "Associate Cloud Engineer",
    "google-cloud",
    "Associate",
    1,
    { "cloud-engineer": 5, devops: 4, "software-developer": 4 },
    ["Cloud deployment", "IAM", "Operations", "Monitoring"],
    "A practical foundation for deploying and maintaining applications and infrastructure on Google Cloud.",
    "Google recommends at least six months of hands-on Google Cloud experience.",
    gc("cloud-engineer"),
  ),
  c(
    "professional-cloud-architect",
    "Google Cloud Professional Cloud Architect",
    "Professional Cloud Architect",
    "google-cloud",
    "Professional",
    2,
    { "cloud-architect": 5, "cloud-engineer": 4 },
    ["Architecture", "Security", "Migration", "Business requirements"],
    "For architects designing Google Cloud solutions and explaining business and technical trade-offs.",
    "Best after hands-on design and operational experience on Google Cloud.",
    gc("cloud-architect"),
  ),
  c(
    "professional-cloud-devops",
    "Google Cloud Professional Cloud DevOps Engineer",
    "Professional Cloud DevOps Engineer",
    "google-cloud",
    "Professional",
    2,
    { devops: 5, "cloud-engineer": 4 },
    ["SRE", "CI/CD", "Observability", "Reliability"],
    "Supports engineers improving software delivery and reliability on Google Cloud.",
    "Practise production operations, delivery automation and service reliability.",
    gc("cloud-devops-engineer"),
  ),
  c(
    "data-engineer-associate",
    "Databricks Certified Data Engineer Associate",
    "Data Engineer Associate",
    "databricks",
    "Associate",
    1,
    { "data-engineer": 5, "data-analyst": 4 },
    ["Lakehouse", "Spark SQL", "Pipelines", "Data governance"],
    "A strong platform choice when your team engineers data in Databricks, whether hosted on AWS, Azure or Google Cloud.",
    "Build practical SQL, Spark and Databricks pipeline experience.",
    db("data-engineer-associate"),
  ),
  c(
    "data-engineer-professional",
    "Databricks Certified Data Engineer Professional",
    "Data Engineer Professional",
    "databricks",
    "Professional",
    2,
    { "data-engineer": 5, "cloud-architect": 4 },
    ["Advanced pipelines", "Streaming", "Performance", "Governance"],
    "Fits engineers responsible for advanced, dependable data workloads on Databricks.",
    "Gain production Databricks experience, including troubleshooting and optimising pipelines.",
    db("data-engineer-professional"),
  ),
  c(
    "generative-ai-engineer",
    "Databricks Certified Generative AI Engineer Associate",
    "Generative AI Engineer Associate",
    "databricks",
    "Associate",
    1,
    { "ai-engineer": 5, "ml-engineer": 5, "data-engineer": 4 },
    ["RAG", "LLM applications", "Model serving", "Evaluation"],
    "A platform-specific route for building generative AI solutions around Databricks data and AI services.",
    "Practise Python, retrieval pipelines, model serving and application evaluation.",
    db("genai-engineer-associate"),
    { ai: true },
  ),
  c(
    "context-engineer",
    "Databricks Certified Context Engineering Associate",
    "Context Engineering Associate",
    "databricks",
    "Associate",
    1,
    { "ai-engineer": 5, "data-engineer": 5, "ml-engineer": 4 },
    ["Agent context", "Retrieval", "Data governance", "AI systems"],
    "Connects data engineering with agent systems by focusing on assembling and governing useful context for AI.",
    "Build familiarity with Databricks data, retrieval and agent workflows.",
    db("context-engineer-associate"),
    { ai: true, fresh: true },
  ),
  c(
    "machine-learning-associate",
    "Databricks Certified Machine Learning Associate",
    "Machine Learning Associate",
    "databricks",
    "Associate",
    1,
    { "ml-engineer": 5, "ai-engineer": 4 },
    ["ML workflows", "MLflow", "Model training", "Databricks ML"],
    "Useful for moving from notebooks into repeatable machine learning workflows on Databricks.",
    "Practise Python, basic model training and Databricks Machine Learning.",
    db("machine-learning-associate"),
    { ai: true },
  ),
  c(
    "machine-learning-professional",
    "Databricks Certified Machine Learning Professional",
    "Machine Learning Professional",
    "databricks",
    "Professional",
    2,
    { "ml-engineer": 5, devops: 4 },
    ["Production ML", "MLflow", "Model lifecycle", "Deployment"],
    "For experienced ML practitioners maintaining production models and their lifecycle on Databricks.",
    "Build production ML and Databricks operational experience.",
    db("machine-learning-professional"),
    { ai: true },
  ),
  c(
    "data-analyst-associate",
    "Databricks Certified Data Analyst Associate",
    "Data Analyst Associate",
    "databricks",
    "Associate",
    1,
    { "data-analyst": 5, "data-engineer": 4 },
    ["Databricks SQL", "Dashboards", "Analysis", "Data management"],
    "A focused choice for analysts using Databricks SQL to turn lakehouse data into business insights.",
    "Practise SQL analysis and dashboards in Databricks.",
    db("data-analyst-associate"),
  ),
  c(
    "apache-spark-developer",
    "Databricks Certified Associate Developer for Apache Spark",
    "Apache Spark Developer",
    "databricks",
    "Associate",
    1,
    { "data-engineer": 5, "software-developer": 4 },
    [
      "Spark DataFrames",
      "Distributed processing",
      "Transformations",
      "Spark SQL",
    ],
    "Useful when Spark programming is central to the role, including data engineering work beyond one specific cloud.",
    "Become comfortable writing and debugging Spark DataFrame transformations.",
    db("apache-spark-developer-associate"),
  ),
  c(
    "snowpro-core",
    "SnowPro Core Certification",
    "COF-C03",
    "snowflake",
    "Associate",
    1,
    { "data-engineer": 5, "data-analyst": 5, "cloud-architect": 4 },
    ["Snowflake architecture", "SQL", "Data loading", "Security"],
    "A foundation for working with Snowflake before choosing advanced engineering, analytics or AI specialisations.",
    "Practise Snowflake loading, querying, access controls and warehouse management.",
    sf("snowpro-core-c03"),
    {
      fresh: true,
      note: "The current catalog lists COF-C03. Confirm your exam language and version when registering.",
    },
  ),
  c(
    "snowpro-data-engineer",
    "SnowPro Advanced: Data Engineer",
    "DEA-C02",
    "snowflake",
    "Professional",
    2,
    { "data-engineer": 5 },
    ["Data engineering", "Transformation", "Performance", "Data protection"],
    "Fits experienced Snowflake engineers responsible for data ingestion, transformation and reliable data pipelines.",
    "Build substantial hands-on Snowflake data engineering experience.",
    sf("snowpro-advanced-dataengineer-C02"),
    {
      eligibility:
        "Review the current SnowPro Core prerequisite and advanced exam requirements on the official page.",
    },
  ),
  c(
    "snowpro-gen-ai",
    "SnowPro Specialty: Gen AI",
    "GES-C02",
    "snowflake",
    "Specialty",
    1,
    { "ai-engineer": 5, "data-engineer": 4, "ml-engineer": 4 },
    ["Snowflake AI", "GenAI applications", "Retrieval", "AI data"],
    "Useful when you build generative AI applications close to data held in Snowflake.",
    "Practise Snowflake AI features and build an end-to-end generative AI use case.",
    sf("snowpro-GenAI-C02"),
    { ai: true, fresh: true },
  ),
  c(
    "snowpro-data-analyst",
    "SnowPro Advanced: Data Analyst",
    "DAA-C01",
    "snowflake",
    "Professional",
    2,
    { "data-analyst": 5, "data-engineer": 4 },
    ["Advanced SQL", "Analytics", "Performance", "Data interpretation"],
    "For experienced analysts who use Snowflake extensively and need deeper analytical platform skills.",
    "Develop advanced SQL and Snowflake analysis experience; check credential prerequisites.",
    sf("snowpro-advanced-dataanalyst"),
  ),
  c(
    "pmp",
    "Project Management Professional (PMP)",
    "PMP",
    "pmi",
    "Professional",
    2,
    { "project-manager": 5, "business-leader": 4 },
    ["Project leadership", "People", "Delivery", "Business environment"],
    "A relevant credential for eligible professionals leading projects. It helps organise and demonstrate project-management knowledge across delivery approaches.",
    "Best for experienced project leaders; eligibility depends on your education and project experience.",
    "https://www.pmi.org/certifications/project-management-pmp",
    {
      eligibility:
        "A PMI-approved application is required. Verify the current education, project-leadership experience and training requirements with PMI before booking.",
    },
  ),
  c(
    "capm",
    "Certified Associate in Project Management (CAPM)",
    "CAPM",
    "pmi",
    "Foundation",
    0,
    { "project-manager": 5, "business-leader": 4 },
    [
      "Project fundamentals",
      "Agile concepts",
      "Business analysis",
      "Predictive delivery",
    ],
    "A starting credential for aspiring project professionals who do not yet qualify for PMP.",
    "No project experience is required; build foundational project knowledge.",
    "https://www.pmi.org/certifications/certified-associate-capm",
    {
      eligibility:
        "Secondary education and 23 hours of project-management education are required. Check PMI for accepted equivalents.",
    },
  ),
  c(
    "pmi-acp",
    "PMI Agile Certified Practitioner (PMI-ACP)",
    "PMI-ACP",
    "pmi",
    "Professional",
    1,
    { "project-manager": 5, "business-leader": 4 },
    [
      "Agile delivery",
      "Scrum & Kanban",
      "Collaboration",
      "Continuous improvement",
    ],
    "Useful for project professionals working across agile approaches and helping teams deliver incrementally.",
    "Develop agile delivery experience before applying.",
    "https://www.pmi.org/certifications/agile-acp",
    {
      eligibility:
        "PMI requires education, qualifying agile experience and formal agile training. Accepted experience routes vary; check the official application criteria.",
    },
  ),
  c(
    "platform-administrator",
    "Salesforce Certified Platform Administrator",
    "Platform Administrator",
    "salesforce",
    "Associate",
    1,
    { "crm-consultant": 5, "business-leader": 4 },
    ["Salesforce setup", "Security", "Automation", "Reports"],
    "A core route for consultants and administrators configuring Salesforce to support business processes.",
    "Practise administration in Salesforce, including users, data, automation and reporting.",
    "https://trailhead.salesforce.com/en/credentials/platformadministrator",
  ),
  c(
    "agentforce-specialist",
    "Salesforce Certified Agentforce Specialist",
    "Agentforce Specialist",
    "salesforce",
    "Associate",
    1,
    { "crm-consultant": 5, "ai-engineer": 4, "business-leader": 4 },
    ["Agentforce", "Prompting", "Business agents", "Salesforce data"],
    "Useful for Salesforce professionals implementing agents within CRM processes and customer workflows.",
    "Build Salesforce platform knowledge and practical Agentforce implementation experience.",
    "https://trailhead.salesforce.com/en/credentials/agentforcespecialist",
    { ai: true },
  ),
  c(
    "ccna",
    "Cisco Certified Network Associate",
    "200-301 CCNA",
    "cisco",
    "Associate",
    0,
    { "network-engineer": 5, "cloud-engineer": 4, cybersecurity: 4 },
    [
      "Networking",
      "IP connectivity",
      "Network access",
      "Security fundamentals",
    ],
    "A strong entry route for networking roles and a supporting foundation for cloud and security work.",
    "No formal prerequisites; practise configuration and troubleshooting in networking labs.",
    "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
  ),
  c(
    "rhcsa",
    "Red Hat Certified System Administrator",
    "RHCSA / EX200",
    "red-hat",
    "Associate",
    1,
    { "cloud-engineer": 5, devops: 5, cybersecurity: 4 },
    ["Linux", "System administration", "Storage", "Access controls"],
    "Demonstrates practical Linux administration ability, useful across infrastructure, cloud operations and DevOps roles.",
    "Prepare through hands-on Linux system administration.",
    "https://www.redhat.com/en/services/certification/rhcsa",
  ),
  c(
    "cka",
    "Certified Kubernetes Administrator",
    "CKA",
    "linux-foundation",
    "Associate",
    1,
    { devops: 5, "cloud-engineer": 5, "cloud-architect": 4 },
    ["Kubernetes", "Cluster operations", "Troubleshooting", "Networking"],
    "A hands-on credential for engineers operating Kubernetes clusters across cloud providers.",
    "Build Linux, container and Kubernetes administration skills; practise timed troubleshooting.",
    "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  ),
  c(
    "terraform-associate",
    "HashiCorp Certified: Terraform Associate",
    "Terraform Associate",
    "hashicorp",
    "Associate",
    1,
    { devops: 5, "cloud-engineer": 5, "cloud-architect": 4 },
    [
      "Infrastructure as code",
      "Terraform state",
      "Modules",
      "Cloud automation",
    ],
    "Complements a cloud certification when you provision and manage infrastructure using Terraform.",
    "Practise real Terraform workflows, state management and reusable modules.",
    "https://developer.hashicorp.com/certifications/infrastructure-automation",
  ),
  c(
    "cissp",
    "Certified Information Systems Security Professional",
    "CISSP",
    "isc2",
    "Professional",
    2,
    { cybersecurity: 5, "cloud-architect": 4, "business-leader": 4 },
    [
      "Security architecture",
      "Risk management",
      "Operations",
      "Security governance",
    ],
    "A broad security credential for experienced practitioners and leaders responsible for organisational security decisions.",
    "Best after substantial security work across multiple domains.",
    "https://www.isc2.org/certifications/cissp",
    {
      eligibility:
        "ISC2 requires qualifying work experience and endorsement to earn CISSP. Passing the exam alone does not grant the full credential; check the Associate of ISC2 route if experience is incomplete.",
    },
  ),
  c(
    "aigp",
    "Artificial Intelligence Governance Professional",
    "AIGP",
    "iapp",
    "Professional",
    1,
    {
      "business-leader": 5,
      cybersecurity: 5,
      "project-manager": 4,
      "ai-engineer": 4,
    },
    ["AI governance", "Risk", "Responsible AI", "AI lifecycle"],
    "A cross-platform specialisation for people governing AI systems and connecting technical decisions with organisational responsibilities.",
    "Useful after exposure to AI, privacy, compliance, risk or governance work.",
    "https://iapp.org/certify/aigp",
    { ai: true },
  ),
  c(
    "cism",
    "Certified Information Security Manager",
    "CISM",
    "isaca",
    "Professional",
    2,
    { cybersecurity: 5, "business-leader": 4 },
    ["Security management", "Governance", "Risk", "Incident management"],
    "For security professionals moving into management and programme ownership, rather than an entry-level technical security role.",
    "Build experience managing information security programmes.",
    "https://www.isaca.org/credentialing/cism",
    {
      eligibility:
        "ISACA has separate experience and application requirements for certification. Exam success alone is not the complete credential.",
    },
  ),
  c(
    "agentic-ai-foundations",
    "Oracle Agentic AI Foundations Associate (2026)",
    "Agentic AI Foundations 2026",
    "oracle",
    "Foundation",
    0,
    { "ai-engineer": 5, "business-leader": 4, "software-developer": 4 },
    ["Agentic AI concepts", "AI agents", "Foundations", "Oracle AI"],
    "An introductory option for learning about agentic AI in the Oracle ecosystem. Follow it with a practical agent project.",
    "Begin with the official foundations learning path and practice assessment.",
    "https://learn.oracle.com/ols/learning-path/become-an-oracle-agentic-ai-foundations-associate-2026/146553/163239",
    { ai: true, fresh: true },
  ),
  c(
    "psm-i",
    "Professional Scrum Master I",
    "PSM I",
    "scrum-org",
    "Foundation",
    0,
    { "project-manager": 5, "business-leader": 4 },
    ["Scrum framework", "Facilitation", "Empiricism", "Team effectiveness"],
    "Useful for developing Scrum knowledge before taking on more advanced team-coaching responsibilities.",
    "Study the Scrum Guide and practise applying Scrum to realistic team situations.",
    "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
  ),
  // Expanded provider coverage, reviewed 13 September 2026.
  c("claude-associate-foundations", "Claude Certified Associate: Foundations", "Associate: Foundations", "anthropic", "Foundation", 0, {"business-leader": 5, "project-manager": 5, "crm-consultant": 5}, ["Everyday Claude use", "Applied AI workflows", "Business use cases"], "Validate practical Claude skills for work.", "For people using Claude on team or client projects.", "https://claude.com/blog/four-role-based-claude-certifications", {"ai": true, "fresh": true, "access": "Partner access", "eligibility": "Claude Partner Network members only. Check your organisation’s practitioner access and the selected exam requirements before booking."}),
  c("claude-developer-foundations", "Claude Certified Developer: Foundations", "Developer: Foundations", "anthropic", "Foundation", 1, {"software-developer": 5, "ai-engineer": 5}, ["Claude API", "Tool use", "Agent development"], "Demonstrate Claude application-building skills.", "For engineers with coding and API experience.", "https://claude.com/blog/four-role-based-claude-certifications", {"ai": true, "fresh": true, "access": "Partner access", "eligibility": "Claude Partner Network members only. Check your organisation’s practitioner access and the selected exam requirements before booking."}),
  c("claude-architect-foundations", "Claude Certified Architect: Foundations", "Architect: Foundations", "anthropic", "Foundation", 1, {"ai-engineer": 5, "cloud-architect": 5}, ["Agent systems", "Solution design", "Claude integrations"], "Validate Claude agent architecture skills.", "For architects designing Claude-based systems.", "https://claude.com/blog/four-role-based-claude-certifications", {"ai": true, "fresh": true, "access": "Partner access", "eligibility": "Claude Partner Network members only. Check your organisation’s practitioner access and the selected exam requirements before booking."}),
  c("claude-architect-professional", "Claude Certified Architect: Professional", "Architect: Professional", "anthropic", "Professional", 2, {"cloud-architect": 5, "ai-engineer": 5}, ["Enterprise integration", "Governance", "Evaluation"], "Demonstrate advanced enterprise Claude architecture skills.", "For experienced architects; check the foundation pathway first.", "https://claude.com/blog/four-role-based-claude-certifications", {"ai": true, "fresh": true, "access": "Partner access", "eligibility": "Claude Partner Network members only. Check your organisation’s practitioner access and the selected exam requirements before booking."}),
  c("pgmp", "Program Management Professional (PgMP)", "PgMP", "pmi", "Professional", 2, {"project-manager": 5, "business-leader": 5}, ["Programme strategy", "Benefits management", "Stakeholder governance"], "For coordinating related projects around shared business outcomes.", "For experienced programme managers with documented leadership of multiple related projects.", "https://www.pmi.org/certifications/program-management-pgmp", {"eligibility": "Education and relevant experience requirements vary by application route. Check the official eligibility table and prepare supporting records before applying.", "ai": false}),
  c("pfmp", "Portfolio Management Professional (PfMP)", "PfMP", "pmi", "Professional", 2, {"project-manager": 5, "business-leader": 5}, ["Portfolio alignment", "Investment prioritisation", "Portfolio governance"], "For leaders who select and balance investments against business strategy.", "For senior portfolio leaders with substantial business and portfolio experience.", "https://www.pmi.org/certifications/portfolio-management-pfmp", {"eligibility": "Education and relevant experience requirements vary by application route. Check the official eligibility table and prepare supporting records before applying.", "ai": false}),
  c("pmi-rmp", "PMI Risk Management Professional (PMI-RMP)", "PMI-RMP", "pmi", "Professional", 1, {"project-manager": 5, "business-leader": 5}, ["Risk identification", "Risk analysis", "Risk responses"], "For professionals who turn project uncertainty into structured decisions.", "Build on practical responsibility for project risks and response planning.", "https://www.pmi.org/certifications/risk-management-rmp", {"eligibility": "Education and relevant experience requirements vary by application route. Check the official eligibility table and prepare supporting records before applying.", "ai": false}),
  c("pmi-pba", "PMI Professional in Business Analysis (PMI-PBA)", "PMI-PBA", "pmi", "Professional", 1, {"project-manager": 5, "business-leader": 5}, ["Requirements", "Stakeholder needs", "Solution evaluation"], "For analysts connecting business needs to project deliverables.", "For practitioners who elicit, analyse and manage requirements.", "https://www.pmi.org/certifications/business-analysis-pba", {"eligibility": "Education and relevant experience requirements vary by application route. Check the official eligibility table and prepare supporting records before applying.", "ai": false}),
  c("pmi-sp", "PMI Scheduling Professional (PMI-SP)", "PMI-SP", "pmi", "Professional", 1, {"project-manager": 5, "business-leader": 5}, ["Schedule development", "Schedule control", "Critical path"], "For planning specialists responsible for reliable project schedules.", "Bring hands-on scheduling and monitoring experience.", "https://www.pmi.org/certifications/scheduling-sp", {"eligibility": "Education and relevant experience requirements vary by application route. Check the official eligibility table and prepare supporting records before applying.", "ai": false}),
  c("pmi-cp", "PMI Construction Professional (PMI-CP)", "PMI-CP", "pmi", "Professional", 1, {"project-manager": 5, "business-leader": 5}, ["Construction delivery", "Contracts", "Stakeholder engagement"], "For project professionals working in construction and the built environment.", "Choose this when your experience includes construction delivery.", "https://www.pmi.org/certifications/construction", {"eligibility": "Review PMI’s required construction learning courses and construction or built-environment experience criteria before applying.", "ai": false}),
  c("pmi-pmocp", "PMI PMO Certified Professional (PMI-PMOCP)", "PMI-PMOCP", "pmi", "Professional", 1, {"project-manager": 5, "business-leader": 5}, ["PMO design", "PMO services", "Value delivery"], "For PMO professionals aligning their services with organisational needs.", "For people establishing, operating or improving a project management office.", "https://www.pmi.org/certifications/pmo-certified-professional-pmi-pmocp", {"eligibility": "A secondary degree, 3 years of project-related experience in the last 8 years OR a PMP in good standing, and 10 hours of PMO education. Confirm the current PMI checklist.", "ai": false}),
  c("pmi-cpmai", "PMI Certified Professional in Managing AI (PMI-CPMAI)", "PMI-CPMAI", "pmi", "Professional", 0, {"project-manager": 5, "business-leader": 5}, ["AI project lifecycle", "Data readiness", "Business value"], "For leading AI projects from a business need through delivery.", "A useful route for project leaders moving into AI initiatives.", "https://www.pmi.org/certifications/ai-project-management-cpmai", {"eligibility": "PMI lists no prior work-experience requirement. Follow the credential’s current learning, purchase and exam instructions.", "ai": true}),
  c("cspp", "Certified Sustainable Project Professional (CSPP)", "CSPP", "pmi", "Foundation", 0, {"project-manager": 5, "business-leader": 5}, ["Sustainability", "Project impacts", "Responsible delivery"], "For bringing sustainability considerations into project decisions.", "For project professionals adding sustainability knowledge.", "https://www.pmi.org/certifications/sustainability-cspp", {"eligibility": "PMI lists no prior work-experience requirement. Follow the credential’s current learning, purchase and exam instructions.", "ai": false}),
  c("platform-administrator-ii", "Salesforce Certified Platform Administrator II", "Platform Administrator II", "salesforce", "Professional", 2, {"crm-consultant": 5}, ["Advanced configuration", "Automation", "Administration"], "For experienced administrators solving more complex platform requirements.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/platformadministrator-ii", {"eligibility": "Earn Salesforce Platform Administrator before pursuing Platform Administrator II; check the linked prerequisites.", "aliases": ["Advanced Administrator"]}),
  c("platform-app-builder", "Salesforce Certified Platform App Builder", "Platform App Builder", "salesforce", "Associate", 1, {"crm-consultant": 5}, ["Data modelling", "Declarative apps", "Business automation"], "For building custom business applications with Salesforce configuration tools.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/platformappbuilder", {"eligibility": "Check the current exam guide for prerequisite credentials, registration and maintenance requirements.", "aliases": []}),
  c("platform-developer", "Salesforce Certified Platform Developer", "Platform Developer", "salesforce", "Associate", 1, {"crm-consultant": 5, "software-developer": 5}, ["Apex", "Lightning Platform", "Custom interfaces"], "For developers extending Salesforce with custom logic and interfaces.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/platformdeveloperi", {"eligibility": "Check the current exam guide for prerequisite credentials, registration and maintenance requirements.", "aliases": ["Platform Developer I", "PD1"]}),
  c("platform-developer-ii", "Salesforce Certified Platform Developer II", "Platform Developer II", "salesforce", "Professional", 2, {"crm-consultant": 5, "software-developer": 5}, ["Advanced Apex", "Application design", "Data modelling"], "For developers building complex, maintainable Salesforce applications.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/platformdeveloperii", {"eligibility": "Complete the prerequisite Platform Developer credential and all current credential requirements listed by Salesforce.", "aliases": ["PD2"]}),
  c("business-analyst", "Salesforce Certified Business Analyst", "Business Analyst", "salesforce", "Associate", 1, {"crm-consultant": 5}, ["Requirements", "Stakeholder collaboration", "Process analysis"], "For translating business problems into clear Salesforce solution requirements.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/businessanalyst", {"eligibility": "Check the current exam guide for prerequisite credentials, registration and maintenance requirements.", "aliases": []}),
  c("agentforce-sales-consultant", "Salesforce Certified Agentforce Sales Consultant", "Agentforce Sales Consultant", "salesforce", "Associate", 1, {"crm-consultant": 5}, ["Sales processes", "Solution design", "Sales Cloud"], "For consultants designing Salesforce sales solutions around customer needs.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/agfsalesconsultant", {"eligibility": "Check the current exam guide for prerequisite credentials, registration and maintenance requirements.", "aliases": ["Sales Cloud Consultant"]}),
  c("agentforce-service-consultant", "Salesforce Certified Agentforce Service Consultant", "Agentforce Service Consultant", "salesforce", "Associate", 1, {"crm-consultant": 5}, ["Service processes", "Solution design", "Service Cloud"], "For consultants implementing scalable Salesforce customer-service solutions.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/agfserviceconsultant", {"eligibility": "Check the current exam guide for prerequisite credentials, registration and maintenance requirements.", "aliases": ["Service Cloud Consultant"]}),
  c("data-360-consultant", "Salesforce Certified Data 360 Consultant", "Data 360 Consultant", "salesforce", "Associate", 1, {"crm-consultant": 5, "data-engineer": 5}, ["Enterprise data", "Data implementation", "Customer data"], "For consultants implementing Salesforce enterprise data solutions.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/data360consultant", {"eligibility": "Check the current exam guide for prerequisite credentials, registration and maintenance requirements.", "aliases": ["Data Cloud Consultant"]}),
  c("tableau-data-analyst", "Salesforce Certified Tableau Data Analyst", "Tableau Data Analyst", "salesforce", "Associate", 1, {"crm-consultant": 5, "data-analyst": 5}, ["Visual analytics", "Data exploration", "Business insights"], "For analysts turning business questions into actionable Tableau insights.", "Practise the relevant Salesforce product in a hands-on environment before booking.", "https://trailhead.salesforce.com/en/credentials/tableaudataanalyst", {"eligibility": "Check the current exam guide for prerequisite credentials, registration and maintenance requirements.", "aliases": []}),
  c("ccst-networking", "Cisco Certified Support Technician Networking", "CCST Networking", "cisco", "Foundation", 0, {"network-engineer": 5}, ["Network fundamentals", "Connectivity", "Troubleshooting"], "An entry route to learning how networks work.", "Start with fundamentals and labs.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/support-technician/index.html", {"eligibility": "Review the current exam topics and identification requirements. No formal prerequisite credential is required for this track.", "aliases": []}),
  c("ccst-cybersecurity", "Cisco Certified Support Technician Cybersecurity", "CCST Cybersecurity", "cisco", "Foundation", 0, {"cybersecurity": 5}, ["Security fundamentals", "Threats", "Incident basics"], "An entry route to cybersecurity support and further study.", "Start with fundamentals and labs.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/support-technician/index.html", {"eligibility": "Review the current exam topics and identification requirements. No formal prerequisite credential is required for this track.", "aliases": []}),
  c("ccst-it-support", "Cisco Certified Support Technician IT Support", "CCST IT Support", "cisco", "Foundation", 0, {"cloud-engineer": 5, "network-engineer": 5}, ["Help desk", "Device support", "Troubleshooting"], "For people starting in help desk and user support.", "Start with fundamentals and labs.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/support-technician/index.html", {"eligibility": "Review the current exam topics and identification requirements. No formal prerequisite credential is required for this track.", "aliases": []}),
  c("ccna-automation", "Cisco CCNA Automation", "200-901 CCNAAUTO", "cisco", "Associate", 1, {"network-engineer": 5, "devops": 5, "software-developer": 5}, ["Network APIs", "Automation", "Programmability"], "For automating work across Cisco infrastructure.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/automation/ccna-automation/index.html", {"eligibility": "Review the current exam topics and identification requirements. No formal prerequisite credential is required for this track.", "aliases": ["DevNet"]}),
  c("ccna-cybersecurity", "Cisco CCNA Cybersecurity", "200-201 CCNACBR", "cisco", "Associate", 1, {"cybersecurity": 5}, ["SOC operations", "Threat detection", "Incident response"], "For the daily detection and response work of a security operations team.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cybersecurity/ccna-cybersecurity/index.html", {"eligibility": "Review the current exam topics and identification requirements. No formal prerequisite credential is required for this track.", "aliases": ["CyberOps"]}),
  c("ccnp-automation", "Cisco CCNP Automation", "Core + concentration", "cisco", "Professional", 2, {"network-engineer": 5, "devops": 5}, ["Automation design", "Deployment", "Secure applications"], "For maintaining network automation at greater scale.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/automation/ccnp-automation/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": ["DevNet"]}),
  c("ccnp-cybersecurity", "Cisco CCNP Cybersecurity", "Core + concentration", "cisco", "Professional", 2, {"cybersecurity": 5}, ["Security operations", "Incident investigation", "Threat analysis"], "For handling more complex security operations challenges.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cybersecurity/ccnp-cybersecurity/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": ["CyberOps"]}),
  c("ccnp-enterprise", "Cisco CCNP Enterprise", "Core + concentration", "cisco", "Professional", 2, {"network-engineer": 5}, ["Enterprise routing", "Infrastructure", "Troubleshooting"], "For engineers operating complex enterprise networks.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccnp-enterprise/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": []}),
  c("ccnp-security", "Cisco CCNP Security", "Core + concentration", "cisco", "Professional", 2, {"cybersecurity": 5, "network-engineer": 5}, ["Network security", "Secure access", "Infrastructure protection"], "For engineers protecting enterprise networks and data.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/security/ccnp-security/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": []}),
  c("ccnp-data-center", "Cisco CCNP Data Center", "Core + concentration", "cisco", "Professional", 2, {"network-engineer": 5, "cloud-engineer": 5}, ["Data centre networks", "Compute", "Storage"], "For engineers working across data centre infrastructure.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/datacenter/ccnp-data-center/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": []}),
  c("ccnp-collaboration", "Cisco CCNP Collaboration", "Core + concentration", "cisco", "Professional", 2, {"network-engineer": 5}, ["Collaboration systems", "Communications", "Infrastructure"], "For engineers delivering enterprise collaboration services.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/collaboration/ccnp-collaboration/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": []}),
  c("ccnp-service-provider", "Cisco CCNP Service Provider", "Core + concentration", "cisco", "Professional", 2, {"network-engineer": 5}, ["Service provider networks", "IP infrastructure", "Network optimisation"], "For engineers operating service provider infrastructure.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/service-provider/ccnp-service-provider/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": []}),
  c("ccnp-wireless", "Cisco CCNP Wireless", "Core + concentration", "cisco", "Professional", 2, {"network-engineer": 5}, ["Wireless design", "Wireless implementation", "Network operations"], "For engineers specialising in modern wireless networks.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/wireless/ccnp-wireless/index.html", {"eligibility": "Earn the credential through the current core exam and one eligible concentration exam. A single exam does not award the full CCNP credential.", "aliases": []}),
  c("ccie-enterprise-infrastructure", "Cisco CCIE Enterprise Infrastructure", "Qualifying exam + lab", "cisco", "Expert", 2, {"network-engineer": 5, "cloud-architect": 5}, ["Infrastructure design", "Implementation", "Expert troubleshooting"], "For experienced engineers validating enterprise infrastructure expertise through practical assessment.", "Build hands-on experience with this Cisco technology before attempting the assessment.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccie-enterprise-infrastructure/index.html", {"eligibility": "Pass the qualifying exam and the required practical lab. Check the separate lab booking process and qualifying-exam validity.", "aliases": []}),
  c("cisa", "Certified Information Systems Auditor (CISA)", "CISA", "isaca", "Professional", 2, {"cybersecurity": 5, "business-leader": 5}, ["IT audit", "Controls", "Assurance"], "For professionals who assess information systems and their controls.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/cisa", {"eligibility": "The certification award has professional-experience and application requirements. Passing the exam alone does not satisfy the full credential requirements; review ISACA’s current checklist."}),
  c("crisc", "Certified in Risk and Information Systems Control (CRISC)", "CRISC", "isaca", "Professional", 2, {"cybersecurity": 5, "business-leader": 5}, ["IT risk", "Risk response", "Control monitoring"], "For professionals connecting technology risk to business decisions.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/crisc", {"eligibility": "The certification award has professional-experience and application requirements. Passing the exam alone does not satisfy the full credential requirements; review ISACA’s current checklist."}),
  c("cgeit", "Certified in the Governance of Enterprise IT (CGEIT)", "CGEIT", "isaca", "Professional", 2, {"cybersecurity": 5, "business-leader": 5}, ["IT governance", "Strategic alignment", "Value delivery"], "For leaders aligning enterprise technology with organisational goals.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/cgeit", {"eligibility": "The certification award has professional-experience and application requirements. Passing the exam alone does not satisfy the full credential requirements; review ISACA’s current checklist."}),
  c("cdpse", "Certified Data Privacy Solutions Engineer (CDPSE)", "CDPSE", "isaca", "Professional", 2, {"cybersecurity": 5, "business-leader": 5}, ["Privacy engineering", "Data lifecycle", "Privacy governance"], "For practitioners building privacy into technology and data systems.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/cdpse", {"eligibility": "The certification award has professional-experience and application requirements. Passing the exam alone does not satisfy the full credential requirements; review ISACA’s current checklist."}),
  c("ccoa", "Certified Cybersecurity Operations Analyst (CCOA)", "CCOA", "isaca", "Professional", 1, {"cybersecurity": 5}, ["Threat detection", "Incident response", "Security operations"], "For practitioners developing hands-on security operations capability.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/ccoa", {"eligibility": "Review the CCOA exam and certification requirements directly with ISACA before registering."}),
  c("aaia", "Advanced in AI Audit (AAIA)", "AAIA", "isaca", "Professional", 2, {"cybersecurity": 5, "business-leader": 5}, ["AI governance", "AI operations", "AI auditing"], "For qualified auditors extending their work into AI assurance.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/aaia", {"eligibility": "An active CISA or another ISACA-approved audit/accounting designation is required; some designations also require an IT audit or advisory role focus.", "ai": true, "fresh": true, "note": "For residents of India, Mainland China and Hong Kong, this exam is available at testing centres only. Confirm local delivery options and the eligibility period before payment."}),
  c("aaism", "Advanced in AI Security Management (AAISM)", "AAISM", "isaca", "Professional", 2, {"cybersecurity": 5, "business-leader": 5}, ["AI security", "AI controls", "Risk management"], "For experienced security managers overseeing AI-specific risks.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/aaism", {"eligibility": "An active CISM or CISSP certification is required.", "ai": true, "fresh": true, "note": "For residents of India, Mainland China and Hong Kong, this exam is available at testing centres only. Confirm local delivery options and the eligibility period before payment."}),
  c("aair", "Advanced in AI Risk (AAIR)", "AAIR", "isaca", "Professional", 2, {"cybersecurity": 5, "business-leader": 5}, ["AI risk governance", "Lifecycle risk", "Risk programmes"], "For qualified risk professionals assessing enterprise AI initiatives.", "For working security, risk, audit or governance professionals; match your experience to the specific credential.", "https://www.isaca.org/credentialing/aair", {"eligibility": "An active qualifying designation is required. Accepted examples include CISA, CISM, CRISC, CGEIT, CDPSE, CISSP and PMI-RMP; check the full current list.", "ai": true, "fresh": true, "note": "For residents of India, Mainland China and Hong Kong, this exam is available at testing centres only. Confirm local delivery options and the eligibility period before payment."}),
  c("a-plus", "CompTIA A+", "A+", "comptia", "Foundation", 0, {"cloud-engineer": 5, "network-engineer": 5}, ["Hardware", "Operating systems", "Technical support"], "For building practical IT support foundations.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-a-ce-certification.1", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("network-plus", "CompTIA Network+", "Network+", "comptia", "Associate", 1, {"network-engineer": 5, "cloud-engineer": 5}, ["Network configuration", "Connectivity", "Troubleshooting"], "For validating networking skills across vendors.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-network-ce-certification.1", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("security-plus", "CompTIA Security+", "Security+", "comptia", "Associate", 1, {"cybersecurity": 5}, ["Threats", "Security controls", "Risk management"], "For building a broad base of applied security knowledge.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-security-ce-certification", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("cysa-plus", "CompTIA CySA+", "CySA+", "comptia", "Professional", 2, {"cybersecurity": 5}, ["Threat hunting", "Security monitoring", "Incident response"], "For analysts investigating and responding to security events.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-cysa-ce-certification", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("pentest-plus", "CompTIA PenTest+", "PenTest+", "comptia", "Professional", 2, {"cybersecurity": 5}, ["Scoping", "Vulnerability assessment", "Security reporting"], "For security professionals conducting authorised penetration testing.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-pentest-ce-certification", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("securityx", "CompTIA SecurityX", "SecurityX", "comptia", "Professional", 2, {"cybersecurity": 5, "cloud-architect": 5}, ["Security architecture", "Security engineering", "Enterprise risk"], "For senior practitioners designing resilient security solutions.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-securityx-ce-certification", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": ["CASP+"]}),
  c("linux-plus", "CompTIA Linux+", "Linux+", "comptia", "Associate", 1, {"cloud-engineer": 5, "devops": 5}, ["Linux administration", "Shell scripting", "System services"], "For administrators working with Linux infrastructure.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-linux-ce-certification", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("cloud-plus", "CompTIA Cloud+", "Cloud+", "comptia", "Associate", 1, {"cloud-engineer": 5, "devops": 5}, ["Cloud deployment", "Cloud operations", "Troubleshooting"], "For practitioners managing cloud infrastructure across platforms.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-cloud-ce-certification.1", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("data-plus", "CompTIA Data+", "Data+", "comptia", "Foundation", 0, {"data-analyst": 5}, ["Data analysis", "Statistics", "Visualisation"], "For analysts developing a vendor-neutral data foundation.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-data-ce", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("cloudnetx", "CompTIA CloudNetX", "CloudNetX", "comptia", "Professional", 2, {"network-engineer": 5, "cloud-architect": 5}, ["Hybrid networks", "Zero Trust", "Network automation"], "For experienced architects designing secure hybrid networks.", "Build hands-on practice in the relevant job role; compare your experience with CompTIA’s recommendations.", "https://www.credly.com/org/comptia/badge/comptia-cloudnetx-ce", {"sourceKind": "Issuer badge", "eligibility": "Review CompTIA’s current exam objectives, recommended experience and candidate policies. Confirm the live version, region and voucher validity in CompTIA Central.", "note": "Credential scope checked against CompTIA’s own issued badge. Confirm the current exam code, retirement dates and appointment options in CompTIA Central before buying or scheduling.", "aliases": []}),
  c("cipm", "Certified Information Privacy Manager (CIPM)", "CIPM", "iapp", "Professional", 1, {"cybersecurity": 5, "business-leader": 5}, ["Privacy programmes", "Operational governance", "Programme management"], "For people responsible for running an organisation’s privacy programme.", "Choose the credential matching your privacy responsibilities and the jurisdictions your organisation serves.", "https://iapp.org/certify/cipm", {"eligibility": "Read IAPP’s candidate handbook, the current body of knowledge and the credential maintenance requirements before purchasing the exam."}),
  c("cipt", "Certified Information Privacy Technologist (CIPT)", "CIPT", "iapp", "Professional", 1, {"cybersecurity": 5, "business-leader": 5}, ["Privacy by design", "Technology risks", "Privacy controls"], "For technologists making privacy decisions in product and system design.", "Choose the credential matching your privacy responsibilities and the jurisdictions your organisation serves.", "https://iapp.org/certify/cipt", {"eligibility": "Read IAPP’s candidate handbook, the current body of knowledge and the credential maintenance requirements before purchasing the exam."}),
  c("cipp-e", "Certified Information Privacy Professional / Europe (CIPP/E)", "CIPP/E", "iapp", "Professional", 1, {"cybersecurity": 5, "business-leader": 5}, ["European privacy", "Data protection", "Privacy frameworks"], "For practitioners working with European privacy requirements.", "Choose the credential matching your privacy responsibilities and the jurisdictions your organisation serves.", "https://iapp.org/certify/cipp", {"eligibility": "Read IAPP’s candidate handbook, the current body of knowledge and the credential maintenance requirements before purchasing the exam."}),
  c("cipp-us", "Certified Information Privacy Professional / United States (CIPP/US)", "CIPP/US", "iapp", "Professional", 1, {"cybersecurity": 5, "business-leader": 5}, ["US privacy", "Sectoral requirements", "Privacy frameworks"], "For practitioners working with United States privacy requirements.", "Choose the credential matching your privacy responsibilities and the jurisdictions your organisation serves.", "https://iapp.org/certify/cipp", {"eligibility": "Read IAPP’s candidate handbook, the current body of knowledge and the credential maintenance requirements before purchasing the exam."}),
];
export const certKey = (cert: Certification) => `${cert.provider}/${cert.id}`;
export const certUrl = (cert: Certification) =>
  `/certifications/${certKey(cert)}`;
export const isAvailable = (
  cert: Certification,
  today = new Date().toISOString().slice(0, 10),
) =>
  (!cert.retireOn || today <= cert.retireOn) &&
  (!cert.availableFrom || today >= cert.availableFrom);
export function fitScore(
  cert: Certification,
  role: string,
  experience: Experience,
): number {
  const relevance = role === "all" ? 4 : cert.roles[role as RoleId] || 0;
  if (!relevance) return 0;
  if (experience === "all") return relevance;
  const stage = { beginner: 0, working: 1, senior: 2 }[experience];
  const readiness =
    cert.stage === stage
      ? 5
      : cert.stage < stage
        ? 3
        : cert.stage === stage + 1
          ? 2
          : 1;
  return Math.round((relevance * 0.7 + readiness * 0.3) * 10) / 10;
}
export function getMatches({
  role = "all",
  experience = "all",
  provider = "all",
  query = "",
  aiOnly = false,
  includeBeta = true,
  today,
}: {
  role?: string;
  experience?: Experience;
  provider?: string;
  query?: string;
  aiOnly?: boolean;
  includeBeta?: boolean;
  today?: string;
} = {}) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return certifications
    .filter(
      (c) =>
        isAvailable(c, today) &&
        (!aiOnly || c.ai) &&
        (includeBeta || c.status !== "Beta") &&
        (provider === "all" || c.provider === provider) &&
        (role === "all" || c.roles[role as RoleId]) &&
        terms.every((t) =>
          [c.name, c.exam, c.provider, ...(c.aliases || []), ...c.skills, ...Object.keys(c.roles)]
            .join(" ")
            .toLowerCase()
            .includes(t),
        ),
    )
    .sort(
      (a, b) =>
        fitScore(b, role, experience) - fitScore(a, role, experience) ||
        a.stage - b.stage ||
        a.name.localeCompare(b.name),
    );
}
export function certificationEnquiry(items: Pick<Certification, "name" | "exam">[]) {
  const selection = items.map(c => `${c.name} (${c.exam})`).join("; ");
  return whatsappUrl(`Hi Global Certs IT! I am interested in ${selection || "a global certification"}. Please share the price and payment details.`);
}
export function whatsappUrl(message: string) {
  return `https://wa.me/919392828155?text=${encodeURIComponent(message)}`;
}
export const providerById = (id: string) => providers.find((p) => p.id === id);
export const retiredAlternatives = [
  {
    exam: "AI-900",
    current: "Azure AI Fundamentals now uses AI-901.",
    source: ms("azure-ai-fundamentals"),
  },
  {
    exam: "AI-102",
    current: "Explore AI-103 for Azure AI apps and agents.",
    source: ms("azure-ai-apps-and-agents-developer-associate"),
  },
  {
    exam: "DP-203",
    current:
      "For Microsoft Fabric data engineering, explore DP-700. Fabric is a different platform focus; it is not the same exam.",
    source: ms("fabric-data-engineer-associate"),
  },
  {
    exam: "SysOps Administrator",
    current: "Look for AWS CloudOps Engineer – Associate.",
    source: aws("cloudops-engineer-associate"),
  },
];
