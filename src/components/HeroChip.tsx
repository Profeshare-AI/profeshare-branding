import { ReactNode } from "react";

interface HeroChipProps {
  children?: ReactNode;
}

const HeroChip = ({ children }: HeroChipProps) => {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-hero-chip-bg/10 border border-hero-chip-border/20 text-hero-chip-text text-xs font-body font-medium mb-6">
      {children || "Beta is rolling out soon • Signup for early access"}
    </div>
  );
};

export default HeroChip;