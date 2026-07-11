import { expect } from '@playwright/test';
import { Messages } from '../constants/Messages.js';
import { Logger } from '../utilities/Logger.js';

export class LoginAssertions {

    constructor(page) {

        this.page = page;

        this.invalidCredentials =
            page.getByText(Messages.INVALID_LOGIN);
    }

    async verifyLoginPage() {

        Logger.info("Verifying Login Page");
        await expect(this.page).toHaveTitle(/OrangeHRM/);
        await expect.soft(this.page)
            .toHaveURL(/orangehrmlive/);
    }

    async verifyInvalidCredentials() {

        Logger.info("Verifying Invalid Credentials");
        await expect(this.invalidCredentials)
            .toBeVisible();
    }

    async verifySuccessfulLogin() {

        Logger.info("Verifying Dashboard");
        await expect(this.page)
            .toHaveURL(/dashboard/);
    }

}