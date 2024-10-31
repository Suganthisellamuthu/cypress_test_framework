class HomePage {

  visitUrl() {
    cy.visit("https://www.johnlewis.com/")
  }

  clearSearchBox() {
    cy.get('#mobileSearch').clear();
  }
  
  typeGivenInputAndHitEnterOnSearchBox(searchText) {
    cy.get('#mobileSearch').type(searchText + '{enter}')
  }

  rejectCookies() {
    cy.get("button[data-test='reject-all']").click({force: true})
  }
  
  noResultFound() {
    cy.get("span[data-test='heading-term']").should('contains.text',"Sorry, we couldn't find any results for")
  }

}

export default HomePage;