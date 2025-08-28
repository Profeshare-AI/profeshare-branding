import Section from "../Section";
import GlassCard from "../GlassCard";
import { Shield, Target, Network, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Shield,
    title: "Verified Identities",
    description: "A verified ecosystem that removes doubt from the first interaction. No bots. No fake profiles. Clear affiliations for people and organisations so relationships begin with confidence."
  },
  {
    icon: Target,
    title: "Credible Signals",
    description: "No spam. No engagement tricks. Projects, publications, and contributions appear in structured formats that reflect real capability and make comparison easier for peers and hiring teams."
  },
  {
    icon: Network,
    title: "Multi-sided Value",
    description: "One network that serves every participant with practical features. Career Matching for discovery, Papers for structured publishing, Learning Space for job-linked growth, and Recruiter Tools for efficient shortlisting."
  }
];

const firstRowFeatures = [
  "Profiles",
  "Career Matching",
  "Talent Discovery", 
  "Learning Space",
  "Recruiter Studio",
  "Projects Space"
];

const secondRowFeatures = [
  "Papers",
  "Communities",
  "Events",
  "Collaborations and Messaging",
  "Integrations",
  "Analytics & more..."
];

// Mobile layout arrays
const mobileFeatures = [
  ["Profiles", "Career Matching", "Talent Discovery"],
  ["Learning Space", "Recruiter Studio"],
  ["Papers", "Projects Space", "Communities"],
  ["Events", "Collaborations and Messaging"],
  ["Integrations", "Analytics & more..."]
];

const PillarsSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/80 text-xs font-body font-medium mb-6">
            What you will get inside
          </div>
          
          <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            A Network Built on Confidence, Clarity, and Value
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:[&>:nth-child(3)]:col-span-2 md:[&>:nth-child(3)]:max-w-md md:[&>:nth-child(3)]:mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-400/30 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-instrument text-xl font-medium text-white mb-4">
                {pillar.title}
              </h3>
              <p className="font-body text-white/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-3">
          {/* Mobile layout */}
          <div className="md:hidden flex flex-col items-center gap-3">
            {mobileFeatures.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
                {row.map((feature, index) => (
                  <div key={index} className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/80 text-xs font-body font-medium">
                    <Diamond className="w-3 h-3 mr-2 text-blue-400 fill-current" />
                    {feature}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex flex-col items-center gap-3">
            {/* First row for large screens */}
            <div className="flex flex-wrap justify-center gap-3">
              {firstRowFeatures.map((feature, index) => (
                <div key={index} className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/80 text-xs font-body font-medium">
                  <Diamond className="w-3 h-3 mr-2 text-blue-400 fill-current" />
                  {feature}
                </div>
              ))}
            </div>
            
            {/* Second row for large screens */}
            <div className="flex flex-wrap justify-center gap-3">
              {secondRowFeatures.map((feature, index) => (
                <div key={index} className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/80 text-xs font-body font-medium">
                  <Diamond className="w-3 h-3 mr-2 text-blue-400 fill-current" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;