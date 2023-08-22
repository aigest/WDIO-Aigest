Feature: Terms and Conditions”


Scenario: Verify TermsAndConditions and PrivacyStatements
    Given I am on hotels landing page 
    Then I click on "Sign in" link
    Then I click on Sign in button
    Then I click “One Key Rewards Terms & Conditions” link
    Then I verify “One Key Terms and Conditions” heading is displayed
    Then I verify “Effective from“ date format  is in correct format (expected format: MMMM d, yyyy)
    Then I click “Privacy Statement” link
    Then I verify “Privacy Statement” heading is displayed
    Then I verify “Last Updated“ date format (expected format: MMMM d, yyyy)