import HeroHeader from "@/components/HeroHeader";
import HeroContent from "@/components/HeroContent";

const Index = () => {
  return (
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
      
      {/* Main content - centered vertically and horizontally */}
      <main className="flex-1 flex items-end justify-start px-2 py-8">
        <HeroContent />
      </main>
    </div>
  );
};

export default Index;