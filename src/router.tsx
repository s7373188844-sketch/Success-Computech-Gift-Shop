import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface RouterState {
  path: string;
  search: string;
  hash: string;
  navigate: (to: string, opts?: { replace?: boolean; keepScroll?: boolean }) => void;
}

const RouterContext = createContext<RouterState | null>(null);

function splitUrl(url: string) {
  const u = new URL(url, 'https://local.invalid');
  return { path: u.pathname.replace(/\/+$/, '') || '/', search: u.search, hash: u.hash };
}

function scrollToHash(hash: string) {
  if (!hash) return false;
  const el = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!el) return false;
  el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return true;
}

export const RouterProvider: React.FC<{ url: string; children: React.ReactNode }> = ({ url, children }) => {
  const [loc, setLoc] = useState(() => splitUrl(url));

  useEffect(() => {
    const onPop = () => setLoc(splitUrl(window.location.href));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback<RouterState['navigate']>((to, opts) => {
    const next = splitUrl(to);
    const current = splitUrl(window.location.href);
    const href = `${next.path}${next.search}${next.hash}`;
    if (opts?.replace) window.history.replaceState(null, '', href);
    else window.history.pushState(null, '', href);
    setLoc(next);
    const samePage = next.path === current.path;
    requestAnimationFrame(() => {
      if (scrollToHash(next.hash)) return;
      if (!opts?.keepScroll && !(samePage && next.search !== current.search)) window.scrollTo({ top: 0 });
    });
  }, []);

  // Move focus to the main heading after page changes, for keyboard and screen reader users.
  useEffect(() => {
    const main = document.getElementById('main');
    if (main && document.activeElement && document.activeElement !== document.body) {
      const h1 = main.querySelector('h1') as HTMLElement | null;
      if (h1) {
        h1.setAttribute('tabindex', '-1');
        h1.focus({ preventScroll: true });
      }
    }
  }, [loc.path]);

  const value = useMemo(() => ({ ...loc, navigate }), [loc, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used inside RouterProvider');
  return ctx;
}

export function useQueryParam(name: string): string {
  const { search } = useRouter();
  // Search params are applied after hydration so the prerendered HTML and first client render match.
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(new URLSearchParams(search).get(name) ?? '');
  }, [search, name]);
  return value;
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, onClick, ...rest }, ref) => {
  const { navigate } = useRouter();
  return (
    <a
      ref={ref}
      href={to}
      onClick={(e) => {
        onClick?.(e);
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          rest.target === '_blank' ||
          /^(https?:|mailto:|tel:)/.test(to)
        ) {
          return;
        }
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    />
  );
});
Link.displayName = 'Link';

export type Route =
  | { name: 'home' }
  | { name: 'services' }
  | { name: 'service'; id: string }
  | { name: 'gifts' }
  | { name: 'gift'; id: string }
  | { name: 'about' }
  | { name: 'faq' }
  | { name: 'contact' }
  | { name: 'privacy' }
  | { name: 'notFound' };

export function matchRoute(path: string): Route {
  const p = path.replace(/\/+$/, '') || '/';
  if (p === '/') return { name: 'home' };
  if (p === '/services') return { name: 'services' };
  if (p === '/gifts') return { name: 'gifts' };
  if (p === '/about') return { name: 'about' };
  if (p === '/faq') return { name: 'faq' };
  if (p === '/contact') return { name: 'contact' };
  if (p === '/privacy') return { name: 'privacy' };
  let m = /^\/services\/([a-z0-9-]+)$/.exec(p);
  if (m) return { name: 'service', id: m[1] };
  m = /^\/gifts\/([a-z0-9-]+)$/.exec(p);
  if (m) return { name: 'gift', id: m[1] };
  return { name: 'notFound' };
}
