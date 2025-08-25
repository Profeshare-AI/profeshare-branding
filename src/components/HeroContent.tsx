import { Button } from "@/components/ui/button";
import GlassmorphismChip from "./GlassmorphismChip";
const HeroContent = () => {
  return <div className="flex flex-col items-center text-center px-4 relative z-10">
      <GlassmorphismChip />
      
      <h1 className="font-heading text-hero-text text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        <span className="block">The world's only</span>
        <span className="block">verified professional ecosystem</span>
      </h1>
      
      <p className="font-body text-hero-text text-base md:text-lg leading-relaxed mb-6 w-full opacity-90">
        Designed for students, institutes, graduates, employers, experts, and researchers.
        <br />
        Built for context and communicates in natural language!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button variant="glass" size="md">
          Schedule A Demo
        </Button>
        <Button variant="hero-outline" size="md">
          Learn more
        </Button>
      </div>
    </div>;
};
export default HeroContent;