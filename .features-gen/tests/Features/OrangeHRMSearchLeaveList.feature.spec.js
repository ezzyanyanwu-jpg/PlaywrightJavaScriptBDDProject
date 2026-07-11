// Generated from: tests\Features\OrangeHRMSearchLeaveList.feature
import { test } from "playwright-bdd";

test.describe('OrangeHRM Login', () => {

  test.beforeEach('Background: Common steps', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('I launch Chrome browser'); 
    await When('I open orange HRM Homepage', null, { page }); 
  });
  
  test.describe('Login with invalid parameters', () => {

    test('Example #1', async ({ Then, And, page }) => { 
      await And('Enter invalid username "Admin23" and invalid password "admin567"', null, { page }); 
      await And('Click on login button', null, { page }); 
      await Then('I should receive an invalid credential warning', null, { page }); 
    });

    test('Example #2', async ({ Then, And, page }) => { 
      await And('Enter invalid username "Admin888" and invalid password "admif4567"', null, { page }); 
      await And('Click on login button', null, { page }); 
      await Then('I should receive an invalid credential warning', null, { page }); 
    });

  });

  test.describe('Seach for Leave list', () => {

    test('Example #1', async ({ Then, And, page }) => { 
      await And('Enter valid username "Admin" and valid password "admin123"', null, { page }); 
      await And('Click on login button', null, { page }); 
      await And('Click on Leave button to enter leave details', null, { page }); 
      await And('Enter from date "2026-12-04" and to date "2026-31-10"', null, { page }); 
      await And('Select Show Leave with Status and Leave type', null, { page }); 
      await And('Enter Employee Name "Jake Ben" and select Sub Unit and tick Include Past Employees Radio button', null, { page }); 
      await And('Click Search button', null, { page }); 
      await Then('No Records Found should be displayed', null, { page }); 
    });

    test('Example #2', async ({ Then, And, page }) => { 
      await And('Enter valid username "Admin" and valid password "admin123"', null, { page }); 
      await And('Click on login button', null, { page }); 
      await And('Click on Leave button to enter leave details', null, { page }); 
      await And('Enter from date "2026-12-05" and to date "2026-28-06"', null, { page }); 
      await And('Select Show Leave with Status and Leave type', null, { page }); 
      await And('Enter Employee Name "Jude Oliver" and select Sub Unit and tick Include Past Employees Radio button', null, { page }); 
      await And('Click Search button', null, { page }); 
      await Then('No Records Found should be displayed', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\OrangeHRMSearchLeaveList.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch Chrome browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I open orange HRM Homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter invalid username \"Admin23\" and invalid password \"admin567\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Admin23\"","children":[{"start":24,"value":"Admin23","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"admin567\"","children":[{"start":55,"value":"admin567","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on login button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should receive an invalid credential warning","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch Chrome browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I open orange HRM Homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter invalid username \"Admin888\" and invalid password \"admif4567\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Admin888\"","children":[{"start":24,"value":"Admin888","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"admif4567\"","children":[{"start":56,"value":"admif4567","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on login button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should receive an invalid credential warning","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch Chrome browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I open orange HRM Homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And Enter valid username \"Admin\" and valid password \"admin123\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Admin\"","children":[{"start":22,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"admin123\"","children":[{"start":49,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And Click on login button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And Click on Leave button to enter leave details","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And Enter from date \"2026-12-04\" and to date \"2026-31-10\"","stepMatchArguments":[{"group":{"start":16,"value":"\"2026-12-04\"","children":[{"start":17,"value":"2026-12-04","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"2026-31-10\"","children":[{"start":42,"value":"2026-31-10","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And Select Show Leave with Status and Leave type","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And Enter Employee Name \"Jake Ben\" and select Sub Unit and tick Include Past Employees Radio button","stepMatchArguments":[{"group":{"start":20,"value":"\"Jake Ben\"","children":[{"start":21,"value":"Jake Ben","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And Click Search button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then No Records Found should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch Chrome browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I open orange HRM Homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And Enter valid username \"Admin\" and valid password \"admin123\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Admin\"","children":[{"start":22,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"admin123\"","children":[{"start":49,"value":"admin123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And Click on login button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And Click on Leave button to enter leave details","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And Enter from date \"2026-12-05\" and to date \"2026-28-06\"","stepMatchArguments":[{"group":{"start":16,"value":"\"2026-12-05\"","children":[{"start":17,"value":"2026-12-05","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"2026-28-06\"","children":[{"start":42,"value":"2026-28-06","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And Select Show Leave with Status and Leave type","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And Enter Employee Name \"Jude Oliver\" and select Sub Unit and tick Include Past Employees Radio button","stepMatchArguments":[{"group":{"start":20,"value":"\"Jude Oliver\"","children":[{"start":21,"value":"Jude Oliver","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And Click Search button","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then No Records Found should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end