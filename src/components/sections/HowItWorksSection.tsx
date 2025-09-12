import Section from "../Section";
import GlassCard from "../GlassCard";
import { MessageSquare, Search, CheckCircle, ArrowRight } from "lucide-react";

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
    <Section background="primary">
      <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 items-start">
        {/* Main Steps Section */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="font-instrument text-3xl md:text-4xl font-medium text-white mb-2">
              Achieve Your Goals in Three Simple Steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className={`flex items-center justify-center w-14 h-14 rounded-full mb-6 ${
                  index === 0 ? 'bg-blue-500' : 'bg-white/20'
                }`}>
                  <step.icon className={`w-7 h-7 ${index === 0 ? 'text-white' : 'text-white/80'}`} />
                </div>
                
                <h3 className="font-instrument text-xl font-medium text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="font-body text-white/70 text-sm mb-4">
                  {step.subtitle}
                </p>
                
                {step.examples && (
                  <div className="space-y-2">
                    {step.examples.map((example, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <span className="text-white/60 text-xs font-medium">{example.type}: </span>
                        <span className="text-white/80 text-xs italic">"{example.text}"</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {step.description && (
                  <p className="font-body text-white/70 text-sm">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Callout Section */}
        <div className="lg:col-span-1 lg:mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
              Feature
            </div>
            <h3 className="font-instrument text-xl font-medium text-white mb-4 leading-tight">
              A high-end professional <span className="text-blue-400">ecosystem</span> offering verified services to support all your career needs.
            </h3>
            <div className="flex items-center gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Try Now
              </button>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;