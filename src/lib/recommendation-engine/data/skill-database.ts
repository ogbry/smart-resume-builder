/**
 * Skill Database
 * Comprehensive database of technical and soft skills with metadata
 */

import { SkillCategory, ExperienceLevel } from '@/types/resume';

export interface SkillData {
  name: string;
  category: SkillCategory;
  aliases: string[];
  description: string;
  relatedSkills: string[];
  experienceLevels: ExperienceLevel[];
  popularity: number; // 1-100
  industryRelevance: Record<string, number>; // job role -> relevance score
}

/**
 * Comprehensive skill database
 */
export const SKILLS_DATABASE: Record<string, SkillData> = {
  // Languages
  JavaScript: {
    name: 'JavaScript',
    category: 'languages',
    aliases: ['JS', 'ECMAScript'],
    description: 'Core programming language for web development',
    relatedSkills: ['TypeScript', 'React', 'Node.js', 'HTML', 'CSS'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 98,
    industryRelevance: {
      'frontend-developer': 100,
      'fullstack-developer': 100,
      'backend-developer': 70,
    },
  },
  TypeScript: {
    name: 'TypeScript',
    category: 'languages',
    aliases: ['TS'],
    description: 'Typed superset of JavaScript',
    relatedSkills: ['JavaScript', 'React', 'Node.js', 'Next.js'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 95,
    industryRelevance: {
      'frontend-developer': 95,
      'fullstack-developer': 95,
      'backend-developer': 80,
    },
  },
  Python: {
    name: 'Python',
    category: 'languages',
    aliases: ['Py'],
    description: 'Versatile programming language for backend and data science',
    relatedSkills: ['Django', 'Flask', 'Pandas', 'NumPy', 'TensorFlow'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 97,
    industryRelevance: {
      'backend-developer': 90,
      'data-scientist': 100,
      'fullstack-developer': 75,
    },
  },
  Java: {
    name: 'Java',
    category: 'languages',
    aliases: [],
    description: 'Enterprise-grade object-oriented programming language',
    relatedSkills: ['Spring Boot', 'Maven', 'Gradle', 'SQL'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 85,
    industryRelevance: {
      'backend-developer': 85,
      'fullstack-developer': 60,
    },
  },
  SQL: {
    name: 'SQL',
    category: 'languages',
    aliases: ['Structured Query Language'],
    description: 'Database query language',
    relatedSkills: ['PostgreSQL', 'MySQL', 'Database Design'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 90,
    industryRelevance: {
      'backend-developer': 95,
      'fullstack-developer': 90,
      'data-scientist': 95,
      'product-manager': 70,
    },
  },
  HTML: {
    name: 'HTML',
    category: 'languages',
    aliases: ['HTML5'],
    description: 'Markup language for web pages',
    relatedSkills: ['CSS', 'JavaScript', 'Accessibility'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 95,
    industryRelevance: {
      'frontend-developer': 100,
      'fullstack-developer': 90,
    },
  },
  CSS: {
    name: 'CSS',
    category: 'languages',
    aliases: ['CSS3', 'Cascading Style Sheets'],
    description: 'Styling language for web pages',
    relatedSkills: ['HTML', 'Sass', 'Tailwind CSS', 'Responsive Design'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 95,
    industryRelevance: {
      'frontend-developer': 100,
      'fullstack-developer': 85,
    },
  },

  // Frameworks
  React: {
    name: 'React',
    category: 'frameworks',
    aliases: ['React.js', 'ReactJS'],
    description: 'Popular JavaScript library for building UIs',
    relatedSkills: ['JavaScript', 'TypeScript', 'Next.js', 'Redux', 'Hooks'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 98,
    industryRelevance: {
      'frontend-developer': 100,
      'fullstack-developer': 95,
    },
  },
  'Next.js': {
    name: 'Next.js',
    category: 'frameworks',
    aliases: ['NextJS'],
    description: 'React framework for production',
    relatedSkills: ['React', 'TypeScript', 'Server Components', 'API Routes'],
    experienceLevels: ['mid', 'senior', 'lead'],
    popularity: 92,
    industryRelevance: {
      'frontend-developer': 90,
      'fullstack-developer': 95,
    },
  },
  'Node.js': {
    name: 'Node.js',
    category: 'frameworks',
    aliases: ['NodeJS', 'Node'],
    description: 'JavaScript runtime for server-side development',
    relatedSkills: ['JavaScript', 'Express.js', 'REST APIs', 'MongoDB'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 95,
    industryRelevance: {
      'backend-developer': 90,
      'fullstack-developer': 95,
    },
  },
  'Express.js': {
    name: 'Express.js',
    category: 'frameworks',
    aliases: ['Express', 'ExpressJS'],
    description: 'Minimal Node.js web framework',
    relatedSkills: ['Node.js', 'REST APIs', 'Middleware', 'MongoDB'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 88,
    industryRelevance: {
      'backend-developer': 85,
      'fullstack-developer': 90,
    },
  },
  Django: {
    name: 'Django',
    category: 'frameworks',
    aliases: [],
    description: 'High-level Python web framework',
    relatedSkills: ['Python', 'PostgreSQL', 'REST APIs', 'ORM'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 80,
    industryRelevance: {
      'backend-developer': 85,
      'fullstack-developer': 75,
    },
  },

  // Tools
  Git: {
    name: 'Git',
    category: 'tools',
    aliases: ['Version Control'],
    description: 'Distributed version control system',
    relatedSkills: ['GitHub', 'GitLab', 'CI/CD'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 99,
    industryRelevance: {
      'frontend-developer': 100,
      'backend-developer': 100,
      'fullstack-developer': 100,
      'devops-engineer': 100,
    },
  },
  Docker: {
    name: 'Docker',
    category: 'tools',
    aliases: ['Containerization'],
    description: 'Platform for containerizing applications',
    relatedSkills: ['Kubernetes', 'CI/CD', 'Linux', 'DevOps'],
    experienceLevels: ['mid', 'senior', 'lead'],
    popularity: 90,
    industryRelevance: {
      'devops-engineer': 100,
      'backend-developer': 85,
      'fullstack-developer': 80,
    },
  },
  Figma: {
    name: 'Figma',
    category: 'tools',
    aliases: [],
    description: 'Collaborative design tool',
    relatedSkills: ['UI Design', 'Prototyping', 'Design Systems'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 95,
    industryRelevance: {
      'ux-designer': 100,
      'product-manager': 70,
      'frontend-developer': 60,
    },
  },

  // Databases
  PostgreSQL: {
    name: 'PostgreSQL',
    category: 'databases',
    aliases: ['Postgres'],
    description: 'Advanced open-source relational database',
    relatedSkills: ['SQL', 'Database Design', 'Backend Development'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 88,
    industryRelevance: {
      'backend-developer': 90,
      'fullstack-developer': 85,
      'data-scientist': 75,
    },
  },
  MongoDB: {
    name: 'MongoDB',
    category: 'databases',
    aliases: ['Mongo'],
    description: 'NoSQL document database',
    relatedSkills: ['Node.js', 'Express.js', 'Mongoose', 'Database Design'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 85,
    industryRelevance: {
      'backend-developer': 80,
      'fullstack-developer': 85,
    },
  },

  // Cloud
  AWS: {
    name: 'AWS',
    category: 'cloud',
    aliases: ['Amazon Web Services'],
    description: 'Cloud computing platform',
    relatedSkills: ['EC2', 'S3', 'Lambda', 'CloudFormation', 'DevOps'],
    experienceLevels: ['mid', 'senior', 'lead'],
    popularity: 92,
    industryRelevance: {
      'devops-engineer': 95,
      'backend-developer': 80,
      'fullstack-developer': 75,
    },
  },

  // Soft Skills
  'Problem Solving': {
    name: 'Problem Solving',
    category: 'soft-skills',
    aliases: ['Critical Thinking'],
    description: 'Ability to analyze and solve complex problems',
    relatedSkills: ['Analytical Thinking', 'Decision Making'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 100,
    industryRelevance: {
      'frontend-developer': 95,
      'backend-developer': 95,
      'fullstack-developer': 95,
      'data-scientist': 100,
    },
  },
  Communication: {
    name: 'Communication',
    category: 'soft-skills',
    aliases: ['Verbal Communication', 'Written Communication'],
    description: 'Effective communication with team and stakeholders',
    relatedSkills: ['Collaboration', 'Presentation', 'Documentation'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 100,
    industryRelevance: {
      'product-manager': 100,
      'ux-designer': 95,
      'frontend-developer': 90,
      'backend-developer': 90,
    },
  },
  Leadership: {
    name: 'Leadership',
    category: 'soft-skills',
    aliases: ['Team Leadership', 'Mentorship'],
    description: 'Leading teams and mentoring junior developers',
    relatedSkills: ['Communication', 'Project Management', 'Decision Making'],
    experienceLevels: ['senior', 'lead'],
    popularity: 85,
    industryRelevance: {
      'product-manager': 100,
      'frontend-developer': 70,
      'backend-developer': 70,
      'project-manager': 100,
    },
  },

  // Additional Tools & Technologies
  Selenium: {
    name: 'Selenium',
    category: 'tools',
    aliases: ['Selenium WebDriver'],
    description: 'Automated testing framework for web applications',
    relatedSkills: ['Test Automation', 'QA', 'Java', 'Python'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 85,
    industryRelevance: {
      'qa-engineer': 95,
    },
  },

  Cypress: {
    name: 'Cypress',
    category: 'tools',
    aliases: [],
    description: 'Modern end-to-end testing framework',
    relatedSkills: ['JavaScript', 'Test Automation', 'QA'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 88,
    industryRelevance: {
      'qa-engineer': 90,
      'frontend-developer': 75,
    },
  },

  Salesforce: {
    name: 'Salesforce',
    category: 'tools',
    aliases: ['SFDC', 'CRM'],
    description: 'Customer relationship management platform',
    relatedSkills: ['CRM', 'Sales', 'Account Management'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 90,
    industryRelevance: {
      'sales-representative': 95,
      'customer-success-manager': 90,
      'marketing-manager': 70,
    },
  },

  'Google Analytics': {
    name: 'Google Analytics',
    category: 'tools',
    aliases: ['GA', 'Analytics'],
    description: 'Web analytics platform',
    relatedSkills: ['Data Analysis', 'Marketing', 'SEO'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 92,
    industryRelevance: {
      'marketing-manager': 95,
      'content-writer': 75,
      'product-manager': 80,
    },
  },

  'Adobe Photoshop': {
    name: 'Adobe Photoshop',
    category: 'tools',
    aliases: ['Photoshop', 'PS'],
    description: 'Industry-standard image editing software',
    relatedSkills: ['Adobe Illustrator', 'Graphic Design', 'Photo Editing'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 93,
    industryRelevance: {
      'graphic-designer': 100,
      'ux-designer': 75,
    },
  },

  'Adobe Illustrator': {
    name: 'Adobe Illustrator',
    category: 'tools',
    aliases: ['Illustrator', 'AI'],
    description: 'Vector graphics editing software',
    relatedSkills: ['Adobe Photoshop', 'Graphic Design', 'Logo Design'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 90,
    industryRelevance: {
      'graphic-designer': 100,
    },
  },

  WordPress: {
    name: 'WordPress',
    category: 'tools',
    aliases: ['WP'],
    description: 'Content management system',
    relatedSkills: ['HTML', 'CSS', 'PHP', 'Content Management'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior'],
    popularity: 85,
    industryRelevance: {
      'content-writer': 85,
      'marketing-manager': 70,
    },
  },

  JIRA: {
    name: 'JIRA',
    category: 'tools',
    aliases: ['Atlassian JIRA'],
    description: 'Project and issue tracking software',
    relatedSkills: ['Agile', 'Scrum', 'Project Management'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 88,
    industryRelevance: {
      'project-manager': 95,
      'qa-engineer': 90,
      'business-analyst': 85,
      'product-manager': 90,
    },
  },

  Tableau: {
    name: 'Tableau',
    category: 'tools',
    aliases: [],
    description: 'Data visualization and business intelligence tool',
    relatedSkills: ['Data Analysis', 'SQL', 'Business Intelligence'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 85,
    industryRelevance: {
      'business-analyst': 90,
      'data-scientist': 85,
      'marketing-manager': 70,
    },
  },

  Excel: {
    name: 'Excel',
    category: 'tools',
    aliases: ['Microsoft Excel'],
    description: 'Spreadsheet software for data analysis',
    relatedSkills: ['Data Analysis', 'VBA', 'Pivot Tables'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 95,
    industryRelevance: {
      'business-analyst': 95,
      'project-manager': 85,
      'marketing-manager': 80,
      'sales-representative': 75,
    },
  },

  // Additional Soft Skills
  'Sales': {
    name: 'Sales',
    category: 'soft-skills',
    aliases: ['Selling', 'Business Development'],
    description: 'Ability to sell products or services effectively',
    relatedSkills: ['Negotiation', 'Communication', 'Persuasion'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 90,
    industryRelevance: {
      'sales-representative': 100,
      'customer-success-manager': 80,
    },
  },

  Negotiation: {
    name: 'Negotiation',
    category: 'soft-skills',
    aliases: ['Deal Making'],
    description: 'Ability to negotiate deals and agreements',
    relatedSkills: ['Sales', 'Communication', 'Persuasion'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 85,
    industryRelevance: {
      'sales-representative': 95,
      'project-manager': 75,
      'hr-manager': 80,
    },
  },

  'Project Management': {
    name: 'Project Management',
    category: 'soft-skills',
    aliases: ['PM'],
    description: 'Managing projects from initiation to completion',
    relatedSkills: ['Leadership', 'Organization', 'Time Management'],
    experienceLevels: ['mid', 'senior', 'lead'],
    popularity: 92,
    industryRelevance: {
      'project-manager': 100,
      'product-manager': 90,
      'marketing-manager': 80,
    },
  },

  'Content Strategy': {
    name: 'Content Strategy',
    category: 'soft-skills',
    aliases: ['Content Planning'],
    description: 'Planning and managing content creation',
    relatedSkills: ['Writing', 'SEO', 'Marketing'],
    experienceLevels: ['mid', 'senior', 'lead'],
    popularity: 80,
    industryRelevance: {
      'content-writer': 90,
      'marketing-manager': 85,
    },
  },

  'Data Analysis': {
    name: 'Data Analysis',
    category: 'soft-skills',
    aliases: ['Analytics'],
    description: 'Analyzing data to derive insights',
    relatedSkills: ['SQL', 'Excel', 'Tableau', 'Critical Thinking'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 95,
    industryRelevance: {
      'data-scientist': 100,
      'business-analyst': 100,
      'product-manager': 90,
      'marketing-manager': 85,
    },
  },

  SEO: {
    name: 'SEO',
    category: 'soft-skills',
    aliases: ['Search Engine Optimization'],
    description: 'Optimizing content for search engines',
    relatedSkills: ['Content Marketing', 'Google Analytics', 'Writing'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 88,
    industryRelevance: {
      'content-writer': 95,
      'marketing-manager': 90,
    },
  },

  Recruitment: {
    name: 'Recruitment',
    category: 'soft-skills',
    aliases: ['Hiring', 'Talent Acquisition'],
    description: 'Sourcing and hiring candidates',
    relatedSkills: ['Interviewing', 'HR', 'Communication'],
    experienceLevels: ['junior', 'mid', 'senior', 'lead'],
    popularity: 85,
    industryRelevance: {
      'hr-manager': 100,
    },
  },

  Agile: {
    name: 'Agile',
    category: 'soft-skills',
    aliases: ['Agile Methodology'],
    description: 'Iterative project management approach',
    relatedSkills: ['Scrum', 'Project Management', 'JIRA'],
    experienceLevels: ['entry', 'junior', 'mid', 'senior', 'lead'],
    popularity: 90,
    industryRelevance: {
      'project-manager': 95,
      'product-manager': 90,
      'qa-engineer': 85,
      'business-analyst': 80,
    },
  },
};

/**
 * Get skill data by name
 */
export const getSkillData = (skillName: string): SkillData | undefined => {
  // Try direct match
  if (SKILLS_DATABASE[skillName]) {
    return SKILLS_DATABASE[skillName];
  }

  // Try case-insensitive match
  const normalizedName = skillName.toLowerCase();
  for (const [key, skill] of Object.entries(SKILLS_DATABASE)) {
    if (
      key.toLowerCase() === normalizedName ||
      skill.aliases.some((alias) => alias.toLowerCase() === normalizedName)
    ) {
      return skill;
    }
  }

  return undefined;
};

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category: SkillCategory): SkillData[] => {
  return Object.values(SKILLS_DATABASE).filter((skill) => skill.category === category);
};

/**
 * Get all skill names
 */
export const getAllSkillNames = (): string[] => {
  return Object.keys(SKILLS_DATABASE);
};
