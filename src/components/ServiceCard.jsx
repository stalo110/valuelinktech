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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,188,212,0.75),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Link to={to} className="flex h-full flex-col p-6">
        <div className="inline-flex w-fit rounded-2xl bg-ink p-3 text-white shadow-[0_16px_30px_-18px_rgba(10,25,41,0.7)] transition group-hover:bg-teal dark:bg-white dark:text-ink">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-steel transition group-hover:text-teal dark:text-slate-200 dark:group-hover:text-teal">
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.article>
  );
}

export default ServiceCard;
