import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GIFT_CATEGORIES, OCCASION_LABELS } from '../data/giftsData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GiftCard, GiftMedia } from '../components/GiftCard';
import { Icon } from '../components/Icon';
import { NotFound } from './NotFound';

export const GiftDetail: React.FC<{ id: string }> = ({ id }) => {
  const { t, lang, wa } = useApp();
  const g = GIFT_CATEGORIES.find((x) => x.id === id);
  const [active, setActive] = useState(0);
  if (!g) return <NotFound />;
  const ta = lang === 'ta';
  const name = ta ? g.name_ta : g.name_en;
  const items = ta ? g.items_ta : g.items_en;
  const readyIn = ta ? g.readyIn_ta : g.readyIn_en;
  const others = GIFT_CATEGORIES.filter((x) => x.id !== g.id).slice(0, 3);

  return (
    <article>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: t.nav.gifts, to: '/gifts' }, { label: name }]} />
        </div>
      </div>
      <div className="section section--tight">
        <div className="container gift-detail">
          <div className="gift-detail__gallery">
            <div className="gift-detail__main">
              <GiftMedia gift={g} index={active} eager />
            </div>
            {g.photos.length > 1 ? (
              <div className="gift-detail__thumbs" role="group" aria-label={name}>
                {g.photos.map((p, i) => (
                  <button key={p.src} type="button" aria-pressed={active === i} onClick={() => setActive(i)}>
                    <img src={p.src} alt={ta ? p.alt_ta : p.alt_en} loading="lazy" width={120} height={150} />
                  </button>
                ))}
              </div>
            ) : null}
            {g.photos.length === 0 ? <p className="gift-detail__soon">{t.gifts.photoSoon}</p> : null}
          </div>
          <div className="gift-detail__info">
            <h1 className="page-title">{name}</h1>
            <p className="detail__alt" lang={ta ? 'en' : 'ta'}>
              {ta ? g.name_en : g.name_ta}
            </p>
            <p className="lead">{ta ? g.shortDesc_ta : g.shortDesc_en}</p>

            <h2 className="block-title">{t.gifts.whatWeMake}</h2>
            <ul className="ticks">
              {items.map((x) => (
                <li key={x}>
                  <Icon name="check" size={18} />
                  {x}
                </li>
              ))}
            </ul>

            <h2 className="block-title">{t.gifts.occasions}</h2>
            <p className="tag-row">
              {g.occasions.map((o) => (
                <span key={o} className="tag">
                  {OCCASION_LABELS[o][lang]}
                </span>
              ))}
            </p>

            {readyIn ? (
              <div className="panel">
                <h2 className="panel__title">{t.gifts.readyIn}</h2>
                <p>{readyIn}</p>
                <p className="panel__note">{t.gifts.readyNote}</p>
              </div>
            ) : null}

            <div className="btn-row">
              <a className="btn btn--primary btn--lg" href={wa(t.gifts.waMessage(name))} target="_blank" rel="noopener noreferrer">
                <Icon name="chat" size={20} />
                {t.cta.whatsappEnquiry}
              </a>
            </div>

            <h2 className="block-title">{t.gifts.howToOrder}</h2>
            <ol className="mini-steps">
              {t.gifts.orderSteps.map((s, i) => (
                <li key={i}>
                  <span aria-hidden="true">{i + 1}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <section className="section section--paper" aria-labelledby="more-gifts">
        <div className="container">
          <h2 id="more-gifts" className="section-title">{t.gifts.more}</h2>
          <div className="gift-grid gift-grid--three">
            {others.map((o) => (
              <GiftCard key={o.id} gift={o} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
