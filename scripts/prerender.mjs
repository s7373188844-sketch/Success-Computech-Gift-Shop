/**
 * Writes a real HTML file for every page so search engines and link previews
 * see the content. Runs after `vite build` (client) and `vite build --ssr`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const SITE_URL = 'https://www.successcomputechgiftshop.in';

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html template is missing <!--app-head--> or <div id="root"></div>');
}
const { render, allPrerenderPaths } = await import(pathToFileURL(ssrEntry).href);

const fill = (head, html) => template.replace('<!--app-head-->', head).replace('<div id="root"></div>', `<div id="root">${html}</div>`);

async function write(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
}

const paths = allPrerenderPaths();
for (const url of paths) {
  const { html, head } = render(url);
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url.slice(1), 'index.html');
  await write(file, fill(head, html));
}

// 404 page served by Vercel for unknown URLs
{
  const { html, head } = render('/404');
  await write(path.join(dist, '404.html'), fill(head, html));
}

// /admin is client-only and never indexed
await write(
  path.join(dist, 'admin', 'index.html'),
  template.replace('<!--app-head-->', '<title>Ask Mitra dashboard</title>\n    <meta name="robots" content="noindex, nofollow" />')
);

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
await write(path.join(dist, 'sitemap.xml'), sitemap);
await write(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Prerendered ${paths.length} pages + 404 + admin shell, sitemap.xml and robots.txt`);
