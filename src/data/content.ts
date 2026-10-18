export type Service = {
  title: string;
  description: string;
  icon: string;
  category: string;
};

export const services: Service[] = [
  { title: "Website Development", description: "Custom high-performance websites engineered for conversion and brand impact.", icon: "globe", category: "Web" },
  { title: "Landing Pages", description: "Awwwards-level landing pages that turn traffic into pipeline.", icon: "layout", category: "Web" },
  { title: "Business Websites", description: "Polished corporate sites with CMS, SEO, and analytics baked in.", icon: "building", category: "Web" },
  { title: "Portfolio Websites", description: "Memorable personal and studio portfolios that win clients.", icon: "sparkles", category: "Web" },
  { title: "AI SaaS", description: "End-to-end AI products from prompt pipelines to billing.", icon: "bot", category: "AI" },
  { title: "Dashboard Development", description: "Complex admin and analytics dashboards with delightful UX.", icon: "chart", category: "Product" },
  { title: "Mobile Apps", description: "Native-quality mobile experiences for iOS and Android.", icon: "smartphone", category: "Mobile" },
  { title: "React Native Apps", description: "Cross-platform apps with shared code and premium polish.", icon: "smartphone", category: "Mobile" },
  { title: "Flutter Apps", description: "Beautiful Flutter apps with smooth 60fps interactions.", icon: "smartphone", category: "Mobile" },
  { title: "Admin Panels", description: "Role-based admin systems for ops, support, and growth teams.", icon: "shield", category: "Product" },
  { title: "API Development", description: "Secure, documented REST and GraphQL APIs built to scale.", icon: "server", category: "Backend" },
  { title: "Automation", description: "Workflow automation that removes repetitive business busywork.", icon: "zap", category: "AI" },
  { title: "AI Chatbots", description: "Brand-aligned chatbots with RAG, tools, and handoff flows.", icon: "message", category: "AI" },
  { title: "Database Design", description: "Schemas and data models optimized for integrity and speed.", icon: "database", category: "Backend" },
  { title: "UI UX Design", description: "Research-backed interfaces with motion and micro-interaction craft.", icon: "palette", category: "Design" },
  { title: "Website Redesign", description: "Transform dated sites into modern conversion machines.", icon: "refresh", category: "Web" },
  { title: "Speed Optimization", description: "Core Web Vitals, caching, and asset pipelines for 95+ scores.", icon: "gauge", category: "Performance" },
  { title: "Bug Fixing", description: "Surgical debugging for production issues and regressions.", icon: "bug", category: "Support" },
  { title: "SEO", description: "Technical SEO, structured data, and content architecture.", icon: "search", category: "Growth" },
  { title: "Deployment", description: "CI/CD, Vercel, AWS, Docker — shipped with confidence.", icon: "rocket", category: "DevOps" },
];

