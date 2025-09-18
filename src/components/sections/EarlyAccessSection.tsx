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
    <Section background="primary">
      <div className="text-center">
        <SectionChip>Join Beta</SectionChip>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-12">
          Be Among the First to Experience Profeshare AI
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full sm:w-64 justify-between bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                {selectedUserGroup || "Select your role"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-gray-900/95 border-white/20 text-white backdrop-blur-md">
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
            className="w-full sm:w-auto"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default EarlyAccessSection;