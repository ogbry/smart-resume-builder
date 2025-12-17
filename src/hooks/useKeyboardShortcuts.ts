/**
 * Keyboard Shortcuts Hook
 * Provides keyboard navigation and shortcuts for the app
 */

import { useEffect } from 'react';

export interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  callback: () => void;
  description: string;
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[]) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const isCtrl = shortcut.ctrl ? event.ctrlKey || event.metaKey : true;
        const isAlt = shortcut.alt ? event.altKey : true;
        const isShift = shortcut.shift ? event.shiftKey : true;
        const isKey = event.key.toLowerCase() === shortcut.key.toLowerCase();

        if (isCtrl && isAlt && isShift && isKey) {
          event.preventDefault();
          shortcut.callback();
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}

/**
 * Common keyboard shortcuts for the app
 */
export const COMMON_SHORTCUTS = {
  SAVE: { key: 's', ctrl: true, description: 'Save resume' },
  EXPORT: { key: 'e', ctrl: true, description: 'Export PDF' },
  NEXT_STEP: { key: 'ArrowRight', ctrl: true, description: 'Next step' },
  PREV_STEP: { key: 'ArrowLeft', ctrl: true, description: 'Previous step' },
  HELP: { key: '?', shift: true, description: 'Show help' },
};
