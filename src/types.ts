export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location?: string;
  year?: string;
  description: string;
  highlight?: string;
  technologies: string[];
  imageUrl: string;
  isInDevelopment?: boolean;
  statusBadge?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  mapsUrl?: string;
  role?: string;
  caseStudy?: CaseStudyDetails;
}

export interface CaseStudyDetails {
  overview: string;
  problem?: string;
  objective?: string;
  process?: string[];
  architecture?: string[];
  features?: { title: string; desc: string }[];
  visualDirection?: string;
  outcome?: string;
  reflection?: string;
  methodologyNote?: string;
  galleryImages?: { url: string; caption: string }[];
  links?: { label: string; url: string; icon?: 'instagram' | 'map' | 'external' }[];
}

export interface PhotoItem {
  id: string;
  title: string;
  category: 'Nature' | 'Portrait' | 'Wedding' | 'Events' | 'Sports' | 'Personal';
  location?: string;
  year?: string;
  aspect: 'tall' | 'wide' | 'square' | 'cinematic';
  imageUrl: string;
  caption: string;
  cameraInfo?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  type?: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface CapabilityCategory {
  title: string;
  items: string[];
}
