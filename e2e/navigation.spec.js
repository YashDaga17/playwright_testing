import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should navigate to todo list section', async ({ page }) => {
        // Click the Todo List navigation button
        await page.click('button:has-text("Todo List")');

        // Wait for the content to load and verify we're on the todo section
        await expect(page.locator('h2')).toBeVisible();
        await expect(page.locator('h2')).toContainText('My Todo List');
        
        // Verify the active navigation button
        await expect(page.locator('.nav-btn.active')).toContainText('Todo List');
        
        // Verify todo-specific elements are visible
        await expect(page.locator('.todo-input')).toBeVisible();
        await expect(page.locator('.add-btn')).toBeVisible();
    });

    test('should navigate to about section', async ({ page }) => {
        // Click the About navigation button
        await page.click('button:has-text("About")');

        // Wait for the content to load and verify we're on the about section
        await expect(page.locator('h2')).toBeVisible();
        await expect(page.locator('h2')).toContainText('About This Todo Application');
        
        // Verify the active navigation button
        await expect(page.locator('.nav-btn.active')).toContainText('About');
        
        // Verify about-specific content is visible
        await expect(page.locator('.about-container')).toBeVisible();
    });

    test('should display correct navigation bar styling', async ({ page }) => {
        const navbar = page.locator('.navbar');
        await expect(navbar).toBeVisible();

        // Check the brand/title
        const navBrand = page.locator('.nav-brand h1');
        await expect(navBrand).toContainText('My Todo App');

        // Check all navigation buttons are present
        const navButtons = page.locator('.nav-btn');
        await expect(navButtons).toHaveCount(3);
        
        // Check button texts
        await expect(navButtons.nth(0)).toContainText('Home');
        await expect(navButtons.nth(1)).toContainText('Todo List');
        await expect(navButtons.nth(2)).toContainText('About');
    });

    test('should highlight active navigation button', async ({ page }) => {
        // Home should be active by default
        await expect(page.locator('.nav-btn.active')).toContainText('Home');
        
        // Navigate to Todo List and check active state
        await page.click('button:has-text("Todo List")');
        await expect(page.locator('.nav-btn.active')).toContainText('Todo List');
        await expect(page.locator('button:has-text("Home")')).not.toHaveClass(/active/);
        
        // Navigate to About and check active state
        await page.click('button:has-text("About")');
        await expect(page.locator('.nav-btn.active')).toContainText('About');
        await expect(page.locator('button:has-text("Todo List")')).not.toHaveClass(/active/);
    });
});