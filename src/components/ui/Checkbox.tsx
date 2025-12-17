/**
 * Checkbox Component
 * Reusable checkbox with label
 */

import React from 'react';
import { clsx } from 'clsx';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, className, id, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={clsx(
            'w-4 h-4 mt-0.5 text-primary-600 border-secondary-300 rounded',
            'focus:ring-2 focus:ring-primary-500 focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
            className
          )}
          {...props}
        />

        {(label || description) && (
          <div className="flex-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-secondary-900 cursor-pointer select-none"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-secondary-600 mt-0.5">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
