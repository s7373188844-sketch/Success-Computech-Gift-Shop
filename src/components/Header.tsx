import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BrandLogo } from './BrandLogo';
import {
  Menu,
  X,
  Search,
  MessageCircle,
  QrCode,
  Clock,
  MapPin,
  FileDown,
  Phone
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onNavigate }) => {
  const { lang, setLang, t, openWhatsApp, setIsQrModalOpen, themeConfig } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Announcement & Quick Tools Bar - Red & White Theme */}
      <div className="bg-red-600 text-white text-xs border-b border-red-700 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Left info: Address, Office Time & Google Map Link */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-black text-white">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-red-200" />
              <span>15/12 Opp AK Motors, Pn Road, Tirupur 641602</span>
            </div>

            <div className="flex items-center gap-1.5 font-bold text-white">
              <Clock className="w-3.5 h-3.5 shrink-0 text-red-200" />
              <span>
                {lang === 'ta'
                  ? 'திங்கள்-சனி: 9:30 AM – 9:00 PM | ஞாயிறு: 9:00 AM – 2:00 PM'
                  : 'Mon-Sat: 9:30 AM – 9:00 PM | Sun: 9:00 AM – 2:00 PM'}
              </span>
            </div>

            <a
              href="https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:text-red-100 font-bold underline decoration-white/50 transition-colors"
            >
              <span>{lang === 'ta' ? 'Google Map-ல் பார்க்க' : 'View on Google Maps'}</span>
            </a>

            <a
              href="tel:+917373188844"
              className="hidden md:flex items-center gap-1 text-white font-black hover:text-red-100"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>7373188844</span>
            </a>
          </div>

          {/* Right Tools: Map QR & Language Switcher */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-red-700 hover:bg-red-50 text-xs font-black transition-all shadow-2xs cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-red-600" />
              <span>{lang === 'ta' ? 'QR Code' : 'Location QR'}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 backdrop-blur-xs border border-white/20 rounded-lg p-0.5">
              <button
                onClick={() => setLang('ta')}
                className={`px-2.5 py-1 text-xs rounded-md font-black transition-all ${
                  lang === 'ta'
                    ? 'bg-white text-red-700 shadow-xs'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs rounded-md font-black transition-all ${
                  lang === 'en'
                    ? 'bg-white text-red-700 shadow-xs'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`${themeConfig.navbarBg} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 gap-3">
            {/* Brand Logo & Title */}
            <div
              onClick={() => handleNavClick('hero')}
              className="cursor-pointer group select-none"
            >
              <BrandLogo size="md" textColor="text-slate-950" subColor="text-slate-600" />
            </div>

            {/* Desktop Navigation Links - Exact 6 Categories */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-bold">
              <button
                onClick={() => handleNavClick('home')}
                className="px-3.5 py-2 rounded-xl text-sm text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              >
                {t.navHome}
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="px-3.5 py-2 rounded-xl text-sm text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              >
                {t.navServices}
              </button>
              <button
                onClick={() => handleNavClick('work')}
                className="px-3.5 py-2 rounded-xl text-sm text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              >
                {t.navWork}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="px-3.5 py-2 rounded-xl text-sm text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              >
                {t.navAbout}
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="px-3.5 py-2 rounded-xl text-sm text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              >
                {t.navFaq}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-black text-red-600 hover:bg-red-50 transition-colors cursor-pointer border border-red-200"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{t.navContact} : 7373188844</span>
              </button>
            </nav>

            {/* Action Buttons: Google Map, QR & WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Google Map Link Button */}
              <a
                href="https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-black transition-all shadow-2xs"
                title="Open Google Maps"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>{lang === 'ta' ? 'மேப் வழி' : 'Map Link'}</span>
              </a>

              {/* QR Code trigger */}
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-black transition-colors shadow-2xs cursor-pointer"
                title="Scan QR Code"
              >
                <QrCode className="w-4 h-4 text-red-600" />
                <span>QR</span>
              </button>

              {/* Search button */}
              <button
                onClick={onOpenSearch}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors flex items-center gap-2 shadow-2xs"
                title="Search services"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-red-600" />
                <span className="hidden xl:inline text-xs text-slate-700 font-bold">
                  {lang === 'ta' ? 'தேடுக...' : 'Search'}
                </span>
              </button>

              {/* WhatsApp direct button */}
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black shadow-md transition-all hover:scale-102 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span className="hidden sm:inline">{t.whatsappBtn}</span>
                <span className="sm:hidden">WhatsApp</span>
              </button>

              {/* Mobile hamburger menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-6 border-t border-slate-200 bg-white text-slate-900 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-1.5 my-3 font-bold">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm hover:bg-red-50 hover:text-red-700 cursor-pointer"
              >
                <span>{t.navHome}</span>
                <span className="text-xs text-red-600 font-bold">01</span>
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm hover:bg-red-50 hover:text-red-700 cursor-pointer"
              >
                <span>{t.navServices}</span>
                <span className="text-xs text-red-600 font-bold">02</span>
              </button>
              <button
                onClick={() => handleNavClick('work')}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm hover:bg-red-50 hover:text-red-700 cursor-pointer"
              >
                <span>{t.navWork}</span>
                <span className="text-xs text-red-600 font-bold">03</span>
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm hover:bg-red-50 hover:text-red-700 cursor-pointer"
              >
                <span>{t.navAbout}</span>
                <span className="text-xs text-red-600 font-bold">04</span>
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm hover:bg-red-50 hover:text-red-700 cursor-pointer"
              >
                <span>{t.navFaq}</span>
                <span className="text-xs text-red-600 font-bold">05</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm hover:bg-red-50 hover:text-red-700 cursor-pointer border border-red-200 bg-red-50/50"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span className="text-red-700 font-black">{t.navContact} : 7373188844</span>
                </div>
                <span className="text-xs text-red-600 font-bold">06</span>
              </button>
            </nav>

            {/* Quick Actions in Mobile Menu */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <a
                href="https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 text-white text-xs font-black shadow-md"
              >
                <MapPin className="w-4 h-4 text-white" />
                {lang === 'ta' ? 'Google Map-ல் வழித்தடம் பார்க்க' : 'Open in Google Maps'}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQrModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold hover:bg-red-100"
              >
                <QrCode className="w-4 h-4 text-red-600" />
                {lang === 'ta' ? 'QR கோடு ஸ்கேன் செய்ய' : 'Scan Location & WhatsApp QR'}
              </button>
              <a
                href="tel:+917373188844"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-black hover:bg-slate-100"
              >
                <Phone className="w-4 h-4 text-red-600" />
                +91 73731 88844
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
