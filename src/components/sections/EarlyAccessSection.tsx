import Section from "../Section";
import GlassCard from "../GlassCard";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";

const EarlyAccessSection = () => {
  return (
    <Section background="primary">
      <div className="text-center">
        <SectionChip>Join Beta</SectionChip>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
          Be Among the First to Experience Profeshare AI
        </h2>
        
        <GlassCard className="max-w-3xl mx-auto mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-instrument text-xl font-medium text-white mb-3">
                How selection works
              </h3>
              <p className="font-body text-white/90">
                Invitations roll out in waves to a diverse mix of participants across roles, geographies, and backgrounds.
              </p>
            </div>
            
            <div>
              <h3 className="font-instrument text-xl font-medium text-white mb-3">
                What invitees can try first
              </h3>
              <p className="font-body text-white/90">
                AI, Career Matching, Collaborative Papers, Learning Space previews, Events Space, and Recruiter Tools preview.
              </p>
            </div>
          </div>
        </GlassCard>
        
        <GlassCTAButton size="hero">
          Request Early Access
        </GlassCTAButton>
      </div>
    </Section>
  );
};

export default EarlyAccessSection;