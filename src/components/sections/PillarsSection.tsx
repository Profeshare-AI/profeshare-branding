import Section from "../Section";
import GlassCard from "../GlassCard";
import SectionChip from "../SectionChip";
import { Shield, Target, Network, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import TooltipCard from "@/components/ui/TooltipCard";

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
  { name: "Profiles", color: "from-cyan-500/20 via-cyan-500/40 to-cyan-500/80", border: "border-cyan-500/60", fillColor: "text-cyan-400" },
  { name: "Career Matching", color: "from-blue-500/20 via-blue-500/40 to-blue-500/80", border: "border-blue-500/60", fillColor: "text-blue-400" },
  { name: "Talent Discovery", color: "from-amber-500/20 via-amber-500/40 to-amber-500/80", border: "border-amber-500/60", fillColor: "text-amber-400" }, 
  { name: "Learning Space", color: "from-purple-500/20 via-purple-500/40 to-purple-500/80", border: "border-purple-500/60", fillColor: "text-purple-400" },
  { name: "Recruiter Studio", color: "from-green-500/20 via-green-500/40 to-green-500/80", border: "border-green-500/60", fillColor: "text-green-400" },
  { name: "Projects Space", color: "from-rose-500/20 via-rose-500/40 to-rose-500/80", border: "border-rose-500/60", fillColor: "text-rose-400" }
];

const secondRowFeatures = [
  { name: "Papers", color: "from-indigo-500/20 via-indigo-500/40 to-indigo-500/80", border: "border-indigo-500/60", fillColor: "text-indigo-400" },
  { name: "Communities", color: "from-emerald-500/20 via-emerald-500/40 to-emerald-500/80", border: "border-emerald-500/60", fillColor: "text-emerald-400" },
  { name: "Events", color: "from-orange-500/20 via-orange-500/40 to-orange-500/80", border: "border-orange-500/60", fillColor: "text-orange-400" },
  { name: "Collaborations and Messaging", color: "from-pink-500/20 via-pink-500/40 to-pink-500/80", border: "border-pink-500/60", fillColor: "text-pink-400" },
  { name: "Integrations", color: "from-teal-500/20 via-teal-500/40 to-teal-500/80", border: "border-teal-500/60", fillColor: "text-teal-400" },
  { name: "Analytics & more...", color: "from-slate-500/20 via-slate-500/40 to-slate-500/80", border: "border-slate-500/60", fillColor: "text-slate-400" }
];

// Chip to persona content mapping
const chipToPersonaMapping: Record<string, any> = {
  "Profiles": {
    title: "Profiles",
    description: "Find credible profiles that highlight experience, skills, affiliations, and work evidence.",
    gradientColor: "from-cyan-500/20 via-cyan-500/40 to-cyan-500/80",
    borderColor: "border-cyan-500/60"
  }
};

// Mobile layout arrays
const mobileFeatures = [
  [
    { name: "Profiles", color: "from-cyan-500/20 via-cyan-500/40 to-cyan-500/80", border: "border-cyan-500/60", fillColor: "text-cyan-400" },
    { name: "Career Matching", color: "from-blue-500/20 via-blue-500/40 to-blue-500/80", border: "border-blue-500/60", fillColor: "text-blue-400" },
    { name: "Talent Discovery", color: "from-amber-500/20 via-amber-500/40 to-amber-500/80", border: "border-amber-500/60", fillColor: "text-amber-400" }
  ],
  [
    { name: "Learning Space", color: "from-purple-500/20 via-purple-500/40 to-purple-500/80", border: "border-purple-500/60", fillColor: "text-purple-400" },
    { name: "Recruiter Studio", color: "from-green-500/20 via-green-500/40 to-green-500/80", border: "border-green-500/60", fillColor: "text-green-400" }
  ],
  [
    { name: "Papers", color: "from-indigo-500/20 via-indigo-500/40 to-indigo-500/80", border: "border-indigo-500/60", fillColor: "text-indigo-400" },
    { name: "Projects Space", color: "from-rose-500/20 via-rose-500/40 to-rose-500/80", border: "border-rose-500/60", fillColor: "text-rose-400" },
    { name: "Communities", color: "from-emerald-500/20 via-emerald-500/40 to-emerald-500/80", border: "border-emerald-500/60", fillColor: "text-emerald-400" }
  ],
  [
    { name: "Events", color: "from-orange-500/20 via-orange-500/40 to-orange-500/80", border: "border-orange-500/60", fillColor: "text-orange-400" },
    { name: "Collaborations and Messaging", color: "from-pink-500/20 via-pink-500/40 to-pink-500/80", border: "border-pink-500/60", fillColor: "text-pink-400" }
  ],
  [
    { name: "Integrations", color: "from-teal-500/20 via-teal-500/40 to-teal-500/80", border: "border-teal-500/60", fillColor: "text-teal-400" },
    { name: "Analytics & more...", color: "from-slate-500/20 via-slate-500/40 to-slate-500/80", border: "border-slate-500/60", fillColor: "text-slate-400" }
  ]
];

const PillarsSection = () => {
  const renderChip = (feature: any, index: number) => {
    const personaContent = chipToPersonaMapping[feature.name];
    
    const chipElement = (
      <div className={`relative p-[1px] rounded-full bg-gradient-to-r ${feature.color} shadow-lg`}>
        <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-black/70 text-white text-xs font-body font-medium">
          <Diamond className={`w-3 h-3 mr-2 ${feature.fillColor} fill-current`} />
          <span>{feature.name}</span>
        </div>
      </div>
    );

    if (personaContent) {
      return (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            {chipElement}
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10} className="p-0 border-0 bg-transparent shadow-none z-50">
            <TooltipCard {...personaContent} />
          </TooltipContent>
        </Tooltip>
      );
    }

    return <div key={index}>{chipElement}</div>;
  };

  return (
    <TooltipProvider delayDuration={200}>
      <section className="relative py-16 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <SectionChip>
              Why it actually matter?
            </SectionChip>
            
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
                  {row.map((feature, index) => renderChip(feature, index))}
                </div>
              ))}
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex flex-col items-center gap-3">
              {/* First row for large screens */}
              <div className="flex flex-wrap justify-center gap-3">
                {firstRowFeatures.map((feature, index) => renderChip(feature, index))}
              </div>
              
              {/* Second row for large screens */}
              <div className="flex flex-wrap justify-center gap-3">
                {secondRowFeatures.map((feature, index) => renderChip(feature, index))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default PillarsSection;