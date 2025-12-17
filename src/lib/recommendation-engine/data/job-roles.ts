/**
 * Job Role Database
 * Comprehensive database of job roles with associated metadata
 */

import { ExperienceLevel, SkillCategory } from '@/types/resume';

export interface JobRole {
  id: string;
  title: string;
  category: JobCategory;
  aliases: string[];
  description: string;
  requiredSkillCategories: SkillCategory[];
  primarySkills: string[];
  secondarySkills: string[];
  desiredTraits: string[];
  typicalResponsibilities: string[];
}

export type JobCategory =
  | 'engineering'
  | 'design'
  | 'product'
  | 'marketing'
  | 'sales'
  | 'data'
  | 'operations'
  | 'management';

/**
 * Comprehensive job role database
 */
export const JOB_ROLES: Record<string, JobRole> = {
  'frontend-developer': {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    category: 'engineering',
    aliases: ['front-end developer', 'ui developer', 'web developer'],
    description: 'Builds user-facing web applications and interfaces',
    requiredSkillCategories: ['languages', 'frameworks', 'tools'],
    primarySkills: [
      'JavaScript',
      'TypeScript',
      'React',
      'HTML',
      'CSS',
      'Responsive Design',
    ],
    secondarySkills: [
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
      'Webpack',
      'Git',
      'REST APIs',
      'GraphQL',
    ],
    desiredTraits: ['attention to detail', 'creativity', 'user empathy'],
    typicalResponsibilities: [
      'Build responsive user interfaces',
      'Collaborate with designers and backend developers',
      'Optimize web performance',
      'Implement accessibility standards',
    ],
  },
  'backend-developer': {
    id: 'backend-developer',
    title: 'Backend Developer',
    category: 'engineering',
    aliases: ['back-end developer', 'server developer', 'api developer'],
    description: 'Develops server-side logic and database systems',
    requiredSkillCategories: ['languages', 'frameworks', 'databases'],
    primarySkills: [
      'Node.js',
      'Python',
      'Java',
      'SQL',
      'REST APIs',
      'Database Design',
    ],
    secondarySkills: [
      'Express.js',
      'Django',
      'Spring Boot',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'AWS',
    ],
    desiredTraits: ['problem-solving', 'attention to detail', 'scalability mindset'],
    typicalResponsibilities: [
      'Design and implement APIs',
      'Manage database architecture',
      'Ensure system security and performance',
      'Write comprehensive tests',
    ],
  },
  'fullstack-developer': {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    category: 'engineering',
    aliases: ['full-stack developer', 'full stack engineer'],
    description: 'Works on both frontend and backend development',
    requiredSkillCategories: ['languages', 'frameworks', 'databases', 'tools'],
    primarySkills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'SQL',
      'REST APIs',
    ],
    secondarySkills: [
      'Next.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'AWS',
      'Git',
      'CI/CD',
    ],
    desiredTraits: ['versatility', 'quick learner', 'end-to-end thinking'],
    typicalResponsibilities: [
      'Develop full-stack features',
      'Design system architecture',
      'Integrate frontend with backend',
      'Deploy and maintain applications',
    ],
  },
  'data-scientist': {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'data',
    aliases: ['ml engineer', 'machine learning engineer'],
    description: 'Analyzes data and builds predictive models',
    requiredSkillCategories: ['languages', 'tools', 'other'],
    primarySkills: [
      'Python',
      'R',
      'SQL',
      'Machine Learning',
      'Statistics',
      'Data Analysis',
    ],
    secondarySkills: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Jupyter',
      'Tableau',
      'A/B Testing',
    ],
    desiredTraits: ['analytical thinking', 'curiosity', 'attention to detail'],
    typicalResponsibilities: [
      'Build predictive models',
      'Analyze large datasets',
      'Create data visualizations',
      'Communicate insights to stakeholders',
    ],
  },
  'product-manager': {
    id: 'product-manager',
    title: 'Product Manager',
    category: 'product',
    aliases: ['pm', 'product owner'],
    description: 'Defines product vision and prioritizes features',
    requiredSkillCategories: ['soft-skills', 'tools'],
    primarySkills: [
      'Product Strategy',
      'User Research',
      'Data Analysis',
      'Agile',
      'Roadmapping',
    ],
    secondarySkills: [
      'SQL',
      'Jira',
      'Figma',
      'A/B Testing',
      'Analytics',
      'Wireframing',
      'Stakeholder Management',
    ],
    desiredTraits: ['leadership', 'communication', 'strategic thinking'],
    typicalResponsibilities: [
      'Define product roadmap',
      'Prioritize feature development',
      'Collaborate with engineering and design',
      'Analyze user metrics',
    ],
  },
  'ux-designer': {
    id: 'ux-designer',
    title: 'UX Designer',
    category: 'design',
    aliases: ['user experience designer', 'product designer'],
    description: 'Designs user experiences and interfaces',
    requiredSkillCategories: ['tools', 'soft-skills'],
    primarySkills: [
      'Figma',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Interaction Design',
    ],
    secondarySkills: [
      'Adobe XD',
      'Sketch',
      'User Testing',
      'Information Architecture',
      'Design Systems',
      'HTML/CSS',
    ],
    desiredTraits: ['empathy', 'creativity', 'attention to detail'],
    typicalResponsibilities: [
      'Conduct user research',
      'Create wireframes and prototypes',
      'Design user flows',
      'Collaborate with developers',
    ],
  },
  'devops-engineer': {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    category: 'engineering',
    aliases: ['site reliability engineer', 'sre', 'platform engineer'],
    description: 'Manages infrastructure and deployment pipelines',
    requiredSkillCategories: ['cloud', 'tools', 'languages'],
    primarySkills: [
      'Docker',
      'Kubernetes',
      'AWS',
      'CI/CD',
      'Linux',
      'Infrastructure as Code',
    ],
    secondarySkills: [
      'Terraform',
      'Jenkins',
      'GitHub Actions',
      'Monitoring',
      'Python',
      'Bash',
      'Ansible',
    ],
    desiredTraits: ['automation mindset', 'problem-solving', 'reliability focus'],
    typicalResponsibilities: [
      'Build and maintain CI/CD pipelines',
      'Manage cloud infrastructure',
      'Monitor system performance',
      'Implement security best practices',
    ],
  },
  'mobile-developer': {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    category: 'engineering',
    aliases: ['ios developer', 'android developer', 'app developer'],
    description: 'Develops mobile applications for iOS and Android',
    requiredSkillCategories: ['languages', 'frameworks', 'tools'],
    primarySkills: [
      'Swift',
      'Kotlin',
      'React Native',
      'Mobile UI/UX',
      'REST APIs',
    ],
    secondarySkills: [
      'Flutter',
      'Firebase',
      'Xcode',
      'Android Studio',
      'Push Notifications',
      'App Store Optimization',
    ],
    desiredTraits: ['attention to detail', 'performance optimization', 'user focus'],
    typicalResponsibilities: [
      'Build native mobile applications',
      'Optimize app performance',
      'Implement mobile-specific features',
      'Ensure cross-device compatibility',
    ],
  },
  'qa-engineer': {
    id: 'qa-engineer',
    title: 'QA Engineer',
    category: 'engineering',
    aliases: ['quality assurance engineer', 'test engineer', 'sdet'],
    description: 'Ensures software quality through testing and automation',
    requiredSkillCategories: ['tools', 'languages', 'soft-skills'],
    primarySkills: [
      'Test Automation',
      'Selenium',
      'API Testing',
      'Manual Testing',
      'Bug Tracking',
    ],
    secondarySkills: [
      'Cypress',
      'Jest',
      'Postman',
      'JIRA',
      'TestRail',
      'Performance Testing',
      'CI/CD',
    ],
    desiredTraits: ['attention to detail', 'analytical thinking', 'communication'],
    typicalResponsibilities: [
      'Design and execute test plans',
      'Automate regression tests',
      'Identify and report bugs',
      'Collaborate with development teams',
    ],
  },
  'business-analyst': {
    id: 'business-analyst',
    title: 'Business Analyst',
    category: 'operations',
    aliases: ['ba', 'systems analyst', 'requirements analyst'],
    description: 'Bridges business needs with technical solutions',
    requiredSkillCategories: ['soft-skills', 'tools', 'other'],
    primarySkills: [
      'Requirements Gathering',
      'Data Analysis',
      'Documentation',
      'Stakeholder Management',
      'Process Mapping',
    ],
    secondarySkills: [
      'SQL',
      'Excel',
      'Tableau',
      'JIRA',
      'Agile',
      'UML',
      'Wireframing',
    ],
    desiredTraits: ['analytical thinking', 'communication', 'problem-solving'],
    typicalResponsibilities: [
      'Gather and document business requirements',
      'Analyze data to inform decisions',
      'Create process documentation',
      'Facilitate stakeholder meetings',
    ],
  },
  'marketing-manager': {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    category: 'marketing',
    aliases: ['digital marketing manager', 'brand manager'],
    description: 'Develops and executes marketing strategies',
    requiredSkillCategories: ['soft-skills', 'tools', 'other'],
    primarySkills: [
      'Marketing Strategy',
      'Content Marketing',
      'SEO',
      'Social Media Marketing',
      'Campaign Management',
    ],
    secondarySkills: [
      'Google Analytics',
      'Email Marketing',
      'CRM',
      'A/B Testing',
      'Budget Management',
      'Copywriting',
    ],
    desiredTraits: ['creativity', 'strategic thinking', 'data-driven'],
    typicalResponsibilities: [
      'Develop marketing campaigns',
      'Analyze campaign performance',
      'Manage marketing budget',
      'Coordinate with creative teams',
    ],
  },
  'content-writer': {
    id: 'content-writer',
    title: 'Content Writer',
    category: 'marketing',
    aliases: ['copywriter', 'technical writer', 'blogger'],
    description: 'Creates engaging written content for various platforms',
    requiredSkillCategories: ['soft-skills', 'other'],
    primarySkills: [
      'Writing',
      'Editing',
      'SEO Writing',
      'Research',
      'Content Strategy',
    ],
    secondarySkills: [
      'WordPress',
      'Content Management',
      'Social Media',
      'Copywriting',
      'Proofreading',
      'AP Style',
    ],
    desiredTraits: ['creativity', 'attention to detail', 'adaptability'],
    typicalResponsibilities: [
      'Write blog posts and articles',
      'Create marketing copy',
      'Optimize content for SEO',
      'Collaborate with marketing team',
    ],
  },
  'sales-representative': {
    id: 'sales-representative',
    title: 'Sales Representative',
    category: 'sales',
    aliases: ['account executive', 'sales exec', 'bdr'],
    description: 'Sells products or services to customers',
    requiredSkillCategories: ['soft-skills', 'tools'],
    primarySkills: [
      'Sales',
      'Negotiation',
      'Customer Relationship Management',
      'Cold Calling',
      'Presentation',
    ],
    secondarySkills: [
      'Salesforce',
      'Pipeline Management',
      'Account Management',
      'Lead Generation',
      'Sales Forecasting',
    ],
    desiredTraits: ['persuasion', 'resilience', 'relationship building'],
    typicalResponsibilities: [
      'Prospect and qualify leads',
      'Conduct product demonstrations',
      'Close deals and meet quotas',
      'Maintain customer relationships',
    ],
  },
  'hr-manager': {
    id: 'hr-manager',
    title: 'HR Manager',
    category: 'operations',
    aliases: ['human resources manager', 'people manager', 'hr director'],
    description: 'Manages human resources and employee relations',
    requiredSkillCategories: ['soft-skills', 'tools'],
    primarySkills: [
      'Recruitment',
      'Employee Relations',
      'Performance Management',
      'HR Policy',
      'Conflict Resolution',
    ],
    secondarySkills: [
      'HRIS',
      'Workday',
      'BambooHR',
      'Compliance',
      'Onboarding',
      'Training & Development',
    ],
    desiredTraits: ['empathy', 'discretion', 'organization'],
    typicalResponsibilities: [
      'Oversee recruitment processes',
      'Manage employee relations',
      'Develop HR policies',
      'Ensure compliance with labor laws',
    ],
  },
  'graphic-designer': {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    category: 'design',
    aliases: ['visual designer', 'brand designer'],
    description: 'Creates visual content for digital and print media',
    requiredSkillCategories: ['tools', 'soft-skills'],
    primarySkills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Graphic Design',
      'Typography',
      'Color Theory',
    ],
    secondarySkills: [
      'Adobe InDesign',
      'Figma',
      'Brand Design',
      'Print Design',
      'Digital Design',
      'Motion Graphics',
    ],
    desiredTraits: ['creativity', 'attention to detail', 'visual thinking'],
    typicalResponsibilities: [
      'Create visual designs for marketing',
      'Develop brand guidelines',
      'Design for print and digital',
      'Collaborate with marketing team',
    ],
  },
  'project-manager': {
    id: 'project-manager',
    title: 'Project Manager',
    category: 'management',
    aliases: ['pm', 'program manager', 'delivery manager'],
    description: 'Plans and executes projects to meet objectives',
    requiredSkillCategories: ['soft-skills', 'tools'],
    primarySkills: [
      'Project Planning',
      'Agile',
      'Scrum',
      'Risk Management',
      'Stakeholder Management',
    ],
    secondarySkills: [
      'JIRA',
      'MS Project',
      'Budget Management',
      'Resource Allocation',
      'Gantt Charts',
      'PMP Certification',
    ],
    desiredTraits: ['leadership', 'organization', 'problem-solving'],
    typicalResponsibilities: [
      'Define project scope and objectives',
      'Create project timelines',
      'Manage project resources',
      'Monitor project progress',
    ],
  },
  'customer-success-manager': {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    category: 'operations',
    aliases: ['csm', 'client success manager', 'account manager'],
    description: 'Ensures customer satisfaction and retention',
    requiredSkillCategories: ['soft-skills', 'tools'],
    primarySkills: [
      'Customer Success',
      'Account Management',
      'Relationship Building',
      'Problem Solving',
      'Communication',
    ],
    secondarySkills: [
      'Salesforce',
      'CRM',
      'Data Analysis',
      'Onboarding',
      'Training',
      'Renewals',
    ],
    desiredTraits: ['empathy', 'proactive', 'customer-focused'],
    typicalResponsibilities: [
      'Onboard new customers',
      'Monitor customer health metrics',
      'Drive product adoption',
      'Manage renewals and upsells',
    ],
  },
};

/**
 * Get job role by ID or title
 */
export const getJobRole = (identifier: string): JobRole | undefined => {
  const normalizedId = identifier.toLowerCase().replace(/\s+/g, '-');

  // Try direct match
  if (JOB_ROLES[normalizedId]) {
    return JOB_ROLES[normalizedId];
  }

  // Try alias match
  for (const role of Object.values(JOB_ROLES)) {
    if (
      role.title.toLowerCase() === identifier.toLowerCase() ||
      role.aliases.some((alias) => alias.toLowerCase() === identifier.toLowerCase())
    ) {
      return role;
    }
  }

  return undefined;
};

/**
 * Get all job roles by category
 */
export const getJobRolesByCategory = (category: JobCategory): JobRole[] => {
  return Object.values(JOB_ROLES).filter((role) => role.category === category);
};

/**
 * Get all available job role titles
 */
export const getAllJobTitles = (): string[] => {
  return Object.values(JOB_ROLES).map((role) => role.title);
};
