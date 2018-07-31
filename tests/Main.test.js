const puppeteer = require('puppeteer');

// Test that should always be true
describe('Review Website', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:3001/');
  });

  it('should exist', async () => { // Server should be running
    await expect(page).toBeTruthy();
  });

  const notExpected = 'This is where Apps will render reviews';
  it('should not display "This is where Apps will render reviews" text on page', async () => {
    await expect(page).not.toMatch(notExpected);
  });

  it('should not display "This is where Apps will render reviews" text on page', async () => {
    await expect(page).not.toMatch(notExpected);
  });

  it('should have a Yes, No, and Funny Buttons', async () => {
    await expect(page).toMatch('Yes');
    await expect(page).toMatch('No');
    await expect(page).toMatch('Funny');
  });

  it('should have a hrs on record', async () => {
    await expect(page).toMatch('hrs on record');
  });

  it('should show how many people found a review helpful or funny', async () => {
    await expect(page).toMatch('people found this review helpful');
    await expect(page).toMatch('people found this review funny');
  });

  it('should show the date posted', async () => {
    await expect(page).toMatch('POSTED');
  });
});

// Testing
