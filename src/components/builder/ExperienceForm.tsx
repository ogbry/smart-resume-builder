'use client';

/**
 * Experience Form Component
 * Step 2: Collect work experience
 */

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Experience } from '@/types/resume';
import { validateExperience } from '@/lib/utils/validation';

export interface ExperienceFormProps {
  initialData?: Experience[];
  onSubmit: (data: Experience[]) => void;
  onBack?: () => void;
}

export function ExperienceForm({ initialData, onSubmit, onBack }: ExperienceFormProps) {
  const [experiences, setExperiences] = useState<Experience[]>(
    initialData && initialData.length > 0
      ? initialData
      : [createEmptyExperience()]
  );
  const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});

  function createEmptyExperience(): Experience {
    return {
      id: `exp-${Date.now()}`,
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      isCurrentRole: false,
      bulletPoints: [],
    };
  }

  const handleAddExperience = () => {
    setExperiences([...experiences, createEmptyExperience()]);
  };

  const handleRemoveExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[id];
      return newErrors;
    });
  };

  const handleChange = (id: string, field: keyof Experience, value: any) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );

    // Clear error
    if (errors[id]?.[field]) {
      setErrors((prev) => ({
        ...prev,
        [id]: { ...prev[id], [field]: '' },
      }));
    }
  };

  const handleBulletPointChange = (id: string, index: number, value: string) => {
    setExperiences(
      experiences.map((exp) => {
        if (exp.id === id) {
          const newBulletPoints = [...exp.bulletPoints];
          newBulletPoints[index] = value;
          return { ...exp, bulletPoints: newBulletPoints };
        }
        return exp;
      })
    );
  };

  const handleAddBulletPoint = (id: string) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id
          ? { ...exp, bulletPoints: [...exp.bulletPoints, ''] }
          : exp
      )
    );
  };

  const handleRemoveBulletPoint = (id: string, index: number) => {
    setExperiences(
      experiences.map((exp) => {
        if (exp.id === id) {
          const newBulletPoints = exp.bulletPoints.filter((_, i) => i !== index);
          return { ...exp, bulletPoints: newBulletPoints };
        }
        return exp;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, Record<string, string>> = {};
    let hasErrors = false;

    experiences.forEach((exp) => {
      const validation = validateExperience(exp);
      if (!validation.isValid) {
        newErrors[exp.id] = validation.errors;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    onSubmit(experiences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {experiences.map((exp, idx) => (
        <Card key={exp.id} variant="bordered">
          <CardHeader
            title={`Experience ${idx + 1}`}
            description={exp.company || 'Add your work experience details'}
          />
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Company"
                placeholder="Acme Inc."
                value={exp.company}
                onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                error={errors[exp.id]?.company}
                required
              />

              <Input
                label="Position"
                placeholder="Software Engineer"
                value={exp.position}
                onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                error={errors[exp.id]?.position}
                required
              />

              <Input
                label="Location"
                placeholder="San Francisco, CA"
                value={exp.location}
                onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
                error={errors[exp.id]?.location}
                required
              />

              <div className="flex items-center gap-4">
                <Input
                  label="Start Date"
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                  error={errors[exp.id]?.startDate}
                  required
                />

                <Input
                  label="End Date"
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                  error={errors[exp.id]?.endDate}
                  disabled={exp.isCurrentRole}
                  required={!exp.isCurrentRole}
                />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={exp.isCurrentRole}
                onChange={(e) =>
                  handleChange(exp.id, 'isCurrentRole', e.target.checked)
                }
                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-secondary-700">
                I currently work here
              </span>
            </label>

            <div className="space-y-3">
              <label className="text-sm font-medium text-secondary-900">
                Key Achievements & Responsibilities
              </label>

              {exp.bulletPoints.map((bullet, bulletIdx) => (
                <div key={bulletIdx} className="flex gap-2">
                  <Textarea
                    placeholder="Describe your achievement or responsibility..."
                    value={bullet}
                    onChange={(e) =>
                      handleBulletPointChange(exp.id, bulletIdx, e.target.value)
                    }
                    rows={2}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveBulletPoint(exp.id, bulletIdx)}
                  >
                    Remove
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleAddBulletPoint(exp.id)}
              >
                + Add Bullet Point
              </Button>
            </div>

            {experiences.length > 1 && (
              <Button
                type="button"
                variant="danger"
                size="sm"
                onClick={() => handleRemoveExperience(exp.id)}
              >
                Remove Experience
              </Button>
            )}
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={handleAddExperience}
        fullWidth
      >
        + Add Another Experience
      </Button>

      <div className="flex justify-between pt-4">
        {onBack && (
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button type="submit" className="ml-auto">
          Next Step
        </Button>
      </div>
    </form>
  );
}
