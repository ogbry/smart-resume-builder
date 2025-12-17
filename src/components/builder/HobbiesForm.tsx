'use client';

/**
 * Hobbies Form Component
 * Step 5: Collect hobbies and activities
 */

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Select, SelectOption } from '@/components/ui/Select';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Hobby, HobbyCategory } from '@/types/resume';
import { validateHobby } from '@/lib/utils/validation';

export interface HobbiesFormProps {
  initialData?: Hobby[];
  onSubmit: (data: Hobby[]) => void;
  onBack?: () => void;
}

const HOBBY_CATEGORIES: SelectOption[] = [
  { value: 'sports', label: 'Sports & Fitness' },
  { value: 'creative', label: 'Creative Arts' },
  { value: 'technical', label: 'Technical & Tech' },
  { value: 'community', label: 'Community & Volunteering' },
  { value: 'leadership', label: 'Leadership & Organizations' },
  { value: 'other', label: 'Other' },
];

export function HobbiesForm({ initialData, onSubmit, onBack }: HobbiesFormProps) {
  const [hobbies, setHobbies] = useState<Hobby[]>(initialData || []);
  const [newHobby, setNewHobby] = useState({
    name: '',
    description: '',
    category: '' as HobbyCategory | '',
  });
  const [error, setError] = useState('');

  const handleAddHobby = () => {
    if (!newHobby.name.trim()) {
      setError('Hobby name is required');
      return;
    }

    const hobbyData: Hobby = {
      id: `hobby-${Date.now()}`,
      name: newHobby.name.trim(),
      description: newHobby.description.trim() || undefined,
      category: newHobby.category || 'other',
    };

    const validation = validateHobby(hobbyData);
    if (!validation.isValid) {
      setError(Object.values(validation.errors)[0]);
      return;
    }

    setHobbies([...hobbies, hobbyData]);
    setNewHobby({ name: '', description: '', category: '' });
    setError('');
  };

  const handleRemoveHobby = (id: string) => {
    setHobbies(hobbies.filter((h) => h.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hobbies are optional
    onSubmit(hobbies);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          Hobbies and activities are optional but can help showcase your personality
          and well-roundedness. Choose activities that demonstrate valuable traits
          or align with your career goals.
        </p>
      </div>

      <Card variant="bordered">
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary-900">
            Add Hobby or Activity
          </h3>

          <Input
            label="Hobby/Activity Name"
            placeholder="e.g., Marathon Running, Open Source Contribution"
            value={newHobby.name}
            onChange={(e) => {
              setNewHobby({ ...newHobby, name: e.target.value });
              setError('');
            }}
            error={error}
          />

          <Select
            label="Category"
            options={HOBBY_CATEGORIES}
            placeholder="Select category"
            value={newHobby.category}
            onChange={(e) =>
              setNewHobby({ ...newHobby, category: e.target.value as HobbyCategory })
            }
          />

          <Textarea
            label="Description (Optional)"
            placeholder="Add context or achievements related to this hobby..."
            value={newHobby.description}
            onChange={(e) =>
              setNewHobby({ ...newHobby, description: e.target.value })
            }
            rows={3}
            helperText="e.g., 'Completed 3 marathons' or 'Contributed to 10+ open source projects'"
          />

          <Button
            type="button"
            variant="primary"
            onClick={handleAddHobby}
            fullWidth
          >
            + Add Hobby
          </Button>
        </CardContent>
      </Card>

      {hobbies.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary-900">
            Your Hobbies & Activities ({hobbies.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hobbies.map((hobby) => (
              <Card key={hobby.id} variant="bordered" padding="sm">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-secondary-900">
                        {hobby.name}
                      </h4>
                      {hobby.category && (
                        <Badge variant="default" size="sm">
                          {HOBBY_CATEGORIES.find((c) => c.value === hobby.category)
                            ?.label || hobby.category}
                        </Badge>
                      )}
                    </div>
                    {hobby.description && (
                      <p className="text-sm text-secondary-600">
                        {hobby.description}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveHobby(hobby.id)}
                    className="text-secondary-400 hover:text-red-600 transition-colors ml-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {hobbies.length === 0 && (
        <div className="text-center py-12 text-secondary-500">
          No hobbies added yet. Add your first hobby above.
        </div>
      )}

      <div className="flex justify-between pt-4">
        {onBack && (
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button type="submit" className="ml-auto">
          {hobbies.length === 0 ? 'Skip & Finish' : 'Finish'}
        </Button>
      </div>
    </form>
  );
}
