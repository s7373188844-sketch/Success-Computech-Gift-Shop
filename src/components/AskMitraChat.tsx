import React, { useEffect, useRef, useState } from 'react';
import { Bot, Send, X, Loader2, Sparkles, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

interface CustomerInfo {
  name: string;
  mobile: string;
}

const CUSTOMER_STORAGE_KEY = 'sc_ask_mitra_customer';

const GREETING_EN =
  "Hi! I'm Ask Mitra 🤖, the support assistant for Success Computech & Gift Shop. Ask me about Aadhaar, PAN, Passport, DL, GST, Patta/Chitta, exams and more.";
const GREETING_TA =
  'வணக்கம்! நான் Ask Mitra 🤖, Success Computech & Gift Shop-oda support assistant. ஆதார், பான், பாஸ்போர்ட், DL, GST, பட்டா/சிட்டா, தேர்வு விவரங்கள் பற்றி கேட்கலாம்.';

const QUICK_CHIPS_EN = ['Aadhaar address change', 'PAN card fee', 'Passport documents', 'Shop timing'];
const QUICK_CHIPS_TA = ['ஆதார் முகவரி மாற்றம்', 'பான் கார்டு fee', 'பாஸ்போர்ட் documents', 'Shop timing'];

function loadStoredCustomer(): CustomerInfo | null {
  try {
    const raw = localStorage.getItem(CUSTOMER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export const AskMitraChat: React.FC = () => {
  const { lang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState<CustomerInfo | null>(() => loadStoredCustomer());
  const [nameInput, setNameInput] = useState('');
  const [mobileInput, setMobileInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && customer && messages.length === 0) {
      setMessages([{ role: 'model', text: lang === 'ta' ? GREETING_TA : GREETING_EN }]);
    }
  }, [isOpen, customer, lang, messages.length]);

  const startChat = (name: string, mobile: string) => {
    const info: CustomerInfo = { name: name.trim() || 'Guest', mobile: mobile.trim() };
    setCustomer(info);
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(info));
    } catch {
      // ignore storage failures
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

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
      const data = await res.json();
      const reply: string =
        data.reply ||
        (lang === 'ta'
          ? 'Mannikkanum, ippo பதில் தர முடியல. Shop-a நேரடியா contact pannunga (7373188844).'
          : "Sorry, I couldn't get a reply right now. Please contact the shop directly (7373188844).");
      setMessages((prev) => [...prev, { role: 'model', text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text:
            lang === 'ta'
              ? 'Network problem irukku. Konjam neram kalichu try pannunga, illa shop-a WhatsApp (7373188844) pannunga.'
              : 'Network issue right now. Please try again shortly, or WhatsApp the shop at 7373188844.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const chips = lang === 'ta' ? QUICK_CHIPS_TA : QUICK_CHIPS_EN;

  return (
    <>
      {/* Floating launcher button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 pl-3.5 pr-4 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black shadow-2xl shadow-red-950/40 transition-all hover:scale-105 active:scale-95 border border-red-400/30 cursor-pointer"
        aria-label="Open Ask Mitra chat"
      >
        <Bot className="w-6 h-6" />
        <span className="text-sm font-black tracking-wide hidden sm:inline">Ask Mitra</span>
      </button>

      {isOpen && (
        <div className="fixed inset-x-4 bottom-36 md:inset-auto md:bottom-24 md:left-6 z-50 md:w-[380px] w-auto max-h-[70vh] md:max-h-[560px] bg-white rounded-2xl shadow-2xl border-2 border-red-600 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-black leading-none">Ask Mitra</p>
                <p className="text-[11px] text-red-100 leading-none mt-1">Success Computech Support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!customer ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                startChat(nameInput, mobileInput);
              }}
              className="flex-1 flex flex-col justify-center gap-3 px-5 py-6 bg-slate-50"
            >
              <div className="flex items-center gap-2 text-slate-700 mb-1">
                <User className="w-5 h-5 text-red-600" />
                <p className="text-sm font-bold">
                  {lang === 'ta'
                    ? 'தொடங்குமுன் உங்கள் பெயர் & மொபைல் எண் கொடுங்கள்'
                    : 'Before we start, share your name & mobile number'}
                </p>
              </div>
              <input
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder={lang === 'ta' ? 'உங்கள் பெயர்' : 'Your name'}
                className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                value={mobileInput}
                onChange={(e) => setMobileInput(e.target.value)}
                placeholder={lang === 'ta' ? 'மொபைல் எண்' : 'Mobile number'}
                inputMode="tel"
                className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                {lang === 'ta' ? 'சாட் தொடங்கு' : 'Start Chat'}
              </button>
              <button
                type="button"
                onClick={() => startChat('Guest', '')}
                className="text-xs text-slate-500 hover:text-slate-700 underline cursor-pointer"
              >
                {lang === 'ta' ? 'Guest ஆக தொடர' : 'Continue as guest'}
              </button>
            </form>
          ) : (
            <>
          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-red-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-3.5 py-2.5 shadow-sm flex items-center gap-2 text-slate-500 text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {lang === 'ta' ? 'Ask Mitra type pannurathu...' : 'Ask Mitra is typing...'}
                </div>
              </div>
            )}
          </div>

          {/* Quick chips */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-1.5 px-3 pb-2 bg-slate-50">
              {chips.map((c) => (
                <button
                  key={c}
                  onClick={() => sendMessage(c)}
                  className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 p-2.5 border-t border-slate-200 bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'ta' ? 'உங்கள் கேள்வியை தட்டச்சு செய்யவும்...' : 'Type your question...'}
              className="flex-1 px-3.5 py-2.5 rounded-full border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
            </>
          )}
        </div>
      )}
    </>
  );
};
