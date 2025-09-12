import HeroHeader from "@/components/HeroHeader";
import HeroContent from "@/components/HeroContent";
import IntroductionSection from "@/components/sections/IntroductionSection";
import PillarsSection from "@/components/sections/PillarsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import MasonryGridSection from "@/components/sections/MasonryGridSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import AudienceSection from "@/components/sections/AudienceSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TrustDataSection from "@/components/sections/TrustDataSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import SurveySection from "@/components/sections/SurveySection";
import EarlyAccessSection from "@/components/sections/EarlyAccessSection";
import FounderSection from "@/components/sections/FounderSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import VisualSeparator from "@/components/VisualSeparator";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section with background image */}
      <div 
        className="min-h-screen w-full relative flex flex-col"
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
        <main className="flex-1 flex items-end justify-center py-8">
          <HeroContent />
        </main>
      </div>

      {/* Rest of the page with dark gradient background */}
      <div className="bg-gradient-to-b from-section-bg-primary/30 via-section-bg-secondary/20 to-section-bg-accent/30">
        <IntroductionSection />
        <VisualSeparator />
        
        <PillarsSection />
        <VisualSeparator />
        
        <HowItWorksSection />
        <VisualSeparator />
        
        <MasonryGridSection />
        <VisualSeparator />
        
        <CapabilitiesSection />
        <VisualSeparator />
        
        <AudienceSection />
        <VisualSeparator />
        
        <UseCasesSection />
        <VisualSeparator />
        
        <TrustDataSection />
        <VisualSeparator />
        
        <RoadmapSection />
        <VisualSeparator />
        
        <SurveySection />
        <VisualSeparator />
        
        <EarlyAccessSection />
        <VisualSeparator />
        
        <FounderSection />
        <VisualSeparator />
        
        <FAQSection />
        
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;