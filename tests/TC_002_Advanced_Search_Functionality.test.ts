import { test, expect } from '@playwright/test';
import { BBCHomePage } from '../Pages/BBCHomePage';


test('TC_002_Advanced_Search_Functionality', async ({ page }) => {
    const HomePage = new BBCHomePage(page);

    await HomePage.bbcApplicationLaunch()
    await HomePage.bbcLoginValidation()
    await HomePage.bbcSearchFunctionalityValidation()
});