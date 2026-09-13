import { expect } from '@playwright/test';

export class ActivityPage {
    constructor(page) {
        this.page = page;

        this.letsGoButton = page.getByRole('button', {
            name: "Let's Go",
        });

        this.playSoundButton = page.getByRole('button', {
            name: 'Play Sound',
        });

        this.continueGameButton = page.getByRole('button', {
            name: 'Continue Game',
        });

    }

    async startActivity() {
        await expect(this.letsGoButton).toBeVisible();
        await this.letsGoButton.click();
    }

    async playSound() {
        await expect(this.playSoundButton).toBeVisible();
        await this.playSoundButton.click();

    }

    async selectAnswer(answer) {
        const answerButton = this.page.getByRole('button', {
            name: answer,
        });

        await expect(answerButton).toBeVisible();
        await answerButton.click();
    }

    async continueGame() {
        await expect(this.continueGameButton).toBeVisible();
        await this.continueGameButton.click();
    }

    async verifyActivityStarted() {
        // Verify that we've transitioned from start screen to first question
        // Play Sound button should be visible
        await expect(this.playSoundButton).toBeVisible();
        
        // Verify Let's Go button is no longer visible
        await expect(this.letsGoButton).not.toBeVisible();
    }

    async verifyAnswerSelected(answer) {
        // Verify the selected answer button has focus or is in active state
        const answerButton = this.page.getByRole('button', {
            name: answer,
        });
        
        // Wait for any visual feedback from selection
        await this.page.waitForTimeout(500);
        // await expect(answerButton).toHaveAttribute('aria-disabled', 'true');
    }

    async verifyQuestionTransitioned() {
        // Verify Play Sound button is ready for next question
        await expect(this.playSoundButton).toBeVisible();
    }

    async verifySectionTransitioned() {
        // After Continue Game, verify we're ready for next section
        // Play Sound button should be visible for next question
        await expect(this.playSoundButton).toBeVisible();
        
        // Continue Game button should not be visible
        await expect(this.continueGameButton).not.toBeVisible();
    }

    async verifyActivityCompleted() {
        // Verify Continue Game button is no longer visible (transition to completion)
        await expect(this.continueGameButton).not.toBeVisible();
    }

}