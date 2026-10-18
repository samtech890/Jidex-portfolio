export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  client: string;
  industry: string;
  year: string;
  completionDate: string;
  logo: string;
  coverGradient: string;
  accentColor: string;
  tech: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
  githubUrl: string;
  screenshots: string[];
  review: {
    author: string;
    role: string;
    quote: string;
    rating: number;
  };
  caseStudy: {
    problem: string;
    research: string;
    wireframes: string;
    design: string;
    development: string;
    challenges: string[];
    solutions: string[];
    performance: string;
  };
};

export const projects: Project[] = [
  {
    slug: "luxora-banking",
    title: "Luxora Banking",
    tagline: "Private wealth management reimagined",
    description:
      "A luxury digital banking platform with biometric security, real-time portfolio analytics, and white-glove concierge features for high-net-worth clients.",
    longDescription:
      "Luxora Banking is a next-generation private banking experience built for ultra-high-net-worth individuals. From biometric login to AI-powered wealth insights, every interaction feels intentional and premium.",
    client: "Luxora Financial Group",
    industry: "FinTech / Banking",
    year: "2025",
    completionDate: "March 2025",
    logo: "🏦",
    coverGradient: "from-amber-500/40 via-yellow-600/20 to-stone-900",
    accentColor: "#F59E0B",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Stripe", "AWS"],
    features: [
      "Biometric multi-factor authentication",
      "Real-time portfolio dashboard",
      "AI wealth advisor chatbot",
      "Wire transfer with fraud detection",
      "Family office multi-user roles",
      "PDF statement generation",
    ],
    metrics: [
      { label: "Lighthouse", value: "98" },
      { label: "Load Time", value: "0.8s" },
      { label: "Users", value: "12K+" },
      { label: "Uptime", value: "99.99%" },
    ],
    liveUrl: "/demos/luxora-banking",
    githubUrl: "https://github.com/jidexcoder/luxora-banking",
    screenshots: ["/projects/luxora-1.jpg", "/projects/luxora-2.jpg", "/projects/luxora-3.jpg"],
    review: {
      author: "Victoria Ashford",
      role: "Chief Digital Officer, Luxora",
      quote:
        "JIDEX delivered a banking experience that finally matches the caliber of our clientele. The attention to micro-interactions and security architecture was exceptional.",
      rating: 5,
    },
    caseStudy: {
      problem:
        "Legacy banking UX alienated younger wealth clients and lacked real-time insights expected in modern fintech.",
      research:
        "Interviewed 40 UHNW clients, audited competitor apps (Revolut Private, JPMorgan Chase Private), mapped 12 core journeys.",
      wireframes:
        "Low-fidelity flows for onboarding, portfolio, transfers, and advisor chat. Validated with 3 rounds of usability testing.",
      design:
        "Dark luxury aesthetic with gold accents, custom typography, glass panels, and calming motion for high-stakes actions.",
      development:
        "Built with Next.js App Router, encrypted API layer, Prisma + PostgreSQL, and AWS Cognito for biometric MFA.",
      challenges: [
        "PCI-DSS compliant payment flows",
        "Sub-second portfolio chart rendering",
        "Complex multi-entity permissions",
      ],
      solutions: [
        "Tokenized vault architecture with Stripe Treasury",
        "Canvas-based charts with Web Workers",
        "RBAC with hierarchical family office roles",
      ],
      performance:
        "Achieved 98 Lighthouse score, 0.8s LCP, and 99.99% uptime across multi-region AWS deployment.",
    },
  },
  {
    slug: "medisense-ai",
    title: "MediSense AI",
    tagline: "Clinical intelligence at machine speed",
    description:
      "An AI medical platform that assists clinicians with diagnostic suggestions, patient timeline analysis, and HIPAA-compliant documentation automation.",
    longDescription:
      "MediSense AI reduces administrative burden for hospitals by combining LLM-powered clinical notes with structured patient data pipelines and audit-ready compliance tooling.",
    client: "Helix Health Systems",
    industry: "HealthTech / AI",
    year: "2025",
    completionDate: "January 2025",
    logo: "🧬",
    coverGradient: "from-emerald-400/40 via-teal-600/20 to-slate-900",
    accentColor: "#10B981",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI", "PostgreSQL", "Docker", "Azure"],
    features: [
      "AI diagnostic assistance",
      "Voice-to-clinical-note transcription",
      "Patient timeline visualization",
      "HIPAA audit logging",
      "EHR FHIR integration",
      "Multi-hospital admin panel",
    ],
    metrics: [
      { label: "Note Time Saved", value: "67%" },
      { label: "Accuracy", value: "94%" },
      { label: "Hospitals", value: "18" },
      { label: "Compliance", value: "HIPAA" },
    ],
    liveUrl: "/demos/medisense-ai",
    githubUrl: "https://github.com/jidexcoder/medisense-ai",
    screenshots: ["/projects/medisense-1.jpg", "/projects/medisense-2.jpg"],
    review: {
      author: "Dr. Marcus Chen",
      role: "CMIO, Helix Health",
      quote:
        "MediSense transformed our documentation workflow. Clinicians get time back with patients while maintaining rigorous compliance standards.",
      rating: 5,
    },
    caseStudy: {
      problem: "Physicians spent 2+ hours daily on documentation, leading to burnout and delayed patient care.",
      research: "Shadowed ER and outpatient clinics, reviewed FHIR specs, partnered with compliance officers.",
      wireframes: "Designed clinician-first dashboard prioritizing speed over density of information.",
      design: "Calm medical UI with accessibility AA contrast, keyboard-first navigation, and clear AI confidence scores.",
      development: "FastAPI inference service, Next.js clinician portal, encrypted PHI storage, FHIR R4 connectors.",
      challenges: ["PHI encryption at rest/transit", "Hallucination risk in clinical AI", "Legacy EHR sync"],
      solutions: ["AES-256 vault + field-level encryption", "Human-in-loop confirmation UX", "Queue-based FHIR sync workers"],
      performance: "Average note generation under 4s with 94% clinician acceptance rate.",
    },
  },
  {
    slug: "nexus-exchange",
    title: "Nexus Exchange",
    tagline: "Institutional-grade crypto trading",
    description:
      "A high-performance crypto exchange with advanced charting, low-latency order books, staking, and institutional custody integrations.",
    longDescription:
      "Nexus Exchange delivers exchange-grade performance with a retail-friendly interface — WebSocket order books, TradingView charts, and cold-wallet custody flows.",
    client: "Nexus Digital Assets",
    industry: "Crypto / FinTech",
    year: "2024",
    completionDate: "November 2024",
    logo: "⚡",
    coverGradient: "from-violet-500/40 via-fuchsia-600/20 to-zinc-950",
    accentColor: "#8B5CF6",
    tech: ["Next.js", "Node.js", "Redis", "PostgreSQL", "WebSockets", "AWS", "Docker"],
    features: [
      "Real-time order book",
      "Advanced TradingView charts",
      "Spot & limit orders",
      "Staking dashboard",
      "2FA + hardware wallet support",
      "Institutional API",
    ],
    metrics: [
      { label: "Latency", value: "<40ms" },
      { label: "Pairs", value: "180+" },
      { label: "Volume/Day", value: "$42M" },
      { label: "API Uptime", value: "99.95%" },
    ],
    liveUrl: "/demos/nexus-exchange",
    githubUrl: "https://github.com/jidexcoder/nexus-exchange",
    screenshots: ["/projects/nexus-1.jpg", "/projects/nexus-2.jpg"],
    review: {
      author: "Elena Voss",
      role: "CEO, Nexus Digital Assets",
      quote:
        "Trading latency and UI polish exceeded our expectations. Nexus feels like a product built by a top-tier exchange team.",
      rating: 5,
    },
    caseStudy: {
      problem: "Existing exchange UI was slow and confusing for retail traders migrating from Binance/Coinbase.",
      research: "Benchmarked order-book latency, surveyed 500 traders, mapped conversion funnels.",
      wireframes: "Simplified trade ticket, denser pro mode, mobile-first watchlist.",
      design: "High-contrast trading theme, custom candle colors, micro-feedback on every order action.",
      development: "Redis-backed order book, Node matching gateway stubs, Next.js trading terminal.",
      challenges: ["WebSocket fan-out at scale", "Chart performance with 1s candles", "Secure withdrawal flows"],
      solutions: ["Sharded WS rooms", "Canvas chart offloading", "Multi-sig withdrawal approvals"],
      performance: "Sub-40ms book updates on average under load testing.",
    },
  },
  {
    slug: "rideflow",
    title: "RideFlow",
    tagline: "Uber-class mobility, rebuilt",
    description:
      "A full ride-hailing platform with rider/driver apps, real-time GPS matching, dynamic pricing, and a powerful operations dashboard.",
    longDescription:
      "RideFlow includes React Native apps for riders and drivers, a Next.js ops console, and a matching engine with surge pricing and ETA optimization.",
    client: "Metro Mobility Inc.",
    industry: "Mobility / Marketplace",
    year: "2024",
    completionDate: "August 2024",
    logo: "🚗",
    coverGradient: "from-sky-400/40 via-blue-600/20 to-slate-950",
    accentColor: "#3B82F6",
    tech: ["React Native", "Expo", "Next.js", "Node.js", "MongoDB", "Socket.io", "Google Maps"],
    features: [
      "Real-time ride matching",
      "Live GPS tracking",
      "Dynamic surge pricing",
      "In-app chat & calling",
      "Driver earnings dashboard",
      "City ops control center",
    ],
    metrics: [
      { label: "Match Time", value: "8s avg" },
      { label: "Cities", value: "14" },
      { label: "Rides/Mo", value: "210K" },
      { label: "App Rating", value: "4.8★" },
    ],
    liveUrl: "/demos/rideflow",
    githubUrl: "https://github.com/jidexcoder/rideflow",
    screenshots: ["/projects/rideflow-1.jpg", "/projects/rideflow-2.jpg"],
    review: {
      author: "Jamal Okonkwo",
      role: "Founder, Metro Mobility",
      quote:
        "From matching engine to driver UX, RideFlow launched city-ready. We scaled to 14 cities without rewriting core systems.",
      rating: 5,
    },
    caseStudy: {
      problem: "City needed a white-label alternative to Uber with local payment and regulatory hooks.",
      research: "Analyzed ride density heatmaps, driver churn patterns, and competitor fare models.",
      wireframes: "Dual app journeys + dispatcher console wireframes for peak-hour ops.",
      design: "Bold mobility branding, high-legibility maps, accessibility for low-vision drivers.",
      development: "Expo apps, Node matching service, Mongo geospatial indexes, Socket.io live updates.",
      challenges: ["Battery-efficient tracking", "Fair surge algorithms", "Offline-tolerant driver app"],
      solutions: ["Adaptive GPS sampling", "Configurable surge curves", "Queue + sync on reconnect"],
      performance: "Average match under 8 seconds across peak evening windows.",
    },
  },
  {
    slug: "feastly",
    title: "Feastly",
    tagline: "Food delivery with cinematic UX",
    description:
      "A premium food delivery platform featuring restaurant discovery, live order tracking, loyalty rewards, and a merchant analytics suite.",
    longDescription:
      "Feastly elevates food delivery with editorial restaurant storytelling, buttery animations, and a merchant dashboard that makes peak-hour ops manageable.",
    client: "Feastly Markets",
    industry: "FoodTech",
    year: "2024",
    completionDate: "June 2024",
    logo: "🍜",
    coverGradient: "from-orange-400/40 via-rose-600/20 to-neutral-950",
    accentColor: "#F97316",
    tech: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Redis", "Stripe", "Mapbox"],
    features: [
      "Restaurant discovery feed",
      "Live courier tracking",
      "Loyalty & referrals",
      "Scheduled orders",
      "Merchant analytics",
      "Multi-city menus",
    ],
    metrics: [
      { label: "Conversion", value: "+34%" },
      { label: "Restaurants", value: "3.2K" },
      { label: "Orders/Day", value: "18K" },
      { label: "NPS", value: "72" },
    ],
    liveUrl: "/demos/feastly",
    githubUrl: "https://github.com/jidexcoder/feastly",
    screenshots: ["/projects/feastly-1.jpg", "/projects/feastly-2.jpg"],
    review: {
      author: "Sofia Alvarez",
      role: "CPO, Feastly Markets",
      quote:
        "The product feels delicious. Conversion jumped 34% after launch — largely attributed to discovery UX and checkout speed.",
      rating: 5,
    },
    caseStudy: {
      problem: "Competing delivery apps felt cluttered; restaurants lacked actionable analytics.",
      research: "Card-sorting discovery IA, heatmaps on competitor apps, merchant interviews.",
      wireframes: "Feed → restaurant → cart → tracking as a continuous narrative.",
      design: "Warm food photography treatments, motion that mimics plating, soft neumorphic controls.",
      development: "Next.js web + RN apps, Redis geo caching, Stripe Connect payouts.",
      challenges: ["Menu CMS complexity", "Courier ETA accuracy", "Peak DB load"],
      solutions: ["Composable menu schema", "Mapbox traffic-aware ETAs", "Read replicas + Redis"],
      performance: "Checkout under 2 taps from cart; +34% conversion vs prior site.",
    },
  },
  {
    slug: "aether-canvas",
    title: "Aether Canvas",
    tagline: "AI image generation studio",
    description:
      "A creative AI studio for generating, editing, and organizing images with style presets, inpainting, and team workspaces.",
    longDescription:
      "Aether Canvas combines diffusion model pipelines with a Figma-like canvas for creatives who need speed, control, and brand consistency.",
    client: "Aether Labs",
    industry: "AI / Creative Tools",
    year: "2025",
    completionDate: "February 2025",
    logo: "✨",
    coverGradient: "from-cyan-400/40 via-purple-600/30 to-black",
    accentColor: "#06B6D4",
    tech: ["Next.js", "Python", "FastAPI", "Stable Diffusion", "OpenAI", "Supabase", "Vercel"],
    features: [
      "Text-to-image generation",
      "Inpainting & outpainting",
      "Brand style packs",
      "Team workspaces",
      "Asset versioning",
      "API access",
    ],
    metrics: [
      { label: "Gen Time", value: "2.1s" },
      { label: "Creators", value: "48K" },
      { label: "Images/Mo", value: "2.1M" },
      { label: "CSAT", value: "4.9★" },
    ],
    liveUrl: "/demos/aether-canvas",
    githubUrl: "https://github.com/jidexcoder/aether-canvas",
    screenshots: ["/projects/aether-1.jpg", "/projects/aether-2.jpg"],
    review: {
      author: "Noah Park",
      role: "Head of Product, Aether Labs",
      quote:
        "Aether Canvas is the first AI image tool our design team actually enjoys using daily. The canvas UX is world-class.",
      rating: 5,
    },
    caseStudy: {
      problem: "Existing AI tools felt like chat boxes, not creative workspaces.",
      research: "Studied Figma, Midjourney, Runway workflows with 30 designers.",
      wireframes: "Infinite canvas with layers, generations history, and prompt inspector.",
      design: "Glass dark UI, neon accents, cinematic reveal animations on generations.",
      development: "GPU queue workers, Supabase auth/storage, streaming progress UI.",
      challenges: ["Queue fairness", "Large asset CDN costs", "Prompt safety"],
      solutions: ["Priority tiers + credits", "WebP + CDN transforms", "Moderation pipeline"],
      performance: "Median generation 2.1s on priority GPU pool.",
    },
  },
  {
    slug: "hirecraft-ai",
    title: "HireCraft AI",
    tagline: "AI resume & career copilot",
    description:
      "An AI resume builder that crafts tailored applications, interview prep, and career roadmaps from a single profile.",
    longDescription:
      "HireCraft AI helps candidates land roles faster with ATS-optimized resumes, cover letters, and mock interviews powered by Claude and GPT.",
    client: "HireCraft Inc.",
    industry: "HRTech / AI",
    year: "2024",
    completionDate: "October 2024",
    logo: "📄",
    coverGradient: "from-indigo-400/40 via-blue-500/20 to-slate-950",
    accentColor: "#6366F1",
    tech: ["Next.js", "TypeScript", "Claude", "OpenAI", "Prisma", "PostgreSQL", "Stripe"],
    features: [
      "ATS-optimized resume builder",
      "Job-tailored cover letters",
      "Mock interview chatbot",
      "Career roadmap generator",
      "PDF & DOCX export",
      "LinkedIn import",
    ],
    metrics: [
      { label: "Interview Rate", value: "+41%" },
      { label: "Users", value: "95K" },
      { label: "Resumes", value: "310K" },
      { label: "MRR", value: "$84K" },
    ],
    liveUrl: "/demos/hirecraft-ai",
    githubUrl: "https://github.com/jidexcoder/hirecraft-ai",
    screenshots: ["/projects/hirecraft-1.jpg", "/projects/hirecraft-2.jpg"],
    review: {
      author: "Priya Nair",
      role: "CEO, HireCraft",
      quote:
        "Users report interview rates jumping over 40%. The product quality feels like a Series B team shipped it overnight.",
      rating: 5,
    },
    caseStudy: {
      problem: "Job seekers struggled to customize applications at scale without sounding generic.",
      research: "ATS parsing tests, recruiter interviews, competitor teardown of Teal/Kickresume.",
      wireframes: "Profile → target job → generate → refine → export loop.",
      design: "Clean editorial resume previews with live AI suggestions sidebar.",
      development: "Streaming LLM responses, Prisma user data model, Stripe subscriptions.",
      challenges: ["Hallucinated work history", "Export fidelity", "Prompt cost control"],
      solutions: ["Fact-lock from user profile", "Pixel-perfect PDF engine", "Cached templates"],
      performance: "Resume generation streams first tokens under 400ms.",
    },
  },
  {
    slug: "wanderly",
    title: "Wanderly",
    tagline: "Travel booking that feels like adventure",
    description:
      "A travel booking platform for flights, stays, and curated experiences with AI itinerary planning and seamless checkout.",
    longDescription:
      "Wanderly blends marketplace liquidity with cinematic destination storytelling and an AI trip planner that builds day-by-day itineraries.",
    client: "Wanderly Travel",
    industry: "TravelTech",
    year: "2024",
    completionDate: "April 2024",
    logo: "✈️",
    coverGradient: "from-teal-400/40 via-cyan-600/20 to-slate-950",
    accentColor: "#14B8A6",
    tech: ["Next.js", "Node.js", "MongoDB", "Mapbox", "Stripe", "OpenAI", "Vercel"],
    features: [
      "Flight & hotel search",
      "AI itinerary planner",
      "Experience marketplace",
      "Group trip splitting",
      "Offline itinerary PDFs",
      "Loyalty tiers",
    ],
    metrics: [
      { label: "Bookings", value: "62K" },
      { label: "AOV", value: "$1.2K" },
      { label: "Retention", value: "38%" },
      { label: "Lighthouse", value: "96" },
    ],
    liveUrl: "/demos/wanderly",
    githubUrl: "https://github.com/jidexcoder/wanderly",
    screenshots: ["/projects/wanderly-1.jpg", "/projects/wanderly-2.jpg"],
    review: {
      author: "Hannah Brooks",
      role: "VP Product, Wanderly",
      quote:
        "Wanderly looks and feels like an Awwwards travel brand. Our booking conversion and brand perception both lifted significantly.",
      rating: 5,
    },
    caseStudy: {
      problem: "Travel OTAs felt transactional and uninspiring for experiential travelers.",
      research: "Journey-mapped trip planning from inspiration to boarding pass.",
      wireframes: "Inspiration board → planner → checkout → trip hub.",
      design: "Full-bleed destination photography, soft parallax, expressive display type.",
      development: "Aggregated supplier APIs, AI planner service, Stripe travel payments.",
      challenges: ["Supplier API inconsistency", "Complex date pricing", "Mobile itinerary UX"],
      solutions: ["Adapter layer per supplier", "Normalized fare cache", "Trip hub PWA"],
      performance: "96 Lighthouse; itinerary generation under 3s.",
    },
  },
  {
    slug: "stayops",
    title: "StayOps",
    tagline: "Hotel management command center",
    description:
      "An all-in-one hotel operations dashboard for reservations, housekeeping, channel management, and guest experience automation.",
    longDescription:
      "StayOps unifies front-desk, housekeeping, and revenue teams in one real-time dashboard with channel manager sync and guest messaging.",
    client: "StayOps Hospitality",
    industry: "Hospitality / SaaS",
    year: "2023",
    completionDate: "December 2023",
    logo: "🏨",
    coverGradient: "from-blue-400/30 via-indigo-600/20 to-zinc-950",
    accentColor: "#3B82F6",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis", "AWS"],
    features: [
      "Reservation calendar",
      "Housekeeping board",
      "Channel manager sync",
      "Guest messaging",
      "Revenue reports",
      "Staff role permissions",
    ],
    metrics: [
      { label: "Properties", value: "420" },
      { label: "Ops Time Saved", value: "31%" },
      { label: "Sync Latency", value: "<2s" },
      { label: "CSAT", value: "4.7★" },
    ],
    liveUrl: "/demos/stayops",
    githubUrl: "https://github.com/jidexcoder/stayops",
    screenshots: ["/projects/stayops-1.jpg", "/projects/stayops-2.jpg"],
    review: {
      author: "Daniel Reeves",
      role: "COO, StayOps Hospitality",
      quote:
        "Our front-desk teams finally have one source of truth. StayOps paid for itself in the first quarter through efficiency alone.",
      rating: 5,
    },
    caseStudy: {
      problem: "Hotels juggled 5+ tools for PMS, channels, and housekeeping with constant sync errors.",
      research: "On-site hotel shadowing across boutique and mid-scale properties.",
      wireframes: "Ops board inspired by kanban + calendar hybrid.",
      design: "Dense but calm SaaS UI optimized for 1080p front-desk monitors.",
      development: "Prisma multi-tenant schema, Redis presence, webhook channel sync.",
      challenges: ["Multi-tenant isolation", "Double bookings", "Offline front-desk"],
      solutions: ["Row-level security", "Idempotent booking locks", "Local-first sync queue"],
      performance: "Channel updates reflected under 2 seconds on average.",
    },
  },
  {
    slug: "homefolio",
    title: "HomeFolio",
    tagline: "Real estate marketplace elevated",
    description:
      "A modern real estate marketplace with immersive listings, virtual tours, mortgage calculators, and agent CRM tooling.",
    longDescription:
      "HomeFolio brings Zillow-class discovery with premium storytelling for luxury listings and powerful tools for brokerages.",
    client: "HomeFolio Realty",
    industry: "PropTech",
    year: "2023",
    completionDate: "September 2023",
    logo: "🏠",
    coverGradient: "from-lime-400/30 via-emerald-600/20 to-neutral-950",
    accentColor: "#84CC16",
    tech: ["Next.js", "Mapbox", "Node.js", "PostgreSQL", "Supabase", "Cloudinary", "Vercel"],
    features: [
      "Map-based discovery",
      "3D/virtual tour embeds",
      "Mortgage calculator",
      "Saved searches & alerts",
      "Agent CRM",
      "Offer workflow",
    ],
    metrics: [
      { label: "Listings", value: "28K" },
      { label: "Lead Conv.", value: "+29%" },
      { label: "Agents", value: "1.1K" },
      { label: "LCP", value: "1.1s" },
    ],
    liveUrl: "/demos/homefolio",
    githubUrl: "https://github.com/jidexcoder/homefolio",
    screenshots: ["/projects/homefolio-1.jpg", "/projects/homefolio-2.jpg"],
    review: {
      author: "Claire Fontaine",
      role: "Managing Broker, HomeFolio",
      quote:
        "Listings look magazine-worthy and leads convert better. Agents actually love using the CRM — rare praise in this industry.",
      rating: 5,
    },
    caseStudy: {
      problem: "Brokerage site had outdated listings UX and no agent productivity tools.",
      research: "Buyer/seller interviews, MLS data constraints, mobile usage analysis.",
      wireframes: "Map-first discovery with listing story pages.",
      design: "Architectural photography treatments, generous whitespace, refined filters.",
      development: "Supabase realtime alerts, Mapbox clustering, Cloudinary media pipeline.",
      challenges: ["MLS feed reliability", "Heavy image pages", "Agent adoption"],
      solutions: ["Resilient sync jobs", "Blurhash + responsive images", "Guided onboarding"],
      performance: "1.1s LCP on listing pages with optimized media.",
    },
  },
  {
    slug: "skillora",
    title: "Skillora",
    tagline: "E-learning that keeps students hooked",
    description:
      "An e-learning platform with interactive courses, live cohorts, progress analytics, and AI tutoring support.",
    longDescription:
      "Skillora helps edtech companies deliver cinematic course experiences with quizzes, certificates, and an AI tutor that unblocks learners 24/7.",
    client: "Skillora Education",
    industry: "EdTech",
    year: "2023",
    completionDate: "May 2023",
    logo: "🎓",
    coverGradient: "from-pink-400/30 via-purple-600/25 to-zinc-950",
    accentColor: "#EC4899",
    tech: ["Next.js", "Node.js", "MongoDB", "Mux", "OpenAI", "Stripe", "AWS"],
    features: [
      "Course builder CMS",
      "Video streaming (Mux)",
      "Interactive quizzes",
      "Live cohort rooms",
      "AI tutor chat",
      "Certificates & badges",
    ],
    metrics: [
      { label: "Completion", value: "+45%" },
      { label: "Students", value: "180K" },
      { label: "Courses", value: "640" },
      { label: "Watch Time", value: "2.4M hrs" },
    ],
    liveUrl: "/demos/skillora",
    githubUrl: "https://github.com/jidexcoder/skillora",
    screenshots: ["/projects/skillora-1.jpg", "/projects/skillora-2.jpg"],
    review: {
      author: "Omar Haddad",
      role: "Founder, Skillora",
      quote:
        "Completion rates jumped dramatically. The AI tutor alone changed how students engage with difficult modules.",
      rating: 5,
    },
    caseStudy: {
      problem: "Low course completion and weak instructor tooling limited growth.",
      research: "Learning science literature review + student drop-off analytics.",
      wireframes: "Lesson player as hero surface with sticky syllabus and AI help.",
      design: "Focused learning UI with minimal distraction chrome and celebration moments.",
      development: "Mux streaming, progress events, OpenAI tutor with course RAG.",
      challenges: ["Video cost at scale", "Tutor grounding", "Cohort scheduling"],
      solutions: ["Adaptive bitrate + caching", "Course-scoped RAG", "Calendar sync"],
      performance: "+45% course completion after redesign and AI tutor launch.",
    },
  },
  {
    slug: "pulsefit",
    title: "PulseFit",
    tagline: "Fitness tracking with coach-grade insights",
    description:
      "A fitness tracking app with wearable sync, AI coaching plans, social challenges, and a trainer dashboard for gyms.",
    longDescription:
      "PulseFit connects wearables to personalized training plans, streak-based motivation, and gym-operator analytics.",
    client: "PulseFit Labs",
    industry: "Health & Fitness",
    year: "2025",
    completionDate: "April 2025",
    logo: "💪",
    coverGradient: "from-red-400/40 via-orange-500/20 to-neutral-950",
    accentColor: "#EF4444",
    tech: ["React Native", "Expo", "Next.js", "Node.js", "Firebase", "HealthKit", "Gemini"],
    features: [
      "Wearable sync",
      "AI workout plans",
      "Social challenges",
      "Nutrition logging",
      "Trainer dashboard",
      "Streak & badges",
    ],
    metrics: [
      { label: "DAU", value: "76K" },
      { label: "Retention D30", value: "42%" },
      { label: "Workouts Logged", value: "5.8M" },
      { label: "App Store", value: "4.9★" },
    ],
    liveUrl: "/demos/pulsefit",
    githubUrl: "https://github.com/jidexcoder/pulsefit",
    screenshots: ["/projects/pulsefit-1.jpg", "/projects/pulsefit-2.jpg"],
    review: {
      author: "Mia Torres",
      role: "CEO, PulseFit Labs",
      quote:
        "PulseFit feels alive — animations, coaching, and social loops keep users coming back. Best fitness product experience we've shipped.",
      rating: 5,
    },
    caseStudy: {
      problem: "Generic fitness apps lacked personalized coaching and gym B2B tooling.",
      research: "Trainer interviews, wearable API constraints, retention cohort analysis.",
      wireframes: "Home rings → workout → celebrate → social challenge loop.",
      design: "High-energy motion, bold metrics typography, achievement-driven feedback.",
      development: "Expo app, Firebase realtime, Gemini plan generation, Next.js trainer portal.",
      challenges: ["HealthKit/Google Fit parity", "Plan personalization quality", "Gym multi-location roles"],
      solutions: ["Unified activity adapter", "Goal-conditioned prompts", "Org RBAC"],
      performance: "42% D30 retention — well above category benchmarks.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
