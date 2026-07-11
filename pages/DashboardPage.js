import { Logger } from '../utilities/Logger.js';

export class DashboardPage {

    constructor(page) {

        this.page = page;

        this.leaveMenu =
            page.getByRole('link', { name: 'Leave' });
    }

    async openLeaveModule() {

        Logger.info("Opening Leave Module");
        await this.leaveMenu.click();

    }

}