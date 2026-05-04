"use client";

import { personalInfo } from "@/lib/data";

export default function TitleBar() {
  const menus = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

  return (
    <div className="flex items-center h-[30px] bg-[#3c3c3c] border-b border-[#252526] select-none flex-shrink-0 relative z-50">
      {/* Traffic lights */}
      <div className="flex items-center gap-[6px] px-3 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-125 transition-all cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-125 transition-all cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-125 transition-all cursor-pointer" />
      </div>

      {/* Menu bar */}
      <div className="hidden md:flex items-center gap-0 ml-1">
        {menus.map((m) => (
          <span
            key={m}
            className="px-2 py-0.5 text-[12px] text-[#cccccc] hover:bg-white/10 rounded cursor-pointer transition-colors"
          >
            {m}
          </span>
        ))}
      </div>

      {/* Centered title */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-[12px] text-[#9d9d9d] pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 100 100" className="flex-shrink-0">
          <path d="M74.5 8.5L25.5 50l49 41.5V67.5L45 50l29.5-17.5V8.5z" fill="#007acc" />
          <path d="M25.5 8.5v83l-17-8.5V17L25.5 8.5z" fill="#007acc" opacity=".6" />
        </svg>
        <span className="hidden sm:inline">
          {personalInfo.name} — {personalInfo.title}
        </span>
        <span className="sm:hidden">portfolio.tsx</span>
      </div>

      {/* Right controls placeholder */}
      <div className="ml-auto flex items-center px-2 gap-1">
        <div className="w-4 h-4 flex items-center justify-center text-[#858585] hover:text-[#cccccc] cursor-pointer text-[14px]">
          —
        </div>
        <div className="w-4 h-4 flex items-center justify-center text-[#858585] hover:text-[#cccccc] cursor-pointer text-[10px] border border-[#858585]">
          □
        </div>
        <div className="w-4 h-4 flex items-center justify-center text-[#858585] hover:text-[#f44747] cursor-pointer text-[14px]">
          ✕
        </div>
      </div>
    </div>
  );
}
