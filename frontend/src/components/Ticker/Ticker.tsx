import { useEffect, useState } from 'react';

import './Ticker.css';

export const Ticker = () => {
  const [ticker, setTicker] = useState('');

  useEffect(() => {
    const handlePywebviewReady = () => {
      window.pywebview.state ||= {};
      window.pywebview.state.setTicker = setTicker;
    };

    if (window.pywebview) {
      handlePywebviewReady();
    } else {
      window.addEventListener('pywebviewready', handlePywebviewReady);
    }

    return () => {
      window.removeEventListener('pywebviewready', handlePywebviewReady);
    };
  }, []);

  return (
    <div className="ticker-container">
      <h1>PyWebView</h1>
      <em>
        Python ↔ JavaScript communication bridge. Python value:
        <strong>{ticker}</strong>
      </em>
    </div>
  );
};
