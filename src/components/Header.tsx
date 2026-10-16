import React, { useEffect, useRef, useState } from 'react';
import { Link, useRouter } from '../router';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { categoryTitle } from '../lib/services';
import { Icon } from './Icon';
import { Wordmark } from './Wordmark';

export const Header: React.FC = () => {
  const { t, lang, setLang, wa } = useApp();
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [servicesOpen]);

  const isActive = (p: string) => (p === '/' ? path === '/' : path === p || path.startsWith(`${p}/`));
  const toggleLang = () => setLang(lang === 'en' ? 'ta' : 'en');
  const otherLang = lang === 'en' ? 'ta' : 'en';

  const nav = [
    { to: '/gifts', label: t.nav.gifts },
    { to: '/about', label: t.nav.about },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__bar">
        <Wordmark />

        <nav aria-label="Main" className="site-nav">
          <ul>
            <li>
              <Link to="/" className={isActive('/') ? 'is-active' : undefined} aria-current={isActive('/') ? 'page' : undefined}>
                {t.nav.home}
              </Link>
            </li>
            <li ref={servicesRef} className="site-nav__has-menu">
              <button
                type="button"
                className={isActive('/services') ? 'is-active' : undefined}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((v) => !v)}
              >
                {t.nav.services}
                <Icon name="chevronDown" size={16} className={`chev ${servicesOpen ? 'is-up' : ''}`} />
              </button>
              <div id="services-menu" className="mega" hidden={!servicesOpen}>
                <ul className="mega__grid">
                  {SERVICE_CATEGORIES.map((c) => (
                    <li key={c.id}>
                      <Link to={`/services?category=${c.id}`} className="mega__item">
                        <span className="mega__icon">
                          <Icon name={c.iconName} size={20} />
                        </span>
                        <span>
                          <span className="mega__title">{categoryTitle(c, lang)}</span>
                          <span className="mega__desc">{lang === 'ta' ? c.description_ta : c.description_en}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mega__foot">
                  <Link to="/services" className="text-link">
                    {t.nav.allServices}
                  </Link>
                </div>
              </div>
            </li>
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className={isActive(n.to) ? 'is-active' : undefined} aria-current={isActive(n.to) ? 'page' : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button type="button" className="lang-toggle" onClick={toggleLang} aria-label={t.nav.languageLabel} lang={otherLang}>
            {t.nav.language}
          </button>
          <a className="btn btn--primary btn--sm site-header__wa" href={wa()} target="_blank" rel="noopener noreferrer">
            <Icon name="chat" size={18} />
            {t.cta.whatsapp}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
            <span className="sr-only">{menuOpen ? t.nav.close : t.nav.menu}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Mobile" className="container">
          <ul className="mobile-menu__links">
            <li><Link to="/">{t.nav.home}</Link></li>
            <li><Link to="/services">{t.nav.services}</Link></li>
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
          <ul className="mobile-menu__cats" aria-label={t.nav.services}>
            {SERVICE_CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link to={`/services?category=${c.id}`}>
                  <Icon name={c.iconName} size={18} />
                  {categoryTitle(c, lang)}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn--ghost btn--block" onClick={toggleLang} lang={otherLang}>
            {t.nav.language}
          </button>
        </nav>
      </div>
    </header>
  );
};
