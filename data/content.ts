import {
  AtSign,
  Code2,
  ContactRound,
  GitBranch,
  Palette,
  PenTool,
  Share2,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const content = {
  owner: {
    name: "Rimsha Kanwal",
    initials: "RK",
    role: "Web Developer & Digital Solutions Specialist",
    roles: ["Web Developer", "Digital Marketer", "Canva Graphic Designer", "AI Solutions Specialist"],
    location: "[CITY, COUNTRY]",
    email: "shaheenmarketing369@gmail.com",
    whatsapp: "+92 370 4948463",
    intro:
      "I create responsive websites, grow brands through digital marketing and social media, design standout Canva graphics, and build practical AI solutions.",
    bio: "I build thoughtful websites and visual identities for people growing a business online.\nI bring front-end development, practical design, and emerging AI workflows together.\nMy process is collaborative, considered, and focused on making the next step feel clear.",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      icon: "code" as const,
      title: "Web Development",
      description: "Creating responsive, modern, and user-friendly websites tailored to your business needs.",
    },
    {
      icon: "share" as const,
      title: "Digital Marketing & Social Media",
      description: "Developing marketing strategies, managing social media channels, running targeted campaigns, and driving audience engagement.",
    },
    {
      icon: "palette" as const,
      title: "Canva Graphic Design",
      description: "Designing eye-catching social media posts, banners, ads, and marketing collateral that showcase your brand.",
    },
    {
      icon: "sparkles" as const,
      title: "AI Integration & Solutions",
      description: "Leveraging cutting-edge AI tools to automate workflows and optimize digital processes.",
    },
  ],
  tools: [
    { name: "Next.js", icon: "code" as const },
    { name: "React", icon: "react" as const },
    { name: "TypeScript", icon: "typescript" as const },
    { name: "Tailwind", icon: "wind" as const },
    { name: "Figma", icon: "figma" as const },
    { name: "Canva", icon: "palette" as const },
    { name: "GitHub", icon: "github" as const },
  ],
  projects: [
    {
      title: "Suad Perfumes",
      kind: "Live Project",
      purpose: "A perfume storefront for browsing fragrance collections by bottle style and exploring featured products.",
      tools: ["E-commerce", "Product Catalog", "Responsive UI"],
      learning: "Live storefront featuring fragrance categories, product pages, and account access.",
      image: "/projects/studio-notes.svg",
      demoUrl: "https://suad-perfumes.vercel.app/",
      sourceUrl: null,
    },
    {
      title: "Resume Builder",
      kind: "Live Project",
      purpose: "A form-based tool for entering personal details, education, experience, and skills to generate a resume.",
      tools: ["Form UI", "Resume Generation"],
      learning: "Collects profile and career details in one guided resume-building flow.",
      image: "/projects/good-form.svg",
      demoUrl: "https://milestone1-05.vercel.app/",
      sourceUrl: null,
    },
    {
      title: "Todo App",
      kind: "Live Project",
      purpose: "A task-management app with account registration and login.",
      tools: ["Task Management", "Authentication"],
      learning: "A task-focused app organized around an authenticated user entry flow.",
      image: "/projects/fieldwork.svg",
      demoUrl: "https://frontend-flax-two-72.vercel.app/",
      sourceUrl: null,
    },
    {
      title: "AI Integration & Solutions",
      kind: "AI Integration · Visual Concepts",
      purpose: "A visual concept showing how carefully structured instructions can guide AI-generated content and useful digital outputs.",
      tools: ["AI Workflows", "Prompt Design", "Visual Content"],
      learning: "Using a clear subject, direction, and visual goal to shape a focused AI-assisted result.",
      image: "/projects/prompt-engineering.svg",
      demoUrl: null,
      sourceUrl: null,
    },
    {
      title: "AI-Assisted Robotics Curriculum",
      kind: "AI Integration · Educational Visual",
      purpose: "An educational infographic concept that introduces robotics, programming, and problem-solving for students.",
      tools: ["AI-Assisted Content", "Educational Design", "Infographics"],
      learning: "Organizing learning points into a visual sequence that makes a technology topic easier to scan.",
      image: "/projects/robotics-curriculum.svg",
      demoUrl: null,
      sourceUrl: null,
    },
    {
      title: "AI-Assisted Idea Generation",
      kind: "AI Integration · Creative Workflow",
      purpose: "A visual guide to brainstorming, mind mapping, and creative thinking as ways to develop ideas with AI.",
      tools: ["AI Ideation", "Mind Mapping", "Visual Storytelling"],
      learning: "Pairing idea-generation methods with clear visual structure to communicate a creative workflow.",
      image: "/projects/idea-generation.svg",
      demoUrl: null,
      sourceUrl: null,
    },
    {
      title: "AI Design Workflow Timeline",
      kind: "AI Integration · Process Visual",
      purpose: "A timeline concept mapping a creative project from brief and brainstorming through design, revision, and delivery.",
      tools: ["Workflow Design", "Process Mapping", "Visual Content"],
      learning: "Breaking a multi-step creative process into a clear, ordered visual guide.",
      image: "/projects/design-timeline.svg",
      demoUrl: null,
      sourceUrl: null,
    },
  ],
  contactMessage:
    "Have a website, visual identity, or workflow you’d like to bring to life? Send a note and tell me a little about it.",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/your-profile", icon: "linkedin" as const },
    { name: "GitHub", url: "https://github.com/RimshakanwalArin", icon: "github" as const },
    { name: "Freelancer.com", url: "https://www.freelancer.com/u/your-profile", icon: "freelancer" as const },
  ],
};

export const serviceIcons: Record<"code" | "palette" | "sparkles" | "share", LucideIcon> = {
  code: Code2,
  palette: Palette,
  sparkles: Sparkles,
  share: Share2,
};

export const toolIcons: Record<"code" | "react" | "typescript" | "wind" | "figma" | "palette" | "github", LucideIcon> = {
  code: Code2,
  react: Sparkles,
  typescript: AtSign,
  wind: Wind,
  figma: PenTool,
  palette: Palette,
  github: GitBranch,
};

export const socialIcons: Record<"linkedin" | "github" | "freelancer", LucideIcon> = {
  linkedin: ContactRound,
  github: GitBranch,
  freelancer: PenTool,
};