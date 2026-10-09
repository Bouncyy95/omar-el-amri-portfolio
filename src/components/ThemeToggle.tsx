import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle({ variant = 'pill' }: { variant?: 'pill' | 'compact' | 'drawer' }) {
  const { isPaper, toggleTheme } = useTheme();
  const Icon = isPaper ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isPaper ? 'dark' : 'light'} theme`}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors cursor-pointer ${
        variant === 'compact' ? 'w-9 h-9' : 'px-4 py-2 text-sm'
      }`}
    >
      <Icon size={18} aria-hidden="true" />
      {variant !== 'compact' && <span>{isPaper ? 'Dark mode' : 'Light mode'}</span>}
    </button>
  );
}
