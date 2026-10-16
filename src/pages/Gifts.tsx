import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GiftGallery } from '../components/GiftGallery';
import { VideoShowcase } from '../components/VideoShowcase';
import { Icon } from '../components/Icon';

export const Gifts: React.FC = () => {
  const { t, lang, wa } = useApp();
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: t.nav.gifts }]} />
          <h1 className="page-title page-title--brand">{t.gifts.title}</h1>
          <p className="brand-kicker brand-kicker--after">{t.gifts.brandNote}</p>
          <p className="lead">{t.gifts.lead}</p>
          <div className="btn-row">
            <a className="btn btn--primary btn--lg" href={wa(lang === 'ta' ? 'வணக்கம் Make My Gifts, பரிசு ஆர்டர் செய்ய வேண்டும்.' : 'Hello Make My Gifts, I would like to order a customised gift.')} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={20} />
              {t.cta.whatsappEnquiry}
            </a>
          </div>
        </div>
      </div>
      <div className="section section--tight">
        <div className="container">
          <GiftGallery />
        </div>
      </div>
      <section className="section section--paper" aria-labelledby="order-h">
        <div className="container">
          <h2 id="order-h" className="section-title">{t.gifts.howToOrder}</h2>
          <ol className="steps">
            {t.gifts.orderSteps.map((s, i) => (
              <li key={i} className="steps__item">
                <span className="steps__num" aria-hidden="true">{i + 1}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
          <div className="callout">
            <div>
              <h3 className="callout__title">{t.gifts.corporateTitle}</h3>
              <p>{t.gifts.corporateText}</p>
            </div>
            <a className="btn btn--primary" href={wa(lang === 'ta' ? 'வணக்கம் Make My Gifts, மொத்த பரிசு ஆர்டர் பற்றி பேச வேண்டும்.' : 'Hello Make My Gifts, I would like to discuss a bulk gift order.')} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={18} />
              {t.cta.whatsappEnquiry}
            </a>
          </div>
        </div>
      </section>
      <VideoShowcase title={lang === 'ta' ? 'எப்படி செய்கிறோம்' : 'See how it is made'} />
    </>
  );
};
