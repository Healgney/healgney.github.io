import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export function ThemeToggle({ className = '', size = 'md' }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  const isSmall = size === 'sm';
  const iconSize = isSmall ? 'w-4 h-4' : 'w-4.5 h-4.5';
  const buttonPadding = isSmall ? 'p-1.5' : 'p-2';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-black ${buttonPadding} ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="dark-icon"
            initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 45, scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-cyan-400"
          >
            <Moon className={iconSize} />
          </motion.span>
        ) : (
          <motion.span
            key="light-icon"
            initial={{ rotate: 45, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -45, scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-amber-500"
          >
            <Sun className={iconSize} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
