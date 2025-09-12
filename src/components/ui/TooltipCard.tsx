import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TooltipCardProps {
  title: string;
  description: string;
  className?: string;
}

const TooltipCard = ({ 
  title, 
  description, 
  className 
}: TooltipCardProps) => {
  return (
    <div 
      className={cn(
        "w-64 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 text-white shadow-lg",
        className
      )}
    >
      <div>
        <h3 className="font-instrument text-lg font-medium text-white mb-2">
          {title}
        </h3>
        <p className="font-body text-sm text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TooltipCard;