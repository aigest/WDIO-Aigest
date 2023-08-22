Feature: Guest

Scenario: Guests
    Given I am on hotels landing page
    Then I click on Travelers
    Then I select “Adults as 6
    Then I select “Children” as 3
    Then I select first child age 4
    Then I select second child age Under 1
    Then I select third child age: 7
    Then I click Done
    Then I verify total number of Travelers (is sum of adults and children as same as selected on step #3 and #4.)