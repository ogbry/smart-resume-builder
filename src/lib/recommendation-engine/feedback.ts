/**
 * Resume Feedback Analysis
 * Analyzes resume completeness, quality, and provides actionable feedback
 */

import { FeedbackItem, FeedbackSeverity } from '@/types/recommendations';
import { Resume } from '@/types/resume';
import { getJobRole } from './data/job-roles';
import { analyzeBulletPoints } from './experience';
import { detectWeakHobbies } from './hobbies';

/**
 * Analyze resume and generate comprehensive feedback
 */
export function analyzeResume(resume: Resume): FeedbackItem[] {
  const feedback: FeedbackItem[] = [];

  // Check completeness
  feedback.push(...checkCompleteness(resume));

  // Check experience quality
  feedback.push(...checkExperienceQuality(resume));

  // Check skills alignment
  feedback.push(...checkSkillsAlignment(resume));

  // Check hobby quality
  feedback.push(...checkHobbyQuality(resume));

  // Check overall resume quality
  feedback.push(...checkOverallQuality(resume));

  // Sort by severity
  return feedback.sort((a, b) => {
    const severityWeight: Record<FeedbackSeverity, number> = {
      error: 4,
      warning: 3,
      info: 2,
      success: 1,
    };
    return severityWeight[b.severity] - severityWeight[a.severity];
  });
}

/**
 * Check resume completeness
 */
function checkCompleteness(resume: Resume): FeedbackItem[] {
  const feedback: FeedbackItem[] = [];

  // Personal info
  if (!resume.personalInfo.fullName) {
    feedback.push(createFeedback(
      'missing-name',
      'Missing Full Name',
      'Your resume must include your full name',
      'error',
      'personal-info',
      'Add your full name in the Personal Information section'
    ));
  }

  if (!resume.personalInfo.email) {
    feedback.push(createFeedback(
      'missing-email',
      'Missing Email',
      'Contact email is required for recruiters to reach you',
      'error',
      'personal-info',
      'Add your professional email address'
    ));
  }

  if (!resume.personalInfo.phone) {
    feedback.push(createFeedback(
      'missing-phone',
      'Missing Phone Number',
      'Phone number helps recruiters contact you directly',
      'warning',
      'personal-info',
      'Add your phone number'
    ));
  }

  if (!resume.personalInfo.summary || resume.personalInfo.summary.length < 50) {
    feedback.push(createFeedback(
      'weak-summary',
      'Professional Summary Needed',
      'A strong professional summary helps recruiters quickly understand your value',
      'warning',
      'personal-info',
      'Write a 2-3 sentence summary highlighting your expertise and goals'
    ));
  }

  // Experience
  if (resume.experience.length === 0) {
    feedback.push(createFeedback(
      'no-experience',
      'No Work Experience',
      'Add your work experience to showcase your professional background',
      'error',
      'experience',
      'Add at least one work experience entry'
    ));
  }

  // Skills
  if (resume.skills.length === 0) {
    feedback.push(createFeedback(
      'no-skills',
      'No Skills Listed',
      'Skills section is critical for ATS and recruiter screening',
      'error',
      'skills',
      'Add relevant technical and soft skills'
    ));
  } else if (resume.skills.length < 5) {
    feedback.push(createFeedback(
      'few-skills',
      'Limited Skills',
      'Most competitive resumes list 8-12 relevant skills',
      'info',
      'skills',
      'Consider adding more relevant skills for your target role'
    ));
  }

  // Projects (optional but recommended for tech roles)
  if (resume.projects.length === 0 && resume.metadata.targetRole) {
    const jobRole = getJobRole(resume.metadata.targetRole);
    if (jobRole && jobRole.category === 'engineering') {
      feedback.push(createFeedback(
        'no-projects',
        'No Projects Listed',
        'Projects demonstrate hands-on experience and passion for technology',
        'info',
        'projects',
        'Add 1-3 notable projects to strengthen your resume'
      ));
    }
  }

  return feedback;
}

/**
 * Check experience quality
 */
function checkExperienceQuality(resume: Resume): FeedbackItem[] {
  const feedback: FeedbackItem[] = [];

  for (const exp of resume.experience) {
    // Check bullet points
    if (!exp.bulletPoints || exp.bulletPoints.length === 0) {
      feedback.push(createFeedback(
        `no-bullets-${exp.id}`,
        `Missing Bullet Points: ${exp.position}`,
        `Experience at ${exp.company} has no bullet points describing your achievements`,
        'warning',
        'experience',
        'Add 3-5 bullet points highlighting your key achievements and responsibilities'
      ));
    } else if (exp.bulletPoints.length < 3) {
      feedback.push(createFeedback(
        `few-bullets-${exp.id}`,
        `Limited Details: ${exp.position}`,
        `Experience at ${exp.company} has only ${exp.bulletPoints.length} bullet point(s)`,
        'info',
        'experience',
        'Add more bullet points (aim for 3-5 per role)'
      ));
    }

    // Analyze bullet point quality
    if (exp.bulletPoints && exp.bulletPoints.length > 0) {
      const analysis = analyzeBulletPoints(exp.bulletPoints);

      if (!analysis.hasMetrics) {
        feedback.push(createFeedback(
          `no-metrics-${exp.id}`,
          `Lack of Measurable Achievements: ${exp.position}`,
          'Bullet points should include quantifiable results (percentages, numbers, time saved)',
          'warning',
          'experience',
          'Add metrics to demonstrate impact (e.g., "Improved performance by 40%")'
        ));
      }

      if (!analysis.hasActionVerbs) {
        feedback.push(createFeedback(
          `weak-verbs-${exp.id}`,
          `Weak Action Verbs: ${exp.position}`,
          'Start bullet points with strong action verbs to show impact',
          'info',
          'experience',
          'Use verbs like "Built", "Achieved", "Improved", "Led" instead of "Responsible for"'
        ));
      }
    }
  }

  return feedback;
}

