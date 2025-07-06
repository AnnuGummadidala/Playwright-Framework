// @ts-check
import { defineConfig, devices } from '@playwright/test';

 

 
export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000, // Set a global timeout of 30 seconds for each test
  retries: 1, // Retry failed tests once
 
  reporter: [
    ['list'], // Use the default list reporter
     ['allure-playwright'],
      ['junit', { outputFile: 'reports/junit/results.xml' }],  // JUnit XML report
    // JSON reporter saving in same folder
    // ['json', { outputFile: 'reports/allure-results/test-results.json' }],
  ],

 //outputDir: 'reports/allure-results', // Directory to store test results
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Set the viewport size
    screenshot: 'on', // Take a screenshot only on test failure
    video: 'retain-on-failure', // Record video only on test failure
    trace: 'retain-on-failure', // Retain trace files only on test failure
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    
  ],

  
});

