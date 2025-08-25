import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const Card = ({ children, className, hoverable = false, onClick }: CardProps) => {
  return (
    <div 
      className={cn(
        "bg-gray-900/90 border border-gray-700 rounded-2xl p-6 text-white shadow-lg",
        hoverable && "transition-all duration-300 hover:bg-gray-800/90 hover:border-gray-600 hover:scale-105 hover:shadow-xl cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;