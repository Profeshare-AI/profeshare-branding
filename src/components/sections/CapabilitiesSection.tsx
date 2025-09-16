import Section from "../Section";
import GlassCard from "../GlassCard";
import SectionChip from "../SectionChip";
import { User, FileText, Search, GraduationCap, Users, Building, MessageCircle, Download } from "lucide-react";

const capabilities = [
  {
    icon: User,
    title: "Profiles",
    description: "Credible profiles that highlight experience, skills, affiliations, and work evidence."
  },
  {
    icon: FileText,
    title: "Papers",
    description: "Professional publishing for project write-ups, case studies, and research notes with transparent attribution."
  },
  {
    icon: Search,
    title: "Career Matching and Discovery",
    description: "Natural-language search across roles, mentors, courses, events, and communities with relevance to your goals."
  },
  {
    icon: GraduationCap,
    title: "Learning Space",
    description: "Curated paths and activities that map to in-demand skills and appear as credible signals on profiles."
  },
  {
    icon: Users,
    title: "Recruiter Studio",
    description: "Tools for structured screening, outreach, and shortlisting from a verified pool."
  },
  {
    icon: Building,
    title: "Communities and Events",
    description: "Verified cohorts, institutes, and organisations that run showcases, challenges, and hiring events."
  },
  {
    icon: MessageCircle,
    title: "Collaboration and Messaging",
    description: "Focused conversation threads around work, roles, and opportunities without feed clutter."
  },
  {
    icon: Download,
    title: "Integrations and Portability",
    description: "Import key data, export work evidence, and keep ownership of your contributions."
  }
];

const CapabilitiesSection = () => {
  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          A Comprehensive Professional Ecosystem
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => (
          <GlassCard 
            key={index} 
            hoverable 
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors duration-300">
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-instrument text-lg font-medium text-white mb-2">
                  {capability.title}
                </h3>
                <p className="font-body text-white/80 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

export default CapabilitiesSection;