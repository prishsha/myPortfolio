export const personalInfo = {
  name: "Prisha Vadhavkar",
  title: "Full Stack Developer",
  email: "prishavadhavkar@gmail.com",
  location: "Vellore, Tamil Nadu, India",
  bio: "Full-stack developer and engineering student focused on building scalable, user-centric applications. Passionate about problem solving, real-time systems, and creating clean, efficient digital experiences.",
  github: "https://github.com/prishsha",
  linkedin: "https://www.linkedin.com/in/prisha-vadhavkar/",
  resume: "https://drive.google.com/file/d/1mK2jU5niWkvz2Xm0xbqF0QJYVKwgJIYS/view?usp=sharing",
  avatarInitials: "PV",
};

export const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "JavaScript", "SQL", "C++", "HTML", "CSS"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "WebSockets"],
  Databases: ["MongoDB", "PostgreSQL", "Firebase"],
  DevOps: ["Docker", "AWS", "Vercel"],
  Tools: ["Git", "GitHub", "VS Code"],
};

export const projects = [
  {
    id: "bricksbybid",
    name: "BricksByBid",
    description:
      "Real-time bidding platform supporting 100 concurrent users with live bid updates using WebSockets. Features timed auction rounds, bid validation, and automatic winner selection.",
    tech: ["Node.js", "Express", "WebSockets", "PostgreSQL"],
    github: "https://github.com/Dream-Merchants-VIT/my-bid",
    live: null,
    featured: true,
    color: "#569cd6",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    description:
      "Full-stack MERN application for tracking expenses with category-wise analytics, authentication, and a clean, responsive UI.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/prishsha/expense-tracker",
    live: "https://expense-tracker-4-9y7d.onrender.com",
    featured: true,
    color: "#4ec9b0",
  },
  {
    id: "wecare",
    name: "WeCare",
    description:
      "Social issue reporting platform with an NGO dashboard to track and resolve community problems. Built for DevSoc Hackathon (Top 10).",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/prishsha",
    live: null,
    featured: true,
    color: "#dcdcaa",
  },
  {
    id: "spam-news",
    name: "Spam News Detection",
    description:
      "Machine learning model using Naive Bayes to classify and filter spam or fake news content from datasets.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/prishsha/spam_news1",
    live: null,
    featured: false,
    color: "#ce9178",
  },
];

export const experience = [
  {
    company: "SyncHubb",
    role: "React JS Developer",
    period: "Apr 2025 — Jul 2025",
    location: "Remote",
    description: [
      "Built reusable React components for internal dashboards, improving UI consistency.",
      "Integrated REST APIs to enable real-time dynamic data updates without reloads.",
    ],
    tech: ["React", "REST APIs", "JavaScript"],
    color: "#569cd6",
  },
  {
    company: "GirlScript Summer of Code Extended",
    role: "Open Source Contributor",
    period: "Oct 2024 — Nov 2024",
    location: "Remote",
    description: [
      "Contributed to open-source projects including bug fixes, UI enhancements, and documentation.",
      "Collaborated via GitHub with PRs, issue tracking, and code reviews.",
    ],
    tech: ["GitHub", "Open Source"],
    color: "#4ec9b0",
  },
];

export const education = [
  {
    institution: "Vellore Institute of Technology",
    degree: "B.Tech in Information Technology",
    period: "2023 — 2027",
    gpa: "9.49",
    highlights: [],
    color: "#569cd6",
  },
  {
    institution: "Smt. Sulochanadevi Singhania School",
    degree: "ISC Class XII",
    period: "2021 — 2023",
    gpa: "95.4%",
    highlights: [],
    color: "#4ec9b0",
  },
  {
    institution: "Smt. Sulochanadevi Singhania School",
    degree: "ICSE Class X",
    period: "2012 — 2021",
    gpa: "98.4%",
    highlights: [],
    color: "#dcdcaa",
  },
];