import { useEffect } from 'react';
import { siteMetadata } from '../data/site';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function Seo({ title, description, path = '/', image = siteMetadata.defaultImage, schema = [] }) {
  const schemaKey = JSON.stringify(schema);

  useEffect(() => {
    const absoluteUrl = `${siteMetadata.siteUrl}${path}`;
    const fullTitle = title ? `${title} | ${siteMetadata.name}` : `${siteMetadata.name} | ${siteMetadata.tagline}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: 'description', content: description || siteMetadata.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description || siteMetadata.description,
    });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: absoluteUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description || siteMetadata.description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', absoluteUrl);

    let structuredData = document.head.querySelector('script[data-seo-schema="true"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      structuredData.setAttribute('data-seo-schema', 'true');
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schema,
    });
  }, [description, image, path, schemaKey, title]);

  return null;
}

export default Seo;
