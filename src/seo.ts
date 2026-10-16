import { SITE } from './site';
import { matchRoute } from './router';
import { ALL_SERVICES, getCategory, getService } from './lib/services';
import { GIFT_CATEGORIES } from './data/giftsData';
import { GENERAL_FAQS } from './data/faqData';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd: object[];
}

const BRAND = 'Success Computech & Gift Shop, Tiruppur';

export const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneE164,
  image: `${SITE.url}/og-image.png`,
  logo: `${SITE.url}/logo-512.png`,
  description:
    'Private assistance centre in Tiruppur for online applications, documentation and printing, and a customised gift shop for photo frames, laser-engraved plaques, mugs and corporate gifts.',
  foundingDate: String(SITE.since),
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.line1}, Kamaraj Nagar`,
    addressLocality: 'Tiruppur',
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '21:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:30', closes: '14:30' },
  ],
};

function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path === '/' ? '' : it.path}`,
    })),
  };
}

function faqPage(faqs: { q_en: string; a_en: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q_en,
      acceptedAnswer: { '@type': 'Answer', text: f.a_en },
    })),
  };
}

export function getPageMeta(path: string): PageMeta {
  const route = matchRoute(path);
  const home = { name: 'Home', path: '/' };
  switch (route.name) {
    case 'home':
      return {
        path: '/',
        title: 'Success Computech & Gift Shop | Online Services & Custom Gifts in Tiruppur',
        description:
          'Help with Aadhaar, PAN, voter ID, passport, PF, GST, certificates and printing, plus custom photo frames, laser-engraved plaques and gifts. P.N. Road, Tiruppur. WhatsApp 73731 88844.',
        jsonLd: [LOCAL_BUSINESS],
      };
    case 'services':
      return {
        path: '/services',
        title: `Online & Documentation Services in Tiruppur | ${SITE.shortName}`,
        description: `${ALL_SERVICES.length} services including Aadhaar, PAN, smart card, voter ID, passport, driving licence, GST, PF, patta and certificates. Private assistance centre on P.N. Road, Tiruppur.`,
        jsonLd: [breadcrumbs([home, { name: 'Digital services', path: '/services' }])],
      };
    case 'service': {
      const s = getService(route.id);
      if (!s) return getPageMeta('/404');
      const cat = getCategory(s.categoryId);
      return {
        path: `/services/${s.id}`,
        title: `${s.name_en} in Tiruppur | ${SITE.shortName}`,
        description: `${s.shortDesc_en} Help at our P.N. Road, Tiruppur shop or on WhatsApp 73731 88844. Private assistance, not a government office.`,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.name_en,
            alternateName: s.name_ta,
            description: s.shortDesc_en,
            serviceType: cat?.title_en,
            areaServed: { '@type': 'City', name: 'Tiruppur' },
            provider: { '@id': `${SITE.url}/#business` },
          },
          breadcrumbs([home, { name: 'Digital services', path: '/services' }, { name: s.name_en, path: `/services/${s.id}` }]),
          ...(s.faqs?.length ? [faqPage(s.faqs)] : []),
        ],
      };
    }
    case 'gifts':
      return {
        path: '/gifts',
        title: 'Make My Gifts | Customised Photo Frames, Engraved Plaques & Mugs in Tiruppur',
        description:
          'Make My Gifts by Success Computech: photo frames, laser-engraved wooden plaques, photo and magic mugs, acrylic and MDF products, printed T-shirts and corporate gifts, made to order in Tiruppur.',
        jsonLd: [breadcrumbs([home, { name: 'Make My Gifts', path: '/gifts' }])],
      };
    case 'gift': {
      const g = GIFT_CATEGORIES.find((x) => x.id === route.id);
      if (!g) return getPageMeta('/404');
      return {
        path: `/gifts/${g.id}`,
        title: `${g.name_en} in Tiruppur | Make My Gifts`,
        description: `${g.shortDesc_en} Order on WhatsApp 73731 88844 or visit us on P.N. Road, Tiruppur.`,
        jsonLd: [breadcrumbs([home, { name: 'Make My Gifts', path: '/gifts' }, { name: g.name_en, path: `/gifts/${g.id}` }])],
      };
    }
    case 'about':
      return {
        path: '/about',
        title: `About Us | ${BRAND}`,
        description:
          'A service centre on P.N. Road, Tiruppur, helping with online applications, printing and documentation, and making customised gifts since 2020.',
        jsonLd: [breadcrumbs([home, { name: 'About', path: '/about' }])],
      };
    case 'faq':
      return {
        path: '/faq',
        title: `Frequently Asked Questions | ${BRAND}`,
        description: 'Answers about shop hours, sending documents on WhatsApp, PVC cards, application status and ordering customised gifts.',
        jsonLd: [faqPage(GENERAL_FAQS), breadcrumbs([home, { name: 'FAQs', path: '/faq' }])],
      };
    case 'contact':
      return {
        path: '/contact',
        title: `Contact & Directions | ${BRAND}`,
        description:
          '15/12, P.N. Road, opposite AK Motors, Kamaraj Nagar, Tiruppur 641602. Open Mon–Sat 9:30 AM–9:00 PM, Sun 9:30 AM–2:30 PM. Call or WhatsApp 73731 88844.',
        jsonLd: [LOCAL_BUSINESS, breadcrumbs([home, { name: 'Contact', path: '/contact' }])],
      };
    case 'privacy':
      return {
        path: '/privacy',
        title: `Privacy Policy | ${BRAND}`,
        description: 'How Success Computech & Gift Shop handles the information you share on this website, in Ask Mitra and on WhatsApp.',
        jsonLd: [],
      };
    default:
      return {
        path: '/404',
        title: `Page not found | ${SITE.shortName}`,
        description: 'This page does not exist.',
        noindex: true,
        jsonLd: [],
      };
  }
}

export function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Head tags for the prerendered HTML. */
export function renderHeadTags(meta: PageMeta): string {
  const url = `${SITE.url}${meta.path === '/' ? '/' : meta.path}`;
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE.url}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...meta.jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`),
  ];
  return tags.join('\n    ');
}

export function allPrerenderPaths(): string[] {
  return [
    '/',
    '/services',
    ...ALL_SERVICES.map((s) => `/services/${s.id}`),
    '/gifts',
    ...GIFT_CATEGORIES.map((g) => `/gifts/${g.id}`),
    '/about',
    '/faq',
    '/contact',
    '/privacy',
  ];
}
