import { useState } from "react";
import Section from "../Section";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import tryProfeshareImage from "@/assets/try-profeshare.jpeg";

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

  const betaFeatures = [
    "Verified Profiles",
    "AI Career Copilot", 
    "Job Discovery",
    "Talent Discovery (Recruiter Studio Lite)",
    "Papers",
    "Learn Space & Events",
    "Privacy & Trust"
  ];

  return (
    <Section background="transparent" className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] -mx-4 md:-mx-6 lg:-mx-8">
        {/* Left Column - Background Image */}
        <div className="relative">
          <img 
            src={tryProfeshareImage}
            alt="Try Profeshare AI"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col space-y-6 py-8 px-4 md:px-6 lg:px-8">
          <div>
            <SectionChip>Join Beta</SectionChip>
            <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
              Be Among the First to Experience Profeshare AI
            </h2>
          </div>

          {/* What to expect subheading */}
          <div>
            <h3 className="font-dm-sans text-xl font-medium text-white mb-4">
              What to expect in Profeshare Beta?
            </h3>
            
            {/* Beta Features List with bullet points */}
            <ul className="space-y-3 list-disc list-inside">
              {betaFeatures.map((feature, index) => (
                <li key={index} className="text-white/90 font-dm-sans">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown and CTA - Reduced width */}
          <div className="flex flex-col gap-4 max-w-xs">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-between backdrop-blur-sm">
                  <span className="text-sm">
                    {selectedUserGroup || "Select what describes you the best..."}
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-gray-900/95 border-white/20 text-white backdrop-blur-md">
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

            <GlassCTAButton 
              size="md"
              onClick={handleGetEarlyAccess}
              className="w-full"
            >
              Get Early Access
            </GlassCTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EarlyAccessSection;