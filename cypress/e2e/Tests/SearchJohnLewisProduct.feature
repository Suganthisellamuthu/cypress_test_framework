Feature: JohnLewis Search Functionality

    Scenario:Verify user can search product via search icon
        Given I access to JohnLewis homepage
        When I enter valid input data in search bar "halloween dress" and click search icon
        And I Reject cookies
        Then the user should get relevant data as per the search item

     Scenario:Verify user can serach product via search icon and click specific product
         Given I access to JohnLewis homepage
         When I enter valid input data in search bar "halloween dress" and click search icon
         And I Reject cookies
         And I log all the products and click the specific product
         Then the specific product page should displayed

     Scenario:Verify user can serach product via search icon and apply dropdown filter
         Given I access to JohnLewis homepage
         When I enter valid input data in search bar "halloween dress" and click search icon
         And I Reject cookies
         And I apply dropdown filter as "Price low to high"
         Then the droppdown should applied correctly to "Price low to high"

     Scenario:Verify user attempt to serach product with invalid data
         Given I access to JohnLewis homepage
         When I enter invalid data in search bar "!!££££" and click search icon
         And I Reject cookies
         Then the user should return no results were found
