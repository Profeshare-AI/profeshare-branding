import Section from "../Section";
import GlassCard from "../GlassCard";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";

const steps = [
  {
    number: "1",
    emoji: "💬",
    title: "State your intent",
    description: "Ask in plain language. We understand you better in any way!"
  },
  {
    number: "2",
    emoji: "🔍",
    title: "Review a curated set",
    description: "See relevant results, roles, mentors, courses, events, people, and organisations that fit your request."
  },
  {
    number: "3",
    emoji: "✅",
    title: "Act with confidence",
    description: "Apply, publish, collaborate, or shortlist inside a verified space where signals are credible and next steps are clear."
  },
  {
    number: null,
    emoji: "🎮",
    title: "Play around",
    description: "Explore the platform, discover new connections, and engage with the community in a trusted professional environment."
  }
];

const HowItWorksSection = () => {
  return (
    <Section background="primary" className="bg-black">
      {/* Header Section - Left Aligned with Line */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="flex flex-col">
            <SectionChip>
              How does this work?
            </SectionChip>
            <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mt-4">
              Achieve Your Goals<br />
              in Three Simple Steps
            </h2>
          </div>
          <div className="flex-1 ml-8 hidden md:block">
            <div className="h-px bg-white/20"></div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step, index) => (
          <GlassCard key={index} className="flex flex-col justify-between min-h-[320px] w-full p-6 bg-black/20 hover:bg-white/15 transition-all duration-700 ease-in-out">
            <div className="flex flex-col">
              {step.number && (
                <div className="text-white/60 font-instrument text-3xl font-bold mb-6">
                  0{step.number}.
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{step.emoji}</span>
                <h3 className="font-instrument text-xl font-medium text-white">
                  {step.title}
                </h3>
              </div>
            </div>
            
            <div className="mt-auto">
              <p className="font-body text-white/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Bottom Section - Left/Right Layout */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10">
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