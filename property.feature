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
    Given launch Hotels.com