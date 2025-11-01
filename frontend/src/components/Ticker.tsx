import { useEffect, useState } from 'react';

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
    <div className="flex flex-col items-center my-8">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
        PyWebView
      </h1>
      <em className="text-base">
        Python ↔ JavaScript communication bridge. Python value:
        <strong>{ticker}</strong>
      </em>
    </div>
  );
};
