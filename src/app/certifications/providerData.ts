export const providerData: Record<string, any> = {
  aws: {
    name: "AWS Certification Training",
    desc: "Prepare for a career in cloud computing with industry-recognized AWS certifications. Get complete personalized guidance.",
    modules: [
      "Cloud Computing Fundamentals", "AWS Global Infrastructure", "Compute Services", 
      "Storage Services", "Networking", "Security and Identity Management", 
      "Databases", "Monitoring", "Architecture Concepts", "Hands-on Learning"
    ],
    careers: ["Cloud Support Associate", "Cloud Engineer", "AWS Administrator", "Solutions Architect", "DevOps Engineer"],
    eligibility: ["Students", "Fresh graduates", "IT professionals", "System administrators", "Software professionals"],
    vouchers: [
      { name: "AWS Cloud Practitioner (Foundational)", original: "$100 + taxes", discounted: "₹6,000" },
      { name: "AWS Associate Level", original: "$150 + taxes", discounted: "₹9,000" },
      { name: "AWS Professional / Specialty", original: "$300 + taxes", discounted: "₹22,000" }
    ]
  },
  microsoft: {
    name: "Microsoft Azure Certification",
    desc: "Develop cloud skills using Microsoft's Azure platform. Tailored personalized training ensures you get certified on your first attempt.",
    modules: [
      "Cloud Concepts", "Azure Architecture", "Compute Services", 
      "Storage", "Networking", "Identity and Security", 
      "Governance", "Monitoring", "Azure Administration", "Hands-on Practice"
    ],
    careers: ["Azure Administrator", "Cloud Engineer", "Azure Solutions Architect", "Cloud Support Engineer", "DevOps Engineer"],
    eligibility: ["Students", "Graduates", "IT professionals", "System administrators", "Developers"],
    vouchers: [
      { name: "Microsoft Fundamentals", original: "Contact us", discounted: "Best Price on WhatsApp" },
      { name: "Microsoft Associate", original: "Contact us", discounted: "Best Price on WhatsApp" },
      { name: "Microsoft Expert", original: "Contact us", discounted: "Best Price on WhatsApp" }
    ]
  },
  salesforce: {
    name: "Salesforce Certification Training",
    desc: "Learn one of the world's leading CRM platforms and develop skills for business and technology roles.",
    modules: [
      "Salesforce Fundamentals", "CRM Concepts", "Salesforce Administration", 
      "Users and Security", "Data Management", "Reports and Dashboards", 
      "Automation", "Sales Cloud", "Service Cloud", "Configuration"
    ],
    careers: ["Salesforce Administrator", "Salesforce Consultant", "Salesforce Developer", "CRM Specialist", "Salesforce Business Analyst"],
    eligibility: ["Students", "Freshers", "Graduates", "IT professionals", "Business professionals"],
    vouchers: [
      { name: "Salesforce Administrator", original: "Contact us", discounted: "Best Price on WhatsApp" },
      { name: "Salesforce Advanced", original: "Contact us", discounted: "Best Price on WhatsApp" }
    ]
  },
  'google-cloud': {
    name: "Google Cloud Certification Training",
    desc: "Master Google Cloud Platform with our certification training. From Cloud Digital Leader to Professional Cloud Architect.",
    modules: [
      "Google Cloud Fundamentals", "Compute Engine", "Cloud Storage", 
      "VPC Networking", "Cloud IAM", "Cloud Databases", 
      "Kubernetes Engine", "Big Data", "Machine Learning", "Deployment Manager"
    ],
    careers: ["Cloud Engineer", "Cloud Architect", "Data Engineer", "Cloud Developer", "DevOps Engineer"],
    eligibility: ["Students", "Cloud Enthusiasts", "IT professionals", "Developers", "Data Analysts"],
    vouchers: [
      { name: "Google Cloud Digital Leader", original: "$99 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Google Cloud Associate", original: "$125 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Google Cloud Professional", original: "$200 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  cisco: {
    name: "Cisco Certification Training",
    desc: "Build your IT career with Cisco certifications. Get trained in networking, security, automation, and more.",
    modules: [
      "Networking Fundamentals", "Network Access", "IP Connectivity", 
      "IP Services", "Security Fundamentals", "Automation and Programmability", 
      "Routing and Switching", "Wireless Networking", "Network Troubleshooting", "Hands-on Labs"
    ],
    careers: ["Network Engineer", "Systems Engineer", "Network Administrator", "Security Analyst", "IT Manager"],
    eligibility: ["Students", "Network Enthusiasts", "IT Helpdesk", "System administrators", "Telecom professionals"],
    vouchers: [
      { name: "Cisco CCNA", original: "$300 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Cisco CCNP", original: "Contact us", discounted: "Best Price on WhatsApp" },
      { name: "Cisco CCIE", original: "Contact us", discounted: "Best Price on WhatsApp" }
    ]
  },
  comptia: {
    name: "CompTIA Certification Training",
    desc: "Start or advance your IT career with vendor-neutral CompTIA certifications like A+, Network+, and Security+.",
    modules: [
      "Hardware and Devices", "Networking Concepts", "Cybersecurity", 
      "Operating Systems", "Software Troubleshooting", "IT Operations", 
      "Cloud Computing", "Risk Management", "Cryptography", "Mobile Devices"
    ],
    careers: ["IT Support Specialist", "Help Desk Technician", "Network Administrator", "Security Specialist", "Systems Administrator"],
    eligibility: ["Beginners", "Students", "Career Changers", "IT Support Staff", "System administrators"],
    vouchers: [
      { name: "CompTIA A+", original: "$253 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "CompTIA Network+", original: "$369 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "CompTIA Security+", original: "$404 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  oracle: {
    name: "Oracle Certification Training",
    desc: "Gain expertise in Oracle Database, Java, and Cloud Infrastructure with our comprehensive training and certification programs.",
    modules: [
      "Database Administration", "SQL Fundamentals", "PL/SQL Programming", 
      "Oracle Cloud Infrastructure", "Java Programming", "WebLogic Server", 
      "Cloud Security", "Autonomous Database", "Data Guard", "Performance Tuning"
    ],
    careers: ["Database Administrator", "Java Developer", "Cloud Engineer", "Oracle Consultant", "Data Architect"],
    eligibility: ["Students", "DBAs", "Software Developers", "IT professionals", "Cloud Engineers"],
    vouchers: [
      { name: "Oracle Cloud Infrastructure (OCI)", original: "$150 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Oracle Database", original: "$245 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Oracle Java", original: "$245 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  vmware: {
    name: "VMware Certification Training",
    desc: "Validate your skills in virtualization, cloud computing, and digital workspace technologies with VMware certifications.",
    modules: [
      "vSphere Concepts", "Virtual Machine Management", "vCenter Server", 
      "Storage Virtualization", "Network Virtualization", "Resource Management", 
      "High Availability", "Fault Tolerance", "NSX Fundamentals", "vSAN"
    ],
    careers: ["Virtualization Engineer", "Cloud Administrator", "Systems Engineer", "Datacenter Architect", "IT Manager"],
    eligibility: ["System administrators", "Network engineers", "Cloud professionals", "IT Support", "Consultants"],
    vouchers: [
      { name: "VMware Certified Technical Associate (VCTA)", original: "$125 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "VMware Certified Professional (VCP)", original: "$250 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "VMware Certified Advanced Professional (VCAP)", original: "$450 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  'red-hat': {
    name: "Red Hat Certification Training",
    desc: "Prove your skills with Linux, containers, and Kubernetes through hands-on, performance-based Red Hat certifications.",
    modules: [
      "Linux System Administration", "Command Line Tools", "User and Group Management", 
      "File Systems and Storage", "Security Basics", "Network Configuration", 
      "Container Management", "OpenShift Fundamentals", "Ansible Automation", "Troubleshooting"
    ],
    careers: ["Linux Administrator", "DevOps Engineer", "Cloud Engineer", "Systems Architect", "Site Reliability Engineer"],
    eligibility: ["System administrators", "Developers", "IT professionals", "DevOps Enthusiasts", "Students"],
    vouchers: [
      { name: "Red Hat Certified System Administrator (RHCSA)", original: "$500 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Red Hat Certified Engineer (RHCE)", original: "$500 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Red Hat Certified Specialist", original: "$500 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  ibm: {
    name: "IBM Certification Training",
    desc: "Build credentials in AI, Data, Cloud, and Security with IBM certifications. Accelerate your tech career.",
    modules: [
      "IBM Cloud Fundamentals", "Data Science Concepts", "Artificial Intelligence", 
      "Machine Learning", "IBM Watson", "Cybersecurity Basics", 
      "Blockchain", "Quantum Computing", "Enterprise Design Thinking", "Data Engineering"
    ],
    careers: ["Data Scientist", "AI Engineer", "Cloud Developer", "Security Analyst", "Consultant"],
    eligibility: ["Students", "Data Enthusiasts", "Developers", "IT professionals", "Business Analysts"],
    vouchers: [
      { name: "IBM Cloud Advocate", original: "$100 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "IBM Data Science Professional", original: "Contact us", discounted: "Best Price on WhatsApp" },
      { name: "IBM AI Engineering", original: "Contact us", discounted: "Best Price on WhatsApp" }
    ]
  },
  pmi: {
    name: "PMI Certification Training",
    desc: "Advance your career in project management with globally recognized PMI certifications like PMP and CAPM.",
    modules: [
      "Project Integration Management", "Scope Management", "Schedule Management", 
      "Cost Management", "Quality Management", "Resource Management", 
      "Communications Management", "Risk Management", "Procurement Management", "Stakeholder Management"
    ],
    careers: ["Project Manager", "Scrum Master", "Program Manager", "Project Coordinator", "Agile Coach"],
    eligibility: ["Project Managers", "Team Leads", "Business Analysts", "Consultants", "Professionals with project experience"],
    vouchers: [
      { name: "Certified Associate in Project Management (CAPM)", original: "$300 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Project Management Professional (PMP)", original: "$555 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "PMI Agile Certified Practitioner (PMI-ACP)", original: "$495 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  'isaca-fortinet': {
    name: "ISACA & Fortinet Certification",
    desc: "Master cybersecurity, IT governance, and network security with leading certifications from ISACA and Fortinet.",
    modules: [
      "Information Security Governance", "Risk Management", "Security Architecture", 
      "Network Security", "FortiGate Configuration", "Firewall Policies", 
      "VPN Setup", "Threat Management", "Incident Response", "Compliance and Audit"
    ],
    careers: ["Security Analyst", "Network Security Engineer", "IT Auditor", "CISO", "Risk Manager"],
    eligibility: ["Security Professionals", "IT Auditors", "Network Engineers", "System Administrators", "Management Professionals"],
    vouchers: [
      { name: "ISACA CISA / CISM", original: "$760 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Fortinet NSE 4", original: "$400 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Fortinet NSE 5/6/7", original: "Contact us", discounted: "Best Price on WhatsApp" }
    ]
  },
  'palo-alto': {
    name: "Palo Alto Networks Certification",
    desc: "Defend networks and clouds with Palo Alto Networks certifications, proving your skills in cutting-edge cybersecurity.",
    modules: [
      "Cybersecurity Landscape", "Palo Alto Firewall Configuration", "Security Policies", 
      "Threat Prevention", "URL Filtering", "GlobalProtect VPN", 
      "Panorama Management", "Cloud Security", "Endpoint Protection", "Incident Investigation"
    ],
    careers: ["Security Engineer", "Network Security Analyst", "Cybersecurity Architect", "SOC Analyst", "Systems Engineer"],
    eligibility: ["Network Engineers", "Security Analysts", "IT professionals", "System administrators", "Students"],
    vouchers: [
      { name: "Palo Alto Networks Certified Cybersecurity Associate (PCCET)", original: "$110 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Palo Alto Networks Certified Network Security Administrator (PCNSA)", original: "$160 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "Palo Alto Networks Certified Network Security Engineer (PCNSE)", original: "$175 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  itil: {
    name: "ITIL Certification Training",
    desc: "Master IT Service Management (ITSM) with ITIL 4 certifications, improving IT service delivery and business alignment.",
    modules: [
      "Service Management Concepts", "Guiding Principles", "Four Dimensions of Service Management", 
      "ITIL Service Value System", "Service Value Chain", "Continuous Improvement", 
      "Incident Management", "Problem Management", "Change Enablement", "Service Desk"
    ],
    careers: ["IT Service Manager", "Service Desk Manager", "Incident Manager", "IT Consultant", "Operations Manager"],
    eligibility: ["IT Professionals", "Service Desk Staff", "IT Managers", "Project Managers", "Business Analysts"],
    vouchers: [
      { name: "ITIL 4 Foundation", original: "$380 + taxes", discounted: "Best Price on WhatsApp" },
      { name: "ITIL 4 Managing Professional", original: "Contact us", discounted: "Best Price on WhatsApp" },
      { name: "ITIL 4 Strategic Leader", original: "Contact us", discounted: "Best Price on WhatsApp" }
    ]
  },
  aigp: {
    name: "AIGP Certification Training",
    desc: "Get certified as an Artificial Intelligence Governance Professional (AIGP). Lead safe and responsible AI deployments.",
    modules: [
      "AI Foundations", "AI Impacts and Risks", "AI Governance Frameworks", 
      "Data Privacy and AI", "Regulatory Landscape", "Ethical AI Principles", 
      "Risk Management", "Implementing Governance", "Auditing AI Systems", "Future of AI Regulation"
    ],
    careers: ["AI Ethics Officer", "Governance Professional", "Data Privacy Officer", "Compliance Manager", "AI Strategist"],
    eligibility: ["Legal Professionals", "Compliance Officers", "Data Scientists", "IT Leaders", "Policy Makers"],
    vouchers: [
      { name: "AIGP Certification", original: "$595 + taxes", discounted: "Best Price on WhatsApp" }
    ]
  },
  claude: {
    name: "Claude AI Certifications",
    desc: "Demonstrate your expertise in using, building with, and deploying Anthropic's Claude AI models.",
    modules: [
      "Claude Fundamentals", "Prompt Engineering", "API Integration", 
      "Context Window Management", "RAG with Claude", "Constitutional AI Concepts", 
      "Tool Use / Function Calling", "Agents with Claude", "Security and Privacy", "Cost Optimization"
    ],
    careers: ["AI Engineer", "Prompt Engineer", "Software Developer", "Product Manager", "Innovation Lead"],
    eligibility: ["Developers", "AI Enthusiasts", "Product Builders", "Data Scientists", "Tech Leaders"],
    vouchers: [
      { name: "Claude Fundamentals", original: "Contact us", discounted: "Best Price on WhatsApp" },
      { name: "Claude Advanced Developer", original: "Contact us", discounted: "Best Price on WhatsApp" }
    ]
  }
};
