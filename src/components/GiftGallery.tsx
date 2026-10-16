import React, { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { GIFT_CATEGORIES, OCCASION_LABELS } from '../data/giftsData';
import { GiftCard } from './GiftCard';

type Occasion = keyof typeof OCCASION_LABELS;

export const GiftGallery: React.FC<{ limit?: number }> = ({ limit }) => {
  const { t, lang } = useApp();
  const [occasion, setOccasion] = useState<Occasion | 'all'>('all');
  const list = useMemo(() => {
    const filtered = occasion === 'all' ? GIFT_CATEGORIES : GIFT_CATEGORIES.filter((g) => g.occasions.includes(occasion));
    return limit ? filtered.slice(0, limit) : filtered;
  }, [occasion, limit]);

  return (
    <div className="gift-gallery">
      <div className="chips" role="group" aria-label={t.gifts.occasions}>
        <button type="button" className="chip" aria-pressed={occasion === 'all'} onClick={() => setOccasion('all')}>
          {t.gifts.filterAll}
        </button>
        {(Object.keys(OCCASION_LABELS) as Occasion[]).map((o) => (
          <button key={o} type="button" className="chip" aria-pressed={occasion === o} onClick={() => setOccasion(occasion === o ? 'all' : o)}>
            {OCCASION_LABELS[o][lang]}
          </button>
        ))}
      </div>
      <div className="gift-grid">
        {list.map((g) => (
          <GiftCard key={g.id} gift={g} />
        ))}
      </div>
    </div>
  );
};
