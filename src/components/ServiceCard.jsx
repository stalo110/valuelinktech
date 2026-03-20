import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon: Icon, to = '/services' }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group surface-panel relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-1 rounded-full bg-[linear-gradient(90deg,rgba(141,36,24,0),rgba(141,36,24,0.72),rgba(141,36,24,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Link to={to} className="flex h-full flex-col p-6 sm:p-7">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] border border-ember/15 bg-ember/10 text-ember transition group-hover:-translate-y-0.5 group-hover:bg-ember group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-stone-950">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[color:var(--muted-text)]">{description}</p>
        <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-oak transition group-hover:text-ember">
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.article>
  );
}

export default ServiceCard;
