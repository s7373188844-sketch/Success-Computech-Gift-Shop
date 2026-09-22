import React from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { BrandLogo } from './BrandLogo';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUp,
  QrCode,
  Globe,
  FileDown
} from 'lucide-react';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onNavigate }) => {
  const { lang, t, setLang, openWhatsApp, setIsQrModalOpen } = useApp();

  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-900 pt-16 pb-24 md:pb-12 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" textColor="text-slate-950" subColor="text-slate-600" />

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-sm">
              {lang === 'ta'
                ? '2020 முதல் திருப்பூரில் அரசு மற்றும் தனியார் ஆன்லைன் சேவைகள், பிரத்யேக பரிசுகள், சிந்தடிக் PVC கார்டுகள் மற்றும் பிரிண்டிங் தீர்வுகள் ஒரே இடத்தில்.'
                : 'Serving Tiruppur with pride since 2020. Your trusted Digital Services, Documentation & Custom Gift Shop in Tiruppur. Expert guidance for e-Sevai, government portals, printing and customized corporate gifts.'}
            </p>

            <div className="p-3.5 bg-red-50/60 border border-red-200 rounded-xl text-xs space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 text-red-700 font-black">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>15/12 Opp AK Motors, Pn Road, Tirupur 641602.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-black">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Contact: 7373188844</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-bold pt-1 border-t border-red-200/60">
                <Clock className="w-4 h-4 text-red-600 shrink-0" />
                <span>{t.openHoursDetail}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <button
                onClick={() => openWhatsApp()}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: 7373188844</span>
              </button>

              <a
                href="https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>{lang === 'ta' ? 'Google Map வழி' : 'Google Map Location'}</span>
              </a>

              <button
                onClick={() => setIsQrModalOpen(true)}
                className="p-2.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 rounded-xl transition-colors shadow-2xs cursor-pointer"
                title="Scan QR Code"
              >
                <QrCode className="w-4 h-4 text-red-600" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-red-600 uppercase tracking-wider mb-4">
              {lang === 'ta' ? 'முக்கிய பிரிவுகள்' : 'Categories'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-slate-700">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  {t.navServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  {t.navWork}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  {t.navFaq}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-red-600 hover:text-red-700 font-black transition-colors cursor-pointer"
                >
                  {t.navContact} : 7373188844
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Services Col 1 */}
          <div>
            <h4 className="text-xs font-black text-red-600 uppercase tracking-wider mb-4">
              {lang === 'ta' ? 'அரசு சேவைகள்' : 'Government Services'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {['aadhaar', 'pan-card', 'passport-new-renewal', 'smart-card', 'voter-id', 'patta-chitta-ec'].map((id) => {
                const s = allServices.find((item) => item.id === id);
                if (!s) return null;
                return (
                  <li key={id}>
                    <button
                      onClick={() => onSelectService(s)}
                      className="hover:text-red-600 transition-colors text-left"
                    >
                      {lang === 'ta' ? s.name_ta : s.name_en}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Popular Services Col 2 */}
          <div>
            <h4 className="text-xs font-black text-red-600 uppercase tracking-wider mb-4">
              {lang === 'ta' ? 'வணிகம் & பரிசுகள்' : 'Business & Gifts'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {['driving-licence', 'gst-services', 'travel-tickets', 'temple-darshan', 'fssai-licence', 'pf-services'].map((id) => {
                const s = allServices.find((item) => item.id === id);
                if (!s) return null;
                return (
                  <li key={id}>
                    <button
                      onClick={() => onSelectService(s)}
                      className="hover:text-red-600 transition-colors text-left"
                    >
                      {lang === 'ta' ? s.name_ta : s.name_en}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* All Services Keyword Cloud */}
        <div className="py-8 border-b border-slate-200">
          <h5 className="text-xs font-black text-red-600 uppercase tracking-wider mb-3">
            {lang === 'ta' ? 'அனைத்து சேவைகள் & தயாரிப்புகள்:' : 'Complete Services & Gifts Directory Index:'}
          </h5>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
            {[
              'Aadhaar Services', 'Smart Card', 'Voter ID', 'PAN Card', 'Passport Application',
              'Tatkal Passport', 'Driving Licence', 'LLR', 'Personalised Gifts', 'Custom Mug Prints',
              'T-Shirt Printing', 'Keychains & Frames', 'Patta Chitta', 'EC Online', 'Birth Certificate',
              'Death Certificate', 'GST Registration', 'GST Filing', 'FSSAI Food Licence', 'Udyam MSME',
              'Employment Registration', 'PF Advance Claim', 'Life Certificate Jeevan Pramaan',
              'TNPSC Exam Apply', 'Education Loan', 'Train Ticket Booking', 'Flight Tickets',
              'Synthetic PVC ID Card', 'Color Xerox', 'Lamination'
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-red-500 hover:text-red-600 text-slate-700 shadow-2xs transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-600">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2020–2026 SUCCESS COMPUTECH & GIFT SHOP (Since 2020). {lang === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை' : 'All Rights Reserved'}.</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              Tiruppur, Tamil Nadu
            </a>
          </div>

          {/* Language selector in footer */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-red-600" />
              <button
                onClick={() => setLang('ta')}
                className={`px-2 py-0.5 rounded text-xs font-black ${lang === 'ta' ? 'bg-red-600 text-white' : 'text-slate-600'}`}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded text-xs font-black ${lang === 'en' ? 'bg-red-600 text-white' : 'text-slate-600'}`}
              >
                English
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-red-50 border border-slate-200 text-slate-700 hover:text-red-600 transition-colors flex items-center gap-1 text-xs shadow-2xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 leading-relaxed text-center shadow-2xs">
          <p>
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
