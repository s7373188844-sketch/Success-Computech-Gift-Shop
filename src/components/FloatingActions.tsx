import React from 'react';
import { useApp } from '../context/AppContext';
import { telLink } from '../site';
import { Icon } from './Icon';

/** Desktop: one WhatsApp pill. Mobile: a bottom bar with call, WhatsApp and Ask Mitra. */
export const FloatingActions: React.FC = () => {
  const { t, wa, setChatOpen, isChatOpen } = useApp();
  return (
    <>
      <a className="float-wa" href={wa()} target="_blank" rel="noopener noreferrer">
        <Icon name="chat" size={20} />
        <span>{t.cta.whatsapp}</span>
      </a>
      <nav className="mobile-bar" aria-label="Quick contact">
        <a href={telLink}>
          <Icon name="phone" size={20} />
          <span>{t.cta.call}</span>
        </a>
        <a href={wa()} target="_blank" rel="noopener noreferrer" className="mobile-bar__primary">
          <Icon name="chat" size={20} />
          <span>WhatsApp</span>
        </a>
        <button type="button" onClick={() => setChatOpen(!isChatOpen)} aria-expanded={isChatOpen} aria-controls="ask-mitra">
          <Icon name="bot" size={20} />
          <span>{t.cta.askMitra}</span>
        </button>
      </nav>
    </>
  );
};
