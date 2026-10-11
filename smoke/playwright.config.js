import { defineConfig } from '@playwright/test';

if (!process.env.SITE_URL) throw new Error('SITE_URL must point to the website to check.');

export default defineConfig({
  testDir: '.',
  testMatch: 'calculator.spec.js',
  timeout: 30000,
  retries: 2,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: process.env.SITE_URL,
    browserName: 'chromium',
  },
});
