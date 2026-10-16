import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from '../router';

export const NotFound: React.FC = () => {
  const { t } = useApp();
  return (
    <div className="section">
      <div className="container narrow">
        <h1 className="page-title">{t.notFound.title}</h1>
        <p className="lead">{t.notFound.text}</p>
        <div className="btn-row">
          <Link to="/" className="btn btn--primary">{t.notFound.home}</Link>
          <Link to="/services" className="btn btn--ghost">{t.nav.allServices}</Link>
        </div>
      </div>
    </div>
  );
};
