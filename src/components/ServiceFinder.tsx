import React, { useEffect, useId, useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useQueryParam, useRouter } from '../router';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { ALL_SERVICES, POPULAR_SERVICES, categoryTitle, searchServices } from '../lib/services';
import { ServiceCard } from './ServiceCard';
import { Icon } from './Icon';
import { Link } from '../router';

/**
 * Search box + category filter + results grid.
 * `mode="home"` shows the most requested services until the visitor searches or filters.
 * `mode="full"` lists everything and keeps the filter in the URL (?q= and ?category=).
 */
export const ServiceFinder: React.FC<{ mode: 'home' | 'full'; headingLevel?: 'h1' | 'h2' }> = ({ mode, headingLevel = 'h2' }) => {
  const { t, lang, wa } = useApp();
  const { navigate, path } = useRouter();
  const qParam = useQueryParam('q');
  const catParam = useQueryParam('category');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const inputId = useId();

  useEffect(() => {
    if (mode !== 'full') return;
    setQuery(qParam);
    setCategory(SERVICE_CATEGORIES.some((c) => c.id === catParam) ? catParam : 'all');
  }, [mode, qParam, catParam]);

  const syncUrl = (q: string, c: string) => {
    if (mode !== 'full') return;
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q);
    if (c !== 'all') params.set('category', c);
    const s = params.toString();
    navigate(`${path}${s ? `?${s}` : ''}`, { replace: true, keepScroll: true });
  };

  const filtering = query.trim() !== '' || category !== 'all';
  const results = useMemo(() => {
    const pool = category === 'all' ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.categoryId === category);
    if (query.trim()) return searchServices(query, pool);
    if (mode === 'home' && !filtering) return POPULAR_SERVICES;
    return pool;
  }, [query, category, mode, filtering]);

  const Heading = headingLevel;

  return (
    <section className="finder" aria-labelledby="finder-title" id="services">
      <div className="finder__head">
        <Heading id="finder-title" className={headingLevel === 'h1' ? 'page-title' : 'section-title'}>
          {headingLevel === 'h1' ? t.nav.services : t.finder.title}
        </Heading>
        <p className="lead">{t.finder.lead}</p>
      </div>

      <form
        className="finder__search"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (mode === 'home') navigate(`/services?q=${encodeURIComponent(query.trim())}`);
          else syncUrl(query, category);
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          {t.finder.searchLabel}
        </label>
        <Icon name="search" size={22} className="finder__search-icon" />
        <input
          id={inputId}
          type="search"
          value={query}
          placeholder={t.finder.placeholder}
          autoComplete="off"
          enterKeyHint="search"
          onChange={(e) => {
            setQuery(e.target.value);
            if (mode === 'full') syncUrl(e.target.value, category);
          }}
        />
        {query ? (
          <button type="button" className="icon-btn" onClick={() => { setQuery(''); syncUrl('', category); }} aria-label={t.finder.clear}>
            <Icon name="close" size={18} />
          </button>
        ) : null}
      </form>

      <div className="chips" role="group" aria-label={t.service.category}>
        <button type="button" className="chip" aria-pressed={category === 'all'} onClick={() => { setCategory('all'); syncUrl(query, 'all'); }}>
          {t.finder.all}
        </button>
        {SERVICE_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className="chip"
            aria-pressed={category === c.id}
            onClick={() => {
              const next = category === c.id ? 'all' : c.id;
              setCategory(next);
              syncUrl(query, next);
            }}
          >
            {categoryTitle(c, lang)}
          </button>
        ))}
      </div>

      <p className="finder__count" role="status" aria-live="polite">
        {mode === 'home' && !filtering ? t.finder.popular : t.finder.showing(results.length)}
      </p>

      {results.length ? (
        <div className="service-grid">
          {results.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p className="empty__title">{t.finder.emptyTitle}</p>
          <p>{t.finder.emptyText}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={wa(lang === 'ta' ? `வணக்கம், எனக்கு "${query}" தொடர்பாக உதவி தேவை.` : `Hello, I need help with "${query}".`)} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={18} />
              {t.finder.askOnWhatsapp}
            </a>
            <button type="button" className="btn btn--ghost" onClick={() => { setQuery(''); setCategory('all'); syncUrl('', 'all'); }}>
              {t.finder.clear}
            </button>
          </div>
        </div>
      )}

      {mode === 'home' ? (
        <p className="finder__all">
          <Link to="/services" className="btn btn--ghost">
            {t.finder.seeAll(ALL_SERVICES.length)}
          </Link>
        </p>
      ) : null}
    </section>
  );
};
