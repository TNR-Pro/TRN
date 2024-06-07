const { last } = require("cypress/types/lodash")


it('radio btn action', () => {


    cy.get('input#male').should('be.visible')

    //selection of radio btn

    cy.get('input#male').check().should('be.checked')
    cy.get('input#female').should('not.be.checked')

})

 it('checkbox action', () => {
    //visibility check
    cy.get("input#monday").should('be.visible')

    //selecting single checkbox - monday

    cy.get('input#Monday').check().should('be.checked')
    
    //uncheck checkbox
    cy.get('input#monday').uncheck().should('not.be.checked')

    //select first checkbox

    cy.get("xpath").first().check().should('be.checked')
    first()
    last()
})