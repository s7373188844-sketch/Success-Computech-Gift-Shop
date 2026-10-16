import React from 'react';
import { useApp } from '../context/AppContext';
import { HOURS_TEXT, SITE, telLink } from '../site';
import { Icon } from './Icon';
import { OpenStatus } from './OpenStatus';

export const ContactDetails: React.FC<{ showMap?: boolean }> = ({ showMap = true }) => {
  const { t, lang, wa } = useApp();
  const hours = HOURS_TEXT[lang];
  return (
    <div className={`contact ${showMap ? '' : 'contact--no-map'}`}>
      <div className="contact__info">
        <dl className="contact__list">
          <div>
            <dt>
              <Icon name="pin" size={20} />
              {t.contact.address}
            </dt>
            <dd>
              <address>
                {lang === 'ta' ? (
                  SITE.address.lineTa
                ) : (
                  <>
                    {SITE.address.line1},<br />
                    {SITE.address.line2}, {SITE.address.region} {SITE.address.postalCode}
                  </>
                )}
              </address>
            </dd>
          </div>
          <div>
            <dt>
              <Icon name="clock" size={20} />
              {t.contact.hours}
            </dt>
            <dd>
              <table className="hours">
                <tbody>
                  <tr>
                    <th scope="row">{hours.weekdays}</th>
                    <td>{hours.weekdaysTime}</td>
                  </tr>
                  <tr>
                    <th scope="row">{hours.sunday}</th>
                    <td>{hours.sundayTime}</td>
                  </tr>
                </tbody>
              </table>
              <OpenStatus />
            </dd>
          </div>
          <div>
            <dt>
              <Icon name="phone" size={20} />
              {t.contact.phone}
            </dt>
            <dd>
              <a href={telLink} className="contact__phone">
                {SITE.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
        <div className="btn-row">
          <a className="btn btn--primary" href={wa()} target="_blank" rel="noopener noreferrer">
            <Icon name="chat" size={18} />
            {t.cta.whatsapp}
          </a>
          <a className="btn btn--ghost" href={telLink}>
            <Icon name="phone" size={18} />
            {t.cta.callUs}
          </a>
          <a className="btn btn--ghost" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="pin" size={18} />
            {t.cta.directions}
          </a>
        </div>
      </div>
      {showMap ? (
        <div className="contact__map">
          <iframe
            title={t.contact.mapTitle}
            src={SITE.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      ) : null}
    </div>
  );
};
