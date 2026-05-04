"use client";

import { personalInfo } from "@/lib/data";
import LineNumbers from "@/components/ui/LineNumbers";

const lines = [
  { tokens: [{ t: "comment", v: "// about.tsx — Prisha Vadhavkar" }] },
  { tokens: [] },
  { tokens: [{ t: "keyword", v: "import" }, { t: "plain", v: " type " }, { t: "type", v: "Developer" }, { t: "plain", v: " from " }, { t: "string", v: '"@/types"' }] },
  { tokens: [] },
  { tokens: [{ t: "keyword", v: "const" }, { t: "plain", v: " " }, { t: "variable", v: "me" }, { t: "plain", v: ": " }, { t: "type", v: "Developer" }, { t: "plain", v: " = {" }] },
  { tokens: [{ t: "plain", v: "  " }, { t: "property", v: "name" }, { t: "plain", v: ": " }, { t: "string", v: `"${personalInfo.name}"` }, { t: "plain", v: "," }] },
  { tokens: [{ t: "plain", v: "  " }, { t: "property", v: "title" }, { t: "plain", v: ": " }, { t: "string", v: `"${personalInfo.title}"` }, { t: "plain", v: "," }] },
  { tokens: [{ t: "plain", v: "  " }, { t: "property", v: "location" }, { t: "plain", v: ": " }, { t: "string", v: `"${personalInfo.location}"` }, { t: "plain", v: "," }] },
  { tokens: [{ t: "plain", v: "  " }, { t: "property", v: "email" }, { t: "plain", v: ": " }, { t: "string", v: `"${personalInfo.email}"` }, { t: "plain", v: "," }] },
  { tokens: [{ t: "plain", v: "  " }, { t: "property", v: "available" }, { t: "plain", v: ": " }, { t: "keyword", v: "true" }, { t: "plain", v: "," }] },
  { tokens: [{ t: "plain", v: "};" }] },
  { tokens: [] },
  { tokens: [{ t: "comment", v: "/**" }] },
  { tokens: [{ t: "comment", v: ` * ${personalInfo.bio}` }] },
  { tokens: [{ t: "comment", v: " */" }] },
  { tokens: [] },
  { tokens: [{ t: "keyword", v: "export default function" }, { t: "plain", v: " " }, { t: "function", v: "About" }, { t: "plain", v: "() {" }] },
  { tokens: [{ t: "plain", v: "  " }, { t: "keyword", v: "return" }, { t: "plain", v: " <" }, { t: "type", v: "div" }, { t: "plain", v: " " }, { t: "property", v: "className" }, { t: "plain", v: '=' }, { t: "string", v: '"developer-card"' }, { t: "plain", v: ">;" }] },
  { tokens: [{ t: "plain", v: "}" }] },
];

export default function About() {
  return (
    <div className="flex h-full overflow-hidden">
      <LineNumbers count={lines.length + 20} />

      <div className="flex-1 overflow-y-auto pt-4 pb-16 pr-8">
        {/* Syntax lines */}
        <div className="mb-8 leading-[1.6rem] text-[13px]">
          {lines.map((line, i) => (
            <div key={i} className="flex hover:bg-[#2a2d2e] px-2 rounded-sm min-h-[1.6rem]">
              {line.tokens.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.tokens.map((tok, j) => (
                  <span key={j} className={`token-${tok.t}`}>{tok.v}</span>
                ))
              )}
            </div>
          ))}
        </div>

        {/* Visual card — rendered "output" */}
        <div className="ml-2 mt-6 border-l-2 border-[#3c3c3c] pl-6">
          <div className="text-[11px] text-[#6a9955] mb-4 italic">// ↓ rendered output</div>

          <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 max-w-2xl hover:border-[#569cd6] transition-colors duration-300">
            {/* Avatar + name */}
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#569cd6] to-[#4ec9b0] flex items-center justify-center text-[#1e1e1e] font-bold text-xl flex-shrink-0">
                {personalInfo.avatarInitials}
              </div>
              <div>
                <h2 className="text-[22px] font-bold text-white leading-tight">{personalInfo.name}</h2>
                <p className="text-[#4ec9b0] text-[14px] mt-0.5">{personalInfo.title}</p>
                <div className="flex items-center gap-1 mt-1 text-[#858585] text-[12px]">
                  <span>📍</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[#cccccc] text-[13px] leading-relaxed mb-6 border-l-2 border-[#569cd6] pl-3">
              {personalInfo.bio}
            </p>

            {/* Status badge */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#1e3a1e] border border-[#4ec9b0] rounded-full text-[#4ec9b0] text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ec9b0] animate-pulse" />
                Open to opportunities
              </span>
              <span className="px-3 py-1 bg-[#1e2a3a] border border-[#569cd6] rounded-full text-[#569cd6] text-[11px]">
                Full Stack
              </span>
              <span className="px-3 py-1 bg-[#2a1e3a] border border-[#c586c0] rounded-full text-[#c586c0] text-[11px]">
                Open Source
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "GitHub", href: personalInfo.github, icon: "⌥" },
                { label: "LinkedIn", href: personalInfo.linkedin, icon: "in" },
                { label: "Resume", href: personalInfo.resume, icon: "↓" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] border border-[#3c3c3c] rounded text-[#9cdcfe] text-[12px] hover:border-[#569cd6] hover:bg-[#2a2d3e] transition-all"
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
