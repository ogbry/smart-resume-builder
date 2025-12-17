/**
 * Hobby Database
 * Database of hobbies with professional relevance and alignment
 */

import { HobbyCategory } from '@/types/resume';

export interface HobbyData {
  name: string;
  category: HobbyCategory;
  description: string;
  professionalBenefit: string;
  alignedRoles: string[];
  traits: string[];
  popularity: number; // 1-100
}

/**
 * Comprehensive hobby database
 */
export const HOBBY_DATABASE: HobbyData[] = [
  // Sports
  {
    name: 'Team Sports (Soccer, Basketball, etc.)',
    category: 'sports',
    description: 'Playing team-based competitive sports',
    professionalBenefit: 'Demonstrates teamwork, collaboration, and competitive drive',
    alignedRoles: ['product-manager', 'frontend-developer', 'fullstack-developer'],
    traits: ['teamwork', 'competition', 'discipline'],
    popularity: 75,
  },
  {
    name: 'Running/Marathon',
    category: 'sports',
    description: 'Long-distance running and marathon participation',
    professionalBenefit: 'Shows dedication, goal-setting, and perseverance',
    alignedRoles: ['backend-developer', 'data-scientist', 'devops-engineer'],
    traits: ['perseverance', 'goal-oriented', 'discipline'],
    popularity: 70,
  },
  {
    name: 'Rock Climbing',
    category: 'sports',
    description: 'Indoor or outdoor rock climbing',
    professionalBenefit: 'Demonstrates problem-solving and calculated risk-taking',
    alignedRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer'],
    traits: ['problem-solving', 'risk-management', 'focus'],
    popularity: 60,
  },

  // Creative
  {
    name: 'Photography',
    category: 'creative',
    description: 'Hobby photography and visual storytelling',
    professionalBenefit: 'Shows attention to detail and creative perspective',
    alignedRoles: ['ux-designer', 'frontend-developer', 'product-manager'],
    traits: ['creativity', 'attention-to-detail', 'visual-thinking'],
    popularity: 80,
  },
  {
    name: 'Music (Playing Instruments)',
    category: 'creative',
    description: 'Playing musical instruments',
    professionalBenefit: 'Demonstrates discipline, pattern recognition, and creativity',
    alignedRoles: ['frontend-developer', 'ux-designer', 'data-scientist'],
    traits: ['creativity', 'discipline', 'pattern-recognition'],
    popularity: 75,
  },
  {
    name: 'Writing/Blogging',
    category: 'creative',
    description: 'Creative or technical writing and blogging',
    professionalBenefit: 'Shows communication skills and thought leadership',
    alignedRoles: ['product-manager', 'frontend-developer', 'backend-developer'],
    traits: ['communication', 'creativity', 'teaching'],
    popularity: 70,
  },
  {
    name: 'Digital Art/Design',
    category: 'creative',
    description: 'Creating digital art and design projects',
    professionalBenefit: 'Demonstrates creativity and technical skills',
    alignedRoles: ['ux-designer', 'frontend-developer'],
    traits: ['creativity', 'technical-skills', 'visual-thinking'],
    popularity: 65,
  },

  // Technical
  {
    name: 'Open Source Contributions',
    category: 'technical',
    description: 'Contributing to open source projects',
    professionalBenefit: 'Shows technical skills, collaboration, and community engagement',
    alignedRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer', 'devops-engineer'],
    traits: ['technical-skills', 'collaboration', 'community'],
    popularity: 85,
  },
  {
    name: 'Personal Coding Projects',
    category: 'technical',
    description: 'Building side projects and learning new technologies',
    professionalBenefit: 'Demonstrates continuous learning and passion for technology',
    alignedRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer', 'mobile-developer'],
    traits: ['passion', 'continuous-learning', 'initiative'],
    popularity: 90,
  },
  {
    name: 'Hackathons',
    category: 'technical',
    description: 'Participating in hackathons and coding competitions',
    professionalBenefit: 'Shows problem-solving under pressure and innovation',
    alignedRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer'],
    traits: ['problem-solving', 'innovation', 'teamwork'],
    popularity: 75,
  },
  {
    name: 'Electronics/Robotics',
    category: 'technical',
    description: 'Building electronics projects or robots',
    professionalBenefit: 'Demonstrates hands-on technical skills and curiosity',
    alignedRoles: ['backend-developer', 'devops-engineer', 'fullstack-developer'],
    traits: ['technical-skills', 'curiosity', 'problem-solving'],
    popularity: 60,
  },
  {
    name: 'Game Development',
    category: 'technical',
    description: 'Creating games as a hobby',
    professionalBenefit: 'Shows creativity combined with technical skills',
    alignedRoles: ['frontend-developer', 'fullstack-developer'],
    traits: ['creativity', 'technical-skills', 'project-management'],
    popularity: 70,
  },

  // Community
  {
    name: 'Mentoring/Teaching',
    category: 'community',
    description: 'Mentoring students or teaching technical skills',
    professionalBenefit: 'Demonstrates leadership and communication skills',
    alignedRoles: ['product-manager', 'frontend-developer', 'backend-developer'],
    traits: ['leadership', 'communication', 'teaching'],
    popularity: 80,
  },
  {
    name: 'Volunteering',
    category: 'community',
    description: 'Community service and volunteer work',
    professionalBenefit: 'Shows empathy, social responsibility, and leadership',
    alignedRoles: ['product-manager', 'ux-designer', 'frontend-developer'],
    traits: ['empathy', 'leadership', 'social-responsibility'],
    popularity: 75,
  },
  {
    name: 'Public Speaking/Conferences',
    category: 'community',
    description: 'Speaking at conferences or meetups',
    professionalBenefit: 'Demonstrates communication skills and thought leadership',
    alignedRoles: ['product-manager', 'frontend-developer', 'backend-developer'],
    traits: ['communication', 'leadership', 'confidence'],
    popularity: 70,
  },
  {
    name: 'Organizing Tech Meetups',
    category: 'community',
    description: 'Organizing or leading tech community events',
    professionalBenefit: 'Shows leadership and community building skills',
    alignedRoles: ['product-manager', 'frontend-developer', 'backend-developer'],
    traits: ['leadership', 'organization', 'community'],
    popularity: 65,
  },

  // Leadership
  {
    name: 'Board Games/Strategy Games',
    category: 'leadership',
    description: 'Playing strategic board games or chess',
    professionalBenefit: 'Demonstrates strategic thinking and planning',
    alignedRoles: ['product-manager', 'backend-developer', 'data-scientist'],
    traits: ['strategic-thinking', 'planning', 'analytical'],
    popularity: 70,
  },
  {
    name: 'Competitive Gaming/Esports',
    category: 'leadership',
    description: 'Competitive gaming or esports participation',
    professionalBenefit: 'Shows teamwork, strategic thinking, and performance under pressure',
    alignedRoles: ['frontend-developer', 'backend-developer', 'product-manager'],
    traits: ['teamwork', 'strategic-thinking', 'competition'],
    popularity: 75,
  },

  // Other
  {
    name: 'Cooking/Baking',
    category: 'other',
    description: 'Cooking or baking as a creative outlet',
    professionalBenefit: 'Demonstrates creativity, attention to detail, and process following',
    alignedRoles: ['ux-designer', 'frontend-developer', 'product-manager'],
    traits: ['creativity', 'attention-to-detail', 'process-oriented'],
    popularity: 80,
  },
  {
    name: 'Traveling',
    category: 'other',
    description: 'Exploring new places and cultures',
    professionalBenefit: 'Shows adaptability, cultural awareness, and curiosity',
    alignedRoles: ['product-manager', 'ux-designer', 'frontend-developer'],
    traits: ['adaptability', 'cultural-awareness', 'curiosity'],
    popularity: 85,
  },
  {
    name: 'Reading (Technical/Non-fiction)',
    category: 'other',
    description: 'Reading technical books or non-fiction',
    professionalBenefit: 'Demonstrates continuous learning and knowledge seeking',
    alignedRoles: ['backend-developer', 'data-scientist', 'product-manager'],
    traits: ['continuous-learning', 'curiosity', 'analytical'],
    popularity: 85,
  },
  {
    name: 'Podcasting',
    category: 'other',
    description: 'Creating or hosting podcasts',
    professionalBenefit: 'Shows communication skills and content creation ability',
    alignedRoles: ['product-manager', 'ux-designer'],
    traits: ['communication', 'creativity', 'storytelling'],
    popularity: 60,
  },
];

/**
 * Get hobbies by role
 */
export const getHobbiesByRole = (roleId: string): HobbyData[] => {
  return HOBBY_DATABASE.filter((hobby) => hobby.alignedRoles.includes(roleId));
};

/**
 * Get hobbies by category
 */
export const getHobbiesByCategory = (category: HobbyCategory): HobbyData[] => {
  return HOBBY_DATABASE.filter((hobby) => hobby.category === category);
};

/**
 * Get hobbies by trait
 */
export const getHobbiesByTrait = (trait: string): HobbyData[] => {
  return HOBBY_DATABASE.filter((hobby) => hobby.traits.includes(trait));
};

/**
 * Get popular hobbies
 */
export const getPopularHobbies = (minPopularity: number = 70): HobbyData[] => {
  return HOBBY_DATABASE.filter((hobby) => hobby.popularity >= minPopularity).sort(
    (a, b) => b.popularity - a.popularity
  );
};
