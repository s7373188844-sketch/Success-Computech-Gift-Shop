import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, Layers, Sparkles, Info, Phone } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onNavigate }) => {
  const { lang } = useApp();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-red-600 py-2 px-2 safe-area-pb shadow-xl">
      <div className="grid grid-cols-5 items-center justify-around text-center">
        {/* 1. Home */}
        <button
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-red-600 py-1 transition-colors cursor-pointer"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold leading-none">
            {lang === 'ta' ? 'முகப்பு' : 'Home'}
          </span>
        </button>

        {/* 2. Services */}
        <button
          onClick={() => onNavigate('services')}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-red-600 py-1 transition-colors cursor-pointer"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] font-bold leading-none">
            {lang === 'ta' ? 'சேவைகள்' : 'Services'}
          </span>
        </button>

        {/* 3. Work */}
        <button
          onClick={() => onNavigate('work')}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-red-600 py-1 transition-colors cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-red-600" />
          <span className="text-[10px] font-black text-red-600 leading-none">
            {lang === 'ta' ? 'பணிகள்' : 'Work'}
          </span>
        </button>

        {/* 4. About */}
        <button
          onClick={() => onNavigate('about')}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-red-600 py-1 transition-colors cursor-pointer"
        >
          <Info className="w-5 h-5" />
          <span className="text-[10px] font-bold leading-none">
            {lang === 'ta' ? 'பற்றி' : 'About'}
          </span>
        </button>

        {/* 5. Contact */}
        <button
          onClick={() => onNavigate('contact')}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-red-600 py-1 transition-colors cursor-pointer"
        >
          <Phone className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold leading-none">
            {lang === 'ta' ? 'தொடர்பு' : 'Contact'}
          </span>
        </button>
      </div>
    </div>
  );
};

