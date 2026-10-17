import type { GiftCategory, ShowcaseVideo } from '../types';

/**
 * Gift categories shown on the website.
 * Items and ready times come from the previous website and the owner's notes.
 * No prices are listed on purpose: they depend on size, quantity and design.
 */
export const GIFT_CATEGORIES: GiftCategory[] = [
  {
    id: 'photo-frames',
    art: 'frame',
    name_en: 'Photo frames',
    name_ta: 'புகைப்பட பிரேம்கள்',
    shortDesc_en: 'Cut-out table frames in fun shapes, plus wooden, acrylic, collage and LED light frames for the moments you want to keep.',
    shortDesc_ta: 'அழகான வடிவங்களில் கட்-அவுட் டேபிள் பிரேம்கள், மேலும் மர, அக்ரிலிக், கொலாஜ், LED லைட் பிரேம்கள்.',
    items_en: ['Cut-out table frames: LOVE, I ❤ U, heart, apple, cycle, rocket, family tree', 'Wooden photo frames', 'Acrylic photo frames', 'Photo collage frames', 'LED light photo frames'],
    items_ta: ['கட்-அவுட் டேபிள் பிரேம்: LOVE, I ❤ U, இதயம், ஆப்பிள், சைக்கிள், ராக்கெட், குடும்ப மரம்', 'மர புகைப்பட பிரேம்', 'அக்ரிலிக் புகைப்பட பிரேம்', 'கொலாஜ் பிரேம்', 'LED லைட் பிரேம்'],
    occasions: ['birthday', 'anniversary', 'wedding'],
    readyIn_en: 'Same day to 24 hours',
    readyIn_ta: 'அன்றே அல்லது 24 மணி நேரத்தில்',
    photos: [
      { src: '/images/gifts/photo-frames-1.webp', alt_en: 'Apple-shaped MDF table frame with a baby photo', alt_ta: 'குழந்தை புகைப்படத்துடன் ஆப்பிள் வடிவ MDF டேபிள் பிரேம்' },
      { src: '/images/gifts/photo-frames-2.webp', alt_en: 'I-heart-U cut-out table frame with a couple photo', alt_ta: 'ஜோடி புகைப்படத்துடன் I ❤ U கட்-அவுட் டேபிள் பிரேம்' },
      { src: '/images/gifts/photo-frames-3.webp', alt_en: 'LOVE letters table frame with a photo in the heart', alt_ta: 'இதயத்தில் புகைப்படத்துடன் LOVE எழுத்து டேபிள் பிரேம்' },
      { src: '/images/gifts/photo-frames-4.webp', alt_en: 'Proposal silhouette frame with a heart photo', alt_ta: 'இதய புகைப்படத்துடன் காதல் நிழல் உருவ பிரேம்' },
      { src: '/images/gifts/photo-frames-5.webp', alt_en: 'Cycle-shaped frame with two round photos', alt_ta: 'இரண்டு வட்ட புகைப்படங்களுடன் சைக்கிள் வடிவ பிரேம்' },
      { src: '/images/gifts/photo-frames-6.webp', alt_en: 'Family tree frame with hanging photos', alt_ta: 'தொங்கும் புகைப்படங்களுடன் குடும்ப மர பிரேம்' },
    ],
  },
  {
    id: 'laser-engraved-plaques',
    art: 'plaque',
    name_en: 'Laser-engraved plaques',
    name_ta: 'லேசர் பொறிப்பு பலகைகள்',
    shortDesc_en: 'Your photo and message engraved on wood. A keepsake that does not fade like a print.',
    shortDesc_ta: 'உங்கள் புகைப்படமும் வாசகமும் மரத்தில் பொறிக்கப்படும். அச்சைப் போல் மங்காத நினைவுப் பரிசு.',
    items_en: ['Wooden photo plaques', 'Name and message plaques', 'Mementos for events and retirements'],
    items_ta: ['மர புகைப்பட பலகை', 'பெயர் & வாசக பலகை', 'நிகழ்ச்சி மற்றும் பணி ஓய்வு நினைவுப் பரிசு'],
    occasions: ['anniversary', 'wedding', 'corporate'],
    photos: [
      { src: '/images/gifts/plaques-1.webp', alt_en: 'Laser-cut memento with a Tamil letter and engraved name plate', alt_ta: 'தமிழ் எழுத்து மற்றும் பொறிப்பு பெயர் தகடுடன் லேசர் கட் நினைவுப் பரிசு' },
    ],
  },
  {
    id: 'engraved-pens',
    art: 'plaque',
    name_en: 'Laser-engraved name pens',
    name_ta: 'லேசர் பொறிப்பு பெயர் பேனாக்கள்',
    shortDesc_en: 'Bamboo pens with a name or message laser-engraved on each one. Good for staff and event gifts.',
    shortDesc_ta: 'ஒவ்வொரு பேனாவிலும் பெயர் அல்லது வாசகம் லேசர் பொறிப்பு செய்யப்பட்ட மூங்கில் பேனாக்கள். பணியாளர் மற்றும் நிகழ்ச்சி பரிசுகளுக்கு ஏற்றது.',
    items_en: ['Bamboo pens with individual names', 'Pens with a company or event name', 'Bulk orders'],
    items_ta: ['தனித்தனி பெயருடன் மூங்கில் பேனா', 'நிறுவனம் அல்லது நிகழ்ச்சி பெயருடன் பேனா', 'மொத்த ஆர்டர்கள்'],
    occasions: ['corporate', 'festival'],
    photos: [
      { src: '/images/gifts/engraved-pens-1.webp', alt_en: 'Laser-engraved bamboo pens arranged in a circle', alt_ta: 'வட்டமாக அடுக்கிய லேசர் பொறிப்பு மூங்கில் பேனாக்கள்' },
      { src: '/images/gifts/engraved-pens-2.webp', alt_en: 'Batch of engraved bamboo pens on a red background', alt_ta: 'சிவப்பு பின்னணியில் பொறிப்பு செய்த மூங்கில் பேனாக்கள்' },
      { src: '/images/gifts/engraved-pens-3.webp', alt_en: 'Rows of personalised pens after engraving', alt_ta: 'பொறிப்பு முடிந்த பெயர் பேனா வரிசைகள்' },
    ],
  },
  {
    id: 'mugs',
    art: 'mug',
    name_en: 'Photo and magic mugs',
    name_ta: 'புகைப்பட & மேஜிக் மக்',
    shortDesc_en: 'Ceramic mugs printed with your photo. Magic mugs reveal the picture when you pour something hot.',
    shortDesc_ta: 'உங்கள் புகைப்படம் அச்சிடப்பட்ட மக். சூடான பானம் ஊற்றும்போது படம் தெரியும் மேஜிக் மக்.',
    items_en: ['Photo mugs', 'Magic (colour-changing) mugs', 'Mugs for team and office gifts'],
    items_ta: ['புகைப்பட மக்', 'மேஜிக் மக்', 'அலுவலக பரிசுக்கான மக்'],
    occasions: ['birthday', 'anniversary', 'corporate'],
    readyIn_en: '2 to 4 hours',
    readyIn_ta: '2 முதல் 4 மணி நேரம்',
    photos: [
      { src: '/images/gifts/mugs-1.webp', alt_en: 'White mug printed with an evil eye design', alt_ta: 'கண் திருஷ்டி டிசைன் அச்சிட்ட வெள்ளை மக்' },
      { src: '/images/gifts/mugs-2.webp', alt_en: 'Custom printed mug with a Tamil text design', alt_ta: 'தமிழ் வாசக டிசைன் அச்சிட்ட மக்' },
      { src: '/images/gifts/mugs-3.webp', alt_en: 'Batch of printed mugs ready for delivery', alt_ta: 'டெலிவரிக்கு தயாரான அச்சிட்ட மக்குகள்' },
    ],
  },
  {
    id: 'acrylic-mdf',
    art: 'acrylic',
    name_en: 'Acrylic and MDF products',
    name_ta: 'அக்ரிலிக் & MDF பொருட்கள்',
    shortDesc_en: 'Laser-cut MDF key holders and wall decor, MDF boxes, photo stands and name boards.',
    shortDesc_ta: 'லேசர் கட் MDF கீ ஹோல்டர், சுவர் அலங்காரம், MDF பெட்டிகள், புகைப்பட ஸ்டாண்ட், பெயர் பலகைகள்.',
    items_en: ['Laser-cut MDF key holders and wall decor', 'MDF boxes', 'Acrylic photo cut-outs and desk stands', 'MDF photo stands', 'Name boards'],
    items_ta: ['லேசர் கட் MDF கீ ஹோல்டர் & சுவர் அலங்காரம்', 'MDF பெட்டிகள்', 'அக்ரிலிக் கட்-அவுட் & மேசை ஸ்டாண்ட்', 'MDF புகைப்பட ஸ்டாண்ட்', 'பெயர் பலகைகள்'],
    occasions: ['birthday', 'wedding', 'corporate'],
    photos: [
      { src: '/images/gifts/acrylic-mdf-1.webp', alt_en: 'Laser-cut MDF key holder with Ganesha and Om design', alt_ta: 'விநாயகர் & ஓம் டிசைன் லேசர் கட் MDF கீ ஹோல்டர்' },
      { src: '/images/gifts/acrylic-mdf-2.webp', alt_en: 'MDF key holder with printed keychains', alt_ta: 'அச்சிட்ட கீசெயின்களுடன் MDF கீ ஹோல்டர்' },
      { src: '/images/gifts/acrylic-mdf-3.webp', alt_en: 'Wooden-finish MDF boxes with slots', alt_ta: 'ஸ்லாட் கொண்ட மர நிற MDF பெட்டிகள்' },
      { src: '/images/gifts/acrylic-mdf-4.webp', alt_en: 'MDF boxes with black panels', alt_ta: 'கருப்பு பேனல் கொண்ட MDF பெட்டிகள்' },
    ],
  },
  {
    id: 'apparel-accessories',
    art: 'apparel',
    name_en: 'T-shirts, keychains and more',
    name_ta: 'டி-சர்ட், கீசெயின் மற்றும் பல',
    shortDesc_en: 'Printed T-shirts and caps for events and teams, plus photo keychains and photo pillows.',
    shortDesc_ta: 'நிகழ்ச்சிகள், குழுக்களுக்கு அச்சிட்ட டி-சர்ட், தொப்பி, மேலும் புகைப்பட கீசெயின், தலையணைகள்.',
    items_en: ['Printed T-shirts', 'Caps', 'Photo keychains', 'Photo pillows'],
    items_ta: ['அச்சிட்ட டி-சர்ட்', 'தொப்பிகள்', 'புகைப்பட கீசெயின்', 'புகைப்பட தலையணை'],
    occasions: ['birthday', 'festival', 'corporate'],
    readyIn_en: '1 to 2 days',
    readyIn_ta: '1 முதல் 2 நாட்கள்',
    photos: [
      { src: '/images/gifts/keychains-1.webp', alt_en: 'Round printed keychains with a Murugan picture', alt_ta: 'முருகன் படம் அச்சிட்ட வட்ட கீசெயின்கள்' },
      { src: '/images/gifts/keychains-2.webp', alt_en: 'Close-up of a printed keychain', alt_ta: 'அச்சிட்ட கீசெயின் நெருக்கமான தோற்றம்' },
      { src: '/images/gifts/keychains-3.webp', alt_en: 'Single printed keychain', alt_ta: 'ஒரு அச்சிட்ட கீசெயின்' },
    ],
  },
  {
    id: 'corporate-bulk',
    art: 'corporate',
    name_en: 'Corporate and bulk orders',
    name_ta: 'நிறுவன & மொத்த ஆர்டர்கள்',
    shortDesc_en: 'Staff gifts, event mementos and branded items in quantity. Tell us the number and the date.',
    shortDesc_ta: 'பணியாளர் பரிசுகள், நிகழ்ச்சி நினைவுப் பரிசுகள், பிராண்ட் பொருட்கள் மொத்தமாக. எண்ணிக்கையும் தேதியும் சொல்லுங்கள்.',
    items_en: ['Engraved mementos', 'Branded mugs and T-shirts', 'Event and festival gifts'],
    items_ta: ['பொறிப்பு நினைவுப் பரிசு', 'பிராண்ட் மக் & டி-சர்ட்', 'நிகழ்ச்சி & பண்டிகை பரிசுகள்'],
    occasions: ['corporate', 'festival'],
    photos: [
      { src: '/images/gifts/corporate-bulk-1.webp', alt_en: 'Bulk order of printed mugs at the shop', alt_ta: 'கடையில் மொத்த ஆர்டர் அச்சிட்ட மக்குகள்' },
      { src: '/images/gifts/corporate-bulk-2.webp', alt_en: 'Printed mugs being packed for a bulk order', alt_ta: 'மொத்த ஆர்டருக்காக பேக் செய்யப்படும் மக்குகள்' },
      { src: '/images/gifts/corporate-bulk-3.webp', alt_en: 'Rows of laser-engraved name pens for a company order', alt_ta: 'நிறுவன ஆர்டருக்கான லேசர் பொறிப்பு பெயர் பேனாக்கள்' },
    ],
  },
];

