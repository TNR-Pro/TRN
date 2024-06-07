describe('Capture screenshot and videos', () =>{

    it('Capture screenshot', () =>{
        cy.visit("url");
        cy.screenshot("Name_for_Screenshot");  //capture ss of entier webpage

        //take ss of particulr element in the webpage

        cy.get("path for the element").screenshot("name_the_ss");
    
        //capture screen shot and video automatically on the failure - only when execute through CLI

        cy.visit("URL");

        cy.get("path").click(); //see expected

        cy.get("path for to validate the expected Item").should('have.text',"expected_item");
        //npx cypress run --spec <file_path> this will automatically sves the screenshot and videos in the respecrtive folder 
    })
})