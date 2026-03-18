import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import SmartImage from '../components/SmartImage';
import { companyCopy, coreOffers, siteMetadata } from '../data/site';

function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn how Valuelink Technologies combines infrastructure, software, procurement, and long-term IT support into one delivery partner."
        path="/about"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        schema={[
          {
            '@type': 'AboutPage',
            name: `About ${siteMetadata.name}`,
            url: `${siteMetadata.siteUrl}/about`,
            description:
              'Overview of Valuelink Technologies, including mission, vision, and end-to-end technology delivery capabilities.',
          },
        ]}
      />

      <PageHero
        title="About Us"
        description="Valuelink Technologies brings together infrastructure, software, procurement, and support services into one dependable technology partnership."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
      />

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="section-shell">
            <SectionHeading eyebrow="Our Vision" title="A globally recognized technology partner" />
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">{companyCopy.vision}</p>
          </div>

          <div className="surface-panel overflow-hidden">
            <SmartImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating in a modern office"
              containerClassName="h-full min-h-[320px] w-full"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(135deg,#0a1929_0%,#1e3a5f_100%)] p-8 text-white shadow-soft dark:border-white/10 sm:p-10">
            <SectionHeading
              eyebrow="Mission & Promise"
              title="Support that is strategic, efficient, and built for scale"
              light
            />
            <p className="mt-6 text-base leading-8 text-slate-200">{companyCopy.mission}</p>
            <p className="mt-5 text-base leading-8 text-slate-200">{companyCopy.promise}</p>
          </div>

          <div className="section-shell">
            <SectionHeading
              eyebrow="What We Offer"
              title="Practical services that cover the full technology lifecycle"
            />
            <div className="mt-6 space-y-4">
              {coreOffers.map((item, index) => (
                <AnimatedSection key={item} as="div" delay={index * 0.04} amount={0.1} className="flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.04]">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <span className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 pb-14 pt-8 sm:pt-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-slate-200/80 bg-white shadow-card dark:border-white/10 dark:bg-white/[0.04] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px]">
            <SmartImage
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Creative team strategy session"
              containerClassName="h-full w-full"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,41,0.15),rgba(10,25,41,0.55))]" />
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Creative Solutions"
              title="Always solving business needs with clarity and purpose"
              description={companyCopy.additional}
            />
            <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
              Valuelink Technologies blends disciplined implementation with creative thinking, helping organizations move from fragmented systems to resilient digital operations.
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default AboutPage;
