describe('Xpath Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Test Number of block', () => {
        cy.xpath("//input[@id='user-name']")

        cy.xpath('')
    })
})

