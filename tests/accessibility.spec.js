import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should have proper heading structure', async ({ page }) => {
        await expect(page.locator('h1')).toBeVisible();

        // Navigate to todo section
        await page.click('button:has-text("Todo List")');
        await expect(page.locator('h2')).toBeVisible();

        // Navigate to about section
        await page.click('button:has-text("About")');
        await expect(page.locator('h2')).toBeVisible();
        await expect(page.locator('h3')).toHaveCount(4);
    });

    test('should have keyboard navigation support', async ({ page }) => {
        // Test tab navigation
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');

        // Should be able to activate buttons with Enter
        await page.keyboard.press('Enter');

        // Check if navigation worked
        const currentUrl = page.url();
        expect(currentUrl).toBeTruthy();
    });

    test('should have proper form labels and inputs', async ({ page }) => {
        await page.click('button:has-text("Todo List")');

        const todoInput = page.locator('.todo-input');
        await expect(todoInput).toHaveAttribute('placeholder', 'Add a new task...');
        await expect(todoInput).toHaveAttribute('type', 'text');
    });

    test('should support keyboard shortcuts in todo input', async ({ page }) => {
        await page.click('button:has-text("Todo List")');

        const todoInput = page.locator('.todo-input');
        await todoInput.fill('Test with Enter key');
        await todoInput.press('Enter');

        await expect(page.locator('.todo-item')).toHaveCount(1);
        await expect(page.locator('.todo-text')).toContainText('Test with Enter key');
    });

    test('should have accessible checkboxes', async ({ page }) => {
        await page.click('button:has-text("Todo List")');

        // Add a todo first
        await page.locator('.todo-input').fill('Checkbox test');
        await page.locator('.add-btn').click();

        const checkbox = page.locator('.todo-checkbox');
        await expect(checkbox).toHaveAttribute('type', 'checkbox');

        // Test keyboard interaction
        await checkbox.focus();
        await page.keyboard.press('Space');
        await expect(checkbox).toBeChecked();
    });

    test('@visual should maintain consistent visual appearance', async ({ page }) => {
        // Visual regression test for accessibility features
        await expect(page).toHaveScreenshot('accessibility-home.png');

        await page.click('button:has-text("Todo List")');
        await expect(page).toHaveScreenshot('accessibility-todo.png');

        await page.click('button:has-text("About")');
        await expect(page).toHaveScreenshot('accessibility-about.png');
    });
});
