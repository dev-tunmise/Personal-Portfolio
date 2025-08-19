const { test, expect } = require('@playwright/test');

test('hello world!', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed
    const title = await page.title();
    expect(title).toBe('Your Portfolio Title'); // Adjust the expected title as needed
});