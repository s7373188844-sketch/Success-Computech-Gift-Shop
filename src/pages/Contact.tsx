import React from 'react';
import { useApp } from '../context/AppContext';
import { SITE, whatsappLink } from '../site';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactDetails } from '../components/ContactDetails';

const qr = (data: string) => `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(data)}`;

export const Contact: React.FC = () => {
  const { t } = useApp();
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: t.nav.contact }]} />
          <h1 className="page-title">{t.contact.title}</h1>
          <p className="lead">{t.contact.lead}</p>
        </div>
      </div>
      <div className="section section--tight">
        <div className="container">
          <ContactDetails />
        </div>
      </div>
      <section className="section section--paper qr-section" aria-labelledby="qr-h">
        <div className="container">
          <h2 id="qr-h" className="section-title">{t.contact.qrTitle}</h2>
          <div className="qr-grid">
            <figure>
              <img src={qr(whatsappLink())} width={240} height={240} alt={t.contact.qrWhatsapp} loading="lazy" />
              <figcaption>{t.contact.qrWhatsapp}</figcaption>
            </figure>
            <figure>
              <img src={qr(SITE.mapsUrl)} width={240} height={240} alt={t.contact.qrMaps} loading="lazy" />
              <figcaption>{t.contact.qrMaps}</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
