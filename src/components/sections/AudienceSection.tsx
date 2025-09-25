import Section from "../Section";
import GlassCard from "../GlassCard";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, UserCheck, Building2, TestTube, Code } from "lucide-react";
import { smoothScrollToSection } from "@/utils/smoothScroll";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students and graduates",
    description: "Build a credible profile, showcase real work, and discover roles and mentors in context."
  },
  {
    icon: Briefcase,
    title: "Professionals and experts",
    description: "Surface meaningful opportunities, publish serious work, and connect with peers who value substance."
  },
  {
    icon: UserCheck,
    title: "Recruiters and employers",
    description: "Source from a verified pool, review structured work evidence, and create quality shortlists faster."
  },
  {
    icon: Building2,
    title: "Institutes and communities",
    description: "Showcase cohorts, events, and outcomes in a trusted environment that connects talent with demand."
  },
  {
    icon: TestTube,
    title: "Researchers",
    description: "Share work in an attributed format, find collaborators, and reach relevant communities."
  },
  {
    icon: Code,
    title: "Developers & More",
    description: "Build tools, APIs, and integrations within a verified professional ecosystem."
  }
];

const AudienceSection = () => {
  return (
    <Section background="transparent" className="relative">
      <div className="text-center mb-12">
        <SectionChip>Who is this for?</SectionChip>
        
        {/* Mobile/Tablet version - Three lines */}
        <h2 className="lg:hidden font-instrument text-3xl md:text-4xl font-medium text-white leading-tight">
          <span className="block">A Comprehensive</span>
          <span className="block">Professional Ecosystem Built for</span>
          <span className="block">Every Part of the Professional World</span>
        </h2>
        
        {/* Desktop version - Original layout */}
        <h2 className="hidden lg:block font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
          A Comprehensive Professional Ecosystem<br />
          Built for Every Part of the Professional World
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {audiences.map((audience, index) => (
          <GlassCard key={index} hoverable className="text-center max-w-sm mx-auto">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-white/10 border border-white/20">
                <audience.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="font-instrument text-lg font-medium text-white mb-3">
              {audience.title}
            </h3>
            <p className="font-body text-white/80 leading-relaxed text-sm">
              {audience.description}
            </p>
          </GlassCard>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <GlassCTAButton onClick={() => smoothScrollToSection('personas-section')}>
          Explore Personas
        </GlassCTAButton>
        <Button variant="hero-outline" size="md" onClick={() => smoothScrollToSection('early-access-section')}>
          Get Early Access
        </Button>
      </div>
    </Section>
  );
};

export default AudienceSection;