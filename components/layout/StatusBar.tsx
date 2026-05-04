"use client";

import { TabId } from "@/types";
import { personalInfo } from "@/lib/data";

interface StatusBarProps {
  activeTab: TabId;
  lineCount: number;
}

const langMap: Record<TabId, string> = {
  about:      "TypeScript React",
  skills:     "TypeScript",
  projects:   "TypeScript React",
  experience: "JSON",
  education:  "Markdown",
  contact:    "TypeScript",
};

const encodingMap: Record<TabId, string> = {
  about:      "UTF-8",
  skills:     "UTF-8",
  projects:   "UTF-8",
  experience: "UTF-8",
  education:  "UTF-8",
  contact:    "UTF-8",
};

export default function StatusBar({ activeTab, lineCount }: StatusBarProps) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="flex items-center h-[22px] bg-[#007acc] text-white text-[11px] flex-shrink-0 select-none overflow-hidden">
      {/* Left side */}
      <div className="flex items-center h-full">
        <div className="flex items-center gap-1.5 px-3 h-full bg-[#007acc] hover:bg-[#1a8fd1] cursor-pointer transition-colors">
          <span>⎇</span>
          <span>main</span>
        </div>
        <div className="flex items-center gap-1 px-3 h-full hover:bg-[#1a8fd1] cursor-pointer transition-colors">
          <span>✓</span>
          <span>0</span>
          <span className="ml-1">⚠</span>
          <span>0</span>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right side */}
      <div className="flex items-center h-full divide-x divide-[#1a8fd1]">
        <div className="px-3 h-full flex items-center hover:bg-[#1a8fd1] cursor-pointer transition-colors">
          Ln {lineCount}, Col 1
        </div>
        <div className="px-3 h-full flex items-center hover:bg-[#1a8fd1] cursor-pointer transition-colors">
          Spaces: 2
        </div>
        <div className="px-3 h-full flex items-center hover:bg-[#1a8fd1] cursor-pointer transition-colors">
          {encodingMap[activeTab]}
        </div>
        <div className="px-3 h-full flex items-center hover:bg-[#1a8fd1] cursor-pointer transition-colors">
          {langMap[activeTab]}
        </div>
        <div className="hidden sm:flex px-3 h-full items-center hover:bg-[#1a8fd1] cursor-pointer transition-colors">
          {personalInfo.name}
        </div>
        <div className="hidden md:flex px-3 h-full items-center">
          {timeStr}
        </div>
      </div>
    </div>
  );
}
