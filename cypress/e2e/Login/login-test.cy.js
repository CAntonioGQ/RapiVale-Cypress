describe("Prueba de Login", () =>{


    //HOOKS
  beforeEach(() => {
    cy.visit('http://172.17.52.36:8080/#/auth/login')
  })

    //Prueba de Inicio de Sesion
    
    it("Prueba Login",()=>{
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
        cy.get('.content-page').should("be.visible")
    })

})