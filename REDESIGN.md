# Success Computech & Gift Shop – website redesign

Branch: `redesign` (the first commit, "Checkpoint: original site before redesign", is the untouched original).

## Preview and deploy (safe, without touching the live site)

1. Unzip, then in the project folder run `npm install` (this also refreshes `package-lock.json`; delete `bun.lock` if you do not use Bun).
2. `npm run build` – builds the site and writes a real HTML file for every page into `dist/`.
3. `npm run preview` – open http://localhost:4173 to check it.
4. Push to a new GitHub branch called `redesign`:
   `git checkout -b redesign && git add -A && git commit -m "Website redesign" && git push -u origin redesign`
5. Vercel builds a **Preview** URL for that branch automatically. The live domain stays on `main`.
6. When you are happy, merge `redesign` into `main` on GitHub. Vercel then deploys it to www.successcomputechgiftshop.in.

Environment variables are unchanged: `GEMINI_API_KEY`, `OPENAI_API_KEY`, `OPENAI_MODEL`, `ADMIN_DASHBOARD_PASSWORD`.
`npm run dev` still works for editing (pages render in the browser instead of being prerendered).

## What changed

- **SEO:** every page is prerendered to HTML with its own title, description, canonical URL and structured data (LocalBusiness, Service, BreadcrumbList, FAQPage). `sitemap.xml` and `robots.txt` are generated at build time. The old site sent Google an empty page.
- **Pages:** Home, Digital services (search + category filter, `?q=` and `?category=` links work), 25 service pages, Make My Gifts, 6 gift pages, About, FAQs, Contact (map, directions, QR), Privacy, 404. `/admin` (Ask Mitra dashboard) works as before.
- **Fixed facts:** Sunday hours were wrong in about 10 places (9:00–2:00); now 9:30 AM–2:30 PM everywhere, from one file (`src/site.ts`).
- **Removed:** fake status tracker with demo customers, March 2025 update ticker, unverifiable claims ("zero rejections", "100+ services", customer counts, "Parivahan certified", "Government CSC"), 3D canvas, scrolling rails, jsPDF (replaced by "Print this checklist"), `motion`, `express`.
- **Design:** red / white / charcoal / light grey tokens in `src/styles/tokens.css`; Anek Tamil + Hind Madurai fonts (both support Tamil); English by default with a Tamil toggle that is remembered.
- **Ask Mitra:** same API, new design, mobile number validation, privacy note. Tailwind now loads only on `/admin`.
- **Performance:** logo 612 KB → 44 KB WebP; heavy libraries removed; map, QR and videos load lazily.

## Where to edit content

| What | File |
| --- | --- |
| Address, phone, hours, map link | `src/site.ts` |
| Services, documents, steps, service FAQs | `src/data/servicesData.ts` |
| Gift categories, photos, videos | `src/data/giftsData.ts` |
| General FAQs | `src/data/faqData.ts` |
| All button and heading text (English + Tamil) | `src/i18n.ts` |

## Photos and videos still needed

Put photos in `public/images/gifts/` (WebP, about 800×1000 px, under 150 KB) and list them in the `photos` array of each gift in `giftsData.ts`. Until then a line illustration is shown.

- Photo frames, laser-engraved plaques, mugs, acrylic/MDF, T-shirts/keychains, corporate orders: 2–4 photos each
- Shop front and counter: 2–3 photos (for About)

Videos go in `public/videos/` (MP4, 9:16, 10–30 s, under 8 MB, plus a poster JPG) and are listed in `SHOWCASE_VIDEOS`. The "See how it is made" section appears automatically once one clip is added. Suggested clips: laser engraving a plaque, photo to finished frame, printing a mug, sending documents on WhatsApp.

## Known limits

- Ask Mitra logs are saved in Vercel's temporary folder, so the admin dashboard can lose them after a restart. A small database (for example Vercel KV or Supabase) is needed to keep them.
- Fonts, Google Maps and QR images load from Google / qrserver.com.
- Lighthouse scores were not measured yet; run PageSpeed Insights on the Vercel preview URL.
