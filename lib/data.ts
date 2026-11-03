export const RESUME_URL =
  "https://drive.google.com/file/d/1_QphAbEnk6ArghTnqTy1gLn2jFTf5F1O/view?usp=sharing";
export const GITHUB_URL = "https://github.com/Abishekarun12";
export const EMAIL = "abiarun7708@gmail.com";
export const PHONE = "+91 7708626309";
export const PHONE_HREF = "tel:+917708626309";
export const LOCATION = "Dubai, UAE";

export const navItems = [
  { id: "home", label: "Home", icon: "fas fa-house" },
  { id: "about", label: "About", icon: "far fa-circle-user" },
  { id: "portfolio", label: "Work", icon: "fas fa-briefcase" },
  { id: "skills", label: "Skills", icon: "fas fa-code" },
  { id: "contact", label: "Contact", icon: "far fa-envelope" },
];

export const heroStats = [
  { value: "3.5+", label: "Years Experience", icon: "fas fa-briefcase" },
  { value: "15+", label: "Projects Delivered", icon: "fas fa-folder" },
  { value: "AWS", label: "Cloud Expert", icon: "fas fa-cloud" },
  { value: "100%", label: "Client Satisfaction", icon: "fas fa-trophy" },
];

export const heroTech = [
  { label: "Laravel", icon: "fab fa-laravel", color: "#f9322c" },
  { label: "AWS", icon: "fab fa-aws", color: "#ff9900" },
  { label: "Next.js", icon: "next", color: "#ffffff" },
  { label: "Docker", icon: "fab fa-docker", color: "#2496ed" },
  { label: "MySQL", icon: "fas fa-database", color: "#f29111" },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  location?: string;
  current?: boolean;
  text?: string;
};

export const experience: Experience[] = [
  {
    period: "2026 – Present",
    role: "Software Engineer",
    company: "CloudGate Host",
    location: "Dubai, UAE",
    current: true,
  },
  {
    period: "2023 – Sep 2026",
    role: "Software Engineer",
    company: "Cloudrevel Innovation",
    text: "Joined as a Jr. Software Developer and was promoted to Software Engineer. Built Let's Dine, My Ledger and the Zlatta admin panel, and contributed to RUGR-Udaan — designing scalable REST APIs for production Laravel apps serving 1,000+ users.",
  },
  {
    period: "2022 – 2023",
    role: "Laravel Developer Intern",
    company: "iCoffee (Pencil and Monk)",
    text: "Full SDLC exposure — requirements, design, coding, testing and debugging. Built web features with Laravel MVC, AJAX, jQuery and Tailwind CSS on real client projects.",
  },
];

export const education = [
  {
    period: "2019 – 2023",
    title: "B.E. Computer Science & Engineering",
    place: "ARM College of Engineering & Technology",
    text: "CGPA 7.7 / 10",
  },
];

export const certifications = [
  {
    title: "Web Phishing Detection",
    issuer: "IBM · PrepInsta",
    text: "Project certification for an ML-based real-time phishing URL detection tool.",
  },
];

export const ownProducts = [
  {
    title: "DevOps AI Agent",
    tag: "Solo — design, build & deploy",
    text: "A full-stack AI-powered AWS infrastructure platform — Next.js + Laravel 11 + FastAPI, with a transparent AWS proxy and multi-provider LLM routing.",
  },
];

export const skills = [
  { icon: "fab fa-laravel", name: "Laravel / PHP" },
  { icon: "fab fa-python", name: "FastAPI / Python" },
  { icon: "fab fa-react", name: "Next.js / React" },
  { icon: "fab fa-js", name: "TypeScript" },
  { icon: "fab fa-aws", name: "AWS Cloud" },
  { icon: "fas fa-database", name: "MySQL" },
];

export const tools = [
  "REST API Design",
  "Microservices",
  "JWT Auth",
  "WebSockets / Pusher",
  "Tailwind CSS",
  "AWS Bedrock",
  "boto3",
  "SigV4 Signing",
  "CloudWatch",
  "EC2 / S3 / IAM",
  "Eloquent ORM",
  "Docker",
  "Git",
  "Linux",
  "Jira / Confluence",
];

export const aiTools = [
  { name: "Claude", icon: "fas fa-brain", className: "claude" },
  { name: "AWS Bedrock", icon: "fas fa-cloud", className: "chatgpt" },
  { name: "Groq", icon: "fas fa-bolt", className: "perplexity" },
  { name: "GitHub Copilot", icon: "fas fa-code", className: "copilot" },
  { name: "Gemini", icon: "fas fa-star", className: "gemini" },
];

