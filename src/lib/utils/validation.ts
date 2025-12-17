/**
 * Form Validation Utilities
 * Validation functions for resume form fields
 */

import { ValidationResult, PersonalInfo, Experience, Skill, Project, Hobby } from '@/types/resume';

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (flexible format)
 */
export function validatePhone(phone: string): boolean {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  // Check if it has at least 10 digits
  return digitsOnly.length >= 10;
}

/**
 * Validate URL format
 */
export function validateURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate personal info
 */
export function validatePersonalInfo(info: Partial<PersonalInfo>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!info.fullName || info.fullName.trim().length === 0) {
    errors.fullName = 'Full name is required';
  } else if (info.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  if (!info.email || info.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!validateEmail(info.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!info.phone || info.phone.trim().length === 0) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(info.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!info.location || info.location.trim().length === 0) {
    errors.location = 'Location is required';
  }

  // Optional fields validation
  if (info.linkedIn && info.linkedIn.trim().length > 0) {
    if (!validateURL(info.linkedIn) && !info.linkedIn.includes('linkedin.com')) {
      errors.linkedIn = 'Please enter a valid LinkedIn URL';
    }
  }

  if (info.github && info.github.trim().length > 0) {
    if (!validateURL(info.github) && !info.github.includes('github.com')) {
      errors.github = 'Please enter a valid GitHub URL';
    }
  }

  if (info.portfolio && info.portfolio.trim().length > 0) {
    if (!validateURL(info.portfolio)) {
      errors.portfolio = 'Please enter a valid portfolio URL';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate experience entry
 */
export function validateExperience(experience: Partial<Experience>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!experience.company || experience.company.trim().length === 0) {
    errors.company = 'Company name is required';
  }

  if (!experience.position || experience.position.trim().length === 0) {
    errors.position = 'Position/title is required';
  }

  if (!experience.location || experience.location.trim().length === 0) {
    errors.location = 'Location is required';
  }

  if (!experience.startDate) {
    errors.startDate = 'Start date is required';
  }

  if (!experience.isCurrentRole && !experience.endDate) {
    errors.endDate = 'End date is required for past positions';
  }

  // Validate date logic
  if (experience.startDate && experience.endDate && !experience.isCurrentRole) {
    const start = new Date(experience.startDate);
    const end = new Date(experience.endDate);

    if (end < start) {
      errors.endDate = 'End date must be after start date';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate skill entry
 */
export function validateSkill(skill: Partial<Skill>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!skill.name || skill.name.trim().length === 0) {
    errors.name = 'Skill name is required';
  } else if (skill.name.trim().length < 2) {
    errors.name = 'Skill name must be at least 2 characters';
  }

  if (!skill.category) {
    errors.category = 'Skill category is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate project entry
 */
export function validateProject(project: Partial<Project>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!project.name || project.name.trim().length === 0) {
    errors.name = 'Project name is required';
  }

  if (!project.description || project.description.trim().length === 0) {
    errors.description = 'Project description is required';
  } else if (project.description.trim().length < 20) {
    errors.description = 'Description should be at least 20 characters';
  }

  if (!project.technologies || project.technologies.length === 0) {
    errors.technologies = 'Add at least one technology used';
  }

  if (project.link && project.link.trim().length > 0) {
    if (!validateURL(project.link)) {
      errors.link = 'Please enter a valid URL';
    }
  }

  if (project.githubLink && project.githubLink.trim().length > 0) {
    if (!validateURL(project.githubLink) && !project.githubLink.includes('github.com')) {
      errors.githubLink = 'Please enter a valid GitHub URL';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate hobby entry
 */
export function validateHobby(hobby: Partial<Hobby>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!hobby.name || hobby.name.trim().length === 0) {
    errors.name = 'Hobby name is required';
  } else if (hobby.name.trim().length < 3) {
    errors.name = 'Hobby name must be at least 3 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sanitize string input (remove unwanted characters)
 */
export function sanitizeString(input: string): string {
  return input.trim().replace(/\s+/g, ' ');
}

/**
 * Validate and sanitize URL
 */
export function sanitizeURL(url: string): string {
  let sanitized = url.trim();

  // Add https:// if no protocol specified
  if (sanitized && !sanitized.startsWith('http://') && !sanitized.startsWith('https://')) {
    sanitized = `https://${sanitized}`;
  }

  return sanitized;
}
