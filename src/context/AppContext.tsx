import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, ThemePalette, ServiceItem } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  theme: ThemePalette;
  setTheme: (t: ThemePalette) => void;
  t: typeof TRANSLATIONS.en;
  selectedService: ServiceItem | null;
  setSelectedService: (s: ServiceItem | null) => void;
  isQrModalOpen: boolean;
  setIsQrModalOpen: (o: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  openWhatsApp: (customMessage?: string) => void;
  themeConfig: {
    navbarBg: string;
    heroGradient: string;
    primaryBtn: string;
    primaryBtnHover: string;
    accentText: string;
    accentBg: string;
    badgeBg: string;
    badgeText: string;
    tagBg: string;
    footerBg: string;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ta'); // Tamil first for local Tiruppur citizens
  const [theme] = useState<ThemePalette>('navy-orange');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Load preferred language from local storage
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('sc_lang') as Language;
      if (savedLang === 'ta' || savedLang === 'en') setLang(savedLang);
    } catch {
      // ignore
    }
  }, []);

  const handleSetLang = (l: Language) => {
    setLang(l);
    try {
      localStorage.setItem('sc_lang', l);
    } catch {
      // ignore
    }
  };

  const openWhatsApp = (customMessage?: string) => {
    const defaultMsg = lang === 'ta'
      ? 'வணக்கம் Success Computech! எனக்கு உங்கள் டிஜிட்டல் சேவை பற்றிய தகவல் மற்றும் உதவி தேவை.'
      : 'Hello Success Computech! I need assistance regarding your digital services.';
    const text = encodeURIComponent(customMessage || defaultMsg);
    window.open(`https://wa.me/917373188844?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Vibrant Red & White Theme for SUCCESS COMPUTECH & GIFT SHOP
  const themeConfig = {
    navbarBg: 'bg-white/95 border-b-2 border-red-600 text-slate-900',
    heroGradient: 'from-white via-red-50/20 to-white text-slate-950',
    primaryBtn: 'bg-red-600 hover:bg-red-700 text-white font-black border border-red-700 shadow-md shadow-red-950/20',
    primaryBtnHover: 'hover:bg-red-700',
    accentText: 'text-red-600',
    accentBg: 'bg-red-600',
    badgeBg: 'bg-red-50 text-red-950 border-red-300 font-black',
    badgeText: 'text-red-700 font-bold',
    tagBg: 'bg-red-50 text-red-900 border-red-200 font-bold',
    footerBg: 'bg-white text-slate-900 border-t-4 border-red-600'
  };

  const currentT = TRANSLATIONS[lang];

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang: handleSetLang,
        theme,
        setTheme: () => {}, // Theme options disabled as requested
        t: currentT,
        selectedService,
        setSelectedService,
        isQrModalOpen,
        setIsQrModalOpen,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        openWhatsApp,
        themeConfig
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
