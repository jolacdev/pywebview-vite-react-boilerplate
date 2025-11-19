import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Card from './components/Card';
import { RefreshIcon } from './components/icons/RefresIcon';
import usePyWebViewState from './hooks/usePyWebViewState';
import { SystemInfoType } from './types/pywebview/pywebview-api';

const App = () => {
  const { t } = useTranslation();

  const [systemInfo, setSystemInfo] = useState<SystemInfoType>();
  const [content, saveContent] = useState<string>('');

  const timestamp = usePyWebViewState<number>({
    initialValue: 0,
    key: 'timestamp',
  });

  useEffect(() => {
    const fetchSystemInfo = async () => {
      setSystemInfo(await window.pywebview.api.get_system_info());
    };

    fetchSystemInfo();
  }, []);

  if (!systemInfo) {
    return;
  }

  const handleGenerateRandomNumberClick = async () => {
    const values = await window.pywebview.api.generate_random_number_array(2);
    saveContent(values.join(', '));
  };

  const { hostname, os, ram, version } = systemInfo;
  const date = new Date(timestamp).toLocaleString();

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-charcoal-50 mb-12 text-center text-5xl font-extrabold">
        {t('title')}
      </h1>

      <p className="text-charcoal-50 mb-6 text-center">{t('description')}</p>

      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-7">
        <Card
          className="text-center md:col-span-7"
          title={t('currentDate.title')}
        >
          {date}
        </Card>

        <Card className="md:col-span-3" title={t('systemInfo.title')}>
          <ul className="list-inside list-disc">
            <li>
              <Trans i18nKey="systemInfo.hostname" values={{ hostname }} />
            </li>
            <li>
              <Trans i18nKey="systemInfo.os" values={{ os }} />
            </li>
            <li>
              <Trans i18nKey="systemInfo.version" values={{ version }} />
            </li>
            <li>
              <Trans i18nKey="systemInfo.ram" values={{ ram }} />
            </li>
          </ul>
        </Card>

        <Card
          className="flex flex-col text-center md:col-span-4"
          title={t('randomNumber.title')}
        >
          <div className="flex flex-1 gap-4">
            <textarea
              className="bg-charcoal-800 text-charcoal-200 w-full rounded-sm p-3"
              placeholder={t('randomNumber.placeholder')}
              value={content}
              onChange={(e) => {
                saveContent(e.target.value);
              }}
            />
            <div className="flex flex-col justify-end gap-4">
              <button
                className="bg-leaf-950 focus:bg-leaf-900 active:not-disabled:bg-leaf-800 flex items-center justify-center rounded-sm p-2 text-white transition-all duration-50"
                onClick={handleGenerateRandomNumberClick}
              >
                <RefreshIcon />
              </button>
              <button
                className="bg-leaf-950 focus:bg-leaf-900 active:not-disabled:bg-leaf-800 rounded-sm p-2 text-white transition-all duration-50"
                onClick={() => window.pywebview.api.save_content(content)}
              >
                {t('randomNumber.save')}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default App;
