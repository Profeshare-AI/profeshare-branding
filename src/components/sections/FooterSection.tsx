import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-section-bg-primary/40 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/08e527f0-3e20-4103-9e34-24e0167b01c1.png" 
                alt="Profeshare AI Logo"
                className="h-auto w-32"
              />
            </Link>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-body text-white/60 mb-2">
              Contact: <a href="mailto:arikax.dev@outlook.com" className="text-white/80 hover:text-white transition-colors">arikax.dev@outlook.com</a>
            </p>
            <p className="font-body text-white/60 text-sm">
              © 2025 Profeshare AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;