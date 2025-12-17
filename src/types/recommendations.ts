/**
 * Recommendation System Types
 * These types define the structure of recommendations and suggestions
 */

import { ExperienceLevel, SkillCategory, HobbyCategory } from './resume';

export type SuggestionType = 'skill' | 'bullet-point' | 'hobby' | 'feedback';
export type SuggestionPriority = 'high' | 'medium' | 'low';
export type FeedbackSeverity = 'error' | 'warning' | 'info' | 'success';

/**
 * Base suggestion interface
 */
export interface Suggestion {
  id: string;
  type: SuggestionType;
  priority: SuggestionPriority;
  reason: string;
  metadata?: Record<string, any>;
}

/**
 * Skill suggestion
 */
export interface SkillSuggestion extends Suggestion {
  type: 'skill';
  skillName: string;
  category: SkillCategory;
  relevanceScore: number;
  reasoning: string;
  relatedSkills?: string[];
}

/**
 * Bullet point suggestion for work experience
 */
export interface BulletPointSuggestion extends Suggestion {
  type: 'bullet-point';
  content: string;
  template: string;
  variables: Record<string, string>;
  impactMetrics?: string[];
}

/**
 * Hobby suggestion
 */
export interface HobbySuggestion extends Suggestion {
  type: 'hobby';
  hobbyName: string;
  description: string;
  category: HobbyCategory;
  alignmentReason: string;
  professionalBenefit: string;
}

/**
 * Resume feedback item
 */
export interface FeedbackItem extends Suggestion {
  type: 'feedback';
  title: string;
  description: string;
  severity: FeedbackSeverity;
  section?: string;
  actionable: boolean;
  fixSuggestion?: string;
}

/**
 * Context for generating recommendations
 */
export interface JobContext {
  targetRole: string;
  targetIndustry?: string;
  experienceLevel: ExperienceLevel;
  currentSkills: string[];
  currentExperience: string[];
}

export interface ProfileContext {
  targetRole?: string;
  experienceLevel?: ExperienceLevel;
  skills: string[];
  interests?: string[];
}

/**
 * Recommendation engine configuration
 */
export interface RecommendationConfig {
  maxSuggestions: number;
  minRelevanceScore: number;
  priorityThreshold: SuggestionPriority;
  enableAutoApply: boolean;
}

/**
 * Scoring weights for recommendations
 */
export interface ScoringWeights {
  relevance: number;
  popularity: number;
  experienceAlignment: number;
  industryFit: number;
}

/**
 * Recommendation result containing multiple suggestion types
 */
export interface RecommendationResult {
  skills: SkillSuggestion[];
  bulletPoints: BulletPointSuggestion[];
  hobbies: HobbySuggestion[];
  feedback: FeedbackItem[];
  generatedAt: string;
  context: JobContext | ProfileContext;
}
