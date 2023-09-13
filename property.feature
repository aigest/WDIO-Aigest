Features: Property

/**Go to Hotels.com
*Click on “List your property”
*-> Verify “What would you like to list?” is displayed
*-> Verify “Lodging“ and “Private residence“ options are displayed
*Click on “Private residence“
*-> Verify ”Step 1 of 3” is displayed
*Enter “4“ as bedroom
*Enter “2.5“ as bathroom
*Click on “Next” button
*-> Verify ”Step 2 of 3” is displayed
*-> Verify “Where is your property located?” is displayed
*Enter “121” in address
*Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
*-> Verify map is displayed
*-> Verify pin in map is displayed
*-> Verify “Move the pin to adjust the location of your property.“ is displayed below graph
*/

Scenario: List your Property
     Given I am on the hotels homepage
        When  I click on List your property
        Then  I verify what would you like to list is displayed
        Then  I verify Lodging is displayed 
        Then  I verify Private residence is displayed
        When  I click on Private residence
        Then  I verify Step 1 of 3 is displayed
        When  I enter 4 as bedroom
        And   I enter 2.5 as bathroom
        And   I click on Next button
        Then  I verify Step 2 of 3 is displayed
        And   I verify Where is your place located is displayed
        When  I enter 1211 in address
        And   I Select 1211 Crescent Lane, Prosper, TX from auto-suggestion
        Then  I verify map is displayed
        And   I verify pin in map is displayed
        And   I verify Move the pin to adjust the location of your property