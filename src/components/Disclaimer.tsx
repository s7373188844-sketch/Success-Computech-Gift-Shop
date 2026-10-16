import React from 'react';
import { useApp } from '../context/AppContext';
import { Icon } from './Icon';

export const Disclaimer: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { t } = useApp();
  return (
    <aside className={`disclaimer ${compact ? 'disclaimer--compact' : ''}`} aria-label={t.disclaimer.title}>
      <Icon name="info" size={20} />
      <div>
        <p className="disclaimer__title">{t.disclaimer.title}</p>
        <p>{t.disclaimer.text}</p>
      </div>
    </aside>
  );
};
