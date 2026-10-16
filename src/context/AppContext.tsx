import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Language } from '../types';
import { STRINGS, type UIStrings } from '../i18n';
import { whatsappLink } from '../site';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: UIStrings;
  /** Build a wa.me link with a pre-filled message in the current language. */
  wa: (message?: string) => string;
  isChatOpen: boolean;
  setChatOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
const LANG_KEY = 'sc_lang';

/**
 * English is rendered first so the prerendered pages are indexed in English.
 * Tamil names are always shown next to service names, and a visitor's choice
 * of Tamil is remembered on their device.
 */
export const AppProvider: React.FC<{ children: React.ReactNode; initialLang?: Language }> = ({
  children,
  initialLang = 'en',
}) => {
  const [lang, setLangState] = useState<Language>(initialLang);
  const [isChatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'ta' || saved === 'en') setLangState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
  }, [lang]);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo<AppContextType>(
    () => ({
      lang,
      setLang,
      t: STRINGS[lang],
      wa: (message?: string) =>
        whatsappLink(
          message ??
            (lang === 'ta'
              ? 'வணக்கம் Success Computech, எனக்கு ஒரு சேவை பற்றி உதவி தேவை.'
              : 'Hello Success Computech, I need some help.')
        ),
      isChatOpen,
      setChatOpen,
    }),
    [lang, setLang, isChatOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within an AppProvider');
  return ctx;
};
