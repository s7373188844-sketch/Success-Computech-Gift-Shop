export type Language = 'ta' | 'en';

export interface ServiceItem {
  id: string;
  categoryId: string;
  name_en: string;
  name_ta: string;
  tag_en: string;
  tag_ta: string;
  shortDesc_en: string;
  shortDesc_ta: string;
  subServices_en: string[];
  subServices_ta: string[];
  requiredDocuments_en: string[];
  requiredDocuments_ta: string[];
  processingTime_en: string;
  processingTime_ta: string;
  popular?: boolean;
  steps_en?: string[];
  steps_ta?: string[];
  faqs?: { q_en: string; q_ta: string; a_en: string; a_ta: string }[];
}

export interface ServiceCategory {
  id: string;
  iconName: string;
  title_en: string;
  title_ta: string;
  description_en: string;
  description_ta: string;
  badge?: string;
  services: ServiceItem[];
}

export type GiftArtKind = 'frame' | 'plaque' | 'mug' | 'acrylic' | 'apparel' | 'corporate';

export interface GiftCategory {
  id: string;
  art: GiftArtKind;
  name_en: string;
  name_ta: string;
  shortDesc_en: string;
  shortDesc_ta: string;
  items_en: string[];
  items_ta: string[];
  occasions: ('birthday' | 'anniversary' | 'wedding' | 'corporate' | 'festival' | 'housewarming')[];
  /** From the previous website; owner to confirm. */
  readyIn_en?: string;
  readyIn_ta?: string;
  /** Put real photos in /public/images/gifts/ and list them here, e.g. '/images/gifts/frames-1.webp' */
  photos: { src: string; alt_en: string; alt_ta: string }[];
}

export interface ShowcaseVideo {
  id: string;
  title_en: string;
  title_ta: string;
  /** e.g. '/videos/laser-engraving.mp4'. Leave empty until the clip is filmed. */
  mp4?: string;
  webm?: string;
  poster?: string;
}
