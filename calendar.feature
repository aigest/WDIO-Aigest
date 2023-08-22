Feature: Calendar

Scenario: Calendar
    Given I am on hotels landing page
    Then I click on Dates
    Then I go to current month if not displayed
    Then I verify For current month
    Then I verify past dates are disabled
    Then I verify back button on current month is disabled