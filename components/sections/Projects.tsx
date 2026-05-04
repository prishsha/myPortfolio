"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import LineNumbers from "@/components/ui/LineNumbers";
import TechBadge from "@/components/ui/TechBadge";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const totalLines = 8 + filtered.length * 9;

  return (
    <div className="flex h-full overflow-hidden">
      <LineNumbers count={totalLines} />

      <div className="flex-1 overflow-y-auto pt-4 pb-16 pr-4 text-[13px] leading-[1.6rem]">
        {/* Header code */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-comment">// projects.tsx — open source &amp; side projects</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-keyword">import </span>
          <span className="token-plain">{"{ "}</span>
          <span className="token-variable">Star</span>
          <span className="token-plain">{", "}</span>
          <span className="token-variable">ExternalLink</span>
          <span className="token-plain">{", "}</span>
          <span className="token-variable">Github</span>
          <span className="token-plain">{" } "}</span>
          <span className="token-keyword">from </span>
          <span className="token-string">"lucide-react"</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>

        {/* Filter toggle — as a "config" line */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm flex items-center gap-2">
          <span className="token-keyword">const </span>
          <span className="token-variable">filter</span>
          <span className="token-plain"> = </span>
          <span className="token-string">
            "
            <button
              onClick={() => setFilter("all")}
              className={`hover:underline ${filter === "all" ? "text-[#ce9178]" : "text-[#858585] hover:text-[#ce9178]"}`}
            >
              all
            </button>
            {" | "}
            <button
              onClick={() => setFilter("featured")}
              className={`hover:underline ${filter === "featured" ? "text-[#ce9178]" : "text-[#858585] hover:text-[#ce9178]"}`}
            >
              featured
            </button>
            "
          </span>
          <span className="token-comment ml-2">// click to filter</span>
        </div>

        <div className="min-h-[1.6rem]">&nbsp;</div>

        {/* Project cards */}
        <div className="ml-2 grid grid-cols-1 lg:grid-cols-2 gap-4 pb-8">
          {filtered.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="group bg-[#252526] border border-[#3c3c3c] rounded-lg overflow-hidden hover:border-[#464647] transition-all duration-200"
                style={{ borderTopColor: project.color, borderTopWidth: 2 }}
              >
                {/* Card header */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[16px]" style={{ color: project.color }}>◆</span>
                      <h3 className="font-bold text-white text-[14px] font-mono">
                        {project.name}
                        <span className="text-[#858585] font-normal">.tsx</span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#2d2d2d] border border-[#dcdcaa] text-[#dcdcaa] rounded">
                          featured
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-[#858585] text-[12px] leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <TechBadge key={t} tech={t} small />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[12px] text-[#858585] hover:text-[#cccccc] transition-colors"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>source</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[12px] text-[#569cd6] hover:text-[#9cdcfe] transition-colors"
                      >
                        <span>↗</span>
                        <span>live demo</span>
                      </a>
                    )}
                    {!project.live && (
                      <span className="text-[11px] text-[#6a9955] italic">// private / WIP</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
