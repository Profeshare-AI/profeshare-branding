import Section from "../Section";
import GlassCard from "../GlassCard";
import GlassmorphismChip from "../GlassmorphismChip";
import { Button } from "@/components/ui/button";
import { MessageSquare, Search, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "State your intent",
    description: "Ask in plain language. We understand you better in any way! Example: Find me a Product design internship in Bengaluru with Figma and UX research."
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
    <Section background="primary">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Steps Cards - Left Column */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <GlassCard key={index} className="flex flex-col justify-center min-h-[180px]">
              <div className="flex items-start gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 ${
                  index === 0 ? 'bg-blue-500' : 'bg-white/20'
                }`}>
                  <step.icon className={`w-6 h-6 ${index === 0 ? 'text-white' : 'text-white/80'}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-instrument text-xl font-medium text-white mb-3">
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
        <div className="lg:mt-8">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-glass-bg/10 border border-glass-border/20 text-glass-text text-xs font-body font-medium mb-6">
              How this works?
            </div>
            
            <h2 className="font-instrument text-3xl md:text-4xl font-medium text-white mb-8 leading-tight">
              Achieve Your Goals in Three Simple Steps
            </h2>
            
            <Button variant="glass" size="hero" className="group transition-all duration-300 hover:pr-10">
              <span className="transition-transform duration-300 group-hover:-translate-x-1">Try Now</span>
              <ArrowRight className="w-5 h-5 absolute right-6 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;