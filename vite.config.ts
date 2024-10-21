import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      { find: '@/assets', replacement: '/src/assets' },
      { find: '@/components', replacement: '/src/components' },
      { find: '@/pages', replacement: '/src/pages' },
      { find: '@/utils', replacement: '/src/utils' },
      { find: '@/hooks', replacement: '/src/hooks' },
      { find: '@/styles', replacement: '/src/styles' },
      { find: '@/store', replacement: '/src/store' },
      { find: '@/types', replacement: '/src/types' },
      { find: '@/services', replacement: '/src/services' },
      { find: '@/features', replacement: '/src/features' },
      { find: '@', replacement: '/src' },
    ],
  },
});
