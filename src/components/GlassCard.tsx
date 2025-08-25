import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const GlassCard = ({ children, className, hoverable = false, onClick }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "backdrop-blur-md bg-glass-bg/10 border border-glass-border/20 rounded-2xl p-6 text-glass-text shadow-lg",
        hoverable && "transition-all duration-300 hover:bg-glass-bg/20 hover:border-glass-border/30 hover:scale-105 hover:shadow-xl cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;