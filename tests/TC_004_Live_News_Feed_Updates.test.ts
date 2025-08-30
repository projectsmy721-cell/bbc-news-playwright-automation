import { test, expect } from '@playwright/test';
import { BBCHomePage } from '../Pages/BBCHomePage';


test('TC_004_Live_News_Feed_Updates.test', async ({ page }) => {
    test.setTimeout(600000);
    const HomePage = new BBCHomePage(page);
  await HomePage.bbcApplicationLaunch()
  await HomePage.bbcLoginValidation()
});