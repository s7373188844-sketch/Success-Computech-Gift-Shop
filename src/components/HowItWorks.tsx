import React from 'react';
import { useApp } from '../context/AppContext';
import { Reveal } from './Reveal';

export const HowItWorks: React.FC = () => {
  const { t } = useApp();
  return (
    <section className="section how" aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className="section-title">
          {t.how.title}
        </h2>
        <Reveal as="ol" className="steps">
          {t.how.steps.map((s, i) => (
            <li key={i} className="steps__item" style={{ '--i': i } as React.CSSProperties}>
              <span className="steps__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
