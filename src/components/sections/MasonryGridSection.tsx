import Section from "../Section";
import GlassmorphismChip from "../GlassmorphismChip";
import { Brain, Users, Target, Lightbulb, Zap, BookOpen, Network, TrendingUp } from "lucide-react";
import { useState } from "react";

const masonryItems = [
  {
    id: 1,
    type: "text",
    title: "What shapes professional growth and success?",
    subtitle: "Interview",
    background: "bg-gradient-to-br from-pink-400 to-pink-600",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 2,
    type: "profile",
    name: "Sarah Chen",
    role: "Product Manager",
    image: "/lovable-uploads/44412060-0f72-491c-b0a4-f2f0fece5ad8.png",
    background: "bg-gradient-to-br from-blue-50 to-blue-100",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 3,
    type: "text",
    title: "Breaking down the networking barrier",
    subtitle: "Challenge",
    background: "bg-gradient-to-br from-gray-100 to-gray-200",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 4,
    type: "feature",
    title: "The collaboration blueprint",
    subtitle: "Strategic Framework",
    icon: Network,
    background: "bg-gradient-to-br from-indigo-500 to-purple-600",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 5,
    type: "text",
    title: "Why our networks don't always serve us?",
    subtitle: "Professional Insight",
    background: "bg-gradient-to-br from-rose-300 to-pink-300",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 6,
    type: "profile",
    name: "Marcus Johnson", 
    role: "Engineering Lead",
    image: "/lovable-uploads/48b2351b-f50a-453d-9afe-4b23e7e8a597.png",
    background: "bg-gradient-to-br from-amber-50 to-orange-100",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 7,
    type: "feature",
    title: "From Perception to Action",
    subtitle: "Take It Out",
    icon: Target,
    background: "bg-gradient-to-br from-emerald-400 to-teal-500",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 8,
    type: "text",
    title: "The skill compass",
    subtitle: "Navigate",
    background: "bg-gradient-to-br from-slate-600 to-slate-800",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 9,
    type: "feature",
    title: "Useful insights",
    subtitle: "Newsletter", 
    icon: BookOpen,
    background: "bg-gradient-to-br from-purple-400 to-purple-600",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 10,
    type: "text",
    title: "Breaking down career barriers",
    subtitle: "Achievement unlocked",
    background: "bg-gradient-to-br from-violet-500 to-purple-700",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 11,
    type: "feature",
    title: "Hacks to boost your career!",
    subtitle: "Growth Tips",
    icon: Zap,
    background: "bg-gradient-to-br from-orange-200 to-red-300",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 12,
    type: "profile",
    name: "Alex Rivera",
    role: "Design Director", 
    image: "/lovable-uploads/5f43cc85-57e6-40ba-b89e-dfda252b9e8d.png",
    background: "bg-gradient-to-br from-emerald-50 to-teal-100",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 13,
    type: "text",
    title: "Building authentic connections",
    subtitle: "Networking Strategy",
    background: "bg-gradient-to-br from-cyan-400 to-blue-500",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 14,
    type: "feature",
    title: "Leadership in the digital age",
    subtitle: "Modern Management",
    icon: Users,
    background: "bg-gradient-to-br from-lime-300 to-green-400",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 15,
    type: "profile",
    name: "Jordan Kim",
    role: "Data Scientist",
    image: "/lovable-uploads/082aa3e9-45fa-4106-8126-575aeeb1b153.png",
    background: "bg-gradient-to-br from-purple-50 to-indigo-100",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 16,
    type: "text",
    title: "The future of remote collaboration",
    subtitle: "Work Evolution",
    background: "bg-gradient-to-br from-teal-500 to-cyan-600",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 17,
    type: "feature",
    title: "Innovation mindset",
    subtitle: "Creative Thinking",
    icon: Lightbulb,
    background: "bg-gradient-to-br from-yellow-300 to-orange-400",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 18,
    type: "text",
    title: "Mastering difficult conversations",
    subtitle: "Communication Skills",
    background: "bg-gradient-to-br from-red-400 to-pink-500",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 19,
    type: "profile",
    name: "Taylor Chen",
    role: "UX Researcher",
    image: "/lovable-uploads/08e527f0-3e20-4103-9e34-24e0167b01c1.png",
    background: "bg-gradient-to-br from-rose-50 to-pink-100",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 20,
    type: "feature",
    title: "Performance optimization",
    subtitle: "Productivity Boost",
    icon: TrendingUp,
    background: "bg-gradient-to-br from-green-500 to-emerald-600",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 21,
    type: "text",
    title: "Embracing change and uncertainty",
    subtitle: "Adaptability Focus",
    background: "bg-gradient-to-br from-indigo-300 to-purple-400",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 22,
    type: "feature",
    title: "Strategic thinking frameworks",
    subtitle: "Decision Making",
    icon: Brain,
    background: "bg-gradient-to-br from-amber-400 to-yellow-500",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 23,
    type: "profile",
    name: "Sam Rodriguez",
    role: "Marketing Lead",
    image: "/lovable-uploads/2784d252-c1b6-4ff9-ae34-370f82b38bb8.png",
    background: "bg-gradient-to-br from-blue-50 to-indigo-100",
    size: "medium",
    textColor: "text-gray-800"
  },
  {
    id: 24,
    type: "text",
    title: "Building resilient teams",
    subtitle: "Team Dynamics",
    background: "bg-gradient-to-br from-emerald-600 to-teal-700",
    size: "medium",
    textColor: "text-white"
  }
];

const MasonryGridSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const hoverDescription = "Interprets intent and returns curated internships, active mentors, and a learning path with three micro-courses. Sets up Papers for weekly micro-updates with a proof-of-work gallery and recommends relevant hackathons and portfolio review events. Guides the student toward a credible profile, mentor recommendation, and interview opportunities.";

  const renderCard = (item: typeof masonryItems[0]) => {
    const isHovered = hoveredCard === item.id;
    
    // Get title and subtitle based on card type
    const getCardContent = () => {
      if (item.type === "profile") {
        return { title: item.name, subtitle: item.role };
      }
      return { title: item.title, subtitle: item.subtitle };
    };

    const { title, subtitle } = getCardContent();

    return (
      <div
        key={item.id}
        className="backdrop-blur-md bg-white/5 border border-white/10 h-[280px] text-white rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer"
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {isHovered ? (
          <div className="flex items-center justify-center h-full px-2">
            <p className="font-body text-sm leading-relaxed text-white/90 text-center">
              {hoverDescription}
            </p>
          </div>
        ) : (
          <>
            <div className="text-left">
              <h3 className="font-instrument text-sm md:text-base lg:text-lg font-medium leading-tight line-clamp-3">
                {title}
              </h3>
            </div>
            
            {subtitle && (
              <div className="text-left">
                <span className="text-xs text-white/80 font-body block">
                  {subtitle}
                </span>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <Section background="transparent" className="bg-black">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <GlassmorphismChip>Who is this for?</GlassmorphismChip>
        </div>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          A Comprehensive Professional Ecosystem,<br />
          Built for Every Part of the Professional World
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {masonryItems.map(renderCard)}
      </div>
    </Section>
  );
};

export default MasonryGridSection;