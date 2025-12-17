'use client';

/**
 * Projects Form Component
 * Step 4: Collect projects
 */

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Project } from '@/types/resume';
import { validateProject } from '@/lib/utils/validation';

export interface ProjectsFormProps {
  initialData?: Project[];
  onSubmit: (data: Project[]) => void;
  onBack?: () => void;
}

export function ProjectsForm({ initialData, onSubmit, onBack }: ProjectsFormProps) {
  const [projects, setProjects] = useState<Project[]>(initialData || []);
  const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});

  function createEmptyProject(): Project {
    return {
      id: `project-${Date.now()}`,
      name: '',
      description: '',
      technologies: [],
      highlights: [],
    };
  }

  const handleAddProject = () => {
    setProjects([...projects, createEmptyProject()]);
  };

  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[id];
      return newErrors;
    });
  };

  const handleChange = (id: string, field: keyof Project, value: any) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );

    if (errors[id]?.[field]) {
      setErrors((prev) => ({
        ...prev,
        [id]: { ...prev[id], [field]: '' },
      }));
    }
  };

  const handleAddTechnology = (id: string, tech: string) => {
    if (!tech.trim()) return;

    setProjects(
      projects.map((p) =>
        p.id === id
          ? { ...p, technologies: [...p.technologies, tech.trim()] }
          : p
      )
    );
  };

  const handleRemoveTechnology = (id: string, index: number) => {
    setProjects(
      projects.map((p) => {
        if (p.id === id) {
          const newTech = p.technologies.filter((_, i) => i !== index);
          return { ...p, technologies: newTech };
        }
        return p;
      })
    );
  };

  const handleAddHighlight = (id: string) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, highlights: [...p.highlights, ''] } : p
      )
    );
  };

  const handleRemoveHighlight = (id: string, index: number) => {
    setProjects(
      projects.map((p) => {
        if (p.id === id) {
          const newHighlights = p.highlights.filter((_, i) => i !== index);
          return { ...p, highlights: newHighlights };
        }
        return p;
      })
    );
  };

  const handleHighlightChange = (id: string, index: number, value: string) => {
    setProjects(
      projects.map((p) => {
        if (p.id === id) {
          const newHighlights = [...p.highlights];
          newHighlights[index] = value;
          return { ...p, highlights: newHighlights };
        }
        return p;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Projects are optional, can skip if none added
    if (projects.length === 0) {
      onSubmit([]);
      return;
    }

    const newErrors: Record<string, Record<string, string>> = {};
    let hasErrors = false;

    projects.forEach((project) => {
      const validation = validateProject(project);
      if (!validation.isValid) {
        newErrors[project.id] = validation.errors;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    onSubmit(projects);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          Projects are optional but recommended for technical roles. They showcase
          your practical skills and passion for your field.
        </p>
      </div>

      {projects.map((project, idx) => (
        <Card key={project.id} variant="bordered">
          <CardHeader
            title={`Project ${idx + 1}`}
            description={project.name || 'Add project details'}
          />
          <CardContent className="space-y-4">
            <Input
              label="Project Name"
              placeholder="E-commerce Platform"
              value={project.name}
              onChange={(e) => handleChange(project.id, 'name', e.target.value)}
              error={errors[project.id]?.name}
              required
            />

            <Textarea
              label="Description"
              placeholder="Describe what the project does and your role in it..."
              value={project.description}
              onChange={(e) =>
                handleChange(project.id, 'description', e.target.value)
              }
              error={errors[project.id]?.description}
              rows={3}
              required
            />

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-900">
                Technologies Used
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., React, Node.js"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTechnology(
                        project.id,
                        (e.target as HTMLInputElement).value
                      );
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => {
                    const input = (e.currentTarget.previousElementSibling as HTMLInputElement);
                    handleAddTechnology(project.id, input.value);
                    input.value = '';
                  }}
                >
                  Add
                </Button>
              </div>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="primary"
                      removable
                      onRemove={() => handleRemoveTechnology(project.id, techIdx)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              {errors[project.id]?.technologies && (
                <p className="text-sm text-red-600">
                  {errors[project.id].technologies}
                </p>
              )}
            </div>

            <Input
              label="Project Link"
              type="url"
              placeholder="https://project-demo.com"
              value={project.link || ''}
              onChange={(e) => handleChange(project.id, 'link', e.target.value)}
              error={errors[project.id]?.link}
            />

            <Input
              label="GitHub Link"
              type="url"
              placeholder="https://github.com/username/project"
              value={project.githubLink || ''}
              onChange={(e) =>
                handleChange(project.id, 'githubLink', e.target.value)
              }
              error={errors[project.id]?.githubLink}
            />

            <div className="space-y-3">
              <label className="text-sm font-medium text-secondary-900">
                Project Highlights
              </label>

              {project.highlights.map((highlight, highlightIdx) => (
                <div key={highlightIdx} className="flex gap-2">
                  <Textarea
                    placeholder="Highlight a key feature or achievement..."
                    value={highlight}
                    onChange={(e) =>
                      handleHighlightChange(project.id, highlightIdx, e.target.value)
                    }
                    rows={2}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveHighlight(project.id, highlightIdx)}
                  >
                    Remove
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleAddHighlight(project.id)}
              >
                + Add Highlight
              </Button>
            </div>

            <Button
              type="button"
              variant="danger"
              size="sm"
              onClick={() => handleRemoveProject(project.id)}
            >
              Remove Project
            </Button>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={handleAddProject}
        fullWidth
      >
        + Add Project
      </Button>

      <div className="flex justify-between pt-4">
        {onBack && (
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button type="submit" className="ml-auto">
          {projects.length === 0 ? 'Skip This Step' : 'Next Step'}
        </Button>
      </div>
    </form>
  );
}
