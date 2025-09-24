import Section from "../Section";
import SectionChip from "../SectionChip";
import GlassCTAButton from "../ui/glass-cta-button";
import { Brain, Users, Target, Lightbulb, Zap, BookOpen, Network, TrendingUp } from "lucide-react";
import { useState } from "react";

const masonryItems = [
  {
    id: 1,
    type: "text",
    title: "Student and Learner",
    subtitle: "Prompt:",
    description: "Help me find summer internships in product design that accept beginners.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Interprets intent and returns curated internships, active mentors, and a learning path with three micro-courses. Sets up Papers for weekly micro-updates with a proof-of-work gallery and recommends relevant hackathons and portfolio review events. Guides the student toward a credible profile, mentor recommendation, and interview opportunities.",
    background: "bg-gradient-to-br from-pink-400 to-pink-600",
    image: "/persona-images/student-card.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 2,
    type: "text",
    title: "Recent Graduate / Early-Career Job Seeker",
    subtitle: "Prompt:",
    description: "Find entry-level data analyst roles in Bangalore that accept non-CS graduates.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Filters verified employers, maps coursework and Papers to role requirements, and proposes a one-week SQL + capstone prep path. Enables applying inside Profeshare, schedules a practice interview via partner integration, and routes the user to a virtual career fair. Shares Paper history with interested recruiters as proof of skills.",
    background: "bg-gradient-to-br from-blue-500 to-blue-700",
    image: "/persona-images/early-career-professional-2.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 3,
    type: "text",
    title: "Mid-Career Professional Seeking Growth or Change",
    subtitle: "Prompt:",
    description: "Show me staff-level tracks and the gaps in my profile.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Runs a gap analysis against role maps, highlighting missing architecture exposure, mentoring evidence, and cross-functional delivery. Builds a six-week growth plan, prompts a Paper series documenting a refactor project, and matches the user with a leadership cohort. Surfaces internal mobility and external roles with clear skill-to-role alignment.",
    background: "bg-gradient-to-br from-emerald-500 to-teal-600",
    image: "/persona-images/mid-career-professional.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 4,
    type: "text",
    title: "Senior Professional / Leader",
    subtitle: "Prompt:",
    description: "Surface rising PMs with evidence of zero-to-one work in fintech.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Shortlists talent based on Papers, verified histories, and cohort achievements. Creates a Watchlist, enables commenting on standout Papers, and publishes a challenge brief to attract collaborators. Supports mentorship clinics that issue credentials to participants and streamlines verified hiring inside Profeshare.",
    background: "bg-gradient-to-br from-purple-500 to-indigo-600",
    image: "/persona-images/senior-professional.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 5,
    type: "text",
    title: "Researcher / Academic",
    subtitle: "Prompt:",
    description: "I need two research interns for a computer vision project.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Generates a scoped project card with datasets, readings, and deliverables. Collects short Papers with experiments from applicants, supports peer-review shortlisting, and onboards interns with verified project records that log contributions. Publishes a preprint summary in Papers with citations and a timeline.",
    background: "bg-gradient-to-br from-orange-500 to-red-600",
    image: "/persona-images/researcher.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 6,
    type: "text",
    title: "Career Switcher / Returner to Work",
    subtitle: "Prompt:",
    description: "Map my operations experience to non-technical product roles. Show me the shortest path.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Designs a transition plan, highlights transferable signals, and outlines a three-week portfolio build in Papers using case narratives and artifacts from prior work. Enrolls the user in a return-to-work cohort with mentor feedback and routes tailored roles to hiring managers experienced with switchers. Verified identity and granular proof reduce employer risk.",
    background: "bg-gradient-to-br from-amber-500 to-yellow-600",
    image: "/persona-images/career-switcher.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 7,
    type: "text",
    title: "Independent Consultant / Freelancer",
    subtitle: "Prompt:",
    description: "Attract three clients in healthcare within 30 days.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Builds a services page from Papers and testimonials, proposes pricing anchors, and targets relevant communities. Recommends events where the consultant can present Paper-based case studies. Uses Recruiter Studio's client view for pipeline tracking and generates compliant contracts via partners. Tracks wins against a verified project log.",
    background: "bg-gradient-to-br from-cyan-500 to-blue-600",
    image: "/persona-images/freelancer-2.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 8,
    type: "text",
    title: "Creator / Author in Papers",
    subtitle: "Prompt:",
    description: "Recommend topics with high demand and low noise in analytics careers.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Surfaces white-space themes and schedules a Paper series with weekly prompts and opt-in peer reviewers. Grows audience inside the network, facilitates co-authoring cohort primers, and routes sponsor inquiries from verified employers. Consolidates the series into a signal-rich portfolio.",
    background: "bg-gradient-to-br from-rose-500 to-pink-600",
    image: "/persona-images/creator-author.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 9,
    type: "text",
    title: "Mentor / Advisor",
    subtitle: "Prompt:",
    description: "Offer a six-week mentorship on system design to a cohort of 20.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Scopes curriculum and expectations, opens applications, and scores candidate fit via portfolio signals rather than follower counts. Provides a mentor dashboard tracking goals, weekly Papers, and growth markers. Issues a verifiable credential at completion to both mentor and mentees.",
    background: "bg-gradient-to-br from-violet-500 to-purple-600",
    image: "/persona-images/mentor.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 10,
    type: "text",
    title: "Startup Founder / Small–Mid-Size Employer",
    subtitle: "Prompt:",
    description: "Hire a founding product designer who can ship fast and coach juniors.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Combines capability and coaching signals to shortlist candidates. Surfaces live Papers from design sprints and collaboration feedback from cohorts. Supplies structured interview packs and integrates assessment partners. Issues offers with verified identity and proof-of-work attachments to speed onboarding.",
    background: "bg-gradient-to-br from-lime-500 to-green-600",
    image: "/persona-images/startup-founder.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 11,
    type: "text",
    title: "Enterprise Employer / Business Unit Leader",
    subtitle: "Prompt:",
    description: "Build a continuous bench of machine learning engineers in three cities.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Creates a pipeline plan with role maps, required signals, and partner bootcamps for targeted upskilling. Uses Recruiter Studio for multi-location sourcing, diversity targets, and calibrated interviews. Forms internal cohorts with external mentors and reports on signal quality, ramp time, and retention risk based on Papers and cohort activity.",
    background: "bg-gradient-to-br from-slate-500 to-gray-700",
    image: "/persona-images/enterprises.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 12,
    type: "text",
    title: "Public Sector / Research Institute / Nonprofit Employer",
    subtitle: "Prompt:",
    description: "Staff a six-month data cleanup initiative with verified analysts and volunteers.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Builds a skills registry, verifies identities, and highlights volunteers with credible civic Papers. Orchestrates weekly micro-events and publishes a public progress Paper to improve transparency. Enables donors and auditors to review the verified work trail without accessing private systems.",
    background: "bg-gradient-to-br from-emerald-600 to-teal-700",
    image: "/persona-images/public-sector.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 13,
    type: "text",
    title: "Hiring Manager",
    subtitle: "Prompt:",
    description: "I need a shortlist of backend engineers who have shipped payment integrations.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Filters candidates by verified project Papers and peer endorsements referencing specific API work. Exposes commit-linked artifacts in candidate Papers and enables focused work trials through assessment partners. Compresses screening time by prioritizing signal over resumes.",
    background: "bg-gradient-to-br from-indigo-500 to-blue-700",
    image: "/persona-images/hiring-manager.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 14,
    type: "text",
    title: "In-House Recruiter / Talent Acquisition Team",
    subtitle: "Prompt:",
    description: "Fill 12 roles in data, design, and platform in one quarter.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Sets up calibrated role templates and structured outreach with automated de-duplication across cohorts and communities. Ties shared evaluation rubrics to Papers for consistent feedback. Provides weekly dashboards on funnel health, signal quality, and blockers to increase hiring speed and reduce offer declines.",
    background: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
    image: "/persona-images/inhouse-recruiter.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 15,
    type: "text",
    title: "Agency Recruiter / Hiring Partner",
    subtitle: "Prompt:",
    description: "Build a niche pipeline for green energy software roles.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Tags verified companies and talent with relevant Papers and learning histories. Stands up a branded client portal inside Profeshare, runs expert-led events to attract candidates, and manages multi-client pipelines with compliance-ready documentation in Recruiter Studio. Improves placement rates via sharper fit.",
    background: "bg-gradient-to-br from-teal-500 to-cyan-700",
    image: "/persona-images/agency-recruiter-hiring-partner.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 16,
    type: "text",
    title: "Campus Recruiter",
    subtitle: "Prompt:",
    description: "Run an internship drive for three universities and prevent spam applications.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Imports verified cohorts, auto-screens by skill signals and Papers, and schedules interviews at scale. Sends tailored prep paths to students and produces a results summary Paper that university partners can share internally.",
    background: "bg-gradient-to-br from-orange-400 to-red-500",
    image: "/persona-images/campus-recruiter.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 17,
    type: "text",
    title: "University / College Leadership and Departments",
    subtitle: "Prompt:",
    description: "Show program quality with verified student outcomes without manual reporting.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Aggregates anonymized signals from Papers, placements, and mentor feedback into a program dashboard. Supports capstone cohorts where students publish work in Papers, bringing transparency to outcomes. Enables recruiters to discover talent through the program's verified page.",
    background: "bg-gradient-to-br from-purple-400 to-violet-600",
    image: "/persona-images/university-college.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 18,
    type: "text",
    title: "Career Services / Placement Cell",
    subtitle: "Prompt:",
    description: "Place 200 students in core roles and reduce spam.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Builds role-targeted prep tracks, standardizes profile signals, and hosts structured employer showcases through Events. Surfaces cohort-level and individual interview readiness. Delivers verified, role-aligned candidate lists to employers.",
    background: "bg-gradient-to-br from-yellow-500 to-orange-600",
    image: "/persona-images/placement-cell.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 19,
    type: "text",
    title: "Faculty / Program Director / Research Supervisor",
    subtitle: "Prompt:",
    description: "Guide a project-based course and evaluate learning through real artifacts.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Runs the course as a curated cohort inside Profeshare. Prompts weekly Papers with data, code, and reflections. Uses peer review and calibrated rubrics for grading, highlights standout work to recruiters, and reduces faculty workload while improving assessment quality.",
    background: "bg-gradient-to-br from-green-500 to-emerald-600",
    image: "/persona-images/project-director.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 20,
    type: "text",
    title: "Bootcamp / MOOC / Certification Provider",
    subtitle: "Prompt:",
    description: "Guarantee hiring outcomes without inflating promises.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Aligns curriculum with verified role maps and tracks learner progress via Papers and assessments. Issues signal-rich graduate profiles that employers trust. Runs alumni cohorts and hosts employer mixers through Events, reinforcing hiring partner confidence.",
    background: "bg-gradient-to-br from-red-500 to-rose-600",
    image: "/persona-images/bootcamp-certificate-provider.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 21,
    type: "text",
    title: "Alumni / Community Champion",
    subtitle: "Prompt:",
    description: "Open doors for 10 juniors in robotics this semester.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Suggests mentees with relevant Papers and sets up a four-week challenge cohort. Schedules two events, routes internship leads, and enables endorsements gated by rigor thresholds. Records measurable community impact on the alumnus profile.",
    background: "bg-gradient-to-br from-sky-500 to-blue-600",
    image: "/persona-images/alumni-community.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 22,
    type: "text",
    title: "Subject-Matter Expert / Peer Reviewer",
    subtitle: "Prompt:",
    description: "Improve the quality bar in cloud architecture content.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Routes topic-matching Papers to the SME for structured review using calibrated rubrics that become visible signals on author profiles. Awards reputation credits that influence search ranking and cohort invitations, lifting topic-wide quality over time.",
    background: "bg-gradient-to-br from-amber-400 to-yellow-500",
    image: "/persona-images/peer-review.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 23,
    type: "text",
    title: "Event Organizer / Host",
    subtitle: "Prompt:",
    description: "Run a monthly AI career salon with tangible outcomes.",
    hoverTitle: "What Profeshare AI does:",
    hoverDescription: "Recommends high-signal speakers and designs a format that ends with specific actions such as drafting a Paper or joining a mentor group. Verifies attendance and captures outcomes in a shared Paper so the event compounds value beyond a single session.",
    background: "bg-gradient-to-br from-pink-500 to-rose-600",
    image: "/persona-images/event-organizer-host.jpg",
    size: "medium",
    textColor: "text-white"
  },
  {
    id: 24,
    type: "text",
    title: "And, We Have More...",
    subtitle: "",
    description: "",
    hoverTitle: "",
    hoverDescription: "",
    background: "bg-gradient-to-br from-slate-500 to-gray-700",
    image: "/persona-images/and-more.jpg",
    size: "medium",
    textColor: "text-white",
    isAndMore: true
  }
];

const PersonasSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const renderCard = (item: typeof masonryItems[0]) => {
    const isHovered = hoveredCard === item.id;
    
    // Get title and subtitle for text cards
    const { title, subtitle } = { title: item.title, subtitle: item.subtitle };

    // Determine if this card has an image background
    const hasImage = item.image;
    
    // Base card styles (without border for image cards)
    const baseCardClasses = hasImage 
      ? "h-[320px] text-white rounded-2xl p-4 flex flex-col justify-between shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      : "h-[320px] text-white rounded-2xl p-4 flex flex-col justify-between shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-white/10";
    
    // Background styles - image or gradient
    const backgroundStyles = hasImage ? {
      backgroundImage: `url(${item.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    } : {};
    
    // Background classes - different for image vs gradient cards
    const backgroundClasses = hasImage 
      ? "relative" 
      : "backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-white/20";

    return (
      <div
        key={item.id}
        className={`${baseCardClasses} ${backgroundClasses}`}
        style={backgroundStyles}
        onMouseEnter={() => !(item as any).isAndMore && setHoveredCard(item.id)}
        onMouseLeave={() => !(item as any).isAndMore && setHoveredCard(null)}
      >
        {/* Image overlay - only for image cards */}
        {hasImage && (
          <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
            (item as any).isAndMore 
              ? 'bg-gradient-to-b from-black/75 via-black/60 to-black/75'
              : isHovered 
                ? 'bg-gradient-to-b from-black/85 via-black/55 to-black/85' 
                : 'bg-gradient-to-b from-black/70 via-transparent to-black/70'
          }`} />
        )}
        
        {/* Content wrapper for image cards to ensure proper layering */}
        <div className={`relative z-10 flex flex-col justify-between h-full ${hasImage ? '' : ''}`}>
        {(item as any).isAndMore ? (
          // Special handling for "And More..." card
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <h3 className="font-instrument text-lg md:text-xl lg:text-2xl font-medium text-center leading-tight">
              And,<br />We Have More...
            </h3>
            <GlassCTAButton size="md">
              Join Waitlist
            </GlassCTAButton>
          </div>
        ) : isHovered ? (
          <>
            <div className="text-left">
              <h3 className="font-instrument text-sm md:text-base lg:text-lg font-medium leading-tight line-clamp-3">
                {title}
              </h3>
            </div>
            
            <div className="text-left">
              {item.hoverTitle && (
                <p className="font-body text-xs leading-tight md:leading-snug lg:leading-relaxed text-white mb-2">
                  {item.hoverTitle}
                </p>
              )}
              <p className="font-body text-xs leading-tight md:leading-snug lg:leading-relaxed text-white/90">
                {item.hoverDescription}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-left">
              <h3 className="font-instrument text-sm md:text-base lg:text-lg font-bold leading-tight line-clamp-3">
                {title}
              </h3>
            </div>
            
            <div className="text-left">
              {subtitle && (
                <span className="text-xs text-white font-body block mb-1">
                  {subtitle}
                </span>
              )}
              {item.description && (
                <span className="text-xs text-white/80 font-body block">
                  {item.description}
                </span>
              )}
            </div>
          </>
        )}
        </div>
      </div>
    );
  };

  return (
    <Section id="personas-section" background="transparent">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <SectionChip>
            What you can do inside?
          </SectionChip>
        </div>
        {/* Mobile/Tablet version - Three lines */}
        <h2 className="lg:hidden font-instrument text-3xl md:text-4xl font-medium text-white mb-4">
          <span className="block">We Are Working With</span>
          <span className="block">A Wide Range of Personas</span>
          <span className="block">Explore What You Can Do Inside</span>
        </h2>
        
        {/* Desktop version - Original layout */}
        <h2 className="hidden lg:block font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          We Are Working With Wide Range of Personas<br />
          Explore What You Can Do Inside
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {masonryItems.map(renderCard)}
      </div>
    </Section>
  );
};

export default PersonasSection;