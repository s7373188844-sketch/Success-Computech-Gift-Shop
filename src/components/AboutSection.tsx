import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  CheckCircle2,
  Sparkles,
  Printer,
  FileCheck,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const { lang, openWhatsApp } = useApp();

  const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7';

  const stats = [
    {
      value: 'Since 2020',
      label_en: 'Serving Tiruppur with Trust',
      label_ta: '2020 முதல் நம்பிக்கையான சேவை',
      icon: <Award className="w-5 h-5 text-red-600" />
    },
    {
      value: '10,000+',
      label_en: 'Happy Customers & Filings',
      label_ta: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
      icon: <Users className="w-5 h-5 text-red-600" />
    },
    {
      value: '100+',
      label_en: 'Digital & Gift Services',
      label_ta: 'டிஜிட்டல் & பரிசு சேவைகள்',
      icon: <Layers className="w-5 h-5 text-red-600" />
    },
    {
      value: '7 Days',
      label_en: 'Active Support (Inc. Sunday)',
      label_ta: 'வாரத்தின் 7 நாட்களும் சேவை',
      icon: <Clock className="w-5 h-5 text-red-600" />
    }
  ];

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      title_en: '100% Genuine Portals & Zero Rejections',
      title_ta: '100% அரசு அங்கீகரித்த இணையதளங்கள்',
      desc_en: 'All government applications (PAN, Aadhaar, Passport, TNeGA) are verified and processed through official legitimate portals with valid government receipts.',
      desc_ta: 'அனைத்து அரசு விண்ணப்பங்களும் துல்லியமாக சரிபார்க்கப்பட்டு அதிகாரப்பூர்வ அரசு இணையதளங்களில் பதிவு செய்யப்பட்டு ரசீது வழங்கப்படும்.'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
      title_en: 'Remote WhatsApp Convenience',
      title_ta: 'வீட்டிலிருந்தே வாட்ஸ்அப் சேவை',
      desc_en: 'No need to take time off work or travel through traffic. Simply send clear photos of documents to 7373188844 on WhatsApp.',
      desc_ta: 'கடைக்கு அலைய வேண்டியதில்லை! தேவையான ஆவணங்களின் புகைப்படங்களை 7373188844 என்ற எண்ணிற்கு வாட்ஸ்அப்பில் அனுப்பி சுலபமாக முடிக்கலாம்.'
    },
    {
      icon: <Printer className="w-6 h-6 text-red-600" />,
      title_en: 'Precision Printing & Quality Crafting',
      title_ta: 'உயர்தர பிரிண்டிங் & பரிசுப் பொருட்கள்',
      desc_en: 'From waterproof smart PVC cards to custom photo mugs and designer acrylic frames, we use modern high-definition machines for superior finish.',
      desc_ta: 'வாட்டர்ப்ரூப் ஸ்மார்ட் PVC கார்டுகள், பிரத்யேக போட்டோ மக், மர மற்றும் அக்ரிலிக் பிரேம்கள் நவீன இயந்திரங்கள் கொண்டு தயாரிக்கப்படுகின்றன.'
    },
    {
      icon: <Award className="w-6 h-6 text-red-600" />,
      title_en: 'Trusted Local Tiruppur Partner',
      title_ta: 'திருப்பூரில் நம்பகமான சேவை மையம்',
      desc_en: 'Located conveniently at 15/12 Opp AK Motors, PN Road, Tirupur 641602 with transparent pricing, respectful assistance, and quick turnarounds.',
      desc_ta: '15/12 ஏ.கே மோட்டார்ஸ் எதிரில், பி.என் ரோடு, திருப்பூர் 641602 என்ற முக்கிய இடத்தில் வெளிப்படையான கட்டணத்துடன் நேர்மையான சேவை.'
    }
  ];

  const steps = [
    { num: '01', title_en: 'Select Service', title_ta: 'சேவையை தேர்வு செய்க', desc_en: 'Choose from 100+ services or consult via WhatsApp.', desc_ta: 'பட்டியலில் உள்ள சேவையை தேர்வு செய்யவும் அல்லது வாட்ஸ்அப்பில் கேட்கவும்.' },
    { num: '02', title_en: 'Submit Docs', title_ta: 'ஆவணங்கள் பகிர்க', desc_en: 'Send photos on WhatsApp (7373188844) or visit shop.', desc_ta: 'ஆவணங்களின் போட்டோவை வாட்ஸ்அப்பில் அனுப்பவும் அல்லது கடைக்கு வரலாம்.' },
    { num: '03', title_en: 'Scrutiny Check', title_ta: 'ஆவண சரிபார்ப்பு', desc_en: 'Our team verifies criteria to avoid any portal rejections.', desc_ta: 'நிராகரிப்பு ஏற்படாமல் இருக்க ஆவணங்கள் துல்லியமாக சரிபார்க்கப்படும்.' },
    { num: '04', title_en: 'Official Filing', title_ta: 'அரசு இணையதள பதிவு', desc_en: 'We file accurately and secure your official ARN receipt.', desc_ta: 'அரசு தளங்களில் பதிவு செய்யப்பட்டு அரசு ரசீது மற்றும் எண் பெறப்படும்.' },
    { num: '05', title_en: 'Instant Delivery', title_ta: 'ரசீது & கார்டு பெறுக', desc_en: 'Receive e-acknowledgement instantly; card delivered safely.', desc_ta: 'ரசீது வாட்ஸ்அப்பில் வரும்; அசல் கார்டுகள் கைக்கு வந்து சேரும்.' }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b-2 border-red-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>{lang === 'ta' ? 'எங்களைப் பற்றி • 2020 முதல் திருப்பூரில்' : 'ABOUT SUCCESS COMPUTECH • SINCE 2020'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {lang === 'ta' ? 'திருப்பூரின் நம்பகமான டிஜிட்டல் & கிஃப்ட் மையம்' : 'Tiruppur’s Premier Digital, Print & Gift Centre'}
          </h2>
          <p className="mt-4 text-base sm:text-lg font-bold text-red-600 italic">
            "Ideas • Prints • Gifts for a Better Tomorrow — Serving Since 2020"
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {lang === 'ta'
              ? '2020 ஆம் ஆண்டு முதல் சக்ஸஸ் கம்ப்யூடெக் & கிஃப்ட் ஷாப் திருப்பூரின் பி.என் ரோட்டில் ஏ.கே மோட்டார்ஸ் எதிரில் (15/12) செயல்பட்டு வருகிறது. அரசு இ-சேவை, ஸ்மார்ட் PVC அட்டை, பிரத்யேக பரிசுப் பொருட்கள் மற்றும் பிரிண்டிங் சேவைகளை நம்பகத்தன்மையுடனும் துல்லியமாகவும் வழங்கி வருகிறோம்.'
              : 'Serving Tiruppur since 2020, located prominently at 15/12 Opp AK Motors, PN Road, Tirupur 641602. SUCCESS COMPUTECH & GIFT SHOP brings together digital citizen documentation, custom sublimation gifting, waterproof PVC smart cards, and commercial printing under one trusted roof.'}
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 text-center hover:border-red-400 transition-colors"
            >
              <div className="p-3 bg-white border border-red-100 rounded-2xl w-fit mx-auto mb-3 shadow-2xs">
                {s.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950">
                {s.value}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                {lang === 'ta' ? s.label_ta : s.label_en}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 2-Column Story & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Mission & Address Context */}
          <div className="lg:col-span-5 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-200">
                {lang === 'ta' ? 'எங்கள் நோக்கம்' : 'OUR MISSION & PURPOSE'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                {lang === 'ta'
                  ? 'ஒவ்வொரு குடிமகனுக்கும் வணிகத்திற்கும் எளிதான டிஜிட்டல் தீர்வு'
                  : 'Empowering Every Citizen & Business with Frictionless Digital Solutions'}
              </h3>
              <p className="text-xs sm:text-sm text-red-100 mt-4 leading-relaxed font-medium">
                {lang === 'ta'
                  ? 'அரசு விண்ணப்பங்களில் உள்ள சிக்கலான வழிமுறைகளை எளிதாக்குவதும், மறக்கமுடியாத நினைவுகளை அழகான பரிசுகளாக மாற்றுவதும் எங்கள் நோக்கமாகும். இடைத்தரகர்கள் இன்றி, நியாயமான கட்டணத்தில், துல்லியமான சேவையை உங்களுக்கு வழங்குகிறோம்.'
                  : 'Our purpose is to eliminate document bureaucracy and deliver joy through personalized tangible prints and gifts. With verified expertise, modern printers, and direct WhatsApp filing, we save your precious time and eliminate application rejections.'}
              </p>

              {/* Direct Address & Phone Box */}
              <div className="mt-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-red-200 block">
                      {lang === 'ta' ? 'அலுவலக முகவரி' : 'OUR ADDRESS'}
                    </span>
                    <p className="text-sm font-black text-white">
                      15/12 Opp AK Motors, Pn Road, Tirupur 641602.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-red-200 block">
                      {lang === 'ta' ? 'தொலைபேசி & வாட்ஸ்அப்' : 'PHONE & WHATSAPP'}
                    </span>
                    <a
                      href="tel:+917373188844"
                      className="text-base font-black text-white hover:underline tracking-wide"
                    >
                      7373188844
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-red-700 hover:bg-red-50 text-xs font-black transition-all shadow-md active:scale-95"
              >
                <Navigation className="w-4 h-4 text-red-700" />
                <span>{lang === 'ta' ? 'கூகுள் மேப் வழித்தடம்' : 'Google Map Route'}</span>
              </a>

              <button
                onClick={() => openWhatsApp('வணக்கம்! எனக்கு உங்கள் மையம் பற்றிய விவரங்கள் தேவை.')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 7373188844</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Pillars of Excellence */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pil, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-red-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-red-50 rounded-2xl w-fit mb-4 border border-red-100">
                    {pil.icon}
                  </div>
                  <h4 className="text-base font-black text-slate-950 mb-2 leading-snug">
                    {lang === 'ta' ? pil.title_ta : pil.title_en}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {lang === 'ta' ? pil.desc_ta : pil.desc_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step How We Work Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border-2 border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
              {lang === 'ta' ? 'எளிய 5-படி முறை' : 'TRANSPARENT WORKFLOW'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              {lang === 'ta' ? 'நாங்கள் எவ்வாறு செயல்படுகிறோம்?' : 'How We Execute Your Work'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-red-600 font-mono block mb-2">
                    {st.num}
                  </span>
                  <h4 className="text-sm font-black text-slate-900 mb-1.5 leading-snug">
                    {lang === 'ta' ? st.title_ta : st.title_en}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {lang === 'ta' ? st.desc_ta : st.desc_en}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
