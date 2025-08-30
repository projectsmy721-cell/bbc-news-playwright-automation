import { test, expect } from '@playwright/test';
import { BBCHomePage } from '../Pages/BBCHomePage';


test('TC_003_Video_Player_Advanced_Testing', async ({ page }) => {
    test.setTimeout(600000);
    const HomePage = new BBCHomePage(page);

    await HomePage.bbcApplicationLaunch()
    await HomePage.bbcLoginValidation()
    await HomePage.bbcApplicationVideoPlayValidation() 
    

});