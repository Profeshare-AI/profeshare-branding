import { useState } from "react";
import Section from "../Section";
import SectionChip from "../SectionChip";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import abstractFigures from "@/assets/abstract-figures.png";

const EarlyAccessSection = () => {
  const [selectedUserGroup, setSelectedUserGroup] = useState<string>("");

  const userGroups = [
    "Student (Undergraduate)",
    "Postgraduate Student", 
    "Recent Graduate (0–2 years experience)",
    "Early-Career Professional (2–5 years experience)",
    "Mid-Career or Senior Professional (5+ years experience)",
    "Recruiter / Talent Acquisition (Corporate, In-house, Agency)",
    "Company or Employer (Startups, SMEs, Enterprises)",
    "Freelancer / Independent Consultant",
    "Mentor / Advisor",
    "University / College Career Services",
    "Training Institute / Bootcamp",
    "Faculty / Instructor"
  ];

  const jobDiscoveryGroups = [
    "Student (Undergraduate)",
    "Postgraduate Student",
    "Recent Graduate (0–2 years experience)",
    "Early-Career Professional (2–5 years experience)",
    "Mid-Career or Senior Professional (5+ years experience)",
    "Freelancer / Independent Consultant",
    "Mentor / Advisor"
  ];

  const handleGetEarlyAccess = () => {
    if (!selectedUserGroup) {
      alert("Please select your user group first");
      return;
    }

    const surveyUrl = jobDiscoveryGroups.includes(selectedUserGroup)
      ? "https://forms.gle/KDij7GVnUQpt1Rh9A"
      : "https://forms.gle/5AofD6H8uga7MrKj7";

    window.open(surveyUrl, "_blank");
  };

  return (
    <Section background="primary" className="relative overflow-hidden">
      <div className="text-center relative z-10">
        <SectionChip>Join Beta</SectionChip>
        <h2 className="font-instrument text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-16 max-w-4xl mx-auto leading-tight">
          Be Among the First to Experience Profeshare AI
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-20">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-64 justify-between bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
              >
                {selectedUserGroup || "Select your role"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-gray-900/95 border-white/20 text-white backdrop-blur-md z-50">
              {userGroups.map((group) => (
                <DropdownMenuItem
                  key={group}
                  onClick={() => setSelectedUserGroup(group)}
                  className="cursor-pointer hover:bg-white/10 focus:bg-white/10 text-white"
                >
                  {group}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="glass" 
            size="lg"
            onClick={handleGetEarlyAccess}
            className="w-full sm:w-auto px-8 py-3 text-base font-medium"
          >
            Get Early Access
          </Button>
        </div>
      </div>
      
      {/* Abstract figures at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 overflow-hidden">
        <img 
          src={abstractFigures} 
          alt="Abstract colorful 3D figures" 
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
    </Section>
  );
};

export default EarlyAccessSection;