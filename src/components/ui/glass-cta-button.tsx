import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlassCTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "hero";
  onClick?: () => void;
}

const GlassCTAButton = ({ children, className, size = "md", onClick }: GlassCTAButtonProps) => {
  return (
    <Button 
      variant="glass" 
      size={size} 
      className={cn("group transition-all duration-300 hover:pr-10", className)}
      onClick={onClick}
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-1">
        {children}
      </span>
      <ArrowRight className={cn(
        "absolute opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
        size === "hero" ? "w-5 h-5 right-6" : "w-4 h-4 right-3"
      )} />
    </Button>
  );
};

export default GlassCTAButton;