/**
 * Check skills alignment with target role
 */
function checkSkillsAlignment(resume: Resume): FeedbackItem[] {
  const feedback: FeedbackItem[] = [];

  if (!resume.metadata.targetRole) {
    return feedback;
  }

  const jobRole = getJobRole(resume.metadata.targetRole);
  if (!jobRole) {
    return feedback;
  }

  const currentSkills = resume.skills.map((s) => s.name.toLowerCase());

  // Check for primary skills
  const missingPrimarySkills = jobRole.primarySkills.filter(
    (skill) => !currentSkills.includes(skill.toLowerCase())
  );

  if (missingPrimarySkills.length > 0) {
    feedback.push(createFeedback(
      'missing-primary-skills',
      'Missing Core Skills',
      `Your resume is missing key skills for ${jobRole.title}: ${missingPrimarySkills.slice(0, 3).join(', ')}`,
      'warning',
      'skills',
      'Add essential skills that match the job requirements'
    ));
  }

  // Check for skill categories
  const skillCategories = new Set(resume.skills.map((s) => s.category));
  const requiredCategories = jobRole.requiredSkillCategories;

  const missingCategories = requiredCategories.filter(
    (cat) => !skillCategories.has(cat)
  );

  if (missingCategories.length > 0) {
    feedback.push(createFeedback(
      'missing-skill-categories',
      'Skill Gaps Detected',
      `Consider adding skills from: ${missingCategories.join(', ')}`,
      'info',
      'skills',
      `Add skills from missing categories to show well-rounded expertise`
    ));
  }

  return feedback;
}

/**
 * Check hobby quality
 */
function checkHobbyQuality(resume: Resume): FeedbackItem[] {
  const feedback: FeedbackItem[] = [];

  const hobbyNames = resume.hobbies.map((h) => h.name);

  if (hobbyNames.length > 0) {
    const { weakHobbies, suggestions } = detectWeakHobbies(hobbyNames);

    if (weakHobbies.length > 0) {
      feedback.push(createFeedback(
        'weak-hobbies',
        'Weak or Vague Hobbies',
        `Some hobbies may not add value: ${weakHobbies.join(', ')}`,
        'info',
        'hobbies',
        suggestions.join('. ')
      ));
    }
  }

  return feedback;
}

/**
 * Check overall resume quality
 */
function checkOverallQuality(resume: Resume): FeedbackItem[] {
  const feedback: FeedbackItem[] = [];

  // Calculate overall completeness score
  const score = calculateCompletenessScore(resume);

  if (score === 100) {
    feedback.push(createFeedback(
      'excellent-resume',
      'Excellent Resume!',
      'Your resume is complete and well-structured',
      'success',
      undefined,
      undefined
    ));
  } else if (score >= 80) {
    feedback.push(createFeedback(
      'good-resume',
      'Good Resume',
      'Your resume is mostly complete with minor areas for improvement',
      'success',
      undefined,
      'Review the suggestions above to make it even stronger'
    ));
  } else if (score >= 60) {
    feedback.push(createFeedback(
      'needs-improvement',
      'Resume Needs Improvement',
      'Several sections need attention to make your resume competitive',
      'warning',
      undefined,
      'Focus on completing all required sections and adding measurable achievements'
    ));
  } else {
    feedback.push(createFeedback(
      'incomplete-resume',
      'Resume Incomplete',
      'Your resume is missing critical information',
      'error',
      undefined,
      'Complete all required sections before exporting'
    ));
  }

  return feedback;
}

/**
 * Calculate resume completeness score (0-100)
 */
function calculateCompletenessScore(resume: Resume): number {
  let score = 0;

  // Personal info (25 points)
  if (resume.personalInfo.fullName) score += 8;
  if (resume.personalInfo.email) score += 8;
  if (resume.personalInfo.phone) score += 5;
  if (resume.personalInfo.summary && resume.personalInfo.summary.length >= 50) score += 4;

  // Experience (30 points)
  if (resume.experience.length > 0) {
    score += 10;
    const hasQualityBullets = resume.experience.every(
      (exp) => exp.bulletPoints && exp.bulletPoints.length >= 3
    );
    if (hasQualityBullets) score += 10;

    const allBullets = resume.experience.flatMap((exp) => exp.bulletPoints || []);
    const { hasMetrics, hasActionVerbs } = analyzeBulletPoints(allBullets);
    if (hasMetrics) score += 5;
    if (hasActionVerbs) score += 5;
  }

  // Skills (25 points)
  if (resume.skills.length >= 5) score += 15;
  else if (resume.skills.length > 0) score += 10;

  const hasVariedSkillCategories =
    new Set(resume.skills.map((s) => s.category)).size >= 3;
  if (hasVariedSkillCategories) score += 10;

  // Projects (10 points - bonus for tech roles)
  if (resume.projects.length > 0) score += 5;
  if (resume.projects.length >= 2) score += 5;

  // Hobbies (10 points - bonus)
  if (resume.hobbies.length > 0) score += 5;
  if (resume.hobbies.length >= 2) score += 5;

  return Math.min(score, 100);
}

/**
 * Create a feedback item
 */
function createFeedback(
  id: string,
  title: string,
  description: string,
  severity: FeedbackSeverity,
  section?: string,
  fixSuggestion?: string
): FeedbackItem {
  return {
    id: `feedback-${id}`,
    type: 'feedback',
    title,
    description,
    severity,
    priority: severity === 'error' ? 'high' : severity === 'warning' ? 'medium' : 'low',
    reason: 'Resume quality check',
    section,
    actionable: !!fixSuggestion,
    fixSuggestion,
  };
}
