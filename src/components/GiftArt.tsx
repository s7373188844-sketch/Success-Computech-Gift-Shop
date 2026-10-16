import React from 'react';
import type { GiftArtKind } from '../types';

/**
 * Line illustrations used in place of product photos.
 * They are deliberately simple so real photos (added in giftsData.ts) can replace them.
 */
const Portrait: React.FC<{ x: number; y: number; s?: number; stroke?: string }> = ({ x, y, s = 1, stroke = 'var(--ink)' }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={stroke} strokeWidth={2}>
    <circle cx="0" cy="-14" r="12" />
    <path d="M-24 22c3-14 12-21 24-21s21 7 24 21" />
  </g>
);

export const GiftArt: React.FC<{ kind: GiftArtKind; className?: string }> = ({ kind, className }) => (
  <svg viewBox="0 0 200 250" className={className} aria-hidden="true" focusable="false">
    <rect width="200" height="250" fill="var(--paper)" />
    {kind === 'frame' && (
      <g>
        <rect x="46" y="44" width="108" height="140" rx="3" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
        <rect x="58" y="56" width="84" height="116" fill="var(--paper-2)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <Portrait x={100} y={118} />
        <path d="M58 150l22-18 18 14 16-10 28 22v14H58z" fill="var(--red-tint)" stroke="none" />
        <path d="M84 204h32" stroke="var(--line-strong)" strokeWidth="2" strokeLinecap="round" />
      </g>
    )}
    {kind === 'plaque' && (
      <g>
        <rect x="40" y="40" width="120" height="160" rx="10" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="100" cy="98" r="34" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="2 3" />
        <Portrait x={100} y={104} s={0.9} />
        <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
          <path d="M70 150h60" />
          <path d="M78 162h44" stroke="var(--line-strong)" />
          <path d="M84 174h32" stroke="var(--line-strong)" />
        </g>
        <path className="laser-line" d="M40 120h120" stroke="var(--red)" strokeWidth="1.5" />
      </g>
    )}
    {kind === 'mug' && (
      <g>
        <path d="M58 78h76v92a14 14 0 0 1-14 14H72a14 14 0 0 1-14-14z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
        <path d="M134 98h10a16 16 0 0 1 0 32h-10" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <rect x="70" y="98" width="52" height="58" rx="4" fill="var(--red-tint)" />
        <Portrait x={96} y={130} s={0.7} />
        <path d="M80 62c0-8 8-8 8-16M98 62c0-8 8-8 8-16" fill="none" stroke="var(--line-strong)" strokeWidth="2" strokeLinecap="round" />
      </g>
    )}
    {kind === 'acrylic' && (
      <g>
        <path d="M60 52h80l8 128H52z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" opacity=".95" />
        <path d="M68 60l10 0-14 110" stroke="var(--line-strong)" strokeWidth="1.5" fill="none" />
        <Portrait x={100} y={120} />
        <rect x="40" y="180" width="120" height="14" rx="3" fill="var(--ink)" />
      </g>
    )}
    {kind === 'apparel' && (
      <g>
        <path d="M70 52l-34 20 12 26 14-6v96h76V92l14 6 12-26-34-20c-4 10-14 16-30 16s-26-6-30-16z" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
        <rect x="80" y="104" width="40" height="40" rx="3" fill="var(--red-tint)" />
        <Portrait x={100} y={128} s={0.55} />
        <g transform="translate(140 186)">
          <circle r="11" fill="none" stroke="var(--ink)" strokeWidth="2" />
          <path d="M0-11v-12" stroke="var(--ink)" strokeWidth="2" />
          <circle cy="-27" r="4" fill="none" stroke="var(--ink)" strokeWidth="2" />
        </g>
      </g>
    )}
    {kind === 'corporate' && (
      <g>
        <rect x="44" y="104" width="112" height="84" rx="3" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
        <path d="M44 128h112M100 104v84" stroke="var(--red)" strokeWidth="6" />
        <path d="M100 104c-10-24-38-26-38-10s26 10 38 10Zm0 0c10-24 38-26 38-10s-26 10-38 10Z" fill="none" stroke="var(--red)" strokeWidth="3" />
        <rect x="28" y="196" width="40" height="22" rx="2" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
        <rect x="80" y="196" width="40" height="22" rx="2" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
        <rect x="132" y="196" width="40" height="22" rx="2" fill="var(--white)" stroke="var(--ink)" strokeWidth="2" />
      </g>
    )}
  </svg>
);
