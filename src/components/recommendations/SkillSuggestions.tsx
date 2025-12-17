'use client';

/**
 * Skill Suggestions Component
 * Displays AI-like skill recommendations
 */

import React, { useState, useEffect } from 'react';
import { RecommendationCard } from './RecommendationCard';
import { Badge } from '@/components/ui/Badge';
import { SkillSuggestion, JobContext } from '@/types/recommendations';
import { Skill } from '@/types/resume';
import { recommendationEngine } from '@/lib/recommendation-engine';

export interface SkillSuggestionsProps {
  jobContext: JobContext;
  currentSkills: Skill[];
  onApplySkill: (skillName: string, category: any) => void;
}

export function SkillSuggestions({
  jobContext,
  currentSkills,
  onApplySkill,
}: SkillSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<SkillSuggestion[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const skillSuggestions = recommendationEngine.suggestSkills(jobContext, {
      maxSuggestions: 8,
    });

    setSuggestions(skillSuggestions);
  }, [jobContext]);

  const handleApply = (suggestion: SkillSuggestion) => {
    onApplySkill(suggestion.skillName, suggestion.category);
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-secondary-900">
          Smart Skill Recommendations
        </h3>
        <Badge variant="info" size="sm">
          {visibleSuggestions.length} suggestions
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleSuggestions.map((suggestion) => (
          <RecommendationCard
            key={suggestion.id}
            title={suggestion.skillName}
            description={suggestion.reasoning}
            reason={suggestion.reason}
            priority={suggestion.priority}
            onApply={() => handleApply(suggestion)}
            onDismiss={() => handleDismiss(suggestion.id)}
            metadata={
              <div className="flex flex-wrap gap-2">
                {suggestion.relatedSkills && suggestion.relatedSkills.length > 0 && (
                  <div className="text-xs text-secondary-600">
                    <span className="font-medium">Related:</span>{' '}
                    {suggestion.relatedSkills.slice(0, 3).join(', ')}
                  </div>
                )}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
