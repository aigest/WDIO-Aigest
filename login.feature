Feature: Login

   # /**Launch hotels website
   # *Click on “Sign in” link
   # *Click on Sign in button
   # *Enter invalid email address
   # *Click on Continue button
   # *Verify error message is displayed. (Enter a valid email)
   # */

Scenario: Verify email error message 
    Given I am on hotels landing page
    Then I click on "Sign in" link
    Then I click on Sign in button
    When I enter invalid email address
    Then I click continue button on the SignIn page
    Then I verify error message is displayed
