import { PyWebViewApi, SystemInfo } from '../types/pywebview/pywebview-api';
import { PyWebViewState } from '../types/pywebview/pywebview-state';

const mockState: PyWebViewState = {
  addEventListener: () => {},
  dispatchEvent: () => true,
  removeEventListener: () => {},
};

const mockApi: PyWebViewApi = {
  generate_random_number_array: (): Promise<number[]> =>
    Promise.resolve([Math.random()]),
  get_system_info: (): Promise<SystemInfo> => {
    const systemInfo: SystemInfo = {
      hostname: 'standalone',
      os: 'Windows',
      ram: 16,
      version: '11',
    };
    return Promise.resolve(systemInfo);
  },
  save_content: (): Promise<void> => Promise.resolve(),
};

export const createPyWebViewMock = () => {
  window.pywebview = {
    api: mockApi,
    state: mockState,
  };
};
