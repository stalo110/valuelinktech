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
    <section className="border-t border-[color:var(--surface-border)] bg-[color:var(--surface-bg)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-stone-700 dark:text-stone-300 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {details.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <span className="mt-0.5 rounded-full bg-ember/10 p-2 text-ember shadow-[0_0_0_1px_rgba(141,36,24,0.12)] dark:bg-ember/15 dark:text-sand">
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
