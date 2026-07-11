Feature: OrangeHRM Login

  Background: Common steps
    Given I launch Chrome browser
    When I open orange HRM Homepage

  Scenario Outline: Login with invalid parameters
    And Enter invalid username "<username>" and invalid password "<password>"
    And Click on login button
    Then I should receive an invalid credential warning

    Examples:
      | username          | password      |
      | Admin23           | admin567      |
      | Admin888          | admif4567     |

  Scenario Outline: Seach for Leave list
    And Enter valid username "<username>" and valid password "<password>"
    And Click on login button
    And Click on Leave button to enter leave details
    And Enter from date "<fromdate>" and to date "<todate>"
    And Select Show Leave with Status and Leave type
    And Enter Employee Name "<employeename>" and select Sub Unit and tick Include Past Employees Radio button
    And Click Search button
    Then No Records Found should be displayed

    Examples:
      | username      | password      | fromdate   | todate     | employeename |
      | Admin         | admin123      | 2026-12-04 | 2026-31-10 | Jake Ben     |
      | Admin         | admin123      | 2026-12-05 | 2026-28-06 | Jude Oliver  |