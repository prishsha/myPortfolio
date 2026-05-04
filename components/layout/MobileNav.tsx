"use client";

import { TabId } from "@/types";

interface MobileNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: "about",      label: "About",  icon: "◈" },
  { id: "skills",     label: "Skills", icon: "⟨⟩" },
  { id: "projects",   label: "Proj",   icon: "◆" },
  { id: "experience", label: "Exp",    icon: "{}" },
  { id: "education",  label: "Edu",    icon: "#" },
  { id: "contact",    label: "Contact",icon: "@" },
];

export default function MobileNav({ activeTab, onTabChange }: MobileNavProps) {
  return (
    <div className="flex md:hidden items-center justify-around bg-[#2d2d2d] border-t border-[#3c3c3c] h-12 flex-shrink-0">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded transition-colors ${
            activeTab === tab.id ? "text-white" : "text-[#858585] hover:text-[#cccccc]"
          }`}
        >
          <span className="text-[12px]">{tab.icon}</span>
          <span className="text-[9px]">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
