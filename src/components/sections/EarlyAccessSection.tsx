import { useState } from "react";
import Section from "../Section";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";
import { UserGroupDropdown } from "../ui/user-group-dropdown";
import tryProfeshareImage from "@/assets/try-profeshare.jpeg";
import { trackSurveyClick } from "@/utils/analytics";
const EarlyAccessSection = () => {
  const [selectedUserGroup, setSelectedUserGroup] = useState<string>("");
  const jobDiscoveryGroups = ["Student (Undergraduate)", "Postgraduate Student", "Recent Graduate (0–2 years experience)", "Early-Career Professional (2–5 years experience)", "Mid-Career or Senior Professional (5+ years experience)", "Freelancer / Independent Consultant", "Mentor / Advisor"];
  const handleGetEarlyAccess = () => {
    if (!selectedUserGroup) {
      alert("Please select your user group first");
      return;
    }
    const surveyUrl = jobDiscoveryGroups.includes(selectedUserGroup) ? "https://forms.gle/KDij7GVnUQpt1Rh9A" : "https://forms.gle/5AofD6H8uga7MrKj7";
    const surveyType = jobDiscoveryGroups.includes(selectedUserGroup) ? "Job Discovery Survey" : "Talent Discovery Survey";
    
    trackSurveyClick(surveyType, selectedUserGroup);
    window.open(surveyUrl, "_blank");
  };
  const betaFeatures = ["Verified Profiles", "AI Career Copilot", "Job Discovery", "Talent Discovery (Recruiter Studio Lite)", "Papers", "Learn Space & Events", "Privacy & Trust"];
  return <Section background="transparent">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch gap-6 min-h-[600px] -mx-4 md:-mx-6 lg:-mx-8">
        {/* Left Column - Background Image (Desktop), Right Column - Content (Mobile) */}
        <div className="relative order-2 lg:order-1">
          <div className="p-6 md:p-8 lg:h-full">
            <img src={tryProfeshareImage} alt="Try Profeshare AI" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

        {/* Right Column - Content (Desktop), Left Column - Content (Mobile) */}
        <div className="flex flex-col lg:justify-center space-y-6 lg:space-y-8 py-8 px-4 md:px-6 lg:px-8 order-1 lg:order-2 text-center lg:text-left">
          <div>
            <SectionChip>Join Beta</SectionChip>
            <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Be Among the First to Experience Profeshare AI
            </h2>
          </div>

          {/* What to expect subheading */}
          <div className="max-w-sm mx-auto lg:mx-0 lg:max-w-none">
            <h3 className="font-dm-sans text-xl font-medium text-white mb-4 text-left">
              What to expect in Profeshare Beta?
            </h3>
            
            {/* Beta Features List with bullet points */}
            <ul className="space-y-3 list-disc list-inside text-left">
              {betaFeatures.map((feature, index) => <li key={index} className="text-white/90 font-dm-sans">
                  {feature}
                </li>)}
            </ul>
          </div>

          {/* Dropdown and CTA - Reduced width */}
          <div className="flex flex-col gap-4 max-w-xs mx-auto lg:mx-0 lg:max-w-sm">
            <p className="text-white/60 text-sm font-dm-sans">Profeshare AI Beta is rolling out to the selected users who participated in the survey. Share your experience with us in the survey to join the early access waitlist.</p>
            <UserGroupDropdown selectedGroup={selectedUserGroup} onGroupSelect={setSelectedUserGroup} />

            <GlassCTAButton size="md" onClick={handleGetEarlyAccess} className="w-full">
              Take me to the Survey
            </GlassCTAButton>
          </div>
        </div>
      </div>
    </Section>;
};
export default EarlyAccessSection;