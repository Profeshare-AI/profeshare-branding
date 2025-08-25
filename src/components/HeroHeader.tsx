import { Button } from "@/components/ui/button";

const HeroHeader = () => {
  return (
    <header className="flex justify-between items-center w-full px-8 pt-8 relative z-10">
      <img 
        src="/lovable-uploads/08e527f0-3e20-4103-9e34-24e0167b01c1.png" 
        alt="Profeshare AI Logo"
        className="h-auto w-24 sm:w-28 md:w-32 lg:w-[150px]"
      />
      <Button variant="glass" size="md">
        Schedule a demo
      </Button>
    </header>
  );
};

export default HeroHeader;