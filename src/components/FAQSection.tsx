import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const { lang, t, openWhatsApp } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q_en: 'Can I apply and send my documents completely via WhatsApp without visiting the centre in Tiruppur?',
      q_ta: 'திருப்பூர் கடைக்கு நேரில் வராமல் வாட்ஸ்அப் (WhatsApp) மூலமாகவே அனைத்து ஆவணங்களையும் அனுப்பி சேவை பெற முடியுமா?',
      a_en: 'Yes, absolutely! 90% of our online services (PAN card, Aadhaar address change, Passport slot booking, Driving Licence renewal, GST filing, Patta Chitta, Bus/Train tickets) can be processed through WhatsApp. Just send clear photos of your documents to 7373188844, and we will send the acknowledgment receipt and status updates back to your WhatsApp.',
      a_ta: 'நிச்சயமாக! எங்கள் 90% சேவைகளை (பான் கார்டு, ஆதார் முகவரி மாற்றம், பாஸ்போர்ட் அப்பாயிண்ட்மெண்ட், டிரைவிங் லைசென்ஸ் ரினீவல், ஜிஎஸ்டி தாக்கல், பட்டா சிட்டா, டிக்கெட் புக்கிங்) நீங்கள் வீட்டில் இருந்தே வாட்ஸ்அப் மூலம் பெறலாம். ஆவணங்களை 7373188844 எண்ணிற்கு அனுப்பி உடனடி ரசீது பெறலாம்.'
    },
    {
      q_en: 'What are your working hours? Are you open on Sundays?',
      q_ta: 'மையத்தின் வேலை நேரம் என்ன? ஞாயிற்றுக்கிழமைகளிலும் செயல்படுமா?',
      a_en: 'Yes! SUCCESS COMPUTECH & GIFT SHOP is open Monday to Saturday from 9:30 AM to 9:00 PM, and on Sunday from 9:00 AM to 2:00 PM. You can visit in person or message us anytime on WhatsApp for prompt assistance.',
      a_ta: 'ஆம்! சக்ஸஸ் கம்ப்யூடெக் & கிப்ட் ஷாப் திங்கள் முதல் சனி வரை காலை 9:30 முதல் இரவு 9:00 மணி வரையிலும், ஞாயிற்றுக்கிழமைகளில் காலை 9:00 முதல் மதியம் 2:00 மணி வரையிலும் செயல்படுகிறது. வாட்ஸ்அப்பிலும் உதவி பெறலாம்.'
    },
    {
      q_en: 'What documents are mandatory to apply for a New PAN Card or PAN correction?',
      q_ta: 'புதிய பான் கார்டு அல்லது பான் திருத்தம் செய்ய என்னென்ன ஆவணங்கள் தேவை?',
      a_en: 'For a new PAN card or correction, your Aadhaar card is the primary mandatory document. For correction, your existing PAN number or card copy is required. If your Aadhaar is linked to your mobile phone for OTP, it can be applied paperless in 15 minutes and e-PAN will arrive in 2-3 days.',
      a_ta: 'புதிய பான் கார்டு அல்லது திருத்தத்திற்கு ஆதார் அட்டை மட்டுமே போதுமானது. திருத்தத்திற்கு பழைய பான் எண் தேவை. ஆதாரில் மொபைல் எண் இணைக்கப்பட்டிருந்தால் 15 நிமிடங்களில் விண்ணப்பித்து 2-3 நாட்களில் இ-பான் கார்டும், 7-10 நாட்களில் அசல் அட்டையும் பெறலாம்.'
    },
    {
      q_en: 'How do you assist with Tatkal & Normal Passport appointments?',
      q_ta: 'பாஸ்போர்ட் எடுப்பதற்கு நீங்கள் எவ்வாறு வழிகாட்டுகிறீர்கள்?',
      a_en: 'We assist with online form filling on the official Passport Seva portal, checking eligibility, uploading documents, paying the official government fee, and booking earliest available appointment slots at POPSK Tiruppur or PSK Coimbatore. We also provide a printout of the appointment receipt with complete checklist.',
      a_ta: 'பாஸ்போர்ட் சேவா தளத்தில் விண்ணப்பம் பூர்த்தி செய்து, திருப்பூர் அல்லது கோவை பாஸ்போர்ட் மையங்களில் விரைவான அப்பாயிண்ட்மென்ட் ஸ்லாட் புக் செய்து தருகிறோம். மேலும் நீங்கள் எடுத்துச் செல்ல வேண்டிய அசல் ஆவணங்கள் பட்டியலையும் வழிகாட்டுகிறோம்.'
    },
    {
      q_en: 'Can I get high-quality waterproof PVC plastic ID cards printed here?',
      q_ta: 'ஆதார், பான், ஓட்டுநர் உரிமம் போன்றவற்றை ஒரிஜினல் PVC பிளாஸ்டிக் கார்டாக பிரிண்ட் செய்து தருவீர்களா?',
      a_en: 'Yes! We use industrial high-definition thermal card printers to produce synthetic, waterproof, and non-tearable PVC ID cards for Aadhaar, PAN, Voter ID, Driving Licence, Ayushman cards, and corporate staff badges. Available instantly within 10-15 minutes.',
      a_ta: 'ஆம்! மங்காத, கிழியாத, நீர்ப்புகா தரத்திலான அசல் தடிமன் கொண்ட PVC பிளாஸ்டிக் கார்டுகளை 10-15 நிமிடங்களில் உடனே பிரிண்ட் செய்து தருகிறோம். தூரத்து வாடிக்கையாளர்களுக்கு கொரியர் மூலமும் அனுப்பி வைக்கப்படும்.'
    },
    {
      q_en: 'How to check my application status after applying?',
      q_ta: 'விண்ணப்பித்த பின் அதன் தற்போதைய நிலையை எப்படி அறிவது?',
      a_en: 'You can use the "Track Status" section on this website using your Reference Number (e.g. SC-2026-XXXX) or simply message your name and service on WhatsApp to 7373188844 for an instant live status update.',
      a_ta: 'எங்கள் இணையதளத்தில் உள்ள "Track Status" பகுதியில் உங்கள் குறிப்பு எண்ணை உள்ளிட்டு நிலையை அறியலாம் அல்லது வாட்ஸ்அப்பில் மெசேஜ் செய்தும் தெரிந்து கொள்ளலாம்.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {t.faqSub}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left bg-slate-50/70 hover:bg-slate-100/80 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {lang === 'ta' ? faq.q_ta : faq.q_en}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                        {lang === 'ta' ? faq.a_ta : faq.a_en}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? WhatsApp */}
        <div className="mt-8 text-center p-6 bg-red-50 border border-red-200 rounded-2xl">
          <p className="text-sm font-bold text-red-950">
            {lang === 'ta' ? 'வேறு ஏதேனும் சந்தேகம் உள்ளதா?' : 'Still have queries about your specific service?'}
          </p>
          <p className="text-xs text-red-800 mt-1 mb-4">
            {lang === 'ta' ? 'எங்கள் வாட்ஸ்அப் உதவி எண்ணில் உடனே தொடர்பு கொண்டு தெளிவு பெறுங்கள்.' : 'Connect with our customer support on WhatsApp for instant assistance.'}
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.whatsappChat} (7373188844)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
