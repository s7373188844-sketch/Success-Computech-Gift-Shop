import React from 'react';
import { Link } from '../router';
import { useApp } from '../context/AppContext';
import type { GiftCategory } from '../types';
import { GiftArt } from './GiftArt';

export const GiftMedia: React.FC<{ gift: GiftCategory; index?: number; eager?: boolean }> = ({ gift, index = 0, eager }) => {
  const { lang } = useApp();
  const photo = gift.photos[index];
  if (photo) {
    return (
      <img
        src={photo.src}
        alt={lang === 'ta' ? photo.alt_ta : photo.alt_en}
        width={800}
        height={1000}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }
  return <GiftArt kind={gift.art} className="gift-art" />;
};

export const GiftCard: React.FC<{ gift: GiftCategory }> = ({ gift }) => {
  const { lang } = useApp();
  return (
    <article className="gift-card">
      <div className="gift-card__media">
        <GiftMedia gift={gift} />
      </div>
      <h3 className="gift-card__title">
        <Link to={`/gifts/${gift.id}`} className="stretched">
          {lang === 'ta' ? gift.name_ta : gift.name_en}
        </Link>
      </h3>
      <p className="gift-card__desc">{lang === 'ta' ? gift.shortDesc_ta : gift.shortDesc_en}</p>
    </article>
  );
};
