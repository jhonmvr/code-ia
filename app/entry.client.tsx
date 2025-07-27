import { RemixBrowser } from '@remix-run/react';
import { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');

if (rootElement) {
  startTransition(() => {
    hydrateRoot(rootElement, <RemixBrowser />);
  });
} else {
  console.error('No se encontró el elemento #root para hidratar la app');
}