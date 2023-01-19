/// <reference types ="cypress"/>

it("Login Failed due to invalid OTP", function () {

  cy.visit("https://app.devbridgeup.com/login")
  cy.get('#mobile_number').type("9892608078")
  cy.get('.MuiButton-root').click()
  cy.get('[name="otp1"]').type("061980")
  cy.get(':nth-child(5) > .MuiButton-root').click()

}

)