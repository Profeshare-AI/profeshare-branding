import { Button } from "@/components/ui/button";
import GlassCTAButton from "./ui/glass-cta-button";
import { Link } from "react-router-dom";
import { smoothScrollToSection } from "@/utils/smoothScroll";
import { trackCTAClick } from "@/utils/analytics";

const HeroHeader = () => {
  return (
    <header className="flex justify-between items-center w-full px-8 pt-8 relative z-10">
      <Link to="/" className="flex items-center">
        <img 
          src="/lovable-uploads/08e527f0-3e20-4103-9e34-24e0167b01c1.png" 
          alt="Profeshare AI Logo"
          className="h-auto w-32 sm:w-36 md:w-40 lg:w-[150px]"
        />
      </Link>
      <GlassCTAButton size="md" onClick={() => {
        trackCTAClick('Header Get Early Access');
        smoothScrollToSection('early-access-section');
      }}>
        Get Early Access
      </GlassCTAButton>
    </header>
  );
};

export default HeroHeader;