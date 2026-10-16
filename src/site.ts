/**
 * Single source of truth for verified business details.
 * Change a value here and it updates the header, footer, contact page,
 * structured data, WhatsApp links and Ask Mitra greeting everywhere.
 */
export const SITE = {
  name: 'Success Computech & Gift Shop',
  shortName: 'Success Computech',
  nameTa: 'சக்சஸ் கம்ப்யூடெக் & கிஃப்ட் ஷாப்',
  tagline: 'Ideas, Prints, Gifts for a Better Tomorrow',
  since: 2020,
  url: 'https://www.successcomputechgiftshop.in',
  phoneDisplay: '73731 88844',
  phoneE164: '+917373188844',
  whatsappNumber: '917373188844',
  address: {
    line1: '15/12, P.N. Road, Opposite AK Motors',
    line2: 'Kamaraj Nagar, Tiruppur',
    region: 'Tamil Nadu',
    postalCode: '641602',
    country: 'IN',
    lineTa: '15/12, பி.என். ரோடு, ஏ.கே. மோட்டார்ஸ் எதிரில், காமராஜ் நகர், திருப்பூர் 641602',
  },
  mapsUrl: 'https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Success+Computech+15%2F12+PN+Road+Opposite+AK+Motors+Kamaraj+Nagar+Tiruppur+641602&output=embed',
  /** 24h clock, Asia/Kolkata. 0 = Sunday. */
  hours: [
    { days: [1, 2, 3, 4, 5, 6], open: '09:30', close: '21:00' },
    { days: [0], open: '09:30', close: '14:30' },
  ],
} as const;

export const HOURS_TEXT = {
  en: { weekdays: 'Monday to Saturday', weekdaysTime: '9:30 AM – 9:00 PM', sunday: 'Sunday', sundayTime: '9:30 AM – 2:30 PM' },
  ta: { weekdays: 'திங்கள் – சனி', weekdaysTime: 'காலை 9:30 – இரவு 9:00', sunday: 'ஞாயிறு', sundayTime: 'காலை 9:30 – மதியம் 2:30' },
};

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const telLink = `tel:${SITE.phoneE164}`;
