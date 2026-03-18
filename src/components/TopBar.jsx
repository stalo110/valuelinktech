import { Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data/site';

function TopBar() {
  return (
    <div className="hidden border-b border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] backdrop-blur-xl lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 text-sm text-stone-700 dark:text-stone-300">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-ember dark:text-sand" />
            {contactInfo.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-ember dark:text-sand" />
            {contactInfo.email}
          </span>
        </div>
        <p>{contactInfo.hours}</p>
      </div>
    </div>
  );
}

export default TopBar;
