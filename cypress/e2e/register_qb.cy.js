import { randomData } from "../db/data"
import { url } from "../db/database"

/// <reference types="cypress" />

describe('register_qb', function() {
    it('register_qb', function(){
    
        cy.viewport(390, 844)
    
        cy.visit(url)
        cy.wait(1000)
        cy.get('#register_button').should('be.visible').click()
        cy.get('body').should('be.visible')
        cy.wait(1000)
        cy.get('#ion-input-2').click().type(randomData.name
        ).should('be.enabled')
        cy.wait(1000)
        cy.get('#ion-input-3').click().type(randomData.surname)
        .should('be.enabled')
        cy.wait(1000)
        cy.get('input[name="ion-input-4"]').click()
        cy.get('#ion-input-3').click()
        cy.wait(1000)
        cy.get('input[name="ion-input-4"]').click().type(randomData.email)
        .should('be.enabled')
        cy.get('input[name="ion-input-5"]').click()
        cy.wait(1000)
        cy.get('#ion-input-3').click()
        cy.wait(1000)
        cy.get('input[name="ion-input-5"]').click().type('23457654')
        cy.wait(500)
        cy.get('input[name="ion-input-5"]').clear().type('234576')
        cy.wait(500)
        cy.get('input[name="ion-input-5"]').clear().type('23457654')
        cy.wait(1000)
        cy.get('ion-input[formControlName="password"]').type('1234')
        cy.get('.eye-button').click()
        cy.wait(500)
        cy.get('.eye-button').click()
        cy.wait(500)
        cy.get('.eye-button').click()
        cy.wait(1000)
        cy.get('#button_confirm_register').click().should('be.visible')
        //contains se refiere al texto especifico de un objeto, en este caso boton
    
    })
})