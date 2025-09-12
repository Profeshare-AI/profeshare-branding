import { ReactNode } from "react";

interface SectionChipProps {
  children: ReactNode;
}

const SectionChip = ({ children }: SectionChipProps) => {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-section-chip-bg/10 border border-section-chip-border/20 text-section-chip-text text-xs font-dm-sans font-medium mb-6">
      {children}
    </div>
  );
};

export default SectionChip;