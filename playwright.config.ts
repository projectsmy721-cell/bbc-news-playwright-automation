import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'], // console logs
    ['junit', { outputFile: 'test-results/results.xml' }], // Jenkins test result parsing
    ['html', { open: 'never', outputFolder: 'playwright-report' }], // For detailed report
  ],
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'retain-on-failure',
    navigationTimeout: 60000,
    actionTimeout: 30000,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});
