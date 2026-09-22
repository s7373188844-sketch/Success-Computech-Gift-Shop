import React from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import {
  CreditCard,
  FileText,
  Plane,
  Car,
  Briefcase,
  Ticket,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Building,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface QuickServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
}

export const QuickServicesGrid: React.FC<QuickServicesGridProps> = ({ onSelectService }) => {
  const { lang, t, openWhatsApp } = useApp();

  // Find the top popular target services
  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);
  const targetIds = [
    'aadhaar',
    'smart-card',
    'pan-card',
    'passport-new-renewal',
    'driving-licence',
    'patta-chitta-ec',
    'gst-services',
    'pf-services',
    'tnpsc-exam'
  ];

  const quickServices = targetIds
    .map((id) => allServices.find((s) => s.id === id))
    .filter((s): s is ServiceItem => Boolean(s));

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'aadhaar':
        return <CreditCard className="w-7 h-7 text-blue-600" />;
      case 'smart-card':
        return <FileText className="w-7 h-7 text-emerald-600" />;
      case 'pan-card':
        return <FileText className="w-7 h-7 text-amber-600" />;
      case 'passport-new-renewal':
        return <Plane className="w-7 h-7 text-sky-600" />;
      case 'driving-licence':
        return <Car className="w-7 h-7 text-orange-600" />;
      case 'patta-chitta-ec':
        return <Building className="w-7 h-7 text-teal-600" />;
      case 'gst-services':
        return <Briefcase className="w-7 h-7 text-purple-600" />;
      case 'pf-services':
        return <ShieldCheck className="w-7 h-7 text-rose-600" />;
      case 'tnpsc-exam':
        return <GraduationCap className="w-7 h-7 text-emerald-600" />;
      default:
        return <Sparkles className="w-7 h-7 text-amber-600" />;
    }
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-black uppercase tracking-wider mb-2">
            <span>MOST POPULAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {t.quickServicesTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 font-bold">
            {t.quickServicesSub}
          </p>
        </div>

        {/* 9 Large Quick Service Cards with Bold Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-6 sm:p-7 border-2 border-slate-200 hover:border-red-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="px-3 py-1 text-xs font-black rounded-lg bg-red-50 text-red-950 border border-red-200 uppercase tracking-wide">
                    {lang === 'ta' ? service.tag_ta : service.tag_en}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight group-hover:text-red-600 transition-colors">
                  {lang === 'ta' ? service.name_ta : service.name_en}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                  {lang === 'ta' ? service.shortDesc_ta : service.shortDesc_en}
                </p>

                {/* Sub-services pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {(lang === 'ta' ? service.subServices_ta : service.subServices_en).slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-bold rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Processing time & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-bold text-slate-500">
                  ⏱️ {lang === 'ta' ? service.processingTime_ta : service.processingTime_en}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const msg = lang === 'ta'
                        ? `வணக்கம் Success Computech! எனக்கு ${service.name_ta} சேவை பற்றி உதவி தேவை.`
                        : `Hello Success Computech! I need assistance with ${service.name_en}.`;
                      openWhatsApp(msg);
                    }}
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors cursor-pointer"
                    title="Inquire via WhatsApp"
                    aria-label="Inquire via WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </button>

                  <button
                    onClick={() => onSelectService(service)}
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shadow-sm cursor-pointer active:scale-95"
                  >
                    <span>{lang === 'ta' ? 'விவரம்' : 'Details'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
