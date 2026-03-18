import { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import ContactStrip from './ContactStrip';
import Footer from './Footer';
import Navbar from './Navbar';
import PageLoader from './PageLoader';
import ScrollToTop from './ScrollToTop';
import TopBar from './TopBar';

function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollToTop />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,183,77,0.18),transparent_18%),radial-gradient(circle_at_18%_12%,rgba(0,188,212,0.2),transparent_24%),radial-gradient(circle_at_80%_42%,rgba(30,58,95,0.16),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,183,77,0.08),transparent_14%),radial-gradient(circle_at_15%_10%,rgba(0,188,212,0.14),transparent_22%),radial-gradient(circle_at_80%_42%,rgba(30,58,95,0.24),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[linear-gradient(180deg,rgba(255,255,255,0.52),transparent)] dark:bg-[linear-gradient(180deg,rgba(6,17,29,0.72),transparent)]" />
      <TopBar />
      <Navbar />
      <AnimatePresence mode="wait">
        {/* Key the page container by pathname so route transitions run on every navigation. */}
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
