'use client';

/**
 * Modern Resume Builder - Revamped
 * User-friendly interface with side navigation and real-time preview
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { useResume } from '@/contexts/ResumeContext';
import { PersonalInfoForm } from '@/components/builder/PersonalInfoForm';
import { ExperienceForm } from '@/components/builder/ExperienceForm';
import { SkillsForm } from '@/components/builder/SkillsForm';
import { ProjectsForm } from '@/components/builder/ProjectsForm';
import { HobbiesForm } from '@/components/builder/HobbiesForm';
import { ReferencesForm } from '@/components/builder/ReferencesForm';
import { ProfessionalTemplate } from '@/components/preview/templates/ProfessionalTemplate';
import { ExecutiveTemplate } from '@/components/preview/templates/ExecutiveTemplate';
import { CreativeTemplate } from '@/components/preview/templates/CreativeTemplate';
import { SkillSuggestions } from '@/components/recommendations/SkillSuggestions';
import { BulletPointSuggestions } from '@/components/recommendations/BulletPointSuggestions';
import { HobbySuggestions } from '@/components/recommendations/HobbySuggestions';
import { exportResumeToPDF } from '@/lib/pdf/export';
import { Skill, SkillCategory, HobbyCategory } from '@/types/resume';

type Section = 'personal' | 'experience' | 'skills' | 'projects' | 'hobbies' | 'references';

const SECTIONS = [
  { id: 'personal' as Section, name: 'Personal Info', icon: '👤', required: true },
  { id: 'experience' as Section, name: 'Experience', icon: '💼', required: true },
  { id: 'skills' as Section, name: 'Skills', icon: '⚡', required: true },
  { id: 'projects' as Section, name: 'Projects', icon: '🚀', required: false },
  { id: 'hobbies' as Section, name: 'Hobbies', icon: '🎯', required: false },
  { id: 'references' as Section, name: 'References', icon: '👥', required: false },
];

export default function BuilderPage() {
  const {
    resume,
    updatePersonalInfo,
    updateExperience,
    updateSkills,
    updateProjects,
    updateHobbies,
    updateReferences,
    updateMetadata,
    addSkill,
  } = useResume();

  const [activeSection, setActiveSection] = useState<Section>('personal');
  const [isExporting, setIsExporting] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportResumeToPDF('resume-template-content', resume);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleApplySkill = (skillName: string, category: SkillCategory) => {
    const newSkill: Skill = {
      id: `skill-${Date.now()}`,
      name: skillName,
      category,
    };
    addSkill(newSkill);
  };

  const handleApplyBulletPoint = (bulletPoint: string) => {
    if (resume.experience.length > 0) {
      const updatedExperience = [...resume.experience];
      const lastExp = { ...updatedExperience[updatedExperience.length - 1] };
      lastExp.bulletPoints = [...lastExp.bulletPoints, bulletPoint];
      updatedExperience[updatedExperience.length - 1] = lastExp;
      updateExperience(updatedExperience);
    }
  };

  const handleApplyHobby = (hobbyName: string, category: HobbyCategory) => {
    const newHobby = {
      id: `hobby-${Date.now()}`,
      name: hobbyName,
      category,
    };
    updateHobbies([...resume.hobbies, newHobby]);
  };

  const jobContext = {
    targetRole: resume.metadata.targetRole || '',
    experienceLevel: resume.metadata.experienceLevel || 'junior',
    currentSkills: resume.skills.map((s) => s.name),
    currentExperience: resume.experience.map((e) => e.position),
  };

  const profileContext = {
    targetRole: resume.metadata.targetRole,
    experienceLevel: resume.metadata.experienceLevel,
    skills: resume.skills.map((s) => s.name),
  };

  // Calculate completion percentage
  const getCompletionPercentage = () => {
    let completed = 0;
    let total = 6;

    if (resume.personalInfo.fullName && resume.personalInfo.email) completed++;
    if (resume.experience.length > 0) completed++;
    if (resume.skills.length > 0) completed++;
    if (resume.projects.length > 0) completed++;
    if (resume.hobbies.length > 0) completed++;
    if (resume.references.length >= 3) completed++;

    return Math.round((completed / total) * 100);
  };

  const renderTemplate = () => {
    switch (resume.metadata.template) {
      case 'professional':
        return <ProfessionalTemplate resume={resume} />;
      case 'executive':
        return <ExecutiveTemplate resume={resume} />;
      case 'creative':
        return <CreativeTemplate resume={resume} />;
      default:
        return <ProfessionalTemplate resume={resume} />;
    }
  };

  const handleNext = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <div className="space-y-6">
            <PersonalInfoForm
              initialData={resume.personalInfo}
              onSubmit={(data) => {
                updatePersonalInfo(data);
                handleNext();
              }}
            />

            {/* Target Role & Experience Level for AI Recommendations */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Enable AI Recommendations</h3>
                  <p className="text-sm text-gray-600">Set your target role to get personalized skill suggestions, bullet points, and more!</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Senior Software Engineer"
                    value={resume.metadata.targetRole || ''}
                    onChange={(e) => updateMetadata({ targetRole: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    value={resume.metadata.experienceLevel || 'junior'}
                    onChange={(e) => updateMetadata({ experienceLevel: e.target.value as any })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="entry">Entry Level</option>
                    <option value="junior">Junior</option>
                    <option value="mid">Mid-Level</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead/Principal</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-6">
            <ExperienceForm
              initialData={resume.experience}
              onSubmit={(data) => {
                updateExperience(data);
                handleNext();
              }}
              onBack={handleBack}
            />
            {resume.experience.length > 0 && jobContext.targetRole && (
              <BulletPointSuggestions
                experience={resume.experience[resume.experience.length - 1]}
                jobContext={jobContext}
                onApplyBulletPoint={handleApplyBulletPoint}
              />
            )}
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-6">
            <SkillsForm
              initialData={resume.skills}
              onSubmit={(data) => {
                updateSkills(data);
                handleNext();
              }}
              onBack={handleBack}
            />
            {jobContext.targetRole && (
              <SkillSuggestions
                jobContext={jobContext}
                currentSkills={resume.skills}
                onApplySkill={handleApplySkill}
              />
            )}
          </div>
        );
      case 'projects':
        return (
          <ProjectsForm
            initialData={resume.projects}
            onSubmit={(data) => {
              updateProjects(data);
              handleNext();
            }}
            onBack={handleBack}
          />
        );
      case 'hobbies':
        return (
          <div className="space-y-6">
            <HobbiesForm
              initialData={resume.hobbies}
              onSubmit={(data) => {
                updateHobbies(data);
                handleNext();
              }}
              onBack={handleBack}
            />
            {profileContext.targetRole && (
              <HobbySuggestions
                profileContext={profileContext}
                currentHobbies={resume.hobbies}
                onApplyHobby={handleApplyHobby}
              />
            )}
          </div>
        );
      case 'references':
        return (
          <ReferencesForm
            initialData={resume.references}
            onSubmit={(data) => {
              updateReferences(data);
              // On the last section, show a success message or preview
              setShowPreviewModal(true);
            }}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Resume Builder</span>
            </Link>

            <nav className="hidden md:flex items-center gap-4 ml-8">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/examples" className="text-sm text-gray-600 hover:text-gray-900">
                Examples
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{getCompletionPercentage()}%</span> Complete
            </div>
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? 'Exporting...' : 'Download PDF'}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Preview Thumbnail - Top Right */}
      <button
        onClick={() => setShowPreviewModal(true)}
        className="fixed top-20 right-6 z-40 w-20 h-24 bg-white border-2 border-gray-300 rounded-xl overflow-hidden hover:border-blue-500 transition-all hover:shadow-2xl hover:scale-105 group shadow-lg"
        title="Preview & Change Template"
      >
        <div className="absolute inset-0 scale-[0.13] origin-top-left" style={{ width: '769%', height: '769%' }}>
          {renderTemplate()}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 group-hover:from-black/10 group-hover:to-black/20 transition-all flex items-center justify-center">
          <div className="absolute bottom-1 right-1 bg-blue-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="absolute top-1 left-1 bg-gray-900/80 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
          PREVIEW
        </div>
      </button>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden min-w-0">
        {/* Left Sidebar - Section Navigation */}
        <aside className="hidden lg:block w-48 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
          <div className="p-3">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Resume Sections
            </h2>
            <nav className="space-y-1">
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                const isCompleted = (() => {
                  switch (section.id) {
                    case 'personal':
                      return resume.personalInfo.fullName && resume.personalInfo.email;
                    case 'experience':
                      return resume.experience.length > 0;
                    case 'skills':
                      return resume.skills.length > 0;
                    case 'projects':
                      return resume.projects.length > 0;
                    case 'hobbies':
                      return resume.hobbies.length > 0;
                    case 'references':
                      return resume.references.length >= 3;
                    default:
                      return false;
                  }
                })();

                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl">{section.icon}</span>
                    <span className="flex-1 text-sm">{section.name}</span>
                    {section.required && !isCompleted && (
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                    )}
                    {isCompleted && (
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Progress Bar */}
          <div className="p-4 border-t border-gray-200">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">Overall Progress</span>
              <span className="text-xs font-semibold text-blue-600">{getCompletionPercentage()}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                style={{ width: `${getCompletionPercentage()}%` }}
              />
            </div>
          </div>
        </aside>

        {/* Center - Form Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 min-w-0 w-full">
          <div className="max-w-4xl mx-auto p-6">
            {/* Mobile Section Navigation */}
            <div className="lg:hidden mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Section</label>
              <select
                value={activeSection}
                onChange={(e) => setActiveSection(e.target.value as Section)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {SECTIONS.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.icon} {section.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {SECTIONS.find(s => s.id === activeSection)?.name}
              </h1>
              <p className="text-gray-600">
                {activeSection === 'personal' && 'Start with your basic information and contact details'}
                {activeSection === 'experience' && 'Add your work history and achievements'}
                {activeSection === 'skills' && 'Highlight your technical and soft skills'}
                {activeSection === 'projects' && 'Showcase your best work and projects'}
                {activeSection === 'hobbies' && 'Share your interests and activities'}
                {activeSection === 'references' && 'Add professional references (minimum 3)'}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {renderSectionContent()}
            </div>
          </div>
        </main>

      </div>

      {/* Hidden template for PDF export */}
      <div className="fixed top-0 left-[-9999px] pointer-events-none">
        <div id="resume-template-content" style={{ width: '210mm', height: '297mm' }}>
          {renderTemplate()}
        </div>
      </div>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowPreviewModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
                <p className="text-sm text-gray-600 mt-1">Choose your template and preview your resume</p>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Template Selector */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Template:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateMetadata({ template: 'professional' })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      resume.metadata.template === 'professional'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Professional
                  </button>
                  <button
                    onClick={() => updateMetadata({ template: 'executive' })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      resume.metadata.template === 'executive'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Executive
                  </button>
                  <button
                    onClick={() => updateMetadata({ template: 'creative' })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      resume.metadata.template === 'creative'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Creative
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 overflow-auto p-6 bg-gray-100">
              <div className="flex items-center justify-center min-h-full">
                <div className="bg-white shadow-2xl" style={{ width: '210mm', height: '297mm', transform: 'scale(0.85)', transformOrigin: 'top center' }}>
                  {renderTemplate()}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium">{getCompletionPercentage()}%</span> Complete
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowPreviewModal(false);
                    handleExportPDF();
                  }}
                  disabled={isExporting}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
                >
                  {isExporting ? 'Exporting...' : 'Download PDF'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
