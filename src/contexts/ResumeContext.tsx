'use client';

/**
 * Resume Context
 * Global state management for resume data
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Resume, PersonalInfo, Experience, Skill, Project, Hobby, Reference } from '@/types/resume';
import { saveResume, loadResume } from '@/lib/storage/localStorage';

interface ResumeContextType {
  resume: Resume;
  updatePersonalInfo: (info: PersonalInfo) => void;
  updateExperience: (experience: Experience[]) => void;
  updateSkills: (skills: Skill[]) => void;
  updateProjects: (projects: Project[]) => void;
  updateHobbies: (hobbies: Hobby[]) => void;
  updateReferences: (references: Reference[]) => void;
  updateMetadata: (metadata: Partial<Resume['metadata']>) => void;
  addSkill: (skill: Skill) => void;
  removeSkill: (skillId: string) => void;
  resetResume: () => void;
  saveToLocalStorage: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

function createEmptyResume(): Resume {
  return {
    id: `resume-${Date.now()}`,
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
    },
    experience: [],
    skills: [],
    projects: [],
    hobbies: [],
    references: [],
    metadata: {
      template: 'professional',
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  };
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resume, setResume] = useState<Resume>(createEmptyResume);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load resume from localStorage on mount
  useEffect(() => {
    const savedResume = loadResume();
    if (savedResume) {
      setResume(savedResume);
    }
    setIsLoaded(true);
  }, []);

  // Auto-save to localStorage whenever resume changes
  useEffect(() => {
    if (isLoaded) {
      const timeoutId = setTimeout(() => {
        saveToLocalStorage();
      }, 1000); // Debounce saves by 1 second

      return () => clearTimeout(timeoutId);
    }
  }, [resume, isLoaded]);

  const updatePersonalInfo = (info: PersonalInfo) => {
    setResume((prev) => ({
      ...prev,
      personalInfo: info,
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const updateExperience = (experience: Experience[]) => {
    setResume((prev) => ({
      ...prev,
      experience,
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const updateSkills = (skills: Skill[]) => {
    setResume((prev) => ({
      ...prev,
      skills,
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const updateProjects = (projects: Project[]) => {
    setResume((prev) => ({
      ...prev,
      projects,
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const updateHobbies = (hobbies: Hobby[]) => {
    setResume((prev) => ({
      ...prev,
      hobbies,
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const updateReferences = (references: Reference[]) => {
    setResume((prev) => ({
      ...prev,
      references,
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const updateMetadata = (metadata: Partial<Resume['metadata']>) => {
    setResume((prev) => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        ...metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const addSkill = (skill: Skill) => {
    setResume((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const removeSkill = (skillId: string) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== skillId),
      metadata: {
        ...prev.metadata,
        lastModified: new Date().toISOString(),
      },
    }));
  };

  const resetResume = () => {
    setResume(createEmptyResume());
  };

  const saveToLocalStorage = () => {
    saveResume(resume);
  };

  const value: ResumeContextType = {
    resume,
    updatePersonalInfo,
    updateExperience,
    updateSkills,
    updateProjects,
    updateHobbies,
    updateReferences,
    updateMetadata,
    addSkill,
    removeSkill,
    resetResume,
    saveToLocalStorage,
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
