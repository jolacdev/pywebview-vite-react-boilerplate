import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

// NOTE: Extend this API definition with the Python method signatures to get a proper TS type checking.
type PywebviewAPI = {
  generate_random_number_array: (length?: number) => Promise<number[]>;
} & {
  [key: string]: (...args: unknown[]) => Promise<unknown>;
};

declare global {
  interface Window {
    pywebview: {
      // The `api` object is exposed from Python, contains declared Python methods passed with the `js_api` parameter.
      api: PywebviewAPI;
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
