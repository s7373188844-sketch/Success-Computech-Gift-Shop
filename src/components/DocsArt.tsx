import React from 'react';

/** Illustration for the services door: an application form with an ID card sliding out of it. */
export const DocsArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 260 180" className={className} aria-hidden="true" focusable="false">
    <g className="docs-art__form">
      <rect x="40" y="18" width="128" height="152" rx="4" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
      <g stroke="var(--line-strong)" strokeWidth="2" strokeLinecap="round">
        <path d="M56 42h56" stroke="var(--ink)" />
        <path d="M56 62h96M56 76h96M56 90h70" />
        <path d="M56 112h40M104 112h48M56 126h96M56 140h60" />
      </g>
      <rect x="128" y="34" width="26" height="30" rx="2" fill="var(--paper-2)" stroke="var(--line-strong)" strokeWidth="1.5" />
    </g>
    <g className="docs-art__card">
      <rect x="120" y="92" width="118" height="74" rx="8" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="120" y="92" width="118" height="16" rx="8" fill="var(--red)" />
      <rect x="120" y="100" width="118" height="8" fill="var(--red)" />
      <circle cx="146" cy="134" r="11" fill="none" stroke="var(--ink)" strokeWidth="1.75" />
      <path d="M131 156c2-8 8-11 15-11s13 3 15 11" fill="none" stroke="var(--ink)" strokeWidth="1.75" />
      <g stroke="var(--line-strong)" strokeWidth="2" strokeLinecap="round">
        <path d="M172 126h48" stroke="var(--ink)" />
        <path d="M172 138h40M172 150h30" />
      </g>
    </g>
    <g className="docs-art__tick">
      <circle cx="40" cy="150" r="17" fill="var(--red)" />
      <path d="m32 150 5.5 5.5L49 144" fill="none" stroke="var(--white)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);
