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

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const isExpanded = (index: number) => {
    return activeCard === index || hoveredCard === index;
  };

  return (
    <Section background="transparent" className="bg-black/90">
      <div className="text-center mb-16">
        <SectionChip>See it in Action</SectionChip>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          Explore Possible Use Cases and Common User Journeys
        </h2>
      </div>
      
      <div className="flex justify-center items-end h-80 gap-2">
        {journeys.map((journey, index) => (
          <div
            key={index}
            className={cn(
              "relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl cursor-pointer transition-all duration-500 ease-out overflow-hidden",
              isExpanded(index) 
                ? "w-80 h-72" 
                : "w-16 h-72 hover:bg-gray-700/60"
            )}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            onClick={() => handleCardClick(index)}
          >
            {/* Collapsed state - vertical text and icon */}
            {!isExpanded(index) && (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <journey.icon className="w-6 h-6 text-white/80 mb-4" />
                <div 
                  className="text-white/90 font-medium text-sm whitespace-nowrap"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                  }}
                >
                  {journey.title}
                </div>
              </div>
            )}
            
            {/* Expanded state - horizontal content */}
            {isExpanded(index) && (
              <div className="h-full p-6 flex flex-col justify-between">
                <div className="flex items-start gap-3 mb-4">
                  <journey.icon className="w-6 h-6 text-white/80 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-instrument text-lg font-medium text-white mb-3 leading-tight">
                      {journey.title}
                    </h3>
                    <p className="font-body text-white/70 text-sm leading-relaxed">
                      {journey.description}
                    </p>
                  </div>
                </div>
                
                <button className="w-fit px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium transition-all duration-200 hover:bg-white/20 hover:border-white/30 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                  Preview
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SeeItInActionSection;