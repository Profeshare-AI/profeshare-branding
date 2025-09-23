import Section from "../Section";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SectionChip from "../SectionChip";

const IntroductionSection = () => {
  return (
    <Section background="transparent">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden max-w-md">
            <img 
              src="/lovable-uploads/44412060-0f72-491c-b0a4-f2f0fece5ad8.png" 
              alt="Professional walking on steps representing career growth" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <SectionChip>
            About Profeshare AI
          </SectionChip>

          {/* Heading */}
          <h2 className="font-instrument text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
            One Trusted Space for<br />
            Your Professional Journey
          </h2>

          {/* Content */}
          <div className="space-y-4 text-white/90 font-body text-base leading-relaxed">
            <p>
              Profeshare AI is a verified public professional networking ecosystem that brings education, industry, and research into one trusted space. It serves students and graduates, early to senior professionals, experts and researchers, recruiters and employers, and institutes and cohorts that value credible profiles, real people, and relevant opportunities.
            </p>
            <p className="text-justify">
              The platform understands natural language and context. Users express intent in plain words and receive curated roles, mentors, collaborators, courses, events, communities, and candidates. The network supports credible profiles, Papers for structured work, career matching, learning paths, and recruiter tools. It reduces spam, elevates proof, and advances each professional journey.
            </p>
          </div>

          {/* Building for users section - Mobile: 3 rows, Desktop: original layout */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 pt-4 text-center md:text-left">
            {/* Row 1: Avatars */}
            <div className="flex -space-x-2 justify-center md:justify-start">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="/avatars/avatar-professional-1.jpg" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="/avatars/avatar-professional-2.jpg" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="/avatars/avatar-professional-3.jpg" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            {/* Row 2: Text */}
            <span className="text-white font-medium">
              Join the verified professional ecosystem<br className="md:hidden" /> 
              curated for you, with AI.
            </span>
            {/* Row 3: Button - moved to separate div below for mobile */}
          </div>
          
          {/* Try Now Button - Mobile: Row 3, Desktop: Hidden (keeping original button elsewhere if exists) */}
          <div className="flex justify-center md:hidden pt-4">
            <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-colors">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IntroductionSection;