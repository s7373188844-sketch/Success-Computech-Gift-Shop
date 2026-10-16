import React, { useId, useState } from 'react';
import { Icon } from './Icon';

export interface AccordionItem {
  q: string;
  a: string;
}

/** Accessible disclosure list. Answers are in the HTML for search engines, hidden until opened. */
export const Accordion: React.FC<{ items: AccordionItem[]; defaultOpen?: number }> = ({ items, defaultOpen = -1 }) => {
  const [open, setOpen] = useState<number>(defaultOpen);
  const base = useId();
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        const btnId = `${base}-b${i}`;
        const panelId = `${base}-p${i}`;
        return (
          <div className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={i}>
            <h3 className="accordion__h">
              <button id={btnId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span>{it.q}</span>
                <Icon name="chevronDown" size={20} className="chev" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="accordion__panel" hidden={!isOpen}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
