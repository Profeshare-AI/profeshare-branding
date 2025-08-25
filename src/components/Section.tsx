import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "primary" | "secondary" | "accent" | "transparent";
  id?: string;
}

const Section = ({ children, className, background = "primary", id }: SectionProps) => {
  const backgroundClasses = {
    primary: "bg-section-bg-primary/20",
    secondary: "bg-section-bg-secondary/20", 
    accent: "bg-section-bg-accent/20",
    transparent: "bg-transparent"
  };

  return (
    <section 
      id={id}
      className={cn(
        "relative py-16 md:py-20 lg:py-24",
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;