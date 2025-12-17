/**
 * Bullet Point Templates
 * Templates for generating achievement-focused resume bullet points
 */

export interface BulletTemplate {
  id: string;
  template: string;
  category: BulletCategory;
  variables: string[];
  example: string;
  applicableRoles: string[];
  impactLevel: 'high' | 'medium' | 'low';
}

export type BulletCategory =
  | 'achievement'
  | 'leadership'
  | 'collaboration'
  | 'technical'
  | 'process-improvement'
  | 'impact';

/**
 * Bullet point templates with variables
 * Variables are marked with {variableName}
 */
export const BULLET_TEMPLATES: BulletTemplate[] = [
  // Achievement Templates
  {
    id: 'achievement-metric',
    template: 'Achieved {metric} by {action}, resulting in {impact}',
    category: 'achievement',
    variables: ['metric', 'action', 'impact'],
    example: 'Achieved 40% performance improvement by implementing code splitting, resulting in faster page load times',
    applicableRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer'],
    impactLevel: 'high',
  },
  {
    id: 'achievement-percentage',
    template: 'Increased {metric} by {percentage}% through {method}',
    category: 'achievement',
    variables: ['metric', 'percentage', 'method'],
    example: 'Increased user engagement by 35% through implementing personalized recommendations',
    applicableRoles: ['frontend-developer', 'product-manager', 'data-scientist'],
    impactLevel: 'high',
  },
  {
    id: 'achievement-reduction',
    template: 'Reduced {problem} by {percentage}% by {solution}',
    category: 'achievement',
    variables: ['problem', 'percentage', 'solution'],
    example: 'Reduced server response time by 50% by optimizing database queries',
    applicableRoles: ['backend-developer', 'fullstack-developer', 'devops-engineer'],
    impactLevel: 'high',
  },

  // Technical Templates
  {
    id: 'technical-build',
    template: 'Built {feature} using {technologies} to {outcome}',
    category: 'technical',
    variables: ['feature', 'technologies', 'outcome'],
    example: 'Built a real-time chat feature using WebSockets and Redis to enable instant team communication',
    applicableRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer'],
    impactLevel: 'medium',
  },
  {
    id: 'technical-implement',
    template: 'Implemented {technology} to {benefit}, improving {metric}',
    category: 'technical',
    variables: ['technology', 'benefit', 'metric'],
    example: 'Implemented lazy loading to reduce initial bundle size, improving first paint by 2 seconds',
    applicableRoles: ['frontend-developer', 'fullstack-developer'],
    impactLevel: 'medium',
  },
  {
    id: 'technical-architect',
    template: 'Architected {system} using {technologies}, supporting {scale}',
    category: 'technical',
    variables: ['system', 'technologies', 'scale'],
    example: 'Architected microservices infrastructure using Docker and Kubernetes, supporting 100K+ daily users',
    applicableRoles: ['backend-developer', 'fullstack-developer', 'devops-engineer'],
    impactLevel: 'high',
  },

  // Leadership Templates
  {
    id: 'leadership-led',
    template: 'Led {team} to {achievement}, resulting in {outcome}',
    category: 'leadership',
    variables: ['team', 'achievement', 'outcome'],
    example: 'Led a team of 5 developers to launch new product features, resulting in 20% increase in user retention',
    applicableRoles: ['fullstack-developer', 'product-manager', 'backend-developer'],
    impactLevel: 'high',
  },
  {
    id: 'leadership-mentored',
    template: 'Mentored {number} {role} in {area}, improving {metric}',
    category: 'leadership',
    variables: ['number', 'role', 'area', 'metric'],
    example: 'Mentored 3 junior developers in React best practices, improving code quality scores by 30%',
    applicableRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer'],
    impactLevel: 'medium',
  },

  // Collaboration Templates
  {
    id: 'collaboration-partnered',
    template: 'Partnered with {teams} to {action}, delivering {result}',
    category: 'collaboration',
    variables: ['teams', 'action', 'result'],
    example: 'Partnered with design and product teams to redesign checkout flow, delivering 25% conversion increase',
    applicableRoles: ['frontend-developer', 'ux-designer', 'product-manager'],
    impactLevel: 'high',
  },
  {
    id: 'collaboration-worked',
    template: 'Collaborated with {stakeholders} to {action}, ensuring {outcome}',
    category: 'collaboration',
    variables: ['stakeholders', 'action', 'outcome'],
    example: 'Collaborated with backend team to design REST APIs, ensuring seamless frontend integration',
    applicableRoles: ['frontend-developer', 'backend-developer', 'fullstack-developer'],
    impactLevel: 'medium',
  },

  // Process Improvement Templates
  {
    id: 'process-established',
    template: 'Established {process} to {benefit}, reducing {metric} by {percentage}%',
    category: 'process-improvement',
    variables: ['process', 'benefit', 'metric', 'percentage'],
    example: 'Established automated testing pipeline to improve code quality, reducing bugs by 45%',
    applicableRoles: ['fullstack-developer', 'devops-engineer', 'backend-developer'],
    impactLevel: 'high',
  },
  {
    id: 'process-automated',
    template: 'Automated {task} using {tool}, saving {time} per {period}',
    category: 'process-improvement',
    variables: ['task', 'tool', 'time', 'period'],
    example: 'Automated deployment process using GitHub Actions, saving 10 hours per week',
    applicableRoles: ['devops-engineer', 'fullstack-developer', 'backend-developer'],
    impactLevel: 'high',
  },
  {
    id: 'process-optimized',
    template: 'Optimized {process} by {method}, improving {metric}',
    category: 'process-improvement',
    variables: ['process', 'method', 'metric'],
    example: 'Optimized build process by implementing incremental builds, improving CI/CD speed by 60%',
    applicableRoles: ['devops-engineer', 'frontend-developer', 'backend-developer'],
    impactLevel: 'medium',
  },

  // Impact Templates
  {
    id: 'impact-launched',
    template: 'Launched {feature} that {impact}, serving {scale}',
    category: 'impact',
    variables: ['feature', 'impact', 'scale'],
    example: 'Launched mobile-responsive design that improved mobile conversions by 40%, serving 50K+ monthly users',
    applicableRoles: ['frontend-developer', 'fullstack-developer', 'mobile-developer'],
    impactLevel: 'high',
  },
  {
    id: 'impact-delivered',
    template: 'Delivered {project} {timeframe}, exceeding {metric} by {percentage}%',
    category: 'impact',
    variables: ['project', 'timeframe', 'metric', 'percentage'],
    example: 'Delivered e-commerce platform 2 weeks ahead of schedule, exceeding performance targets by 30%',
    applicableRoles: ['fullstack-developer', 'backend-developer', 'frontend-developer'],
    impactLevel: 'high',
  },

  // Data Science Specific
  {
    id: 'data-built-model',
    template: 'Built {model} using {algorithms} to predict {outcome}, achieving {accuracy}% accuracy',
    category: 'technical',
    variables: ['model', 'algorithms', 'outcome', 'accuracy'],
    example: 'Built recommendation engine using collaborative filtering to predict user preferences, achieving 85% accuracy',
    applicableRoles: ['data-scientist'],
    impactLevel: 'high',
  },
  {
    id: 'data-analyzed',
    template: 'Analyzed {data} using {tools} to {insight}, informing {decision}',
    category: 'achievement',
    variables: ['data', 'tools', 'insight', 'decision'],
    example: 'Analyzed user behavior using Python and SQL to identify churn patterns, informing retention strategy',
    applicableRoles: ['data-scientist', 'product-manager'],
    impactLevel: 'high',
  },

  // Product Management Specific
  {
    id: 'pm-defined',
    template: 'Defined {strategy} based on {research}, resulting in {outcome}',
    category: 'achievement',
    variables: ['strategy', 'research', 'outcome'],
    example: 'Defined product roadmap based on user research and market analysis, resulting in 3 successful launches',
    applicableRoles: ['product-manager'],
    impactLevel: 'high',
  },
  {
    id: 'pm-prioritized',
    template: 'Prioritized {features} using {methodology}, delivering {value}',
    category: 'leadership',
    variables: ['features', 'methodology', 'value'],
    example: 'Prioritized feature backlog using RICE framework, delivering $2M in annual revenue',
    applicableRoles: ['product-manager'],
    impactLevel: 'high',
  },

  // Design Specific
  {
    id: 'design-redesigned',
    template: 'Redesigned {feature} based on {research}, improving {metric} by {percentage}%',
    category: 'achievement',
    variables: ['feature', 'research', 'metric', 'percentage'],
    example: 'Redesigned onboarding flow based on user testing, improving completion rate by 50%',
    applicableRoles: ['ux-designer', 'product-manager'],
    impactLevel: 'high',
  },
  {
    id: 'design-created',
    template: 'Created {deliverable} for {purpose}, adopted by {audience}',
    category: 'impact',
    variables: ['deliverable', 'purpose', 'audience'],
    example: 'Created design system for brand consistency, adopted by 4 product teams across the organization',
    applicableRoles: ['ux-designer'],
    impactLevel: 'high',
  },
];

/**
 * Get templates by role
 */
export const getTemplatesByRole = (roleId: string): BulletTemplate[] => {
  return BULLET_TEMPLATES.filter((template) =>
    template.applicableRoles.includes(roleId)
  );
};

/**
 * Get templates by category
 */
export const getTemplatesByCategory = (category: BulletCategory): BulletTemplate[] => {
  return BULLET_TEMPLATES.filter((template) => template.category === category);
};

/**
 * Get high-impact templates
 */
export const getHighImpactTemplates = (): BulletTemplate[] => {
  return BULLET_TEMPLATES.filter((template) => template.impactLevel === 'high');
};
