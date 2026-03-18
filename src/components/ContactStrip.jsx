import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../data/site';

function ContactStrip() {
  const details = [
    { icon: Phone, text: contactInfo.phone },
    { icon: Mail, text: contactInfo.email },
    { icon: MapPin, text: contactInfo.address },
    { icon: Clock3, text: contactInfo.hours },
  ];

  return (
    <section className="border-t border-slate-300/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-slate-700 dark:text-slate-300 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {details.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <span className="mt-0.5 rounded-full bg-teal/10 p-2 text-teal shadow-[0_0_0_1px_rgba(0,188,212,0.12)]">
              <Icon className="h-4 w-4" />
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactStrip;
