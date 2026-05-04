"use client";

import { useState } from "react";
import { TabId, Tab } from "@/types";

interface TabBarProps {
  tabs: Tab[];
  activeTab: TabId;
  openTabs: TabId[];
  onTabChange: (tab: TabId) => void;
  onTabClose: (tab: TabId) => void;
}

export default function TabBar({ tabs, activeTab, openTabs, onTabChange, onTabClose }: TabBarProps) {
  const visibleTabs = tabs.filter((t) => openTabs.includes(t.id));

  return (
    <div className="flex items-end bg-[#2d2d2d] border-b border-[#252526] overflow-x-auto flex-shrink-0 min-h-[35px]">
      {visibleTabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <div
            key={tab.id}
            className={`
              group relative flex items-center gap-2 px-4 h-[35px] text-[12px] cursor-pointer
              flex-shrink-0 border-r border-[#252526] transition-colors duration-100
              ${isActive
                ? "bg-[#1e1e1e] text-[#ffffff] border-t-2 border-t-[#007acc]"
                : "bg-[#2d2d2d] text-[#858585] hover:bg-[#1e1e1e] hover:text-[#cccccc] border-t-2 border-t-transparent"
              }
            `}
            onClick={() => onTabChange(tab.id)}
          >
            <span style={{ color: tab.iconColor }} className="text-[10px] flex-shrink-0">
              {tab.icon}
            </span>
            <span className="whitespace-nowrap">{tab.filename}</span>

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className={`
                w-4 h-4 flex items-center justify-center rounded text-[11px]
                hover:bg-[#3c3c3c] hover:text-white transition-colors ml-1 flex-shrink-0
                ${isActive ? "opacity-70 hover:opacity-100" : "opacity-0 group-hover:opacity-70 hover:!opacity-100"}
              `}
            >
              ✕
            </button>
          </div>
        );
      })}

      {/* Breadcrumb right side */}
      <div className="ml-auto flex items-center px-3 text-[11px] text-[#858585] whitespace-nowrap self-center">
        <span className="hidden lg:inline">portfolio</span>
        <span className="hidden lg:inline mx-1 text-[#555]">/</span>
        <span className="hidden lg:inline">pages</span>
        <span className="hidden lg:inline mx-1 text-[#555]">/</span>
        <span className="text-[#cccccc]">{activeTab}</span>
      </div>
    </div>
  );
}
