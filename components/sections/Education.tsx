"use client";

import { education } from "@/lib/data";
import LineNumbers from "@/components/ui/LineNumbers";

const totalLines = 8 + education.length * 12;

export default function Education() {
  return (
    <div className="flex h-full overflow-hidden">
      <LineNumbers count={totalLines} />

      <div className="flex-1 overflow-y-auto pt-4 pb-16 pr-4 text-[13px] leading-[1.6rem]">
        {/* Markdown-style header */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-comment"># education.md</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="text-[#569cd6]">## </span>
          <span className="text-white font-semibold">Academic Background</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-comment">&gt; Lifelong learner. Builder. Always in beta.</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>

        {/* Markdown entries */}
        {education.map((edu, i) => (
          <div key={i} className="mb-2">
            <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
              <span className="text-[#569cd6]">### </span>
              <span className="font-semibold" style={{ color: edu.color }}>{edu.institution}</span>
            </div>
            <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
              <span className="token-plain text-[#cccccc]">**{edu.degree}** </span>
              <span className="token-comment">· {edu.period}</span>
            </div>
            {edu.gpa && (
              <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
                <span className="token-comment">GPA: {edu.gpa}</span>
              </div>
            )}
            {edu.highlights.map((h, j) => (
              <div key={j} className="hover:bg-[#2a2d2e] px-2 rounded-sm">
                <span className="token-plain text-[#858585]">- {h}</span>
              </div>
            ))}
            <div className="min-h-[1.6rem]">&nbsp;</div>
          </div>
        ))}

        {/* Visual cards */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-comment">{"<!-- rendered -->"}</span>
        </div>
        <div className="ml-2 mt-4 flex flex-col gap-4 max-w-2xl pb-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5 hover:border-[#464647] transition-colors"
              style={{ borderLeftColor: edu.color, borderLeftWidth: 3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-white font-bold text-[14px]">{edu.institution}</h3>
                  <p className="text-[12px] mt-0.5" style={{ color: edu.color }}>{edu.degree}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-[12px] font-mono text-[#cccccc]">{edu.period}</span>
                  {edu.gpa && (
                    <div className="text-[11px] text-[#dcdcaa] mt-0.5">GPA: {edu.gpa}</div>
                  )}
                </div>
              </div>

              <ul className="space-y-1.5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-[12px] text-[#858585]">
                    <span style={{ color: edu.color }} className="flex-shrink-0 mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
