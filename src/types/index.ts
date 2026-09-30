export type ProjectCategory =
  | 'commercial'
  | 'ugc'
  | 'animation'
  | 'trailer'
  | 'film'
  | 'podcast'
  | 'explainer'
  | 'social'
  | string;

export interface CaseStudy {
  problem: string;
  process: string[];
  solution: string;
  result: string;
  metrics?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  previewVideoUrl?: string;
  duration: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  tools: string[];
  featured: boolean;
  caseStudy?: CaseStudy;
}

export interface ServiceOffering {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string[];
  highlightTools: string[];
  featuredBadge?: string;
}

export interface AITool {
  id: string;
  name: string;
  category: 'Video Generation' | 'Camera & Motion' | 'Enhancement' | 'Post-Production';
  description: string;
  version: string;
  tagline: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  projectCategory: string;
}

