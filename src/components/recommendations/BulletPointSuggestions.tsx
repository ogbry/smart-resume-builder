'use client';

/**
 * Bullet Point Suggestions Component
 * Displays AI-like bullet point recommendations for experience
 */

import React, { useState, useEffect } from 'react';
import { RecommendationCard } from './RecommendationCard';
import { Badge } from '@/components/ui/Badge';
import { BulletPointSuggestion, JobContext } from '@/types/recommendations';
import { Experience } from '@/types/resume';
import { recommendationEngine } from '@/lib/recommendation-engine';

export interface BulletPointSuggestionsProps {
  experience: Partial<Experience>;
  jobContext: JobContext;
  onApplyBulletPoint: (bulletPoint: string) => void;
}

export function BulletPointSuggestions({
  experience,
  jobContext,
  onApplyBulletPoint,
}: BulletPointSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<BulletPointSuggestion[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const bulletSuggestions = recommendationEngine.generateBulletPoints(
      experience,
      jobContext,
      { maxSuggestions: 6 }
    );

    setSuggestions(bulletSuggestions);
  }, [experience, jobContext]);

  const handleApply = (suggestion: BulletPointSuggestion) => {
    onApplyBulletPoint(suggestion.content);
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-secondary-900">
          Achievement Bullet Points
        </h3>
        <Badge variant="info" size="sm">
          {visibleSuggestions.length} suggestions
        </Badge>
      </div>

      <p className="text-sm text-secondary-600">
        These bullet points follow best practices: action verbs, measurable results, and clear impact.
      </p>

      <div className="space-y-3">
        {visibleSuggestions.map((suggestion) => (
          <RecommendationCard
            key={suggestion.id}
            title={`${suggestion.metadata?.category || 'Suggestion'}`}
            description={suggestion.content}
            reason={suggestion.reason}
            priority={suggestion.priority}
            onApply={() => handleApply(suggestion)}
            onDismiss={() => handleDismiss(suggestion.id)}
            metadata={
              suggestion.impactMetrics && suggestion.impactMetrics.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {suggestion.impactMetrics.map((metric, idx) => (
                    <Badge key={idx} variant="default" size="sm">
                      {metric}
                    </Badge>
                  ))}
                </div>
              ) : null
            }
          >
            <div className="my-2 p-3 bg-secondary-50 rounded-lg border border-secondary-200">
              <p className="text-sm text-secondary-900 font-mono leading-relaxed">
                {suggestion.content}
              </p>
            </div>
          </RecommendationCard>
        ))}
      </div>
    </div>
  );
}
