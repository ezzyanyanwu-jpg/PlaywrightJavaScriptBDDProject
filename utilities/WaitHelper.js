export class WaitHelper {

    static async waitForPage(page) {
        await page.waitForLoadState('networkidle');
    }

    static async shortWait(page) {
    // runs after each scenario
    //page.pause();//Force page to stay open after test execution for debugging purposes. Remove this line if you want the page to close automatically after each scenario
    //await new Promise(() => {});//Keep the test running indefinitely to allow for manual inspection of the page after test execution. Remove this line if you want the test to finish and close the page automatically.
    await page.waitForTimeout(1000);
    }
}