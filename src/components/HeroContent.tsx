import { Button } from "@/components/ui/button";
import GlassCTAButton from "./ui/glass-cta-button";
import HeroChip from "./HeroChip";
const HeroContent = () => {
  return <div className="flex flex-col items-center text-center px-4 relative z-10 pb-8 md:pb-12 lg:pb-16">
      <HeroChip />
      
      <h1 className="font-instrument text-hero-text text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4">
        <span className="block">The world's only</span>
        <span className="block">verified professional ecosystem</span>
      </h1>
      
      <p className="font-body text-hero-text text-base md:text-lg leading-relaxed mb-6 w-full opacity-90">
        <span className="block">Designed for students, institutes,</span>
        <span className="block">graduates, employers, experts, and researchers.</span>
        <span className="block">Built for context and communicates in natural language!</span>
      </p>
      
      <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center flex-wrap">
        <GlassCTAButton size="md" className="min-w-0">
          Explore
        </GlassCTAButton>
        <Button variant="hero-outline" size="md" className="min-w-0">
          Join Waitlist
        </Button>
      </div>
    </div>;
};
export default HeroContent;