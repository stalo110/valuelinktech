import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceAccordion from '../components/ServiceAccordion';
import { serviceCategories } from '../data/site';

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Integrated infrastructure, cybersecurity, managed support, cloud, software, procurement, and advisory services delivered with clarity and technical discipline."
        image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"
      />

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white p-8 shadow-card sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Service Focus"
              title="Is it Managed IT Services you're looking for?"
              description="We empower our clients to scale, evolve, and succeed in a dynamic digital world."
            />
            <Link
              to="/contact"
              className="inline-flex w-fit rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-steel"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 pb-14 pt-4 sm:pt-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <ServiceAccordion categories={serviceCategories} />
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ServicesPage;
