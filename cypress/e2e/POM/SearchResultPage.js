class SearchResultPage {
    verifyRelevantProductIsDispalyed() {
        cy.get("span[data-test='heading-term']").contains('halloween dress')        
    }  
  }
  
  export default SearchResultPage;