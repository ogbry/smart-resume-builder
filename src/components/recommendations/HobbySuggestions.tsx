'use client';

/**
 * Hobby Suggestions Component
 * Displays AI-like hobby recommendations
 */

import React, { useState, useEffect } from 'react';
import { RecommendationCard } from './RecommendationCard';
import { Badge } from '@/components/ui/Badge';
import { HobbySuggestion, ProfileContext } from '@/types/recommendations';
import { Hobby } from '@/types/resume';
import { recommendationEngine } from '@/lib/recommendation-engine';

export interface HobbySuggestionsProps {
  profileContext: ProfileContext;
  currentHobbies: Hobby[];
  onApplyHobby: (hobbyName: string, category: any) => void;
}

export function HobbySuggestions({
  profileContext,
  currentHobbies,
  onApplyHobby,
}: HobbySuggestionsProps) {
  const [suggestions, setSuggestions] = useState<HobbySuggestion[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const hobbySuggestions = recommendationEngine.recommendHobbies(profileContext, {
      maxSuggestions: 6,
    });

    setSuggestions(hobbySuggestions);
  }, [profileContext]);

  const handleApply = (suggestion: HobbySuggestion) => {
    onApplyHobby(suggestion.hobbyName, suggestion.category);
    setDismissed((prev) => new Set(prev).add(suggestion.id));
  };

  const handleDismiss = (id: string) => {
    setDismissed((prev) => new Set(prev).add(id));
  };

  const visibleSuggestions = suggestions.filter((s) => !dismissed.has(s.id));

  if (visibleSuggestions.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-secondary-900">
          Recommended Hobbies & Activities
        </h3>
        <Badge variant="info" size="sm">
          {visibleSuggestions.length} suggestions
        </Badge>
      </div>

      <p className="text-sm text-secondary-600">
        These hobbies align with your career goals and demonstrate valuable professional traits.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleSuggestions.map((suggestion) => (
          <RecommendationCard
            key={suggestion.id}
            title={suggestion.hobbyName}
            description={suggestion.description}
            reason={suggestion.alignmentReason}
            priority={suggestion.priority}
            onApply={() => handleApply(suggestion)}
            onDismiss={() => handleDismiss(suggestion.id)}
            metadata={
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs text-secondary-700">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{suggestion.professionalBenefit}</span>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
