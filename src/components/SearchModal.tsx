import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Search, X, ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectService }) => {
  const { lang, t, openWhatsApp } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? allServices.filter((s) => {
        const q = query.toLowerCase().trim();
        return (
          s.name_en.toLowerCase().includes(q) ||
          s.name_ta.toLowerCase().includes(q) ||
          s.shortDesc_en.toLowerCase().includes(q) ||
          s.shortDesc_ta.toLowerCase().includes(q) ||
          s.subServices_en.some((sub) => sub.toLowerCase().includes(q)) ||
          s.subServices_ta.some((sub) => sub.toLowerCase().includes(q)) ||
          s.tag_en.toLowerCase().includes(q) ||
          s.tag_ta.toLowerCase().includes(q)
        );
      })
    : allServices.slice(0, 8); // top 8 defaults

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Search Input Box */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === 'ta' ? 'சேவை பெயர் அல்லது குறிச்சொல்லை உள்ளிடுக (Aadhaar, PAN, GST...)' : 'Search any digital service (Aadhaar, PAN, DL, GST, Patta...)'}
              className="w-full bg-transparent text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2.5 py-1 text-xs font-bold text-slate-500 hover:text-slate-800 rounded-md hover:bg-slate-200"
            >
              ESC
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto divide-y divide-slate-100 p-2">
            <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {query ? `${filtered.length} ${lang === 'ta' ? 'சேவைகள் கிடைத்தன' : 'services found'}` : (lang === 'ta' ? 'பிரபலமான சேவைகள்' : 'Popular Services')}
            </div>

            {filtered.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-sm font-semibold text-slate-700">
                  {lang === 'ta' ? 'சேவைகள் எதுவும் காணப்படவில்லை' : 'No exact matching services found'}
                </p>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  {lang === 'ta' ? 'வாட்ஸ்அப் (7373188844) மூலம் உங்கள் சேவை தேவையை நேரடியாக தெரிவிக்கலாம்.' : 'You can message us directly on WhatsApp to ask about this service.'}
                </p>
                <button
                  onClick={() => {
                    openWhatsApp(`வணக்கம், எனக்கு இந்த சேவை தேவை: ${query}`);
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் கேட்க' : 'Inquire on WhatsApp'}</span>
                </button>
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectService(item);
                    onClose();
                  }}
                  className="p-3.5 rounded-2xl hover:bg-red-50/70 cursor-pointer flex items-center justify-between gap-3 transition-colors group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        {lang === 'ta' ? item.name_ta : item.name_en}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {lang === 'ta' ? item.tag_ta : item.tag_en}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {lang === 'ta' ? item.shortDesc_ta : item.shortDesc_en}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-xs font-bold text-red-600 hidden sm:inline">
                      {lang === 'ta' ? 'விவரம்' : 'View'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
