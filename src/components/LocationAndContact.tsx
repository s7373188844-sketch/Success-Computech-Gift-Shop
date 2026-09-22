import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  QrCode,
  ShieldCheck
} from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  const { lang, t, openWhatsApp, setIsQrModalOpen, themeConfig } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = lang === 'ta'
      ? `வணக்கம் Success Computech! என் பெயர் ${name} (Ph: ${phone}). எனக்கு ${serviceNeeded} சேவை தேவை. விவரம்: ${message}`
      : `Hello Success Computech! My name is ${name} (Ph: ${phone}). I need ${serviceNeeded} service. Details: ${message}`;
    openWhatsApp(msg);
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/x5wWGLBj4BuSFVmk7';

  const handleOpenMaps = () => {
    window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 bg-white text-slate-900 relative border-t-2 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-black uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span>CONTACT & ADDRESS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
            {lang === 'ta' ? 'தொடர்புக்கு : 7373188844' : 'Contact : 7373188844'}
          </h2>
          <p className="mt-2 text-base font-bold text-red-600">
            Address : 15/12 Opp AK Motors, Pn Road, Tirupur 641602.
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            {t.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Location, Office Hours, Remote Notice & Call buttons */}
          <div className="bg-slate-50 border-2 border-red-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              {/* Remote Access Badge */}
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 mb-6 flex items-start gap-3 shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-red-950">
                    {lang === 'ta' ? 'வீட்டிலிருந்தே வாட்ஸ்அப் மூலம் சேவைகளைப் பெறலாம்!' : 'Access All Services Remotely via WhatsApp!'}
                  </h4>
                  <p className="text-xs text-red-900 mt-1 leading-relaxed font-semibold">
                    {t.remoteNotice}
                  </p>
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white text-red-600 border border-red-200 shadow-2xs rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t.addressTitle}
                    </h5>
                    <p className="text-sm font-black text-slate-900 mt-0.5">SUCCESS COMPUTECH & GIFT SHOP</p>
                    <p className="text-xs text-slate-600 mt-0.5 font-semibold">{t.addressLine2}</p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 hover:text-red-700 hover:underline mt-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{lang === 'ta' ? 'Google Map-ல் நேரடி வழித்தடம் பார்க்க' : 'Open in Google Maps (maps.app.goo.gl)'}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white text-red-600 border border-red-200 shadow-2xs rounded-xl shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t.hoursTitle}
                    </h5>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      {t.openHoursDetail}
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-800 rounded text-[11px] font-bold">
                      {lang === 'ta' ? 'ஞாயிறு: காலை 9:00 முதல் மதியம் 2:00 வரை திறந்திருக்கும்' : 'Sunday: Open 9:00 AM – 2:00 PM'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white text-emerald-600 border border-emerald-200 shadow-2xs rounded-xl shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t.whatsappTitle}
                    </h5>
                    <p className="text-sm font-black text-emerald-700 mt-0.5 font-mono">
                      +91 73731 88844
                    </p>
                    <p className="text-xs text-slate-500 font-medium">wa.me/917373188844</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar with Google Maps button prominent */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black transition-all shadow-md active:scale-95 text-center"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>{lang === 'ta' ? 'கூகுள் மேப்' : 'Google Maps'}</span>
              </a>

              <a
                href="tel:+917373188844"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-red-50 border border-slate-200 text-slate-800 text-xs font-black transition-all shadow-2xs active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>{t.callUsBtn}</span>
              </a>

              <button
                onClick={() => setIsQrModalOpen(true)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-red-50 border border-red-200 text-red-700 text-xs font-black transition-all shadow-2xs active:scale-95 cursor-pointer text-center"
              >
                <QrCode className="w-4 h-4 text-red-600" />
                <span>{lang === 'ta' ? 'மேப் & QR' : 'Map QR Code'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Service Request Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 border-2 border-red-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-red-100 text-red-600">
                  <Send className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-black text-slate-950">
                  {lang === 'ta' ? 'வாட்ஸ்அப் மூலம் உடனடி சேவை விண்ணப்பம்' : 'Quick WhatsApp Assistance Request'}
                </h3>
              </div>
              <p className="text-xs text-slate-600 mb-6">
                {lang === 'ta'
                  ? 'உங்கள் விவரங்களை உள்ளிட்டு "அனுப்புக" கிளிக் செய்தால் நேரடியாக எங்கள் வாட்ஸ்அப்பிற்கு வந்துவிடும்.'
                  : 'Fill the form to send an instant pre-formatted WhatsApp service inquiry to our Tiruppur desk.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {lang === 'ta' ? 'உங்கள் பெயர்:' : 'Your Name:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'ta' ? 'பெயர் உள்ளிடுக' : 'Enter your name'}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {lang === 'ta' ? 'மொபைல் எண்:' : 'Mobile Number:'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit number"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'ta' ? 'தேவையான சேவை:' : 'Service Needed:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    placeholder={lang === 'ta' ? 'எ.கா: பான் கார்டு திருத்தம், பாஸ்போர்ட், டிரைவிங் லைசென்ஸ்...' : 'e.g. PAN Correction, Passport, Driving Licence, GST...'}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {lang === 'ta' ? 'கூடுதல் விவரங்கள் (தேவைப்பட்டால்):' : 'Additional Message (Optional):'}
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'ta' ? 'உங்கள் சந்தேகங்களை அல்லது விவரங்களை குறிப்பிடலாம்...' : 'Any specific details or questions...'}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{lang === 'ta' ? 'வாட்ஸ்அப் மூலம் உடனடியாக அனுப்புக' : 'Send via WhatsApp to 7373188844'}</span>
                </button>
              </form>

              {sentSuccess && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'ta'
                      ? 'வாட்ஸ்அப் பக்கம் திறக்கிறது! உங்கள் விவரங்களை உறுதி செய்து அனுப்புங்கள்.'
                      : 'Opening WhatsApp! Please review and send your message.'}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>{t.officeHours}</span>
              <span className="font-bold text-emerald-700">wa.me/917373188844</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
