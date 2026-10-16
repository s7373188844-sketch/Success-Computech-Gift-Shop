import React from 'react';
import { useApp } from '../context/AppContext';
import { ServiceFinder } from '../components/ServiceFinder';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Disclaimer } from '../components/Disclaimer';
import { HowItWorks } from '../components/HowItWorks';

export const Services: React.FC = () => {
  const { t } = useApp();
  return (
    <>
      <div className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: t.nav.services }]} />
        </div>
      </div>
      <div className="section section--tight">
        <div className="container">
          <ServiceFinder mode="full" headingLevel="h1" />
          <Disclaimer />
        </div>
      </div>
      <HowItWorks />
    </>
  );
};
