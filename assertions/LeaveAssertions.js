import { expect } from '@playwright/test';
import { Messages } from '../constants/Messages.js';
import { Logger } from '../utilities/Logger.js';

export class LeaveAssertions {

    constructor(page) {

        this.page = page;

        this.noRecords =
            page.getByText(Messages.NO_RECORDS);

    }

    async verifyNoRecordsFound() {

        Logger.info("Verifying No Records Found");
           await expect(
            this.noRecords).toBeVisible;
    }

}