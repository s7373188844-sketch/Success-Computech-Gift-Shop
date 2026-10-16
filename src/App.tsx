import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { RouterProvider, matchRoute, useRouter } from './router';
import { getPageMeta } from './seo';
import { SITE } from './site';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AskMitraChat } from './components/AskMitraChat';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Gifts } from './pages/Gifts';
import { GiftDetail } from './pages/GiftDetail';
import { About } from './pages/About';
import { FaqPage } from './pages/FaqPage';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keeps <title>, description and canonical in sync during client-side navigation. */
const DocumentMeta: React.FC = () => {
  const { path } = useRouter();
  useEffect(() => {
    const meta = getPageMeta(path);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    const url = `${SITE.url}${meta.path === '/' ? '/' : meta.path}`;
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
  }, [path]);
  return null;
};

const Page: React.FC = () => {
  const { path } = useRouter();
  const route = matchRoute(path);
  switch (route.name) {
    case 'home':
      return <Home />;
    case 'services':
      return <Services />;
    case 'service':
      return <ServiceDetail id={route.id} />;
    case 'gifts':
      return <Gifts />;
    case 'gift':
      return <GiftDetail id={route.id} />;
    case 'about':
      return <About />;
    case 'faq':
      return <FaqPage />;
    case 'contact':
      return <Contact />;
    case 'privacy':
      return <Privacy />;
    default:
      return <NotFound />;
  }
};

const Shell: React.FC = () => {
  const { t } = useApp();
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Page />
      </main>
      <Footer />
      <FloatingActions />
      <AskMitraChat />
      <DocumentMeta />
    </>
  );
};

export default function App({ url }: { url: string }) {
  return (
    <RouterProvider url={url}>
      <AppProvider>
        <Shell />
      </AppProvider>
    </RouterProvider>
  );
}
