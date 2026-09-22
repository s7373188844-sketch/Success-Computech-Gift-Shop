import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';
import {
  X,
  CheckCircle2,
  FileText,
  Clock,
  MessageCircle,
  Copy,
  Check,
  Send,
  HelpCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const { lang, t, openWhatsApp, themeConfig } = useApp();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'process'>('overview');

  if (!service) return null;

  const docs = lang === 'ta' ? service.requiredDocuments_ta : service.requiredDocuments_en;
  const subServices = lang === 'ta' ? service.subServices_ta : service.subServices_en;
  const steps = lang === 'ta'
    ? (service.steps_ta || [
        'ஆவணங்களை வாட்ஸ்அப்பில் அல்லது கடையில் சமர்ப்பிக்கவும்',
        'விண்ணப்ப விவரங்கள் மற்றும் தகுதி ஆவணங்கள் சரிபார்த்தல்',
        'அரசு/சேவை போர்ட்டலில் ஆன்லைனில் பதிவு செய்து ரசீது பெறுதல்',
        'விண்ணப்ப நிலை கண்காணிப்பு மற்றும் ஆவணம் இல்லம் தேடி வருதல்'
      ])
    : (service.steps_en || [
        'Submit document copies via WhatsApp (7373188844) or visit office',
        'Scrutiny of documents and eligibility verification',
        'Accurate online filing on official portal with acknowledgment slip',
        'Real-time status tracking and doorstep dispatch'
      ]);

  const handleCopyChecklist = () => {
    const title = lang === 'ta' ? service.name_ta : service.name_en;
    const text = `📋 SUCCESS COMPUTECH & GIFT SHOP - ${title}\nதேவையான ஆவணங்கள் (Required Documents):\n` +
      docs.map((d, i) => `${i + 1}. ${d}`).join('\n') +
      `\n\n📌 வாட்ஸ்அப்பில் அனுப்ப: https://wa.me/917373188844\nபணி நேரம்: திங்கள்-சனி: 9:30 AM – 9:00 PM | ஞாயிறு: 9:00 AM – 2:00 PM\nGoogle Map: https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppApply = () => {
    const serviceName = lang === 'ta' ? service.name_ta : service.name_en;
    const text = lang === 'ta'
      ? `வணக்கம் Success Computech, எனக்கு ${serviceName} சேவைக்கு விண்ணப்பிக்க உதவி தேவை. என்ன ஆவணங்களை அனுப்ப வேண்டும்?`
      : `Hello Success Computech, I need assistance to apply for ${serviceName}. Please guide me on next steps.`;
    openWhatsApp(text);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8"
        >
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-200 text-slate-900 p-6 relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-red-100 text-red-950 text-xs font-black uppercase tracking-wider mb-2 border border-red-300">
                  {lang === 'ta' ? service.tag_ta : service.tag_en}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
                  {lang === 'ta' ? service.name_ta : service.name_en}
                </h2>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-600 font-bold">
                  <Clock className="w-4 h-4 text-red-600 shrink-0" />
                  <span>
                    {lang === 'ta' ? service.processingTime_ta : service.processingTime_en}
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-navigation tabs */}
            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-slate-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang === 'ta' ? 'அறிமுகம் & சேவைகள்' : 'Services Offered'}
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'documents'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang === 'ta' ? 'தேவையான ஆவணங்கள்' : 'Required Documents'}
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'process'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang === 'ta' ? 'நடைமுறை' : 'How It Works'}
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-5 animate-fadeIn">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {lang === 'ta' ? service.shortDesc_ta : service.shortDesc_en}
                </p>

                {/* Sub-services checklist */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    {lang === 'ta'
                      ? 'நாங்கள் வழங்கும் குறிப்பிட்ட சேவைகள்:'
                      : 'Specific Application Facilities Available:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {subServices.map((sub, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remote Assistance Callout */}
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-red-900 leading-relaxed font-medium">
                    {lang === 'ta'
                      ? 'கடைக்கு நேரில் வர தேவையில்லை! தேவையான ஆவணங்களின் தெளிவான புகைப்படங்களை எங்கள் வாட்ஸ்அப் எண்ணிற்கு (7373188844) அனுப்பி உங்கள் வேலையை சுலபமாக முடிக்கலாம்.'
                      : 'No need to visit in person! Simply send photos of the required documents via WhatsApp to 7373188844 and our team will handle the rest.'}
                  </div>
                </div>

                {/* FAQs if any */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      {lang === 'ta' ? 'பொதுவான கேள்விகள்' : 'Frequently Asked'}
                    </h4>
                    <div className="space-y-2">
                      {service.faqs.map((faq, i) => (
                        <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs">
                          <p className="font-bold text-slate-900">{lang === 'ta' ? faq.q_ta : faq.q_en}</p>
                          <p className="mt-1 text-slate-600">{lang === 'ta' ? faq.a_ta : faq.a_en}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Documents Required Tab */}
            {activeTab === 'documents' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-red-600" />
                    <span>{t.documentsRequired}</span>
                  </h4>
                  <button
                    onClick={handleCopyChecklist}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? t.copiedText : t.copyListBtn}</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {docs.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium">{doc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      const msg = `📋 SUCCESS COMPUTECH & GIFT SHOP - ${lang === 'ta' ? service.name_ta : service.name_en} ஆவணங்கள்:\n` +
                        docs.map((d, i) => `${i + 1}. ${d}`).join('\n');
                      openWhatsApp(msg);
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{lang === 'ta' ? 'பட்டியலை வாட்ஸ்அப்பில் உறுதி செய்க' : 'Confirm Checklist on WhatsApp'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* How It Works Tab */}
            {activeTab === 'process' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold text-slate-900">{t.howItWorks}</h4>
                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {steps.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-3">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                          {lang === 'ta' ? `படி 0${idx + 1}` : `Step 0${idx + 1}`}
                        </h5>
                        <p className="text-xs text-slate-600 mt-0.5">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              <span>{t.officeHours}</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold"
              >
                {lang === 'ta' ? 'மூடுக' : 'Close'}
              </button>

              <button
                onClick={handleWhatsAppApply}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.applyNow}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
