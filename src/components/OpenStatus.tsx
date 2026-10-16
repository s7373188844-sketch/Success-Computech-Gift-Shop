import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { currentISTDay, formatTime, getOpenStatus, type OpenStatus as Status } from '../lib/openStatus';

/** Live "Open now" indicator. Rendered after hydration so cached HTML never shows a stale status. */
export const OpenStatus: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t, lang } = useApp();
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) return <span className={`open-status ${className}`} aria-hidden="true" />;

  let text: string;
  if (status.open && status.until) {
    text = `${t.status.openNow}, ${t.status.closesAt} ${formatTime(status.until, lang)}`;
  } else if (status.nextOpenTime !== undefined && status.nextOpenDay !== undefined) {
    const today = currentISTDay();
    const dayName = t.status.days[status.nextOpenDay];
    const isToday = status.nextOpenDay === today;
    const isTomorrow = status.nextOpenDay === (today + 1) % 7;
    const when = isToday ? t.status.today : isTomorrow ? t.status.tomorrow : dayName;
    text = `${t.status.closed}, ${t.status.opensAt} ${when} ${formatTime(status.nextOpenTime, lang)}`;
  } else {
    text = t.status.closed;
  }

  return (
    <span className={`open-status ${status.open ? 'is-open' : 'is-closed'} ${className}`} role="status">
      <span className="open-status__dot" aria-hidden="true" />
      {text}
    </span>
  );
};
