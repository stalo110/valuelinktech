import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ServiceAccordion from '../components/ServiceAccordion';
import { serviceCategories, siteMetadata } from '../data/site';

function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Explore Valuelink Technologies services across infrastructure, cybersecurity, managed support, software, cloud, procurement, training, and IT advisory."
        path="/services"
        image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"
        schema={[
          {
            '@type': 'CollectionPage',
            name: `${siteMetadata.name} Services`,
            url: `${siteMetadata.siteUrl}/services`,
            description:
              'A service catalog covering infrastructure, cybersecurity, managed IT, software, cloud, consulting, hardware supply, and training.',
          },
        ]}
      />

      <PageHero
        title="Our Services"
        description="Integrated infrastructure, cybersecurity, managed support, cloud, software, procurement, and advisory services delivered with clarity and technical discipline."
        image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"
        highlights={['Infrastructure and cloud', 'Cybersecurity and managed support', 'Advisory and procurement']}
      />

      <AnimatedSection className="px-4 py-8 sm:py-12">
        <div className="section-shell mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Service Focus"
              title="Is it managed IT services you're looking for?"
              description="We empower clients to scale, evolve, and succeed with clearer operations, safer systems, and dependable execution."
            />
            <Link to="/contact" className="primary-button w-fit">
              Talk to our team
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {serviceCategories.slice(0, 3).map((category) => (
              <div key={category.title} className="rounded-[24px] border border-[color:var(--surface-border)] bg-[#fffcf8] p-5">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-stone-950">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-text)]">{category.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 pb-14 pt-4 sm:pt-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection as="div" amount={0.12}>
            <ServiceAccordion categories={serviceCategories} />
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ServicesPage;
