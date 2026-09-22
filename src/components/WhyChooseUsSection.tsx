import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Smartphone,
  Layers,
  FileCheck,
  Printer,
  Activity,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUsSection: React.FC = () => {
  const { lang, t, openWhatsApp } = useApp();

  const icons = [
    <Smartphone key="1" className="w-6 h-6 text-emerald-600" />,
    <Layers key="2" className="w-6 h-6 text-red-600" />,
    <FileCheck key="3" className="w-6 h-6 text-red-700" />,
    <Printer key="4" className="w-6 h-6 text-red-600" />,
    <Activity key="5" className="w-6 h-6 text-emerald-600" />,
    <Clock key="6" className="w-6 h-6 text-red-600" />
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
            <span>Tiruppur Trusted Centre</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.whyChooseTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {t.whyChooseSub}
          </p>
        </div>

        {/* 6 Grid points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-xs hover:border-red-400 hover:shadow-lg transition-all"
            >
              <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl w-fit mb-4">
                {icons[idx]}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Remote WhatsApp Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                {lang === 'ta' ? 'கடைக்கு வர முடியாதா? கவலையே வேண்டாம்!' : 'Unable to visit our shop in person? No problem!'}
              </h3>
              <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-xl">
                {lang === 'ta'
                  ? '7373188844 என்ற WhatsApp எண்ணிற்கு உங்கள் ஆவணங்களை அனுப்புங்கள். நாங்கள் விண்ணப்பத்தை பூர்த்தி செய்து ரசீதை உடனே உங்களுக்கு அனுப்பிவிடுவோம்.'
                  : 'Send clear photos of your documents to 7373188844 on WhatsApp. We will file your application and send the official receipt immediately.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp()}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-red-700 font-black text-sm shadow-md hover:bg-red-50 active:scale-95 transition-all cursor-pointer"
          >
            {lang === 'ta' ? 'வாட்ஸ்அப் மூலம் தொடங்குக' : 'Start via WhatsApp'}
          </button>
        </div>
      </div>
    </section>
  );
};
