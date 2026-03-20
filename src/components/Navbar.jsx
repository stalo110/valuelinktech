import { ArrowRight, Menu, PhoneCall, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { contactInfo, navLinks } from '../data/site';
import Logo from './Logo';

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);

    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const navClassName = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${isActive ? 'text-ember' : 'text-stone-700 hover:text-oak'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--surface-border)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-[24px] bg-[#fff7ef] px-3 py-2 shadow-[0_18px_40px_-32px_rgba(21,16,15,0.55)] ring-1 ring-[color:var(--surface-border)]"
            onClick={() => setOpen(false)}
          >
            <Logo compact showTagline={false} />
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${contactInfo.phone}`} className="secondary-button px-5">
              <PhoneCall className="h-4 w-4" />
              Call Us
            </a>
            <NavLink
              to="/contact"
              className="primary-button"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          <button
            type="button"
            className="rounded-full border border-[color:var(--surface-border)] bg-white p-3 text-stone-700 shadow-card lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[color:var(--surface-border)] pb-5 lg:hidden">
            <nav className="flex flex-col gap-4 pt-5 text-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navClassName}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <a href={`tel:${contactInfo.phone}`} className="secondary-button mt-2 w-fit">
                <PhoneCall className="h-4 w-4" />
                Call Us
              </a>
              <NavLink
                to="/contact"
                className="primary-button mt-2 w-fit"
                onClick={() => setOpen(false)}
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
