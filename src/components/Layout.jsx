import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import ContactStrip from './ContactStrip';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import TopBar from './TopBar';

function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollToTop />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_right,rgba(255,183,77,0.18),transparent_22%),radial-gradient(circle_at_top_left,rgba(0,188,212,0.24),transparent_30%)]" />
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
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <ContactStrip />
      <Footer />
    </div>
  );
}

export default Layout;
