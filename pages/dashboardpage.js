import { expect } from '@playwright/test';

export class DashboardPage {
    constructor(page) {
        this.page = page;

        this.homePageButton = page.getByRole('button', {
            name: 'Home Page',
        });

        this.aroundSchoolButton = page.getByText('1').nth(5);

        this.activityButton = page.getByRole('button', {
            name: '1 Places in a School',
        });

        this.studentHeading = page.getByRole('heading', {
            name: /Student - Rabindra,/,
        });
    }

    async goToHomePage() {
        await this.homePageButton.click();
    }

    async openAroundTheSchool() {
        await this.aroundSchoolButton.waitFor({ state: 'visible' });
        await this.aroundSchoolButton.click();
    }

    async openPlacesInSchoolActivity() {
        await expect(this.activityButton).toBeVisible();
        await this.activityButton.click();
    }

    async verifyStudentProfile() {
        await expect(this.studentHeading).toBeVisible();
    }

    async verifyHomePage() {
        // Verify student profile heading is visible
        await expect(this.studentHeading).toBeVisible();
        
        // Verify activity list is loaded (Around the School button visible)
        await this.aroundSchoolButton.waitFor({ state: 'visible', timeout: 5000 });
        await expect(this.aroundSchoolButton).toBeVisible();
    }

    async verifyAroundTheSchoolOpened() {
        // Verify Places in a School activity is visible and ready to start
        await expect(this.activityButton).toBeVisible();
    }
}