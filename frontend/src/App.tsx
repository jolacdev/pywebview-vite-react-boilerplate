import { useEffect, useState } from 'react';

import { SystemInfoType } from './types/pywebview/pywebview-api';

const App = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfoType>();
  const [ticker, setTicker] = useState('');
  const [content, saveContent] = useState(
    'Using Python as backend, you can perform operations that are not allowed in Javascript, for example disk access. Click button below to save this content to hard drive.',
  );

  useEffect(() => {
    if (!window.pywebview.state.setTicker) {
      window.pywebview.state.setTicker = setTicker;
    }
  }, []);

  useEffect(() => {
    const fetchSystemInfo = async () => {
      setSystemInfo(await window.pywebview.api.get_system_info());
    };

    fetchSystemInfo();
  }, []);

  if (!systemInfo) {
    return;
  }

  return (
    <div className="flex flex-col items-center my-8">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
        PyWebView
      </h1>

      <p>{`Data from Python 🐍: ${systemInfo?.hostname} is running in ${systemInfo?.os} v${systemInfo?.version}.`}</p>

      <em className="text-base">
        Python ↔ JavaScript communication bridge. Python value:
        <strong>{ticker}</strong>
      </em>

      <div className="flex flex-col items-center editor-container gap-4">
        <textarea
          className="block p-2.5 w-120 h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={content}
          onChange={(e) => {
            saveContent(e.target.value);
          }}
        />
        <div className="flex gap-2">
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 active:not-disabled:scale-95 transition-all duration-50"
            onClick={() => {
              window.pywebview.api
                .generate_random_number_array(2)
                .then((arr) => {
                  const randArrSttr = arr.join(', ');
                  saveContent(randArrSttr);
                });
            }}
          >
            Generate Rand Arr
          </button>
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 active:not-disabled:scale-95 transition-all duration-50"
            onClick={() => {
              window.pywebview.api.save_content(content);
            }}
          >
            Save
          </button>
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 active:not-disabled:scale-95 transition-all duration-50"
            onClick={() => window.pywebview.api.toggle_fullscreen()}
          >
            Toggle Full Screen
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
