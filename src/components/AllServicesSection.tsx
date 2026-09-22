import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceCategory, ServiceItem } from '../types';
import {
  CreditCard,
  Plane,
  Car,
  Briefcase,
  Users,
  Home,
  GraduationCap,
  Sparkles,
  Ticket,
  ShieldCheck,
  Search,
  ArrowRight,
  MessageCircle,
  FileCheck,
  Building,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface AllServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const AllServicesSection: React.FC<AllServicesSectionProps> = ({ onSelectService }) => {
  const { lang, t, activeCategory, setActiveCategory, openWhatsApp } = useApp();
  const [filterQuery, setFilterQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-blue-500" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-sky-500" />;
      case 'Car':
        return <Car className="w-5 h-5 text-orange-500" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-purple-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-500" />;
      case 'Home':
        return <Building className="w-5 h-5 text-teal-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-500" />;
      case 'Ticket':
        return <Ticket className="w-5 h-5 text-rose-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
    }
  };

  const displayedCategories = SERVICE_CATEGORIES.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return false;
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-950 text-xs font-black uppercase tracking-wider mb-3">
            <FileCheck className="w-4 h-4 text-red-600" />
            <span>{lang === 'ta' ? 'அனைத்து டிஜிட்டல் சேவைகள்' : '100+ Digital Services Directory'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {t.allServicesTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 font-bold">
            {t.allServicesSub}
          </p>

          {/* Quick inline search inside services */}
          <div className="mt-7 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={lang === 'ta' ? 'சேவைகளை தேடுக (எ.கா: PAN, LLR, GST, Patta...)' : 'Filter services (e.g. PAN, LLR, GST, Patta...)'}
              className="w-full pl-12 pr-4 py-3 text-sm sm:text-base font-bold bg-slate-50 border-2 border-slate-200 rounded-2xl focus:outline-hidden focus:ring-4 focus:ring-red-500/20 focus:border-red-600 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-10 border-b border-slate-200">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            <span>{lang === 'ta' ? 'அனைத்து சேவைகள்' : 'All Categories'}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 font-black">
              {SERVICE_CATEGORIES.reduce((acc, c) => acc + c.services.length, 0)}
            </span>
          </button>

          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{lang === 'ta' ? cat.title_ta : cat.title_en}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 font-black">
                {cat.services.length}
              </span>
            </button>
          ))}
        </div>

        {/* Categories and Service Cards Grid */}
        <div className="space-y-14">
          {displayedCategories.map((category) => {
            const matchedServices = category.services.filter((s) => {
              if (!filterQuery) return true;
              const q = filterQuery.toLowerCase();
              return (
                s.name_en.toLowerCase().includes(q) ||
                s.name_ta.toLowerCase().includes(q) ||
                s.shortDesc_en.toLowerCase().includes(q) ||
                s.shortDesc_ta.toLowerCase().includes(q) ||
                s.subServices_en.some((sub) => sub.toLowerCase().includes(q)) ||
                s.subServices_ta.some((sub) => sub.toLowerCase().includes(q))
              );
            });

            if (matchedServices.length === 0) return null;

            return (
              <div key={category.id} className="scroll-mt-24">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 mb-6 border-b-2 border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-red-600 text-white rounded-xl shadow-sm">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                        {lang === 'ta' ? category.title_ta : category.title_en}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500">
                        {lang === 'ta' ? category.description_ta : category.description_en}
                      </p>
                    </div>
                  </div>

                  {category.badge && (
                    <span className="hidden sm:inline-block text-xs font-black px-3 py-1 rounded-full bg-red-50 text-red-950 border border-red-200">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Service Cards for this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchedServices.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white hover:bg-slate-50/60 rounded-2xl p-6 border-2 border-slate-200 hover:border-red-500 hover:shadow-xl transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-black px-2.5 py-1 rounded-md bg-red-50 text-red-950 border border-red-200">
                            {lang === 'ta' ? service.tag_ta : service.tag_en}
                          </span>
                          {service.popular && (
                            <span className="text-[11px] font-black px-2.5 py-0.5 rounded-md bg-red-600 text-white shadow-2xs">
                              ★ POPULAR
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg sm:text-xl font-black text-slate-950 mt-1 leading-snug">
                          {lang === 'ta' ? service.name_ta : service.name_en}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed line-clamp-2">
                          {lang === 'ta' ? service.shortDesc_ta : service.shortDesc_en}
                        </p>

                        {/* List of sub-services explicitly offered */}
                        <div className="mt-4 space-y-1.5">
                          <div className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                            {lang === 'ta' ? 'கிடைக்கும் சேவைகள்:' : 'Included Services:'}
                          </div>
                          <ul className="space-y-1">
                            {(lang === 'ta' ? service.subServices_ta : service.subServices_en)
                              .slice(0, 4)
                              .map((sub, i) => (
                                <li key={i} className="text-xs sm:text-sm text-slate-800 font-semibold flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                  <span className="line-clamp-1">{sub}</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectService(service)}
                          className="text-xs sm:text-sm font-black text-slate-950 hover:text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>{lang === 'ta' ? 'விவரம் & ஆவணங்கள்' : 'View Details'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() =>
                            openWhatsApp(
                              lang === 'ta'
                                ? `வணக்கம், எனக்கு ${service.name_ta} விண்ணப்ப உதவி தேவை.`
                                : `Hello, I need application assistance for ${service.name_en}.`
                            )
                          }
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
