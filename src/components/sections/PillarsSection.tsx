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
  { name: "Profiles", color: "from-transparent from-40% to-cyan-500", border: "border-cyan-500/50" },
  { name: "Career Matching", color: "from-transparent from-40% to-blue-500", border: "border-blue-500/50" },
  { name: "Talent Discovery", color: "from-transparent from-40% to-amber-500", border: "border-amber-500/50" }, 
  { name: "Learning Space", color: "from-transparent from-40% to-purple-500", border: "border-purple-500/50" },
  { name: "Recruiter Studio", color: "from-transparent from-40% to-green-500", border: "border-green-500/50" },
  { name: "Projects Space", color: "from-transparent from-40% to-rose-500", border: "border-rose-500/50" }
];

const secondRowFeatures = [
  { name: "Papers", color: "from-transparent from-40% to-indigo-500", border: "border-indigo-500/50" },
  { name: "Communities", color: "from-transparent from-40% to-emerald-500", border: "border-emerald-500/50" },
  { name: "Events", color: "from-transparent from-40% to-orange-500", border: "border-orange-500/50" },
  { name: "Collaborations and Messaging", color: "from-transparent from-40% to-pink-500", border: "border-pink-500/50" },
  { name: "Integrations", color: "from-transparent from-40% to-teal-500", border: "border-teal-500/50" },
  { name: "Analytics & more...", color: "from-transparent from-40% to-slate-500", border: "border-slate-500/50" }
];

// Mobile layout arrays
const mobileFeatures = [
  [
    { name: "Profiles", color: "from-transparent from-40% to-cyan-500", border: "border-cyan-500/50" },
    { name: "Career Matching", color: "from-transparent from-40% to-blue-500", border: "border-blue-500/50" },
    { name: "Talent Discovery", color: "from-transparent from-40% to-amber-500", border: "border-amber-500/50" }
  ],
  [
    { name: "Learning Space", color: "from-transparent from-40% to-purple-500", border: "border-purple-500/50" },
    { name: "Recruiter Studio", color: "from-transparent from-40% to-green-500", border: "border-green-500/50" }
  ],
  [
    { name: "Papers", color: "from-transparent from-40% to-indigo-500", border: "border-indigo-500/50" },
    { name: "Projects Space", color: "from-transparent from-40% to-rose-500", border: "border-rose-500/50" },
    { name: "Communities", color: "from-transparent from-40% to-emerald-500", border: "border-emerald-500/50" }
  ],
  [
    { name: "Events", color: "from-transparent from-40% to-orange-500", border: "border-orange-500/50" },
    { name: "Collaborations and Messaging", color: "from-transparent from-40% to-pink-500", border: "border-pink-500/50" }
  ],
  [
    { name: "Integrations", color: "from-transparent from-40% to-teal-500", border: "border-teal-500/50" },
    { name: "Analytics & more...", color: "from-transparent from-40% to-slate-500", border: "border-slate-500/50" }
  ]
];

const PillarsSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/80 text-xs font-body font-medium mb-6">
            Why it actually matter?
          </div>
          
          <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            A Network Built on Confidence, Clarity, and Value
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:[&>:nth-child(3)]:col-span-2 md:[&>:nth-child(3)]:max-w-md md:[&>:nth-child(3)]:mx-auto lg:[&>:nth-child(3)]:col-span-1 lg:[&>:nth-child(3)]:max-w-none">
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
                  <div key={index} className={`relative inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/10 ${feature.border} text-white text-xs font-body font-medium shadow-lg overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color}`}></div>
                    <Diamond className="w-3 h-3 mr-2 text-white/90 fill-current relative z-10" />
                    <span className="relative z-10">{feature.name}</span>
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
                <div key={index} className={`relative inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/10 ${feature.border} text-white text-xs font-body font-medium shadow-lg overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color}`}></div>
                  <Diamond className="w-3 h-3 mr-2 text-white/90 fill-current relative z-10" />
                  <span className="relative z-10">{feature.name}</span>
                </div>
              ))}
            </div>
            
            {/* Second row for large screens */}
            <div className="flex flex-wrap justify-center gap-3">
              {secondRowFeatures.map((feature, index) => (
                <div key={index} className={`relative inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/10 ${feature.border} text-white text-xs font-body font-medium shadow-lg overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color}`}></div>
                  <Diamond className="w-3 h-3 mr-2 text-white/90 fill-current relative z-10" />
                  <span className="relative z-10">{feature.name}</span>
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