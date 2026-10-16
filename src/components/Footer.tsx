import React from 'react';
import { Link } from '../router';
import { useApp } from '../context/AppContext';
import { HOURS_TEXT, SITE, telLink } from '../site';
import { POPULAR_SERVICES, serviceName } from '../lib/services';
import { GIFT_CATEGORIES } from '../data/giftsData';
import { Wordmark } from './Wordmark';

export const Footer: React.FC = () => {
  const { t, lang, wa } = useApp();
  const hours = HOURS_TEXT[lang];
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Wordmark />
          <p>{t.footer.about}</p>
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
          <p className="site-footer__hours">
            {hours.weekdays}: {hours.weekdaysTime}
            <br />
            {hours.sunday}: {hours.sundayTime}
          </p>
          <p className="site-footer__contact">
            <a href={telLink}>{SITE.phoneDisplay}</a>
            <a href={wa()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
          </p>
        </div>
        <div>
          <h2 className="site-footer__heading">{t.footer.services}</h2>
          <ul>
            {POPULAR_SERVICES.slice(0, 7).map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`}>{serviceName(s, lang)}</Link>
              </li>
            ))}
            <li>
              <Link to="/services">{t.nav.allServices}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="site-footer__heading">{t.footer.gifts}</h2>
          <ul>
            {GIFT_CATEGORIES.map((g) => (
              <li key={g.id}>
                <Link to={`/gifts/${g.id}`}>{lang === 'ta' ? g.name_ta : g.name_en}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="site-footer__heading">{t.footer.company}</h2>
          <ul>
            <li><Link to="/about">{t.nav.about}</Link></li>
            <li><Link to="/faq">{t.nav.faq}</Link></li>
            <li><Link to="/contact">{t.nav.contact}</Link></li>
            <li><Link to="/privacy">{t.footer.privacy}</Link></li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__legal">
        <p>{t.disclaimer.text}</p>
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};
