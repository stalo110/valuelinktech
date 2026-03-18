import { ArrowRight, BadgeCheck, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import SmartImage from '../components/SmartImage';
import { companyCopy, contactInfo, heroStats, serviceHighlights, siteMetadata, socialLinks } from '../data/site';

function HomePage() {
  const schema = [
    {
      '@type': 'Organization',
      name: siteMetadata.name,
      url: siteMetadata.siteUrl,
      email: contactInfo.email,
      telephone: contactInfo.phone,
      slogan: siteMetadata.tagline,
      sameAs: socialLinks.map((link) => link.href),
    },
    {
      '@type': 'WebSite',
      name: siteMetadata.name,
      url: siteMetadata.siteUrl,
      description: siteMetadata.description,
    },
  ];

  return (
    <>
      <Seo
        title="Home"
        description="End-to-end IT solutions, managed services, software delivery, and technology support for businesses that need reliable execution."
        path="/"
        image={siteMetadata.defaultImage}
        schema={schema}
      />

      <section className="px-4 pb-10 pt-6 sm:pb-14">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[40px] border border-slate-200/60 bg-[linear-gradient(135deg,#071321_0%,#0d2439_30%,#1e3a5f_66%,#245f79_100%)] px-6 py-12 text-white shadow-soft sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-16">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
              Support That Delivers
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.6rem]"
            >
              We deliver end-to-end solutions that empower businesses through innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg"
            >
              Your trusted technology partner for infrastructure, software, advisory, procurement, and long-term support.
            </motion.p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="accent-button px-6 py-4">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Get in Touch
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-[24px] p-4"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-teal/20 blur-3xl" />
            <div className="absolute bottom-8 right-0 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
            <div className="grid-overlay absolute inset-0 opacity-30" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <SmartImage
                src="https://images.pexels.com/photos/34221317/pexels-photo-34221317.png?cs=srgb&dl=pexels-luis-sevilla-252657-34221317.jpg&fm=jpg"
                alt="Modern team collaboration in a premium workspace"
                priority
                containerClassName="h-[420px] w-full rounded-[26px]"
                className="h-[420px] w-full rounded-[26px] object-cover"
              />
              <div className="absolute inset-x-10 bottom-10 rounded-[28px] border border-white/10 bg-ink/70 p-6 backdrop-blur-md">
                <div className="flex items-center gap-3 text-gold">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="text-sm font-medium uppercase tracking-[0.22em]">Trusted Technology Delivery</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  From assessment and design to licensing and long-term support, Valuelink Technologies stays with your business through the full delivery cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="section-shell mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Vision" title="Technology partnership built for measurable transformation" />
          <p className="mt-6 max-w-5xl text-base leading-8 text-slate-600 dark:text-slate-300">{companyCopy.vision}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="section-shell">
            <SectionHeading eyebrow="Our Mission" title="Connecting businesses with the right technology" />
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">{companyCopy.mission}</p>
          </div>

          <div className="section-shell bg-[linear-gradient(145deg,rgba(0,188,212,0.08),rgba(255,183,77,0.18))] dark:bg-[linear-gradient(145deg,rgba(0,188,212,0.12),rgba(255,183,77,0.08))]">
            <SectionHeading eyebrow="Our Promise" title="Partnerships grounded in trust, performance, and results" />
            <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-200">{companyCopy.promise}</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Services"
            title="Integrated IT services for modern, resilient businesses"
            description="Explore the capabilities that help clients build stronger infrastructure, safer systems, and smarter digital operations."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((service, index) => (
              <AnimatedSection key={service.title} as="div" delay={index * 0.06} amount={0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;
