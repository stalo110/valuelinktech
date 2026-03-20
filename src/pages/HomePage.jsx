import { ArrowRight, CircleCheckBig, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import SmartImage from '../components/SmartImage';
import { companyCopy, contactInfo, coreOffers, serviceHighlights, siteMetadata, socialLinks } from '../data/site';

const deliverySteps = [
  {
    title: 'Assess and align',
    description:
      'We evaluate your current environment, identify friction points, and map the right mix of infrastructure, software, and support.',
  },
  {
    title: 'Implement with clarity',
    description:
      'Procurement, deployment, integration, and security workstreams stay coordinated so execution remains business-first.',
  },
  {
    title: 'Support and optimize',
    description:
      'Managed services, monitoring, user enablement, and lifecycle support keep the investment useful after launch.',
  },
];

const focusAreas = [
  'Infrastructure and network modernization',
  'Cybersecurity, governance, and risk support',
  'Managed services with measurable accountability',
  'Software delivery and business process enablement',
];

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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[44px] border border-[color:var(--surface-border)] bg-white px-6 py-10 shadow-soft sm:px-10 lg:px-14 lg:py-14">
          <div className="grid-overlay absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -left-12 top-0 h-56 w-56 rounded-full bg-ember/12 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-sand/30 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[color:var(--surface-border-strong)] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-ember backdrop-blur-sm">
                Support That Delivers
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 font-display text-balance text-[clamp(2.4rem,5.4vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-ink"
              >
                End-to-end IT support for
                <span className="relative mt-2 block text-ember">
                  resilient operations
                  <span className="absolute inset-x-0 bottom-2 -z-10 h-3 rounded-full bg-ember/12" />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted-text)] sm:text-lg"
              >
                We assess, supply, implement, secure, and support the systems that keep your business moving with less friction and more confidence.
              </motion.p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="primary-button">
                  Request a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="secondary-button">
                  Explore services
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[430px] sm:min-h-[560px]">
              <motion.div
                className="absolute right-5 top-0 hidden h-64 w-64 rounded-[42px] bg-[#f8ede4] sm:block"
                animate={{ y: [0, -18, 0], rotate: [10, 7, 10] }}
                transition={{ duration: 7.6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute left-0 top-20 h-[76%] w-[78%] rounded-[42px] bg-[#f6e8dc]"
                animate={{ y: [0, -14, 0], rotate: [-8, -6, -8] }}
                transition={{ duration: 8.3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="absolute right-0 top-8 z-10 w-full max-w-[540px] overflow-hidden rounded-[36px] border border-[color:var(--surface-border)] bg-white p-4 shadow-soft">
                <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,rgba(141,36,24,0.08),rgba(215,194,176,0.35))] p-3">
                  <SmartImage
                    src="https://images.pexels.com/photos/34221317/pexels-photo-34221317.png?cs=srgb&dl=pexels-luis-sevilla-252657-34221317.jpg&fm=jpg"
                    alt="Modern team collaboration in a premium workspace"
                    priority
                    containerClassName="h-full w-full rounded-[24px]"
                    className="h-[360px] w-full rounded-[24px] object-cover sm:h-[430px]"
                  />

                  <motion.div
                    aria-hidden="true"
                    className="absolute left-5 top-5 w-[170px] rounded-[22px] border border-[color:var(--surface-border)] bg-white/95 p-4 shadow-card backdrop-blur-sm"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-ember/30" />
                      <span className="h-2.5 w-2.5 rounded-full bg-sand/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-2 rounded-full bg-stone-100" />
                      <div className="flex items-end gap-2">
                        <span className="h-8 w-3 rounded-full bg-ember/20" />
                        <span className="h-12 w-3 rounded-full bg-ember/35" />
                        <span className="h-6 w-3 rounded-full bg-sand/80" />
                        <span className="h-10 w-3 rounded-full bg-ember/55" />
                        <span className="h-14 w-3 rounded-full bg-ink/80" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    aria-hidden="true"
                    className="absolute bottom-5 left-5 h-[92px] w-[150px] rounded-[24px] border border-white/10 bg-ink/96 p-4 shadow-soft"
                    animate={{ y: [0, -9, 0] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/55" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      <span className="h-8 rounded-full bg-white/10" />
                      <span className="h-12 rounded-full bg-ember/70" />
                      <span className="h-6 rounded-full bg-white/10" />
                      <span className="h-10 rounded-full bg-white/20" />
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                aria-hidden="true"
                className="absolute bottom-3 right-4 z-20 flex h-[128px] w-[128px] items-center justify-center rounded-full border border-[color:var(--surface-border)] bg-white shadow-card"
                animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 5.9, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              >
                <div className="relative h-[82px] w-[82px] rounded-full border-[12px] border-sand/55 border-r-transparent border-t-ember/85">
                  <span className="absolute inset-[20px] rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(58,33,29,0.08)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Delivery Model"
            title="A service experience designed to feel coordinated from day one"
            description="The reference website relies on clean structure, floating emphasis cards, and restrained reveals. The Valuelink homepage now uses that same rhythm to present a business-first delivery process."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {deliverySteps.map((step, index) => (
              <AnimatedSection key={step.title} as="div" delay={index * 0.06} amount={0.1}>
                <div className="surface-panel h-full p-6 sm:p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ember/10 font-display text-lg font-semibold text-ember">
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-stone-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted-text)]">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-ink px-6 py-10 text-white shadow-soft sm:px-10 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,36,24,0.34),transparent_22%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:auto,72px_72px,72px_72px]" />
          <div className="pointer-events-none absolute -left-12 top-20 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
            <div className="flex items-center gap-5">
              <div className="overflow-hidden rounded-full border-4 border-white/10">
                <SmartImage
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Valuelink team representative"
                  containerClassName="h-24 w-24"
                  className="h-24 w-24 object-cover"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">Valuelink model</p>
                <p className="mt-1 text-sm text-white/58">Support that delivers</p>
              </div>
            </div>

            <div>
              <p className="font-display text-[clamp(2.1rem,4.8vw,4.6rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-white">
                We keep procurement, deployment, security, and support moving in one clear direction.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
                That is how we reduce handoff gaps, protect the value of technology investments, and keep clients supported after rollout instead of disappearing at go-live.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {coreOffers.slice(0, 3).map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/76">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="section-shell">
            <SectionHeading eyebrow="Our Vision" title="Technology partnership built for measurable transformation" />
            <p className="mt-6 text-base leading-8 text-[color:var(--muted-text)]">{companyCopy.vision}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coreOffers.slice(0, 4).map((item) => (
                <div key={item} className="rounded-[24px] border border-[color:var(--surface-border)] bg-[#fffcf8] px-4 py-4 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel bg-[linear-gradient(150deg,rgba(141,36,24,0.08),rgba(243,236,228,0.75))] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Why Valuelink"
              title="Business needs stay at the center of every technical decision"
              description={companyCopy.promise}
            />
            <div className="mt-8 space-y-4">
              {focusAreas.map((item, index) => (
                <AnimatedSection
                  key={item}
                  as="div"
                  delay={index * 0.04}
                  amount={0.1}
                  className="flex gap-3 rounded-[22px] border border-[color:var(--surface-border)] bg-white/78 p-4"
                >
                  <CircleCheckBig className="mt-1 h-5 w-5 shrink-0 text-ember" />
                  <span className="text-sm leading-7 text-stone-700">{item}</span>
                </AnimatedSection>
              ))}
            </div>
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

      <AnimatedSection className="px-4 pb-14 pt-8 sm:pt-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[38px] border border-[color:var(--surface-border)] bg-white px-6 py-8 shadow-card sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-[color:var(--surface-border)] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
              Support That Delivers
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-4xl">
              Ready to plan your next infrastructure, software, or support rollout?
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--muted-text)]">
              Speak with Valuelink about the right combination of procurement, implementation, managed services, and advisory support for your business.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="primary-button">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="secondary-button">
              Learn about Valuelink
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;
