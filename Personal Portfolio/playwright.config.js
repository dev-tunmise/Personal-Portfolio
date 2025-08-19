const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    headless: true,
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
  webServer: {
    command: 'npm run start',
    port: 3000,
  },
});