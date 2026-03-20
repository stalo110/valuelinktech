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
    <section className="px-4 pb-8 pt-6 sm:pb-10">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[34px] border border-[color:var(--surface-border)] bg-white px-6 py-6 shadow-card md:grid-cols-2 xl:grid-cols-4 xl:px-8">
        {details.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-4 rounded-[24px] border border-[color:var(--surface-border)] bg-[#fffcf8] p-4">
            <span className="mt-0.5 rounded-full bg-ember/10 p-3 text-ember shadow-[0_0_0_1px_rgba(141,36,24,0.08)]">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm leading-7 text-stone-700">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactStrip;
