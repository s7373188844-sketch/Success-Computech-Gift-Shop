import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AdminDashboard } from './AdminDashboard';
import './admin.css';

export function mountAdmin(root: HTMLElement) {
  document.title = 'Ask Mitra dashboard';
  root.innerHTML = '';
  createRoot(root).render(
    <StrictMode>
      <AdminDashboard />
    </StrictMode>
  );
}
