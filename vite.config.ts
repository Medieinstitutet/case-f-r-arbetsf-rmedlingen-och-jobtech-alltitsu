import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@digi/arbetsformedlingen'],
  },
  base: '/case-f-r-arbetsf-rmedlingen-och-jobtech-alltitsu/',
  plugins: [react()],
});
