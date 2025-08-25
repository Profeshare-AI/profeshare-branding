import { Button } from "@/components/ui/button";

const HeroHeader = () => {
  return (
    <header className="flex justify-between items-center w-full px-8 pt-8 relative z-10">
      <div className="font-logo text-hero-text text-lg font-bold">
        Profeshare AI
      </div>
      <Button variant="glass" size="md">
        Schedule a demo
      </Button>
    </header>
  );
};

export default HeroHeader;