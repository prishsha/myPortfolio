"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import LineNumbers from "@/components/ui/LineNumbers";

type FormField = "name" | "email" | "subject" | "message";

const totalLines = 35;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<FormField | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field: FormField) => `
    w-full bg-[#1e1e1e] border rounded px-3 py-1.5 text-[13px] font-mono
    text-[#d4d4d4] placeholder-[#4a4a4a] outline-none transition-colors
    ${focused === field ? "border-[#007acc]" : "border-[#3c3c3c] hover:border-[#464647]"}
  `;

  return (
    <div className="flex h-full overflow-hidden">
      <LineNumbers count={totalLines} />

      <div className="flex-1 overflow-y-auto pt-4 pb-16 pr-4 text-[13px] leading-[1.6rem]">
        {/* Code header */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-comment">// contact.ts — get in touch</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-keyword">const </span>
          <span className="token-variable">socials</span>
          <span className="token-plain"> = {"{"}</span>
        </div>
        {[
          { key: "github",   val: personalInfo.github,   color: "#cccccc" },
          { key: "linkedin", val: personalInfo.linkedin, color: "#0a66c2" },
          { key: "email",    val: personalInfo.email,    color: "#4ec9b0" },
        ].map(({ key, val, color }) => (
          <div key={key} className="hover:bg-[#2a2d2e] px-2 rounded-sm">
            <span className="token-plain pl-4" />
            <span className="token-property">{key}</span>
            <span className="token-plain">: </span>
            <a href={key === "email" ? `mailto:${val}` : val} target="_blank" rel="noopener noreferrer"
              className="hover:underline" style={{ color }}>
              "{val}"
            </a>
            <span className="token-plain">,</span>
          </div>
        ))}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm mb-2">
          <span className="token-plain">{"}"}</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>

        {/* Social quick links */}
        <div className="ml-2 flex flex-wrap gap-3 mb-8">
          {[
            { label: "GitHub", href: personalInfo.github, icon: "⌥", color: "#cccccc" },
            { label: "LinkedIn", href: personalInfo.linkedin, icon: "in", color: "#0a66c2" },
            { label: "Email", href: `mailto:${personalInfo.email}`, icon: "@", color: "#4ec9b0" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#252526] border border-[#3c3c3c] rounded-lg hover:border-[#569cd6] transition-all text-[12px] group"
            >
              <span className="font-bold transition-colors" style={{ color: s.color }}>{s.icon}</span>
              <span className="text-[#858585] group-hover:text-[#cccccc] transition-colors">{s.label}</span>
            </a>
          ))}
        </div>

        {/* Form as function call */}
        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-keyword">async function </span>
          <span className="token-function">sendMessage</span>
          <span className="token-plain">(</span>
          <span className="token-variable">payload</span>
          <span className="token-plain">: </span>
          <span className="token-type">MessagePayload</span>
          <span className="token-plain">) {"{"}</span>
        </div>
        <div className="min-h-[1.6rem]">&nbsp;</div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="ml-2 max-w-lg space-y-4 mb-8">
            {/* Name */}
            <div>
              <label className="block text-[11px] text-[#858585] mb-1 uppercase tracking-wider">
                <span className="token-comment">// name</span>
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                required
                className={inputClass("name")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] text-[#858585] mb-1 uppercase tracking-wider">
                <span className="token-comment">// email</span>
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
                className={inputClass("email")}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[11px] text-[#858585] mb-1 uppercase tracking-wider">
                <span className="token-comment">// subject</span>
              </label>
              <input
                type="text"
                placeholder="Let's build something together"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                required
                className={inputClass("subject")}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] text-[#858585] mb-1 uppercase tracking-wider">
                <span className="token-comment">// message</span>
              </label>
              <textarea
                rows={5}
                placeholder="Hi Prisha, I'd love to chat about..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                className={`${inputClass("message")} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2 bg-[#007acc] hover:bg-[#1a8fd1] text-white rounded text-[13px] font-mono transition-colors cursor-pointer"
            >
              <span>▶</span>
              <span>sendMessage(payload)</span>
            </button>
          </form>
        ) : (
          <div className="ml-2 max-w-lg mb-8">
            <div className="bg-[#1e3a1e] border border-[#4ec9b0] rounded-lg p-5">
              <div className="flex items-center gap-2 text-[#4ec9b0] mb-2">
                <span>✓</span>
                <span className="font-semibold">Message sent successfully</span>
              </div>
              <p className="text-[#858585] text-[12px]">
                Thanks for reaching out, <span className="text-[#cccccc]">{form.name}</span>!
                I'll get back to you at <span className="text-[#cccccc]">{form.email}</span> soon.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:"", email:"", subject:"", message:"" }); }}
                className="mt-3 text-[11px] text-[#858585] hover:text-[#cccccc] underline"
              >
                send another
              </button>
            </div>
          </div>
        )}

        <div className="hover:bg-[#2a2d2e] px-2 rounded-sm">
          <span className="token-plain">{"}"}</span>
        </div>
      </div>
    </div>
  );
}
