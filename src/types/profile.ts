export type SocialKind = 'github' | 'scholar' | 'email' | 'cv' | 'linkedin' | 'twitter';

export interface SocialLink {
  kind: SocialKind;
  href: string;
  label?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  tags: string[];
  problem: string;
  method: string;
  result: string;
  links?: ProjectLink[];
  accent?: 'cyan' | 'violet' | 'amber';
}

export type PublicationKind = 'paper' | 'blog' | 'demo';

export interface Publication {
  kind: PublicationKind;
  title: string;
  venue?: string;
  year: number;
  authors?: string;
  summary: string;
  href?: string;
  badges?: string[];
}

export interface AboutSection {
  interests: string[];
  skills: string[];
  currentFocus: string;
}

export interface Profile {
  name: string;
  handle: string;
  tagline: string;
  location: string;
  bio: string;
  socials: SocialLink[];
  about: AboutSection;
  projects: Project[];
  publications: Publication[];
}
