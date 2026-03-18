import { motion } from 'framer-motion';

function PageHero({ title, description, image, eyebrow = 'Valuelink Technologies' }) {
  return (
    <section className="px-4 pb-8 pt-6 sm:pb-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-slate-200/60 bg-white shadow-soft">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#0a1929_0%,#1e3a5f_65%,#245f79_100%)] px-6 py-16 text-white sm:px-10 lg:px-14">
            <div className="grid-overlay absolute inset-0 opacity-30" />
            <div className="relative max-w-2xl space-y-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-200">
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
                className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
              >
                {description}
              </motion.p>
            </div>
          </div>

          <div className="relative min-h-[280px] bg-slate-100">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,25,41,0.05),rgba(0,188,212,0.12))]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
