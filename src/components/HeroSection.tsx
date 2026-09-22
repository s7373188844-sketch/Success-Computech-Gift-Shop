import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Interactive3DCanvas } from './Interactive3DCanvas';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import {
  Search,
  MessageCircle,
  QrCode,
  Clock,
  ArrowRight,
  Sparkles,
  Smartphone,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectService, onExploreClick }) => {
  const { lang, t, theme, openWhatsApp, setIsQrModalOpen } = useApp();
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<ServiceItem[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Flatten all services for live search
  const allServices: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.services);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchInput(val);
    if (!val.trim()) {
      setSearchResults([]);
      return;
    }

    const query = val.toLowerCase().trim();
    const matches = allServices.filter((s) => {
      const matchEn =
        s.name_en.toLowerCase().includes(query) ||
        s.shortDesc_en.toLowerCase().includes(query) ||
        s.subServices_en.some((sub) => sub.toLowerCase().includes(query));
      const matchTa =
        s.name_ta.toLowerCase().includes(query) ||
        s.shortDesc_ta.toLowerCase().includes(query) ||
        s.subServices_ta.some((sub) => sub.toLowerCase().includes(query));
      return matchEn || matchTa;
    });

    setSearchResults(matches.slice(0, 6));
  };

  const handleQuickPillClick = (keyword: string) => {
    setSearchInput(keyword);
    const matches = allServices.filter((s) =>
      s.name_en.toLowerCase().includes(keyword.toLowerCase()) ||
      s.name_ta.toLowerCase().includes(keyword.toLowerCase()) ||
      s.subServices_en.some((sub) => sub.toLowerCase().includes(keyword.toLowerCase()))
    );
    setSearchResults(matches);
    setIsSearchFocused(true);
  };

  return (
    <div id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-white py-12 md:py-20 border-b border-slate-200">
      {/* 3D Interactive Canvas */}
      <Interactive3DCanvas themeColor="emerald" />

      {/* Decorative subtle radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/25 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
        {/* Address & Contact Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-red-200 text-xs sm:text-sm font-black text-slate-900 mb-6 shadow-xs flex-wrap justify-center"
        >
          <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
            Since 2020
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-red-700">
            <MapPin className="w-4 h-4 text-red-600 shrink-0" />
            <span>15/12 Opp AK Motors, Pn Road, Tirupur 641602</span>
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <a
            href="tel:+917373188844"
            className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-mono font-black"
          >
            <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Ph: 7373188844</span>
          </a>
          <span className="hidden md:inline text-slate-300">•</span>
          <span className="text-slate-600 hidden md:flex items-center gap-1 font-semibold text-xs">
            <Clock className="w-3.5 h-3.5 text-red-600 inline shrink-0" />
            Mon-Sat: 9:30 AM–9:00 PM | Sun: 9:00 AM–2:00 PM
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950 leading-[1.15]"
        >
          {t.heroTitle}
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-bold tracking-wide"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Prominent Search Services Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto relative text-left"
        >
          <div className="relative flex items-center">
            <div className="absolute left-4 pointer-events-none text-slate-500">
              <Search className="w-6 h-6 text-red-600" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-13 pr-28 sm:pr-32 py-4.5 bg-white text-slate-950 rounded-2xl shadow-lg text-base sm:text-lg font-black placeholder:text-slate-400 focus:outline-hidden focus:ring-4 focus:ring-red-500/20 transition-all border-2 border-slate-300 focus:border-red-600"
            />
            <button
              onClick={() => {
                if (searchResults.length > 0) {
                  onSelectService(searchResults[0]);
                } else if (searchInput) {
                  openWhatsApp(`வணக்கம், எனக்கு இந்த சேவை தேவை: ${searchInput}`);
                }
              }}
              className="absolute right-2.5 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-black shadow-md transition-all cursor-pointer active:scale-95"
            >
              {t.searchBtn}
            </button>
          </div>

          {/* Live Search Results Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden z-50 animate-fadeIn">
              <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-black text-slate-800 uppercase tracking-wider">
                <span>{lang === 'ta' ? 'கிடைத்த சேவைகள்' : 'Matching Services'}</span>
                <span className="text-red-600 font-bold">{searchResults.length} {lang === 'ta' ? 'முடிவுகள்' : 'results'}</span>
              </div>
              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {searchResults.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      onSelectService(srv);
                      setIsSearchFocused(false);
                    }}
                    className="p-3.5 hover:bg-red-50/70 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-950 text-base">
                          {lang === 'ta' ? srv.name_ta : srv.name_en}
                        </span>
                        <span className="px-2 py-0.5 text-xs font-black rounded-md bg-red-100 text-red-950 border border-red-200">
                          {lang === 'ta' ? srv.tag_ta : srv.tag_en}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5 line-clamp-1">
                        {lang === 'ta' ? srv.shortDesc_ta : srv.shortDesc_en}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs sm:text-sm font-black text-red-600 flex items-center gap-1">
                      {lang === 'ta' ? 'விவரம்' : 'View'}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Search Tag Pills */}
          <div className="mt-3.5 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs font-black text-slate-600 mr-1 hidden sm:inline uppercase tracking-wider">
              {lang === 'ta' ? 'விரைவு தேடல்:' : 'Quick Search:'}
            </span>
            {['Aadhaar', 'PAN Card', 'Smart Card', 'Passport', 'Driving Licence', 'GST', 'Gifts Printing', 'Patta'].map((pill) => (
              <button
                key={pill}
                onClick={() => handleQuickPillClick(pill)}
                className="px-3 py-1.5 text-xs sm:text-sm font-black rounded-lg bg-white hover:bg-red-50 text-slate-800 border border-slate-300 hover:border-red-500 shadow-2xs transition-colors cursor-pointer"
              >
                {pill}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Hero CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-3.5 flex-wrap"
        >
          <button
            onClick={onExploreClick}
            className="px-7 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-black shadow-md transition-all hover:scale-102 active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <span>{t.exploreServicesBtn}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => openWhatsApp()}
            className="px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-black shadow-md transition-all hover:scale-102 active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t.whatsappBtn}</span>
          </button>

          {/* Direct Google Maps Location Link */}
          <a
            href="https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl bg-white hover:bg-red-50 text-red-700 border-2 border-red-200 text-sm sm:text-base font-black transition-all hover:scale-102 flex items-center gap-2 shadow-2xs"
          >
            <MapPin className="w-5 h-5 text-red-600" />
            <span>{lang === 'ta' ? 'கூகுள் மேப் வழித்தடம்' : 'Google Map Location'}</span>
          </a>

          <button
            onClick={() => setIsQrModalOpen(true)}
            className="px-5 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 text-sm sm:text-base font-bold transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
          >
            <QrCode className="w-5 h-5 text-red-600" />
            <span>{t.scanQrBtn}</span>
          </button>
        </motion.div>

        {/* Hero Bottom 4 Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
        >
          <div className="flex items-center gap-3 text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-xs sm:text-sm font-black">
              {lang === 'ta' ? 'அரசு & ஆன்லைன் சேவைகள்' : 'E-Sevai & Online Services'}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-xs sm:text-sm font-black">
              {lang === 'ta' ? 'பிரத்யேக கிஃப்ட் & பிரிண்டிங்' : 'Custom Gifts & Printing'}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-xs sm:text-sm font-black">
              {lang === 'ta' ? 'சிந்தடிக் PVC கார்டுகள்' : 'Synthetic PVC ID Cards'}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-xs sm:text-sm font-black">
              {lang === 'ta' ? 'வாட்ஸ்அப் உடனடி உதவி' : 'Fast WhatsApp Support'}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
