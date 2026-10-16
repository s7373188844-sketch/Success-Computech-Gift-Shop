import React, { useEffect, useRef } from 'react';

/**
 * Fades content in once when it scrolls into view.
 * Content is visible without JavaScript; the hidden state only applies
 * when the `js` class is on <html> and motion is allowed.
 */
export const Reveal: React.FC<{
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  children: React.ReactNode;
  id?: string;
}> = ({ as = 'div', className = '', delay = 0, children, id }) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add('is-in');
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as as any;
  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}>
      {children}
    </Tag>
  );
};
