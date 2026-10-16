import React from 'react';
import { useApp } from '../context/AppContext';
import { GENERAL_FAQS } from '../data/faqData';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { categoryTitle } from '../lib/services';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Accordion } from '../components/Accordion';
import { Icon } from '../components/Icon';

export const FaqPage: React.FC = () => {
  const { t, lang, wa } = useApp();
  const ta = lang === 'ta';
  const groups = [
    { id: 'general', title: t.faq.general, items: GENERAL_FAQS.map((f) => ({ q: ta ? f.q_ta : f.q_en, a: ta ? f.a_ta : f.a_en })) },
    ...SERVICE_CATEGORIES.map((c) => ({
      id: c.id,
      title: categoryTitle(c, lang),
      items: c.services.flatMap((s) => (s.faqs ?? []).map((f) => ({ q: ta ? f.q_ta : f.q_en, a: ta ? f.a_ta : f.a_en }))),
    })).filter((g) => g.items.length),
  ];
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: t.nav.faq }]} />
          <h1 className="page-title">{t.faq.title}</h1>
          <p className="lead">{t.faq.lead}</p>
        </div>
      </div>
      <div className="section section--tight">
        <div className="container faq-layout">
          <nav className="faq-toc" aria-label={t.faq.title}>
            <ul>
              {groups.map((g) => (
                <li key={g.id}><a href={`#faq-${g.id}`}>{g.title}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            {groups.map((g) => (
              <section key={g.id} id={`faq-${g.id}`} className="faq-group" aria-labelledby={`faq-${g.id}-h`}>
                <h2 id={`faq-${g.id}-h`} className="block-title">{g.title}</h2>
                <Accordion items={g.items} />
              </section>
            ))}
            <div className="callout">
              <div>
                <h2 className="callout__title">{t.faq.stillQuestion}</h2>
                <p>{t.faq.stillText}</p>
              </div>
              <a className="btn btn--primary" href={wa()} target="_blank" rel="noopener noreferrer">
                <Icon name="chat" size={18} />
                {t.cta.whatsappEnquiry}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
