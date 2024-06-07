
describe('Test for the validation', () => {

    it('Test One Pass', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
    })

    it('Test One Fail', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs 1')
    })
})