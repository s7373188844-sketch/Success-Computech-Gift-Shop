import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { downloadServicesPdf } from '../utils/pdfGenerator';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import {
  FileText,
  Download,
  MessageCircle,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Eye,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ServicePdfSection: React.FC = () => {
  const { lang, openWhatsApp } = useApp();
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleGetLink = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = mobileNumber.replace(/\D/g, '');

    if (cleanNumber.length !== 10) {
      setErrorMessage(
        lang === 'ta'
          ? 'தயவுசெய்து சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.'
          : 'Please enter a valid 10-digit mobile number.'
      );
      return;
    }

    setErrorMessage('');
    setIsDownloading(true);

    try {
      // 1. Download PDF directly to customer device
      downloadServicesPdf(cleanNumber);

      // 2. Open WhatsApp to Success Computech with pre-formatted link & customer number
      const text =
        lang === 'ta'
          ? `வணக்கம் Success Computech! எனது வாட்ஸ்அப் எண் +91 ${cleanNumber}. எனக்கு உங்கள் அனைத்து சேவைகள் பட்டியல் (Official Services List PDF) மற்றும் கட்டண விவரங்கள் தேவை.`
          : `Hello Success Computech! My WhatsApp number is +91 ${cleanNumber}. Please share the official services list PDF and service details.`;

      setTimeout(() => {
        openWhatsApp(text);
        setIsSuccess(true);
        setIsDownloading(false);
      }, 500);
    } catch {
      setIsDownloading(false);
      setErrorMessage(
        lang === 'ta'
          ? 'PDF தயாரிப்பதில் பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.'
          : 'Error generating PDF. Please try again.'
      );
    }
  };

  const handleDirectDownload = () => {
    setIsDownloading(true);
    try {
      downloadServicesPdf();
      setIsDownloading(false);
      setIsSuccess(true);
    } catch {
      setIsDownloading(false);
    }
  };

  return (
    <section id="service-pdf" className="py-14 bg-amber-50/40 text-slate-900 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white rounded-3xl border-2 border-orange-200/80 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading, Value Props & Direct Download */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>{lang === 'ta' ? 'அனைத்து சேவைகள் கையேடு PDF' : 'OFFICIAL SERVICES BROCHURE'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                {lang === 'ta'
                  ? 'எங்கள் அனைத்து சேவைகள் பட்டியல் PDF & ஆவண வழிகாட்டியை பெறுக'
                  : 'Download Complete Service List & Document Checklist PDF'}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {lang === 'ta'
                  ? 'ஆதார், ஸ்மார்ட் கார்டு, பான், பாஸ்போர்ட், பட்டா, டிரைவிங் லைசென்ஸ், நலவாரியம் உள்ளிட்ட 40+ அரசு & ஆன்லைன் சேவைகள், தேவையான ஆவணங்கள் மற்றும் அலுவலக விவரங்கள் அடங்கிய முழுமையான PDF கையேடு.'
                  : 'Get our comprehensive printable PDF guide listing 40+ government digital services, required document checklists, turnaround times, and remote WhatsApp support details.'}
              </p>

              {/* Highlights Feature Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'ta' ? '40+ சேவைகள் & தேவைகள் பட்டியல்' : '40+ Categorized Services'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'ta' ? 'நேரடியாக மொபைல் போனில் சேமிக்கலாம்' : 'Instant High-Res PDF Download'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'ta' ? 'அனைத்து தேவையான ஆவண விவரங்கள்' : 'Exact Documents Checklist'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'ta' ? '100% இலவச பதிவிறக்கம்' : '100% Free for Citizens'}</span>
                </div>
              </div>

              {/* Direct Download & Preview Buttons */}
              <div className="mt-7 flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={handleDirectDownload}
                  disabled={isDownloading}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-black border-2 border-slate-300 shadow-2xs flex items-center gap-2 transition-all hover:scale-102"
                >
                  <Download className="w-4 h-4 text-orange-600" />
                  <span>{lang === 'ta' ? 'நேரடி PDF டவுன்லோட்' : 'Direct Download PDF'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreviewModal(true)}
                  className="px-4 py-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-900 text-xs sm:text-sm font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-2xs"
                >
                  <Eye className="w-4 h-4 text-orange-600" />
                  <span>{lang === 'ta' ? 'பட்டியல் முன்னோட்டம் (Preview)' : 'Preview Service List'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp "Get Link" Form Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border-2 border-orange-300 shadow-sm relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                      {lang === 'ta' ? 'வாட்ஸ்அப்பில் லிங்க் பெறுக' : 'Get Link via WhatsApp'}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {lang === 'ta' ? 'உங்கள் எண்ணை உள்ளிட்டவுடன் நேரடி லிங்க் வரும்' : 'Enter number to receive instant PDF link'}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleGetLink} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      {lang === 'ta' ? 'உங்கள் வாட்ஸ்அப் மொபைல் எண்:' : 'Your WhatsApp Mobile Number:'}
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-slate-600 font-bold text-sm select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={mobileNumber}
                        onChange={(e) => {
                          setMobileNumber(e.target.value.replace(/\D/g, ''));
                          setErrorMessage('');
                        }}
                        placeholder="98765 43210"
                        className="w-full pl-14 pr-4 py-3.5 bg-white text-slate-900 rounded-xl border-2 border-slate-300 text-base font-black tracking-wider placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-2xs"
                      />
                    </div>
                    {errorMessage && (
                      <p className="text-xs text-rose-600 font-semibold mt-1.5">{errorMessage}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isDownloading}
                    className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-md transition-all hover:scale-101 active:scale-99 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>
                      {isDownloading
                        ? (lang === 'ta' ? 'தயாராகிறது...' : 'Generating...')
                        : (lang === 'ta' ? 'Get Link / வாட்ஸ்அப்பில் பெற' : 'Get Link on WhatsApp')}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Success Notification */}
                {isSuccess && (
                  <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-start gap-2.5 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span>
                        {lang === 'ta'
                          ? 'வாழ்த்துகள்! உங்கள் PDF டவுன்லோட் செய்யப்பட்டது மற்றும் வாட்ஸ்அப் லிங்க் திறக்கப்பட்டுள்ளது.'
                          : 'Success! PDF downloaded and WhatsApp inquiry link opened successfully.'}
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Privacy Protected
                  </span>
                  <span className="font-bold text-slate-800">WhatsApp: +91 73731 88844</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive PDF Services Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl p-6 max-h-[88vh] flex flex-col border border-slate-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-xl text-orange-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {lang === 'ta' ? 'சக்ஸஸ் கம்ப்யூடெக் - சேவைகள் பட்டியல் முன்னோட்டம்' : 'Success Computech - Services Catalogue Preview'}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'ta' ? 'அனைத்து சேவைகள் மற்றும் தேவையான ஆவணங்கள்' : 'All Digital Services & Required Documents'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Preview Content */}
            <div className="flex-1 overflow-y-auto py-4 space-y-6">
              {SERVICE_CATEGORIES.map((category) => (
                <div key={category.id} className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                    <h4 className="font-black text-sm text-slate-800 uppercase tracking-wide">
                      {lang === 'ta' ? category.title_ta : category.title_en}
                    </h4>
                    <span className="text-xs font-bold text-orange-600">
                      {category.services.length} {lang === 'ta' ? 'சேவைகள்' : 'Services'}
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100 p-2">
                    {category.services.map((s) => (
                      <div key={s.id} className="p-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-sm text-slate-900">
                            {lang === 'ta' ? s.name_ta : s.name_en}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-100 text-emerald-800">
                            {lang === 'ta' ? s.processingTime_ta : s.processingTime_en}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          {lang === 'ta' ? s.shortDesc_ta : s.shortDesc_en}
                        </p>
                        <div className="mt-2 text-xs font-semibold text-slate-700">
                          <span className="text-emerald-700 font-bold">{lang === 'ta' ? 'தேவையானவை: ' : 'Requirements: '}</span>
                          {(lang === 'ta' ? s.requiredDocuments_ta : s.requiredDocuments_en).join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500 font-medium">
                {lang === 'ta' ? 'திருப்பூர் புதிய பேருந்து நிலையம் எதிரில் | போன்: 7373188844' : 'Opp. New Bus Stand, Tiruppur | +91 73731 88844'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  {lang === 'ta' ? 'மூடுக' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    handleDirectDownload();
                    setShowPreviewModal(false);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-md flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'ta' ? 'PDF டவுன்லோட் செய்க' : 'Download PDF'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
