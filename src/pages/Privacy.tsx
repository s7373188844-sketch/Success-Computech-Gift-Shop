import React from 'react';
import { useApp } from '../context/AppContext';
import { SITE } from '../site';
import { Breadcrumbs } from '../components/Breadcrumbs';

/** Plain-language privacy notice that matches what the code actually does. Review with the owner before launch. */
const CONTENT = {
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: October 2026',
    sections: [
      {
        h: 'Who we are',
        p: [`${SITE.name}, ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.region} ${SITE.address.postalCode}. Phone and WhatsApp: ${SITE.phoneDisplay}.`],
      },
      {
        h: 'Browsing this website',
        p: [
          'This website does not use advertising or analytics cookies. Your language choice is saved in your own browser so the site remembers it next time.',
          'The contact page shows a Google Maps map and QR codes created by api.qrserver.com. Those services may receive your IP address when they load.',
        ],
      },
      {
        h: 'Ask Mitra chat',
        p: [
          'If you use Ask Mitra, the name and mobile number you enter, your questions and the answers are saved so the shop can follow up with you. Your name and number are also kept in your browser so you do not need to type them again.',
          'To write answers, your question is sent to an AI service (Google Gemini, or OpenAI if Gemini is unavailable). Please do not type Aadhaar numbers, PAN numbers, passwords, OTPs or bank details in the chat.',
        ],
      },
      {
        h: 'Documents you send on WhatsApp',
        p: [
          'Documents you share with us on WhatsApp are used only to complete the service you asked for. WhatsApp is run by Meta and its own privacy policy applies to messages sent through it.',
        ],
      },
      {
        h: 'Your choices',
        p: [
          `To ask what we hold about you or to have it deleted, message or call ${SITE.phoneDisplay}. You can clear the details saved in your browser at any time from your browser settings.`,
        ],
      },
    ],
  },
  ta: {
    title: 'தனியுரிமைக் கொள்கை',
    updated: 'கடைசியாக புதுப்பித்தது: அக்டோபர் 2026',
    sections: [
      {
        h: 'நாங்கள் யார்',
        p: [`${SITE.name}, ${SITE.address.lineTa}. போன் & வாட்ஸ்அப்: ${SITE.phoneDisplay}.`],
      },
      {
        h: 'இந்த இணையதளத்தைப் பார்வையிடும் போது',
        p: [
          'இந்த இணையதளம் விளம்பர அல்லது பகுப்பாய்வு குக்கீகளைப் பயன்படுத்துவதில்லை. நீங்கள் தேர்ந்தெடுத்த மொழி உங்கள் உலாவியிலேயே சேமிக்கப்படும்.',
          'தொடர்பு பக்கத்தில் Google Maps வரைபடமும் api.qrserver.com உருவாக்கும் QR குறியீடுகளும் உள்ளன. அவை ஏற்றப்படும் போது அந்த சேவைகள் உங்கள் IP முகவரியைப் பெறலாம்.',
        ],
      },
      {
        h: 'Ask Mitra சாட்',
        p: [
          'Ask Mitra-வில் நீங்கள் கொடுக்கும் பெயர், மொபைல் எண், கேள்விகள், பதில்கள் கடை உங்களைத் தொடர்பு கொள்ள சேமிக்கப்படும். மீண்டும் தட்டச்சு செய்யத் தேவையில்லாமல் இருக்க உங்கள் பெயரும் எண்ணும் உங்கள் உலாவியிலும் சேமிக்கப்படும்.',
          'பதில் தயாரிக்க உங்கள் கேள்வி ஒரு AI சேவைக்கு (Google Gemini, அது கிடைக்காவிட்டால் OpenAI) அனுப்பப்படுகிறது. சாட்டில் ஆதார் எண், பான் எண், கடவுச்சொல், OTP, வங்கி விவரங்களைத் தட்டச்சு செய்ய வேண்டாம்.',
        ],
      },
      {
        h: 'வாட்ஸ்அப்பில் அனுப்பும் ஆவணங்கள்',
        p: ['வாட்ஸ்அப்பில் நீங்கள் அனுப்பும் ஆவணங்கள் நீங்கள் கேட்ட சேவையை முடிக்க மட்டுமே பயன்படுத்தப்படும். வாட்ஸ்அப் Meta நிறுவனத்தால் இயக்கப்படுகிறது, அதன் தனியுரிமைக் கொள்கை பொருந்தும்.'],
      },
      {
        h: 'உங்கள் உரிமைகள்',
        p: [`உங்களைப் பற்றி நாங்கள் வைத்திருக்கும் தகவலை அறிய அல்லது நீக்க ${SITE.phoneDisplay} எண்ணில் தொடர்பு கொள்ளுங்கள். உலாவியில் சேமிக்கப்பட்டவற்றை உங்கள் உலாவி அமைப்புகளில் எப்போது வேண்டுமானாலும் அழிக்கலாம்.`],
      },
    ],
  },
};

export const Privacy: React.FC = () => {
  const { lang } = useApp();
  const c = CONTENT[lang];
  return (
    <>
      <div className="page-head">
        <div className="container narrow">
          <Breadcrumbs items={[{ label: c.title }]} />
          <h1 className="page-title">{c.title}</h1>
          <p className="muted">{c.updated}</p>
        </div>
      </div>
      <div className="section section--tight">
        <div className="container narrow prose">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="block-title">{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
