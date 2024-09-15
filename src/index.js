import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';


const manifestUrl = "URL"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TonConnectUIProvider>
);


