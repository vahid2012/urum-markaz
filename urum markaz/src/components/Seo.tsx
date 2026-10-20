import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  path?: string;
  jsonLd?: object | object[];
  type?: string;
}

export default function Seo({ title, description, keywords, image, path, jsonLd, type = 'website' }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    const ogImage = image || 'https://images.pexels.com/photos/9477542/pexels-photo-9477542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:image', ogImage, 'property');
    if (path) setMeta('og:url', `https://urummarkaz.ir${path}`, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    if (path) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://urummarkaz.ir${path}`;
    }

    const existing = document.getElementById('dynamic-jsonld');
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'dynamic-jsonld';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById('dynamic-jsonld');
      if (el) el.remove();
    };
  }, [title, description, keywords, image, path, jsonLd, type]);

  return null;
}
