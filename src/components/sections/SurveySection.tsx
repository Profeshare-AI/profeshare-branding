import Section from "../Section";
import GlassCard from "../GlassCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SurveySection = () => {
  return (
    <Section background="accent">
      <div className="text-center">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
          Help Shape the Future of Professional Networking
        </h2>
        
        <GlassCard className="max-w-3xl mx-auto mb-8">
          <p className="font-body text-lg text-white/90 mb-6">
            Your input helps prioritise what ships next and grants priority access to the beta.
          </p>
          
          <div className="space-y-4">
            <div className="text-left">
              <h4 className="font-instrument text-lg font-medium text-white mb-2">Who should participate</h4>
              <p className="font-body text-white/80">
                Students, graduates, professionals, experts, researchers, recruiters, employers, institutes, and communities.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-instrument text-lg font-medium text-white mb-2">Time required</h4>
              <p className="font-body text-white/80">
                About 5 minutes.
              </p>
            </div>
          </div>
        </GlassCard>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="glass" 
            size="lg" 
            className="group"
            onClick={() => window.open('#', '_blank')}
          >
            Start the Survey
            <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => window.open('#', '_blank')}
          >
            Take the Recruiter Survey
            <ExternalLink className="w-4 h-4 ml-2 opacity-60 hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default SurveySection;