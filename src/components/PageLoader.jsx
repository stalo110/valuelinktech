import { motion } from 'framer-motion';

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4 py-20">
      <div className="glass-panel flex w-full max-w-md flex-col items-center gap-5 rounded-[32px] px-8 py-10 text-center">
        <motion.div
          className="h-14 w-14 rounded-full border border-ember/20 border-t-ember"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
        />
        <div>
          <p className="font-display text-lg font-semibold tracking-[-0.03em] text-stone-950">Loading experience</p>
          <p className="mt-2 text-sm text-[color:var(--muted-text)]">
            Preparing the next section of the Valuelink site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
