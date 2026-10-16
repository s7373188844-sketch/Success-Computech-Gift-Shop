import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from '../router';
import { Icon } from './Icon';

/**
 * Ask Mitra chat. Same API contract as before: POST /api/ask-mitra
 * with { message, history, lang, customer } and a { reply } response.
 */
interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
interface CustomerInfo {
  name: string;
  mobile: string;
}

const CUSTOMER_STORAGE_KEY = 'sc_ask_mitra_customer';

function loadStoredCustomer(): CustomerInfo | null {
  try {
    const raw = localStorage.getItem(CUSTOMER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export const AskMitraChat: React.FC = () => {
  const { lang, t, isChatOpen, setChatOpen } = useApp();
  const [customer, setCustomer] = useState<CustomerInfo | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [mobileInput, setMobileInput] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setCustomer(loadStoredCustomer()), []);

  useEffect(() => {
    if (isChatOpen && customer && messages.length === 0) {
      setMessages([{ role: 'model', text: t.chat.greeting }]);
    }
  }, [isChatOpen, customer, messages.length, t.chat.greeting]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isChatOpen) return;
    const first = panelRef.current?.querySelector<HTMLElement>('input, button.chat__chip');
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setChatOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isChatOpen, customer, setChatOpen]);

  const startChat = (name: string, mobile: string) => {
    const digits = mobile.replace(/\D/g, '');
    if (mobile.trim() && !/^(91)?[6-9]\d{9}$/.test(digits)) {
      setMobileError(lang === 'ta' ? '10 இலக்க மொபைல் எண்ணை உள்ளிடுங்கள்.' : 'Enter a 10-digit mobile number.');
      return;
    }
    const info: CustomerInfo = { name: name.trim() || 'Guest', mobile: digits.slice(-10) };
    setCustomer(info);
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(info));
    } catch {
      /* ignore */
    }
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    const history = messages;
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsLoading(true);
    try {
      const res = await fetch('/api/ask-mitra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history, lang, customer }),
      });
      const data = await res.json().catch(() => ({}));
      setMessages((prev) => [...prev, { role: 'model', text: data.reply || data.error || t.chat.noReply }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'model', text: t.chat.network }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="chat-launcher"
        onClick={() => setChatOpen(!isChatOpen)}
        aria-expanded={isChatOpen}
        aria-controls="ask-mitra"
        aria-label={isChatOpen ? t.chat.close : t.chat.open}
      >
        <Icon name={isChatOpen ? 'close' : 'bot'} size={22} />
        <span>{t.cta.askMitra}</span>
      </button>

      <div
        id="ask-mitra"
        ref={panelRef}
        className="chat"
        role="dialog"
        aria-modal="false"
        aria-labelledby="ask-mitra-title"
        hidden={!isChatOpen}
      >
        <div className="chat__head">
          <span className="chat__avatar" aria-hidden="true">
            <Icon name="bot" size={20} />
          </span>
          <div>
            <p id="ask-mitra-title" className="chat__title">Ask Mitra</p>
            <p className="chat__sub">{t.chat.subtitle}</p>
          </div>
          <button type="button" className="icon-btn" onClick={() => setChatOpen(false)} aria-label={t.chat.close}>
            <Icon name="close" size={18} />
          </button>
        </div>

        {!customer ? (
          <form
            className="chat__intro"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              startChat(nameInput, mobileInput);
            }}
          >
            <p className="chat__intro-title">{t.chat.introTitle}</p>
            <label className="field">
              <span>{t.chat.name}</span>
              <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} autoComplete="name" />
            </label>
            <label className="field">
              <span>{t.chat.mobile}</span>
              <input
                value={mobileInput}
                onChange={(e) => {
                  setMobileInput(e.target.value);
                  setMobileError('');
                }}
                inputMode="tel"
                autoComplete="tel"
                aria-invalid={mobileError ? true : undefined}
                aria-describedby={mobileError ? 'chat-mobile-error' : undefined}
              />
              {mobileError ? (
                <span id="chat-mobile-error" className="field__error">
                  {mobileError}
                </span>
              ) : null}
            </label>
            <p className="chat__note">
              {t.chat.introNote} <Link to="/privacy">{t.chat.privacy}</Link>
            </p>
            <button type="submit" className="btn btn--primary btn--block">
              {t.chat.start}
            </button>
            <button type="button" className="text-link chat__guest" onClick={() => startChat('Guest', '')}>
              {t.chat.guest}
            </button>
          </form>
        ) : (
          <>
            <div ref={scrollRef} className="chat__log" aria-live="polite">
              {messages.map((m, i) => (
                <p key={i} className={`bubble bubble--${m.role}`}>
                  {m.text}
                </p>
              ))}
              {isLoading ? <p className="bubble bubble--model bubble--typing">{t.chat.typing}</p> : null}
            </div>
            {messages.length <= 1 ? (
              <div className="chat__chips">
                {t.chat.chips.map((c) => (
                  <button key={c} type="button" className="chip chat__chip" onClick={() => sendMessage(c)}>
                    {c}
                  </button>
                ))}
              </div>
            ) : null}
            <form
              className="chat__form"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
            >
              <label className="sr-only" htmlFor="chat-input">
                {t.chat.placeholder}
              </label>
              <input id="chat-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder={t.chat.placeholder} />
              <button type="submit" className="icon-btn icon-btn--primary" disabled={isLoading || !input.trim()} aria-label={t.chat.send}>
                <Icon name="send" size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};
