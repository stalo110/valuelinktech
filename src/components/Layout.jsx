import { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import ContactStrip from './ContactStrip';
import Footer from './Footer';
import Navbar from './Navbar';
import PageLoader from './PageLoader';
import ScrollToTop from './ScrollToTop';

function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollToTop />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(141,36,24,0.1),transparent_22%),radial-gradient(circle_at_top_right,rgba(215,194,176,0.32),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#f7f1e8_100%)]" />
        <div className="grid-overlay absolute inset-0 opacity-55" />
      </div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <ContactStrip />
      <Footer />
    </div>
  );
}

export default Layout;
