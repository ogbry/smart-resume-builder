'use client';

/**
 * Resume Feedback Component
 * Displays overall resume analysis and feedback
 */

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FeedbackItem, FeedbackSeverity } from '@/types/recommendations';
import { Resume } from '@/types/resume';
import { recommendationEngine } from '@/lib/recommendation-engine';
import { clsx } from 'clsx';

export interface ResumeFeedbackProps {
  resume: Resume;
}

export function ResumeFeedback({ resume }: ResumeFeedbackProps) {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const feedbackItems = recommendationEngine.analyzeFeedback(resume);
    setFeedback(feedbackItems);
  }, [resume]);

  const handleDismiss = (id: string) => {
    setDismissed((prev) => new Set(prev).add(id));
  };

  const visibleFeedback = feedback.filter((f) => !dismissed.has(f.id));

  const feedbackToShow = showAll
    ? visibleFeedback
    : visibleFeedback.slice(0, 5);

  const severityConfig: Record<
    FeedbackSeverity,
    { icon: string; color: string; bg: string; variant: any }
  > = {
    error: {
      icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'text-red-600',
      bg: 'bg-red-50 border-red-200',
      variant: 'danger',
    },
    warning: {
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50 border-yellow-200',
      variant: 'warning',
    },
    info: {
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-200',
      variant: 'info',
    },
    success: {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'text-green-600',
      bg: 'bg-green-50 border-green-200',
      variant: 'success',
    },
  };

  if (visibleFeedback.length === 0) {
    return null;
  }

  return (
    <Card variant="bordered" className="mt-8">
      <CardHeader
        title="Resume Analysis"
        description="AI-like feedback on your resume quality and completeness"
      />
      <CardContent>
        <div className="space-y-3">
          {feedbackToShow.map((item) => {
            const config = severityConfig[item.severity];

            return (
              <div
                key={item.id}
                className={clsx(
                  'p-4 rounded-lg border flex items-start gap-3',
                  config.bg
                )}
              >
                <svg
                  className={clsx('w-5 h-5 flex-shrink-0 mt-0.5', config.color)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={config.icon}
                  />
                </svg>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-secondary-900">
                          {item.title}
                        </h4>
                        {item.section && (
                          <Badge variant="default" size="sm">
                            {item.section}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-secondary-700 mb-2">
                        {item.description}
                      </p>
                      {item.fixSuggestion && (
                        <div className="mt-2 p-2 bg-white rounded border border-secondary-200">
                          <p className="text-xs text-secondary-600">
                            <span className="font-medium">Suggestion:</span>{' '}
                            {item.fixSuggestion}
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleDismiss(item.id)}
                      className="text-secondary-400 hover:text-secondary-600 transition-colors"
                      aria-label="Dismiss"
                    >
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visibleFeedback.length > 5 && (
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? 'Show Less'
                : `Show ${visibleFeedback.length - 5} More`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
