import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.getByRole('textbox', {
            name: 'Email or username',
        });

        this.passwordInput = page.getByRole('textbox', {
            name: 'Password',
        });

        this.signInButton = page.getByRole('button', {
            name: 'Sign in',
        });
    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        await Promise.all([
            this.page.waitForNavigation(),
            this.signInButton.click(),
        ]);
    }

    async verifyLoginSuccessful() {
        await expect(
            this.page.getByRole('button', {
                name: 'Home Page',
            })
        ).toBeVisible();
    }

    async verifyLoginPageLoaded() {
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.signInButton).toBeVisible();
    }
}