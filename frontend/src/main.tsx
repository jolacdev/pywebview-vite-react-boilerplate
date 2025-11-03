import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { PyWebViewApiType as PyWebViewApi } from './types/api';

import './index.css';
declare global {
  interface Window {
    pywebview: {
      // The `api` object is exposed from Python, contains declared Python methods passed with the `js_api` parameter.
      api: PyWebViewApi; // NOTE: Type auto-generated from `api.py` definition using PyFlow + TSC.
      // The `state` object is a custom attribute added from JavaScript, used to share frontend data and functions.
      state?: Record<string, unknown>;
      [key: string]: unknown;
    };
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
