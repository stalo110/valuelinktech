import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon: Icon, to = '/services' }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group rounded-[28px] border border-slate-200/80 bg-white shadow-card transition hover:border-teal/50"
    >
      <Link to={to} className="flex h-full flex-col p-6">
        <div className="inline-flex w-fit rounded-2xl bg-ink p-3 text-white transition group-hover:bg-teal">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-steel transition group-hover:text-teal">
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.article>
  );
}

export default ServiceCard;
