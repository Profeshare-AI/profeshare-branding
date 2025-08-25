import Section from "../Section";
import GlassCard from "../GlassCard";

const IntroductionSection = () => {
  return (
    <Section background="transparent" className="text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
          One Trusted Space for Your Professional Journey
        </h2>
        <GlassCard className="max-w-3xl mx-auto">
          <p className="font-body text-lg leading-relaxed text-white/90">
            Profeshare AI is a verified professional networking ecosystem that unites education, industry, and research in one trusted space. It understands natural language and context, so people can search, publish, collaborate, and hire without friction or noise.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
};

export default IntroductionSection;