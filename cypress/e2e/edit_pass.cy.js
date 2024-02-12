import { url } from "../db/database"

describe('test_changes_password', function(){
    it('edit_password_dashboard', function(){
        cy.viewport(390, 844)
        cy.visit(url) 
        //Login rapido
        cy.get('body').should('be.visible')
        cy.get('input[name="email"]').type('Cody_Powlowski@gmail.com')
        cy.get('#ion-input-1').click().type('1234')
        cy.wait(500)
        cy.get('#button_log').click()
        cy.wait(1000)

        cy.get('.buttons-first-slot > .md').click()
        cy.wait(500)

        //Accede al boton de editar contrasena
        cy.get('#edit_password').click()
        cy.wait(500)

        //input before
        cy.get('input[name="before"]').click().type('1234')
        cy.wait(700)

        //input after
        cy.get('input[name="after"]').click().type('4321')
        cy.wait(700)

        //button confirm changes password
        cy.get('#present-alert').click()
        cy.wait(700)
        
        //acepta el alert despues del cambio de password
        cy.get('#ion-overlay-2 > .alert-wrapper > .alert-button-group > .alert-button > .alert-button-inner').click()
        cy.wait(1000)


        cy.get('#edit_password').click()
        cy.wait(500)

        cy.get('input[name="before"]').click().type('4321')
        cy.wait(700)

        cy.get('input[name="after"]').click().type('1234')
        cy.wait(700)

        //button confirm changes password
        cy.get('#present-alert').click()
        cy.wait(700)
    })


    it('changes_password_', function(){
    
        cy.viewport(390, 844)
        cy.visit(url) 
        //Fast Login
        cy.get('body').should('be.visible')
        cy.get('input[name="email"]').type('Cody_Powlowski@gmail.com')
        cy.get('#ion-input-1').click().type('1234')
        cy.wait(500)
        cy.get('#button_log').click()
        cy.wait(1000)

        //button Profile
        cy.get('#button_profile').click()
        .should('be.visible')
        cy.wait(500)

        //button edit_password
        cy.get('.card-content-md > [routerlink="/tab3"]').click()
        cy.get(700)

        //input before
        cy.get('input[name="before"]').click().type('1234')
        cy.wait(700)

        //input after
        cy.get('input[name="after"]').click().type('4321')
        cy.wait(700)

        //button confirm changes password
        cy.get('form.ng-valid > #present-alert').click()
        cy.wait(700)

        cy.get('#button_profile').click()
        .should('be.visible')
        cy.wait(500)

        cy.get('.card-content-md > [routerlink="/tab3"]').click()
        cy.get(700)

        //input before
        cy.get('input[name="before"]').click().type('4321')
        cy.wait(700)

        //input after
        cy.get('input[name="after"]').click().type('1234')
        cy.wait(700)

        //button confirm changes password
        cy.get('form.ng-valid > #present-alert').click()
        cy.wait(700)
    })

})