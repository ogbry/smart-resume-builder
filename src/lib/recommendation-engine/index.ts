/**
 * Recommendation Engine - Main Interface
 * Provides abstraction layer for recommendations (rule-based now, AI-ready for future)
 */

import {
  SkillSuggestion,
  BulletPointSuggestion,
  HobbySuggestion,
  FeedbackItem,
  JobContext,
  ProfileContext,
  RecommendationResult,
  RecommendationConfig,
} from '@/types/recommendations';
import { Resume, Experience } from '@/types/resume';

import { generateSkillSuggestions } from './skills';
import { generateBulletPointSuggestions } from './experience';
import { generateHobbySuggestions } from './hobbies';
import { analyzeResume } from './feedback';

/**
 * Main Recommendation Engine Interface
 * This abstraction allows swapping between rule-based and AI-based implementations
 */
export interface RecommendationEngine {
  /**
   * Suggest skills based on job context
   */
  suggestSkills(context: JobContext, config?: Partial<RecommendationConfig>): SkillSuggestion[];

  /**
   * Generate bullet points for work experience
   */
  generateBulletPoints(
    experience: Partial<Experience>,
    context: JobContext,
    config?: Partial<RecommendationConfig>
  ): BulletPointSuggestion[];

  /**
   * Recommend hobbies based on profile
   */
  recommendHobbies(
    context: ProfileContext,
    config?: Partial<RecommendationConfig>
  ): HobbySuggestion[];

  /**
   * Analyze resume and provide feedback
   */
  analyzeFeedback(resume: Resume): FeedbackItem[];

  /**
   * Get all recommendations for a resume
   */
  getAllRecommendations(
    resume: Resume,
    config?: Partial<RecommendationConfig>
  ): RecommendationResult;
}

/**
 * Rule-Based Recommendation Engine Implementation
 * Uses deterministic rules and data mappings
 */
export class RuleBasedEngine implements RecommendationEngine {
  private defaultConfig: RecommendationConfig = {
    maxSuggestions: 10,
    minRelevanceScore: 30,
    priorityThreshold: 'low',
    enableAutoApply: false,
  };

  suggestSkills(
    context: JobContext,
    config?: Partial<RecommendationConfig>
  ): SkillSuggestion[] {
    const finalConfig = { ...this.defaultConfig, ...config };
    const suggestions = generateSkillSuggestions(context, finalConfig.maxSuggestions);

    // Filter by relevance score
    return suggestions.filter(
      (s) => s.relevanceScore >= finalConfig.minRelevanceScore
    );
  }

  generateBulletPoints(
    experience: Partial<Experience>,
    context: JobContext,
    config?: Partial<RecommendationConfig>
  ): BulletPointSuggestion[] {
    const finalConfig = { ...this.defaultConfig, ...config };
    return generateBulletPointSuggestions(
      experience,
      context.targetRole,
      context.currentSkills,
      finalConfig.maxSuggestions
    );
  }

  recommendHobbies(
    context: ProfileContext,
    config?: Partial<RecommendationConfig>
  ): HobbySuggestion[] {
    const finalConfig = { ...this.defaultConfig, ...config };
    return generateHobbySuggestions(context, finalConfig.maxSuggestions);
  }

  analyzeFeedback(resume: Resume): FeedbackItem[] {
    return analyzeResume(resume);
  }

  getAllRecommendations(
    resume: Resume,
    config?: Partial<RecommendationConfig>
  ): RecommendationResult {
    const jobContext: JobContext = {
      targetRole: resume.metadata.targetRole || '',
      targetIndustry: resume.metadata.targetIndustry,
      experienceLevel: resume.metadata.experienceLevel || 'junior',
      currentSkills: resume.skills.map((s) => s.name),
      currentExperience: resume.experience.map((e) => e.position),
    };

    const profileContext: ProfileContext = {
      targetRole: resume.metadata.targetRole,
      experienceLevel: resume.metadata.experienceLevel,
      skills: resume.skills.map((s) => s.name),
    };

    return {
      skills: this.suggestSkills(jobContext, config),
      bulletPoints:
        resume.experience.length > 0
          ? this.generateBulletPoints(resume.experience[0], jobContext, config)
          : [],
      hobbies: this.recommendHobbies(profileContext, config),
      feedback: this.analyzeFeedback(resume),
      generatedAt: new Date().toISOString(),
      context: jobContext,
    };
  }
}

