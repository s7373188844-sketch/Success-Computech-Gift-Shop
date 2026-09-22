import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, MessageCircle, Phone, Copy, Check, Clock, ShieldCheck, MapPin, Navigation, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppQRModal: React.FC = () => {
  const { isQrModalOpen, setIsQrModalOpen, lang, openWhatsApp } = useApp();
  const [activeTab, setActiveTab] = useState<'map' | 'whatsapp'>('map');
  const [copied, setCopied] = useState(false);

  if (!isQrModalOpen) return null;

  const GOOGLE_MAP_URL = 'https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7';
  const phoneDisplay = '+91 73731 88844';

  const mapQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(GOOGLE_MAP_URL)}`;

  const whatsappQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=https%3A%2F%2Fwa.me%2F917373188844%3Ftext%3D${encodeURIComponent(
    lang === 'ta'
      ? 'வணக்கம் Success Computech! எனக்கு டிஜிட்டல் சேவை / கிஃப்ட் உதவி தேவை.'
      : 'Hello Success Computech & Gift Shop! I need digital services / gift printing assistance.'
  )}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917373188844');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyMapUrl = () => {
    navigator.clipboard.writeText(GOOGLE_MAP_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-red-600"
        >
          {/* Header - Red & White */}
          <div className="flex items-center justify-between px-6 py-4 bg-red-600 text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-black tracking-tight">
                  {lang === 'ta' ? 'QR கோடு & நேரடி வழித்தடம்' : 'Scan QR & Google Maps'}
                </h3>
                <p className="text-xs text-red-100 font-bold">SUCCESS COMPUTECH & GIFT SHOP</p>
              </div>
            </div>
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="p-1.5 text-white/90 hover:text-white rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Toggle Tabs: Google Maps QR vs WhatsApp QR */}
          <div className="p-4 pb-0 bg-slate-50 border-b border-slate-200">
            <div className="grid grid-cols-2 gap-2 bg-slate-200/80 p-1 rounded-2xl">
              <button
                onClick={() => setActiveTab('map')}
                className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'map'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-red-600 hover:bg-white/60'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{lang === 'ta' ? 'Google Map QR' : 'Google Maps QR'}</span>
              </button>
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'whatsapp'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-white/60'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ta' ? 'WhatsApp QR' : 'WhatsApp QR'}</span>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 text-center">
            {activeTab === 'map' ? (
              <div>
                {/* Google Map QR Notice */}
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl text-left flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-red-950">
                      {lang === 'ta' ? 'கூகுள் மேப் வழித்தடத்திற்கு ஸ்கேன் செய்க' : 'Scan to open Google Maps navigation directly'}
                    </h4>
                    <p className="text-[11px] font-semibold text-red-800 mt-0.5">
                      https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7
                    </p>
                  </div>
                </div>

                {/* QR Code Container */}
                <div className="inline-block p-3 bg-white rounded-2xl border-2 border-red-500 shadow-md">
                  <img
                    src={mapQrUrl}
                    alt="Google Maps QR Code for Success Computech"
                    className="w-44 h-44 mx-auto object-contain rounded-lg"
                    loading="eager"
                  />
                  <p className="mt-2 text-[11px] font-bold text-slate-600">
                    {lang === 'ta' ? 'மொபைல் கேமரா மூலம் ஸ்கேன் செய்க' : 'Scan with your Mobile Camera'}
                  </p>
                </div>

                {/* Timing Badge */}
                <div className="mt-4 p-2.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-red-700 font-black">
                    <Clock className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Mon - Sat: 9:30 AM – 9:00 PM</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">
                    {lang === 'ta' ? 'ஞாயிற்றுக்கிழமை: காலை 9:00 முதல் மதியம் 2:00 வரை' : 'Sunday: 9:00 AM to 2:00 PM'}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={GOOGLE_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-all shadow-md active:scale-95 text-center"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>{lang === 'ta' ? 'மேப்பில் திறக்க' : 'Open in Maps'}</span>
                  </a>
                  <button
                    onClick={handleCopyMapUrl}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-black text-xs transition-all shadow-2xs active:scale-95 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? (lang === 'ta' ? 'காப்பி ஆனது' : 'Copied!') : (lang === 'ta' ? 'லிங்க் காப்பி' : 'Copy Link')}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Remote Notice */}
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-left flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold text-emerald-950 leading-relaxed">
                    {lang === 'ta'
                      ? 'கடைக்கு வர வேண்டிய அவசியமில்லை! ஆவணங்களை வாட்ஸ்அப்பில் அனுப்பி வேலையை எளிதாக முடிக்கலாம்.'
                      : 'No need to visit the office! Send document photos on WhatsApp and get services completed remotely.'}
                  </p>
                </div>

                {/* QR Code Container */}
                <div className="inline-block p-3 bg-white rounded-2xl border-2 border-emerald-500 shadow-md">
                  <img
                    src={whatsappQrUrl}
                    alt="WhatsApp QR Code for +91 73731 88844"
                    className="w-44 h-44 mx-auto object-contain rounded-lg"
                    loading="eager"
                  />
                  <p className="mt-2 text-[11px] font-bold text-slate-600">
                    {lang === 'ta' ? 'வாட்ஸ்அப் ஆப் மூலம் ஸ்கேன் செய்க' : 'Scan to Chat on WhatsApp'}
                  </p>
                </div>

                {/* Contact details */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="font-mono text-base font-black text-slate-900">{phoneDisplay}</span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-slate-600 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                    title="Copy phone number"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => openWhatsApp()}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                  <a
                    href="tel:+917373188844"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs transition-all shadow-md active:scale-95 text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{lang === 'ta' ? 'அழைக்க' : 'Call'}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
