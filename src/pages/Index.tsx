import { useEffect } from "react";
import HeroHeader from "@/components/HeroHeader";
import HeroContent from "@/components/HeroContent";
import IntroductionSection from "@/components/sections/IntroductionSection";
import PillarsSection from "@/components/sections/PillarsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PersonasSection from "@/components/sections/PersonasSection";

import AudienceSection from "@/components/sections/AudienceSection";
import SeeItInActionSection from "@/components/sections/SeeItInActionSection";

import TrustDataSection from "@/components/sections/TrustDataSection";
import EarlyAccessSection from "@/components/sections/EarlyAccessSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import VisualSeparator from "@/components/VisualSeparator";
import { trackScrollDepth } from "@/utils/analytics";

const Index = () => {
  useEffect(() => {
    let hasTracked75 = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 75 && !hasTracked75) {
        trackScrollDepth(75);
        hasTracked75 = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section with background image */}
      <div 
        className="h-[90vh] md:h-[90vh] lg:h-screen w-full relative flex flex-col"
        style={{
          backgroundImage: `url(/lovable-uploads/41d57897-16f1-4d63-a4d9-8186b45ed768.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-hero-overlay/40 z-0"></div>
        
        {/* Header */}
        <HeroHeader />
        
        {/* Main hero content - centered vertically and horizontally */}
        <main className="flex-1 flex items-end md:items-end justify-center py-4 md:py-8">
          <HeroContent />
        </main>
      </div>

      {/* Introduction Section with dark background */}
      <div id="introduction-section" className="bg-black">
        <IntroductionSection />
      </div>

      {/* Parallax Background Container */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url(/howitworks-section-background.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>
        
        {/* Content with relative positioning */}
        <div className="relative z-10">
          <div id="pillars-section">
            <PillarsSection />
          </div>
          <VisualSeparator />
          
          <AudienceSection />
          <VisualSeparator />
        </div>
      </div>

      {/* Personas Section with dark background */}
      <div id="personas-section" className="bg-black">
        <PersonasSection />
      </div>

      {/* Parallax Background Container continues */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url(/howitworks-section-background.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>
        
        {/* Content with relative positioning */}
        <div className="relative z-10">
          <HowItWorksSection />
          <VisualSeparator />
          
          <SeeItInActionSection />
          <VisualSeparator />
          
          <div id="trust-security-section">
            <TrustDataSection />
          </div>
          <VisualSeparator />
          
          <div id="early-access-section">
            <EarlyAccessSection />
          </div>
          <VisualSeparator />
          
          <div id="faq-section">
            <FAQSection />
          </div>
        </div>
      </div>

      {/* Footer with gradient background */}
      <div className="bg-gradient-to-b from-section-bg-primary/30 via-section-bg-secondary/20 to-section-bg-accent/30">
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;