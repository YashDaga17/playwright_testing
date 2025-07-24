import { test, expect } from '@playwright/test';

test.describe('Todo List Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.click('button:has-text("Todo List")');
        await expect(page.locator('h2')).toContainText('My Todo List');
    });

    test('should display empty state initially', async ({ page }) => {
        await expect(page.locator('.empty-state')).toContainText('No tasks yet. Add one above to get started!');
        await expect(page.locator('.todo-stats')).toContainText('0 of 0 tasks completed');
    });

    test('should add a new todo item', async ({ page }) => {
        const todoInput = page.locator('.todo-input');
        const addButton = page.locator('.add-btn');

        await todoInput.fill('Buy groceries');
        await addButton.click();

        await expect(page.locator('.todo-item')).toHaveCount(1);
        await expect(page.locator('.todo-text')).toContainText('Buy groceries');
        await expect(page.locator('.todo-stats')).toContainText('0 of 1 tasks completed');
        await expect(todoInput).toHaveValue('');
    });

    test('should add todo item by pressing Enter', async ({ page }) => {
        const todoInput = page.locator('.todo-input');

        await todoInput.fill('Learn Playwright');
        await todoInput.press('Enter');

        await expect(page.locator('.todo-item')).toHaveCount(1);
        await expect(page.locator('.todo-text')).toContainText('Learn Playwright');
    });

    test('should not add empty todo items', async ({ page }) => {
        const addButton = page.locator('.add-btn');

        await addButton.click();

        await expect(page.locator('.todo-item')).toHaveCount(0);
        await expect(page.locator('.empty-state')).toBeVisible();
    });

    test('should not add todo items with only whitespace', async ({ page }) => {
        const todoInput = page.locator('.todo-input');
        const addButton = page.locator('.add-btn');

        await todoInput.fill('   ');
        await addButton.click();

        await expect(page.locator('.todo-item')).toHaveCount(0);
        await expect(page.locator('.empty-state')).toBeVisible();
    });

    test('should mark todo as completed', async ({ page }) => {
        // Add a todo first
        await page.locator('.todo-input').fill('Complete this task');
        await page.locator('.add-btn').click();

        const checkbox = page.locator('.todo-checkbox');
        const todoItem = page.locator('.todo-item');

        await checkbox.check();

        await expect(checkbox).toBeChecked();
        await expect(todoItem).toHaveClass(/completed/);
        await expect(page.locator('.todo-stats')).toContainText('1 of 1 tasks completed');
    });

    test('should unmark completed todo', async ({ page }) => {
        // Add and complete a todo first
        await page.locator('.todo-input').fill('Toggle this task');
        await page.locator('.add-btn').click();
        await page.locator('.todo-checkbox').check();

        const checkbox = page.locator('.todo-checkbox');
        const todoItem = page.locator('.todo-item');

        await checkbox.uncheck();

        await expect(checkbox).not.toBeChecked();
        await expect(todoItem).not.toHaveClass(/completed/);
        await expect(page.locator('.todo-stats')).toContainText('0 of 1 tasks completed');
    });

    test('should delete todo item', async ({ page }) => {
        // Add a todo first
        await page.locator('.todo-input').fill('Delete this task');
        await page.locator('.add-btn').click();

        const deleteButton = page.locator('.delete-btn');

        await deleteButton.click();

        await expect(page.locator('.todo-item')).toHaveCount(0);
        await expect(page.locator('.empty-state')).toBeVisible();
        await expect(page.locator('.todo-stats')).toContainText('0 of 0 tasks completed');
    });

    test('should handle multiple todo items', async ({ page }) => {
        const todos = ['Task 1', 'Task 2', 'Task 3'];

        // Add multiple todos
        for (const todo of todos) {
            await page.locator('.todo-input').fill(todo);
            await page.locator('.add-btn').click();
        }

        await expect(page.locator('.todo-item')).toHaveCount(3);
        await expect(page.locator('.todo-stats')).toContainText('0 of 3 tasks completed');

        // Complete first and third tasks
        await page.locator('.todo-item').nth(0).locator('.todo-checkbox').check();
        await page.locator('.todo-item').nth(2).locator('.todo-checkbox').check();

        await expect(page.locator('.todo-stats')).toContainText('2 of 3 tasks completed');

        // Delete second task
        await page.locator('.todo-item').nth(1).locator('.delete-btn').click();

        await expect(page.locator('.todo-item')).toHaveCount(2);
        await expect(page.locator('.todo-stats')).toContainText('2 of 2 tasks completed');
    });
});
