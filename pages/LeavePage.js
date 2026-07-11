import { Logger } from '../utilities/Logger.js';
import { Messages } from '../constants/Messages.js';

export class LeavePage {

    constructor(page) {

        this.page = page;

        this.fromDate =
            page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
        this.toDate =
            page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);
        this.employee =
            page.getByRole('textbox', { name: 'Type for hints...' });
        this.statusDropdown =
            page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();

        this.searchButton =
            page.getByRole('button', { name: 'Search' });
            //page.locator('xpath=//button[normalize-space()="Search"]');
    }

    async enterDates(fromdate, todate) {

        Logger.info(`From : ${fromdate}`);
        Logger.info(`To : ${todate}`);
        await this.fromDate.fill(fromdate);
        await this.toDate.fill(todate);

    }

    async selectRejectedStatus() {
        Logger.info("Selecting Rejected Status");
        await this.statusDropdown.click();
        await this.page.getByText('Rejected').click();
    }

    async enterEmployee(employeename) {

        Logger.info(`Employee : ${employeename}`);
        await this.employee.fill(employeename);

    }

    async selectAdministration() {

        await this.page.locator('//div[@class="oxd-table-filter-area"]//div[2]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click();
        await this.page.getByText('Administration').click();

    }

    async includePastEmployees() {
        await this.page.locator('.oxd-switch-input').check();
    }

    async clickSearch() {

        Logger.info("Searching Leave Records");
        await this.searchButton.click();

    }

}