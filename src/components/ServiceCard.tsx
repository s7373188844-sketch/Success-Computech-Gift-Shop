import React from 'react';
import { Link } from '../router';
import { useApp } from '../context/AppContext';
import type { ServiceItem } from '../types';
import { getCategory } from '../lib/services';
import { Icon } from './Icon';

export const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service: s }) => {
  const { lang, t } = useApp();
  const cat = getCategory(s.categoryId);
  const primary = lang === 'ta' ? s.name_ta : s.name_en;
  const secondary = lang === 'ta' ? s.name_en : s.name_ta;
  return (
    <article className="service-card">
      <span className="service-card__icon" aria-hidden="true">
        <Icon name={cat?.iconName ?? 'info'} size={22} />
      </span>
      <h3 className="service-card__title">
        <Link to={`/services/${s.id}`} className="stretched">
          {primary}
        </Link>
      </h3>
      <p className="service-card__alt" lang={lang === 'ta' ? 'en' : 'ta'}>
        {secondary}
      </p>
      <p className="service-card__desc">{lang === 'ta' ? s.shortDesc_ta : s.shortDesc_en}</p>
      <span className="service-card__more" aria-hidden="true">
        {t.cta.details}
        <Icon name="chevronRight" size={16} />
      </span>
    </article>
  );
};
