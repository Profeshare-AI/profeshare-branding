import { Button } from "@/components/ui/button";
import GlassmorphismChip from "./GlassmorphismChip";
import { ArrowRight } from "lucide-react";
const HeroContent = () => {
  return <div className="flex flex-col items-center text-center px-4 relative z-10">
      <GlassmorphismChip />
      
      <h1 className="font-instrument text-hero-text text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4">
        <span className="block">The world's only</span>
        <span className="block">verified professional ecosystem</span>
      </h1>
      
      <p className="font-body text-hero-text text-base md:text-lg leading-relaxed mb-6 w-full opacity-90">
        Designed for students, institutes, graduates, employers, experts, and researchers.
        <br />
        Built for context and communicates in natural language!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button variant="glass" size="md" className="group overflow-hidden">
          <span className="transition-transform duration-300 group-hover:-translate-x-1">Get Early Access</span>
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
        </Button>
        <Button variant="hero-outline" size="md">
          Learn more
        </Button>
      </div>
    </div>;
};
export default HeroContent;