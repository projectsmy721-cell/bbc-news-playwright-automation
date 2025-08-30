import { test, expect } from '@playwright/test';
import { BBCHomePage } from '../Pages/BBCHomePage';


test('TC_001_Homepage_Dynamic_Content', async ({ page }) => {
    const HomePage = new BBCHomePage(page);
    
    await HomePage.bbcApplicationLaunch() 
    await HomePage.bbcLoginValidation()
    await HomePage.bbcTopstoriesLoadvalidation()
    await HomePage.bbcHomePageFullScrollValidation()
    await HomePage.bbcNewsNavigationValidation()
    await HomePage.bbcSportNavigationValidation()
    await HomePage.bbcBusinessNavigationValidation()
    });
    // Add your test steps and assertions here