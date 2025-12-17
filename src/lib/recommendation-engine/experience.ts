/**
 * Experience/Bullet Point Recommendation Logic
 * Generates achievement-focused bullet points for work experience
 */

import { BulletPointSuggestion } from '@/types/recommendations';
import { Experience } from '@/types/resume';
import {
  BULLET_TEMPLATES,
  BulletTemplate,
  getTemplatesByRole,
  getHighImpactTemplates,
} from './data/bullet-templates';
import { getJobRole } from './data/job-roles';

/**
 * Generate bullet point suggestions for an experience entry
 */
export function generateBulletPointSuggestions(
  experience: Partial<Experience>,
  targetRole: string,
  skills: string[],
  maxSuggestions: number = 8
): BulletPointSuggestion[] {
  const suggestions: BulletPointSuggestion[] = [];

  // Get job role to find relevant templates
  const jobRole = getJobRole(targetRole);
  if (!jobRole) {
    return getGenericBulletPoints(maxSuggestions);
  }

  // Get templates applicable to the role
  const roleTemplates = getTemplatesByRole(jobRole.id);

  // Prioritize high-impact templates
  const highImpactTemplates = roleTemplates.filter((t) => t.impactLevel === 'high');
  const mediumImpactTemplates = roleTemplates.filter((t) => t.impactLevel === 'medium');

  // Generate suggestions from high-impact templates
  for (const template of highImpactTemplates) {
    const suggestion = createBulletPointSuggestion(
      template,
      experience,
      skills,
      jobRole.id
    );
    suggestions.push(suggestion);
  }

  // Fill remaining slots with medium-impact templates
  const remaining = maxSuggestions - suggestions.length;
  for (let i = 0; i < Math.min(remaining, mediumImpactTemplates.length); i++) {
    const suggestion = createBulletPointSuggestion(
      mediumImpactTemplates[i],
      experience,
      skills,
      jobRole.id
    );
    suggestions.push(suggestion);
  }

  return suggestions.slice(0, maxSuggestions);
}

/**
 * Create a bullet point suggestion from a template
 */
function createBulletPointSuggestion(
  template: BulletTemplate,
  experience: Partial<Experience>,
  skills: string[],
  roleId: string
): BulletPointSuggestion {
  const filledContent = fillTemplateWithExamples(template, experience, skills, roleId);
  const variables = extractVariables(template.template);

  return {
    id: `bullet-${template.id}-${Date.now()}`,
    type: 'bullet-point',
    priority: template.impactLevel === 'high' ? 'high' : 'medium',
    content: filledContent,
    template: template.template,
    variables,
    reason: getCategoryReason(template.category),
    impactMetrics: extractMetricsFromTemplate(template),
    metadata: {
      category: template.category,
      impactLevel: template.impactLevel,
      templateId: template.id,
    },
  };
}

/**
 * Fill template with context-appropriate examples
 */
function fillTemplateWithExamples(
  template: BulletTemplate,
  experience: Partial<Experience>,
  skills: string[],
  roleId: string
): string {
  let content = template.template;
  const position = experience.position || 'your role';

  // Create a mapping of variables to example values
  const variableMap: Record<string, string> = {
    // Technical variables
    feature: 'user authentication system',
    technology: skills[0] || 'modern technologies',
    technologies: skills.slice(0, 2).join(' and ') || 'latest frameworks',
    system: 'scalable backend infrastructure',
    tool: skills.find((s) => s.toLowerCase().includes('docker')) || 'automation tools',

    // Metrics variables
    metric: 'application performance',
    percentage: '35',
    accuracy: '90',

    // Action variables
    action: 'implementing best practices',
    method: 'adopting modern development patterns',
    solution: 'refactoring critical components',

    // Impact variables
    impact: 'improved user experience',
    outcome: 'enhanced system reliability',
    benefit: 'streamline development workflow',
    result: 'faster deployment cycles',
    value: 'significant cost savings',

    // Team variables
    team: 'cross-functional team of 5 engineers',
    number: '3',
    role: 'junior developers',
    stakeholders: 'design and product teams',
    teams: 'engineering and QA teams',

    // Process variables
    problem: 'deployment bottlenecks',
    process: 'CI/CD pipeline',
    task: 'manual testing procedures',

    // Scale variables
    scale: '10,000+ daily active users',
    time: '15 hours',
    period: 'week',
    timeframe: 'ahead of schedule',

    // Project variables
    project: 'new feature release',
    deliverable: 'comprehensive design system',
    purpose: 'maintaining brand consistency',
    audience: '3 product teams',

    // Other variables
    area: 'React best practices and state management',
    achievement: 'launch critical product features',
    strategy: 'product roadmap',
    research: 'user interviews and data analysis',
    features: 'high-impact user stories',
    methodology: 'data-driven prioritization',
    insight: 'identify key user pain points',
    decision: 'product strategy decisions',
    model: 'machine learning recommendation system',
    algorithms: 'collaborative filtering and neural networks',
    data: 'customer behavior datasets',
    tools: 'Python and SQL',
  };

  // Replace all variables
  for (const [variable, value] of Object.entries(variableMap)) {
    const regex = new RegExp(`\\{${variable}\\}`, 'g');
    content = content.replace(regex, value);
  }

  return content;
}

