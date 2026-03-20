import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, socialLinks } from '../data/site';
import Logo from './Logo';

const socialIcons = {
  LinkedIn: Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,36,24,0.34),transparent_22%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:auto,72px_72px,72px_72px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center gap-3">
            <Logo showTagline inverted />
          </Link>
          <p className="max-w-md text-sm leading-7 text-stone-300">
            Modern IT infrastructure, software, support, and advisory services designed to help businesses scale with confidence.
          </p>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">
            Support That Delivers
          </div>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label];

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/15 bg-white/5 p-3 text-stone-200 transition hover:border-sand hover:text-sand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-300">Reach Us</h3>
          <div className="space-y-4 text-sm text-stone-300">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 text-sand" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 text-sand" />
              <span>
                {contactInfo.phone} | {contactInfo.altPhone}
              </span>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 text-sand" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-300">Business Hours</h3>
          <p className="text-sm text-stone-300">{contactInfo.hours}</p>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-stone-300">
            Your partner for assessments, implementation, licensing optimization, and long-term technology support.
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>ValueLinkTech (c) 2025 All Rights Reserved.</p>
          <p>Support That Delivers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
