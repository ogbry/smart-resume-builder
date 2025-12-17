/**
 * LocalStorage Wrapper
 * Type-safe wrapper for localStorage operations
 */

import { Resume } from '@/types/resume';

const STORAGE_KEYS = {
  RESUME: 'resume-builder-resume',
  CURRENT_STEP: 'resume-builder-current-step',
  DRAFT_PREFIX: 'resume-builder-draft-',
} as const;

/**
 * Save resume to localStorage
 */
export function saveResume(resume: Resume): void {
  try {
    const serialized = JSON.stringify(resume);
    localStorage.setItem(STORAGE_KEYS.RESUME, serialized);
  } catch (error) {
    console.error('Failed to save resume to localStorage:', error);
    throw new Error('Failed to save resume. Storage may be full.');
  }
}

/**
 * Load resume from localStorage
 */
export function loadResume(): Resume | null {
  try {
    const serialized = localStorage.getItem(STORAGE_KEYS.RESUME);
    if (!serialized) return null;

    const resume = JSON.parse(serialized) as Resume;
    return resume;
  } catch (error) {
    console.error('Failed to load resume from localStorage:', error);
    return null;
  }
}

/**
 * Delete resume from localStorage
 */
export function deleteResume(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.RESUME);
  } catch (error) {
    console.error('Failed to delete resume from localStorage:', error);
  }
}

/**
 * Save current form step
 */
export function saveCurrentStep(step: number): void {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_STEP, step.toString());
  } catch (error) {
    console.error('Failed to save current step:', error);
  }
}

/**
 * Load current form step
 */
export function loadCurrentStep(): number {
  try {
    const step = localStorage.getItem(STORAGE_KEYS.CURRENT_STEP);
    return step ? parseInt(step, 10) : 1;
  } catch (error) {
    console.error('Failed to load current step:', error);
    return 1;
  }
}

/**
 * Save draft resume with a custom name
 */
export function saveDraft(name: string, resume: Resume): void {
  try {
    const key = `${STORAGE_KEYS.DRAFT_PREFIX}${name}`;
    const serialized = JSON.stringify(resume);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error('Failed to save draft:', error);
    throw new Error('Failed to save draft.');
  }
}

/**
 * Load draft resume by name
 */
export function loadDraft(name: string): Resume | null {
  try {
    const key = `${STORAGE_KEYS.DRAFT_PREFIX}${name}`;
    const serialized = localStorage.getItem(key);
    if (!serialized) return null;

    return JSON.parse(serialized) as Resume;
  } catch (error) {
    console.error('Failed to load draft:', error);
    return null;
  }
}

/**
 * Get all draft names
 */
export function getAllDraftNames(): string[] {
  try {
    const keys = Object.keys(localStorage);
    return keys
      .filter((key) => key.startsWith(STORAGE_KEYS.DRAFT_PREFIX))
      .map((key) => key.replace(STORAGE_KEYS.DRAFT_PREFIX, ''));
  } catch (error) {
    console.error('Failed to get draft names:', error);
    return [];
  }
}

/**
 * Delete draft by name
 */
export function deleteDraft(name: string): void {
  try {
    const key = `${STORAGE_KEYS.DRAFT_PREFIX}${name}`;
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to delete draft:', error);
  }
}

/**
 * Check if localStorage is available
 */
export function isLocalStorageAvailable(): boolean {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get storage usage information
 */
export function getStorageInfo(): {
  used: number;
  available: boolean;
  itemCount: number;
} {
  try {
    const keys = Object.keys(localStorage);
    const items = keys
      .filter((key) => key.startsWith('resume-builder'))
      .map((key) => localStorage.getItem(key) || '');

    const used = items.reduce((total, item) => total + item.length, 0);

    return {
      used,
      available: isLocalStorageAvailable(),
      itemCount: items.length,
    };
  } catch (error) {
    return {
      used: 0,
      available: false,
      itemCount: 0,
    };
  }
}

/**
 * Clear all resume builder data
 */
export function clearAllData(): void {
  try {
    const keys = Object.keys(localStorage);
    keys
      .filter((key) => key.startsWith('resume-builder'))
      .forEach((key) => localStorage.removeItem(key));
  } catch (error) {
    console.error('Failed to clear all data:', error);
  }
}

/**
 * Export resume as JSON file
 */
export function exportResumeAsJSON(resume: Resume): void {
  try {
    const json = JSON.stringify(resume, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `resume-${resume.personalInfo.fullName || 'draft'}-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to export resume:', error);
    throw new Error('Failed to export resume.');
  }
}

/**
 * Import resume from JSON file
 */
export function importResumeFromJSON(file: File): Promise<Resume> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = event.target?.result as string;
        const resume = JSON.parse(json) as Resume;
        resolve(resume);
      } catch (error) {
        reject(new Error('Invalid resume file format'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsText(file);
  });
}
