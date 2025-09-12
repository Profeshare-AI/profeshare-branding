import { cn } from "@/lib/utils";

interface TooltipCardProps {
  title: string;
  description: string;
  gradientColor?: string;
  borderColor?: string;
  className?: string;
}

const TooltipCard = ({ 
  title, 
  description,
  gradientColor = "from-cyan-500/20 via-cyan-500/40 to-cyan-500/80",
  borderColor = "border-cyan-500/60",
  className 
}: TooltipCardProps) => {
  return (
    <div className={`relative p-[1px] rounded-2xl bg-gradient-to-br ${gradientColor}`}>
      <div 
        className={cn(
          `w-48 h-64 backdrop-blur-md bg-black/70 ${borderColor} border rounded-2xl p-4 text-white shadow-lg`,
          className
        )}
      >
        <div className="h-full flex flex-col justify-between">
          <h3 className="font-instrument text-lg font-medium text-white mb-3">
            {title}
          </h3>
          <p className="font-body text-sm text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TooltipCard;