import Section from "../Section";
import GlassCard from "../GlassCard";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";

const steps = [
  {
    number: "1",
    title: "State your intent",
    description: "Ask in plain language. We understand you better in any way!"
  },
  {
    number: "2",
    title: "Review a curated set",
    description: "See relevant results, roles, mentors, courses, events, people, and organisations that fit your request."
  },
  {
    number: "3",
    title: "Act with confidence",
    description: "Apply, publish, collaborate, or shortlist inside a verified space where signals are credible and next steps are clear."
  },
  {
    number: null,
    title: "Play around",
    description: "Explore the platform, discover new connections, and engage with the community in a trusted professional environment."
  }
];

const HowItWorksSection = () => {
  return (
    <Section background="primary" className="bg-black">
      <div className="text-center mb-12">
        <SectionChip>
          How does this work?
        </SectionChip>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
          Effortless Process,<br />
          Continuous Supply
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step, index) => (
          <GlassCard key={index} className="flex flex-col justify-start min-h-[280px] w-full p-6 bg-black/20 hover:bg-white/15 transition-all duration-700 ease-in-out">
            <div className="flex flex-col items-start space-y-4">
              {step.number && (
                <div className="text-white/60 font-instrument text-sm font-medium mb-2">
                  0{step.number}.
                </div>
              )}
              
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

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="text-white/80 font-body text-sm">
          Join the verified professional ecosystem curated for you - with AI
        </div>
        <GlassCTAButton size="md">
          Try Now
        </GlassCTAButton>
      </div>
    </Section>
  );
};

export default HowItWorksSection;