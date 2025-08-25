import Section from "../Section";
import Card from "../Card";
import { ExternalLink, Mail } from "lucide-react";

const FounderSection = () => {
  return (
    <Section background="secondary">
      <div className="text-center mb-12">
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          From Our Founder
        </h2>
      </div>
      
      <Card className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center">
              {/* Placeholder for founder photo - will need to be updated with actual image */}
              <div className="text-white/60 text-center">
                <div className="text-4xl mb-2">👤</div>
                <div className="text-sm">Mohan Aditya<br />Sadhanala</div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 text-left">
            <blockquote className="font-body text-lg text-white/90 mb-6 italic">
              "I am building Profeshare AI as a verified professional ecosystem that serves students, professionals, and organisations with credibility and clarity. If this resonates with you, I would value your feedback and collaboration."
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.linkedin.com/in/mohan-aditya-sadhanala/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 rounded-full text-white transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </a>
              
              <a 
                href="mailto:arikax.dev@outlook.com"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 rounded-full text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default FounderSection;