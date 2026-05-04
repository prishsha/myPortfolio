import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "Consolas", "monospace"],
      },
      colors: {
        vscode: {
          bg:           "#1e1e1e",
          "bg-secondary": "#252526",
          sidebar:      "#2c2c2c",
          "sidebar-hover": "#37373d",
          titlebar:     "#3c3c3c",
          tab:          "#2d2d2d",
          "tab-active": "#1e1e1e",
          statusbar:    "#007acc",
          "statusbar-hover": "#1a8fd1",
          border:       "#3c3c3c",
          "border-light": "#464647",
          text:         "#d4d4d4",
          "text-secondary": "#858585",
          "text-muted": "#6a6a6a",
          selection:    "#094771",
          "line-highlight": "#2a2d2e",
          scrollbar:    "#424242",
          // syntax tokens
          keyword:      "#569cd6",
          string:       "#ce9178",
          number:       "#b5cea8",
          comment:      "#6a9955",
          type:         "#4ec9b0",
          function:     "#dcdcaa",
          variable:     "#9cdcfe",
          operator:     "#d4d4d4",
          purple:       "#c586c0",
          red:          "#f44747",
          orange:       "#ff8c00",
        },
      },
      animation: {
        "cursor-blink": "blink 1.1s step-end infinite",
        "fade-in":      "fadeIn .4s ease forwards",
        "slide-in":     "slideIn .35s ease forwards",
        "slide-down":   "slideDown .25s ease forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
