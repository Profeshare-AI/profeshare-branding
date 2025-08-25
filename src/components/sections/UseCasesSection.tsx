import Section from "../Section";
import Card from "../Card";
import { GraduationCap, RotateCcw, UserCheck, Building, Users } from "lucide-react";

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

const UseCasesSection = () => {
  return (
    <Section background="accent">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          See It in Action: Common User Journeys
        </h2>
      </div>
      
      <div className="space-y-6">
        {journeys.map((journey, index) => (
          <div key={index} className="relative">
            <Card hoverable className="flex items-start space-x-6 p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border border-gray-600 flex-shrink-0">
                <journey.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-instrument text-xl font-medium text-white mb-3">
                  {journey.title}
                </h3>
                <p className="font-body text-white/80 leading-relaxed">
                  {journey.description}
                </p>
              </div>
            </Card>
            
            {index < journeys.length - 1 && (
              <div className="flex justify-center py-4">
                <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default UseCasesSection;