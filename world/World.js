import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { LeavePage } from '../pages/LeavePage.js';

import { LoginAssertions } from '../assertions/LoginAssertions.js';
import { LeaveAssertions } from '../assertions/LeaveAssertions.js';

export class World {

    constructor(page) {

        this.page = page;

        // Pages Objects
        this.pages = {

            login: new LoginPage(page),
            dashboard: new DashboardPage(page),
            leave: new LeavePage(page)

        };
        
        // Assertions
        this.assertions = {

            login: new LoginAssertions(page),
            leave: new LeaveAssertions(page)

        };

    }

}