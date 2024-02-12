/// <reference types="cypress"/> 
//usamos references para darle a entender que trabajaremos con cypress(ayuda para el autocompletado y mas)

import {randomData} from '../db/data'
import { url } from '../db/database'


describe('test_Login_page', function() {
    
    //propiedad only para correr un test en especifico

  it('Visita mi proyecto local', function() {

     // Configura el tamaño de la ventana del navegador
    cy.viewport(390, 844)
    // La URL será la de tu proyecto local
    cy.visit(url)
    cy.wait(1000)
    cy.get('body').should('be.visible')//corrobora la visibilidad del campo(deberia ser visible)
    cy.wait(1000)
    cy.get('input[name="email"]').type('miriam@gmail.com')
    cy.wait(1000)
    
  })
  it ('input_password_qb', function() {
    cy.viewport(390, 844)

    cy.visit(url)
    cy.wait(1000)
    cy.get('body').should('be.visible')
    cy.wait(1000)
    cy.get('input[name="email"]').type('miriam@gmail.com')
    cy.wait(1000)
    cy.get('#ion-input-1').click().type('1234')
    cy.wait(1000)
    cy.get('#button_log').click()
  })

  

  
})
