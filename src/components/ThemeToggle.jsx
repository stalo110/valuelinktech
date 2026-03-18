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
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-xl transition hover:border-teal/50 hover:text-steel dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-teal/50 dark:hover:text-white"
    >
      <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
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
