

describe('Drop down selection', () =>{

    it.skip('drop down with select tag', () => {//here .skip will skip this block , means in the execution it won't consider it for it

    cy.get("xpath")
    .select('name of the selection')
    .should('have.value','name of the selection')  //this line for the validation
    })

    it('drop down without select tag', () => {

        cy.get("dropdwon select css selector xpath").click
        cy.get("css_selecotr").type("India").type('{enter}')  // to ener the element in the input box
        
        cy.get("dropdwon select css selector xpath")
        
        .should('have.text','India')             //  validation of the selected item 
        })


        it('drop down auto suggest dropdown', () => {
          
            cy.get("serach xpath").type('name')

            cy.get('.suggestion-title').contains('name of the suggestion').click()  // here it is an auto suggestion so as we type in the search box it selects the item what we have passed in that

            })

        it(" dynamic drop down", () => {
            cy.wait(3000)
            cy.get("xpath for suggested iteams").should('have.length',11)  // validation of total number of options
            cy.get("css_selector").type('name')
            cy.get("xpath for suggested iteams").each($el, index, $list) =>{
                if($el.text()=='name suggestion'){
                  cy.wrap($el).click()  
                }
            }
            cy.get("xpath for suggested iteams").should('have.value','name that we have selected from the suggested drop down') // line validates that the item is been seleted from the drop-dwon is the same one is expected
        })

})