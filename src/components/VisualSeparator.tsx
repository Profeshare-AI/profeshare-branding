import { cn } from "@/lib/utils";

interface VisualSeparatorProps {
  className?: string;
}

const VisualSeparator = ({ className }: VisualSeparatorProps) => {
  return (
    <div className={cn("w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8", className)} />
  );
};

export default VisualSeparator;