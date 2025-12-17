'use client';

/**
 * Personal Info Form Component
 * Step 1: Collect personal information
 */

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { PersonalInfo } from '@/types/resume';
import { validatePersonalInfo } from '@/lib/utils/validation';

export interface PersonalInfoFormProps {
  initialData?: Partial<PersonalInfo>;
  onSubmit: (data: PersonalInfo) => void;
  onBack?: () => void;
}

export function PersonalInfoForm({ initialData, onSubmit, onBack }: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<Partial<PersonalInfo>>(
    initialData || {}
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validatePersonalInfo(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onSubmit(formData as PersonalInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={formData.fullName || ''}
          onChange={(e) => handleChange('fullName', e.target.value)}
          error={errors.fullName}
          required
        />

        <Input
          label="Email"
          type="email"
          placeholder="john.doe@example.com"
          value={formData.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          error={errors.email}
          required
        />

        <Input
          label="Phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={errors.phone}
          required
        />

        <Input
          label="Location"
          placeholder="San Francisco, CA"
          value={formData.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
          error={errors.location}
          required
        />
      </div>

      <div className="space-y-6">
        <Input
          label="LinkedIn URL"
          type="url"
          placeholder="https://linkedin.com/in/johndoe"
          value={formData.linkedIn || ''}
          onChange={(e) => handleChange('linkedIn', e.target.value)}
          error={errors.linkedIn}
        />

        <Input
          label="GitHub URL"
          type="url"
          placeholder="https://github.com/johndoe"
          value={formData.github || ''}
          onChange={(e) => handleChange('github', e.target.value)}
          error={errors.github}
        />

        <Input
          label="Portfolio URL"
          type="url"
          placeholder="https://johndoe.com"
          value={formData.portfolio || ''}
          onChange={(e) => handleChange('portfolio', e.target.value)}
          error={errors.portfolio}
        />

        <Textarea
          label="Professional Summary"
          placeholder="A brief overview of your professional background, skills, and career goals..."
          value={formData.summary || ''}
          onChange={(e) => handleChange('summary', e.target.value)}
          helperText="2-3 sentences highlighting your expertise and what you bring to the role"
          rows={4}
        />
      </div>

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
