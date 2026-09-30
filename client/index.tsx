import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './src/components/App.tsx';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <Auth0Provider
        domain="hotoke2026-levi.au.auth0.com"
        clientId="6jhxfLHcj4zwzlIIytFysBrtGLfVIB89"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Ensure <div id='root'></div> exists in your index.html.");
}