export type TechItem = {
  name: string;
  category: string;
  color: string;
};

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", color: "#FFFFFF" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6" },
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "Express", category: "Backend", color: "#FFFFFF" },
  { name: "MongoDB", category: "Database", color: "#47A248" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1" },
  { name: "Supabase", category: "Backend", color: "#3ECF8E" },
  { name: "Firebase", category: "Backend", color: "#FFCA28" },
  { name: "Prisma", category: "Database", color: "#2D3748" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4" },
  { name: "Framer Motion", category: "Frontend", color: "#FF0055" },
  { name: "React Native", category: "Mobile", color: "#61DAFB" },
  { name: "Expo", category: "Mobile", color: "#000020" },
  { name: "Flutter", category: "Mobile", color: "#02569B" },
  { name: "Python", category: "Backend", color: "#3776AB" },
  { name: "Django", category: "Backend", color: "#092E20" },
  { name: "FastAPI", category: "Backend", color: "#009688" },
  { name: "AI APIs", category: "AI", color: "#7C3AED" },
  { name: "OpenAI", category: "AI", color: "#10A37F" },
  { name: "Claude", category: "AI", color: "#D97706" },
  { name: "Gemini", category: "AI", color: "#4285F4" },
  { name: "Cursor AI", category: "AI", color: "#00FFFF" },
  { name: "Bolt", category: "AI", color: "#F97316" },
  { name: "Lovable", category: "AI", color: "#EC4899" },
  { name: "Vercel", category: "DevOps", color: "#FFFFFF" },
  { name: "AWS", category: "DevOps", color: "#FF9900" },
  { name: "Docker", category: "DevOps", color: "#2496ED" },
  { name: "GitHub", category: "DevOps", color: "#FFFFFF" },
  { name: "Figma", category: "Design", color: "#F24E1E" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Engineer",
    company: "Independent · Elite Clients",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Designing and shipping production AI systems — chatbots, automation agents, SaaS copilots, and RAG pipelines for high-growth startups.",
    achievements: [
      "Shipped 12+ AI products with measurable ROI",
      "Built multi-model orchestration (OpenAI, Claude, Gemini)",
      "Reduced client support load by up to 60% via automation",
    ],
  },
  {
    role: "Lead Developer",
    company: "Studio Aurora",
    period: "2022 — 2024",
    location: "Remote / EU",
    description:
      "Led a pod of engineers building premium web and mobile products for fintech, health, and marketplace clients.",
    achievements: [
      "Directed architecture for 8 major product launches",
      "Established design system and CI quality bars",
      "Mentored 5 mid-level engineers to senior level",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Nimbus Digital",
    period: "2020 — 2022",
    location: "Hybrid",
    description:
      "Built scalable SaaS platforms with React, Node, and cloud infrastructure — from MVP to Series A scale.",
    achievements: [
      "Grew platform to 100K+ MAU",
      "Cut infra cost 35% via caching & query optimization",
      "Owned end-to-end feature delivery",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Global Clients",
    period: "2018 — 2020",
    location: "Worldwide",
    description:
      "Delivered websites, landing pages, and mobile apps for startups and agencies across 20+ countries.",
    achievements: [
      "50+ successful client engagements",
      "Specialized in conversion-focused frontends",
      "Built lasting retainer relationships",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Victoria Ashford",
    role: "Chief Digital Officer",
    company: "Luxora Financial",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Victoria",
    rating: 5,
    quote:
      "Working with JIDEX felt like hiring an entire product studio. The Luxora platform exceeded every benchmark we set for polish, security, and performance. Our UHNW clients regularly compliment the experience — that never happened with our previous vendors.",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Chief Medical Information Officer",
    company: "Helix Health",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    rating: 5,
    quote:
      "MediSense AI required deep domain sensitivity and technical rigor. JIDEX navigated HIPAA constraints gracefully while shipping a product clinicians actually love. Documentation time dropped dramatically across our pilot hospitals.",
  },
  {
    name: "Elena Voss",
    role: "Chief Executive Officer",
    company: "Nexus Digital Assets",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    rating: 5,
    quote:
      "Crypto products live or die on latency and trust. JIDEX built an exchange terminal that feels institutional yet approachable. Our traders noticed the difference on day one.",
  },
  {
    name: "Sofia Alvarez",
    role: "Chief Product Officer",
    company: "Feastly Markets",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
    rating: 5,
    quote:
      "Conversion up 34%. That's the headline. Behind it is obsessive craft — motion, hierarchy, checkout friction removal. JIDEX doesn't just ship screens; he ships outcomes.",
  },
  {
    name: "Noah Park",
    role: "Head of Product",
    company: "Aether Labs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
    rating: 5,
    quote:
      "Aether Canvas is the creative tool we dreamed of. The canvas UX, generation feedback, and team workflows are genuinely best-in-class. Our designers refuse to go back.",
  },
  {
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "HireCraft",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
    quote:
      "From AI resume generation to billing, everything was production-ready. Users report interview rates jumping 40%+. JIDEX is the rare engineer who thinks like a founder.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverGradient: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-ai-product-design",
    title: "The Future of AI Product Design in 2026",
    excerpt: "How multimodal interfaces, agentic workflows, and trust UX will redefine software experiences.",
    category: "AI",
    date: "2026-07-12",
    readTime: "8 min",
    coverGradient: "from-violet-600/50 to-cyan-500/30",
  },
  {
    slug: "react-performance-patterns",
    title: "React 19 Performance Patterns That Actually Matter",
    excerpt: "Practical techniques for smoother UIs using modern React without premature memoization.",
    category: "React",
    date: "2026-06-28",
    readTime: "6 min",
    coverGradient: "from-sky-500/50 to-blue-700/30",
  },
  {
    slug: "nextjs-app-router-mastery",
    title: "Mastering the Next.js App Router for Premium Sites",
    excerpt: "Streaming, partial prerendering, and composition patterns for Awwwards-level Next.js apps.",
    category: "Next.js",
    date: "2026-06-10",
    readTime: "10 min",
    coverGradient: "from-zinc-100/20 to-zinc-900",
  },
  {
    slug: "mobile-development-2026",
    title: "Mobile Development in 2026: RN, Flutter & Beyond",
    excerpt: "Choosing the right stack for premium mobile products and when native still wins.",
    category: "Mobile",
    date: "2026-05-22",
    readTime: "7 min",
    coverGradient: "from-emerald-500/40 to-teal-800/30",
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale Without Killing Creativity",
    excerpt: "Building token architectures and motion languages that empower, not constrain.",
    category: "Design",
    date: "2026-05-04",
    readTime: "9 min",
    coverGradient: "from-pink-500/40 to-rose-800/30",
  },
  {
    slug: "programming-craft-mindset",
    title: "The Craft Mindset: Writing Code Like a Designer",
    excerpt: "Why the best engineers obsess over details users never consciously notice.",
    category: "Programming",
    date: "2026-04-18",
    readTime: "5 min",
    coverGradient: "from-amber-500/40 to-orange-800/30",
  },
  {
    slug: "cursor-ai-workflow",
    title: "My Cursor AI Workflow for Shipping 10x Faster",
    excerpt: "Prompts, rules, agents, and review loops that keep quality high while moving fast.",
    category: "Cursor AI",
    date: "2026-04-02",
    readTime: "8 min",
    coverGradient: "from-cyan-400/40 to-purple-700/30",
  },
  {
    slug: "developer-productivity-systems",
    title: "Productivity Systems for High-Output Developers",
    excerpt: "Calendar design, deep work blocks, and tooling that compounds over years.",
    category: "Productivity",
    date: "2026-03-15",
    readTime: "6 min",
    coverGradient: "from-indigo-500/40 to-blue-900/30",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$2,500",
    period: "starting at",
    description: "Perfect for landing pages and polished marketing sites.",
    features: [
      "1–5 page website",
      "Responsive premium design",
      "Basic animations",
      "SEO foundation",
      "2 revision rounds",
      "2-week delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$8,500",
    period: "starting at",
    description: "Full product experiences for growing businesses and startups.",
    features: [
      "Custom web or mobile app",
      "Advanced motion & 3D",
      "CMS / dashboard",
      "API integrations",
      "Performance optimization",
      "Priority support",
      "Unlimited revisions (scope)",
    ],
    highlighted: true,
    cta: "Hire Me",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "AI platforms, SaaS products, and large-scale digital systems.",
    features: [
      "AI / SaaS architecture",
      "Dedicated engineering",
      "Security & compliance",
      "Multi-platform delivery",
      "Ongoing retainer",
      "SLA & roadmap planning",
      "White-glove onboarding",
    ],
    cta: "Book a Call",
  },
];

export const funFacts = [
  { label: "Cups of coffee", value: "2,847" },
  { label: "Late-night deploys", value: "419" },
  { label: "Design iterations", value: "∞" },
  { label: "Awwwards aspirations", value: "Daily" },
];

export const skills = [
  { name: "Frontend Engineering", level: 98 },
  { name: "UI/UX & Motion", level: 95 },
  { name: "Backend & APIs", level: 92 },
  { name: "Mobile Development", level: 90 },
  { name: "AI Integration", level: 94 },
  { name: "DevOps & Cloud", level: 88 },
];