/**
 * AI-Based Recommendation Engine Implementation (Future)
 * Placeholder for future AI integration using LLM APIs
 */
export class AIEngine implements RecommendationEngine {
  private apiKey?: string;
  private model: string;

  constructor(apiKey?: string, model: string = 'gpt-4') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async suggestSkills(
    context: JobContext,
    config?: Partial<RecommendationConfig>
  ): Promise<SkillSuggestion[]> {
    // TODO: Implement AI-based skill suggestions
    // This would call an LLM API with context and return personalized suggestions
    throw new Error('AI-based recommendations not yet implemented');
  }

  async generateBulletPoints(
    experience: Partial<Experience>,
    context: JobContext,
    config?: Partial<RecommendationConfig>
  ): Promise<BulletPointSuggestion[]> {
    // TODO: Implement AI-based bullet point generation
    throw new Error('AI-based recommendations not yet implemented');
  }

  async recommendHobbies(
    context: ProfileContext,
    config?: Partial<RecommendationConfig>
  ): Promise<HobbySuggestion[]> {
    // TODO: Implement AI-based hobby recommendations
    throw new Error('AI-based recommendations not yet implemented');
  }

  async analyzeFeedback(resume: Resume): Promise<FeedbackItem[]> {
    // TODO: Implement AI-based resume analysis
    throw new Error('AI-based recommendations not yet implemented');
  }

  async getAllRecommendations(
    resume: Resume,
    config?: Partial<RecommendationConfig>
  ): Promise<RecommendationResult> {
    // TODO: Implement comprehensive AI-based recommendations
    throw new Error('AI-based recommendations not yet implemented');
  }
}

/**
 * Singleton instance of the recommendation engine
 * Can be easily swapped between RuleBasedEngine and AIEngine
 */
let engineInstance: RecommendationEngine | null = null;

/**
 * Get the current recommendation engine instance
 */
export function getRecommendationEngine(useAI: boolean = false): RecommendationEngine {
  if (!engineInstance) {
    if (useAI) {
      // For future AI integration
      // engineInstance = new AIEngine(process.env.OPENAI_API_KEY);
      console.warn('AI engine not yet implemented, falling back to rule-based engine');
      engineInstance = new RuleBasedEngine();
    } else {
      engineInstance = new RuleBasedEngine();
    }
  }
  return engineInstance;
}

/**
 * Reset the engine instance (useful for testing or switching engines)
 */
export function resetEngine(): void {
  engineInstance = null;
}

/**
 * Convenience functions using the default engine
 */
export const recommendationEngine = {
  suggestSkills: (context: JobContext, config?: Partial<RecommendationConfig>) =>
    getRecommendationEngine().suggestSkills(context, config),

  generateBulletPoints: (
    experience: Partial<Experience>,
    context: JobContext,
    config?: Partial<RecommendationConfig>
  ) => getRecommendationEngine().generateBulletPoints(experience, context, config),

  recommendHobbies: (context: ProfileContext, config?: Partial<RecommendationConfig>) =>
    getRecommendationEngine().recommendHobbies(context, config),

  analyzeFeedback: (resume: Resume) => getRecommendationEngine().analyzeFeedback(resume),

  getAllRecommendations: (resume: Resume, config?: Partial<RecommendationConfig>) =>
    getRecommendationEngine().getAllRecommendations(resume, config),
};
