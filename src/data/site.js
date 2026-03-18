import {
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Cpu,
  GraduationCap,
  Handshake,
  Headset,
  Network,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

export const siteMetadata = {
  name: 'Valuelink Technologies',
  tagline: 'Support That Delivers',
  siteUrl: 'https://www.valuelinktech.com',
  description:
    'Valuelink Technologies delivers end-to-end IT solutions covering infrastructure, software, cybersecurity, procurement, advisory, and managed support.',
  defaultImage:
    'https://images.pexels.com/photos/34221317/pexels-photo-34221317.png?cs=srgb&dl=pexels-luis-sevilla-252657-34221317.jpg&fm=jpg',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

export const contactInfo = {
  address: '21 Bodethomas, Surulere, Lagos',
  email: 'info@valuelinktech.com',
  hours: 'Mon-Sat: 9.00 am - 6.00 pm',
  phone: '09133133025',
  altPhone: '09022906565',
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Twitter', href: 'https://www.twitter.com' },
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
];

export const heroStats = [
  { label: 'Business-First Delivery', value: 'End-to-End' },
  { label: 'Service Window', value: 'Mon-Sat' },
  { label: 'Support Promise', value: 'Results-Led' },
];

export const serviceHighlights = [
  {
    title: 'Telecommunications & Connectivity',
    description: 'Reliable voice, data, and connectivity solutions that keep teams and operations aligned.',
    icon: Smartphone,
  },
  {
    title: 'Cybersecurity Services',
    description: 'Threat-aware security services that strengthen resilience, identity, and compliance readiness.',
    icon: ShieldCheck,
  },
  {
    title: 'Managed IT Services',
    description: 'Day-to-day support, monitoring, and maintenance designed to reduce downtime and friction.',
    icon: Headset,
  },
  {
    title: 'IT Consulting & Advisory',
    description: 'Practical strategy and planning that connect technology investment to business outcomes.',
    icon: Handshake,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise platforms and integrations for modern operations and growth.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Software Solutions & Development',
    description: 'Custom software, automation, and product engineering tailored to operational needs.',
    icon: Cpu,
  },
  {
    title: 'IT Infrastructure Services',
    description: 'Infrastructure design, implementation, and optimization across cloud and on-prem environments.',
    icon: Network,
  },
  {
    title: 'Training & Capacity Building',
    description: 'Hands-on workshops and enablement programs that improve adoption and technical confidence.',
    icon: GraduationCap,
  },
];

export const coreOffers = [
  'Hardware & Software Procurement',
  'IT Infrastructure Assessment & Design',
  'Implementation & Project Delivery',
  'License Management & Optimization',
  'Ongoing Support & Managed Services',
];

export const serviceCategories = [
  {
    title: 'Infrastructure Services',
    icon: Network,
    intro: 'Secure and scalable infrastructure foundations built around performance, reliability, and growth.',
    items: [
      'IT Infrastructure Design & Implementation: Structured cabling, server setup, and network architecture.',
      'Cloud Infrastructure Services: Migration, cloud management, and hybrid environments.',
      'Data Center Solutions: On-premise and co-location, including storage and backup.',
      'Network Solutions: LAN/WAN, wireless, VPNs, and SD-WAN deployment.',
    ],
  },
  {
    title: 'Cybersecurity & Risk Management',
    icon: ShieldCheck,
    intro: 'Layered protection and governance services that reduce risk without slowing the business.',
    items: [
      'Cybersecurity Assessments: Vulnerability scans, penetration testing, and compliance checks.',
      'Identity & Access Management (IAM): Implementation of PAM tools including BeyondTrust.',
      'Endpoint Security: Antivirus, EDR, and device control strategies.',
      'Governance, Risk & Compliance (GRC): Policies, audit support, and ISO/PCI-DSS/NIST frameworks.',
    ],
  },
  {
    title: 'Managed IT Services',
    icon: Headset,
    intro: 'Operational support services that keep systems stable, supported, and proactive.',
    items: [
      'IT Support Helpdesk: Tier 1-3 support delivered remotely and on-site.',
      'Proactive Monitoring & Maintenance: 24/7 monitoring, patch management, and health checks.',
      'Backup & Disaster Recovery: Business continuity and automated backup services.',
      'IT Asset Management: Inventory control, license tracking, and lifecycle management.',
    ],
  },
  {
    title: 'Software & Application Services',
    icon: Cpu,
    intro: 'Application engineering and lifecycle support for modern digital products and enterprise platforms.',
    items: [
      'Software Development: Web, mobile, and enterprise applications.',
      'Application Support & Maintenance: Bug fixes, tuning, and upgrades.',
      'DevOps & Automation: CI/CD, Docker, and Kubernetes workflows.',
      'Enterprise Software Integration: ERP, CRM, and legacy system integration.',
    ],
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    intro: 'Cloud modernization services focused on agility, cost visibility, and operational continuity.',
    items: [
      'Cloud Strategy & Consulting: Readiness assessments and cost optimization.',
      'Cloud Migration: Planning, execution, and post-migration support.',
      'SaaS/PaaS/IaaS Management: Azure, AWS, and GCP administration.',
      'Virtual Desktop Infrastructure (VDI): Remote work and secure access solutions.',
    ],
  },
  {
    title: 'IT Consulting & Advisory',
    icon: Users,
    intro: 'Business-aligned guidance that translates technical decisions into measurable value.',
    items: [
      'Technology Roadmapping: IT strategy aligned with business goals.',
      'Digital Transformation Advisory: Legacy modernization and cloud-native planning.',
      'Business Process Optimization: Workflow automation and operational efficiency.',
      'IT Policy & Compliance Consulting: Documentation, audit preparation, and policy design.',
    ],
  },
  {
    title: 'Hardware & Licensing Supply',
    icon: BadgeCheck,
    intro: 'Trusted procurement and licensing support that removes friction from sourcing and deployment.',
    items: [
      'Hardware Procurement: Laptops, servers, routers, firewalls, and essential peripherals.',
      'Software Licensing: OEM partnerships, renewals, and warranty support.',
      'Installation & Configuration: Plug-and-play deployment and customization.',
    ],
  },
  {
    title: 'Training & Capacity Building',
    icon: GraduationCap,
    intro: 'Practical enablement programs that improve adoption, security awareness, and internal capability.',
    items: [
      'User Awareness Training: Cyber hygiene and phishing simulation programs.',
      'Custom Workshops: Tailored sessions for tools, teams, and processes.',
      'Change Management Support: Structured support for smoother technology transitions.',
    ],
  },
];

export const companyCopy = {
  vision:
    'To become a globally recognized technology partner, delivering end-to-end solutions that empower businesses through innovative hardware, robust software, expert support services, and strategic IT procurement. We envision a future where our seamless approach, from assessment and design to implementation, licensing optimization, and long-term support, drives measurable success and digital transformation for clients across all industries.',
  mission:
    'At Valuelink Technologies, our mission is to connect businesses with the right technology strategically, efficiently, and affordably. From hardware to software, assessments to implementation, and licensing to long-term support, we exist to create lasting value through seamless, expert-driven solutions. With a commitment to support that delivers, we empower our clients to scale, evolve, and succeed in a dynamic digital world.',
  promise:
    'With "Support That Delivers" as our promise, we do not just supply technology - we build lasting partnerships grounded in trust, performance, and results. Whether you are upgrading your systems, expanding your capabilities, or seeking end-to-end IT transformation, Valuelink Technologies is your link to smarter, more impactful solutions.',
  additional:
    'Constantly Striving for Creative Solutions to Business Needs. Typical ad agency clients include businesses and corporations, non-profit organizations and private agencies. Constantly Striving for Creative Solutions to Business Needs.',
};
