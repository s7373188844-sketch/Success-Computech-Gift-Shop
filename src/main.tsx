import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/pages.css';

const root = document.getElementById('root')!;
const isAdminRoute = window.location.pathname.replace(/\/+$/, '') === '/admin';

if (isAdminRoute) {
  // The admin dashboard keeps its original Tailwind styling and is loaded only on /admin.
  import('./admin/AdminEntry').then(({ mountAdmin }) => mountAdmin(root));
} else {
  const app = (
    <StrictMode>
      <App url={window.location.href} />
    </StrictMode>
  );
  // Pages are prerendered at build time; hydrate them. Fall back to a fresh render in `npm run dev`.
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
