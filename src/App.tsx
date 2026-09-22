/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { TopRunningServicesTicker } from './components/TopRunningServicesTicker';
import { LatestUpdatesTicker } from './components/LatestUpdatesTicker';
import { HeroSection } from './components/HeroSection';
import { QuickServicesGrid } from './components/QuickServicesGrid';
import { AllServicesSection } from './components/AllServicesSection';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { DocumentChecklistSection } from './components/DocumentChecklistSection';
import { StatusTrackerSection } from './components/StatusTrackerSection';
import { FAQSection } from './components/FAQSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { WhatsAppQRModal } from './components/WhatsAppQRModal';
import { SearchModal } from './components/SearchModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { RightFixedServiceShowcase } from './components/RightFixedServiceShowcase';
import { ServiceItem } from './types';
import { MessageCircle, QrCode } from 'lucide-react';

const MainContent: React.FC = () => {
  const { selectedService, setSelectedService, openWhatsApp, setIsQrModalOpen } = useApp();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const targetId = id === 'hero' ? 'home' : id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      {/* Header with Navigation: Home | Services | Work | About | FAQ | Contact : 7373188844 */}
      <Header
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Top Running Animated Services Marquee Ticker */}
      <TopRunningServicesTicker onSelectService={handleSelectService} />

      {/* Highlighted Latest Updates Banner */}
      <LatestUpdatesTicker />

      {/* CATEGORY 1: Home (Hero with 3D Canvas, Search & Quick Pills) */}
      <HeroSection
        onSelectService={handleSelectService}
        onExploreClick={() => scrollToSection('services')}
      />

      {/* CATEGORY 2: Services (Quick High-Demand Cards & 40+ Categorized Services Directory + Tools) */}
      <QuickServicesGrid onSelectService={handleSelectService} />
      <AllServicesSection onSelectService={handleSelectService} />
      <DocumentChecklistSection />
      <StatusTrackerSection />

      {/* CATEGORY 3: Work (Gifts, PVC Smart Cards, Govt e-Sevai, Printing with Interactive Filters) */}
      <WorkSection />

      {/* CATEGORY 4: About (Our Story, Mission, Why Choose Us, 5-Step Workflow, Key Stats) */}
      <AboutSection />

      {/* CATEGORY 5: FAQ (Searchable & Categorized Frequently Asked Questions) */}
      <FAQSection />

      {/* CATEGORY 6: Contact : 7373188844 (Address: 15/12 Opp AK Motors, Pn Road, Tirupur 641602) */}
      <LocationAndContact />

      {/* Complete Footer with Brand Logo & Category Navigation */}
      <Footer
        onSelectService={handleSelectService}
        onNavigate={scrollToSection}
      />

      {/* Global Modals */}
      <WhatsAppQRModal />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectService={handleSelectService}
      />
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Right-Side Fixed Animated Service Showcase (Aadhaar, PAN, Voter ID, Passport, DL, Smart Card, Gifts) */}
      <RightFixedServiceShowcase />

      {/* Desktop Floating WhatsApp & QR Action Buttons */}
      <aside aria-label="Floating Actions" className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        <button
          onClick={() => setIsQrModalOpen(true)}
          className="p-3 rounded-full bg-white text-red-600 hover:bg-red-50 shadow-xl border-2 border-red-600 transition-transform hover:scale-110 active:scale-95 group relative cursor-pointer"
          title="Scan Google Maps & WhatsApp QR"
          aria-label="Scan Google Maps & WhatsApp QR"
        >
          <QrCode className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors" />
          <span className="sr-only">Scan QR Code</span>
          <span className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl border border-slate-700">
            Scan Maps & WhatsApp QR
          </span>
        </button>

        <button
          onClick={() => openWhatsApp()}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black shadow-2xl shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95 group cursor-pointer border border-emerald-400/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current text-white" />
          <span className="text-sm font-black tracking-wider uppercase">WhatsApp: 7373188844</span>
        </button>
      </aside>

      {/* Mobile Bottom Fixed Bar */}
      <MobileBottomNav
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onNavigate={scrollToSection}
      />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
