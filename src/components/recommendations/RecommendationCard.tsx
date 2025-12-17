'use client';

/**
 * Recommendation Card Component
 * Reusable card for displaying AI-like suggestions
 */

import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SuggestionPriority } from '@/types/recommendations';
import { clsx } from 'clsx';

export interface RecommendationCardProps {
  title: string;
  description: string;
  reason: string;
  priority: SuggestionPriority;
  onApply?: () => void;
  onDismiss?: () => void;
  metadata?: React.ReactNode;
  children?: React.ReactNode;
}

export function RecommendationCard({
  title,
  description,
  reason,
  priority,
  onApply,
  onDismiss,
  metadata,
  children,
}: RecommendationCardProps) {
  const priorityColors: Record<SuggestionPriority, string> = {
    high: 'success',
    medium: 'info',
    low: 'default',
  };

  const priorityLabels: Record<SuggestionPriority, string> = {
    high: 'Highly Recommended',
    medium: 'Recommended',
    low: 'Optional',
  };

  return (
    <Card
      variant="bordered"
      padding="md"
      className={clsx(
        'transition-all hover:shadow-md',
        priority === 'high' && 'border-green-300 bg-green-50/30'
      )}
    >
      <CardContent>
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-secondary-900">{title}</h4>
              <Badge variant={priorityColors[priority]} size="sm">
                {priorityLabels[priority]}
              </Badge>
            </div>
            <p className="text-sm text-secondary-700">{description}</p>
          </div>

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-secondary-400 hover:text-secondary-600 transition-colors ml-2"
              aria-label="Dismiss"
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
          )}
        </div>

        {children}

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-secondary-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{reason}</span>
          </div>

          {onApply && (
            <Button variant="primary" size="sm" onClick={onApply}>
              Apply
            </Button>
          )}
        </div>

        {metadata && <div className="mt-3 pt-3 border-t border-secondary-200">{metadata}</div>}
      </CardContent>
    </Card>
  );
}
