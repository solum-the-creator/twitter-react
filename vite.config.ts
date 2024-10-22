import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/firebase': path.resolve(__dirname, 'src/firebase'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
    },
  },
});