export const OCCASION_LABELS = {
  birthday: { en: 'Birthday', ta: 'பிறந்தநாள்' },
  anniversary: { en: 'Anniversary', ta: 'திருமண நாள்' },
  wedding: { en: 'Wedding', ta: 'திருமணம்' },
  corporate: { en: 'Corporate', ta: 'நிறுவனம்' },
  festival: { en: 'Festival', ta: 'பண்டிகை' },
} as const;

/**
 * Short clips for the "See how it's made" section.
 * The section stays hidden until at least one clip has an mp4 file.
 * Shot list is in REDESIGN.md.
 */
export const SHOWCASE_VIDEOS: ShowcaseVideo[] = [
  { id: 'laser-engraving', title_en: 'Laser engraving a photo plaque', title_ta: 'புகைப்பட பலகை லேசர் பொறிப்பு' },
  { id: 'frame-making', title_en: 'From your photo to a finished frame', title_ta: 'உங்கள் புகைப்படம் முதல் பிரேம் வரை' },
  { id: 'mug-printing', title_en: 'Printing a photo mug', title_ta: 'புகைப்பட மக் அச்சிடுதல்' },
  { id: 'whatsapp-documents', title_en: 'Sending documents on WhatsApp', title_ta: 'வாட்ஸ்அப்பில் ஆவணங்களை அனுப்புவது' },
];
