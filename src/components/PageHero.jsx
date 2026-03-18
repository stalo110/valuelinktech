import { motion } from 'framer-motion';
import SmartImage from './SmartImage';

function PageHero({ title, description, image, eyebrow = 'Valuelink Technologies' }) {
  return (
    <section className="px-4 pb-8 pt-6 sm:pb-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[color:var(--surface-border)] bg-[color:var(--surface-bg-strong)] shadow-soft">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#15100f_0%,#35201b_58%,#8d2418_100%)] px-6 py-16 text-white sm:px-10 lg:px-14">
            <div className="grid-overlay absolute inset-0 opacity-30" />
            <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-cream/15 blur-3xl" />
            <div className="relative max-w-2xl space-y-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-stone-200">
                {eyebrow}
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="text-balance text-4xl font-semibold leading-tight sm:text-5xl"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="max-w-2xl text-base leading-8 text-stone-200 sm:text-lg"
              >
                {description}
              </motion.p>
            </div>
          </div>

          <div className="relative min-h-[280px] bg-[#f0e4da] dark:bg-[#140d0b]">
            <SmartImage
              src={image}
              alt={title}
              priority
              containerClassName="h-full w-full"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(21,16,15,0.08),rgba(141,36,24,0.12))]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
