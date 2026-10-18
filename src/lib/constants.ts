export const SITE = {
  name: "JIDEX CODER",
  title: "JIDEX CODER | Creative Developer & AI Engineer",
  description:
    "Award-winning full-stack developer specializing in premium websites, mobile apps, AI automation, and SaaS products. Building next-generation digital experiences.",
  url: "https://jidexcoder.com",
  email: "olawalesamson2778@gmail.com",
  discord: "jidexcoder",
  phone: "+1 (555) 123-4567",
  location: "Lagos · Abuja · Port Harcourt",
  twitter: "@jidexcoder",
  github: "https://github.com/jidexcoder",
  linkedin: "https://linkedin.com/in/jidexcoder",
  calendly: "https://calendly.com/jidexcoder",
  whatsapp: "https://wa.me/15551234567",
} as const;

export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#tech", label: "Tech Stack" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { name: "GitHub", href: SITE.github, icon: "github" },
  { name: "LinkedIn", href: SITE.linkedin, icon: "linkedin" },
  { name: "Twitter", href: `https://twitter.com/${SITE.twitter.replace("@", "")}`, icon: "twitter" },
  { name: "Email", href: `mailto:${SITE.email}`, icon: "mail" },
] as const;

export const STATS = [
  { label: "Years Experience", value: 7, suffix: "+" },
  { label: "Projects Completed", value: 120, suffix: "+" },
  { label: "Happy Clients", value: 85, suffix: "+" },
  { label: "Countries", value: 24, suffix: "" },
] as const;
