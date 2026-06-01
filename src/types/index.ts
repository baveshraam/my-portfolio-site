export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: string[];
  tags?: string[];
  role?: string;
  contributions?: string[];
  challenges?: string[];
  results?: string[];
  previewImage?: string; // Image for preview on Projects page
  detailImage?: string; // Image for detail page
  github?: string;
  demo?: string;
  externalLink?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  details?: string[];
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Profile {
  fullName: string;
  title: string;
  heroBadge: string;
  heroSummary: string;
  aboutIntro: string[];
  languages?: string[];
  location?: string;
}

export type ThemeMode = 'light' | 'dark';