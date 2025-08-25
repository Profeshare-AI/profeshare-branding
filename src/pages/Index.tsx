import HeroHeader from "@/components/HeroHeader";
import HeroContent from "@/components/HeroContent";

const Index = () => {
  return (
    <div 
      className="min-h-screen w-full relative flex flex-col"
      style={{
        backgroundImage: `url(/lovable-uploads/d091240a-a92c-451f-87f1-6c8d2770d714.png)`,
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
      <main className="flex-1 flex items-end justify-center py-16">
        <HeroContent />
      </main>
    </div>
  );
};

export default Index;