import { Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data/site';

function TopBar() {
  return (
    <div className="hidden border-b border-slate-200/60 bg-white/55 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 text-sm text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-teal" />
            {contactInfo.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-teal" />
            {contactInfo.email}
          </span>
        </div>
        <p>{contactInfo.hours}</p>
      </div>
    </div>
  );
}

export default TopBar;
