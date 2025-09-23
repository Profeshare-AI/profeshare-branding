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
    description: "Apply, publish, collaborate, or shortlist inside a verified space where signals are credible and next steps are clearer than ever."
  },
  {
    number: null,
    title: "Play around 🔁",
    description: "Explore the platform, discover new connections, and engage with the community in a trusted professional environment."
  }
];

const HowItWorksSection = () => {
  return (
    <Section 
      background="transparent" 
      className="relative"
    >
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
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
                <div className="text-white/60 font-instrument text-lg font-bold mb-6">
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
      <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-2xl px-4 py-6">
        {/* Mobile/Tablet: Center-aligned 3 rows */}
        <div className="flex flex-col lg:hidden gap-4 items-center text-center">
          {/* Row 1: Avatars */}
          <div className="flex -space-x-2">
            <img src="/avatars/avatar-1.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
            <img src="/avatars/avatar-2.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
            <img src="/avatars/avatar-3.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
            <img src="/avatars/avatar-4.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
          </div>
          {/* Row 2: Text */}
          <div className="text-white font-instrument text-xl font-medium">
            Join the verified professional ecosystem curated for you, with AI.
          </div>
          {/* Row 3: Button */}
          <GlassCTAButton size="md">
            Try Now
          </GlassCTAButton>
        </div>
        
        {/* Desktop: Original horizontal layout */}
        <div className="hidden lg:flex gap-4 justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img src="/avatars/avatar-1.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
              <img src="/avatars/avatar-2.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
              <img src="/avatars/avatar-3.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
              <img src="/avatars/avatar-4.jpg" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
            </div>
            <div className="text-white font-instrument text-xl font-medium">
              Join the verified professional ecosystem curated for you, with AI.
            </div>
          </div>
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