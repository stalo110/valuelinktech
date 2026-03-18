import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/site';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Switch to a denser, glassy navbar once the user has moved past the hero edge.
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);

    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const navClassName = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-teal' : 'text-slate-700 hover:text-steel'}`;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-[28px] border px-5 transition-all lg:px-7 ${
          scrolled
            ? 'border-white/40 bg-white/80 shadow-soft backdrop-blur-xl'
            : 'border-slate-200/60 bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="rounded-2xl bg-ink px-4 py-3 text-base font-semibold tracking-[0.18em] text-white shadow-card">
              :::VT::::
            </span>
            <div className="hidden sm:block">
              <p className="text-base font-semibold text-slate-900">Valuelink Technologies</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Support That Delivers</p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClassName}>
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-steel"
            >
              Get in Touch
            </NavLink>
          </nav>

          <button
            type="button"
            className="rounded-full border border-slate-200 p-3 text-slate-700 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200/80 pb-5 lg:hidden">
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
              <NavLink
                to="/contact"
                className="mt-2 inline-flex w-fit rounded-full bg-ink px-5 py-3 text-white"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
