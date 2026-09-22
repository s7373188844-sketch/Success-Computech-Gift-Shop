import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Gift,
  CreditCard,
  FileCheck2,
  Printer,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WorkItem {
  id: string;
  category: 'gifts' | 'pvc' | 'govt' | 'print';
  title_en: string;
  title_ta: string;
  subtitle_en: string;
  subtitle_ta: string;
  badge_en: string;
  badge_ta: string;
  turnaround_en: string;
  turnaround_ta: string;
  features_en: string[];
  features_ta: string[];
  icon: React.ReactNode;
  bgGradient: string;
}

const WORK_ITEMS: WorkItem[] = [
  {
    id: 'custom-mug',
    category: 'gifts',
    title_en: 'Personalized Photo & Magic Mugs',
    title_ta: 'பிரத்யேக புகைப்பட & மேஜிக் மக் பிரிண்டிங்',
    subtitle_en: 'High-gloss ceramic sublimation mugs with vivid heat-resistant printing for birthdays & corporate gifting.',
    subtitle_ta: 'பிறந்தநாள், திருமண நாள் மற்றும் அலுவலக பரிசுகளுக்கான உயர்தர மேஜிக் மற்றும் புகைப்பட காபி மக்.',
    badge_en: 'Custom Gifts',
    badge_ta: 'பிரத்யேக பரிசு',
    turnaround_en: 'Ready in 2–4 Hours',
    turnaround_ta: '2-4 மணி நேரத்தில் தயார்',
    features_en: ['Microwave & Dishwasher Safe', 'Magic color-changing options', 'High-definition photo printing'],
    features_ta: ['மைக்ரோவேவ் & வாஷ் செய்யத்தக்கது', 'மேஜிக் நிறம் மாறும் வகை', 'HD புகைப்பட தரம்'],
    icon: <Gift className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-red-50 to-white'
  },
  {
    id: 'pvc-smart-cards',
    category: 'pvc',
    title_en: 'Smart Synthetic PVC ID & Aadhaar Cards',
    title_ta: 'ஸ்மார்ட் சிந்தடிக் PVC ஆதார் & அடையாள அட்டை',
    subtitle_en: 'Non-tearable, 100% waterproof high-grade PVC smart cards for Aadhaar, Voter ID, PAN & Driving Licence.',
    subtitle_ta: 'மங்காத, கிழியாத, வாட்டர்ப்ரூப் தரத்திலான ஒரிஜினல் அரசு அளவிலான PVC பிளாஸ்டிக் ஸ்மார்ட் கார்டுகள்.',
    badge_en: 'Instant PVC Print',
    badge_ta: 'உடனடி PVC கார்டு',
    turnaround_en: '10–15 Minutes',
    turnaround_ta: '10-15 நிமிடங்களில் தயார்',
    features_en: ['Official CR80 Credit Card Size', 'Scannable High-Contrast QR Code', 'Waterproof & Scratch-Resistant'],
    features_ta: ['அரசு நிர்ணயித்த சரியான அளவு', 'ஸ்கேன் செய்யக்கூடிய QR கோடு', 'நீர்ப்புகா & நீடித்த உழைப்பு'],
    icon: <CreditCard className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-slate-50 to-white'
  },
  {
    id: 'photo-frames',
    category: 'gifts',
    title_en: 'Customized Wooden & Acrylic Photo Frames',
    title_ta: 'மர & அக்ரிலிக் புகைப்பட பிரேம்கள்',
    subtitle_en: 'Elegant framed collages, LED light photo frames, and customized acrylic desk cutouts for special memories.',
    subtitle_ta: 'திருமணம், பிறந்தநாள் போன்ற விசேஷ தருணங்களை நினைவுகூரும் உயர்தர மர மற்றும் அக்ரிலிக் புகைப்பட பிரேம்கள்.',
    badge_en: 'Popular Gift',
    badge_ta: 'பிரபலமான பரிசு',
    turnaround_en: 'Same Day / 24 Hours',
    turnaround_ta: 'அன்றே / 24 மணி நேரம்',
    features_en: ['UV protective matte/gloss finish', 'Multiple frame borders & sizes', 'Table top & wall hanging mount'],
    features_ta: ['UV பாதுகாப்பு பூச்சு', 'பல்வேறு அளவுகள் மற்றும் பார்டர்கள்', 'சுவர் & மேஜை தாங்கிகள்'],
    icon: <Sparkles className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-red-50 to-white'
  },
  {
    id: 'pan-service',
    category: 'govt',
    title_en: 'Instant PAN Card Application & Corrections',
    title_ta: 'உடனடி பான் கார்டு பதிவு & பெயர் திருத்தம்',
    subtitle_en: 'New PAN application, photo/signature update, address correction, and instant e-PAN generation via NSDL/UTIITSL.',
    subtitle_ta: 'புதிய பான் கார்டு, பெயர், பிறந்த தேதி, கையொப்பம் திருத்தம் மற்றும் உடனடி இ-பான் பெறும் சேவை.',
    badge_en: 'Govt e-Sevai',
    badge_ta: 'அரசு இ-சேவை',
    turnaround_en: 'Instant Acknowledgment / 2 hrs e-PAN',
    turnaround_ta: 'உடனடி ரசீது / 2 மணி நேரத்தில் இ-பான்',
    features_en: ['Government-authorized filing', 'Aadhaar biometric / OTP link', 'Physical card dispatched to door'],
    features_ta: ['அரசு வழிகாட்டுதல் முறை', 'ஆதார் OTP / பயோமெட்ரிக்', 'அசல் கார்டு வீட்டிற்கு வந்து சேரும்'],
    icon: <FileCheck2 className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-slate-50 to-white'
  },
  {
    id: 'business-cards-print',
    category: 'print',
    title_en: 'Visiting Cards & Commercial Printing',
    title_ta: 'விசிட்டிங் கார்டுகள் & வர்த்தக பிரிண்டிங்',
    subtitle_en: 'Single & double side visiting cards, multi-color letterheads, bill books, stickers, and promotional brochures.',
    subtitle_ta: 'தொழில் நிறுவனங்களுக்கான விசிட்டிங் கார்டுகள், லெட்டர்ஹெட், பில் புக், ஸ்டிக்கர் மற்றும் விளம்பர நோட்டீஸ்கள்.',
    badge_en: 'Printing Solutions',
    badge_ta: 'பிரிண்டிங் தீர்வுகள்',
    turnaround_en: '24–48 Hours',
    turnaround_ta: '24-48 மணி நேரம்',
    features_en: ['300+ GSM Art Board & Matte Lamination', 'Spot UV & Gold Foil Options', 'Complete Graphic Designing Support'],
    features_ta: ['300+ GSM தடிமனான போர்டு', 'மேட் லேமினேஷன் & ஸ்பாட் UV', 'டிசைனிங் உதவி'],
    icon: <Printer className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-slate-50 to-white'
  },
  {
    id: 'custom-apparel',
    category: 'gifts',
    title_en: 'Sublimation T-Shirts, Caps & Keychains',
    title_ta: 'டி-சர்ட், தொப்பிகள் & கீசெயின்கள் பிரிண்டிங்',
    subtitle_en: 'Personalized apparel for events, family functions, team uniforms, personalized keychains, and photo pillows.',
    subtitle_ta: 'நிகழ்ச்சிகள், குடும்ப விழாக்கள், குழு சீருடைகளுக்கான டி-சர்ட், தனிப்பயன் கீசெயின் மற்றும் தலையணைகள்.',
    badge_en: 'Merchandise',
    badge_ta: 'விளம்பர ஆடைகள்',
    turnaround_en: '1–2 Days',
    turnaround_ta: '1-2 நாட்கள்',
    features_en: ['Vibrant colorfast sublimation', 'Bulk order corporate discounts', 'Individual custom single piece available'],
    features_ta: ['வண்ணம் மங்காத பிரிண்ட்', 'மொத்த ஆர்டர்களுக்கு சிறப்பு சலுகை', 'ஒற்றை பீஸும் செய்து தரப்படும்'],
    icon: <Gift className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-red-50 to-white'
  },
  {
    id: 'passport-docs',
    category: 'govt',
    title_en: 'Online Passport Application & Slot Booking',
    title_ta: 'ஆன்லைன் பாஸ்போர்ட் பதிவு & ஸ்லாட் புக்கிங்',
    subtitle_en: 'Tatkal & Normal passport appointments, PSK slot reservation, Annexure preparation, and renewal processing.',
    subtitle_ta: 'தட்கல் & சாதாரண பாஸ்போர்ட் விண்ணப்பம், PSK முன்பதிவு மற்றும் பாஸ்போர்ட் புதுப்பித்தல் ஆலோசனை.',
    badge_en: 'Fast Slot Booking',
    badge_ta: 'விரைவான ஸ்லாட்',
    turnaround_en: 'Same Day Appointment Booking',
    turnaround_ta: 'அன்றே அப்பாயின்ட்மென்ட் புக்கிங்',
    features_en: ['PSK Coimbatore slot availability guidance', 'Document pre-screening check', 'Official receipt & checklist provided'],
    features_ta: ['கோயம்புத்தூர் PSK ஸ்லாட் வழிகாட்டல்', 'முன் ஆவண சரிபார்ப்பு', 'அதிகாரப்பூர்வ ரசீது'],
    icon: <FileCheck2 className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-slate-50 to-white'
  },
  {
    id: 'flex-banner-print',
    category: 'print',
    title_en: 'Flex Banners, Posters & Certificate Lamination',
    title_ta: 'ஃப்ளெக்ஸ் பேனர்கள், போஸ்டர் & லேமினேஷன்',
    subtitle_en: 'HD Flex banner printing for shops & events, color poster printing, ID pouch lamination, and heavy-duty spiral binding.',
    subtitle_ta: 'கடை மற்றும் விசேஷங்களுக்கான HD ஃப்ளெக்ஸ் பேனர், கலர் போஸ்டர், சான்றிதழ் லேமினேஷன் மற்றும் ஸ்பைரல் பைண்டிங்.',
    badge_en: 'Large Format Print',
    badge_ta: 'பெரிய பேனர் பிரிண்ட்',
    turnaround_en: 'Same Day Service',
    turnaround_ta: 'அன்றே கிடைக்கும் சேவை',
    features_en: ['All custom sizes available', 'Weather-proof outdoor vinyl & star flex', 'Pouch lamination up to A3 size'],
    features_ta: ['அனைத்து அளவுகளிலும் பேனர்கள்', 'மழை மற்றும் வெயில் தாங்கும் தரம்', 'A3 அளவு வரை லேமினேஷன்'],
    icon: <Printer className="w-6 h-6 text-red-600" />,
    bgGradient: 'from-slate-50 to-white'
  }
];

