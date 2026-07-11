import { Logger } from '../utilities/Logger.js';

export class LoginPage {

    constructor(page) {

        this.page = page;

        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async enterCredentials(username, password) {

        Logger.info(`Entering username: ${username}`);
        await this.username.fill(username);
        await this.password.fill(password);

    }

    async clickLogin() {
        Logger.info("Clicking Login");
        await this.loginButton.click();
    }

}