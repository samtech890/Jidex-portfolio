import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { MarqueeStrip } from "@/components/sections/marquee-strip";

const ServicesSection = dynamic(() =>
  import("@/components/sections/services-section").then((m) => m.ServicesSection)
);
const TechSection = dynamic(() =>
  import("@/components/sections/tech-section").then((m) => m.TechSection)
);
const ExperienceSection = dynamic(() =>
  import("@/components/sections/experience-section").then((m) => m.ExperienceSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials-section").then((m) => m.TestimonialsSection)
);
const BlogSection = dynamic(() =>
  import("@/components/sections/blog-section").then((m) => m.BlogSection)
);
const PricingSection = dynamic(() =>
  import("@/components/sections/pricing-section").then((m) => m.PricingSection)
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact-section").then((m) => m.ContactSection)
);
const InteractiveTerminal = dynamic(() =>
  import("@/components/extras/interactive-terminal").then((m) => m.InteractiveTerminal)
);
const GithubActivity = dynamic(() =>
  import("@/components/extras/github-activity").then((m) => m.GithubActivity)
);
const AchievementsStrip = dynamic(() =>
  import("@/components/extras/achievements-strip").then((m) => m.AchievementsStrip)
);
const LatestRepos = dynamic(() =>
  import("@/components/extras/latest-repos").then((m) => m.LatestRepos)
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <AchievementsStrip />
      <ServicesSection />
      <ProjectsSection />
      <TechSection />
      <ExperienceSection />
      <TestimonialsSection />
      <GithubActivity />
      <LatestRepos />
      <InteractiveTerminal />
      <BlogSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