export const WorkSection: React.FC = () => {
  const { lang, openWhatsApp } = useApp();
  const [activeFilter, setActiveFilter] = useState<'all' | 'gifts' | 'pvc' | 'govt' | 'print'>('all');

  const filteredItems = activeFilter === 'all'
    ? WORK_ITEMS
    : WORK_ITEMS.filter(item => item.category === activeFilter);

  const filterTabs = [
    { key: 'all', label_en: 'All Work', label_ta: 'அனைத்து பணிகள்' },
    { key: 'gifts', label_en: 'Custom Gifts', label_ta: 'பரிசுப் பொருட்கள்' },
    { key: 'pvc', label_en: 'PVC Smart Cards', label_ta: 'PVC கார்டுகள்' },
    { key: 'govt', label_en: 'Govt e-Sevai', label_ta: 'அரசு இ-சேவை' },
    { key: 'print', label_en: 'Printing & Design', label_ta: 'பிரிண்டிங் & டிசைன்' },
  ];

  const handleOrderWork = (item: WorkItem) => {
    const title = lang === 'ta' ? item.title_ta : item.title_en;
    const msg = lang === 'ta'
      ? `வணக்கம் Success Computech! எனக்கு உங்கள் பணி காட்சிப்படுத்தலில் உள்ள "${title}" (ID: ${item.id}) தேவை. இதன் விலை மற்றும் தயாரிக்கும் விவரங்களை தெரிவியுங்கள்.`
      : `Hello Success Computech! I am interested in your work: "${title}" (ID: ${item.id}). Please share pricing, sample options, and turnaround details.`;
    openWhatsApp(msg);
  };

  return (
    <section id="work" className="py-20 bg-slate-50/70 border-b-2 border-red-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>{lang === 'ta' ? 'எங்கள் தயாரிப்புகள் & பணிகள்' : 'OUR WORK & DELIVERABLES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {lang === 'ta' ? 'நாங்கள் செய்யும் முதன்மை பணிகள்' : 'Recent Work & Solutions'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'ta'
              ? 'பிரத்யேக புகைப்பட பரிசுகள், சிந்தடிக் வாட்டர்ப்ரூப் PVC கார்டுகள், அரசு இ-சேவை விண்ணப்பங்கள் மற்றும் வர்த்தக பிரிண்டிங் பணிகள் அனைத்தும் ஒரே இடத்தில்.'
              : 'Explore our portfolio of personalized gifts, waterproof PVC smart cards, online government clearances, and precision digital printing in Tiruppur.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-red-600 text-white shadow-md shadow-red-900/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-red-50 hover:text-red-700 border border-slate-200'
                }`}
              >
                {lang === 'ta' ? tab.label_ta : tab.label_en}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-red-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-red-800 text-[11px] font-black border border-red-200">
                      <Tag className="w-3 h-3 text-red-600" />
                      {lang === 'ta' ? item.badge_ta : item.badge_en}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                      <Clock className="w-3 h-3 text-red-600 shrink-0" />
                      {lang === 'ta' ? item.turnaround_ta : item.turnaround_en}
                    </span>
                  </div>

                  {/* Icon Card Preview Header */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.bgGradient} border border-slate-100 flex items-center justify-between mb-4 group-hover:scale-[1.02] transition-transform`}>
                    <div className="p-3 bg-white rounded-xl shadow-xs border border-red-100">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-slate-900 text-white uppercase tracking-wider">
                      {item.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-black text-slate-950 group-hover:text-red-600 transition-colors leading-snug">
                    {lang === 'ta' ? item.title_ta : item.title_en}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                    {lang === 'ta' ? item.subtitle_ta : item.subtitle_en}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {(lang === 'ta' ? item.features_ta : item.features_en).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp Order / Inquiry Button */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleOrderWork(item)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-red-50 group-hover:bg-red-600 text-red-700 group-hover:text-white text-xs font-black transition-all cursor-pointer shadow-2xs group-hover:shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{lang === 'ta' ? 'இதை ஆர்டர் / விசாரிக்க' : 'Order / Inquire via WhatsApp'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Project Callout Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-white/10 rounded-2xl shrink-0 backdrop-blur-xs">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black">
                {lang === 'ta' ? 'தனிப்பயன் ஆர்டர்கள் அல்லது மொத்த தேவைகள் உள்ளதா?' : 'Need a Custom Design, Bulk Printing, or Specialized Service?'}
              </h3>
              <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-2xl font-medium leading-relaxed">
                {lang === 'ta'
                  ? 'உங்கள் விசேஷ புகைப்படங்கள், நிறுவன லோகோ அல்லது அரசு ஆவணங்களை 7373188844 வாட்ஸ்அப் எண்ணிற்கு அனுப்பி உடனடியாக மாதிரி மற்றும் விலை விவரங்களை பெறுங்கள்.'
                  : 'Send your photos, corporate logos, or document requirements to 7373188844 on WhatsApp. We provide instant mockups, competitive pricing, and fast dispatch.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp('வணக்கம்! எனக்கு பிரத்யேக ஆர்டர் / புதிய பணி குறித்த உதவி தேவை.')}
            className="shrink-0 flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-red-700 hover:bg-red-50 text-xs sm:text-sm font-black transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் பேச (7373188844)' : 'Chat on WhatsApp (7373188844)'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
