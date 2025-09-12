import { ReactNode } from "react";

interface GlassmorphismChipProps {
  children?: ReactNode;
}

const GlassmorphismChip = ({ children }: GlassmorphismChipProps) => {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-glass-bg/10 border border-glass-border/20 text-glass-text text-xs font-body font-medium mb-6">
      {children || "Beta is rolling out soon • Signup for early access"}
    </div>
  );
};

export default GlassmorphismChip;