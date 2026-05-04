"use client";

import { useState } from "react";
import { TabId, Tab } from "@/types";
import { personalInfo } from "@/lib/data";

interface SidebarProps {
  tabs: Tab[];
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  open: boolean;
}

const sections: { label: string; children: Tab[] }[] = [];

export default function Sidebar({ tabs, activeTab, onTabChange, open }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    portfolio: true,
    pages: true,
  });

  const toggle = (key: string) =>
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const fileIconColor: Record<TabId, string> = {
    about:      "#e8d44d",
    skills:     "#519aba",
    projects:   "#a074c4",
    experience: "#4ec9b0",
    education:  "#f1502f",
    contact:    "#cbcb41",
  };

  const fileExt: Record<TabId, string> = {
    about:      ".tsx",
    skills:     ".ts",
    projects:   ".tsx",
    experience: ".json",
    education:  ".md",
    contact:    ".ts",
  };

  return (
    <div
      className={`
        flex-shrink-0 bg-[#252526] border-r border-[#3c3c3c] flex flex-col
        transition-all duration-200 overflow-hidden
        ${open ? "w-[220px] min-w-[220px]" : "w-0 min-w-0"}
      `}
    >
      <div className="w-[220px] flex flex-col h-full">
        {/* Panel title */}
        <div className="px-4 py-2 text-[11px] font-semibold tracking-widest text-[#bbbbbb] uppercase flex-shrink-0 flex items-center justify-between">
          <span>Explorer</span>
          <span className="text-[#858585] text-[14px] cursor-pointer hover:text-[#cccccc]">···</span>
        </div>

        {/* PORTFOLIO root */}
        <div className="flex-1 overflow-y-auto text-[13px]">
          {/* Root folder */}
          <button
            onClick={() => toggle("portfolio")}
            className="w-full flex items-center gap-1 px-2 py-0.5 text-[#cccccc] hover:bg-[#2a2d2e] cursor-pointer"
          >
            <ChevronIcon open={expandedSections.portfolio} />
            <FolderIcon open={expandedSections.portfolio} />
            <span className="font-medium text-[#cccccc]">PORTFOLIO</span>
          </button>

          {expandedSections.portfolio && (
            <>
              {/* Pages subfolder */}
              <button
                onClick={() => toggle("pages")}
                className="w-full flex items-center gap-1 pl-5 pr-2 py-0.5 text-[#cccccc] hover:bg-[#2a2d2e] cursor-pointer"
              >
                <ChevronIcon open={expandedSections.pages} />
                <FolderIcon open={expandedSections.pages} />
                <span>pages</span>
              </button>

              {expandedSections.pages &&
                tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
                      w-full flex items-center gap-2 pl-10 pr-2 py-0.5 cursor-pointer transition-colors
                      ${activeTab === tab.id
                        ? "bg-[#094771] text-white"
                        : "text-[#cccccc] hover:bg-[#2a2d2e]"
                      }
                    `}
                  >
                    <span className="text-[10px]" style={{ color: fileIconColor[tab.id] }}>
                      {tab.icon}
                    </span>
                    <span className="truncate text-[12px]">
                      {tab.id}
                      <span className="text-[#858585]">{fileExt[tab.id]}</span>
                    </span>
                  </button>
                ))}

              {/* Other files */}
              <div className="pl-5 pr-2 py-0.5 text-[#858585] text-[12px] flex items-center gap-2 hover:bg-[#2a2d2e] cursor-default">
                <span className="pl-4 text-[10px]">⚙</span>
                <span>package.json</span>
              </div>
              <div className="pl-5 pr-2 py-0.5 text-[#858585] text-[12px] flex items-center gap-2 hover:bg-[#2a2d2e] cursor-default">
                <span className="pl-4 text-[10px]">⚙</span>
                <span>tsconfig.json</span>
              </div>
              <div className="pl-5 pr-2 py-0.5 text-[#858585] text-[12px] flex items-center gap-2 hover:bg-[#2a2d2e] cursor-default">
                <span className="pl-4 text-[10px]">📄</span>
                <span>README.md</span>
              </div>
            </>
          )}
        </div>

        {/* Bottom: git info */}
        <div className="border-t border-[#3c3c3c] px-3 py-2 text-[11px] text-[#858585]">
          <div className="flex items-center gap-1">
            <span>⎇</span>
            <span>main</span>
            <span className="ml-auto text-[#4ec9b0]">✓ clean</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10" height="10" viewBox="0 0 10 10"
      className={`flex-shrink-0 transition-transform ${open ? "rotate-90" : ""}`}
      fill="currentColor"
    >
      <path d="M3 2l4 3-4 3V2z" />
    </svg>
  );
}

function FolderIcon({ open }: { open: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      {open ? (
        <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" fill="#e8b97b" />
      ) : (
        <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" fill="#dcb56b" />
      )}
    </svg>
  );
}
