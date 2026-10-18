import type { Project } from "@/data/projects";

export type DemoScreen = {
  nav: string[];
  heroCta: string;
  secondaryCta: string;
  headline: string;
  subhead: string;
  cards: { title: string; value: string; detail: string }[];
  feed: string[];
  modules: { name: string; status: string; desc: string }[];
};

export function getDemoScreen(project: Project): DemoScreen {
  const screens: Record<string, DemoScreen> = {
    "luxora-banking": {
      nav: ["Accounts", "Portfolio", "Transfers", "Advisor", "Family Office"],
      heroCta: "Open Private Banking",
      secondaryCta: "View Portfolio",
      headline: "Wealth, refined for the few who expect more.",
      subhead: "Biometric access, real-time analytics, and concierge-grade controls for UHNW clients.",
      cards: [
        { title: "Total Assets", value: "$12.4M", detail: "+2.8% this month" },
        { title: "Cash Available", value: "$840K", detail: "3 currencies" },
        { title: "Risk Score", value: "Balanced", detail: "AI monitored" },
        { title: "Advisor", value: "Online", detail: "Response < 2m" },
      ],
      feed: [
        "Wire to Singapore cleared · $250,000",
        "Portfolio rebalance suggestion ready",
        "Family member access approved",
        "Monthly statement generated",
      ],
      modules: [
        { name: "Biometric Vault", status: "Secure", desc: "Face ID + hardware key" },
        { name: "AI Wealth Copilot", status: "Active", desc: "Personalized insights" },
        { name: "Multi-entity Roles", status: "Live", desc: "Family office RBAC" },
      ],
    },
    "medisense-ai": {
      nav: ["Patients", "Notes", "Diagnostics", "EHR Sync", "Compliance"],
      heroCta: "Start Clinical Session",
      secondaryCta: "View Timeline",
      headline: "Clinical intelligence that respects the physician.",
      subhead: "HIPAA-ready documentation, diagnostic assistance, and FHIR-connected patient timelines.",
      cards: [
        { title: "Notes Drafted", value: "128", detail: "Today" },
        { title: "Avg Note Time", value: "41s", detail: "-67% vs baseline" },
        { title: "Acceptance", value: "94%", detail: "Clinician approved" },
        { title: "Hospitals", value: "18", detail: "Active sites" },
      ],
      feed: [
        "Voice note transcribed for Room 204",
        "Differential suggestions ready for review",
        "FHIR sync completed · Epic connector",
        "Audit log exported for compliance",
      ],
      modules: [
        { name: "Voice → Note", status: "Ready", desc: "Streaming transcription" },
        { name: "Diagnostic Assist", status: "On", desc: "Human-in-the-loop" },
        { name: "PHI Vault", status: "Encrypted", desc: "AES-256 field level" },
      ],
    },
    "nexus-exchange": {
      nav: ["Markets", "Trade", "Orders", "Wallet", "API"],
      heroCta: "Launch Terminal",
      secondaryCta: "View Markets",
      headline: "Institutional speed. Retail clarity.",
      subhead: "Sub-40ms order books, advanced charting, and custody-ready withdrawal flows.",
      cards: [
        { title: "BTC/USDT", value: "67,420", detail: "+1.4%" },
        { title: "24h Volume", value: "$42M", detail: "Exchange wide" },
        { title: "Latency", value: "36ms", detail: "Book updates" },
        { title: "Open Orders", value: "14", detail: "2 fills pending" },
      ],
      feed: [
        "Limit buy filled · 0.25 BTC",
        "ETH staking rewards credited",
        "API key rotated successfully",
        "Withdrawal whitelist updated",
      ],
      modules: [
        { name: "Spot Engine", status: "Live", desc: "180+ pairs" },
        { name: "WebSocket Books", status: "Healthy", desc: "Sharded rooms" },
        { name: "Cold Custody", status: "Armed", desc: "Multi-sig flows" },
      ],
    },
    rideflow: {
      nav: ["Ride", "Driver", "Trips", "Wallet", "Ops"],
      heroCta: "Request a Ride",
      secondaryCta: "Driver Mode",
      headline: "City mobility that matches in seconds.",
      subhead: "Real-time GPS matching, surge-aware pricing, and an ops console for every city.",
      cards: [
        { title: "ETA", value: "3 min", detail: "Driver nearby" },
        { title: "Fare", value: "$14.20", detail: "Includes taxes" },
        { title: "Match Time", value: "8s", detail: "City average" },
        { title: "Rating", value: "4.8★", detail: "Last 30 days" },
      ],
      feed: [
        "Driver Alex accepted your trip",
        "Surge ended in Downtown zone",
        "Trip completed · $18.40",
        "Ops: 42 active drivers online",
      ],
      modules: [
        { name: "Matching", status: "Online", desc: "Geo + ETA optimized" },
        { name: "Live Map", status: "Streaming", desc: "Socket.io updates" },
        { name: "City Ops", status: "Staffed", desc: "14 cities live" },
      ],
    },
    feastly: {
      nav: ["Discover", "Restaurants", "Cart", "Orders", "Rewards"],
      heroCta: "Order Now",
      secondaryCta: "Browse Nearby",
      headline: "Food delivery with cinematic discovery.",
      subhead: "Editorial restaurant feeds, live courier tracking, and merchant analytics that convert.",
      cards: [
        { title: "Nearby", value: "48", detail: "Open now" },
        { title: "Delivery", value: "22 min", detail: "Estimated" },
        { title: "Cart", value: "$32.50", detail: "2 items" },
        { title: "Rewards", value: "1,240", detail: "Points" },
      ],
      feed: [
        "Courier picked up from Sakura Kitchen",
        "Your order is 1.2 miles away",
        "Loyalty tier upgraded to Gold",
        "Restaurant promo unlocked · 15% off",
      ],
      modules: [
        { name: "Discovery Feed", status: "Hot", desc: "Personalized ranking" },
        { name: "Live Tracking", status: "Active", desc: "Mapbox ETAs" },
        { name: "Merchant Hub", status: "Synced", desc: "Peak-hour tools" },
      ],
    },
    "aether-canvas": {
      nav: ["Create", "Canvas", "Styles", "Library", "Team"],
      heroCta: "Generate Image",
      secondaryCta: "Open Canvas",
      headline: "AI image studio built for designers.",
      subhead: "Prompt, refine, inpaint, and organize brand-consistent assets on an infinite canvas.",
      cards: [
        { title: "Credits", value: "842", detail: "Priority GPU" },
        { title: "Gen Time", value: "2.1s", detail: "Median" },
        { title: "Assets", value: "1,284", detail: "In library" },
        { title: "Team", value: "12", detail: "Seats active" },
      ],
      feed: [
        "Style pack “Noir Luxury” applied",
        "Generation #4921 completed",
        "Inpaint layer exported as WebP",
        "Teammate Maya shared a board",
      ],
      modules: [
        { name: "Diffusion Queue", status: "Fast", desc: "Priority pool" },
        { name: "Brand Styles", status: "Loaded", desc: "8 packs" },
        { name: "Team Sync", status: "Live", desc: "Realtime boards" },
      ],
    },
    "hirecraft-ai": {
      nav: ["Profile", "Resumes", "Jobs", "Interviews", "Roadmap"],
      heroCta: "Build Resume",
      secondaryCta: "Mock Interview",
      headline: "Land interviews with AI-tailored applications.",
      subhead: "ATS-optimized resumes, cover letters, and interview prep from one career profile.",
      cards: [
        { title: "Resumes", value: "6", detail: "Versions" },
        { title: "Match Score", value: "92%", detail: "Target role" },
        { title: "Interviews", value: "+41%", detail: "Reported lift" },
        { title: "Credits", value: "35", detail: "Remaining" },
      ],
      feed: [
        "Resume tailored for Senior Frontend role",
        "Cover letter drafted · Stripe tone",
        "Mock interview scored 8.4/10",
        "LinkedIn profile imported",
      ],
      modules: [
        { name: "ATS Engine", status: "Ready", desc: "Keyword + structure" },
        { name: "Interview Bot", status: "Online", desc: "Role-specific" },
        { name: "Export", status: "PDF/DOCX", desc: "Pixel faithful" },
      ],
    },
    wanderly: {
      nav: ["Explore", "Flights", "Stays", "Itinerary", "Trips"],
      heroCta: "Plan a Trip",
      secondaryCta: "Browse Destinations",
      headline: "Travel booking that feels like adventure.",
      subhead: "Flights, stays, and AI day-by-day itineraries with cinematic destination storytelling.",
      cards: [
        { title: "Next Trip", value: "Lisbon", detail: "Oct 12–19" },
        { title: "Flights", value: "$780", detail: "Round trip" },
        { title: "Stay", value: "$142/n", detail: "Boutique hotel" },
        { title: "Activities", value: "9", detail: "Booked" },
      ],
      feed: [
        "AI itinerary generated for Day 3",
        "Hotel hold confirmed · Alfama",
        "Group split payment received",
        "Offline PDF itinerary ready",
      ],
      modules: [
        { name: "AI Planner", status: "Ready", desc: "Day-by-day routes" },
        { name: "Supplier APIs", status: "Synced", desc: "Flights + hotels" },
        { name: "Trip Hub", status: "PWA", desc: "Offline capable" },
      ],
    },
    stayops: {
      nav: ["Calendar", "Housekeeping", "Channels", "Guests", "Revenue"],
      heroCta: "Open Front Desk",
      secondaryCta: "Housekeeping Board",
      headline: "Hotel operations in one command center.",
      subhead: "Reservations, housekeeping, channel sync, and guest messaging — realtime for every property.",
      cards: [
        { title: "Occupancy", value: "86%", detail: "Tonight" },
        { title: "Arrivals", value: "24", detail: "Check-ins" },
        { title: "Dirty Rooms", value: "7", detail: "In progress" },
        { title: "ADR", value: "$188", detail: "+6% WoW" },
      ],
      feed: [
        "Room 412 marked clean",
        "Booking.com sync · 3 new reservations",
        "Guest message replied · Concierge",
        "Revenue report exported",
      ],
      modules: [
        { name: "Channel Manager", status: "Synced", desc: "<2s updates" },
        { name: "Housekeeping", status: "Live", desc: "Kanban board" },
        { name: "Guest Inbox", status: "Active", desc: "Unified threads" },
      ],
    },
    homefolio: {
      nav: ["Map", "Listings", "Saved", "Mortgage", "Agents"],
      heroCta: "Explore Listings",
      secondaryCta: "Open Map",
      headline: "Real estate discovery with magazine polish.",
      subhead: "Map-first browsing, immersive listing stories, mortgage tools, and brokerage CRM.",
      cards: [
        { title: "Listings", value: "28K", detail: "Active" },
        { title: "Saved", value: "12", detail: "Homes" },
        { title: "Est. Payment", value: "$3,420", detail: "/month" },
        { title: "Agents", value: "1.1K", detail: "On platform" },
      ],
      feed: [
        "New listing match in Noe Valley",
        "Open house Saturday · 2–4pm",
        "Mortgage pre-approval uploaded",
        "Agent Claire sent a private offer",
      ],
      modules: [
        { name: "Map Search", status: "Live", desc: "Clustered pins" },
        { name: "Virtual Tours", status: "Ready", desc: "3D embeds" },
        { name: "Agent CRM", status: "Active", desc: "Lead pipelines" },
      ],
    },
    skillora: {
      nav: ["Courses", "Learn", "Cohorts", "Tutor", "Certificates"],
      heroCta: "Continue Learning",
      secondaryCta: "Browse Catalog",
      headline: "E-learning that keeps students hooked.",
      subhead: "Cinematic courses, live cohorts, quizzes, and an AI tutor grounded in your curriculum.",
      cards: [
        { title: "Progress", value: "68%", detail: "Current course" },
        { title: "Streak", value: "14 days", detail: "Keep going" },
        { title: "Completion", value: "+45%", detail: "Platform lift" },
        { title: "Tutor", value: "Online", detail: "Ask anything" },
      ],
      feed: [
        "Lesson 12 completed · React Server Components",
        "Quiz score 9/10 · saved to transcript",
        "Cohort live room starts in 25m",
        "Certificate unlocked for Motion Design",
      ],
      modules: [
        { name: "Lesson Player", status: "HD", desc: "Mux streaming" },
        { name: "AI Tutor", status: "RAG", desc: "Course-scoped" },
        { name: "Cohorts", status: "Scheduled", desc: "Calendar sync" },
      ],
    },
    pulsefit: {
      nav: ["Today", "Workouts", "Nutrition", "Challenges", "Coach"],
      heroCta: "Start Workout",
      secondaryCta: "View Plan",
      headline: "Fitness tracking with coach-grade insight.",
      subhead: "Wearable sync, AI plans, social challenges, and trainer dashboards for gyms.",
      cards: [
        { title: "Steps", value: "8,420", detail: "Goal 10k" },
        { title: "Calories", value: "540", detail: "Burned" },
        { title: "Workout", value: "Push Day", detail: "45 min" },
        { title: "Streak", value: "21", detail: "Days" },
      ],
      feed: [
        "Morning run synced from Apple Watch",
        "AI adjusted tomorrow’s volume -10%",
        "Challenge invite · 10k steps with Mia",
        "Protein goal hit · 142g",
      ],
      modules: [
        { name: "Wearables", status: "Synced", desc: "HealthKit / Fit" },
        { name: "AI Coach", status: "Adaptive", desc: "Goal conditioned" },
        { name: "Gym Portal", status: "Live", desc: "Multi-location" },
      ],
    },
  };

  return (
    screens[project.slug] || {
      nav: ["Overview", "Dashboard", "Features", "Settings"],
      heroCta: "Launch App",
      secondaryCta: "Learn More",
      headline: project.tagline,
      subhead: project.description,
      cards: project.metrics.map((m) => ({ title: m.label, value: m.value, detail: "Live" })),
      feed: project.features.slice(0, 4),
      modules: project.features.slice(0, 3).map((f) => ({ name: f, status: "Live", desc: "Module ready" })),
    }
  );
}
