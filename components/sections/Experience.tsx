"use client";

import { experience } from "@/lib/data";
import LineNumbers from "@/components/ui/LineNumbers";
import TechBadge from "@/components/ui/TechBadge";
import { useState } from "react";

const totalLines = 6 + experience.length * 14;

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experience[active];

  return (
    <div className="flex h-full overflow-hidden">
      <LineNumbers count={totalLines} />

      <div className="flex-1 overflow-y-auto pt-4 pb-16 pr-4 text-[13px] leading-[1.6rem]">
        {/* File header */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-comment">// experience.json — work history</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-plain">{"["}</span>
        </div>

        {/* JSON-style code lines */}
        {experience.map((e, i) => (
          <div key={i}>
            <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
              <span className="token-plain pl-4">{"{"}</span>
            </div>
            <div
              className="hover:bg-[#2a2d2e] px-2 rounded-sm cursor-pointer"
              onClick={() => setActive(i)}
            >
              <span className="token-plain pl-8" />
              <span className="token-property">"company"</span>
              <span className="token-plain">: </span>
              <span style={{ color: e.color }} className="font-semibold cursor-pointer hover:underline">
                "{e.company}"
              </span>
              <span className="token-plain">,</span>
            </div>
            <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
              <span className="token-plain pl-8" />
              <span className="token-property">"role"</span>
              <span className="token-plain">: </span>
              <span className="token-string">"{e.role}"</span>
              <span className="token-plain">,</span>
            </div>
            <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
              <span className="token-plain pl-8" />
              <span className="token-property">"period"</span>
              <span className="token-plain">: </span>
              <span className="token-string">"{e.period}"</span>
            </div>
            <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
              <span className="token-plain pl-4">{"}"}</span>
              {i < experience.length - 1 && <span className="token-plain">,</span>}
            </div>
          </div>
        ))}

        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm mb-6">
          <span className="token-plain">{"]"}</span>
        </div>

        {/* Visual detail panel */}
        <div className="ml-2 border-l-2 border-[#3c3c3c] pl-4 mb-4">
          <div className="text-[11px] text-[#6a9955] italic mb-4">
            // ↓ click a company above to expand · currently viewing: {exp.company}
          </div>

          {/* Tab switcher */}
          <div className="flex gap-0 mb-4 border-b border-[#3c3c3c]">
            {experience.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-4 py-1.5 text-[12px] border-b-2 transition-colors -mb-px ${
                  active === i
                    ? "border-b-[#007acc] text-white bg-[#1e1e1e]"
                    : "border-b-transparent text-[#858585] hover:text-[#cccccc]"
                }`}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div
            key={active}
            className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5 max-w-2xl"
            style={{ borderLeftColor: exp.color, borderLeftWidth: 3 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-white font-bold text-[15px]">{exp.role}</h3>
                <p className="font-semibold text-[13px] mt-0.5" style={{ color: exp.color }}>
                  {exp.company}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[12px] text-[#cccccc] font-mono">{exp.period}</div>
                <div className="text-[11px] text-[#858585] mt-0.5">📍 {exp.location}</div>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((d, j) => (
                <li key={j} className="flex items-start gap-2 text-[12px] text-[#cccccc]">
                  <span className="text-[#569cd6] mt-0.5 flex-shrink-0">▸</span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <TechBadge key={t} tech={t} small />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
