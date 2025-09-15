import Section from "../Section";
import GlassCard from "../GlassCard";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";

const steps = [
  {
    number: "1",
    title: "💡State your intent",
    description: "Ask in plain language. We understand you better in any way!"
  },
  {
    number: "2",
    title: "📑Review a curated set",
    description: "See relevant results, roles, mentors, courses, events, people, and organisations that fit your request."
  },
  {
    number: "3",
    title: "🎯Act with confidence",
    description: "Apply, publish, collaborate, or shortlist inside a verified space where signals are credible and next steps are clear."
  },
  {
    number: "🔁",
    title: "Play around",
    description: "Explore the platform, discover new connections, and engage with the community in a trusted professional environment."
  }
];

const HowItWorksSection = () => {
  return (
    <Section background="primary" className="bg-black">
      {/* Header Section - Left Aligned with Line */}
      <div className="mb-16">
        <div className="flex items-end mb-8">
          <div className="flex flex-col">
            <div className="w-fit">
              <SectionChip>
                How does this work?
              </SectionChip>
            </div>
            <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mt-4">
              Achieve Your Goals<br />
              in Three Simple Steps
            </h2>
          </div>
          <div className="flex-1 ml-8 hidden md:block mb-2">
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
                <div className="text-white/60 font-instrument text-2xl font-bold mb-6">
                  0{step.number}.
                </div>
              )}
              
              <div className="mb-6">
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

      {/* Bottom Section with Avatars */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10 bg-white/5 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white/20"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-white/20"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 border-2 border-white/20"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white/20"></div>
          </div>
          <div className="text-white/80 font-body text-sm">
            Join the verified professional ecosystem curated for you - with AI
          </div>
        </div>
        <GlassCTAButton size="md">
          Get Early Access
        </GlassCTAButton>
      </div>
    </Section>
  );
};

export default HowItWorksSection;