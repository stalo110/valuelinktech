import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SmartImage from './SmartImage';

function PageHero({ title, description, image, eyebrow = 'Valuelink Technologies', highlights = [] }) {
  const heroHighlights = highlights.length
    ? highlights
    : ['Business-first delivery', 'Managed support', 'Implementation clarity'];

  return (
    <section className="px-4 pb-8 pt-6 sm:pb-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[42px] border border-[color:var(--surface-border)] bg-white px-6 py-10 shadow-soft sm:px-10 lg:px-14 lg:py-14">
        <div className="grid-overlay absolute inset-0 opacity-55" />
        <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-ember/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sand/30 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-[color:var(--surface-border-strong)] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-ember backdrop-blur-sm">
              {eyebrow}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-6 font-display text-balance text-[clamp(2.8rem,6vw,4.9rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-ink"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted-text)] sm:text-lg"
            >
              {description}
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-[color:var(--surface-border)] bg-white/84 px-4 py-2 text-sm font-medium text-stone-700 shadow-[0_18px_40px_-34px_rgba(21,16,15,0.4)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] sm:min-h-[440px]">
            <motion.div
              className="absolute -left-2 top-16 z-20 max-w-[220px] rounded-[24px] border border-[color:var(--surface-border)] bg-white px-5 py-4 shadow-card"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ember">Support Focus</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">Full lifecycle</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-text)]">
                Assess, deliver, secure, and support in one operating flow.
              </p>
            </motion.div>

            <motion.div
              className="absolute right-0 top-0 h-56 w-[78%] rounded-[36px] bg-[#f8eee7]"
              animate={{ y: [0, -16, 0], rotate: [9, 7, 9] }}
              transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute bottom-2 left-10 right-8 top-16 rounded-[36px] bg-[#f4e7dc]" />

            <div className="absolute right-4 top-6 w-full max-w-[540px] overflow-hidden rounded-[36px] border border-[color:var(--surface-border)] bg-white p-4 shadow-soft">
              <SmartImage
                src={image}
                alt={title}
                priority
                containerClassName="h-full w-full rounded-[28px]"
                className="h-[320px] w-full rounded-[28px] object-cover sm:h-[380px]"
              />
            </div>

            <motion.div
              className="absolute bottom-0 right-0 z-20 rounded-[24px] bg-ink px-5 py-4 text-white shadow-soft"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                <ArrowUpRight className="h-4 w-4" />
                Delivery confidence
              </div>
              <p className="mt-2 max-w-[240px] text-sm leading-7 text-white/80">
                Solutions designed around uptime, clarity, and support after go-live.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
