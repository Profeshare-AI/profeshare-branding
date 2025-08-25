import Section from "../Section";
import Card from "../Card";
import { CheckCircle, Clock } from "lucide-react";

const betaFeatures = [
  "Verified Profiles",
  "Career Matching",
  "Papers",
  "Recruiter Tools preview",
  "Community Events",
  "guided feedback loops"
];

const nextFeatures = [
  "Deeper Profile Insights",
  "Learning Space flows",
  "Institute Dashboards",
  "Collaboration enhancements"
];

const RoadmapSection = () => {
  return (
    <Section background="secondary">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          What We're Building
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card hoverable>
          <div className="flex items-center mb-6">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            <h3 className="font-instrument text-2xl font-medium text-white">
              In the Beta
            </h3>
          </div>
          <ul className="space-y-3">
            {betaFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                <span className="font-body text-white/90">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
        
        <Card hoverable>
          <div className="flex items-center mb-6">
            <Clock className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="font-instrument text-2xl font-medium text-white">
              What's Next
            </h3>
          </div>
          <ul className="space-y-3">
            {nextFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                <span className="font-body text-white/90">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default RoadmapSection;