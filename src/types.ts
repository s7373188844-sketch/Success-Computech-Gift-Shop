export type Language = 'ta' | 'en';

export type ThemePalette = 'navy-orange' | 'red-white' | 'emerald-gold' | 'royal-blue';

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

export interface LatestUpdate {
  id: string;
  date: string;
  tag_en: string;
  tag_ta: string;
  title_en: string;
  title_ta: string;
  desc_en: string;
  desc_ta: string;
  isNew?: boolean;
  linkServiceId?: string;
}

export interface ApplicationStatus {
  refNumber: string;
  customerName: string;
  mobile: string;
  serviceId: string;
  serviceName_en: string;
  serviceName_ta: string;
  dateApplied: string;
  currentStep: number; // 1 to 4
  statusText_en: string;
  statusText_ta: string;
  updatedDate: string;
  remarks_en: string;
  remarks_ta: string;
  ackNumber?: string;
}
