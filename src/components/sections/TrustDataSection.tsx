import Section from "../Section";
import Card from "../Card";
import { Shield, Users, Lock } from "lucide-react";

const trustTopics = [
  {
    icon: Shield,
    title: "Verification outcomes",
    description: "A trusted environment that verifies people and organisations to reduce fake or low-quality activity."
  },
  {
    icon: Users,
    title: "Community standards",
    description: "Clear rules for civil, professional conduct with reporting and review pathways."
  },
  {
    icon: Lock,
    title: "Privacy and data",
    description: "Your data is processed to deliver core product functions and discovery. You can request removal at any time."
  }
];

const TrustDataSection = () => {
  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          A Foundation of Verification and Privacy
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {trustTopics.map((topic, index) => (
          <Card key={index} hoverable className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gray-800 border border-gray-600">
                <topic.icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-instrument text-xl font-medium text-white mb-4">
              {topic.title}
            </h3>
            <p className="font-body text-white/80 leading-relaxed">
              {topic.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TrustDataSection;