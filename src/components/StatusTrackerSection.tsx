import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_STATUS_RECORDS } from '../data/servicesData';
import { ApplicationStatus } from '../types';
import {
  Search,
  CheckCircle2,
  Clock,
  FileText,
  AlertCircle,
  MessageCircle,
  Calendar,
  User,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const StatusTrackerSection: React.FC = () => {
  const { lang, t, openWhatsApp } = useApp();
  const [refInput, setRefInput] = useState('');
  const [mobileInput, setMobileInput] = useState('');
  const [searchedRecord, setSearchedRecord] = useState<ApplicationStatus | null>(null);
  const [errorNotFound, setErrorNotFound] = useState(false);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorNotFound(false);

    if (!refInput.trim()) {
      return;
    }

    const trimmed = refInput.trim().toUpperCase();
    const found = DEMO_STATUS_RECORDS.find(
      (r) =>
        r.refNumber.toUpperCase() === trimmed ||
        (r.ackNumber && r.ackNumber.toUpperCase().includes(trimmed)) ||
        (mobileInput.trim() && r.mobile.includes(mobileInput.trim()))
    );

    if (found) {
      setSearchedRecord(found);
      setErrorNotFound(false);
    } else {
      // Create a sensible simulated in-progress record for any reference format
      if (trimmed.startsWith('SC-') || trimmed.length >= 6) {
        const dynamicRecord: ApplicationStatus = {
          refNumber: trimmed,
          customerName: lang === 'ta' ? 'பதிவு செய்த வாடிக்கையாளர்' : 'Registered Applicant',
          mobile: mobileInput || '98XXXXXXXX',
          serviceId: 'general',
          serviceName_en: 'Online Government Portal Application',
          serviceName_ta: 'அரசு இணையதள விண்ணப்பம்',
          dateApplied: 'Recently Submitted',
          currentStep: 2,
          statusText_en: 'Under Verification & Department Scrutiny',
          statusText_ta: 'ஆவணங்கள் சரிபார்க்கப்பட்டு பரிசீலனையில் உள்ளது',
          updatedDate: 'Today',
          remarks_en: 'Application registered successfully. Scrutiny in progress at respective department office.',
          remarks_ta: 'விண்ணப்பம் பதிவு செய்யப்பட்டது. துறை அலுவலகத்தில் சரிபார்ப்பு நடைபெறுகிறது.',
          ackNumber: `ACK-${trimmed.replace(/[^A-Z0-9]/gi, '')}`
        };
        setSearchedRecord(dynamicRecord);
      } else {
        setSearchedRecord(null);
        setErrorNotFound(true);
      }
    }
  };

  const handleSelectDemo = (ref: string) => {
    setRefInput(ref);
    const rec = DEMO_STATUS_RECORDS.find((r) => r.refNumber === ref);
    if (rec) {
      setSearchedRecord(rec);
      setErrorNotFound(false);
    }
  };

  const stepsList = [
    { num: 1, title_en: 'Application Received', title_ta: 'விண்ணப்பம் பெறப்பட்டது' },
    { num: 2, title_en: 'Document Scrutiny', title_ta: 'ஆவண சரிபார்ப்பு' },
    { num: 3, title_en: 'Dept Processing / Portal Submission', title_ta: 'துறை பரிசீலனை / பதிவு' },
    { num: 4, title_en: 'Approved / Ready for Delivery', title_ta: 'ஒப்புதல் / டெலிவரி தயார்' }
  ];

  return (
    <section id="status" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5 text-red-600" />
            <span>Online Application Tracker</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.statusTrackerTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {t.statusTrackerSub}
          </p>
        </div>

        {/* Search Box Form */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.enterRefLabel}
                </label>
                <input
                  type="text"
                  value={refInput}
                  onChange={(e) => setRefInput(e.target.value)}
                  placeholder={t.refPlaceholder}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-semibold uppercase focus:outline-hidden focus:ring-2 focus:ring-red-500/30 focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.mobileLabel}
                </label>
                <input
                  type="tel"
                  value={mobileInput}
                  onChange={(e) => setMobileInput(e.target.value)}
                  placeholder={t.mobilePlaceholder}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-red-500/30 focus:border-red-600"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Demo pills */}
              <div className="text-xs text-slate-500 flex items-center gap-1.5 flex-wrap">
                <span className="font-semibold text-slate-700">{t.tryDemoBtn}</span>
                {['SC-2026-PAN402', 'SC-2026-DL891', 'SC-2026-PASS11', 'SC-2026-GST05'].map((demo) => (
                  <button
                    key={demo}
                    type="button"
                    onClick={() => handleSelectDemo(demo)}
                    className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-slate-200 hover:bg-red-100 hover:text-red-700 text-slate-800 font-bold transition-colors cursor-pointer"
                  >
                    {demo}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{t.checkStatusBtn}</span>
              </button>
            </div>
          </form>

          {/* Not Found Error */}
          {errorNotFound && (
            <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>
                {lang === 'ta'
                  ? 'இந்த குறிப்பு எண்ணில் தகவல் கிடைக்கவில்லை. சரியான எண்ணை உள்ளிடவும் அல்லது வாட்ஸ்அப் (7373188844) மூலம் சரிபார்க்கவும்.'
                  : 'No application record found for this reference number. Please check the ID or contact us on WhatsApp.'}
              </span>
            </div>
          )}

          {/* Search Results Display */}
          <AnimatePresence>
            {searchedRecord && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 pt-6 border-t border-slate-200 bg-white p-6 rounded-2xl border shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-black text-slate-900">
                        {searchedRecord.refNumber}
                      </span>
                      {searchedRecord.ackNumber && (
                        <span className="px-2 py-0.5 rounded-md bg-red-50 text-red-800 text-[11px] font-bold border border-red-200">
                          {searchedRecord.ackNumber}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mt-1">
                      {lang === 'ta' ? searchedRecord.serviceName_ta : searchedRecord.serviceName_en}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-slate-400 block">{t.lastUpdated}</span>
                    <span className="text-xs font-bold text-slate-700">{searchedRecord.updatedDate}</span>
                  </div>
                </div>

                {/* Progress Stepper (UX4G Standard) */}
                <div className="my-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
                    {stepsList.map((step) => {
                      const isDone = step.num <= searchedRecord.currentStep;
                      const isCurrent = step.num === searchedRecord.currentStep;
                      return (
                        <div
                          key={step.num}
                          className={`p-3 rounded-xl border transition-all ${
                            isCurrent
                              ? 'bg-red-50 border-red-500 text-red-950 font-bold'
                              : isDone
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                              : 'bg-slate-50 border-slate-200 text-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div
                              className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${
                                isDone ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-700'
                              }`}
                            >
                              {isDone ? '✓' : step.num}
                            </div>
                            <span className="text-[11px] uppercase tracking-wider">
                              {lang === 'ta' ? `படி 0${step.num}` : `Step 0${step.num}`}
                            </span>
                          </div>
                          <p className="text-xs font-semibold leading-tight">
                            {lang === 'ta' ? step.title_ta : step.title_en}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status details & Remarks */}
                <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{t.applicantName}:</span>
                    <span className="font-bold text-slate-900">{searchedRecord.customerName}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{t.dateSubmitted}:</span>
                    <span className="font-bold text-slate-900">{searchedRecord.dateApplied}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{t.currentStage}:</span>
                    <span className="font-bold text-emerald-700">
                      {lang === 'ta' ? searchedRecord.statusText_ta : searchedRecord.statusText_en}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-xs">
                    <span className="font-bold text-slate-700 block mb-0.5">{t.remarks}:</span>
                    <p className="text-slate-600 italic">
                      "{lang === 'ta' ? searchedRecord.remarks_ta : searchedRecord.remarks_en}"
                    </p>
                  </div>
                </div>

                {/* Follow up on WhatsApp */}
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">{t.needAssistanceOnStatus}</span>
                  <button
                    onClick={() => {
                      const msg = lang === 'ta'
                        ? `வணக்கம் Success Computech! எனது விண்ணப்ப குறிப்பு எண்: ${searchedRecord.refNumber} (${searchedRecord.serviceName_ta}) பற்றி அறிய விரும்புகிறேன்.`
                        : `Hello Success Computech! Inquiring regarding reference ${searchedRecord.refNumber} (${searchedRecord.serviceName_en}).`;
                      openWhatsApp(msg);
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் விசாரிக்க' : 'Chat on WhatsApp'}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
