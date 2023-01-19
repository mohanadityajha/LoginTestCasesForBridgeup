/// <reference types ="cypress"/>

it("User Successfully Logged-in ", function () {
  
  cy.visit("https://app.devbridgeup.com/login")
  cy.get('#mobile_number').type("9892608077")
  cy.get('.MuiButton-root').click()
  cy.get('[name="otp1"]').type("061989")
  cy.get(':nth-child(5) > .MuiButton-root').click()

}
  
)