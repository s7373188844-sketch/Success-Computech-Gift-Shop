import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Minimize2,
  Maximize2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  CreditCard,
  FileCheck2,
  Gift,
  ArrowRight,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShowcaseItem {
  id: string;
  category: string;
  name_en: string;
  name_ta: string;
  subtitle_en: string;
  subtitle_ta: string;
  turnaround_en: string;
  turnaround_ta: string;
  badge_en: string;
  badge_ta: string;
  accentColor: string;
  tagline: string;
  renderCard: () => React.ReactNode;
}

export const RightFixedServiceShowcase: React.FC = () => {
  const { lang, openWhatsApp } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Showcase Items: Aadhaar, PAN Card, Voter ID, Passport, Driving Licence, Smart Ration, Custom Mug/Gift, e-Sevai Certificate
  const items: ShowcaseItem[] = [
    // 1. Aadhaar Card
    {
      id: 'aadhaar-card',
      category: 'UIDAI',
      name_en: 'Aadhaar Smart Card',
      name_ta: 'ஆதார் ஸ்மார்ட் கார்டு',
      subtitle_en: 'PVC Print • Address Update • Mobile Link',
      subtitle_ta: 'அசல் PVC அட்டை • முகவரி மாற்றம்',
      turnaround_en: '10 Mins PVC Print',
      turnaround_ta: '10 நிமிடத்தில் PVC கார்டு',
      badge_en: 'Most Popular',
      badge_ta: 'அதிக தேவை',
      accentColor: 'from-amber-600 to-red-600',
      tagline: 'Mera Aadhaar, Meri Pehchaan',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-emerald-50 border-2 border-slate-300 p-3 shadow-md relative flex flex-col justify-between overflow-hidden">
          {/* Top Tricolor Band */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-white to-emerald-600" />
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mt-0.5">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-[9px] shadow-xs">
                UID
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-900 leading-tight">GOVERNMENT OF INDIA</p>
                <p className="text-[8px] font-bold text-red-700 leading-none">இந்திய தனித்துவ அடையாள ஆணையம்</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-md bg-amber-100 border border-amber-300 flex items-center justify-center">
              <span className="text-[9px] font-bold text-amber-800">PVC</span>
            </div>
          </div>

          {/* Body: Photo, Info & QR */}
          <div className="flex items-center gap-3 my-auto">
            {/* Photo Box */}
            <div className="w-14 h-16 rounded-lg bg-slate-200 border-2 border-slate-400/80 flex flex-col items-center justify-center relative overflow-hidden shadow-inner shrink-0">
              <div className="w-6 h-6 rounded-full bg-slate-400 mb-1" />
              <div className="w-10 h-5 rounded-t-full bg-slate-400" />
              <div className="absolute bottom-0 inset-x-0 bg-emerald-600/90 text-[7px] text-white text-center font-black py-0.5">
                VERIFIED
              </div>
            </div>

            {/* Info details */}
            <div className="flex-1 min-w-0 space-y-0.5">
              <p className="text-[9px] text-slate-500 font-bold leading-none">பெயர் / Name</p>
              <p className="text-[11px] font-black text-slate-900 truncate">CITIZEN NAME</p>
              <p className="text-[8px] text-slate-600 font-bold">பிறந்த தேதி / DOB: 01/01/1995</p>
              <p className="text-[8px] text-slate-600 font-bold">பாலினம் / Gender: MALE / FEMALE</p>
            </div>

            {/* QR Code graphic */}
            <div className="w-12 h-12 rounded-lg bg-slate-950 p-1 flex flex-col items-center justify-center shrink-0 shadow-xs">
              <div className="grid grid-cols-3 gap-0.5 w-full h-full p-0.5 bg-white rounded">
                <div className="bg-slate-950 rounded-xs" />
                <div className="bg-white" />
                <div className="bg-slate-950 rounded-xs" />
                <div className="bg-white" />
                <div className="bg-slate-950" />
                <div className="bg-white" />
                <div className="bg-slate-950 rounded-xs" />
                <div className="bg-white" />
                <div className="bg-slate-950 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Aadhaar Number */}
          <div className="text-center pt-1 border-t border-slate-200 bg-white/70 -mx-3 -mb-3 px-3 py-1 rounded-b-xl">
            <span className="text-xs font-mono font-black tracking-widest text-slate-950">
              XXXX  XXXX  8844
            </span>
          </div>
        </div>
      )
    },

    // 2. PAN Card
    {
      id: 'pan-card',
      category: 'NSDL / UTI',
      name_en: 'PAN Card Service',
      name_ta: 'பான் கார்டு சேவை',
      subtitle_en: 'New PAN • Name Correction • Instant e-PAN',
      subtitle_ta: 'புதியது • திருத்தம் • 2 மணி நேர இ-பான்',
      turnaround_en: '2 Hours e-PAN',
      turnaround_ta: '2 மணி நேரத்தில் இ-பான்',
      badge_en: 'Instant Approval',
      badge_ta: 'உடனடி ஒப்புதல்',
      accentColor: 'from-blue-700 to-indigo-700',
      tagline: 'Income Tax Department, Govt of India',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-sky-100 via-white to-blue-50 border-2 border-blue-300 p-3 shadow-md relative flex flex-col justify-between overflow-hidden">
          {/* Header Bar */}
          <div className="bg-blue-800 -mx-3 -mt-3 px-3 py-1.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-[7px] text-blue-950 font-black">
                IN
              </div>
              <span className="text-[9px] font-black tracking-wide">INCOME TAX DEPARTMENT</span>
            </div>
            <span className="text-[8px] font-bold text-blue-200">GOVT. OF INDIA</span>
          </div>

          {/* Card Body */}
          <div className="flex items-center gap-3 my-1">
            {/* Photo */}
            <div className="w-14 h-16 rounded-md bg-slate-200 border border-slate-400 flex flex-col items-center justify-center shrink-0 relative overflow-hidden">
              <div className="w-5 h-5 rounded-full bg-slate-400 mb-1" />
              <div className="w-9 h-5 rounded-t-full bg-slate-400" />
            </div>

            {/* Info details */}
            <div className="flex-1 min-w-0 space-y-1">
              <div>
                <p className="text-[7px] text-slate-500 font-bold uppercase">Name / பெயர்</p>
                <p className="text-[10px] font-black text-slate-900 truncate">KUMAR S</p>
              </div>
              <div>
                <p className="text-[7px] text-slate-500 font-bold uppercase">Father's Name / தந்தை பெயர்</p>
                <p className="text-[9px] font-bold text-slate-800 truncate">SELVAM M</p>
              </div>
              <p className="text-[8px] font-bold text-slate-600">DOB: 15/08/1992</p>
            </div>

            {/* Hologram / QR */}
            <div className="w-11 h-11 rounded-md bg-gradient-to-tr from-amber-400 via-amber-200 to-yellow-500 border border-amber-600 p-1 flex items-center justify-center text-center shadow-xs">
              <span className="text-[7px] font-black text-amber-950 uppercase leading-tight">
                GOVT SEAL
              </span>
            </div>
          </div>

          {/* PAN Number & Signature Box */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-1">
            <div>
              <span className="text-[7px] font-black text-slate-500 uppercase block">PAN NUMBER</span>
              <span className="text-xs font-mono font-black text-blue-900 tracking-wider">
                ABCPS8844K
              </span>
            </div>
            <div className="px-2 py-0.5 rounded bg-white border border-slate-300">
              <span className="text-[8px] font-serif italic text-slate-600">Signature</span>
            </div>
          </div>
        </div>
      )
    },

    // 3. Voter ID Card
    {
      id: 'voter-id',
      category: 'ECI',
      name_en: 'Voter ID (EPIC Card)',
      name_ta: 'வாக்காளர் அடையாள அட்டை',
      subtitle_en: 'New Registration • Address Shift • Smart PVC',
      subtitle_ta: 'புதிய பதிவு • முகவரி மாற்றம் • PVC அட்டை',
      turnaround_en: 'Same Day Dispatch',
      turnaround_ta: 'விரைவான சேவை',
      badge_en: 'Digital PVC',
      badge_ta: 'டிஜிட்டல் PVC',
      accentColor: 'from-emerald-700 to-teal-800',
      tagline: 'Election Commission of India',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-red-50 via-white to-slate-50 border-2 border-slate-300 p-3 shadow-md relative flex flex-col justify-between overflow-hidden">
          {/* Header with Tricolor accent */}
          <div className="border-b-2 border-red-600 pb-1 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-red-600 text-white font-black text-[8px] flex items-center justify-center">
                ECI
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-900 leading-tight">ELECTION COMMISSION OF INDIA</p>
                <p className="text-[7px] font-bold text-red-600 leading-none">இந்திய தேர்தல் ஆணையம்</p>
              </div>
            </div>
            <span className="text-[8px] font-mono font-black text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
              TN/112/8844
            </span>
          </div>

          {/* Center Details */}
          <div className="flex items-center gap-3 my-auto">
            <div className="w-14 h-16 rounded-lg bg-slate-100 border-2 border-red-200 flex flex-col items-center justify-center shrink-0 shadow-inner">
              <div className="w-5 h-5 rounded-full bg-slate-400 mb-1" />
              <div className="w-9 h-5 rounded-t-full bg-slate-400" />
            </div>

            <div className="flex-1 min-w-0 space-y-0.5">
              <p className="text-[7px] text-slate-400 font-bold uppercase">Elector Name / வாக்காளர் பெயர்</p>
              <p className="text-[11px] font-black text-slate-900 truncate">MUTHUKUMAR R</p>
              <p className="text-[8px] text-slate-600 font-bold">தந்தை பெயர்: RAMASAMY</p>
              <p className="text-[8px] text-slate-600 font-bold">தொகுதி / AC: 112 - TIRUPPUR</p>
            </div>
          </div>

          {/* Footer Barcode & EPIC Number */}
          <div className="bg-slate-100 -mx-3 -mb-3 px-3 py-1 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-8 h-3 bg-slate-900 rounded-2xs flex items-center justify-around px-0.5">
                <span className="w-0.5 h-2 bg-white" />
                <span className="w-0.5 h-2 bg-white" />
                <span className="w-0.5 h-2 bg-white" />
              </div>
              <span className="text-[7px] font-bold text-slate-600">SMART PVC</span>
            </div>
            <span className="text-[10px] font-mono font-black text-slate-900 tracking-wider">
              ABC 9482716
            </span>
          </div>
        </div>
      )
    },

    // 4. Passport Service
    {
      id: 'passport-service',
      category: 'Passport Seva',
      name_en: 'Passport Application',
      name_ta: 'பாஸ்போர்ட் பதிவு & அப்பாயின்ட்மென்ட்',
      subtitle_en: 'Fresh • Renewal • Tatkal • PSK Slot Booking',
      subtitle_ta: 'புதியது • புதுப்பித்தல் • தட்கல் • PSK ஸ்லாட்',
      turnaround_en: 'Fast PSK Appointment',
      turnaround_ta: 'விரைவான PSK அப்பாயின்ட்மென்ட்',
      badge_en: 'Govt Authorized',
      badge_ta: 'அரசு சேவை',
      accentColor: 'from-slate-900 to-blue-950',
      tagline: 'Republic of India / பாஸ்போர்ட்',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-[#0b1b36] via-[#12284c] to-[#081326] border-2 border-amber-400/40 p-3 shadow-md relative flex flex-col justify-between overflow-hidden text-amber-200">
          {/* Passport Cover Header */}
          <div className="text-center space-y-0.5">
            <p className="text-[8px] tracking-[0.25em] font-black uppercase text-amber-300">
              PASSPORT
            </p>
            <p className="text-[7px] tracking-wider text-amber-200/80 font-bold">
              பாஸ்போர்ட் • REPUBLIQUE DE L'INDE
            </p>
          </div>

          {/* National Emblem Gold Silhouette */}
          <div className="my-auto flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-amber-400/50 bg-amber-400/10 flex flex-col items-center justify-center text-center shadow-inner">
              <span className="text-lg font-serif font-black text-amber-300 leading-none"> सत्य </span>
              <span className="text-[6px] tracking-widest text-amber-200 font-bold mt-0.5">INDIA</span>
            </div>
            <p className="text-[9px] font-serif tracking-widest text-amber-300 font-black mt-1 uppercase">
              REPUBLIC OF INDIA
            </p>
          </div>

          {/* Biometric Chip Icon & Bottom Strip */}
          <div className="flex items-center justify-between border-t border-amber-400/20 pt-1.5 mt-1 text-[8px]">
            <div className="flex items-center gap-1 text-amber-300 font-bold">
              <span className="w-2.5 h-1.5 border border-amber-400 rounded-xs inline-block" />
              <span>BIOMETRIC e-PASSPORT</span>
            </div>
            <span className="text-amber-200 font-mono font-bold">PSK COIMBATORE</span>
          </div>
        </div>
      )
    },

    // 5. Driving Licence & Smart RC
    {
      id: 'driving-licence',
      category: 'Transport Dept',
      name_en: 'Driving Licence & RC',
      name_ta: 'டிரைவிங் லைசென்ஸ் & RC',
      subtitle_en: 'LLR • DL Renewal • Address Change • Smart Card',
      subtitle_ta: 'LLR • புதுப்பித்தல் • ஸ்மார்ட் கார்டு பிரிண்ட்',
      turnaround_en: 'Instant Token / Booking',
      turnaround_ta: 'உடனடி ஸ்லாட் புக்கிங்',
      badge_en: 'Smart Chip DL',
      badge_ta: 'ஸ்மார்ட் சிப் DL',
      accentColor: 'from-emerald-600 to-teal-700',
      tagline: 'Tamil Nadu Transport Department',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-slate-50 border-2 border-emerald-300 p-3 shadow-md relative flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-700 -mx-3 -mt-3 px-3 py-1.5 text-white flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black leading-tight">TAMIL NADU MOTOR VEHICLES DEPT</p>
              <p className="text-[7px] text-emerald-200 font-bold leading-none">சாரதி • DRIVING LICENCE</p>
            </div>
            <span className="text-[8px] font-mono font-black bg-white text-emerald-800 px-1.5 py-0.5 rounded">
              TN-39
            </span>
          </div>

          {/* Details */}
          <div className="flex items-center gap-3 my-auto">
            <div className="w-14 h-16 rounded-lg bg-slate-100 border border-slate-300 flex flex-col items-center justify-center shrink-0 relative">
              {/* Gold Microchip icon */}
              <div className="absolute -top-1 -right-1 w-4 h-3 bg-amber-400 border border-amber-600 rounded-xs shadow-2xs" />
              <div className="w-5 h-5 rounded-full bg-slate-400 mb-1" />
              <div className="w-9 h-5 rounded-t-full bg-slate-400" />
            </div>

            <div className="flex-1 min-w-0 space-y-0.5">
              <p className="text-[7px] text-slate-500 font-bold uppercase">LICENCE NUMBER</p>
              <p className="text-[10px] font-mono font-black text-slate-900 truncate">TN39 20240008844</p>
              <p className="text-[8px] text-slate-700 font-bold">COV: MCWG, LMV-NT</p>
              <p className="text-[7px] text-slate-500">Valid Till: 15/09/2044</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-1 flex items-center justify-between text-[8px] font-bold text-slate-600">
            <span>ISSUING AUTH: RTO TIRUPPUR</span>
            <span className="text-emerald-700 font-black">ORIGINAL PVC</span>
          </div>
        </div>
      )
    },

    // 6. Smart Ration Card
    {
      id: 'smart-ration-card',
      category: 'TNePDS',
      name_en: 'Smart Family Ration Card',
      name_ta: 'ஸ்மார்ட் குடும்ப அட்டை',
      subtitle_en: 'New Family Card • Member Add/Delete • Address',
      subtitle_ta: 'புதிய அட்டை • உறுப்பினர் சேர்க்கை / நீக்கம்',
      turnaround_en: 'Quick Govt Approval',
      turnaround_ta: 'விரைவான அரசு ஒப்புதல்',
      badge_en: 'TNePDS Portal',
      badge_ta: 'TNePDS தளம்',
      accentColor: 'from-red-600 to-amber-600',
      tagline: 'Tamil Nadu Civil Supplies Corporation',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-red-50 border-2 border-red-200 p-3 shadow-md relative flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="border-b border-red-200 pb-1 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-red-600 text-white font-black text-[8px] flex items-center justify-center">
                TN
              </div>
              <div>
                <p className="text-[9px] font-black text-red-900 leading-tight">தமிழ்நாடு அரசு • SMART CARD</p>
                <p className="text-[7px] text-slate-600 font-bold leading-none">உணவுப்பொருள் வழங்கல் துறை</p>
              </div>
            </div>
            <span className="text-[8px] font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded">
              PHH / NPHH
            </span>
          </div>

          {/* Details */}
          <div className="flex items-center gap-3 my-auto">
            <div className="w-14 h-16 rounded-lg bg-slate-100 border border-slate-300 flex flex-col items-center justify-center shrink-0">
              <div className="w-5 h-5 rounded-full bg-slate-400 mb-1" />
              <div className="w-9 h-5 rounded-t-full bg-slate-400" />
            </div>

            <div className="flex-1 min-w-0 space-y-0.5">
              <p className="text-[7px] text-slate-500 font-bold uppercase">குடும்பத் தலைவர் / HEAD</p>
              <p className="text-[11px] font-black text-slate-900 truncate">LAKSHMI S</p>
              <p className="text-[8px] text-slate-700 font-bold">உறுப்பினர்கள்: 4 நபர்கள்</p>
              <p className="text-[7px] text-slate-500">கடை எண்: 33-04-001</p>
            </div>
          </div>

          {/* Smart Card Number */}
          <div className="bg-red-50 -mx-3 -mb-3 px-3 py-1 border-t border-red-200 flex items-center justify-between">
            <span className="text-[8px] font-bold text-red-800">UFC CODE: 33048844001</span>
            <span className="text-[9px] font-mono font-black text-red-950">ORIGINAL PVC CARD</span>
          </div>
        </div>
      )
    },

    // 7. Custom Photo Mug & Personalized Gift
    {
      id: 'custom-photo-mug',
      category: 'Gifts & Prints',
      name_en: 'Personalized Photo Mug & Gifts',
      name_ta: 'பிரத்யேக புகைப்பட மக் & பரிசுகள்',
      subtitle_en: 'Magic Color Changing • HD Sublimation Ceramic',
      subtitle_ta: 'மேஜிக் மக் • புகைப்பட பிரேம்கள் • டி-சர்ட்',
      turnaround_en: 'Ready in 2–4 Hours',
      turnaround_ta: '2-4 மணி நேரத்தில் தயார்',
      badge_en: 'Hot Gift',
      badge_ta: 'சூப்பர் கிஃப்ட்',
      accentColor: 'from-pink-600 to-red-600',
      tagline: 'Ideas, Prints, Gifts for a Better Tomorrow',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-red-50 via-white to-pink-50 border-2 border-red-300 p-3 shadow-md relative flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-red-100 pb-1">
            <div className="flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-red-600" />
              <span className="text-[10px] font-black text-slate-900">SUCCESS GIFT STUDIO</span>
            </div>
            <span className="text-[8px] font-black text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">
              HD PRINT
            </span>
          </div>

          {/* Visual Mug & Frame Representation */}
          <div className="flex items-center justify-around my-auto">
            {/* Sublimation Mug visual */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-b-2xl rounded-t-sm bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white shadow-md flex items-center justify-center border-2 border-red-400 relative">
                {/* Photo inset on mug */}
                <div className="w-10 h-10 rounded-md bg-white p-0.5 shadow-xs flex flex-col items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-red-200" />
                  <span className="text-[5px] font-black text-red-800 mt-0.5">YOUR PHOTO</span>
                </div>
                {/* Mug Handle */}
                <div className="absolute -right-3 top-2 w-3.5 h-8 border-2 border-red-500 rounded-r-lg" />
              </div>
              <span className="text-[7px] font-black text-slate-700 mt-1">MAGIC MUG</span>
            </div>

            {/* Acrylic Frame visual */}
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-16 rounded-lg bg-gradient-to-tr from-amber-100 to-yellow-50 border-2 border-amber-400 p-1 shadow-md flex flex-col items-center justify-between">
                <div className="w-full h-8 bg-red-100 rounded flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-[6px] font-black text-amber-900">ACRYLIC FRAME</span>
              </div>
              <span className="text-[7px] font-black text-slate-700 mt-1">PHOTO COLLAGE</span>
            </div>
          </div>

          {/* Bottom tag */}
          <div className="bg-red-600 text-white -mx-3 -mb-3 px-3 py-1 flex items-center justify-between text-[8px] font-black">
            <span>BIRTHDAYS • WEDDINGS • CORPORATE</span>
            <span>WHATSAPP ORDER</span>
          </div>
        </div>
      )
    },

    // 8. TNeGA Govt Certificate
    {
      id: 'govt-certificates',
      category: 'e-Sevai (TNeGA)',
      name_en: 'Government Certificates',
      name_ta: 'வருமானம் & சாதி சான்றிதழ்',
      subtitle_en: 'Community • Income • Nativity • First Graduate',
      subtitle_ta: 'இருப்பிடம் • முதல் பட்டதாரி • வாரிசு சான்றிதழ்',
      turnaround_en: 'Govt Portal Official Receipt',
      turnaround_ta: 'உடனடி அரசு ஒப்புதல் ரசீது',
      badge_en: 'Official TNeGA',
      badge_ta: 'அரசு இ-சேவை',
      accentColor: 'from-red-600 to-rose-700',
      tagline: 'Revenue Department, Government of Tamil Nadu',
      renderCard: () => (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-orange-50 border-2 border-amber-300 p-3 shadow-md relative flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="text-center border-b border-amber-200 pb-1">
            <p className="text-[9px] font-serif font-black text-red-950 uppercase tracking-wide">
              GOVERNMENT OF TAMIL NADU
            </p>
            <p className="text-[7px] font-bold text-red-700">
              வருவாய்த்துறை • REVENUE DEPARTMENT CERTIFICATE
            </p>
          </div>

          {/* Certificate Body */}
          <div className="space-y-1 my-auto px-1">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono font-bold text-slate-600">CAN No: 133048844001</span>
              <span className="text-[7px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                DIGITALLY SIGNED
              </span>
            </div>
            <div className="p-1.5 bg-white rounded border border-amber-200 text-center">
              <p className="text-[9px] font-black text-slate-900">
                INCOME / COMMUNITY / NATIVITY CERTIFICATE
              </p>
              <p className="text-[7px] text-slate-600 font-medium mt-0.5">
                Issued with valid QR verification code for Govt colleges & schemes
              </p>
            </div>
          </div>

          {/* Digital Seal */}
          <div className="flex items-center justify-between border-t border-amber-200 pt-1 text-[8px] font-bold text-slate-700">
            <div className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>TNeGA Certified</span>
            </div>
            <span className="font-mono text-slate-900 font-black">REV-2024-8844</span>
          </div>
        </div>
      )
    }
  ];

  // Auto slide effect
  useEffect(() => {
    if (isPaused || isMinimized) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, isMinimized, items.length]);

  const currentItem = items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleOrderCurrent = () => {
    const title = lang === 'ta' ? currentItem.name_ta : currentItem.name_en;
    const msg = lang === 'ta'
      ? `வணக்கம் Success Computech! எனக்கு உங்கள் ரைட்-சைடு ஷோகேஸில் உள்ள "${title}" (ID: ${currentItem.id}) சேவை தேவை. இதன் ஆவணங்கள் மற்றும் கட்டண விவரங்களை கூறவும்.`
      : `Hello Success Computech! I saw "${title}" (ID: ${currentItem.id}) on your showcase card. Please share the required documents, price, and turnaround details.`;
    openWhatsApp(msg);
  };

  return (
    <>
      {/* Desktop Fixed Area on Right Side */}
      <aside
        aria-label="Popular Services Live Showcase"
        className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end pointer-events-none select-none"
      >
        {/* If Minimized: Show stylish floating pill that expands on click */}
        {isMinimized ? (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => setIsMinimized(false)}
            className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-red-600 text-white shadow-2xl hover:bg-red-700 border-2 border-white transition-all hover:scale-105 active:scale-95 cursor-pointer group"
            title="Open Service Showcase"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <CreditCard className="w-5 h-5 text-white" />
            <div className="text-left">
              <p className="text-xs font-black tracking-wide leading-none">
                {lang === 'ta' ? 'சேவை அட்டைகள்' : 'Live Showcase'}
              </p>
              <p className="text-[10px] text-red-200 font-bold leading-tight mt-0.5">
                {currentIndex + 1} / {items.length} {currentItem.category}
              </p>
            </div>
            <Maximize2 className="w-4 h-4 text-white/80 group-hover:text-white" />
          </motion.button>
        ) : (
          /* Full Attractive Showcase Box */
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="pointer-events-auto w-80 bg-white/95 backdrop-blur-md rounded-3xl border-2 border-red-500 shadow-2xl shadow-red-950/20 p-4 relative overflow-hidden transition-all duration-300 hover:shadow-red-900/30"
          >
            {/* Top Header Controls Bar */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="text-[11px] font-black tracking-wider text-red-700 uppercase flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-red-600" />
                  {lang === 'ta' ? 'பிரபல சேவைகள்' : 'TOP SERVICES'}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 px-1.5 py-0.5 rounded bg-slate-100">
                  {currentIndex + 1}/{items.length}
                </span>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Minimize Showcase"
                  aria-label="Minimize Showcase"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Animated Card Showcase Area with Slide Transition */}
            <div className="relative min-h-[178px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="cursor-pointer"
                  onClick={handleOrderCurrent}
                >
                  {currentItem.renderCard()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info Details Below the Card */}
            <div className="mt-3 pt-2.5 border-t border-slate-100">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                  {lang === 'ta' ? currentItem.badge_ta : currentItem.badge_en}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-slate-600">
                  <Clock className="w-3 h-3 text-red-600" />
                  {lang === 'ta' ? currentItem.turnaround_ta : currentItem.turnaround_en}
                </span>
              </div>

              <h4 className="text-sm font-black text-slate-950 mt-1.5 leading-snug">
                {lang === 'ta' ? currentItem.name_ta : currentItem.name_en}
              </h4>
              <p className="text-[11px] font-medium text-slate-600 leading-tight mt-0.5">
                {lang === 'ta' ? currentItem.subtitle_ta : currentItem.subtitle_en}
              </p>

              {/* Direct WhatsApp Action Button */}
              <div className="mt-3 flex items-center gap-1.5">
                <button
                  onClick={handleOrderCurrent}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{lang === 'ta' ? 'வாட்ஸ்அப்பில் பெற' : 'Apply on WhatsApp'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                {/* Prev / Next Nav Buttons */}
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 transition-colors cursor-pointer border border-slate-200"
                  title="Previous Card"
                  aria-label="Previous Card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 transition-colors cursor-pointer border border-slate-200"
                  title="Next Card"
                  aria-label="Next Card"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Dot Indicators */}
              <div className="flex items-center justify-center gap-1.5 mt-2.5">
                {items.map((it, idx) => (
                  <button
                    key={it.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-5 bg-red-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </aside>

      {/* Mobile Floating Edge Pill - Opens Mobile Card Viewer */}
      <div className="lg:hidden fixed right-0 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="flex flex-col items-center gap-1 bg-red-600 text-white py-3 px-1.5 rounded-l-2xl shadow-2xl border-l-2 border-y-2 border-white/90 cursor-pointer active:scale-95"
          title="View Service Cards"
        >
          <CreditCard className="w-4 h-4 text-white" />
          <span className="text-[8px] font-black [writing-mode:vertical-rl] tracking-widest uppercase">
            CARDS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </button>
      </div>

      {/* Mobile Modal Card Viewer */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-3xl border-2 border-red-500 shadow-2xl p-4 overflow-hidden relative"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                  </span>
                  <span className="text-xs font-black text-red-700 uppercase">
                    {lang === 'ta' ? 'பிரபல சேவை அட்டைகள்' : 'Popular Service Cards'}
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="px-2.5 py-1 text-xs font-bold text-slate-600 hover:text-red-600 bg-slate-100 rounded-lg"
                >
                  ✕ Close
                </button>
              </div>

              {/* Animated Card Showcase */}
              <div className="relative min-h-[178px] my-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {currentItem.renderCard()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Info Details */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                    {lang === 'ta' ? currentItem.badge_ta : currentItem.badge_en}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600">
                    {lang === 'ta' ? currentItem.turnaround_ta : currentItem.turnaround_en}
                  </span>
                </div>

                <h4 className="text-sm font-black text-slate-950 mt-1">
                  {lang === 'ta' ? currentItem.name_ta : currentItem.name_en}
                </h4>
                <p className="text-[11px] text-slate-600">
                  {lang === 'ta' ? currentItem.subtitle_ta : currentItem.subtitle_en}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => {
                      handleOrderCurrent();
                      setIsMobileOpen(false);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-red-600 text-white text-xs font-black shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{lang === 'ta' ? 'வாட்ஸ்அப் விண்ணப்பம்' : 'WhatsApp Order'}</span>
                  </button>

                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-slate-100 border border-slate-200"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-slate-100 border border-slate-200"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-2.5">
                  {items.map((it, idx) => (
                    <button
                      key={it.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentIndex === idx ? 'w-5 bg-red-600' : 'w-1.5 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
