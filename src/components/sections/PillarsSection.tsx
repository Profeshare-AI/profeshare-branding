import Section from "../Section";
import Card from "../Card";
import { Shield, Target, Network } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Verified Identities",
    description: "A verified ecosystem that removes doubt from the first interaction. No bots. No fake profiles. Clear affiliations for people and organisations so relationships begin with confidence."
  },
  {
    icon: Target,
    title: "Credible Signals",
    description: "No spam. No engagement tricks. Projects, publications, and contributions appear in structured formats that reflect real capability and make comparison easier for peers and hiring teams."
  },
  {
    icon: Network,
    title: "Multi-sided Value",
    description: "One network that serves every participant with practical features. Career Matching for discovery, Papers for structured publishing, Learning Space for job-linked growth, and Recruiter Tools for efficient shortlisting."
  }
];

const PillarsSection = () => {
  return (
    <Section background="secondary">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          A Network Built on Confidence, Clarity, and Value
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Card key={index} hoverable className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gray-800 border border-gray-600">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-instrument text-xl font-medium text-white mb-4">
              {pillar.title}
            </h3>
            <p className="font-body text-white/80 leading-relaxed">
              {pillar.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default PillarsSection;