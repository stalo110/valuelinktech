import { ArrowRight, BadgeCheck, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { companyCopy, heroStats, serviceHighlights } from '../data/site';

function HomePage() {
  return (
    <>
      <section className="px-4 pb-10 pt-6 sm:pb-14">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[40px] border border-slate-200/60 bg-[linear-gradient(135deg,#0a1929_0%,#0d2439_32%,#1e3a5f_68%,#245f79_100%)] px-6 py-12 text-white shadow-soft sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-16">
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
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-[#ffc980]"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Get in Touch
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
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
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Modern server room"
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
        <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white p-8 shadow-card sm:p-10 lg:p-12">
          <SectionHeading eyebrow="Our Vision" title="Technology partnership built for measurable transformation" />
          <p className="mt-6 max-w-5xl text-base leading-8 text-slate-600">{companyCopy.vision}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-card sm:p-10">
            <SectionHeading eyebrow="Our Mission" title="Connecting businesses with the right technology" />
            <p className="mt-6 text-base leading-8 text-slate-600">{companyCopy.mission}</p>
          </div>

          <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(145deg,rgba(0,188,212,0.08),rgba(255,183,77,0.18))] p-8 shadow-card sm:p-10">
            <SectionHeading eyebrow="Our Promise" title="Partnerships grounded in trust, performance, and results" />
            <p className="mt-6 text-base leading-8 text-slate-700">{companyCopy.promise}</p>
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
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;
