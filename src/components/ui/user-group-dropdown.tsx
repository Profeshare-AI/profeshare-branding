import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

const userGroups = [
  "Student (Undergraduate)",
  "Postgraduate Student", 
  "Recent Graduate (0–2 years experience)",
  "Early-Career Professional (2–5 years experience)",
  "Mid-Career or Senior Professional (5+ years experience)",
  "Recruiter / Talent Acquisition (Corporate, In-house, Agency)",
  "Company or Employer (Startups, SMEs, Enterprises)",
  "Freelancer / Independent Consultant",
  "Mentor / Advisor",
  "University / College Career Services",
  "Training Institute / Bootcamp",
  "Faculty / Instructor"
];

interface UserGroupDropdownProps {
  selectedGroup: string;
  onGroupSelect: (group: string) => void;
}

export const UserGroupDropdown = ({ selectedGroup, onGroupSelect }: UserGroupDropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center justify-between gap-2 rounded-lg border px-3 py-3 text-sm w-full font-tiktok-sans",
          "bg-white/10 backdrop-blur-md shadow-sm",
          "border-white/20",
          "text-white",
          "hover:bg-white/20 transition-all"
        )}
      >
        <span className="text-left flex-1">
          {selectedGroup || "Select what describes you the best..."}
        </span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={cn(
            "absolute left-0 bottom-full mb-2 w-full rounded-xl overflow-hidden z-50",
            "bg-black/95 backdrop-blur-xl",
            "shadow-lg border border-white/20",
            "animate-fade-in"
          )}
        >
          {userGroups.map((group) => (
            <button
              key={group}
              onClick={() => {
                onGroupSelect(group);
                setOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors font-tiktok-sans",
                selectedGroup === group
                  ? "font-semibold text-white bg-white/10"
                  : "text-white/90 hover:bg-white/10"
              )}
            >
              <span className="flex-1">{group}</span>
              {selectedGroup === group && (
                <Check className="h-4 w-4 text-white" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};