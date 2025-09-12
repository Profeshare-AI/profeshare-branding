import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-section-bg-primary/40 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/08e527f0-3e20-4103-9e34-24e0167b01c1.png" 
                alt="Profeshare AI Logo"
                className="h-auto w-32"
              />
            </Link>
          </div>
          
          {/* Right side - Content */}
          <div className="flex-1 lg:max-w-2xl">
            {/* First row - Tagline */}
            <div className="mb-6">
              <p className="font-body text-white text-lg lg:text-right">
                One Trusted Space for Your Professional Journey.
              </p>
            </div>
            
            {/* Second row - Links and Button */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Product Links */}
              <div>
                <h3 className="font-body text-white font-medium mb-3">Product</h3>
                <div className="space-y-2">
                  <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                    Platform Features
                  </Link>
                  <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                    Professional Network
                  </Link>
                  <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                    Career Tools
                  </Link>
                </div>
              </div>
              
              {/* Survey Links */}
              <div>
                <h3 className="font-body text-white font-medium mb-3">Research</h3>
                <div className="space-y-2">
                  <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                    User Survey
                  </Link>
                  <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                    Market Research
                  </Link>
                  <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                    Industry Insights
                  </Link>
                </div>
              </div>
              
              {/* Connect Button */}
              <div className="flex flex-col items-start md:items-end">
                <Button
                  variant="glass"
                  size="sm"
                  className="inline-flex items-center gap-2"
                  onClick={() => window.open('https://linkedin.com/in/arikax', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect with Founder
                </Button>
              </div>
            </div>
            
            {/* Third row - Copyright and Privacy */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pt-4 border-t border-white/10">
              <p className="font-body text-white/60 text-sm">
                © 2025 Profeshare AI. All rights reserved.
              </p>
              <Link to="#" className="font-body text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;