// go()command helps us to operate in naviagtion

describe('Naviagtion commands',() => {

    it('Naviagtion in cypress',() =>{

        cy.visit("URL");

        cy.go('back');

        //alternative for back naviagtion
        cy.go('-1');

        cy.go('forward');
        //alternative for forword navigation
        cy.go(1);

        //for relod or refresh
        cy.reload();
        

    })
})