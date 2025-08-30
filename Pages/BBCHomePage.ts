import { Page, expect } from '@playwright/test';
import testData from '../config/test-data.json';

export class BBCHomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    } 


    async bbcApplicationLaunch() {
        const startTime = Date.now();
        await this.page.goto('https://www.bbc.com/');
        await expect(this.page.locator('(//*[name()="svg" and @icon="bbc" and @category="logo"])[1]')).toBeVisible();
    }
    async bbcTopstoriesLoadvalidation(){
        await expect(this.page.locator('(//p[@data-testid="card-description"])[1]')).toBeVisible();

    }
    async bbcHomePageFullScrollValidation(){
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
       await expect(this.page.locator('//button[contains(text(), "BBC in other languages")]')).toBeVisible();
    }
    async bbcNewsNavigationValidation(){
        await this.page.locator('(//a[contains(text(), "News")])[1]').click();
        await expect(this.page.locator('(//*[name()="svg" and @icon="news" and @category="logo"])[1]')).toBeVisible();
    }
  
    async bbcSportNavigationValidation() {
        await this.page.locator('(//a[contains(text(), "Sport")])[1]').click();
        await expect(this.page.locator('(//span[contains(text(), "BBC Sport")])[1]')).toBeVisible();
        }
    async bbcBusinessNavigationValidation() {
        await this.page.locator('(//a[@href="https://www.bbc.com/business"])[1]').click();
        await expect(this.page.locator('(//h1[contains(text(), "Business")])[1]')).toBeVisible();
    }
    async bbcSearchFunctionalityValidation(){
        await this.page.locator('//button[@aria-label="Open menu"]').click();
        expect(this.page.locator('//input[@data-testid="search-input-field"]')).toBeVisible();
        await this.page.locator('//input[@data-testid="search-input-field"]').fill('Climate');
        for (let i = 0; i < 4; i++) {
            await this.page.keyboard.press('Tab');
        }
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Enter');
        await expect(this.page.locator('(//*[name()="svg" and @icon="news" and @category="logo"])[1]')).toBeVisible();
    }
    async bbcApplicationVideoPlayValidation(){
        const videoLink = this.page.locator('(//a[@href="https://www.bbc.com/video"])[1]');
        await videoLink.scrollIntoViewIfNeeded();
        await videoLink.click();
        await expect(this.page.locator('//button[@data-testid="player-play-button"]')).toBeVisible();
        const video = this.page.locator('//button[@data-testid="player-play-button"]')
        await video.click();
        await expect(this.page.locator('.pre_play_layout_container.layout')).toBeVisible();
        await this.page.locator('.pre_play_layout_container.layout').click();
        await this.page.waitForTimeout(5000);
}
async bbcLoginValidation(){
    const adminUser = testData.users.admin;
    await this.page.locator('(//span[@data-testid="button-text"])[1]').click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator('#username')).toBeVisible({ timeout: 10000 });
    await this.page.fill('#username', adminUser.username);
    await expect(this.page.locator('//span[contains(text(), "Continue")]')).toBeVisible();
    await this.page.locator('//span[contains(text(), "Continue")]').click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator('#password')).toBeVisible({ timeout: 10000 });
    await this.page.fill('#password', adminUser.role);
    await expect(this.page.locator('#submit-button')).toBeVisible();
    await this.page.locator('#submit-button').click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator('//button[contains(text(), "Your Account")]')).toBeVisible({ timeout: 10000 });
}
}


