import { motion } from 'framer-motion';

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4 py-20">
      <div className="glass-panel flex w-full max-w-md flex-col items-center gap-5 rounded-[30px] px-8 py-10 text-center">
        <motion.div
          className="h-14 w-14 rounded-full border border-teal/30 border-t-teal"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
        />
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Loading experience</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Preparing the next section of the Valuelink site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
