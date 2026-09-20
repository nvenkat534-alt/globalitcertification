import type { Certification } from "./certifications";

/** User-approved expansion. Official sources reviewed 20 September 2026. */
export const catalogueAdditions: Certification[] = [
  {
    "id": "ctfl",
    "name": "ISTQB Certified Tester Foundation Level",
    "exam": "CTFL",
    "provider": "istqb",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "software-tester": 5
    },
    "skills": [
      "Test design",
      "Testing fundamentals",
      "Defect management"
    ],
    "why": "Build a foundation in software testing terminology, techniques and the testing process.",
    "readiness": "Practise test design, testing fundamentals, defect management. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/",
    "reviewedOn": "2026-09-20",
    "examMode": "Provider-dependent: online or test centre",
    "aliases": [
      "ISTQB Foundation",
      "Software Testing"
    ]
  },
  {
    "id": "ct-ai",
    "name": "ISTQB Certified Tester AI Testing",
    "exam": "CT-AI",
    "provider": "istqb",
    "level": "Specialty",
    "stage": 2,
    "roles": {
      "software-tester": 5,
      "ai-engineer": 5
    },
    "skills": [
      "AI testing",
      "Model quality",
      "Test strategy"
    ],
    "why": "For testers evaluating AI-based systems, including their quality characteristics and testing challenges.",
    "readiness": "Practise ai testing, model quality, test strategy. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold ISTQB CTFL and check the selected provider’s current CT-AI syllabus and exam prerequisites.",
    "source": "https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/",
    "reviewedOn": "2026-09-20",
    "examMode": "Provider-dependent: online or test centre",
    "note": "Remote delivery depends on the authorised exam provider. Confirm CT-AI online availability in India before purchasing a voucher.",
    "aliases": [
      "ISTQB AI Testing",
      "CTAI"
    ],
    "ai": true
  },
  {
    "id": "itil-foundation",
    "name": "ITIL Foundation (Version 5)",
    "exam": "ITIL Foundation v5",
    "provider": "peoplecert",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "project-manager": 5,
      "cloud-engineer": 5,
      "crm-consultant": 5
    },
    "skills": [
      "Service management",
      "Digital products",
      "Continual improvement"
    ],
    "why": "Understand how digital products and services create value and how service management supports delivery.",
    "readiness": "Practise service management, digital products, continual improvement. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-5-foundation-version-50-4154",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "aliases": [
      "ITIL",
      "IT Service Management",
      "People Cert"
    ]
  },
  {
    "id": "prince2-foundation",
    "name": "PRINCE2 Project Management Foundation (Version 7)",
    "exam": "PRINCE2 Foundation",
    "provider": "peoplecert",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "project-manager": 5
    },
    "skills": [
      "Project governance",
      "Delivery planning",
      "Tailoring"
    ],
    "why": "Develop structured project management skills using the PRINCE2 method.",
    "readiness": "Practise project governance, delivery planning, tailoring. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "No prior PRINCE2 certification is required for Foundation. Review current exam and preparation requirements.",
    "source": "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-foundation-3579",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available"
  },
  {
    "id": "prince2-practitioner",
    "name": "PRINCE2 Project Management Practitioner (Version 7)",
    "exam": "PRINCE2 Practitioner",
    "provider": "peoplecert",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "project-manager": 5
    },
    "skills": [
      "Project governance",
      "Delivery planning",
      "Tailoring"
    ],
    "why": "Develop structured project management skills using the PRINCE2 method.",
    "readiness": "Practise project governance, delivery planning, tailoring. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "An accepted prerequisite certification is required. Check PeopleCert’s current list before purchasing Practitioner.",
    "source": "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-practitioner-3581",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available"
  },
  {
    "id": "prince2-agile-foundation",
    "name": "PRINCE2 Agile Foundation (Version 2)",
    "exam": "PRINCE2 Agile Foundation",
    "provider": "peoplecert",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "project-manager": 5
    },
    "skills": [
      "Project governance",
      "Delivery planning",
      "Tailoring"
    ],
    "why": "Develop structured project management skills for agile delivery environments.",
    "readiness": "Practise project governance, delivery planning, tailoring. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current Version 2 learning and exam requirements.",
    "source": "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-Agile-28/prince2-agile-foundation-4074",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available"
  },
  {
    "id": "prince2-agile-practitioner",
    "name": "PRINCE2 Agile Practitioner (Version 2)",
    "exam": "PRINCE2 Agile Practitioner",
    "provider": "peoplecert",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "project-manager": 5
    },
    "skills": [
      "Project governance",
      "Delivery planning",
      "Tailoring"
    ],
    "why": "Develop structured project management skills for agile delivery environments.",
    "readiness": "Practise project governance, delivery planning, tailoring. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the accepted prerequisite certifications and Version 2 requirements before booking.",
    "source": "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-Agile-28/prince2-agile-practitioner-4076",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available"
  },
  {
    "id": "safe-agilist",
    "name": "SAFe Agilist",
    "exam": "SA",
    "provider": "safe",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scaled agile",
      "Lean leadership",
      "Agile delivery"
    ],
    "why": "Apply SAFe practices to lead enterprise agile delivery.",
    "readiness": "Practise scaled agile, lean leadership, agile delivery. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current course or proctored-exam route for your credential and the requirements for maintaining it.",
    "source": "https://scaledagile.com/certification/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "aliases": [
      "Scaled Agile",
      "SAFe 6",
      "SA"
    ]
  },
  {
    "id": "safe-scrum-master",
    "name": "SAFe Scrum Master",
    "exam": "SSM",
    "provider": "safe",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Team facilitation",
      "Agile Release Trains",
      "Iteration planning"
    ],
    "why": "Apply SAFe practices to support teams and value delivery at scale.",
    "readiness": "Practise team facilitation, agile release trains, iteration planning. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current course or proctored-exam route for your credential and the requirements for maintaining it.",
    "source": "https://scaledagile.com/certification/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "aliases": [
      "Scaled Agile",
      "SAFe 6",
      "SSM"
    ]
  },
  {
    "id": "safe-popm",
    "name": "SAFe Product Owner / Product Manager",
    "exam": "POPM",
    "provider": "safe",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Product ownership",
      "Backlog management",
      "Customer value"
    ],
    "why": "Apply SAFe practices to support teams and value delivery at scale.",
    "readiness": "Practise product ownership, backlog management, customer value. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current course or proctored-exam route for your credential and the requirements for maintaining it.",
    "source": "https://scaledagile.com/certification/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "aliases": [
      "Scaled Agile",
      "SAFe 6",
      "POPM"
    ]
  },
  {
    "id": "csm",
    "name": "Certified ScrumMaster",
    "exam": "CSM",
    "provider": "scrum-alliance",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Team collaboration",
      "Product delivery"
    ],
    "why": "Develop Scrum facilitation and team coaching skills.",
    "readiness": "Practise scrum, team collaboration, product delivery. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Complete an approved CSM course and pass the online CSM test.",
    "note": "After approved training, take the CSM certification test online through Scrum Alliance.",
    "source": "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
    "reviewedOn": "2026-09-20",
    "examMode": "Required course: live online or in person"
  },
  {
    "id": "cspo",
    "name": "Certified Scrum Product Owner",
    "exam": "CSPO",
    "provider": "scrum-alliance",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Team collaboration",
      "Product delivery"
    ],
    "why": "Develop product ownership and stakeholder collaboration.",
    "readiness": "Practise scrum, team collaboration, product delivery. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Complete an approved CSPO course. Scrum Alliance does not require a CSPO exam.",
    "source": "https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner",
    "reviewedOn": "2026-09-20",
    "examMode": "Required course: live online or in person"
  },
  {
    "id": "a-csm",
    "name": "Advanced Certified ScrumMaster",
    "exam": "A-CSM",
    "provider": "scrum-alliance",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Team collaboration",
      "Product delivery"
    ],
    "why": "Develop Scrum facilitation and team coaching skills.",
    "readiness": "Practise scrum, team collaboration, product delivery. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold CSM, complete approved advanced training and validate the required Scrum Master experience.",
    "source": "https://www.scrumalliance.org/get-certified/scrum-master-track/advanced-certified-scrummaster",
    "reviewedOn": "2026-09-20",
    "examMode": "Required course: live online or in person"
  },
  {
    "id": "a-cspo",
    "name": "Advanced Certified Scrum Product Owner",
    "exam": "A-CSPO",
    "provider": "scrum-alliance",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Team collaboration",
      "Product delivery"
    ],
    "why": "Develop product ownership and stakeholder collaboration.",
    "readiness": "Practise scrum, team collaboration, product delivery. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold CSPO, complete approved advanced training and validate the required Product Owner experience.",
    "source": "https://www.scrumalliance.org/get-certified/product-owner-track/advanced-certified-scrum-product-owner",
    "reviewedOn": "2026-09-20",
    "examMode": "Required course: live online or in person"
  },
  {
    "id": "ceh",
    "name": "Certified Ethical Hacker",
    "exam": "CEH",
    "provider": "ec-council",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "cybersecurity": 5
    },
    "skills": [
      "Ethical hacking",
      "Vulnerability assessment",
      "Security testing"
    ],
    "why": "Understand attacker techniques and assess security in authorised environments.",
    "readiness": "Practise ethical hacking, vulnerability assessment, security testing. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Follow EC-Council’s approved training or eligibility-application route for the chosen credential. Check experience requirements before purchasing.",
    "source": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available; select the correct voucher"
  },
  {
    "id": "chfi",
    "name": "Computer Hacking Forensic Investigator",
    "exam": "CHFI",
    "provider": "ec-council",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cybersecurity": 5
    },
    "skills": [
      "Digital forensics",
      "Evidence handling",
      "Incident investigation"
    ],
    "why": "Develop digital investigation and forensic analysis skills.",
    "readiness": "Practise digital forensics, evidence handling, incident investigation. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Follow EC-Council’s approved training or eligibility-application route for the chosen credential. Check experience requirements before purchasing.",
    "source": "https://www.eccouncil.org/train-certify/computer-hacking-forensic-investigator-CHFI/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available; select the correct voucher"
  },
  {
    "id": "cnd",
    "name": "Certified Network Defender",
    "exam": "CND",
    "provider": "ec-council",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "cybersecurity": 5
    },
    "skills": [
      "Network defence",
      "Monitoring",
      "Incident response"
    ],
    "why": "Protect, detect and respond to threats across enterprise networks.",
    "readiness": "Practise network defence, monitoring, incident response. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Follow EC-Council’s approved training or eligibility-application route for the chosen credential. Check experience requirements before purchasing.",
    "source": "https://www.eccouncil.org/train-certify/certified-network-defender-cnd/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available; select the correct voucher"
  },
  {
    "id": "cpent",
    "name": "Certified Penetration Testing Professional",
    "exam": "CPENT",
    "provider": "ec-council",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cybersecurity": 5
    },
    "skills": [
      "Penetration testing",
      "Security reporting",
      "Practical assessment"
    ],
    "why": "Demonstrate hands-on penetration testing skills through a practical assessment.",
    "readiness": "Practise penetration testing, security reporting, practical assessment. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Follow EC-Council’s approved training or eligibility-application route for the chosen credential. Check experience requirements before purchasing.",
    "source": "https://www.eccouncil.org/train-certify/certified-penetration-testing-professional-cpent/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online practical exam"
  },
  {
    "id": "nse-4",
    "name": "Fortinet NSE 4",
    "exam": "NSE 4",
    "provider": "fortinet",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "cybersecurity": 5,
      "network-engineer": 5
    },
    "skills": [
      "FortiGate",
      "Security policies",
      "Network protection"
    ],
    "why": "Configure and manage foundational Fortinet network security. ",
    "readiness": "Practise fortigate, security policies, network protection. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Complete the current NSE 4 proctored exam and review the current certification requirements.",
    "source": "https://www.fortinet.com/training-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "Fortinet NSE4",
      "FortiGate Administrator"
    ]
  },
  {
    "id": "nse-5-secure-networking",
    "name": "Fortinet NSE 5 — Secure Networking",
    "exam": "NSE 5: Secure Networking",
    "provider": "fortinet",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cybersecurity": 5,
      "network-engineer": 5
    },
    "skills": [
      "Secure networking",
      "Fortinet operations",
      "Troubleshooting"
    ],
    "why": "Validate deployment and administration of Fortinet secure networking solutions.",
    "readiness": "Practise secure networking, fortinet operations, troubleshooting. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold NSE 4. Pass the eligible exam for the chosen track; an exam pass alone may not meet all certification requirements.",
    "source": "https://www.fortinet.com/training-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "nse-6-secure-networking",
    "name": "Fortinet NSE 6 — Secure Networking",
    "exam": "NSE 6: Secure Networking",
    "provider": "fortinet",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cybersecurity": 5,
      "network-engineer": 5
    },
    "skills": [
      "Secure networking",
      "Fortinet operations",
      "Troubleshooting"
    ],
    "why": "Validate deployment and administration of Fortinet secure networking solutions.",
    "readiness": "Practise secure networking, fortinet operations, troubleshooting. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold NSE 4. Pass the eligible exam for the chosen track; an exam pass alone may not meet all certification requirements.",
    "source": "https://www.fortinet.com/training-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "nse-7-secure-networking",
    "name": "Fortinet NSE 7 — Secure Networking",
    "exam": "NSE 7: Secure Networking",
    "provider": "fortinet",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cybersecurity": 5,
      "network-engineer": 5
    },
    "skills": [
      "Secure networking",
      "Fortinet operations",
      "Troubleshooting"
    ],
    "why": "Validate advanced design and troubleshooting of Fortinet secure networking solutions.",
    "readiness": "Practise secure networking, fortinet operations, troubleshooting. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold NSE 4 and an NSE 5 or NSE 6 certification in Secure Networking. Pass the eligible exam for the chosen track; an exam pass alone may not meet all certification requirements.",
    "source": "https://www.fortinet.com/training-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Test centre only from 21 Sep 2026",
    "note": "NSE 7 remote OnVUE delivery ends on 21 September 2026. From that date, exams must be taken at an authorised Pearson test centre."
  },
  {
    "id": "nse-8",
    "name": "Fortinet NSE 8",
    "exam": "NSE 8 Core + Elective",
    "provider": "fortinet",
    "level": "Expert",
    "stage": 2,
    "roles": {
      "cybersecurity": 5,
      "network-engineer": 5
    },
    "skills": [
      "Security architecture",
      "Practical troubleshooting",
      "Enterprise security"
    ],
    "why": "Demonstrate expert Fortinet skills through core and elective practical assessments.",
    "readiness": "Practise security architecture, practical troubleshooting, enterprise security. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold the required active NSE 4, NSE 5 or NSE 6, and matching NSE 7 certifications. Pass the Core exam, then one Elective within one year.",
    "source": "https://helpdesk.training.fortinet.com/support/solutions/articles/73000665295",
    "reviewedOn": "2026-09-20",
    "examMode": "Core: onsite; Elective: online or onsite",
    "note": "The 2026 pathway requires two practical assessments. Core is onsite; Elective can be onsite or online. Check location availability before purchasing."
  },
  {
    "id": "vcp-vcf-administrator",
    "name": "VMware Certified Professional — VMware Cloud Foundation Administrator",
    "exam": "2V0-17.25",
    "provider": "vmware",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cloud-engineer": 5,
      "cloud-architect": 5
    },
    "skills": [
      "Private cloud",
      "VMware Cloud Foundation",
      "Infrastructure operations"
    ],
    "why": "Validate administration skills for the selected VMware platform and version.",
    "readiness": "Practise private cloud, vmware cloud foundation, infrastructure operations. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://www.broadcom.com/support/education/vmware/certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "VMware VCP",
      "Broadcom"
    ]
  },
  {
    "id": "vcp-vvf-administrator",
    "name": "VMware Certified Professional — VMware vSphere Foundation Administrator",
    "exam": "2V0-16.25",
    "provider": "vmware",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cloud-engineer": 5,
      "cloud-architect": 5
    },
    "skills": [
      "vSphere",
      "Virtualisation",
      "Infrastructure administration"
    ],
    "why": "Validate administration skills for the selected VMware platform and version.",
    "readiness": "Practise vsphere, virtualisation, infrastructure administration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://www.broadcom.com/support/education/vmware/certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "VMware VCP",
      "Broadcom"
    ]
  },
  {
    "id": "jncia-junos",
    "name": "Juniper Networks Certified Associate — Junos",
    "exam": "JNCIA-Junos",
    "provider": "juniper",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "network-engineer": 5
    },
    "skills": [
      "Junos OS",
      "Routing",
      "Network fundamentals"
    ],
    "why": "Develop Junos networking configuration and troubleshooting skills.",
    "readiness": "Practise junos os, routing, network fundamentals. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current JNCIA-Junos objectives and recommended preparation.",
    "source": "https://learningportal.juniper.net/juniper/user_activity_info.aspx?id=14354",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "jncis-ent",
    "name": "Juniper Networks Certified Specialist — Enterprise Routing and Switching",
    "exam": "JNCIS-ENT",
    "provider": "juniper",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "network-engineer": 5
    },
    "skills": [
      "Enterprise routing",
      "Switching",
      "Troubleshooting"
    ],
    "why": "Develop Junos networking configuration and troubleshooting skills.",
    "readiness": "Practise enterprise routing, switching, troubleshooting. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold the required JNCIA-Junos credential and check the current specialist exam requirements.",
    "source": "https://www.juniper.net/us/en/training/certification/tracks/enterprise-routing-switching/jncis-ent.html",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "jncia-sec",
    "name": "Juniper Networks Certified Associate — Security",
    "exam": "JNCIA-SEC",
    "provider": "juniper",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "network-engineer": 5,
      "cybersecurity": 5
    },
    "skills": [
      "Junos security",
      "SRX firewalls",
      "Security policies"
    ],
    "why": "Develop Juniper security configuration and troubleshooting skills.",
    "readiness": "Practise junos security, srx firewalls, security policies. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current JNCIA-SEC objectives and recommended preparation.",
    "source": "https://www.juniper.net/us/en/training/certification/tracks/security/jncia-sec.html",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "jncis-sec",
    "name": "Juniper Networks Certified Specialist — Security",
    "exam": "JNCIS-SEC",
    "provider": "juniper",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "network-engineer": 5,
      "cybersecurity": 5
    },
    "skills": [
      "SRX security",
      "VPNs",
      "Security troubleshooting"
    ],
    "why": "Develop Juniper security configuration and troubleshooting skills.",
    "readiness": "Practise srx security, vpns, security troubleshooting. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Hold the required JNCIA-SEC credential and check the current specialist exam requirements.",
    "source": "https://www.juniper.net/us/en/training/certification/tracks/security/jncis-sec.html",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "automation-developer-associate",
    "name": "UiPath Automation Developer Associate",
    "exam": "Automation Developer Associate",
    "provider": "uipath",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "software-developer": 5,
      "business-analyst": 5
    },
    "skills": [
      "RPA",
      "UiPath Studio",
      "Workflow automation"
    ],
    "why": "Build and maintain business automations using the UiPath platform.",
    "readiness": "Practise rpa, uipath studio, workflow automation. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current exam guide and recommended platform experience; use the current Automation Developer certification route.",
    "source": "https://www.uipath.com/learning/certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "automation-developer-professional",
    "name": "UiPath Automation Developer Professional",
    "exam": "Automation Developer Professional",
    "provider": "uipath",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "software-developer": 5,
      "business-analyst": 5
    },
    "skills": [
      "RPA",
      "UiPath Studio",
      "Workflow automation"
    ],
    "why": "Build and maintain business automations using the UiPath platform.",
    "readiness": "Practise rpa, uipath studio, workflow automation. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current exam guide and recommended platform experience; use the current Automation Developer certification route.",
    "source": "https://www.uipath.com/learning/certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "ecba",
    "name": "IIBA Entry Certificate in Business Analysis",
    "exam": "ECBA",
    "provider": "iiba",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "business-analyst": 5
    },
    "skills": [
      "Business analysis",
      "Requirements",
      "Stakeholders"
    ],
    "why": "Validate business analysis skills at the level matching your experience.",
    "readiness": "Practise business analysis, requirements, stakeholders. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current ECBA exam and application requirements.",
    "source": "https://www.iiba.org/business-analysis-certifications/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online"
  },
  {
    "id": "ccba",
    "name": "IIBA Certification of Capability in Business Analysis",
    "exam": "CCBA",
    "provider": "iiba",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "business-analyst": 5
    },
    "skills": [
      "Requirements analysis",
      "Business processes",
      "Stakeholder collaboration"
    ],
    "why": "Validate business analysis skills at the level matching your experience.",
    "readiness": "Practise requirements analysis, business processes, stakeholder collaboration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check IIBA’s required business analysis experience, professional development hours and references before applying.",
    "source": "https://www.iiba.org/business-analysis-certifications/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "cbap",
    "name": "IIBA Certified Business Analysis Professional",
    "exam": "CBAP",
    "provider": "iiba",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "business-analyst": 5
    },
    "skills": [
      "Business analysis leadership",
      "Strategy analysis",
      "Requirements management"
    ],
    "why": "Validate business analysis skills at the level matching your experience.",
    "readiness": "Practise business analysis leadership, strategy analysis, requirements management. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check IIBA’s required business analysis experience, professional development hours and references before applying.",
    "source": "https://www.iiba.org/business-analysis-certifications/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "cbda",
    "name": "IIBA Certification in Business Data Analytics",
    "exam": "CBDA",
    "provider": "iiba",
    "level": "Specialty",
    "stage": 2,
    "roles": {
      "business-analyst": 5,
      "data-analyst": 5
    },
    "skills": [
      "Business data analytics",
      "Data-driven decisions",
      "Analysis planning"
    ],
    "why": "Validate data analytics skills for business decisions.",
    "readiness": "Practise business data analytics, data-driven decisions, analysis planning. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review IIBA’s current CBDA handbook and recommended analytics experience.",
    "source": "https://www.iiba.org/business-analysis-certifications/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online"
  },
  {
    "id": "enterprise-architecture-foundation",
    "name": "TOGAF Enterprise Architecture Foundation",
    "exam": "TOGAF EA Part 1",
    "provider": "togaf",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "cloud-architect": 5,
      "business-analyst": 5
    },
    "skills": [
      "Enterprise architecture",
      "Architecture Development Method",
      "Business alignment"
    ],
    "why": "Understand and explain the TOGAF approach to enterprise architecture.",
    "readiness": "Practise enterprise architecture, architecture development method, business alignment. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the Foundation, Practitioner or combined-exam pathway and any prerequisites on The Open Group’s current exam page.",
    "source": "https://www.opengroup.org/certifications/togaf",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "TOGAF",
      "The Open Group"
    ]
  },
  {
    "id": "enterprise-architecture-practitioner",
    "name": "TOGAF Enterprise Architecture Practitioner",
    "exam": "TOGAF EA Part 2 / Combined",
    "provider": "togaf",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cloud-architect": 5,
      "business-analyst": 5
    },
    "skills": [
      "Enterprise architecture",
      "Architecture Development Method",
      "Business alignment"
    ],
    "why": "Understand and apply the TOGAF approach to enterprise architecture.",
    "readiness": "Practise enterprise architecture, architecture development method, business alignment. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the Foundation, Practitioner or combined-exam pathway and any prerequisites on The Open Group’s current exam page.",
    "source": "https://www.opengroup.org/certifications/togaf",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "TOGAF",
      "The Open Group"
    ]
  },
  {
    "id": "core-power-user",
    "name": "Splunk Core Certified Power User",
    "exam": "Power User",
    "provider": "splunk",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "cybersecurity": 5,
      "data-analyst": 5
    },
    "skills": [
      "SPL searches",
      "Reports",
      "Knowledge objects"
    ],
    "why": "Validate searching, reporting and data analysis skills in Splunk.",
    "readiness": "Practise spl searches, reports, knowledge objects. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the current Splunk certification track and required prerequisite credentials before scheduling.",
    "source": "https://www.splunk.com/en_us/training/certification-track/splunk-core-certified-power-user.html",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "enterprise-admin",
    "name": "Splunk Enterprise Certified Admin",
    "exam": "Enterprise Admin",
    "provider": "splunk",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "cybersecurity": 5,
      "data-analyst": 5
    },
    "skills": [
      "Splunk deployment",
      "Data ingestion",
      "Administration"
    ],
    "why": "Validate deployment and administration skills for Splunk Enterprise.",
    "readiness": "Practise splunk deployment, data ingestion, administration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the current Splunk certification track and required prerequisite credentials before scheduling.",
    "source": "https://www.splunk.com/en_us/training/certification-track/splunk-enterprise-certified-admin.html",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre"
  },
  {
    "id": "generative-ai-llm-associate",
    "name": "NVIDIA-Certified Associate — Generative AI LLMs",
    "exam": "NCA-GENL",
    "provider": "nvidia",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "ai-engineer": 5,
      "ml-engineer": 5
    },
    "skills": [
      "Generative AI",
      "Large language models",
      "AI applications"
    ],
    "why": "Validate foundational skills for building generative AI and LLM applications.",
    "readiness": "Practise generative ai, large language models, ai applications. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "ai": true
  },
  {
    "id": "generative-ai-llm-professional",
    "name": "NVIDIA-Certified Professional — Generative AI LLMs",
    "exam": "NCP-GENL",
    "provider": "nvidia",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "ai-engineer": 5,
      "ml-engineer": 5
    },
    "skills": [
      "Generative AI",
      "Large language models",
      "AI applications"
    ],
    "why": "Validate advanced skills for building generative AI and LLM applications.",
    "readiness": "Practise generative ai, large language models, ai applications. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "ai": true
  },
  {
    "id": "six-sigma-green-belt",
    "name": "ASQ Certified Six Sigma Green Belt",
    "exam": "CSSGB",
    "provider": "asq",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "quality-manager": 5,
      "project-manager": 5
    },
    "skills": [
      "Six Sigma",
      "DMAIC",
      "Process improvement"
    ],
    "why": "Use structured analysis to improve process quality and business performance.",
    "readiness": "Practise six sigma, dmaic, process improvement. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "ASQ requires three years of full-time paid experience in areas of the Green Belt body of knowledge; education does not waive this requirement.",
    "source": "https://www.asq.org/cert/six-sigma-green-belt",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "Lean Six Sigma",
      "CSSGB"
    ]
  },
  {
    "id": "six-sigma-black-belt",
    "name": "ASQ Certified Six Sigma Black Belt",
    "exam": "CSSBB",
    "provider": "asq",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "quality-manager": 5,
      "project-manager": 5
    },
    "skills": [
      "Six Sigma",
      "DMAIC",
      "Process improvement"
    ],
    "why": "Use structured analysis to improve process quality and business performance.",
    "readiness": "Practise six sigma, dmaic, process improvement. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Meet ASQ’s work-experience and completed-project requirements, including the required signed project affidavit(s). Check the current application rules.",
    "source": "https://www.asq.org/cert/six-sigma-black-belt",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "Lean Six Sigma",
      "CSSBB"
    ]
  },
  {
    "id": "mulesoft-integration-foundations",
    "name": "Salesforce Certified MuleSoft Integration Foundations",
    "exam": "MuleSoft Integration Foundations",
    "provider": "salesforce",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "software-developer": 5,
      "crm-consultant": 5
    },
    "skills": [
      "API integration",
      "Anypoint Platform",
      "MuleSoft"
    ],
    "why": "Connect business systems through API-led integration using MuleSoft.",
    "readiness": "Practise api integration, anypoint platform, mulesoft. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "No prior certification is listed; check the current exam guide.",
    "source": "https://trailhead.salesforce.com/credentials/integrationfoundations",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "Mulesoft",
      "Mule 4"
    ]
  },
  {
    "id": "mulesoft-developer",
    "name": "Salesforce Certified MuleSoft Developer",
    "exam": "MuleSoft Developer",
    "provider": "salesforce",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "software-developer": 5,
      "crm-consultant": 5
    },
    "skills": [
      "API integration",
      "Anypoint Platform",
      "MuleSoft"
    ],
    "why": "Connect business systems through API-led integration using MuleSoft.",
    "readiness": "Practise api integration, anypoint platform, mulesoft. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Develop hands-on experience with basic Mule 4 projects and review the official exam guide.",
    "source": "https://trailhead.salesforce.com/credentials/mulesoftdeveloperi",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "Mulesoft",
      "Mule 4"
    ]
  },
  {
    "id": "mulesoft-developer-ii",
    "name": "Salesforce Certified MuleSoft Developer II",
    "exam": "MuleSoft Developer II",
    "provider": "salesforce",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "software-developer": 5,
      "crm-consultant": 5
    },
    "skills": [
      "API integration",
      "Anypoint Platform",
      "MuleSoft"
    ],
    "why": "Connect business systems through API-led integration using MuleSoft.",
    "readiness": "Practise api integration, anypoint platform, mulesoft. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Salesforce Certified MuleSoft Developer is a required prerequisite.",
    "source": "https://trailhead.salesforce.com/credentials/mulesoftdeveloperii",
    "reviewedOn": "2026-09-20",
    "examMode": "Online or test centre",
    "aliases": [
      "Mulesoft",
      "Mule 4"
    ]
  },
  {
    "id": "oci-foundations",
    "name": "Oracle Cloud Infrastructure Foundations Associate",
    "exam": "OCI Foundations Associate",
    "provider": "oracle",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "cloud-engineer": 5
    },
    "skills": [
      "OCI fundamentals",
      "Cloud services",
      "Cloud security"
    ],
    "why": "Build a foundation in Oracle Cloud Infrastructure services and concepts.",
    "readiness": "Practise oci fundamentals, cloud services, cloud security. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Use the latest exam and learning path in Oracle MyLearn. Confirm the current exam version before registering.",
    "source": "https://blogs.oracle.com/oracleuniversity/oci-certification-learning-paths-and-exams-2026-updates-now-available",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "aliases": [
      "OCI",
      "Oracle Cloud"
    ]
  },
  {
    "id": "oci-architect-associate",
    "name": "Oracle Cloud Infrastructure Architect Associate",
    "exam": "OCI Architect Associate",
    "provider": "oracle",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "cloud-engineer": 5,
      "cloud-architect": 5
    },
    "skills": [
      "OCI architecture",
      "Networking",
      "Compute and storage"
    ],
    "why": "Design and deploy core Oracle Cloud Infrastructure solutions.",
    "readiness": "Practise oci architecture, networking, compute and storage. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Use the latest OCI Architect Associate learning path and exam in Oracle MyLearn.",
    "source": "https://blogs.oracle.com/oracleuniversity/oci-certification-learning-paths-and-exams-2026-updates-now-available",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "aliases": [
      "OCI",
      "Oracle Cloud"
    ]
  },
  {
    "id": "database-administration",
    "name": "Oracle Database Administration 2019 Certified Professional",
    "exam": "1Z0-082 + 1Z0-083",
    "provider": "oracle",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "data-engineer": 5,
      "cloud-engineer": 5
    },
    "skills": [
      "Oracle Database",
      "Backup and recovery",
      "Database administration"
    ],
    "why": "Validate Oracle Database administration skills, including backup, recovery and multitenant operations.",
    "readiness": "Practise oracle database, backup and recovery, database administration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "For the initial certification path, confirm the two required exams and current availability with Oracle. Upgrade routes differ.",
    "source": "https://www.credly.com/org/oracle/badge/oracle-database-administration-2019-certified-professional",
    "sourceKind": "Issuer badge",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "note": "Credential verified against Oracle’s issuer badge; confirm live exam versions and availability before purchasing.",
    "aliases": [
      "Oracle DBA",
      "Oracle 19c",
      "Database Administrator"
    ]
  },
  {
    "id": "java-se-17-developer",
    "name": "Oracle Certified Professional — Java SE 17 Developer",
    "exam": "1Z0-829",
    "provider": "oracle",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "software-developer": 5
    },
    "skills": [
      "Java",
      "Object-oriented programming",
      "Java APIs"
    ],
    "why": "Validate Java SE development knowledge and problem-solving skills.",
    "readiness": "Practise java, object-oriented programming, java apis. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://education.oracle.com/java-ee-7-application-developer/pexam_1Z0-829",
    "reviewedOn": "2026-09-20",
    "examMode": "Online available",
    "aliases": [
      "Java certification",
      "OCP Java"
    ]
  },
  {
    "id": "s4hana-sourcing-procurement",
    "name": "SAP S/4HANA Cloud Private Edition — Sourcing and Procurement",
    "exam": "Sourcing & Procurement / MM",
    "provider": "sap",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "sap-consultant": 5
    },
    "skills": [
      "Procurement",
      "Materials management",
      "S/4HANA"
    ],
    "why": "Configure and support sourcing and procurement processes in SAP S/4HANA Cloud Private Edition.",
    "readiness": "Practise procurement, materials management, s/4hana. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Select the correct deployment edition and follow the current SAP assessment and maintenance requirements.",
    "source": "https://learning.sap.com/certifications/sap-certified-associate-sap-s-4hana-sourcing-and-procurement",
    "reviewedOn": "2026-09-20",
    "examMode": "Online assessment",
    "aliases": [
      "SAP MM",
      "Materials Management"
    ]
  },
  {
    "id": "s4hana-production-planning",
    "name": "SAP S/4HANA Cloud Private Edition — Production Planning and Manufacturing",
    "exam": "Production Planning / PP",
    "provider": "sap",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "sap-consultant": 5
    },
    "skills": [
      "Production planning",
      "Manufacturing",
      "S/4HANA"
    ],
    "why": "Implement planning and manufacturing processes in SAP S/4HANA Cloud Private Edition.",
    "readiness": "Practise production planning, manufacturing, s/4hana. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Follow the certification linked from the official learning journey. Confirm the current assessment, deployment edition and maintenance requirements.",
    "source": "https://learning.sap.com/learning-journeys/implementing-manufacturing-in-sap-s-4hana-cloud-private-edition",
    "reviewedOn": "2026-09-20",
    "examMode": "Online assessment",
    "aliases": [
      "SAP PP",
      "Manufacturing"
    ]
  },
  {
    "id": "ckad",
    "name": "Certified Kubernetes Application Developer",
    "exam": "CKAD",
    "provider": "linux-foundation",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "devops": 5,
      "cloud-engineer": 5
    },
    "skills": [
      "Kubernetes",
      "Application deployment",
      "Containers"
    ],
    "why": "Demonstrate cloud-native and Kubernetes skills at the selected level.",
    "readiness": "Practise kubernetes, application deployment, containers. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the hands-on exam environment and current objectives.",
    "source": "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Linux",
      "CNCF",
      "CKAD"
    ]
  },
  {
    "id": "cks",
    "name": "Certified Kubernetes Security Specialist",
    "exam": "CKS",
    "provider": "linux-foundation",
    "level": "Specialty",
    "stage": 2,
    "roles": {
      "devops": 5,
      "cloud-engineer": 5,
      "cybersecurity": 5
    },
    "skills": [
      "Kubernetes security",
      "Cluster hardening",
      "Runtime security"
    ],
    "why": "Demonstrate cloud-native and Kubernetes skills at the selected level.",
    "readiness": "Practise kubernetes security, cluster hardening, runtime security. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Meet the current CKA prerequisite requirement before attempting CKS.",
    "source": "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Linux",
      "CNCF",
      "CKS"
    ]
  },
  {
    "id": "kcna",
    "name": "Kubernetes and Cloud Native Associate",
    "exam": "KCNA",
    "provider": "linux-foundation",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "devops": 5,
      "cloud-engineer": 5
    },
    "skills": [
      "Kubernetes fundamentals",
      "Cloud native",
      "Containers"
    ],
    "why": "Demonstrate cloud-native and Kubernetes skills at the selected level.",
    "readiness": "Practise kubernetes fundamentals, cloud native, containers. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current KCNA objectives and candidate handbook.",
    "source": "https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Linux",
      "CNCF",
      "KCNA"
    ]
  },
  {
    "id": "kcsa",
    "name": "Kubernetes and Cloud Native Security Associate",
    "exam": "KCSA",
    "provider": "linux-foundation",
    "level": "Foundation",
    "stage": 0,
    "roles": {
      "devops": 5,
      "cloud-engineer": 5,
      "cybersecurity": 5
    },
    "skills": [
      "Cloud native security",
      "Kubernetes",
      "Security fundamentals"
    ],
    "why": "Demonstrate cloud-native and Kubernetes skills at the selected level.",
    "readiness": "Practise cloud native security, kubernetes, security fundamentals. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current KCSA objectives and candidate handbook.",
    "source": "https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Linux",
      "CNCF",
      "KCSA"
    ]
  },
  {
    "id": "lfcs",
    "name": "Linux Foundation Certified System Administrator",
    "exam": "LFCS",
    "provider": "linux-foundation",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "devops": 5,
      "cloud-engineer": 5
    },
    "skills": [
      "Linux administration",
      "System services",
      "Command line"
    ],
    "why": "Demonstrate Linux system administration skills.",
    "readiness": "Practise linux administration, system services, command line. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Practise hands-on Linux administration and check the exam environment.",
    "source": "https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Linux",
      "CNCF",
      "LFCS"
    ]
  },
  {
    "id": "vault-associate",
    "name": "HashiCorp Certified — Vault Associate",
    "exam": "Vault Associate",
    "provider": "hashicorp",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "devops": 5,
      "cybersecurity": 5
    },
    "skills": [
      "Secrets management",
      "Vault",
      "Access controls"
    ],
    "why": "Validate foundational skills in securing, storing and accessing secrets with Vault.",
    "readiness": "Practise secrets management, vault, access controls. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Check the official credential page for current prerequisites, registration rules and certification maintenance requirements.",
    "source": "https://developer.hashicorp.com/certifications/security-automation",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Hashicorp",
      "Vault"
    ]
  },
  {
    "id": "terraform-advanced",
    "name": "HashiCorp Certified — Terraform Authoring and Operations Advanced",
    "exam": "Terraform Advanced",
    "provider": "hashicorp",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "devops": 5,
      "cloud-architect": 5
    },
    "skills": [
      "Terraform",
      "Infrastructure as code",
      "Operations"
    ],
    "why": "Demonstrate advanced Terraform authoring and operational skills in a practical assessment.",
    "readiness": "Practise terraform, infrastructure as code, operations. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Review the current advanced exam requirements and recommended experience.",
    "source": "https://developer.hashicorp.com/certifications/infrastructure-automation",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "note": "HashiCorp renamed the lab-based Professional level to Advanced. Confirm the current exam version in the official portal.",
    "aliases": [
      "Terraform Professional",
      "Terraform Authoring and Operations Professional",
      "Hashicorp"
    ]
  },
  {
    "id": "psm-ii",
    "name": "Professional Scrum Master II",
    "exam": "PSM II",
    "provider": "scrum-org",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Product value",
      "Agile collaboration"
    ],
    "why": "Validate Scrum Master knowledge and application through a Scrum.org assessment.",
    "readiness": "Practise scrum, product value, agile collaboration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Training is optional. Review the assessment’s recommended knowledge and experience before purchasing.",
    "source": "https://www.scrum.org/assessments/professional-scrum-master-ii-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Scrum",
      "PSM II"
    ]
  },
  {
    "id": "psm-iii",
    "name": "Professional Scrum Master III",
    "exam": "PSM III",
    "provider": "scrum-org",
    "level": "Expert",
    "stage": 2,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Product value",
      "Agile collaboration"
    ],
    "why": "Validate Scrum Master knowledge and application through a Scrum.org assessment.",
    "readiness": "Practise scrum, product value, agile collaboration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Training is optional. Review the assessment’s recommended knowledge and experience before purchasing.",
    "source": "https://www.scrum.org/assessments/professional-scrum-master-iii-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Scrum",
      "PSM III"
    ]
  },
  {
    "id": "pspo-i",
    "name": "Professional Scrum Product Owner I",
    "exam": "PSPO I",
    "provider": "scrum-org",
    "level": "Associate",
    "stage": 1,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Product value",
      "Agile collaboration"
    ],
    "why": "Validate product ownership and value delivery through a Scrum.org assessment.",
    "readiness": "Practise scrum, product value, agile collaboration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Training is optional. Review the assessment’s recommended knowledge and experience before purchasing.",
    "source": "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Scrum",
      "PSPO I"
    ]
  },
  {
    "id": "pspo-ii",
    "name": "Professional Scrum Product Owner II",
    "exam": "PSPO II",
    "provider": "scrum-org",
    "level": "Professional",
    "stage": 2,
    "roles": {
      "project-manager": 5,
      "business-analyst": 5
    },
    "skills": [
      "Scrum",
      "Product value",
      "Agile collaboration"
    ],
    "why": "Validate product ownership and value delivery through a Scrum.org assessment.",
    "readiness": "Practise scrum, product value, agile collaboration. Use the official learning objectives to check your readiness before booking.",
    "eligibility": "Training is optional. Review the assessment’s recommended knowledge and experience before purchasing.",
    "source": "https://www.scrum.org/assessments/professional-scrum-product-owner-ii-certification",
    "reviewedOn": "2026-09-20",
    "examMode": "Online",
    "aliases": [
      "Scrum",
      "PSPO II"
    ]
  }
];
