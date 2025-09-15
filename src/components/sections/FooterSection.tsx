import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-black/90 py-16 border-t border-white/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* First row - Logo and Tagline */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12">
          <div className="flex items-center mb-4 lg:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/08e527f0-3e20-4103-9e34-24e0167b01c1.png" 
                alt="Profeshare AI Logo"
                className="h-auto w-52"
              />
            </Link>
          </div>
          
          <div className="lg:text-right">
            <p className="font-body text-white text-xs">
              Only Trusted Space for Your Professional Journey.
            </p>
          </div>
        </div>
        
        {/* Separator line */}
        <div className="border-t border-white/10 mb-8"></div>
        
        {/* Second row - Links and Button (4 columns grid) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 px-4 md:px-8">
          {/* Product Links */}
          <div>
            <h3 className="font-body text-white font-medium mb-3">Product</h3>
            <div className="space-y-2">
              <a href="#introduction" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                About Profeshare AI
              </a>
              <a href="#pillars" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                Features
              </a>
              <a href="#personas" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                Personas
              </a>
              <a href="#trust-security" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                Trust & Security
              </a>
              <a href="#join-beta" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                Early Access
              </a>
              <a href="#faq" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>
          
          {/* Survey Links */}
          <div>
            <h3 className="font-body text-white font-medium mb-3">Survey</h3>
            <div className="space-y-2">
              <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                For Students
              </Link>
              <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                For Graduates
              </Link>
              <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                For Recruiters
              </Link>
              <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                For Companies
              </Link>
              <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                For Institutions
              </Link>
              <Link to="#" className="block font-body text-white/70 hover:text-white transition-colors text-sm">
                For Agencies
              </Link>
            </div>
          </div>
          
          {/* Connect Button */}
          <div className="flex flex-col items-start">
            <Button
              variant="glass"
              size="sm"
              className="inline-flex items-center gap-2"
              onClick={() => window.open('https://www.linkedin.com/in/mohan-aditya-sadhanala/', '_blank')}
            >
              Connect with Founder
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Empty column for future use */}
          <div></div>
        </div>
        
        {/* Third row - Copyright and Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-6 border-t border-white/20">
          <p className="font-body text-white/60 text-sm">
            © 2025 Profeshare AI. All rights reserved.
          </p>
          <Link to="#" className="font-body text-white/70 hover:text-white transition-colors text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;