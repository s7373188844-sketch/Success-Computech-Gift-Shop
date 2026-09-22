import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import {
  CheckSquare,
  Copy,
  Check,
  MessageCircle,
  FileText,
  ChevronDown,
  Clock,
  Sparkles,
  Download
} from 'lucide-react';
import { motion } from 'motion/react';

export const DocumentChecklistSection: React.FC = () => {
  const { lang, t, openWhatsApp } = useApp();
  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('pan-card');
  const [copied, setCopied] = useState(false);

  const currentService = allServices.find((s) => s.id === selectedServiceId) || allServices[0];
  const requiredDocs = lang === 'ta' ? currentService.requiredDocuments_ta : currentService.requiredDocuments_en;
  const serviceName = lang === 'ta' ? currentService.name_ta : currentService.name_en;

  const handleCopyChecklist = () => {
    const text = `📋 SUCCESS COMPUTECH & GIFT SHOP - ஆவண சரிபார்ப்பு பட்டியல்\n` +
      `சேவை: ${serviceName}\n\n` +
      `தேவையான ஆவணங்கள் (Required Documents):\n` +
      requiredDocs.map((d, i) => `[  ] ${i + 1}. ${d}`).join('\n') +
      `\n\n📌 வாட்ஸ்அப்பில் ஆவணங்களை அனுப்ப: https://wa.me/917373188844\nபணி நேரம்: திங்கள்-சனி: 9:30 AM – 9:00 PM | ஞாயிறு: 9:00 AM – 2:00 PM\nGoogle Map: https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSend = () => {
    const text = lang === 'ta'
      ? `வணக்கம் Success Computech! நான் ${serviceName} சேவைக்காக இந்த ஆவணங்களை தயார் செய்து அனுப்ப விரும்புகிறேன்: ${requiredDocs.join(', ')}`
      : `Hello Success Computech! I want to submit documents for ${serviceName}: ${requiredDocs.join(', ')}`;
    openWhatsApp(text);
  };

  return (
    <section id="checklist" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs font-bold uppercase tracking-wider mb-2">
            <CheckSquare className="w-3.5 h-3.5 text-red-600" />
            <span>Checklist Assistant</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.checklistTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {t.checklistSub}
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
          {/* Service Selector */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              {t.selectServiceLabel}
            </label>
            <div className="relative">
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full appearance-none bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm sm:text-base font-bold text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-red-500/20 focus:border-red-600 pr-10 cursor-pointer"
              >
                {SERVICE_CATEGORIES.map((cat) => (
                  <optgroup key={cat.id} label={lang === 'ta' ? cat.title_ta : cat.title_en}>
                    {cat.services.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {lang === 'ta' ? srv.name_ta : srv.name_en} ({lang === 'ta' ? srv.tag_ta : srv.tag_en})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Checklist Result Box */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-600" />
                  <span>{serviceName}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'ta' ? currentService.processingTime_ta : currentService.processingTime_en}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyChecklist}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t.copiedText : t.copyListBtn}</span>
                </button>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="mt-5 space-y-3">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                {t.whatToBring}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {requiredDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs hover:border-emerald-300 transition-colors"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-md border-2 border-emerald-500 flex items-center justify-center bg-emerald-50 text-emerald-700 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                {lang === 'ta'
                  ? '💡 இந்த ஆவணங்களின் போட்டோவை வாட்ஸ்அப்பில் அனுப்பினாலே போதுமானது.'
                  : '💡 You can simply send clear photos of these documents via WhatsApp.'}
              </div>

              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.sendListWhatsApp}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
