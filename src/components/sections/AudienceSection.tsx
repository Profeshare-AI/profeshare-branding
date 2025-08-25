import Section from "../Section";
import GlassCard from "../GlassCard";
import { GraduationCap, Briefcase, UserCheck, Building2, TestTube } from "lucide-react";

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
  }
];

const AudienceSection = () => {
  return (
    <Section background="secondary">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          Built for Every Part of the Professional World
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audiences.map((audience, index) => (
          <GlassCard key={index} hoverable className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 border border-white/20">
                <audience.icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-instrument text-xl font-medium text-white mb-4">
              {audience.title}
            </h3>
            <p className="font-body text-white/80 leading-relaxed">
              {audience.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

export default AudienceSection;