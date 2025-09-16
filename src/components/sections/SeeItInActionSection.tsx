import { useState, useEffect, useRef } from "react";
import Section from "../Section";
import SectionChip from "../SectionChip";
import { GraduationCap, RotateCcw, UserCheck, Building, Users, MessageSquare, RefreshCw, School, Lightbulb, Briefcase } from "lucide-react";
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
  },
  {
    icon: MessageSquare,
    title: "Mentor to mentee cohort",
    description: "A senior professional states mentoring intent in natural language. Profeshare AI suggests verified mentees, schedules events, and tracks assignments through Papers. Outcomes are visible to participants and recruiters."
  },
  {
    icon: RefreshCw,
    title: "Career switcher to validated portfolio",
    description: "An experienced professional declares a transition goal. The system recommends learning paths, projects for Papers, and relevant roles. The profile gains credible signals that translate into targeted interviews."
  },
  {
    icon: School,
    title: "Employer to campus hiring drive",
    description: "A company outlines entry-level needs. Institutes with verified cohorts are invited, candidates submit structured work, and Recruiter Tools produce a comparable shortlist with clear fit indicators."
  },
  {
    icon: Lightbulb,
    title: "Institute to industry capstone partnership",
    description: "A university posts project briefs in natural language. Employers propose challenges, student teams publish results in Papers, and hiring interest flows from verified outcomes."
  },
  {
    icon: Briefcase,
    title: "Consultant to client engagement",
    description: "A consultant publishes case studies and declares service focus. Profeshare AI surfaces aligned organisations and decision makers, enabling credential checks, scoped conversations, and follow-ups anchored in work evidence."
  }
];

const SeeItInActionSection = () => {
  const [activeCard, setActiveCard] = useState<number>(0); // First card active by default
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedWidth, setExpandedWidth] = useState<boolean>(false);
  const [textVisible, setTextVisible] = useState<number>(0); // Track which card should show text
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleCardHover = (index: number) => {
    if (index !== activeCard) {
      setHoveredCard(index);
      setActiveCard(index);
      // Hide text immediately on hover
      setTextVisible(-1);
      // Show text after expansion completes (300ms matches transition duration)
      setTimeout(() => {
        setTextVisible(index);
      }, 300);
    }
  };

  const isExpanded = (index: number) => {
    return activeCard === index;
  };

  const shouldShowText = (index: number) => {
    return textVisible === index;
  };

  // Handle expansion animation timing
  useEffect(() => {
    if (activeCard !== null) {
      setExpandedWidth(true);
    }
  }, [activeCard]);

  // Initialize text visibility for the first card
  useEffect(() => {
    setTextVisible(0);
  }, []);

  return (
    <Section background="transparent" className="bg-black">
      <div className="text-center mb-8">
        <SectionChip>See it in Action</SectionChip>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          Explore Possible Use Cases and Common User Journeys
        </h2>
      </div>
      
      <div 
        ref={sectionRef}
        className="flex justify-center items-end h-96 gap-2"
      >
        {journeys.map((journey, index) => (
          <div
            key={index}
            className={cn(
              "relative backdrop-blur-md border rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 ease-out",
              "bg-white/5 border-white/10",
              isExpanded(index) 
                ? "w-80 h-80" 
                : "w-16 h-80 hover:bg-white/10 hover:border-white/20"
            )}
            onMouseEnter={() => handleCardHover(index)}
          >
            {/* Collapsed state - vertical text and icon at bottom left */}
            <div className="absolute bottom-0 left-0 h-full flex flex-col items-start justify-end p-4 pb-6">
              <div 
                className="text-white/90 font-source-serif font-medium text-sm whitespace-nowrap mb-4"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)'
                }}
              >
                {journey.title}
              </div>
              <journey.icon className="w-5 h-5 text-white/80" />
            </div>
            
            {/* Expanded state - description to the right of title */}
            {isExpanded(index) && (
              <div className="absolute bottom-0 right-0 left-16 h-full p-4 pb-6 flex flex-col justify-end">
                <div className={cn("transition-opacity duration-200", shouldShowText(index) ? "opacity-100" : "opacity-0")}>
                  <p className="font-body text-white/70 text-sm leading-relaxed">
                    {journey.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SeeItInActionSection;