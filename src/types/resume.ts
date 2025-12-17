/**
 * Core Resume Data Types
 * These types define the structure of resume data stored in localStorage
 */

export type ExperienceLevel = 'entry' | 'junior' | 'mid' | 'senior' | 'lead';
export type TemplateType = 'professional' | 'executive' | 'creative';

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
  summary?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrentRole: boolean;
  bulletPoints: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiencyLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export type SkillCategory =
  | 'languages'
  | 'frameworks'
  | 'tools'
  | 'databases'
  | 'cloud'
  | 'soft-skills'
  | 'other';

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  highlights: string[];
}

export interface Hobby {
  id: string;
  name: string;
  description?: string;
  category?: HobbyCategory;
}

export type HobbyCategory =
  | 'sports'
  | 'creative'
  | 'technical'
  | 'community'
  | 'leadership'
  | 'other';

export interface Reference {
  id: string;
  name: string;
  company: string;
  position: string;
  email: string;
  phone?: string;
}

export interface ResumeMetadata {
  targetRole?: string;
  targetIndustry?: string;
  experienceLevel?: ExperienceLevel;
  template: TemplateType;
  lastModified: string;
  createdAt: string;
}

export interface Resume {
  id: string;
  personalInfo: PersonalInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  hobbies: Hobby[];
  references: Reference[];
  metadata: ResumeMetadata;
}

/**
 * Form step data types
 */
export interface FormStepData {
  personalInfo?: Partial<PersonalInfo>;
  experience?: Experience[];
  skills?: Skill[];
  projects?: Project[];
  hobbies?: Hobby[];
  references?: Reference[];
  metadata?: Partial<ResumeMetadata>;
}

/**
 * Validation result type
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
