import React from 'react';

const PATHS: Record<string, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.2a8.5 8.5 0 1 1 15.5-4.7Z" />
      <path d="M9 9.2c.2 2.6 3 5.4 5.8 5.8l1.2-1.4-1.9-1-1 .8c-.9-.4-2-1.4-2.4-2.4l.8-1-1-1.9Z" />
    </>
  ),
  phone: <path d="M6.6 3.5h2.6l1.4 4-1.9 1.3a12 12 0 0 0 6.5 6.5l1.3-1.9 4 1.4v2.6a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
  CreditCard: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M6 15.5c.6-1.2 1.5-1.8 2.5-1.8s1.9.6 2.5 1.8M14 10h4M14 13h3" />
    </>
  ),
  Plane: <path d="M10.5 13.5 4 11l1.2-1.6 7.3.9 4-4.2a1.8 1.8 0 0 1 2.6 2.5l-4.2 4 .9 7.3L14.2 21l-2.5-6.5-3.3 3.1.4 2.4-1.3.8-1.5-3.3-3.3-1.5.8-1.3 2.4.4Z" />,
  Car: (
    <>
      <path d="M4 16v-3.5L6 7.5A2 2 0 0 1 7.9 6h8.2A2 2 0 0 1 18 7.5l2 5V16" />
      <path d="M3 13h18v4H3zM6.5 17v2M17.5 17v2" />
      <circle cx="7" cy="15" r=".6" />
      <circle cx="17" cy="15" r=".6" />
    </>
  ),
  Briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" />
    </>
  ),
  Users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
      <path d="M15.5 5.8a3 3 0 0 1 0 5.4M17 14.5c1.8.5 3 2 3.5 4.5" />
    </>
  ),
  Home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20H4z" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  GraduationCap: (
    <>
      <path d="m2.5 9.5 9.5-4.5 9.5 4.5-9.5 4.5z" />
      <path d="M6.5 11.5v4c1.4 1.4 3.4 2 5.5 2s4.1-.6 5.5-2v-4M21.5 9.5v5" />
    </>
  ),
  Sparkles: (
    <>
      <path d="M12 3c-.8 2.6-1.8 3.6-4.5 4.5 2.7.9 3.7 1.9 4.5 4.5.8-2.6 1.8-3.6 4.5-4.5C13.8 6.6 12.8 5.6 12 3Z" />
      <path d="M8 14v7M16 14v7M5 21h14M7 14h10" />
    </>
  ),
  Ticket: (
    <>
      <path d="M3.5 8V6.5a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1V8a2.5 2.5 0 0 0 0 5v1.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V13a2.5 2.5 0 0 0 0-5Z" transform="translate(0 1.5)" />
      <path d="M14.5 7v1.5M14.5 11v1.5M14.5 15v1.5" />
    </>
  ),
  ShieldCheck: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  Printer: (
    <>
      <path d="M7 8V4h10v4" />
      <rect x="3.5" y="8" width="17" height="8" rx="1.5" />
      <path d="M7 13h10v7H7z" />
    </>
  ),
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M3 9h18M12 9v11M12 9c-1.5-3.5-5.5-4-5.5-1.5S10 9 12 9Zm0 0c1.5-3.5 5.5-4 5.5-1.5S14 9 12 9Z" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 4.5V8M9 13h.01M15 13h.01M9.5 16h5" />
    </>
  ),
  send: <path d="m4 12 16-7.5-6 16-2.5-6.5Z M11.5 14 20 4.5" />,
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5M12 7.8v.4" />
    </>
  ),
  star: <path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6Z" />,
};

export type IconName = keyof typeof PATHS | string;

export const Icon: React.FC<{ name: IconName; size?: number; className?: string; title?: string }> = ({
  name,
  size = 20,
  className,
  title,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={title ? undefined : true}
    role={title ? 'img' : undefined}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    {PATHS[name] ?? PATHS.info}
  </svg>
);
