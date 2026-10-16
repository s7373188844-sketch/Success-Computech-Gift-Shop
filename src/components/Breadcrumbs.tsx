import React from 'react';
import { Link } from '../router';
import { useApp } from '../context/AppContext';

export const Breadcrumbs: React.FC<{ items: { label: string; to?: string }[] }> = ({ items }) => {
  const { t } = useApp();
  const all = [{ label: t.breadcrumbHome, to: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {all.map((it, i) => (
          <li key={i}>
            {it.to && i < all.length - 1 ? <Link to={it.to}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
