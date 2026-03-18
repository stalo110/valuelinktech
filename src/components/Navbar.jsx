import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/site';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

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
    `transition-colors ${isActive ? 'text-teal' : 'text-slate-700 hover:text-steel dark:text-slate-200 dark:hover:text-white'}`;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-[28px] border px-5 transition-all lg:px-7 ${
          scrolled
            ? 'border-slate-300/70 bg-white/90 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]'
            : 'border-slate-300/60 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]'
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo />
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClassName}>
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <NavLink
              to="/contact"
              className="primary-button"
            >
              Get in Touch
            </NavLink>
          </nav>

          <button
            type="button"
            className="rounded-full border border-slate-200 p-3 text-slate-700 dark:border-white/10 dark:text-slate-200 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200/80 pb-5 dark:border-white/10 lg:hidden">
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
              <ThemeToggle />
              <NavLink
                to="/contact"
                className="primary-button mt-2 w-fit"
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
