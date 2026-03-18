import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon: Icon, to = '/services' }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group surface-panel relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(141,36,24,0.8),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Link to={to} className="flex h-full flex-col p-6">
        <div className="inline-flex w-fit rounded-2xl bg-ink p-3 text-cream shadow-[0_16px_30px_-18px_rgba(21,16,15,0.7)] transition group-hover:bg-ember dark:bg-cream dark:text-ink">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-stone-950 dark:text-cream">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[color:var(--muted-text)]">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-oak transition group-hover:text-ember dark:text-stone-200 dark:group-hover:text-sand">
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.article>
  );
}

export default ServiceCard;
