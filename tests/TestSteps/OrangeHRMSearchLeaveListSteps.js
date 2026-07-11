import '../../hooks/Hooks.js';   
import { createBdd } from 'playwright-bdd';
import { Logger } from '../../utilities/Logger.js';

const { Given, When, Then } = createBdd();


Given('I launch Chrome browser', async () => {
  // Step: Given I launch Chrome browser
  Logger.info("Chrome browser launched");
});

When('I open orange HRM Homepage', async ({page}) => {
  // Step: When I open orange HRM Homepage
await page.world.assertions.login.verifyLoginPage();
});

When('Enter invalid username {string} and invalid password {string}', async ({page}, username, password) => {
  // Step: And Enter invalid username "<username>" and invalidpassword "<password>"
  await page.world.pages.login.enterCredentials(username, password);
});

When('Click on login button', async ({page}) => {
  // Step: And Click on login button
  await page.world.pages.login.clickLogin();
});

Then('I should receive an invalid credential warning', async ({page}) => {
  // Step: Then Then I should receive an invalid credential warning
  await page.world.assertions.login.verifyInvalidCredentials();
});

When('Enter valid username {string} and valid password {string}', async ({page}, username, password) => {
  // Step: And Enter valid username "<username>" and valid password "<password>"
  await page.world.pages.login.enterCredentials(username, password);
});

When('Click on login', async ({page}) => {
  // Step: And Click on login
 await page.world.pages.login.clickLogin();
});

When('Click on Leave button to enter leave details', async ({page}) => {
  // Step: And Click on Leave button to enter leave details
  await page.world.pages.dashboard.openLeaveModule();
});

When('Enter from date {string} and to date {string}', async ({page}, fromdate, todate) => {
  // Step: And Enter from date "<fromdate>" and to date "<todate>"
  await page.world.pages.leave.enterDates(fromdate, todate);
});

When('Select Show Leave with Status and Leave type', async ({page}) => {
  // Step: And Select Show Leave with Status and Leave type
  await page.world.pages.leave.selectRejectedStatus();
});

When('Enter Employee Name {string} and select Sub Unit and tick Include Past Employees Radio button', async ({page}, employeeName) => {
  // Step: And Enter Employee Name "<employeename>" and select Sub Unit and tick Include Past Employees Radio button
  await page.world.pages.leave.enterEmployee(employeeName);
  await page.world.pages.leave.selectAdministration();
  await page.world.pages.leave.includePastEmployees();
});

When('Click Search button', async ({page}) => {
  // Step: And Click Search button
  await page.world.pages.leave.clickSearch();
});

Then('No Records Found should be displayed', async ({page}) => {
// Step: Then No Records Found should be displayed
 await page.world.assertions.leave.verifyNoRecordsFound();
});