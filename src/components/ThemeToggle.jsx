import { motion } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--surface-border)] bg-[color:var(--glass-bg)] px-3 py-2 text-sm font-medium text-stone-700 backdrop-blur-xl transition hover:border-ember/40 hover:text-ember dark:text-stone-200 dark:hover:border-sand/40 dark:hover:text-cream"
    >
      <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-ink text-cream dark:bg-cream dark:text-ink">
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
        </motion.span>
      </span>
      <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'} mode</span>
    </motion.button>
  );
}

export default ThemeToggle;
