Feature: Travelers


Scenario: Travelers
    Given I am on hotels landing page
    When click on Travelers
    When select “Children” as 2
    Then verify Children-age dropdown are 2
    When verify Plus-button is enabled
    When verify minus-button is enabled
    When select “Children” as 6
    Then verify Children-age dropdown are 6
    Then verify Plus button is disabled
    Then verify minus-button is enabled
    When select “Children” as 5
    Then verify Children-age dropdown are 5
    Then verify Plus button is enabled
    Then verify minus-button is enabled
    When select “Children” as 0
    Then verify Children-age dropdown is NOT displayed
    Then I verify Plus button is enabled
    Then I verify minus-button is disabled

    