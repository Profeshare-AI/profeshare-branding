import { Button } from "@/components/ui/button";
import GlassmorphismChip from "./GlassmorphismChip";
const HeroContent = () => {
  return <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-8 relative z-10">
      <GlassmorphismChip />
      
      <h1 className="font-heading text-hero-text text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
        <span className="block">The world's only</span>
        <span className="block">verified professional & networking ecosystem</span>
      </h1>
      
      <p className="font-body text-hero-text text-lg md:text-xl leading-relaxed mb-8 max-w-3xl opacity-90">Designed for students, institutes, graduates, employers, experts, and researchers. 
Built for context and communicates in natural language!</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button variant="hero" size="hero">
          Schedule A Demo
        </Button>
        <Button variant="hero-outline" size="hero">
          Learn more
        </Button>
      </div>
    </div>;
};
export default HeroContent;