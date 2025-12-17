/**
 * Scoring Utilities
 * Functions for calculating scores and weights for recommendations
 */

import { ScoringWeights } from '@/types/recommendations';
import { ExperienceLevel } from '@/types/resume';

/**
 * Default scoring weights
 */
export const DEFAULT_SCORING_WEIGHTS: ScoringWeights = {
  relevance: 0.4,
  popularity: 0.3,
  experienceAlignment: 0.2,
  industryFit: 0.1,
};

/**
 * Calculate weighted score
 */
export function calculateWeightedScore(
  scores: {
    relevance: number;
    popularity: number;
    experienceAlignment: number;
    industryFit: number;
  },
  weights: ScoringWeights = DEFAULT_SCORING_WEIGHTS
): number {
  const weightedScore =
    scores.relevance * weights.relevance +
    scores.popularity * weights.popularity +
    scores.experienceAlignment * weights.experienceAlignment +
    scores.industryFit * weights.industryFit;

  return Math.min(Math.round(weightedScore), 100);
}

/**
 * Normalize score to 0-100 range
 */
export function normalizeScore(score: number, min: number, max: number): number {
  if (max === min) return 50;
  const normalized = ((score - min) / (max - min)) * 100;
  return Math.max(0, Math.min(100, Math.round(normalized)));
}

/**
 * Calculate experience level score
 * Returns how well a skill/hobby matches the experience level
 */
export function calculateExperienceLevelScore(
  itemLevels: ExperienceLevel[],
  userLevel: ExperienceLevel
): number {
  const levelOrder: ExperienceLevel[] = ['entry', 'junior', 'mid', 'senior', 'lead'];
  const userLevelIndex = levelOrder.indexOf(userLevel);

  if (itemLevels.includes(userLevel)) {
    return 100;
  }

  // Check adjacent levels
  const adjacentLevels = [
    levelOrder[userLevelIndex - 1],
    levelOrder[userLevelIndex + 1],
  ].filter(Boolean);

  if (adjacentLevels.some((level) => itemLevels.includes(level))) {
    return 70;
  }

  // Check if any level matches
  if (itemLevels.length > 0) {
    return 40;
  }

  return 0;
}

/**
 * Calculate relevance boost based on related items
 */
export function calculateRelatedItemsBoost(
  relatedItems: string[],
  userItems: string[],
  maxBoost: number = 20
): number {
  const userItemsLower = userItems.map((item) => item.toLowerCase());
  const matchingCount = relatedItems.filter((item) =>
    userItemsLower.includes(item.toLowerCase())
  ).length;

  const boostPerMatch = maxBoost / 4; // Assume max of 4 matching items
  return Math.min(matchingCount * boostPerMatch, maxBoost);
}

/**
 * Calculate popularity score (0-100)
 */
export function calculatePopularityScore(
  popularity: number,
  popularityRange: { min: number; max: number } = { min: 0, max: 100 }
): number {
  return normalizeScore(popularity, popularityRange.min, popularityRange.max);
}

/**
 * Apply diminishing returns to score
 * Useful for preventing single factors from dominating
 */
export function applyDiminishingReturns(score: number, factor: number = 0.8): number {
  return Math.round(100 * (1 - Math.pow(1 - score / 100, factor)));
}

/**
 * Calculate diversity score
 * Rewards having a diverse set of items across categories
 */
export function calculateDiversityScore(
  items: Array<{ category: string }>,
  idealCategoryCount: number = 4
): number {
  const categories = new Set(items.map((item) => item.category));
  const diversityRatio = Math.min(categories.size / idealCategoryCount, 1);
  return Math.round(diversityRatio * 100);
}

/**
 * Calculate completeness score for a section
 */
export function calculateSectionCompleteness(
  requiredFields: Record<string, any>,
  optionalFields: Record<string, any> = {}
): number {
  const requiredCount = Object.keys(requiredFields).length;
  const optionalCount = Object.keys(optionalFields).length;

  const requiredFilled = Object.values(requiredFields).filter((value) =>
    isFieldFilled(value)
  ).length;
  const optionalFilled = Object.values(optionalFields).filter((value) =>
    isFieldFilled(value)
  ).length;

  // Required fields are worth 70%, optional fields worth 30%
  const requiredScore = requiredCount > 0 ? (requiredFilled / requiredCount) * 70 : 70;
  const optionalScore = optionalCount > 0 ? (optionalFilled / optionalCount) * 30 : 30;

  return Math.round(requiredScore + optionalScore);
}

/**
 * Check if a field is filled
 */
function isFieldFilled(value: any): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
}

/**
 * Calculate confidence score for a recommendation
 * Based on multiple factors
 */
export function calculateConfidenceScore(factors: {
  dataQuality: number; // 0-100
  matchStrength: number; // 0-100
  sampleSize?: number; // Number of data points used
  userDataCompleteness?: number; // 0-100
}): number {
  let confidence = 0;

  // Data quality (40%)
  confidence += (factors.dataQuality / 100) * 40;

  // Match strength (40%)
  confidence += (factors.matchStrength / 100) * 40;

  // Sample size bonus (10%)
  if (factors.sampleSize !== undefined) {
    const sampleBonus = Math.min(factors.sampleSize / 10, 1) * 10;
    confidence += sampleBonus;
  } else {
    confidence += 5; // Default medium bonus
  }

  // User data completeness (10%)
  if (factors.userDataCompleteness !== undefined) {
    confidence += (factors.userDataCompleteness / 100) * 10;
  } else {
    confidence += 5; // Default medium bonus
  }

  return Math.min(Math.round(confidence), 100);
}

/**
 * Interpolate between two scores
 */
export function interpolateScore(
  score1: number,
  score2: number,
  weight: number
): number {
  return Math.round(score1 * (1 - weight) + score2 * weight);
}
