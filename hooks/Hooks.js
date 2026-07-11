import { createBdd } from 'playwright-bdd';
import { ENV } from '../config/env.js';
import { Logger } from '../utilities/Logger.js';
import { World } from '../world/World.js';

const { Before, After } = createBdd();

Before(async ({ page }) => {

    Logger.info("Opening OrangeHRM");
    await page.goto(ENV.baseURL);
    // Attach one World instance to the page for this scenario
    page.world = new World(page);

});

After(async ({ page }) => {

    Logger.info("Scenario Finished");
    //await page.close(); 

});