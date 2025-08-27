import Section from "../Section";
import GlassCard from "../GlassCard";
import { Shield, Target, Network } from "lucide-react";
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

const PillarsSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/80 text-xs font-body font-medium mb-6">
            Verified Identities • Credible Signals • Multi-sided Value
          </div>
          
          <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            A Network Built on Confidence, Clarity, and Value
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-left hover:border-blue-400/30 transition-all duration-300">
              <div className="mb-6">
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
        
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          <Button variant="glass" size="md" className="group transition-all duration-300 hover:pr-8 relative">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">Try these features</span>
            <span className="absolute opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{left: 'calc(100% - 2rem)'}}>🡥</span>
          </Button>
          <Button variant="hero-outline" size="md" className="group transition-all duration-300 hover:pr-8 relative">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">Understand more</span>
            <span className="absolute opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{left: 'calc(100% - 2rem)'}}>🡦</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;