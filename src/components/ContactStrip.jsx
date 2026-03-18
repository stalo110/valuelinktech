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
    <section className="border-t border-slate-200/70 bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {details.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <span className="mt-0.5 rounded-full bg-teal/10 p-2 text-teal">
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
