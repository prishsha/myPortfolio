"use client";

import { skills } from "@/lib/data";
import LineNumbers from "@/components/ui/LineNumbers";
import { useState } from "react";

const categoryColors: Record<string, string> = {
  Languages: "#569cd6",
  Frontend:  "#4ec9b0",
  Backend:   "#dcdcaa",
  DevOps:    "#ce9178",
  Tools:     "#c586c0",
};

const skillLevelMap: Record<string, number> = {
  TypeScript: 95, JavaScript: 92, Python: 78, Rust: 55, Go: 62, SQL: 80,
  React: 94, "Next.js": 91, "Tailwind CSS": 88, "Framer Motion": 75, Svelte: 60, GraphQL: 70,
  "Node.js": 88, Express: 82, FastAPI: 65, PostgreSQL: 76, Redis: 68, Prisma: 72,
  Docker: 74, "GitHub Actions": 80, Vercel: 85, AWS: 60, Terraform: 50, Linux: 72,
  "VS Code": 99, Git: 90, Figma: 65, Postman: 78, Storybook: 60, Vitest: 70,
};

const totalLines = Object.entries(skills).reduce((a, [, v]) => a + v.length + 3, 5);

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex h-full overflow-hidden">
      <LineNumbers count={totalLines} />

      <div className="flex-1 overflow-y-auto pt-4 pb-16 pr-4 text-[13px] leading-[1.6rem]">
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem]">
          <span className="token-comment">// skills.ts — tech stack &amp; proficiency</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem]">
          <span className="token-keyword">const </span>
          <span className="token-variable">stack</span>
          <span className="token-plain"> = </span>
          <span className="token-plain">{"{"}</span>
        </div>

        {Object.entries(skills).map(([category, techs]) => {
          const color = categoryColors[category] ?? "#d4d4d4";
          return (
            <div key={category}>
              <div className="min-h-[1.6rem]">&nbsp;</div>
              {/* Category key */}
              <div className="hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem]">
                <span className="pl-4" style={{ color }}>
                  {category}
                </span>
                <span className="token-plain">: [</span>
              </div>

              {/* Skill items as code + visual bar */}
              {techs.map((tech) => {
                const level = skillLevelMap[tech] ?? 70;
                const isHov = hovered === tech;
                return (
                  <div
                    key={tech}
                    className="hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem] flex items-center justify-between group cursor-default"
                    onMouseEnter={() => setHovered(tech)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="flex items-center gap-0">
                      <span className="token-plain pl-8">&nbsp;</span>
                      <span className="token-string">"{tech}"</span>
                      <span className="token-plain">,</span>
                    </div>
                    {/* Skill bar — appears on hover */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-4 pr-2">
                      <div className="w-24 h-1 bg-[#3c3c3c] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${level}%`, backgroundColor: color }}
                        />
                      </div>
                      <span className="text-[10px] text-[#858585] w-7 text-right">{level}%</span>
                    </div>
                  </div>
                );
              })}

              <div className="hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem]">
                <span className="token-plain pl-4">],</span>
              </div>
            </div>
          );
        })}

        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem]">
          <span className="token-plain">{"};"}</span>
        </div>

        <div className="min-h-[1.6rem]">&nbsp;</div>

        {/* Visual grid — "rendered" section */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem]">
          <span className="token-comment">// ↓ skill matrix</span>
        </div>

        <div className="mt-4 ml-2 grid grid-cols-2 md:grid-cols-3 gap-3 pb-8">
          {Object.entries(skills).map(([category, techs]) => {
            const color = categoryColors[category] ?? "#d4d4d4";
            return (
              <div
                key={category}
                className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-4 hover:border-[#464647] transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color }}>
                    {category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] bg-[#2d2d2d] border border-[#3c3c3c] rounded text-[#cccccc] hover:border-[#569cd6] hover:text-[#9cdcfe] transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
