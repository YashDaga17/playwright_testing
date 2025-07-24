import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should navigate to todo list section', async ({ page }) => {
        await page.click('button:has-text("Todo List")');
        await expect(page.locator('h2')).toContainText('My Todo List');
        await expect(page.locator('.nav')).toContainText('Todo List');
    });

    test('should navigate to about section', async ({ page }) => {
        await page.click('button:has-text("About")');
        await expect(page.locator('h2')).toContainText('About This Todo Application');
        await expect(page.locator('.nav-btn.active')).toContainText('About');
    });

    test('should display correct navigation bar styling', async ({ page }) => {
        const navbar = page.locator('.navbar');
        await expect(navbar).toBeVisible();

        const navBrand = page.locator('.nav-brand h1');
        await expect(navBrand).toContainText('My Todo App');

        const navButtons = page.locator('.nav-btn');
        await expect(navButtons).toHaveCount(3);
    });
});
