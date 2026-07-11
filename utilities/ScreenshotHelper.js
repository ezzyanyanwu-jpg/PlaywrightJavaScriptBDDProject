export class ScreenshotHelper {

    static async capture(page, name) {
        await page.screenshot({
            path: `reports/${name}.png`,
            fullPage: true
        });

    }

}