export type ProjectLink =
  | { kind: "badge"; icon: string; label: string; live?: boolean }
  | { kind: "link"; icon: string; label: string; href: string; live?: boolean }
  | { kind: "live-demo"; href: string };

export type Project = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  image?: string;
  placeholderIcon?: string;
  delay?: number;
};

const clientProject: ProjectLink = { kind: "badge", icon: "fas fa-lock", label: "Client Project" };

export const projects: Project[] = [
  {
    num: "02",
    title: "Let's Dine",
    description:
      "Full-featured food-delivery and table-booking platform with mobile app integration. Implemented RBAC, real-time order management and Pusher WebSockets.",
    tags: ["Laravel", "MySQL", "REST API", "Pusher"],
    links: [clientProject],
    placeholderIcon: "fas fa-utensils",
    delay: 0.1,
  },
  {
    num: "03",
    title: "My Ledger",
    description:
      "Corporate finance-management system integrated with an HRMS — payroll automation, loan tracking, overtime calculations and LOP processing.",
    tags: ["Laravel", "REST API", "MySQL"],
    links: [clientProject],
    placeholderIcon: "fas fa-file-invoice-dollar",
    delay: 0.15,
  },
  {
    num: "04",
    title: "RUGR-Udaan",
    description:
      "API-driven merchant-banking platform for rural and semi-urban markets — digital payments, instant settlements and merchant onboarding.",
    tags: ["Laravel", "Fintech", "API Integration"],
    links: [clientProject],
    placeholderIcon: "fas fa-building-columns",
    delay: 0.2,
  },
  {
    num: "05",
    title: "Zlatta — Decor E-commerce",
    description:
      "Admin panel for a decor e-commerce brand — product listings, order management, user roles and content updates.",
    tags: ["Laravel", "Admin Panel", "E-commerce"],
    links: [clientProject],
    placeholderIcon: "fas fa-couch",
    delay: 0.25,
  },
  {
    num: "06",
    title: "Ravanaa's Chat App",
    description:
      "Real-time Laravel chat application deployed on a live public server — Pusher WebSockets for instant messaging with email notifications, running on AWS EC2.",
    tags: ["Laravel", "Pusher", "AWS EC2"],
    links: [
      {
        kind: "link",
        icon: "fab fa-github",
        label: "GitHub",
        href: "https://github.com/Abishekarun12/laravel_chat_app",
      },
      { kind: "live-demo", href: "http://51.21.196.54/" },
    ],
    image: "/img/chat.gif",
    delay: 0.3,
  },
  {
    num: "07",
    title: "Web Phishing Detection",
    description:
      "URL-analysis tool that uses machine learning to detect phishing links in real time. Built and certified through IBM.",
    tags: ["Python", "Machine Learning", "IBM"],
    links: [{ kind: "badge", icon: "fas fa-certificate", label: "IBM Certified", live: true }],
    placeholderIcon: "fas fa-shield-halved",
    delay: 0.35,
  },
  {
    num: "08",
    title: "FarmEasy",
    description: "A farmer's companion app simplifying agricultural management and data tracking.",
    tags: ["Laravel", "PHP", "MySQL"],
    links: [
      {
        kind: "link",
        icon: "fab fa-github",
        label: "GitHub",
        href: "https://github.com/Abishekarun12/FarmEasy",
      },
    ],
    image: "/img/farmeasy.gif",
    delay: 0.4,
  },
];

export const moreOnGithub = [
  { label: "CRUD Cars Login", href: "https://github.com/Abishekarun12/CarsLogin" },
  { label: "Valaichuvadi", href: "https://github.com/Abishekarun12/books-webstie" },
  { label: "Cipher Text Converter", href: "https://github.com/Abishekarun12/Cipher-Text-in-Java" },
  { label: "User Data Connection", href: "https://github.com/Abishekarun12/User-s-Data-connectivity" },
];

export const socials = [
  { href: "https://github.com/Abishekarun12", icon: "fab fa-github", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/abishek-arunachalam-4202ab213/",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
  },
  { href: "https://twitter.com/Abishekarun12", icon: "fab fa-twitter", label: "Twitter" },
  { href: "https://www.facebook.com/abiarunachalam/", icon: "fab fa-facebook", label: "Facebook" },
];
