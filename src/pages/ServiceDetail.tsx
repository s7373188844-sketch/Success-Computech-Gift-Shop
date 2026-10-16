import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from '../router';
import { getCategory, getService, categoryTitle } from '../lib/services';
import { telLink } from '../site';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Disclaimer } from '../components/Disclaimer';
import { Accordion } from '../components/Accordion';
import { ServiceCard } from '../components/ServiceCard';
import { Icon } from '../components/Icon';
import { NotFound } from './NotFound';

export const ServiceDetail: React.FC<{ id: string }> = ({ id }) => {
  const { t, lang, wa } = useApp();
  const s = getService(id);
  if (!s) return <NotFound />;
  const cat = getCategory(s.categoryId);
  const ta = lang === 'ta';
  const name = ta ? s.name_ta : s.name_en;
  const alt = ta ? s.name_en : s.name_ta;
  const subs = ta ? s.subServices_ta : s.subServices_en;
  const docs = ta ? s.requiredDocuments_ta : s.requiredDocuments_en;
  const steps = (ta ? s.steps_ta : s.steps_en) ?? t.service.genericSteps;
  const time = ta ? s.processingTime_ta : s.processingTime_en;
  const faqs = (s.faqs ?? []).map((f) => ({ q: ta ? f.q_ta : f.q_en, a: ta ? f.a_ta : f.a_en }));
  const related = (cat?.services ?? []).filter((x) => x.id !== s.id).slice(0, 3);
  const waHref = wa(t.service.waMessage(name));

  return (
    <article className="detail">
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: t.nav.services, to: '/services' }, { label: name }]} />
          <div className="detail__head">
            <span className="detail__icon" aria-hidden="true">
              <Icon name={cat?.iconName ?? 'info'} size={28} />
            </span>
            <div>
              {cat ? (
                <p className="detail__cat">
                  <Link to={`/services?category=${cat.id}`}>{categoryTitle(cat, lang)}</Link>
                </p>
              ) : null}
              <h1 className="page-title">{name}</h1>
              <p className="detail__alt" lang={ta ? 'en' : 'ta'}>
                {alt}
              </p>
            </div>
          </div>
          <p className="lead">{ta ? s.shortDesc_ta : s.shortDesc_en}</p>
          <div className="btn-row no-print">
            <a className="btn btn--primary btn--lg" href={waHref} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={20} />
              {t.cta.whatsappEnquiry}
            </a>
            <a className="btn btn--ghost btn--lg" href={telLink}>
              <Icon name="phone" size={20} />
              {t.cta.callUs}
            </a>
          </div>
        </div>
      </div>

      <div className="section section--tight">
        <div className="container detail__grid">
          <div className="detail__main">
            <section aria-labelledby="help-h">
              <h2 id="help-h" className="block-title">{t.service.whatWeHelp}</h2>
              <ul className="ticks">
                {subs.map((x) => (
                  <li key={x}>
                    <Icon name="check" size={18} />
                    {x}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="steps-h">
              <h2 id="steps-h" className="block-title">{t.service.howItWorks}</h2>
              <ol className="mini-steps">
                {steps.map((x, i) => (
                  <li key={i}>
                    <span aria-hidden="true">{i + 1}</span>
                    <p>{x}</p>
                  </li>
                ))}
              </ol>
            </section>

            {faqs.length ? (
              <section aria-labelledby="faq-h" className="no-print">
                <h2 id="faq-h" className="block-title">{t.service.questions}</h2>
                <Accordion items={faqs} />
              </section>
            ) : null}
          </div>

          <aside className="detail__side">
            {docs.length ? (
              <section className="panel" aria-labelledby="docs-h">
                <h2 id="docs-h" className="panel__title">{t.service.documents}</h2>
                <ul className="doc-list">
                  {docs.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="panel__note">{t.service.documentsNote}</p>
                <button type="button" className="btn btn--ghost btn--sm no-print" onClick={() => window.print()}>
                  <Icon name="Printer" size={18} />
                  {t.cta.printChecklist}
                </button>
              </section>
            ) : null}
            {time ? (
              <section className="panel" aria-labelledby="time-h">
                <h2 id="time-h" className="panel__title">{t.service.time}</h2>
                <p>{time}</p>
                <p className="panel__note">{t.service.timeNote}</p>
              </section>
            ) : null}
            <Disclaimer compact />
          </aside>
        </div>
      </div>

      {related.length ? (
        <section className="section section--paper no-print" aria-labelledby="related-h">
          <div className="container">
            <h2 id="related-h" className="section-title">{t.service.related}</h2>
            <div className="service-grid">
              {related.map((r) => (
                <ServiceCard key={r.id} service={r} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
};
