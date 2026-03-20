import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function ServiceAccordion({ categories }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {categories.map(({ title, intro, items, icon: Icon }, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={title}
            className={`overflow-hidden rounded-[32px] border shadow-card transition ${
              isOpen
                ? 'border-ember/35 bg-white'
                : 'border-[color:var(--surface-border)] bg-[color:var(--surface-bg)]'
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div className="flex items-start gap-4">
                <span className="rounded-[18px] border border-ember/15 bg-ember/10 p-3 text-ember">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-stone-950">{title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[color:var(--muted-text)]">{intro}</p>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 shrink-0 text-stone-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-4 border-t border-[color:var(--surface-border)] px-6 py-6 sm:px-8 lg:grid-cols-2">
                    {items.map((item) => (
                      <div
                        key={item}
                        className="rounded-[26px] border border-[color:var(--surface-border)] bg-[#fbf5ef] p-5 text-sm leading-7 text-stone-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceAccordion;
