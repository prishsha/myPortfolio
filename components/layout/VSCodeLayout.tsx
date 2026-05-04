"use client";

import { useState, useCallback } from "react";
import { TabId, Tab } from "@/types";

import TitleBar from "./TitleBar";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";
import MobileNav from "./MobileNav";

import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

const ALL_TABS: Tab[] = [
  { id: "about",      label: "About",      filename: "about.tsx",      icon: "◈", iconColor: "#e8d44d" },
  { id: "skills",     label: "Skills",     filename: "skills.ts",      icon: "⟨⟩", iconColor: "#519aba" },
  { id: "projects",   label: "Projects",   filename: "projects.tsx",   icon: "◆", iconColor: "#a074c4" },
  { id: "experience", label: "Experience", filename: "experience.json", icon: "{}", iconColor: "#4ec9b0" },
  { id: "education",  label: "Education",  filename: "education.md",   icon: "#", iconColor: "#f1502f" },
  { id: "contact",    label: "Contact",    filename: "contact.ts",     icon: "@", iconColor: "#cbcb41" },
];

const lineCounts: Record<TabId, number> = {
  about: 19, skills: 48, projects: 42, experience: 38, education: 30, contact: 35,
};

const sectionComponents: Record<TabId, React.ComponentType> = {
  about:      About,
  skills:     Skills,
  projects:   Projects,
  experience: Experience,
  education:  Education,
  contact:    Contact,
};

export default function VSCodeLayout() {
  const [activeTab, setActiveTab]     = useState<TabId>("about");
  const [openTabs, setOpenTabs]       = useState<TabId[]>(["about"]);
  const [sidebarOpen, setSidebarOpen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  const handleTabChange = useCallback((tab: TabId) => {
    setActiveTab(tab);
    setOpenTabs((prev) => (prev.includes(tab) ? prev : [...prev, tab]));
  }, []);

  const handleTabClose = useCallback((tab: TabId) => {
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== tab);
      if (activeTab === tab && next.length > 0) {
        setActiveTab(next[next.length - 1]);
      }
      return next;
    });
  }, [activeTab]);

  const ActiveSection = sectionComponents[activeTab];

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#1e1e1e] select-text">
      {/* Title bar */}
      <TitleBar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity bar */}
        <ActivityBar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((p) => !p)}
        />

        {/* Sidebar */}
        <Sidebar
          tabs={ALL_TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          open={sidebarOpen}
        />

        {/* Editor area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Tab bar */}
          <TabBar
            tabs={ALL_TABS}
            activeTab={activeTab}
            openTabs={openTabs}
            onTabChange={handleTabChange}
            onTabClose={handleTabClose}
          />

          {/* Editor content */}
          <div className="flex-1 overflow-hidden relative bg-[#1e1e1e]">
            {/* Indent guides (decorative) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
              {[64, 96, 128, 160, 192].map((x) => (
                <div key={x} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: x }} />
              ))}
            </div>

            {/* Active section */}
            <div key={activeTab} className="h-full animate-[fadeIn_0.2s_ease_forwards]">
              <ActiveSection />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <MobileNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Status bar */}
      <StatusBar activeTab={activeTab} lineCount={lineCounts[activeTab]} />
    </div>
  );
}
