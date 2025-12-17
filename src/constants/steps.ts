/**
 * Form Step Definitions
 * Defines the multi-step form flow for the resume builder
 */

export interface FormStep {
  id: number;
  key: string;
  title: string;
  description: string;
  icon: string;
  required: boolean;
  hasRecommendations: boolean;
}

export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    key: 'personal-info',
    title: 'Personal Information',
    description: 'Your contact details and professional summary',
    icon: 'User',
    required: true,
    hasRecommendations: false,
  },
  {
    id: 2,
    key: 'experience',
    title: 'Work Experience',
    description: 'Your professional experience and achievements',
    icon: 'Briefcase',
    required: true,
    hasRecommendations: true,
  },
  {
    id: 3,
    key: 'skills',
    title: 'Skills',
    description: 'Technical and soft skills',
    icon: 'Code',
    required: true,
    hasRecommendations: true,
  },
  {
    id: 4,
    key: 'projects',
    title: 'Projects',
    description: 'Notable projects and contributions',
    icon: 'FolderGit2',
    required: false,
    hasRecommendations: false,
  },
  {
    id: 5,
    key: 'hobbies',
    title: 'Hobbies & Activities',
    description: 'Interests that showcase your personality',
    icon: 'Heart',
    required: false,
    hasRecommendations: true,
  },
  {
    id: 6,
    key: 'references',
    title: 'References',
    description: 'Professional references (minimum 3)',
    icon: 'Users',
    required: false,
    hasRecommendations: false,
  },
];

export const TOTAL_STEPS = FORM_STEPS.length;

export const getStepByKey = (key: string): FormStep | undefined => {
  return FORM_STEPS.find((step) => step.key === key);
};

export const getStepById = (id: number): FormStep | undefined => {
  return FORM_STEPS.find((step) => step.id === id);
};

export const isStepComplete = (stepKey: string, data: any): boolean => {
  switch (stepKey) {
    case 'personal-info':
      return !!(
        data?.personalInfo?.fullName &&
        data?.personalInfo?.email &&
        data?.personalInfo?.phone
      );
    case 'experience':
      return data?.experience?.length > 0;
    case 'skills':
      return data?.skills?.length > 0;
    case 'projects':
      return true; // Optional step
    case 'hobbies':
      return true; // Optional step
    case 'references':
      return true; // Optional step
    default:
      return false;
  }
};
