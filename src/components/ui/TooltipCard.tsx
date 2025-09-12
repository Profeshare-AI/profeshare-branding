import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TooltipCardProps {
  title: string;
  subtitle: string;
  description: string;
  hoverTitle: string;
  hoverDescription: string;
  className?: string;
}

const TooltipCard = ({ 
  title, 
  subtitle, 
  description, 
  hoverTitle, 
  hoverDescription, 
  className 
}: TooltipCardProps) => {
  return (
    <div 
      className={cn(
        "w-80 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-white shadow-lg",
        className
      )}
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-instrument text-lg font-medium text-white mb-2">
            {title}
          </h3>
          <p className="font-body text-xs font-medium text-white/60 mb-2">
            {subtitle}
          </p>
          <p className="font-body text-sm text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="pt-3 border-t border-white/10">
          <p className="font-body text-xs font-medium text-white/60 mb-2">
            {hoverTitle}
          </p>
          <p className="font-body text-sm text-white/80 leading-relaxed">
            {hoverDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TooltipCard;