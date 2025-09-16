import { useState } from "react";
import Section from "../Section";
import SectionChip from "../SectionChip";
import { GraduationCap, RotateCcw, UserCheck, Building, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const journeys = [
  {
    icon: GraduationCap,
    title: "Student to internship",
    description: "Turn coursework and projects into Papers, receive guidance on readiness, and match with relevant roles."
  },
  {
    icon: RotateCcw,
    title: "Professional to role change",
    description: "Express intent in natural language, compare curated opportunities, and back your profile with work evidence."
  },
  {
    icon: UserCheck,
    title: "Recruiter to shortlist",
    description: "Define the role in plain terms, pull a verified set, and review comparable work signals quickly."
  },
  {
    icon: Building,
    title: "Institute to cohort showcase",
    description: "Present verified student work and outcomes to employers and partners in one place."
  },
  {
    icon: Users,
    title: "Researcher to collaborators",
    description: "Publish findings and project notes, discover aligned experts, and assemble a credible team."
  }
];

const SeeItInActionSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const isExpanded = (index: number) => {
    return activeCard === index || (hoveredCard === index && activeCard !== index);
  };

  return (
    <Section background="accent">
      <div className="text-center mb-12">
        <SectionChip>Interactive Preview</SectionChip>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-glass-text mb-4">
          See it in Action
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:gap-4">
        {journeys.map((journey, index) => (
          <div
            key={index}
            className={cn(
              "relative backdrop-blur-md bg-glass-bg/10 border border-glass-border/20 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0",
              "w-full sm:w-64 lg:w-60",
              isExpanded(index) 
                ? "h-80 bg-glass-bg/20 border-glass-border/30 shadow-xl" 
                : "h-48 hover:bg-glass-bg/15 hover:border-glass-border/25"
            )}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(index)}
          >
            <div className="p-6 flex flex-col items-center text-center h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-glass-bg/20 border border-glass-border/30 flex-shrink-0 mb-4">
                <journey.icon className="w-8 h-8 text-glass-text" />
              </div>
              
              {/* Title */}
              <h3 className="font-instrument text-lg font-medium text-glass-text mb-3 leading-tight">
                {journey.title}
              </h3>
              
              {/* Expandable Content */}
              <div className={cn(
                "flex-1 flex flex-col justify-between transition-all duration-300 ease-in-out",
                isExpanded(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4 pointer-events-none"
              )}>
                <p className="font-body text-glass-text/80 text-sm leading-relaxed mb-4 flex-1">
                  {journey.description}
                </p>
                
                <button className="px-4 py-2 rounded-lg bg-glass-bg/20 border border-glass-border/30 text-glass-text text-sm font-medium transition-all duration-200 hover:bg-glass-bg/30 hover:border-glass-border/40">
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SeeItInActionSection;