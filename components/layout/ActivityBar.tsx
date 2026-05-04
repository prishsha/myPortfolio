"use client";

import { TabId } from "@/types";

interface ActivityBarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const activityItems: { id: TabId | "sidebar"; label: string; icon: JSX.Element }[] = [
  {
    id: "sidebar",
    label: "Explorer",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const bottomItems = [
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ActivityBar({ activeTab, onTabChange, sidebarOpen, onToggleSidebar }: ActivityBarProps) {
  return (
    <div className="flex flex-col items-center w-12 bg-[#333333] border-r border-[#252526] flex-shrink-0 py-1 z-40">
      {/* Top items */}
      <div className="flex flex-col items-center gap-0.5 flex-1">
        {activityItems.map((item) => {
          const isActive =
            item.id === "sidebar" ? sidebarOpen : activeTab === (item.id as TabId);

          return (
            <button
              key={item.id}
              title={item.label}
              onClick={() => {
                if (item.id === "sidebar") {
                  onToggleSidebar();
                } else {
                  onTabChange(item.id as TabId);
                }
              }}
              className={`
                relative group w-10 h-10 flex items-center justify-center rounded
                transition-colors duration-150 cursor-pointer
                ${isActive
                  ? "text-white"
                  : "text-[#858585] hover:text-[#cccccc]"
                }
              `}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-white rounded-r" />
              )}
              {item.icon}

              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-2 py-1 bg-[#252526] border border-[#3c3c3c] text-[11px] text-[#cccccc] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom items */}
      <div className="flex flex-col items-center gap-0.5 pb-1">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            title={item.label}
            className="relative group w-10 h-10 flex items-center justify-center text-[#858585] hover:text-[#cccccc] transition-colors cursor-pointer rounded"
          >
            {item.icon}
            <span className="absolute left-full ml-3 px-2 py-1 bg-[#252526] border border-[#3c3c3c] text-[11px] text-[#cccccc] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
