import Section from "../Section";
import GlassCard from "../GlassCard";
import GlassmorphismChip from "../GlassmorphismChip";
import GlassCTAButton from "../ui/glass-cta-button";
import { MessageSquare, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "State your intent",
    description: "Ask in plain language. We understand you better in any way!"
  },
  {
    icon: Search,
    title: "Review a curated set",
    description: "See relevant results, roles, mentors, courses, events, people, and organisations that fit your request."
  },
  {
    icon: CheckCircle,
    title: "Act with confidence",
    description: "Apply, publish, collaborate, or shortlist inside a verified space where signals are credible and next steps are clear."
  }
];

const HowItWorksSection = () => {
  return (
    <Section background="primary" className="bg-black">
      <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 items-center">
        {/* Steps Cards - Left Column (3 columns) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {steps.map((step, index) => (
            <GlassCard key={index} className="flex flex-col justify-start min-h-[320px] w-full p-6 bg-black/20 hover:bg-white/15 transition-all duration-700 ease-in-out">
              <div className="flex flex-col items-start space-y-4 mt-12">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0 ${
                  index === 0 ? 'bg-blue-500' : 'bg-white/20'
                }`}>
                  <step.icon className={`w-8 h-8 ${index === 0 ? 'text-white' : 'text-white/80'}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-instrument text-lg font-medium text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Right Column - Header and CTA */}
        <div className="lg:col-span-1 flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-glass-bg/10 border border-glass-border/20 text-glass-text text-xs font-body font-medium mb-6">
              How this works?
            </div>
            
            <h2 className="font-instrument text-3xl md:text-4xl font-medium text-white mb-8 leading-tight">
              Achieve Your Goals in<br />Three Simple Steps
            </h2>
            
            <GlassCTAButton size="md">
              Try Now
            </GlassCTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;