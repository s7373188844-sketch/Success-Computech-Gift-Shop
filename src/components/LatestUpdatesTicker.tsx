import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LATEST_UPDATES } from '../data/servicesData';
import { LatestUpdate } from '../types';
import { Bell, Flame, ChevronRight, X, ExternalLink, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LatestUpdatesTicker: React.FC = () => {
  const { lang, t, openWhatsApp, setSelectedService, themeConfig } = useApp();
  const [activeUpdate, setActiveUpdate] = useState<LatestUpdate | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const handleUpdateClick = (update: LatestUpdate) => {
    setActiveUpdate(update);
  };

  const handleActionClick = (update: LatestUpdate) => {
    const text = lang === 'ta'
      ? `வணக்கம் Success Computech! எனக்கு இந்த அறிவிப்பு குறித்து உதவி தேவை: ${update.title_ta}`
      : `Hello Success Computech! I need assistance regarding this update: ${update.title_en}`;
    openWhatsApp(text);
  };

  return (
    <>
      {/* Highlighted Banner / Updates Column */}
      <section className="relative z-20 bg-red-50/70 border-y border-red-200 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Header Badge */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider shadow-xs">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>{t.latestUpdatesTitle}</span>
            </div>
            <span className="hidden sm:inline text-xs text-slate-500">|</span>
          </div>

          {/* Scrolling / Interactive Highlights */}
          <div className="flex-1 overflow-x-auto no-scrollbar w-full flex items-center gap-3">
            {LATEST_UPDATES.map((item) => (
              <button
                key={item.id}
                onClick={() => handleUpdateClick(item)}
                className="inline-flex items-center gap-2 shrink-0 py-1 px-3 rounded-lg bg-white border border-red-200 hover:border-red-500 hover:shadow-xs text-xs text-left text-slate-800 transition-all group cursor-pointer"
              >
                {item.isNew && (
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-red-600 text-white uppercase">
                    NEW
                  </span>
                )}
                <span className="font-semibold text-slate-900 group-hover:text-red-600 line-clamp-1">
                  {lang === 'ta' ? item.title_ta : item.title_en}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            ))}
          </div>

          {/* View All Button */}
          <button
            onClick={() => setShowAllModal(true)}
            className="text-xs font-bold text-red-700 hover:text-red-900 underline shrink-0 whitespace-nowrap cursor-pointer"
          >
            {t.allUpdates} ({LATEST_UPDATES.length})
          </button>
        </div>
      </section>

      {/* Single Update Detail Modal */}
      <AnimatePresence>
        {activeUpdate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-slate-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-xs font-bold bg-red-100 text-red-900 rounded-full border border-red-200">
                    {lang === 'ta' ? activeUpdate.tag_ta : activeUpdate.tag_en}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {activeUpdate.date}
                  </span>
                </div>
                <button
                  onClick={() => setActiveUpdate(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="mt-3 text-lg font-bold text-slate-900 leading-snug">
                {lang === 'ta' ? activeUpdate.title_ta : activeUpdate.title_en}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {lang === 'ta' ? activeUpdate.desc_ta : activeUpdate.desc_en}
              </p>

              {/* Action */}
              <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveUpdate(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {lang === 'ta' ? 'மூடுக' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    handleActionClick(activeUpdate);
                    setActiveUpdate(null);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  {lang === 'ta' ? 'வாட்ஸ்அப்பில் விசாரிக்க' : 'Inquire via WhatsApp'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* All Updates Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 max-h-[85vh] flex flex-col border border-slate-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-bold text-slate-900">{t.latestUpdatesTitle}</h3>
                </div>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 space-y-3">
                {LATEST_UPDATES.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-[11px] font-bold bg-red-100 text-red-900 rounded-md">
                          {lang === 'ta' ? item.tag_ta : item.tag_en}
                        </span>
                        <span className="text-xs text-slate-400">{item.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {lang === 'ta' ? item.title_ta : item.title_en}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {lang === 'ta' ? item.desc_ta : item.desc_en}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        handleActionClick(item);
                        setShowAllModal(false);
                      }}
                      className="self-start sm:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      {lang === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
