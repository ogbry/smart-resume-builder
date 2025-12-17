'use client';

/**
 * Form Stepper Component
 * Navigation for multi-step form
 */

import React from 'react';
import { FORM_STEPS, FormStep } from '@/constants/steps';
import { clsx } from 'clsx';

export interface FormStepperProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
  completedSteps?: Set<number>;
}

export function FormStepper({
  currentStep,
  onStepClick,
  completedSteps = new Set(),
}: FormStepperProps) {
  const handleStepClick = (step: FormStep) => {
    if (onStepClick) {
      onStepClick(step.id);
    }
  };

  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-between">
        {FORM_STEPS.map((step, idx) => {
          const isCompleted = completedSteps.has(step.id);
          const isCurrent = currentStep === step.id;
          const isPast = step.id < currentStep;
          const isClickable = isPast || isCompleted;

          return (
            <li
              key={step.id}
              className={clsx(
                'relative flex-1',
                idx !== FORM_STEPS.length - 1 && 'pr-8'
              )}
            >
              {/* Connector line */}
              {idx !== FORM_STEPS.length - 1 && (
                <div
                  className="absolute top-4 left-0 right-0 h-0.5 -mr-8"
                  aria-hidden="true"
                >
                  <div
                    className={clsx(
                      'h-full transition-colors',
                      isCompleted || isPast
                        ? 'bg-primary-600'
                        : 'bg-secondary-200'
                    )}
                  />
                </div>
              )}

              <button
                onClick={() => isClickable && handleStepClick(step)}
                disabled={!isClickable}
                className={clsx(
                  'relative flex flex-col items-center group',
                  isClickable && 'cursor-pointer',
                  !isClickable && 'cursor-default'
                )}
              >
                <span
                  className={clsx(
                    'flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all relative z-10',
                    isCurrent &&
                      'border-primary-600 bg-primary-600 text-white scale-110',
                    isCompleted &&
                      !isCurrent &&
                      'border-primary-600 bg-primary-600 text-white',
                    isPast &&
                      !isCompleted &&
                      !isCurrent &&
                      'border-primary-400 bg-white text-primary-600',
                    !isCurrent &&
                      !isCompleted &&
                      !isPast &&
                      'border-secondary-300 bg-white text-secondary-400'
                  )}
                >
                  {isCompleted && !isCurrent ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </span>

                <span
                  className={clsx(
                    'mt-2 text-xs font-medium text-center transition-colors',
                    isCurrent && 'text-primary-600',
                    (isCompleted || isPast) &&
                      !isCurrent &&
                      'text-secondary-700',
                    !isCurrent &&
                      !isCompleted &&
                      !isPast &&
                      'text-secondary-400'
                  )}
                >
                  {step.title}
                </span>

                {step.required && !isCompleted && !isCurrent && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
