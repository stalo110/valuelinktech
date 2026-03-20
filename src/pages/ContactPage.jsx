import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import { contactInfo, siteMetadata } from '../data/site';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  const details = [
    { label: 'Headquarters', value: contactInfo.address, icon: MapPin },
    {
      label: 'Phone Numbers',
      value: `${contactInfo.phone} (main), ${contactInfo.altPhone} (alternate)`,
      icon: Phone,
    },
    { label: 'Email', value: contactInfo.email, icon: Mail },
    { label: 'Business Hours', value: contactInfo.hours, icon: Clock3 },
  ];

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Valuelink Technologies in Surulere, Lagos for infrastructure, managed services, software, and advisory support."
        path="/contact"
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
        schema={[
          {
            '@type': 'ContactPage',
            name: `${siteMetadata.name} Contact Page`,
            url: `${siteMetadata.siteUrl}/contact`,
          },
          {
            '@type': 'LocalBusiness',
            name: siteMetadata.name,
            telephone: contactInfo.phone,
            email: contactInfo.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '21 Bodethomas',
              addressLocality: 'Surulere',
              addressRegion: 'Lagos',
              addressCountry: 'NG',
            },
            openingHours: 'Mo-Sa 09:00-18:00',
          },
        ]}
      />

      <PageHero
        title="Contact Us"
        description="Start a conversation about infrastructure, managed services, software, procurement, or long-term IT support."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
        highlights={['Lagos office', 'Mon-Sat support window', 'Fast response to enquiries']}
      />

      <AnimatedSection className="px-4 pb-14 pt-8 sm:pt-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-shell space-y-8">
            <SectionHeading
              eyebrow="Contact Details"
              title="Let's discuss the right solution for your business"
              description="Reach our Lagos office directly or send a message through the form."
            />

            <div className="space-y-4">
              {details.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex gap-4 rounded-[26px] border border-[color:var(--surface-border)] bg-[#fffcf8] p-5">
                  <span className="rounded-[18px] bg-ember/10 p-3 text-ember">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-stone-950">{label}</p>
                    <p className="mt-1 text-sm leading-7 text-[color:var(--muted-text)]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[color:var(--surface-border)]">
              <iframe
                title="Valuelink Technologies location"
                src="https://www.google.com/maps?q=21%20Bodethomas%2C%20Surulere%2C%20Lagos&output=embed"
                className="h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <AnimatedSection
            as="div"
            amount={0.15}
            className="rounded-[34px] border border-[color:var(--surface-border)] bg-white p-8 shadow-soft sm:p-10"
          >
            <SectionHeading
              eyebrow="Get in Touch"
              title="Send us a message"
              description="Share your goals, current challenges, or the support you need, and we'll follow up."
            />

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-stone-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[18px] border border-[color:var(--surface-border)] bg-[#fffcf8] px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-ember focus:bg-white"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-stone-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[18px] border border-[color:var(--surface-border)] bg-[#fffcf8] px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-ember focus:bg-white"
                  placeholder="you@company.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-stone-700">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full rounded-[18px] border border-[color:var(--surface-border)] bg-[#fffcf8] px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-ember focus:bg-white"
                  placeholder="Tell us what you need support with."
                />
              </label>

              <button type="submit" className="primary-button">
                Submit
              </button>

              {submitted ? (
                <p aria-live="polite" className="rounded-[18px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Message recorded. This demo form is ready to connect to your preferred backend or email workflow.
                </p>
              ) : null}
            </form>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ContactPage;
