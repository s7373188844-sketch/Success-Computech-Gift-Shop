import React from 'react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';
import {
  CreditCard,
  FileText,
  Plane,
  Car,
  Briefcase,
  Ticket,
  GraduationCap,
  HardHat,
  Sparkles,
  Building,
  CheckCircle2,
  PhoneCall,
  Clock
} from 'lucide-react';

interface SideAnimatedServicesRailsProps {
  onSelectService: (service: ServiceItem) => void;
}

export const SideAnimatedServicesRails: React.FC<SideAnimatedServicesRailsProps> = ({ onSelectService }) => {
  const { lang, setSelectedService } = useApp();

  const leftServices = [
    {
      id: 'aadhaar',
      name_ta: 'ஆதார் கார்டு',
      name_en: 'Aadhaar Card',
      desc_ta: 'முகவரி & PVC அட்டை',
      desc_en: 'Update & Original PVC',
      badge: '100% ONLINE',
      color: 'border-l-4 border-l-blue-600 bg-white/95',
      icon: <CreditCard className="w-4 h-4 text-blue-600" />
    },
    {
      id: 'smart-card',
      name_ta: 'ஸ்மார்ட் ரேஷன்',
      name_en: 'Smart Ration Card',
      desc_ta: 'குடும்ப அட்டை மாற்றம்',
      desc_en: 'Family Card Services',
      badge: 'TN GOVT',
      color: 'border-l-4 border-l-emerald-600 bg-white/95',
      icon: <FileText className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'pan-card',
      name_ta: 'பான் கார்டு',
      name_en: 'PAN Card Apply',
      desc_ta: 'உடனடி இ-பான் & புதியது',
      desc_en: 'Instant e-PAN & Correction',
      badge: 'INSTANT',
      color: 'border-l-4 border-l-amber-600 bg-white/95',
      icon: <FileText className="w-4 h-4 text-amber-600" />
    },
    {
      id: 'passport-new-renewal',
      name_ta: 'பாஸ்போர்ட்',
      name_en: 'Passport Seva',
      desc_ta: 'புதியது & ரினீவல் தட்கால்',
      desc_en: 'Tatkal & Appointment',
      badge: 'APPOINTMENT',
      color: 'border-l-4 border-l-sky-600 bg-white/95',
      icon: <Plane className="w-4 h-4 text-sky-600" />
    },
    {
      id: 'patta-chitta-ec',
      name_ta: 'பட்டா / சிட்டா & EC',
      name_en: 'Patta Chitta & EC',
      desc_ta: 'வில்லங்க சான்று நகல்',
      desc_en: 'Land Records & FMB',
      badge: 'REVENUE',
      color: 'border-l-4 border-l-teal-600 bg-white/95',
      icon: <Building className="w-4 h-4 text-teal-600" />
    }
  ];

  const rightServices = [
    {
      id: 'driving-licence',
      name_ta: 'டிரைவிங் லைசென்ஸ்',
      name_en: 'Driving Licence',
      desc_ta: 'LLR & புதுப்பித்தல்',
      desc_en: 'LLR & Renewal Online',
      badge: 'RTO PORTAL',
      color: 'border-r-4 border-r-orange-600 bg-white/95',
      icon: <Car className="w-4 h-4 text-orange-600" />
    },
    {
      id: 'gst-services',
      name_ta: 'ஜிஎஸ்டி & வரி',
      name_en: 'GST & Income Tax',
      desc_ta: 'மாதாந்திர ரிட்டர்ன்',
      desc_en: 'Monthly Returns & Filing',
      badge: 'BUSINESS',
      color: 'border-r-4 border-r-purple-600 bg-white/95',
      icon: <Briefcase className="w-4 h-4 text-purple-600" />
    },
    {
      id: 'pf-services',
      name_ta: 'பிஎஃப் (EPFO) பணம்',
      name_en: 'PF / UAN Claim',
      desc_ta: 'முன்பணம் & KYC',
      desc_en: 'Online Withdrawal',
      badge: 'EPFO DIRECT',
      color: 'border-r-4 border-r-rose-600 bg-white/95',
      icon: <CheckCircle2 className="w-4 h-4 text-rose-600" />
    },
    {
      id: 'tnpsc-exam',
      name_ta: 'அரசு தேர்வு பதிவு',
      name_en: 'Govt Exam Apply',
      desc_ta: 'TNPSC, SSC, RRB',
      desc_en: 'Hall Ticket & Photo Fix',
      badge: 'EXAM ALERT',
      color: 'border-r-4 border-r-emerald-600 bg-white/95',
      icon: <GraduationCap className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'temple-darshan',
      name_ta: 'கோயில் தரிசனம்',
      name_en: 'Temple Darshan',
      desc_ta: 'திருப்பதி & சபரிமலை',
      desc_en: 'Special Entry & Tokens',
      badge: 'CONFIRMED',
      color: 'border-r-4 border-r-amber-600 bg-white/95',
      icon: <Ticket className="w-4 h-4 text-amber-600" />
    }
  ];

  const handleItemClick = (item: typeof leftServices[0]) => {
    setSelectedService({
      id: item.id,
      categoryId: 'all',
      name_en: item.name_en,
      name_ta: item.name_ta,
      tag_en: item.desc_en,
      tag_ta: item.desc_ta,
      shortDesc_en: `${item.name_en} - Online processing assistance at Success Computech.`,
      shortDesc_ta: `${item.name_ta} - நேரடி மற்றும் வாட்ஸ்அப் விண்ணப்ப உதவி.`,
      subServices_en: [item.name_en, 'Documentation Verification', 'Online Portal Filing', 'Official Receipt'],
      subServices_ta: [item.name_ta, 'ஆவண சரிபார்ப்பு', 'இணையதள பதிவு', 'அரசு ரசீது'],
      requiredDocuments_en: ['Aadhaar Card', 'Registered Mobile Number', 'Relevant ID/Property documents'],
      requiredDocuments_ta: ['ஆதார் கார்டு', 'மொபைல் எண்', 'சம்பந்தப்பட்ட ஆவணங்கள்'],
      processingTime_en: '1 - 3 Days',
      processingTime_ta: '1 - 3 நாட்கள்'
    });
  };

  const duplicatedLeft = [...leftServices, ...leftServices];
  const duplicatedRight = [...rightServices, ...rightServices];

  return (
    <>
      {/* Left Vertical Animated Running Rails (Visible on desktop xl+ screens) */}
      <aside aria-label="Left Quick Services" className="hidden xl:flex fixed left-2 2xl:left-4 top-36 z-30 flex-col gap-2 w-48 2xl:w-52 pointer-events-auto select-none">
        <div className="px-2.5 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-800 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-xl border border-slate-300 shadow-md">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{lang === 'ta' ? 'அதிவேக சேவைகள்' : 'POPULAR SERVICES'}</span>
          </div>
          <span className="text-[9px] font-bold text-orange-600">▲ RUNNING</span>
        </div>

        {/* Continuous Gliding Track with Top/Bottom Gradient Fade */}
        <div className="relative h-[480px] 2xl:h-[540px] overflow-hidden rounded-2xl group">
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-2.5 animate-marquee-up group-hover:[animation-play-state:paused]">
            {duplicatedLeft.map((srv, idx) => (
              <div
                key={`left-${srv.id}-${idx}`}
                onClick={() => handleItemClick(srv)}
                className={`${srv.color} p-2.5 rounded-xl border-2 border-slate-200 hover:border-orange-500 shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 hover:scale-102 group/card backdrop-blur-md`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 shadow-2xs group-hover/card:scale-110 transition-transform">
                      {srv.icon}
                    </div>
                    <span className="text-xs font-black text-slate-900 group-hover/card:text-orange-600 transition-colors">
                      {lang === 'ta' ? srv.name_ta : srv.name_en}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] font-bold text-slate-600 line-clamp-1">
                    {lang === 'ta' ? srv.desc_ta : srv.desc_en}
                  </span>
                  <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                    {srv.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Right Vertical Animated Running Rails (Visible on desktop xl+ screens) */}
      <aside aria-label="Right Quick Services" className="hidden xl:flex fixed right-2 2xl:right-4 top-36 z-30 flex-col gap-2 w-48 2xl:w-52 pointer-events-auto select-none text-right">
        <div className="px-2.5 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-800 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-xl border border-slate-300 shadow-md">
          <span className="text-[9px] font-bold text-emerald-600">▼ LIVE</span>
          <div className="flex items-center gap-1.5">
            <span>{lang === 'ta' ? 'ஆன்லைன் அப்ளை' : 'ONLINE SEVA'}</span>
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          </div>
        </div>

        {/* Continuous Gliding Track with Top/Bottom Gradient Fade */}
        <div className="relative h-[480px] 2xl:h-[540px] overflow-hidden rounded-2xl group">
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-2.5 animate-marquee-down group-hover:[animation-play-state:paused]">
            {duplicatedRight.map((srv, idx) => (
              <div
                key={`right-${srv.id}-${idx}`}
                onClick={() => handleItemClick(srv)}
                className={`${srv.color} p-2.5 rounded-xl border-2 border-slate-200 hover:border-orange-500 shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 hover:scale-102 group/card backdrop-blur-md`}
              >
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-xs font-black text-slate-900 group-hover/card:text-orange-600 transition-colors">
                    {lang === 'ta' ? srv.name_ta : srv.name_en}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 shadow-2xs group-hover/card:scale-110 transition-transform">
                    {srv.icon}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 shrink-0">
                    {srv.badge}
                  </span>
                  <span className="text-[10px] font-bold text-slate-600 line-clamp-1">
                    {lang === 'ta' ? srv.desc_ta : srv.desc_en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

