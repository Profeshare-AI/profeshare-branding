import Section from "../Section";
import GlassCard from "../GlassCard";
import { MessageSquare, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "State your intent",
    subtitle: "Ask in plain language.",
    examples: [
      { type: "Student", text: "Product design internship in Bengaluru with Figma and UX research." },
      { type: "Professional", text: "Senior data role in Hyderabad with Python, SQL, and stakeholder work." },
      { type: "Recruiter", text: "Shortlist frontend engineers with React and TypeScript, Bangalore or remote." }
    ]
  },
  {
    icon: Search,
    title: "Review a curated set",
    subtitle: "See relevant results.",
    description: "See roles, mentors, courses, events, people, and organisations that fit your request and profile."
  },
  {
    icon: CheckCircle,
    title: "Act with confidence",
    subtitle: "Take the next step in a trusted space.",
    description: "Apply, publish, collaborate, or shortlist inside a verified space where signals are credible and next steps are clear."
  }
];

const HowItWorksSection = () => {
  return (
    <Section background="accent">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          Achieve Your Goals in Three Simple Steps
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <GlassCard key={index} hoverable className="relative">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 border border-white/30 mb-6 mx-auto">
              <span className="text-xl font-bold text-white">{index + 1}</span>
            </div>
            
            <div className="flex justify-center mb-4">
              <step.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="font-instrument text-xl font-medium text-white mb-2 text-center">
              {step.title}
            </h3>
            
            <p className="font-body text-white/70 text-center mb-4">
              {step.subtitle}
            </p>
            
            {step.examples && (
              <div className="space-y-3">
                {step.examples.map((example, idx) => (
                  <div key={idx} className="bg-black/20 rounded-lg p-3">
                    <span className="text-white/60 text-sm">{example.type}: </span>
                    <span className="text-white/90 text-sm italic">"{example.text}"</span>
                  </div>
                ))}
              </div>
            )}
            
            {step.description && (
              <p className="font-body text-white/80 text-center">
                {step.description}
              </p>
            )}
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;