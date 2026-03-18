import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, socialLinks } from '../data/site';

const socialIcons = {
  LinkedIn: Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-[linear-gradient(180deg,#071321_0%,#0a1929_100%)] text-white dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-lg font-semibold tracking-[0.22em] text-white">
              :::VT::::
            </span>
            <div>
              <p className="text-lg font-semibold">Valuelink Technologies</p>
              <p className="text-sm text-slate-300">Support That Delivers</p>
            </div>
          </Link>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Modern IT infrastructure, software, support, and advisory services designed to help businesses scale with confidence.
          </p>
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
                  className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-200 transition hover:border-teal hover:text-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Reach Us</h3>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 text-teal" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 text-teal" />
              <span>
                {contactInfo.phone} | {contactInfo.altPhone}
              </span>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 text-teal" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Business Hours</h3>
          <p className="text-sm text-slate-300">{contactInfo.hours}</p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
            Your partner for assessments, implementation, licensing optimization, and long-term technology support.
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>ValueLinkTech (c) 2025 All Rights Reserved.</p>
          <p>Support That Delivers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
