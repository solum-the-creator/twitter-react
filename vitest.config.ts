/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.tsx',
      include: ['**/*.test.tsx', '**/*.test.ts'],

      coverage: {
        provider: 'v8',
        reportsDirectory: './coverage',
        reporter: ['text', 'json', 'html'],
      },
    },
  }),
);
