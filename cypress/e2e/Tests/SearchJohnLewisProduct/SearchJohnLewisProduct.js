import {Before,Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../POM/homepage";
import SearchResultPage from "../../POM/SearchResultPage";
import ProductPage from "../../POM/ProductPage";
const homepage=new HomePage();
const searchResultPage=new SearchResultPage();
const productPage=new ProductPage();

Given('I access to JohnLewis homepage',()=>{
    homepage.visitUrl();
})

When('I enter valid input data in search bar {string} and click search icon',(validproductName)=>{
    homepage.clearSearchBox();
    homepage.typeGivenInputAndHitEnterOnSearchBox(validproductName);
})

And('I Reject cookies',()=>{
    homepage.rejectCookies();
})

Then('the user should get relevant data as per the search item',()=>{
    searchResultPage.verifyRelevantProductIsDispalyed()
})

And('I log all the products and click the specific product',()=>{
    cy.get(".title_title__H_ry2 span:nth-child(2)").each(($e1, index, $list) => {
        cy.log($e1.text())
        if ($e1.text().includes("Princess Cruella Classic Children's Costume")) {
            cy.wrap($e1).click({force: true})
        }
    })
})

Then('the specific product page should displayed',()=>{
    productPage.verifySpecificProductIsDisplayed();
})

And('I apply dropdown filter as {string}',(filterBy)=>{
    cy.get('#sortBy').select(filterBy)
})

Then('the droppdown should applied correctly to {string}',(filterBy)=>{
    cy.get('#sortBy').find('option:selected').should('have.text', filterBy)
})

When('I enter invalid data in search bar {string} and click search icon',(invalidproductName)=>{
    homepage.clearSearchBox();
    homepage.typeGivenInputAndHitEnterOnSearchBox(invalidproductName);
    
})

Then('the user should return no results were found',()=>{
    homepage.noResultFound();
})