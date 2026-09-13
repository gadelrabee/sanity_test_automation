import { expect } from '@playwright/test';

export class TestCompletionPage {
    constructor(page) {
        this.page = page;

        this.completionModal = page.locator('.app-modal');
        this.completionTitle = this.completionModal.getByText(
            'Places in a School',
            { exact: true }
        );
        this.completionStatus = this.completionModal.getByText(
            'Complete',
            { exact: true }
        );
        this.successMessage = this.completionModal.getByText(
            'That’s the way!',
            { exact: true }
        );
        this.backHomeButton = this.completionModal.getByRole(
            'button',
            { name: 'Back Home' }
        );
        this.nextActivityButton = this.completionModal.getByRole(
            'button',
            { name: 'Next activity' }
        );
    }

    async verifyActivityCompleted() {
        console.log('Modal count:', await this.completionModal.count());
        await expect(this.completionModal).toBeVisible()
        await expect(this.completionModal).toBeVisible();
        await expect(this.completionTitle).toBeVisible();
        await expect(this.completionStatus).toBeVisible();
        await expect(this.successMessage).toBeVisible();

        await expect(
            this.completionModal.getByText(
                'WOW, you got a score of 100 and got all the stars.'
            )
        ).toBeVisible();
    }

    async goBackHome() { 
        await expect(this.backHomeButton).toBeVisible();
        await this.backHomeButton.click();
    }
}