/**
 * Extract variables from template string
 */
function extractVariables(template: string): Record<string, string> {
  const variables: Record<string, string> = {};
  const regex = /\{(\w+)\}/g;
  let match;

  while ((match = regex.exec(template)) !== null) {
    const varName = match[1];
    variables[varName] = `[${varName}]`;
  }

  return variables;
}

/**
 * Get reason text based on category
 */
function getCategoryReason(category: string): string {
  const reasons: Record<string, string> = {
    achievement: 'Highlights measurable achievements and results',
    leadership: 'Demonstrates leadership and team management',
    collaboration: 'Shows cross-functional collaboration',
    technical: 'Showcases technical expertise',
    'process-improvement': 'Emphasizes process optimization',
    impact: 'Demonstrates tangible business impact',
  };

  return reasons[category] || 'Strengthens your experience description';
}

/**
 * Extract potential metrics from template
 */
function extractMetricsFromTemplate(template: BulletTemplate): string[] {
  const metrics: string[] = [];

  if (template.template.includes('{percentage}')) {
    metrics.push('Percentage improvement');
  }
  if (template.template.includes('{metric}')) {
    metrics.push('Measurable metric');
  }
  if (template.template.includes('{time}')) {
    metrics.push('Time saved');
  }
  if (template.template.includes('{scale}')) {
    metrics.push('Scale/users affected');
  }
  if (template.template.includes('{accuracy}')) {
    metrics.push('Accuracy percentage');
  }

  return metrics;
}

/**
 * Get generic bullet points when role is not specified
 */
function getGenericBulletPoints(maxSuggestions: number): BulletPointSuggestion[] {
  const genericTemplates = getHighImpactTemplates().slice(0, maxSuggestions);

  return genericTemplates.map((template) =>
    createBulletPointSuggestion(template, {}, [], 'generic')
  );
}

/**
 * Analyze existing bullet points and suggest improvements
 */
export function analyzeBulletPoints(bulletPoints: string[]): {
  hasMetrics: boolean;
  hasActionVerbs: boolean;
  suggestions: string[];
} {
  const actionVerbs = [
    'achieved',
    'built',
    'created',
    'delivered',
    'developed',
    'implemented',
    'improved',
    'increased',
    'launched',
    'led',
    'optimized',
    'reduced',
    'redesigned',
  ];

  const hasMetrics = bulletPoints.some(
    (bp) =>
      /\d+%/.test(bp) || // percentage
      /\d+x/.test(bp) || // multiplier
      /\$\d+/.test(bp) || // money
      /\d+\+/.test(bp) // scale
  );

  const hasActionVerbs = bulletPoints.some((bp) =>
    actionVerbs.some((verb) => bp.toLowerCase().startsWith(verb))
  );

  const suggestions: string[] = [];

  if (!hasMetrics) {
    suggestions.push('Add quantifiable metrics to demonstrate impact (e.g., percentages, time saved, users affected)');
  }

  if (!hasActionVerbs) {
    suggestions.push('Start bullet points with strong action verbs (e.g., "Built", "Implemented", "Improved")');
  }

  if (bulletPoints.some((bp) => bp.length < 30)) {
    suggestions.push('Expand brief bullet points to include context and impact');
  }

  if (bulletPoints.some((bp) => bp.length > 150)) {
    suggestions.push('Consider breaking down long bullet points for better readability');
  }

  return {
    hasMetrics,
    hasActionVerbs,
    suggestions,
  };
}
