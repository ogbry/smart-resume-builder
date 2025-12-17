'use client';

/**
 * Skills Form Component
 * Step 3: Collect skills
 */

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Select, SelectOption } from '@/components/ui/Select';
import { Skill, SkillCategory } from '@/types/resume';
import { validateSkill } from '@/lib/utils/validation';

export interface SkillsFormProps {
  initialData?: Skill[];
  onSubmit: (data: Skill[]) => void;
  onBack?: () => void;
}

const SKILL_CATEGORIES: SelectOption[] = [
  { value: 'languages', label: 'Programming Languages' },
  { value: 'frameworks', label: 'Frameworks & Libraries' },
  { value: 'tools', label: 'Tools & Technologies' },
  { value: 'databases', label: 'Databases' },
  { value: 'cloud', label: 'Cloud Platforms' },
  { value: 'soft-skills', label: 'Soft Skills' },
  { value: 'other', label: 'Other' },
];

export function SkillsForm({ initialData, onSubmit, onBack }: SkillsFormProps) {
  const [skills, setSkills] = useState<Skill[]>(initialData || []);
  const [newSkill, setNewSkill] = useState({
    name: '',
    category: '' as SkillCategory | '',
  });
  const [error, setError] = useState('');

  const handleAddSkill = () => {
    if (!newSkill.name.trim()) {
      setError('Skill name is required');
      return;
    }

    if (!newSkill.category) {
      setError('Please select a category');
      return;
    }

    const skillData: Skill = {
      id: `skill-${Date.now()}`,
      name: newSkill.name.trim(),
      category: newSkill.category as SkillCategory,
    };

    const validation = validateSkill(skillData);
    if (!validation.isValid) {
      setError(Object.values(validation.errors)[0]);
      return;
    }

    // Check for duplicates
    if (skills.some((s) => s.name.toLowerCase() === skillData.name.toLowerCase())) {
      setError('This skill already exists');
      return;
    }

    setSkills([...skills, skillData]);
    setNewSkill({ name: '', category: '' });
    setError('');
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (skills.length === 0) {
      setError('Please add at least one skill');
      return;
    }

    onSubmit(skills);
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Add Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Input
              label="Skill Name"
              placeholder="e.g., React, Python, Project Management"
              value={newSkill.name}
              onChange={(e) => {
                setNewSkill({ ...newSkill, name: e.target.value });
                setError('');
              }}
              onKeyPress={handleKeyPress}
              error={error}
            />
          </div>

          <Select
            label="Category"
            options={SKILL_CATEGORIES}
            placeholder="Select category"
            value={newSkill.category}
            onChange={(e) =>
              setNewSkill({ ...newSkill, category: e.target.value as SkillCategory })
            }
          />
        </div>

        <Button
          type="button"
          variant="primary"
          onClick={handleAddSkill}
          fullWidth
        >
          + Add Skill
        </Button>
      </div>

      {skills.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-secondary-900">
            Your Skills ({skills.length})
          </h3>

          {SKILL_CATEGORIES.map((cat) => {
            const categorySkills = skillsByCategory[cat.value as SkillCategory];
            if (!categorySkills || categorySkills.length === 0) return null;

            return (
              <div key={cat.value} className="space-y-2">
                <h4 className="text-sm font-medium text-secondary-700">
                  {cat.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge
                      key={skill.id}
                      variant="primary"
                      size="md"
                      removable
                      onRemove={() => handleRemoveSkill(skill.id)}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {skills.length === 0 && (
        <div className="text-center py-12 text-secondary-500">
          No skills added yet. Add your first skill above.
        </div>
      )}

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
