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
  ShieldCheck,
  Building,
  GraduationCap,
  HardHat,
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface TopRunningServicesTickerProps {
  onSelectService: (service: ServiceItem) => void;
}

interface QuickMarqueeItem {
  id: string;
  name_ta: string;
  name_en: string;
  tag_ta: string;
  tag_en: string;
  badge: string;
  badgeColor: string;
  iconBg: string;
  icon: React.ReactNode;
}

export const TopRunningServicesTicker: React.FC<TopRunningServicesTickerProps> = ({ onSelectService }) => {
  const { lang, setSelectedService } = useApp();

  const marqueeItems: QuickMarqueeItem[] = [
    {
      id: 'aadhaar',
      name_ta: 'ஆதார் கார்டு சேவைகள்',
      name_en: 'Aadhaar Services & PVC',
      tag_ta: 'முகவரி மாற்றம் • PVC அட்டை',
      tag_en: 'Address Update • PVC Card',
      badge: '100% ONLINE',
      badgeColor: 'bg-blue-500 text-white',
      iconBg: 'bg-blue-600',
      icon: <CreditCard className="w-5 h-5 text-white" />
    },
    {
      id: 'smart-card',
      name_ta: 'ஸ்மார்ட் ரேஷன் கார்டு',
      name_en: 'Smart Ration Card',
      tag_ta: 'புதிய அட்டை • பெயர் நீக்கம்/சேர்ப்பு',
      tag_en: 'New Card • Add/Remove Name',
      badge: 'GOVT SEVAI',
      badgeColor: 'bg-emerald-600 text-white',
      iconBg: 'bg-emerald-600',
      icon: <FileText className="w-5 h-5 text-white" />
    },
    {
      id: 'pan-card',
      name_ta: 'பான் கார்டு உடனடி விண்ணப்பம்',
      name_en: 'Instant PAN Card Apply',
      tag_ta: 'புதியது • ஆதார் இணைப்பு • திருத்தம்',
      tag_en: 'New • Link • Correction',
      badge: 'INSTANT',
      badgeColor: 'bg-amber-500 text-slate-950 font-black',
      iconBg: 'bg-amber-600',
      icon: <FileText className="w-5 h-5 text-white" />
    },
    {
      id: 'voter-id',
      name_ta: 'வாக்காளர் அடையாள அட்டை',
      name_en: 'Voter ID (EPIC Card)',
      tag_ta: 'புதிய பதிவு • முகவரி மாற்றம்',
      tag_en: 'New Form 6 • Correction',
      badge: 'FREE CHECK',
      badgeColor: 'bg-purple-600 text-white',
      iconBg: 'bg-purple-600',
      icon: <CreditCard className="w-5 h-5 text-white" />
    },
    {
      id: 'passport-new-renewal',
      name_ta: 'பாஸ்போர்ட் புதியது & புதுப்பித்தல்',
      name_en: 'Passport Seva Online',
      tag_ta: 'அப்பாயிண்ட்மென்ட் • தட்கால்',
      tag_en: 'Appointment • Tatkal Apply',
      badge: 'FAST TRACK',
      badgeColor: 'bg-sky-600 text-white',
      iconBg: 'bg-sky-600',
      icon: <Plane className="w-5 h-5 text-white" />
    },
    {
      id: 'driving-licence',
      name_ta: 'டிரைவிங் லைசென்ஸ் & LLR',
      name_en: 'Driving Licence & LLR',
      tag_ta: 'ரினீவல் • முகவரி மாற்றம்',
      tag_en: 'Renewal • Address Change',
      badge: 'RTO SEVA',
      badgeColor: 'bg-orange-600 text-white',
      iconBg: 'bg-orange-600',
      icon: <Car className="w-5 h-5 text-white" />
    },
    {
      id: 'patta-chitta-ec',
      name_ta: 'பட்டா / சிட்டா & வில்லங்க சான்று',
      name_en: 'Patta Chitta & EC Online',
      tag_ta: 'நில ஆவணங்கள் • FMB வரைபடம்',
      tag_en: 'Land Records • Encumbrance',
      badge: 'ANYWHERE',
      badgeColor: 'bg-teal-600 text-white',
      iconBg: 'bg-teal-600',
      icon: <Building className="w-5 h-5 text-white" />
    },
    {
      id: 'gst-services',
      name_ta: 'ஜிஎஸ்டி பதிவு & மாத ஃபைலிங்',
      name_en: 'GST Registration & Filing',
      tag_ta: 'மாதாந்திர ரிட்டர்ன் • புதிய பதிவு',
      tag_en: 'Monthly Returns • New GST',
      badge: 'BUSINESS',
      badgeColor: 'bg-indigo-600 text-white',
      iconBg: 'bg-indigo-600',
      icon: <Briefcase className="w-5 h-5 text-white" />
    },
    {
      id: 'pf-services',
      name_ta: 'பிஎஃப் (EPFO) பணம் எடுத்தல்',
      name_en: 'PF / UAN Claim & Advance',
      tag_ta: 'முன் பணம் • KYC இணைப்பு',
      tag_en: 'Online Withdrawal • KYC',
      badge: 'EPFO DIRECT',
      badgeColor: 'bg-rose-600 text-white',
      iconBg: 'bg-rose-600',
      icon: <CheckCircle2 className="w-5 h-5 text-white" />
    },
    {
      id: 'tnpsc-exam',
      name_ta: 'TNPSC & அரசு தேர்வு விண்ணப்பம்',
      name_en: 'Govt Exam & TNPSC Apply',
      tag_ta: 'ஆன்லைன் விண்ணப்பம் • ஹால் டிக்கெட்',
      tag_en: 'Exam Apply • Hall Ticket',
      badge: 'EXAM PORTAL',
      badgeColor: 'bg-emerald-600 text-white',
      iconBg: 'bg-emerald-600',
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      id: 'nalavariyam-welfare',
      name_ta: 'உடலுழைப்பு நலவாரியம் பதிவு',
      name_en: 'Nalavariyam Welfare Card',
      tag_ta: 'கட்டுமான வாரியம் • நலத்திட்டங்கள்',
      tag_en: 'Construction & Auto Board',
      badge: 'TN WELFARE',
      badgeColor: 'bg-amber-600 text-white',
      iconBg: 'bg-amber-600',
      icon: <HardHat className="w-5 h-5 text-white" />
    },
    {
      id: 'temple-darshan',
      name_ta: 'திருப்பதி & சபரிமலை தரிசன டிக்கெட்',
      name_en: 'Temple Darshan & Virtual Q',
      tag_ta: 'ரூ.300 டிக்கெட் • தங்குமிடம் முன்பதிவு',
      tag_en: 'Special Entry • Room Booking',
      badge: 'CONFIRMED',
      badgeColor: 'bg-orange-600 text-white',
      iconBg: 'bg-orange-600',
      icon: <Ticket className="w-5 h-5 text-white" />
    },
    {
      id: 'travel-tickets',
      name_ta: 'ரயில், பஸ் & விமான டிக்கெட்',
      name_en: 'Train, Bus & Flight Booking',
      tag_ta: 'தட்கால் டிக்கெட் • உடனடி முன்பதிவு',
      tag_en: 'Tatkal Tickets • Confirm Booking',
      badge: 'TATKAL 24x7',
      badgeColor: 'bg-blue-600 text-white',
      iconBg: 'bg-blue-600',
      icon: <Plane className="w-5 h-5 text-white" />
    },
    {
      id: 'pvc-id-cards',
      name_ta: 'PVC பிளாஸ்டிக் அடையாள அட்டை',
      name_en: 'Original Synthetic PVC Cards',
      tag_ta: 'மங்காத வாட்டர்ப்ரூப் பிரிண்டிங்',
      tag_en: 'Waterproof High-Def Print',
      badge: 'HD PRINT',
      badgeColor: 'bg-slate-900 text-amber-400',
      iconBg: 'bg-slate-800',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    }
  ];

  // Duplicate list to create a seamless infinite marquee loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full bg-slate-50 border-b border-slate-200 overflow-hidden py-3 shadow-2xs z-20">
      {/* Subtle Header Tag */}
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
          <span className="text-xs font-black text-red-700 uppercase tracking-wider">
            {lang === 'ta' ? 'அனைத்து டிஜிட்டல் சேவைகள் நேரடி வழிகாட்டி' : 'LIVE DIGITAL SERVICES & ONLINE APPLICATIONS'}
          </span>
        </div>
        <span className="hidden md:inline-block text-[11px] font-bold text-slate-500">
          {lang === 'ta' ? 'விவரங்களை அறிய கார்டை கிளிக் செய்யவும் ➔' : 'Click any service to view documents ➔'}
        </span>
      </div>

      {/* Infinite Horizontal Running Marquee Track */}
      <div className="relative flex overflow-x-hidden group">
        {/* Left & Right Gradient Shadows for seamless scroll effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 items-center gap-3 animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => {
                // Find service if available
                setSelectedService({
                  id: item.id,
                  categoryId: 'all',
                  name_en: item.name_en,
                  name_ta: item.name_ta,
                  tag_en: item.tag_en,
                  tag_ta: item.tag_ta,
                  shortDesc_en: `${item.name_en} - Online application and documentation assistance.`,
                  shortDesc_ta: `${item.name_ta} - நேரடி மற்றும் வாட்ஸ்அப் ஆன்லைன் விண்ணப்ப உதவி.`,
                  subServices_en: [item.name_en, 'Document Verification', 'Portal Submission', 'Doorstep WhatsApp Support'],
                  subServices_ta: [item.name_ta, 'ஆவண சரிபார்ப்பு', 'இணையதள பதிவு', 'வாட்ஸ்அப் உதவி'],
                  requiredDocuments_en: ['Aadhaar Card', 'Mobile Number for OTP', 'Supporting Proofs'],
                  requiredDocuments_ta: ['ஆதார் அட்டை', 'மொபைல் எண்', 'தேவையான ஆதாரங்கள்'],
                  processingTime_en: '1 - 3 Days',
                  processingTime_ta: '1 - 3 நாட்கள்'
                });
              }}
              className="flex items-center gap-3.5 px-4.5 py-3 rounded-2xl bg-white hover:bg-red-50/70 border-2 border-slate-300 hover:border-red-500 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 shrink-0 group/item"
              style={{ minWidth: '280px' }}
            >
              {/* Service Animated Visual Icon / Badge */}
              <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform`}>
                {item.icon}
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-black text-slate-950 truncate group-hover/item:text-red-600 transition-colors">
                  {lang === 'ta' ? item.name_ta : item.name_en}
                </h4>
                <p className="text-xs font-bold text-slate-600 truncate">
                  {lang === 'ta' ? item.tag_ta : item.tag_en}
                </p>
              </div>

              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover/item:text-red-600 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
