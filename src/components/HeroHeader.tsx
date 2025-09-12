import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      <Button variant="glass" size="md" className="group transition-all duration-300 hover:pr-10">
        <span className="transition-transform duration-300 group-hover:-translate-x-1">Get Early Access</span>
        <ArrowRight className="w-4 h-4 absolute right-3 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
      </Button>
    </header>
  );
};

export default HeroHeader;