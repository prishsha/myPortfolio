// types/index.ts

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  stars: number;
  featured: boolean;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  color: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string | null;
  highlights: string[];
  color: string;
}

export type TabId = "about" | "skills" | "projects" | "experience" | "education" | "contact";

export interface Tab {
  id: TabId;
  label: string;
  filename: string;
  icon: string;
  iconColor: string;
}
