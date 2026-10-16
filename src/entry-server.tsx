import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { allPrerenderPaths, getPageMeta, renderHeadTags } from './seo';

/** Used by scripts/prerender.mjs at build time. */
export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <App url={`https://www.successcomputechgiftshop.in${url}`} />
    </StrictMode>
  );
  const meta = getPageMeta(url);
  return { html, head: renderHeadTags(meta), noindex: !!meta.noindex };
}

export { allPrerenderPaths };
