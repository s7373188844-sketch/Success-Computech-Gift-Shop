import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  textColor?: string;
  subColor?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  textColor = 'text-slate-950',
  subColor = 'text-slate-600'
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeDimensions = {
    sm: { box: 'w-9 h-9', text: 'text-sm font-black', sub: 'text-[9px]' },
    md: { box: 'w-11 h-11 sm:w-12 sm:h-12', text: 'text-base sm:text-lg font-black', sub: 'text-[10px]' },
    lg: { box: 'w-16 h-16', text: 'text-xl sm:text-2xl font-black', sub: 'text-xs' },
    xl: { box: 'w-24 h-24', text: 'text-2xl sm:text-3xl font-black', sub: 'text-sm' }
  };

  const dim = sizeDimensions[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {!imageError ? (
        <img
          src="/logo.jpg"
          alt="SUCCESS COMPUTECH & GIFT SHOP Logo"
          onError={() => setImageError(true)}
          className={`${dim.box} rounded-xl object-contain shadow-xs bg-white p-0.5 border border-red-200 shrink-0`}
        />
      ) : (
        /* Fallback Red Official Insignia */
        <div className={`relative ${dim.box} shrink-0 rounded-xl bg-white p-1 shadow-xs border-2 border-red-600 flex items-center justify-center overflow-hidden`}>
          <div className="flex flex-col items-center justify-center leading-none">
            <span className="font-black text-red-600 text-xs sm:text-sm tracking-tighter">SC</span>
            <span className="font-black text-[7px] text-slate-800 tracking-wider uppercase">GIFTS</span>
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`${dim.text} ${textColor} tracking-tight leading-none`}>
            SUCCESS <span className="text-red-600">COMPUTECH</span>
          </span>
          <span className="inline-flex px-2 py-0.5 text-[9px] sm:text-[10px] font-black rounded-md bg-red-600 text-white uppercase tracking-wider shadow-2xs">
            & GIFT SHOP
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] sm:text-[10px] font-black rounded-md bg-amber-50 text-amber-900 border border-amber-300 uppercase tracking-wider shadow-2xs">
            Since 2020
          </span>
        </div>
        {showSubtitle && (
          <p className={`${dim.sub} ${subColor} font-bold tracking-wider uppercase mt-1 line-clamp-1`}>
            Ideas • Prints • Gifts • Digital Services • Since 2020 • Tiruppur
          </p>
        )}
      </div>
    </div>
  );
};
