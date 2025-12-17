/**
 * Hobby Recommendation Logic
 * Suggests hobbies based on role, skills, and professional alignment
 */

import { HobbySuggestion, ProfileContext } from '@/types/recommendations';
import { HobbyCategory } from '@/types/resume';
import {
  HOBBY_DATABASE,
  HobbyData,
  getHobbiesByRole,
  getHobbiesByCategory,
} from './data/hobby-database';
import { getJobRole } from './data/job-roles';

/**
 * Generate hobby suggestions based on profile context
 */
export function generateHobbySuggestions(
  context: ProfileContext,
  maxSuggestions: number = 8
): HobbySuggestion[] {
  const { targetRole, experienceLevel, skills } = context;

  if (!targetRole) {
    return getPopularHobbies(maxSuggestions);
  }

  const jobRole = getJobRole(targetRole);
  if (!jobRole) {
    return getPopularHobbies(maxSuggestions);
  }

  const suggestions: HobbySuggestion[] = [];

  // Get hobbies aligned with the role
  const roleAlignedHobbies = getHobbiesByRole(jobRole.id);

  for (const hobbyData of roleAlignedHobbies) {
    const alignmentScore = calculateHobbyAlignment(
      hobbyData,
      jobRole.desiredTraits,
      skills,
      experienceLevel
    );

    const priority = alignmentScore > 70 ? 'high' : alignmentScore > 50 ? 'medium' : 'low';

    suggestions.push({
      id: `hobby-${hobbyData.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'hobby',
      hobbyName: hobbyData.name,
      description: hobbyData.description,
      category: hobbyData.category,
      priority,
      reason: `Aligns with ${jobRole.title} role`,
      alignmentReason: getAlignmentReason(hobbyData, jobRole.desiredTraits),
      professionalBenefit: hobbyData.professionalBenefit,
      metadata: {
        alignmentScore,
        popularity: hobbyData.popularity,
        traits: hobbyData.traits,
      },
    });
  }

  // Sort by alignment score and priority
  const sortedSuggestions = suggestions.sort((a, b) => {
    const priorityWeight = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityWeight[b.priority] - priorityWeight[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    return (b.metadata?.alignmentScore || 0) - (a.metadata?.alignmentScore || 0);
  });

  return sortedSuggestions.slice(0, maxSuggestions);
}

/**
 * Calculate hobby alignment score (0-100)
 */
function calculateHobbyAlignment(
  hobbyData: HobbyData,
  desiredTraits: string[],
  skills: string[],
  experienceLevel?: string
): number {
  let score = 0;

  // Trait alignment (0-40 points)
  const matchingTraits = hobbyData.traits.filter((trait) =>
    desiredTraits.some((dt) => dt.toLowerCase().includes(trait.toLowerCase()))
  );
  score += Math.min(matchingTraits.length * 13, 40);

  // Popularity (0-30 points)
  score += (hobbyData.popularity / 100) * 30;

  // Technical hobbies bonus for technical roles (0-20 points)
  if (hobbyData.category === 'technical') {
    const technicalSkills = skills.filter((s) =>
      ['JavaScript', 'Python', 'React', 'Node.js'].some((tech) =>
        s.toLowerCase().includes(tech.toLowerCase())
      )
    );
    score += Math.min(technicalSkills.length * 5, 20);
  }

  // Leadership hobbies bonus for senior levels (0-10 points)
  if (
    (experienceLevel === 'senior' || experienceLevel === 'lead') &&
    (hobbyData.category === 'leadership' || hobbyData.category === 'community')
  ) {
    score += 10;
  }

  return Math.min(Math.round(score), 100);
}

/**
 * Get alignment reason based on matching traits
 */
function getAlignmentReason(hobbyData: HobbyData, desiredTraits: string[]): string {
  const matchingTraits = hobbyData.traits.filter((trait) =>
    desiredTraits.some((dt) => dt.toLowerCase().includes(trait.toLowerCase()))
  );

  if (matchingTraits.length > 0) {
    return `Demonstrates ${matchingTraits.slice(0, 2).join(' and ')}`;
  }

  return `Shows ${hobbyData.traits[0] || 'valuable qualities'}`;
}

/**
 * Get popular hobbies as fallback
 */
function getPopularHobbies(maxSuggestions: number): HobbySuggestion[] {
  const popularHobbies = HOBBY_DATABASE.filter((h) => h.popularity >= 70)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, maxSuggestions);

  return popularHobbies.map((hobbyData) => ({
    id: `hobby-${hobbyData.name.toLowerCase().replace(/\s+/g, '-')}`,
    type: 'hobby',
    hobbyName: hobbyData.name,
    description: hobbyData.description,
    category: hobbyData.category,
    priority: 'medium',
    reason: 'Popular and professionally relevant',
    alignmentReason: 'Widely appreciated by employers',
    professionalBenefit: hobbyData.professionalBenefit,
    metadata: {
      popularity: hobbyData.popularity,
    },
  }));
}

/**
 * Suggest hobbies by category
 */
export function suggestHobbiesByCategory(
  category: HobbyCategory,
  maxSuggestions: number = 5
): HobbySuggestion[] {
  const hobbiesInCategory = getHobbiesByCategory(category);

  return hobbiesInCategory
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, maxSuggestions)
    .map((hobbyData) => ({
      id: `hobby-${hobbyData.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'hobby',
      hobbyName: hobbyData.name,
      description: hobbyData.description,
      category: hobbyData.category,
      priority: hobbyData.popularity > 75 ? 'high' : 'medium',
      reason: `Popular ${category} hobby`,
      alignmentReason: hobbyData.professionalBenefit,
      professionalBenefit: hobbyData.professionalBenefit,
      metadata: {
        popularity: hobbyData.popularity,
      },
    }));
}

/**
 * Analyze hobby relevance and suggest improvements
 */
export function analyzeHobbyRelevance(
  hobbyName: string,
  targetRole?: string
): {
  isRelevant: boolean;
  score: number;
  feedback: string;
  suggestedRephrase?: string;
} {
  const hobbyData = HOBBY_DATABASE.find(
    (h) => h.name.toLowerCase() === hobbyName.toLowerCase()
  );

  // Generic hobby (not in database)
  if (!hobbyData) {
    return {
      isRelevant: false,
      score: 50,
      feedback: 'Consider adding more context or choosing a hobby with clear professional benefits',
      suggestedRephrase: undefined,
    };
  }

  // Check role alignment
  if (targetRole) {
    const jobRole = getJobRole(targetRole);
    const isAligned = jobRole
      ? hobbyData.alignedRoles.includes(jobRole.id)
      : false;

    if (isAligned) {
      return {
        isRelevant: true,
        score: hobbyData.popularity,
        feedback: `Great choice! ${hobbyData.professionalBenefit}`,
      };
    } else {
      // Not aligned but still valid
      return {
        isRelevant: true,
        score: hobbyData.popularity * 0.7,
        feedback: `This hobby is valid but may be more relevant for other roles. ${hobbyData.professionalBenefit}`,
      };
    }
  }

  // No target role specified
  return {
    isRelevant: true,
    score: hobbyData.popularity,
    feedback: hobbyData.professionalBenefit,
  };
}

/**
 * Detect weak or vague hobbies
 */
export function detectWeakHobbies(hobbies: string[]): {
  weakHobbies: string[];
  suggestions: string[];
} {
  const weakKeywords = [
    'watching',
    'browsing',
    'surfing',
    'hanging out',
    'chilling',
    'relaxing',
  ];

  const vaguePhrases = ['various', 'different', 'some', 'many'];

  const weakHobbies = hobbies.filter((hobby) => {
    const lowerHobby = hobby.toLowerCase();
    return (
      weakKeywords.some((keyword) => lowerHobby.includes(keyword)) ||
      vaguePhrases.some((phrase) => lowerHobby.includes(phrase)) ||
      hobby.length < 10
    );
  });

  const suggestions = [];

  if (weakHobbies.length > 0) {
    suggestions.push(
      'Replace passive hobbies (watching, browsing) with active ones (creating, building, participating)'
    );
    suggestions.push(
      'Be specific: instead of "sports", mention "marathon running" or "competitive basketball"'
    );
    suggestions.push(
      'Choose hobbies that demonstrate skills relevant to your target role'
    );
  }

  return {
    weakHobbies,
    suggestions,
  };
}
