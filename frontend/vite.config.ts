import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: '',
    emptyOutDir: true,
    outDir: '../frontend_dist',
    sourcemap: false,
  },
  server: {
    port: 3000,
  },
});
