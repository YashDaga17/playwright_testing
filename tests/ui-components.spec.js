import { test, expect } from '@playwright/test';

test.describe('UI Components and Styling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display home page components correctly', async ({ page }) => {
        await expect(page.locator('.hero')).toBeVisible();
        await expect(page.locator('.features')).toBeVisible();
        await expect(page.locator('.feature-card')).toHaveCount(3);

        const featureCards = page.locator('.feature-card');
        await expect(featureCards.nth(0)).toContainText('Easy Task Management');
        await expect(featureCards.nth(1)).toContainText('Clean Interface');
        await expect(featureCards.nth(2)).toContainText('Instant Updates');
    });

    test('should display about page content correctly', async ({ page }) => {
        await page.click('button:has-text("About")');

        await expect(page.locator('.about-container')).toBeVisible();
        await expect(page.locator('.about-card')).toHaveCount(4);

        const aboutCards = page.locator('.about-card');
        await expect(aboutCards.nth(0).locator('h3')).toContainText('What is this app?');
        await expect(aboutCards.nth(1).locator('h3')).toContainText('Key Features');
        await expect(aboutCards.nth(2).locator('h3')).toContainText('How to Use');
        await expect(aboutCards.nth(3).locator('h3')).toContainText('Built With');
    });

    test('should have responsive design elements', async ({ page }) => {
        // Check if main container is visible
        await expect(page.locator('.App')).toBeVisible();
        await expect(page.locator('.navbar')).toBeVisible();
        await expect(page.locator('.main-content')).toBeVisible();

        // Test navigation button styles
        const navButtons = page.locator('.nav-btn');
        for (let i = 0; i < await navButtons.count(); i++) {
            await expect(navButtons.nth(i)).toBeVisible();
        }
    });

    test('should display todo list UI elements correctly', async ({ page }) => {
        await page.click('button:has-text("Todo List")');

        await expect(page.locator('.todo-container')).toBeVisible();
        await expect(page.locator('.todo-input-section')).toBeVisible();
        await expect(page.locator('.todo-input')).toBeVisible();
        await expect(page.locator('.add-btn')).toBeVisible();
        await expect(page.locator('.todo-stats')).toBeVisible();

        // Check placeholder text
        await expect(page.locator('.todo-input')).toHaveAttribute('placeholder', 'Add a new task...');
    });

    test('should show active navigation state', async ({ page }) => {
        // Home should be active by default
        await expect(page.locator('.nav-btn.active')).toContainText('Home');

        // Click Todo List
        await page.click('button:has-text("Todo List")');
        await expect(page.locator('.nav-btn.active')).toContainText('Todo List');

        // Click About
        await page.click('button:has-text("About")');
        await expect(page.locator('.nav-btn.active')).toContainText('About');
    });

    test('should display correct button styles and interactions', async ({ page }) => {
        await page.click('button:has-text("Todo List")');

        // Add a todo to test button interactions
        await page.locator('.todo-input').fill('Test task');
        await page.locator('.add-btn').click();

        const deleteButton = page.locator('.delete-btn');
        await expect(deleteButton).toBeVisible();
        await expect(deleteButton).toHaveText('Delete');

        // Test button hover (if possible in headless mode)
        await deleteButton.hover();
        await expect(deleteButton).toBeVisible();
    });
});
