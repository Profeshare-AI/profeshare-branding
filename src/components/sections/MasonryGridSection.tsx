import Section from "../Section";
import GlassmorphismChip from "../GlassmorphismChip";
import { Brain, Users, Target, Lightbulb, Zap, BookOpen, Network, TrendingUp } from "lucide-react";

const masonryItems = [
  {
    id: 1,
    type: "text",
    title: "What shapes professional growth and success?",
    subtitle: "Interview",
    background: "bg-gradient-to-br from-pink-400 to-pink-600",
    size: "large",
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
    icon: Network,
    background: "bg-gradient-to-br from-indigo-500 to-purple-600",
    size: "large",
    textColor: "text-white"
  },
  {
    id: 5,
    type: "text",
    title: "Why our networks don't always serve us?",
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
    size: "small",
    textColor: "text-gray-800"
  },
  {
    id: 7,
    type: "feature",
    title: "From Perception to Action",
    subtitle: "Take It Out",
    icon: Target,
    background: "bg-gradient-to-br from-emerald-400 to-teal-500",
    size: "large",
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
    size: "large",
    textColor: "text-white"
  },
  {
    id: 11,
    type: "feature",
    title: "Hacks to boost your career!",
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
    size: "small",
    textColor: "text-gray-800"
  }
];

const MasonryGridSection = () => {
  const renderCard = (item: typeof masonryItems[0]) => {
    const sizeClasses = {
      small: "row-span-1",
      medium: "row-span-2", 
      large: "row-span-3"
    };

    return (
      <div
        key={item.id}
        className={`backdrop-blur-md bg-white/5 border border-white/10 ${sizeClasses[item.size]} text-white rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden`}
      >
        {item.type === "text" && (
          <div className="flex flex-col h-full justify-between">
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-instrument text-sm md:text-base lg:text-lg font-medium leading-tight mb-1 line-clamp-3">
                {item.title}
              </h3>
              {item.subtitle && (
                <span className="text-xs text-white/80 font-body mt-1">
                  {item.subtitle}
                </span>
              )}
            </div>
          </div>
        )}

        {item.type === "profile" && (
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center mb-2">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white/10 border border-white/20">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-instrument font-medium text-sm md:text-base text-white line-clamp-1">
                {item.name}
              </h4>
              <p className="text-xs text-white/80 font-body line-clamp-1">
                {item.role}
              </p>
            </div>
          </div>
        )}

        {item.type === "feature" && (
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-center mb-2">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <h3 className="font-instrument text-sm md:text-base font-medium leading-tight mb-1 text-white line-clamp-2">
                {item.title}
              </h3>
              {item.subtitle && (
                <span className="text-xs text-white/80 font-body line-clamp-1">
                  {item.subtitle}
                </span>
              )}
            </div>
          </div>
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[100px] md:auto-rows-[120px]">
        {masonryItems.map(renderCard)}
      </div>
    </Section>
  );
};

export default MasonryGridSection;