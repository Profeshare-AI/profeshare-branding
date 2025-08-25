import HeroHeader from "@/components/HeroHeader";
import HeroContent from "@/components/HeroContent";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen w-full relative flex flex-col"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-hero-overlay/40 z-0"></div>
      
      {/* Header */}
      <HeroHeader />
      
      {/* Main content - centered vertically and horizontally */}
      <main className="flex-1 flex items-center justify-center py-16">
        <HeroContent />
      </main>
    </div>
  );
};

export default Index;