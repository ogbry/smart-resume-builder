/**
 * Skills Recommendation Logic
 * Generates skill suggestions based on job role and experience
 */

import { SkillSuggestion, JobContext } from '@/types/recommendations';
import { getJobRole } from './data/job-roles';
import { getSkillData, SKILLS_DATABASE } from './data/skill-database';
import { SkillCategory } from '@/types/resume';

/**
 * Generate skill suggestions based on job context
 */
export function generateSkillSuggestions(
  context: JobContext,
  maxSuggestions: number = 10
): SkillSuggestion[] {
  const { targetRole, experienceLevel, currentSkills } = context;

  // Get job role data
  const jobRole = getJobRole(targetRole);
  if (!jobRole) {
    return [];
  }

  const suggestions: SkillSuggestion[] = [];
  const currentSkillsLower = currentSkills.map((s) => s.toLowerCase());

  // Get primary skills for the role
  const primarySkills = jobRole.primarySkills.filter(
    (skill) => !currentSkillsLower.includes(skill.toLowerCase())
  );

  // Get secondary skills for the role
  const secondarySkills = jobRole.secondarySkills.filter(
    (skill) => !currentSkillsLower.includes(skill.toLowerCase())
  );

  // Process primary skills (high priority)
  for (const skillName of primarySkills) {
    const skillData = getSkillData(skillName);
    if (!skillData) continue;

    // Check if skill is appropriate for experience level
    if (!skillData.experienceLevels.includes(experienceLevel)) {
      continue;
    }

    const relevanceScore = calculateSkillRelevance(
      skillData,
      jobRole.id,
      experienceLevel,
      currentSkills
    );

    suggestions.push({
      id: `skill-${skillName.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'skill',
      skillName: skillData.name,
      category: skillData.category,
      priority: 'high',
      relevanceScore,
      reason: `Essential skill for ${jobRole.title}`,
      reasoning: skillData.description,
      relatedSkills: skillData.relatedSkills.filter((rs) =>
        currentSkills.some((cs) => cs.toLowerCase() === rs.toLowerCase())
      ),
      metadata: {
        popularity: skillData.popularity,
        isPrimary: true,
      },
    });
  }

  // Process secondary skills (medium priority)
  for (const skillName of secondarySkills) {
    const skillData = getSkillData(skillName);
    if (!skillData) continue;

    // Check if skill is appropriate for experience level
    if (!skillData.experienceLevels.includes(experienceLevel)) {
      continue;
    }

    const relevanceScore = calculateSkillRelevance(
      skillData,
      jobRole.id,
      experienceLevel,
      currentSkills
    );

    suggestions.push({
      id: `skill-${skillName.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'skill',
      skillName: skillData.name,
      category: skillData.category,
      priority: 'medium',
      relevanceScore,
      reason: `Commonly used in ${jobRole.title} roles`,
      reasoning: skillData.description,
      relatedSkills: skillData.relatedSkills.filter((rs) =>
        currentSkills.some((cs) => cs.toLowerCase() === rs.toLowerCase())
      ),
      metadata: {
        popularity: skillData.popularity,
        isPrimary: false,
      },
    });
  }

  // Add complementary skills based on current skills
  const complementarySkills = getComplementarySkills(currentSkills, jobRole.id);
  for (const skillData of complementarySkills) {
    if (currentSkillsLower.includes(skillData.name.toLowerCase())) {
      continue;
    }

    // Don't duplicate already suggested skills
    if (suggestions.some((s) => s.skillName === skillData.name)) {
      continue;
    }

    const relevanceScore = calculateSkillRelevance(
      skillData,
      jobRole.id,
      experienceLevel,
      currentSkills
    );

    suggestions.push({
      id: `skill-${skillData.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'skill',
      skillName: skillData.name,
      category: skillData.category,
      priority: 'low',
      relevanceScore,
      reason: `Complements your existing skills`,
      reasoning: `Works well with ${skillData.relatedSkills.slice(0, 2).join(' and ')}`,
      relatedSkills: skillData.relatedSkills,
      metadata: {
        popularity: skillData.popularity,
        isComplementary: true,
      },
    });
  }

  // Sort by priority and relevance score
  const sortedSuggestions = suggestions.sort((a, b) => {
    const priorityWeight = { high: 3, medium: 2, low: 1 };
    const priorityDiff =
      priorityWeight[b.priority] - priorityWeight[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    return b.relevanceScore - a.relevanceScore;
  });

  return sortedSuggestions.slice(0, maxSuggestions);
}

/**
 * Calculate skill relevance score (0-100)
 */
function calculateSkillRelevance(
  skillData: any,
  roleId: string,
  experienceLevel: string,
  currentSkills: string[]
): number {
  let score = 0;

  // Industry relevance (0-40 points)
  const industryRelevance = skillData.industryRelevance[roleId] || 0;
  score += (industryRelevance / 100) * 40;

  // Popularity (0-20 points)
  score += (skillData.popularity / 100) * 20;

  // Related skills bonus (0-20 points)
  const relatedSkillsCount = skillData.relatedSkills.filter((rs: string) =>
    currentSkills.some((cs) => cs.toLowerCase() === rs.toLowerCase())
  ).length;
  score += Math.min(relatedSkillsCount * 5, 20);

  // Experience level alignment (0-20 points)
  const experienceLevelIndex = ['entry', 'junior', 'mid', 'senior', 'lead'].indexOf(
    experienceLevel
  );
  if (skillData.experienceLevels.includes(experienceLevel)) {
    score += 20;
  } else if (
    experienceLevelIndex > 0 &&
    skillData.experienceLevels.includes(
      ['entry', 'junior', 'mid', 'senior', 'lead'][experienceLevelIndex - 1]
    )
  ) {
    score += 10;
  }

  return Math.min(Math.round(score), 100);
}

/**
 * Get complementary skills based on current skills
 */
function getComplementarySkills(
  currentSkills: string[],
  roleId: string,
  maxResults: number = 5
): any[] {
  const complementary: any[] = [];
  const seen = new Set<string>();

  for (const currentSkill of currentSkills) {
    const skillData = getSkillData(currentSkill);
    if (!skillData) continue;

    for (const relatedSkillName of skillData.relatedSkills) {
      if (seen.has(relatedSkillName.toLowerCase())) continue;

      const relatedSkillData = getSkillData(relatedSkillName);
      if (!relatedSkillData) continue;

      // Check if skill is relevant to the role
      const relevance = relatedSkillData.industryRelevance[roleId] || 0;
      if (relevance > 30) {
        complementary.push(relatedSkillData);
        seen.add(relatedSkillName.toLowerCase());
      }
    }
  }

  return complementary
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, maxResults);
}

/**
 * Suggest skills by category
 */
export function suggestSkillsByCategory(
  category: SkillCategory,
  roleId: string,
  currentSkills: string[],
  maxSuggestions: number = 5
): SkillSuggestion[] {
  const suggestions: SkillSuggestion[] = [];
  const currentSkillsLower = currentSkills.map((s) => s.toLowerCase());

  const skillsInCategory = Object.values(SKILLS_DATABASE).filter(
    (skill) =>
      skill.category === category &&
      !currentSkillsLower.includes(skill.name.toLowerCase())
  );

  for (const skillData of skillsInCategory) {
    const relevance = skillData.industryRelevance[roleId] || 0;
    if (relevance < 30) continue;

    suggestions.push({
      id: `skill-${skillData.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'skill',
      skillName: skillData.name,
      category: skillData.category,
      priority: relevance > 70 ? 'high' : relevance > 50 ? 'medium' : 'low',
      relevanceScore: relevance,
      reason: `Popular ${category} skill`,
      reasoning: skillData.description,
      relatedSkills: skillData.relatedSkills,
      metadata: {
        popularity: skillData.popularity,
      },
    });
  }

  return suggestions
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, maxSuggestions);
}
