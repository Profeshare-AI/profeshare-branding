import Section from "../Section";
import GlassCard from "../GlassCard";
import { Shield, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassmorphismChip from "../GlassmorphismChip";

const trustTopics = [
  {
    icon: Shield,
    title: "Seamless Integration",
    description: "Easily integrate with your existing systems and workflows, reducing downtime and ensuring a smooth transition."
  },
  {
    icon: Users,
    title: "Enhanced Productivity", 
    description: "Automate repetitive tasks and streamline processes to help you get the most out of your growing business."
  },
  {
    icon: Lock,
    title: "Superior Support",
    description: "Access our dedicated support team 24/7 to resolve any issues quickly and keep your operations running smoothly."
  }
];

const TrustDataSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/80 text-xs font-body font-medium mb-6">
            Verified Identities • Credible Signals • Multi-sided Value
          </div>
          
          <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            Unlock the Full Potential of <span className="italic">Your Business</span>
          </h2>
          
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Our SaaS solution is designed to provide you with the tools and insights you need to drive growth and efficiency. Here's how we can help you achieve your business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trustTopics.map((topic, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-left hover:border-blue-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <topic.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-instrument text-xl font-medium text-white mb-4">
                {topic.title}
              </h3>
              <p className="font-body text-white/70 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          <Button variant="default" size="md" className="bg-white text-black hover:bg-white/90">
            Start your free trial
          </Button>
          <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white/5">
            More about our features →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustDataSection;