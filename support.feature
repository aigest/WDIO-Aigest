Feature: Support

    # /**Launch Hotels
    # *Click on “Support”
    # *Click “Site Feedback”
    # *Click on Submit button
    # *Verify error message is displayed (The following fields are required)
    # *Verify red-box is displayed around OVERALL-section.
    # */

Scenario: Verify error for empty feedback form
    Given I am on hotels landing page
    Then I click on “Support”
    Then I click "Site Feedback”
    Then I click on Submit button
    Then I Verify error message is displayed
    Then I Verify red-box is displayed around OVERALL-section