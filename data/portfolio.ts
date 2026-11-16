export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  tags: string[];
};

export type EducationItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
};

export type ProjectCategory = "professional" | "personal";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  features: string[];
  challenges: string[];
  github?: string;
  live?: string;
  image?: string;
  accent: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const site = {
  firstName: "Mahdi",
  lastName: "Addeche",
  fullName: "Addeche Mahdi",
  role: "Software Engineer",
  headline: "Software Engineer",
  location: "Blida, Algeria",
  email: "addeche.mahdi@gmail.com",
  phoneDisplay: "+213 5 40 37 65 02",
  phoneHref: "tel:+213540376502",
  resumePath: "/CV_Addeche_Mahdi.pdf",
  status: ["Blida, Algeria", "Open to opportunities", "Remote-friendly"],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const nav: NavItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MehdiR20" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mehdi-addeche-038307269",
  },
  { label: "Email", href: "mailto:addeche.mahdi@gmail.com" },
];

export const hero = {
  eyebrow: "Software Engineer",
  description:
    "Software Engineer and CS graduate building web products and intelligent systems — from booking platforms and e-commerce to explainable AI for agriculture.",
  primaryCta: "Download CV",
  secondaryCta: "View work",
  chips: [
    "Next.js",
    "TypeScript",
    "Python",
    "Machine Learning",
    "Tailwind CSS",
    "Power BI",
  ],
  codeFile: "developer.ts",
  codeStatus: "ready to ship",
  code: {
    name: "Addeche Mahdi",
    role: "Software Engineer",
    domains: ["Web", "AI", "Data"],
    openToWork: true,
  },
} as const;

export const experience: ExperienceItem[] = [
  {
    id: "cscc",
    period: "Sep 2021 – Jun 2026",
    title: "Student Lead & Active Member",
    organization: "CSCC — Computer Science Community Club",
    location: "Université Saad Dahlab de Blida",
    description:
      "Organized tech events, programming workshops, and campus hackathons. Passed technical skills on to new members and collaborated on team software projects.",
    tags: ["Hackathons", "Workshops", "Mentorship"],
  },
  {
    id: "freelance",
    period: "2023 – Present",
    title: "Web Developer & IT Consultant",
    organization: "Freelance",
    location: "Remote",
    description:
      "Designed, built, and shipped websites and e-commerce solutions for SMEs — including secure payment integrations and hands-on technical support.",
    tags: ["Web Development", "E-commerce", "REST APIs", "Payments"],
  },
];

export const education: EducationItem[] = [
  {
    id: "master",
    period: "2024 – 2026 · Graduated",
    title: "M.Sc. Computer Science — Software Engineering",
    organization: "Université Saad Dahlab de Blida",
    description:
      "Specialization in software architecture, advanced software engineering, project management, and data science.",
    tags: ["Software Engineering", "Architecture", "Data Science"],
  },
  {
    id: "licence",
    period: "2021 – 2024",
    title: "B.Sc. Computer Science",
    organization: "Université Saad Dahlab de Blida",
    description:
      "Core computer science fundamentals: algorithms, programming, databases, and software construction.",
    tags: ["CS Fundamentals", "Algorithms", "Databases"],
  },
  {
    id: "dynamics",
    period: "Certification",
    title: "Microsoft Dynamics 365",
    organization: "Microsoft",
    description:
      "Business applications training covering CRM/ERP workflows and enterprise software delivery.",
    tags: ["Dynamics 365", "ERP", "CRM"],
  },
];

export const projects: Project[] = [
  {
    id: "xai-agri",
    title: "XAI Agricultural Yield System",
    description:
      "Explainable AI model for environmental analysis, crop recommendation, and yield prediction — making agricultural decisions transparent instead of black-box.",
    category: "professional",
    tags: ["Python", "Machine Learning", "XAI", "Pandas"],
    features: [
      "Crop recommendation from environmental signals",
      "Yield prediction with model explanations",
      "Data preprocessing and exploratory analysis pipeline",
    ],
    challenges: [
      "Balancing predictive accuracy with interpretability so agronomists can trust recommendations.",
      "Turning raw environmental data into features that remain explainable end-to-end.",
    ],
    github: "https://github.com/MehdiR20/agroai-xai",
    accent: "from-emerald-100 to-teal-50",
  },
  {
    id: "bn-hotel",
    title: "BN Hôtel Blida",
    description:
      "Custom hotel booking platform with an optimized UX and a secure online payment flow for reservations in Blida.",
    category: "professional",
    tags: ["JavaScript", "HTML/CSS", "Payments", "UX"],
    features: [
      "Online room reservation journey",
      "Secure payment checkout",
      "Interface designed for clarity on desktop and mobile",
    ],
    challenges: [
      "Designing a booking flow that stays simple while handling real payment constraints.",
      "Keeping the interface fast and readable for guests who are not technical users.",
    ],
    accent: "from-sky-100 to-slate-50",
  },
  {
    id: "fitness-shop",
    title: "Fitness E-commerce Boutique",
    description:
      "WordPress store for Nutrition Space — supplements and fitness products with catalog, inventory, payment gateways, and SEO. Live at nutrition-space.com.",
    category: "professional",
    tags: ["WordPress", "PHP", "SEO", "E-commerce"],
    features: [
      "Product catalog and stock management",
      "Secure payment gateway integration",
      "On-page SEO for product discovery",
      "Multilingual storefront (FR / AR / EN)",
    ],
    challenges: [
      "Wiring catalog, inventory, and payments into one maintainable storefront.",
      "Improving search visibility without sacrificing checkout performance.",
    ],
    live: "https://nutrition-space.com/",
    image: "/projects/nutrition-space.png",
    accent: "from-amber-100 to-orange-50",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & CMS",
    items: [
      "PHP",
      "REST APIs",
      "WordPress",
      "WooCommerce",
      "Payment Integration",
      "SEO",
    ],
  },
  {
    title: "Databases",
    items: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Data & AI",
    items: [
      "Python",
      "Machine Learning",
      "Explainable AI (XAI)",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Jupyter",
      "Streamlit",
      "Matplotlib",
      "Power BI",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Postman",
      "Figma",
      "npm",
      "Microsoft Dynamics 365",
      "Excel",
      "Word",
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "French", level: "Good" },
];

export const marquee = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PHP",
  "WordPress",
  "Python",
  "Pandas",
  "scikit-learn",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Vercel",
  "Figma",
];

export const contact = {
  eyebrow: "Contact",
  title: "Let's build something",
  description:
    "Open to roles, freelance, and collaborations. Send a note and I'll get back to you.",
  form: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: "Tell me about your project...",
  },
};

export const experienceCopy = {
  eyebrow: "Career",
  title: "Experience",
  description:
    "Freelance delivery and tech community leadership across web products, e-commerce, and applied AI.",
  educationEyebrow: "Education",
  educationTitle: "Studies & certifications",
};

export const projectsCopy = {
  eyebrow: "Selected work",
  title: "Projects",
  description:
    "Client and professional engagements — from e-commerce and hospitality to explainable machine learning.",
  professional: "Professional",
  personal: "Personal",
  details: "Details",
  viewCode: "View code",
  visitSite: "Visit site",
};

export const skillsCopy = {
  eyebrow: "Toolbox",
  title: "Skills & technologies",
  description:
    "A practical stack spanning modern web engineering, e-commerce, data analysis, and applied machine learning.",
  languagesTitle: "Languages",
};
