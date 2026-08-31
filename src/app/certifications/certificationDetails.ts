export const certificationDetails: Record<string, any> = {
  'aws-cloud-practitioner-foundational': {
    name: 'AWS Certified Cloud Practitioner (Foundational)',
    description: 'The AWS Certified Cloud Practitioner offers a foundational understanding of AWS Cloud concepts, services, and terminology. This is a great starting point for individuals in non-technical roles or those early in their cloud careers.',
    prerequisites: 'None. Basic IT knowledge is recommended.',
    examDetails: {
      duration: '90 minutes',
      format: '65 questions (multiple choice or multiple response)',
      cost: '100 USD',
    },
    curriculum: [
      { title: 'Cloud Concepts', desc: 'Define the AWS Cloud and its value proposition.' },
      { title: 'Security and Compliance', desc: 'Understand the AWS shared responsibility model.' },
      { title: 'Cloud Technology and Services', desc: 'Identify core AWS services for compute, network, database, and storage.' },
      { title: 'Billing, Pricing, and Support', desc: 'Compare pricing models and understand account structures.' }
    ]
  },
  'aws-associate-level': {
    name: 'AWS Certified Solutions Architect – Associate',
    description: 'Showcase your knowledge and skills in AWS technology, across a wide range of AWS services. The focus of this certification is on the design of cost and performance optimized solutions.',
    prerequisites: 'AWS Cloud Practitioner (Recommended)',
    examDetails: {
      duration: '130 minutes',
      format: '65 questions (multiple choice or multiple response)',
      cost: '150 USD',
    },
    curriculum: [
      { title: 'Design Secure Architectures', desc: 'Design secure access to AWS resources and workloads.' },
      { title: 'Design Resilient Architectures', desc: 'Design scalable and loosely coupled architectures.' },
      { title: 'Design High-Performing Architectures', desc: 'Determine high-performing and scalable storage solutions.' },
      { title: 'Design Cost-Optimized Architectures', desc: 'Design cost-optimized compute, storage, and database solutions.' }
    ]
  },
  'aws-professional-specialty': {
    name: 'AWS Certified Solutions Architect – Professional',
    description: 'The AWS Certified Solutions Architect - Professional validates the ability to design, deploy, and evaluate applications on AWS within diverse, complex requirements.',
    prerequisites: 'AWS Solutions Architect Associate (Recommended). 2+ years of hands-on experience.',
    examDetails: {
      duration: '180 minutes',
      format: '75 questions (multiple choice or multiple response)',
      cost: '300 USD',
    },
    curriculum: [
      { title: 'Design for Organizational Complexity', desc: 'Determine cross-account authentication and access strategies.' },
      { title: 'Design for New Solutions', desc: 'Determine deployment strategy to meet business requirements.' },
      { title: 'Migration Planning', desc: 'Select existing workloads and processes for potential migration to the cloud.' },
      { title: 'Cost Control', desc: 'Determine a cost-effective pricing model for a solution.' },
      { title: 'Continuous Improvement', desc: 'Troubleshoot solution architectures.' }
    ]
  },
  'microsoft-fundamentals': {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    description: 'Prove your knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.',
    prerequisites: 'None.',
    examDetails: {
      duration: '45 minutes',
      format: '40-60 questions',
      cost: '99 USD',
    },
    curriculum: [
      { title: 'Describe Cloud Concepts', desc: 'Identify the benefits and considerations of using cloud services.' },
      { title: 'Describe Azure Architecture and Services', desc: 'Describe the core architectural components of Azure.' },
      { title: 'Describe Azure Management and Governance', desc: 'Describe cost management in Azure and features and tools for governance.' }
    ]
  },
  'microsoft-associate': {
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    description: 'Validate your skills in implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in a cloud environment.',
    prerequisites: 'Azure Fundamentals (Recommended). 6+ months of hands-on Azure experience.',
    examDetails: {
      duration: '120 minutes',
      format: '40-60 questions',
      cost: '165 USD',
    },
    curriculum: [
      { title: 'Manage Azure Identities and Governance', desc: 'Manage Microsoft Entra objects and role-based access control (RBAC).' },
      { title: 'Implement and Manage Storage', desc: 'Secure storage and manage storage data.' },
      { title: 'Deploy and Manage Azure Compute Resources', desc: 'Automate deployment of virtual machines (VMs) and manage VMs.' },
      { title: 'Configure and Manage Virtual Networking', desc: 'Implement and manage virtual networking and secure access to virtual networks.' },
      { title: 'Monitor and Maintain Azure Resources', desc: 'Monitor resources by using Azure Monitor and implement backup and recovery.' }
    ]
  },
  'microsoft-expert': {
    name: 'Microsoft Certified: Azure Solutions Architect Expert (AZ-305)',
    description: 'Demonstrate your expertise in designing cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, monitoring, and security.',
    prerequisites: 'Azure Administrator Associate (AZ-104) is required to earn the certification.',
    examDetails: {
      duration: '120 minutes',
      format: '40-60 questions',
      cost: '165 USD',
    },
    curriculum: [
      { title: 'Design Identity, Governance, and Monitoring Solutions', desc: 'Design a solution for logging and monitoring and authentication.' },
      { title: 'Design Data Storage Solutions', desc: 'Design a data storage solution for relational data and non-relational data.' },
      { title: 'Design Business Continuity Solutions', desc: 'Design a solution for backup and disaster recovery.' },
      { title: 'Design Infrastructure Solutions', desc: 'Design a compute solution and network solution.' }
    ]
  },
  'salesforce-administrator': {
    name: 'Salesforce Certified Administrator',
    description: 'Designed for those who have experience with Salesforce and continuously look for ways to assist their companies in getting even more from additional features and capabilities.',
    prerequisites: 'None. 6+ months experience using Salesforce recommended.',
    examDetails: {
      duration: '105 minutes',
      format: '65 questions (60 scored, 5 unscored)',
      cost: '200 USD',
    },
    curriculum: [
      { title: 'Configuration and Setup', desc: 'Company Settings and User Setup.' },
      { title: 'Object Manager and Lightning App Builder', desc: 'Standard and custom objects, page layouts.' },
      { title: 'Sales and Marketing Applications', desc: 'Sales process, opportunity management.' },
      { title: 'Service and Support Applications', desc: 'Case management, support processes.' },
      { title: 'Productivity and Collaboration', desc: 'Activity management and Chatter.' },
      { title: 'Data and Analytics Management', desc: 'Data importing, exporting, reports, and dashboards.' },
      { title: 'Workflow/Process Automation', desc: 'Flows and approval processes.' }
    ]
  },
  'salesforce-advanced': {
    name: 'Salesforce Certified Advanced Administrator',
    description: 'Designed for those with extensive Salesforce experience who have mastered advanced Salesforce configuration and administration.',
    prerequisites: 'Salesforce Certified Administrator credential required.',
    examDetails: {
      duration: '105 minutes',
      format: '65 questions (60 scored, 5 unscored)',
      cost: '200 USD',
    },
    curriculum: [
      { title: 'Security and Access', desc: 'Territory Management and Advanced Security.' },
      { title: 'Extending Custom Objects and Applications', desc: 'Advanced object relationships.' },
      { title: 'Auditing and Data Management', desc: 'Data quality and auditing tools.' },
      { title: 'Sales Cloud Applications', desc: 'Advanced sales automation.' },
      { title: 'Service Cloud Applications', desc: 'Advanced service automation and Knowledge.' },
      { title: 'Advanced Automation', desc: 'Complex Process Builder, Flow, and validation rules.' }
    ]
  }
};
