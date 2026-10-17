import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from '../router';
import { SITE } from '../site';
import { GENERAL_FAQS } from '../data/faqData';
import { ServiceFinder } from '../components/ServiceFinder';
import { GiftGallery } from '../components/GiftGallery';
import { HowItWorks } from '../components/HowItWorks';
import { Accordion } from '../components/Accordion';
import { ContactDetails } from '../components/ContactDetails';
import { OpenStatus } from '../components/OpenStatus';
import { DocsArt } from '../components/DocsArt';
import { GiftArt } from '../components/GiftArt';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { VideoShowcase } from '../components/VideoShowcase';

export const Home: React.FC = () => {
  const { t, lang, wa } = useApp();
  const faqs = GENERAL_FAQS.slice(0, 4).map((f) => ({ q: lang === 'ta' ? f.q_ta : f.q_en, a: lang === 'ta' ? f.a_ta : f.a_en }));

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__meta">
              <OpenStatus />
            </p>
            <h1 id="hero-title" className="hero__title">
              {t.hero.title}
            </h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="btn-row">
              <Link to="/services" className="btn btn--primary btn--lg">
                {t.cta.exploreServices}
              </Link>
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg">
                <Icon name="chat" size={20} />
                {t.cta.whatsappEnquiry}
              </a>
            </div>
            <p className="hero__since">
              {t.hero.since} {SITE.since}
            </p>
          </div>

          <div className="hero__doors">
            <Link to="/services" className="door door--services">
              <span className="door__text">
                <span className="door__title">{t.hero.doorServicesTitle}</span>
                <span className="door__desc">{t.hero.doorServicesText}</span>
              </span>
              <DocsArt className="door__art" />
            </Link>
            <Link to="/gifts" className="door door--gifts">
              <span className="door__text">
                <span className="door__title">{t.hero.doorGiftsTitle}</span>
                <span className="door__desc">{t.hero.doorGiftsText}</span>
              </span>
              <span className="door__art door__art--gift">
                <GiftArt kind="plaque" className="door__plaque" />
                <GiftArt kind="frame" className="door__frame" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="section section--tight">
        <div className="container">
          <ServiceFinder mode="home" />
        </div>
      </div>

      <section className="section section--paper" aria-labelledby="gifts-title" id="gifts">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 id="gifts-title" className="section-title section-title--brand">
                {t.gifts.title}
              </h2>
              <p className="brand-kicker brand-kicker--after">{t.gifts.brandNote}</p>
              <p className="lead">{t.gifts.lead}</p>
            </div>
            <Link to="/gifts" className="btn btn--ghost">
              {t.cta.browseGifts}
            </Link>
          </div>
          <GiftGallery limit={6} />
          <Reveal className="callout">
            <div>
              <h3 className="callout__title">{t.gifts.corporateTitle}</h3>
              <p>{t.gifts.corporateText}</p>
            </div>
            <a
              className="btn btn--primary"
              href={wa(lang === 'ta' ? 'வணக்கம் Make My Gifts, மொத்த பரிசு ஆர்டர் பற்றி பேச வேண்டும்.' : 'Hello Make My Gifts, I would like to discuss a bulk gift order.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat" size={18} />
              {t.cta.whatsappEnquiry}
            </a>
          </Reveal>
        </div>
      </section>

      <VideoShowcase title={lang === 'ta' ? 'எப்படி செய்கிறோம்' : 'See how it is made'} />

      <HowItWorks />

      <section className="section section--paper" aria-labelledby="about-title" id="about">
        <div className="container about-strip">
          <div>
            <h2 id="about-title" className="section-title">
              {t.about.title}
            </h2>
            <p className="lead">{t.about.short}</p>
            <div className="btn-row">
              <Link to="/about" className="btn btn--ghost">
                {t.nav.about}
              </Link>
              <a className="btn btn--ghost" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="star" size={18} />
                {t.cta.readReviews}
              </a>
            </div>
          </div>
          <ul className="facts">
            <li><Icon name="check" size={20} />{t.about.facts.since}</li>
            <li><Icon name="check" size={20} />{t.about.facts.whatsapp}</li>
            <li><Icon name="check" size={20} />{t.about.facts.sunday}</li>
            <li><Icon name="check" size={20} />{t.about.facts.location}</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title" id="faq">
        <div className="container narrow">
          <h2 id="faq-title" className="section-title">
            {t.faq.title}
          </h2>
          <Accordion items={faqs} />
          <p className="section-more">
            <Link to="/faq" className="text-link">
              {lang === 'ta' ? 'அனைத்து கேள்விகளும்' : 'All questions'}
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="contact-title" id="contact">
        <div className="container">
          <h2 id="contact-title" className="section-title">
            {t.contact.title}
          </h2>
          <p className="lead">{t.contact.lead}</p>
          <ContactDetails />
        </div>
      </section>
    </>
  );
};
