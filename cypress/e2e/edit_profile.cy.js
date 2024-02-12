/// <reference types = "cypress" />


import { randomData } from "../db/data";
import { url } from "../db/database";

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('elm[aelFn] is not a function')) {
      // Esperábamos este error, así que vamos a ignorarlo
      // y permitir que la prueba continúe
    return false;
    }
    // En cualquier otro mensaje de error, la prueba falla
});

    

describe('edit_profile_qb', function() {
    it('function_edit' , function(){
        cy.viewport(390, 844)

        cy.visit(url)
        //Login rapido
        cy.get('body').should('be.visible')
        cy.get('input[name="email"]').type('miriam@gmail.com')
        cy.get('#ion-input-1').click().type('1234')

        cy.get('#button_log').click()
        cy.wait(1000)

        cy.get('.buttons-first-slot').should('be.visible').click()
        cy.wait(700)
        
        //acceso al boton de editar perfil
        cy.get('#edit_profile').should('be.visible').click()

        //edita el campo de name
        cy.get('input[name="name"]').click().clear().type('Miriam ' + randomData.name)
        .should('be.enabled')
        cy.wait(700)

        //Edita el campo surname
        cy.get('input[name="surname"]').click().clear().type('Lopez ' + randomData.surname)
        .should('be.enabled')
        cy.wait(700)

        //Edita el numero
        cy.get('input[name="phone"]').click().clear().type('2'+randomData.number)
        .should('be.enabled')
        cy.wait(600)
        //Presiona el boton de editar
        cy.get('#present-alert').should('be.visible').click()
        cy.wait(1000)
        cy.get('#ion-overlay-2 > .alert-wrapper > .alert-button-group > .alert-button > .alert-button-inner').click()        

    })
    it ('edit_profile_other_rut', function(){
        cy.viewport(390, 844)
        cy.visit(url)
        //Login rapido
        cy.get('body').should('be.visible')
        cy.get('input[name="email"]').type('Cody_Powlowski@gmail.com')
        cy.get('#ion-input-1').click().type('1234')

        cy.get('#button_log').click()
        cy.wait(1000)

        //accede al perfil
        cy.get('#button_profile').click()
        .should('be.visible')
        cy.wait(500)

        //Preciona la opcion de editar perfil
        cy.get('.card-content-md > [routerlink="/tab2"]').click()
        .should('be.visible')

         //edita el campo de name
        cy.get('input[name="name"]').click().clear().type('Miriam ' + randomData.name)
        .should('be.enabled')
        cy.wait(700)
        
         //Edita el campo surname
        cy.get('input[name="surname"]').click().clear().type('Lopez ' + randomData.surname)
        .should('be.enabled')
        cy.wait(700)

         //Edita el numero
        cy.get('input[name="phone"]').click().clear().type('2'+randomData.number)
        .should('be.enabled')
        cy.wait(600)
         //Presiona el boton de editar
        cy.get('form.ng-valid > #present-alert').click()
        cy.wait(1000)

    })
})