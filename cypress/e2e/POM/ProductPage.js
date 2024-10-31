class ProductPage {
    verifySpecificProductIsDisplayed(){
        cy.get("h1[data-testid='product:title']").should('contains.text',"Princess Cruella Classic Children's Costume")
    }  
  }

  export default ProductPage;