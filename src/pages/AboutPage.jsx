import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import SmartImage from '../components/SmartImage';
import { companyCopy, coreOffers, siteMetadata } from '../data/site';
import HeroImage from "../assets/aboutImage.jpg";

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
        highlights={['One delivery partner', 'Procurement to support', 'Business-first execution']}
      />

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="section-shell">
            <SectionHeading eyebrow="Our Vision" title="A globally recognized technology partner" />
            <p className="mt-6 text-base leading-8 text-[color:var(--muted-text)]">{companyCopy.vision}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coreOffers.slice(0, 4).map((item) => (
                <div key={item} className="rounded-[24px] border border-[color:var(--surface-border)] bg-[#fffcf8] px-4 py-4 text-sm font-medium text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel overflow-hidden">
            <div className="relative p-4">
              <SmartImage
                src={HeroImage}
                alt="Team collaborating in a modern office"
                containerClassName="h-full min-h-[360px] w-full rounded-[30px]"
                className="h-full min-h-[360px] w-full rounded-[30px] object-cover"
              />
              <div className="absolute bottom-0 bg-white max-w-[240px] rounded-[22px] border border-[color:var(--surface-border)] bg-white/94 px-5 py-4 shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ember">Valuelink approach</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted-text)]">
                  We combine disciplined implementation with ongoing support, not one-off handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="overflow-hidden rounded-[36px] bg-ink p-8 text-white shadow-soft sm:p-10">
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
                <AnimatedSection
                  key={item}
                  as="div"
                  delay={index * 0.04}
                  amount={0.1}
                  className="flex gap-3 rounded-[22px] border border-[color:var(--surface-border)] bg-[#fffcf8] p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ember" />
                  <span className="text-sm leading-7 text-stone-700">{item}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 pb-14 pt-8 sm:pt-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] border border-[color:var(--surface-border)] bg-white shadow-card lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px]">
            <SmartImage
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Creative team strategy session"
              containerClassName="h-full w-full"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,16,15,0.04),rgba(21,16,15,0.34))]" />
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Creative Solutions"
              title="Always solving business needs with clarity and purpose"
              description={companyCopy.additional}
            />
            <div className="mt-8 rounded-[28px] border border-[color:var(--surface-border)] bg-[#fbf3eb] p-6 text-sm leading-7 text-[color:var(--muted-text)]">
              Valuelink Technologies blends disciplined implementation with creative thinking, helping organizations move from fragmented systems to resilient digital operations.
            </div>
            <Link to="/contact" className="primary-button mt-8">
              Talk to our team
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default AboutPage;
