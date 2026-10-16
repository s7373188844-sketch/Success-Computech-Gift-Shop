import React from 'react';
import { useApp } from '../context/AppContext';
import { SITE } from '../site';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { HowItWorks } from '../components/HowItWorks';
import { Icon } from '../components/Icon';
import { Link } from '../router';

export const About: React.FC = () => {
  const { t } = useApp();
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: t.nav.about }]} />
          <h1 className="page-title">{t.about.title}</h1>
          <p className="lead">{t.about.short}</p>
        </div>
      </div>
      <div className="section section--tight">
        <div className="container about">
          <div className="about__body">
            {t.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="panel panel--note">
              <h2 className="panel__title">{t.about.notTitle}</h2>
              <p>{t.about.notText}</p>
            </div>
          </div>
          <aside className="about__side">
            <img src="/logo-512.webp" width={512} height={512} alt="Success Computech & Gift Shop badge logo" className="about__logo" loading="lazy" decoding="async" />
            <h2 className="panel__title">{t.about.factsTitle}</h2>
            <ul className="facts facts--stacked">
              <li><Icon name="check" size={20} />{t.about.facts.since}</li>
              <li><Icon name="check" size={20} />{t.about.facts.whatsapp}</li>
              <li><Icon name="check" size={20} />{t.about.facts.sunday}</li>
              <li><Icon name="check" size={20} />{t.about.facts.location}</li>
            </ul>
          </aside>
        </div>
      </div>
      <section className="section section--paper" aria-labelledby="reviews-h">
        <div className="container narrow center-block">
          <h2 id="reviews-h" className="section-title">{t.about.reviewsTitle}</h2>
          <p className="lead">{t.about.reviewsText}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="star" size={18} />
              {t.cta.readReviews}
            </a>
            <Link to="/contact" className="btn btn--ghost">{t.nav.contact}</Link>
          </div>
        </div>
      </section>
      <HowItWorks />
    </>
  );
};
