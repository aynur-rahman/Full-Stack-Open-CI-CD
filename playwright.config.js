const { defineConfig, devices } = require('@playwright/test')
module.exports = defineConfig({
  testDir: './e2e-tests', workers: 1, retries: 0, timeout: 30000,
  reporter: 'list', use: { ...devices['Desktop Chrome'], baseURL: 'http://127.0.0.1:5001' },
  webServer: { command: 'npm run start-prod', url: 'http://127.0.0.1:5001', reuseExistingServer: !process.env.CI }
})
