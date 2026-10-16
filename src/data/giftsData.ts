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
    shortDesc_en: 'Wooden and acrylic frames, photo collages and LED light frames for the moments you want to keep on the wall.',
    shortDesc_ta: 'சுவரில் வைத்துப் பார்க்க விரும்பும் தருணங்களுக்கு மர & அக்ரிலிக் பிரேம்கள், கொலாஜ், LED லைட் பிரேம்கள்.',
    items_en: ['Wooden photo frames', 'Acrylic photo frames', 'Photo collage frames', 'LED light photo frames'],
    items_ta: ['மர புகைப்பட பிரேம்', 'அக்ரிலிக் புகைப்பட பிரேம்', 'கொலாஜ் பிரேம்', 'LED லைட் பிரேம்'],
    occasions: ['birthday', 'anniversary', 'wedding'],
    readyIn_en: 'Same day to 24 hours',
    readyIn_ta: 'அன்றே அல்லது 24 மணி நேரத்தில்',
    photos: [],
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
    photos: [],
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
    photos: [],
  },
  {
    id: 'acrylic-mdf',
    art: 'acrylic',
    name_en: 'Acrylic and MDF products',
    name_ta: 'அக்ரிலிக் & MDF பொருட்கள்',
    shortDesc_en: 'Cut-out photo stands, desk displays and name boards in acrylic and MDF.',
    shortDesc_ta: 'அக்ரிலிக் மற்றும் MDF-ல் கட்-அவுட் புகைப்பட ஸ்டாண்ட், மேசை டிஸ்ப்ளே, பெயர் பலகைகள்.',
    items_en: ['Acrylic photo cut-outs and desk stands', 'MDF photo stands', 'Name boards'],
    items_ta: ['அக்ரிலிக் கட்-அவுட் & மேசை ஸ்டாண்ட்', 'MDF புகைப்பட ஸ்டாண்ட்', 'பெயர் பலகைகள்'],
    occasions: ['birthday', 'wedding', 'corporate'],
    photos: [],
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
    photos: [],
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
    photos: [],
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
