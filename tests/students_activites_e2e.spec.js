import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginpage.js';
import { DashboardPage } from '../pages/dashboardpage.js';
import { ActivityPage } from '../pages/activitypage.js';
import { TestCompletionPage } from '../pages/testcompletionpage.js';

import { ENV } from '../config/env.js';

test.describe('Students Activities E2E', () => {

    test('student completes Around the School activity', async ({ page }) => {

        // -----------------------------------
        // Page Objects
        // -----------------------------------

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const activityPage = new ActivityPage(page);
        const testCompletionPage = new TestCompletionPage(page);


      
        // 1. Login

        await loginPage.goto();

        await loginPage.verifyLoginPageLoaded();

        await loginPage.login(ENV.username, ENV.password);

        await loginPage.verifyLoginSuccessful();


        
        // 2. Navigate to Home Page

        await dashboardPage.goToHomePage();

        await dashboardPage.verifyHomePage();


     
        // 3. Open Around the School

        await dashboardPage.openAroundTheSchool();

        await dashboardPage.verifyAroundTheSchoolOpened();



        // 4. Open Places in a School activity


        await dashboardPage.openPlacesInSchoolActivity();



        // 5. Start activity


        await activityPage.startActivity();

        await activityPage.verifyActivityStarted();


        // 6. Question 1

        await activityPage.playSound();
      
        await activityPage.selectAnswer(
            'A library, labeled “Library'
        );
        await activityPage.verifyAnswerSelected('A library, labeled "Library');
        await activityPage.verifyQuestionTransitioned();

        // 7. Question 2

        await activityPage.playSound();
        
        await activityPage.selectAnswer(
            'A cafeteria, labeled “'
        );
        await activityPage.verifyAnswerSelected('A cafeteria, labeled "');
        await activityPage.verifyQuestionTransitioned();

        // 8. Question 3

        await activityPage.playSound();
        
        await activityPage.selectAnswer(
            'A gym, labeled “Gym - Third'
        );
        await activityPage.verifyAnswerSelected('A gym, labeled "Gym - Third');
        await activityPage.verifyQuestionTransitioned();

        // 9. Question 4

        await activityPage.playSound();
        
        await activityPage.selectAnswer(
            'A science lab, labeled “'
        );
        await activityPage.verifyAnswerSelected('A science lab, labeled "');
        await activityPage.verifyQuestionTransitioned();

        // 10. Question 5

        await activityPage.playSound();
        
        await activityPage.selectAnswer(
            'A music room, labeled “Music'
        );
        await activityPage.verifyAnswerSelected('A music room, labeled "Music');
        await activityPage.verifyQuestionTransitioned();

        // 11. Continue after first section

        await activityPage.continueGame();

        await activityPage.verifySectionTransitioned();


        // 12. Question 6

        await activityPage.playSound();
       
        await activityPage.selectAnswer(
            'A classroom, labeled “'
        );
        await activityPage.verifyAnswerSelected('A classroom, labeled "');
        await activityPage.verifyQuestionTransitioned();

        // 13. Question 7

        await activityPage.playSound();
       
        await activityPage.selectAnswer(
            'An art room, labeled “Art'
        );
        await activityPage.verifyAnswerSelected('An art room, labeled "Art');
        await activityPage.verifyQuestionTransitioned();

        // 14. Question 8

        await activityPage.playSound();
        
        await activityPage.selectAnswer(
            "A principal's office, labeled"
        );

        await activityPage.verifyAnswerSelected("A principal's office, labeled");
        await activityPage.verifyQuestionTransitioned();


        // 15. Question 9

        await activityPage.playSound();

        await activityPage.selectAnswer(
            'A computer lab, labeled “'
        );
        await activityPage.verifyAnswerSelected('A computer lab, labeled "');
        await activityPage.verifyQuestionTransitioned();

        // 16. Question 10

        await activityPage.playSound();
       
        await activityPage.selectAnswer(
            'Nurse’s office'
        );

        await activityPage.verifyAnswerSelected("Nurse’s office");
        await activityPage.verifyActivityCompleted();

        // Verify activity completion
        await testCompletionPage.verifyActivityCompleted();


        // 17. Return Home

        await testCompletionPage.goBackHome();

        // Verify dashboard is loaded after returning home
        await dashboardPage.verifyHomePage();


        // 18. Verify student dashboard

        await expect(
            page.getByText('130')
        ).toBeVisible();

        await expect(
            page.getByText('3').first()
        ).toBeVisible();

        await dashboardPage.verifyStudentProfile();
    });
});