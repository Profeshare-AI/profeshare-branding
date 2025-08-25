import Section from "../Section";
import Card from "../Card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EarlyAccessSection = () => {
  return (
    <Section background="primary">
      <div className="text-center">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
          Be Among the First to Experience Profeshare AI
        </h2>
        
        <Card className="max-w-3xl mx-auto mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-instrument text-xl font-medium text-white mb-3">
                How selection works
              </h3>
              <p className="font-body text-white/90">
                Invitations roll out in waves to a diverse mix of participants across roles, geographies, and backgrounds.
              </p>
            </div>
            
            <div>
              <h3 className="font-instrument text-xl font-medium text-white mb-3">
                What invitees can try first
              </h3>
              <p className="font-body text-white/90">
                AI, Career Matching, Collaborative Papers, Learning Space previews, Events Space, and Recruiter Tools preview.
              </p>
            </div>
          </div>
        </Card>
        
        <Button variant="default" size="lg" className="group transition-all duration-300 hover:pr-10">
          <span className="transition-transform duration-300 group-hover:-translate-x-1">Request Early Access</span>
          <ArrowRight className="w-5 h-5 ml-2 opacity-60 transition-all duration-300 group-hover:opacity-100" />
        </Button>
      </div>
    </Section>
  );
};

export default EarlyAccessSection;