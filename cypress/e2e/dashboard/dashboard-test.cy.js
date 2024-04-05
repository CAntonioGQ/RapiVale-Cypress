describe("Test de la Pantalla Dashboard", () =>{
// Los siguientes casos de uso que encontrarás abajo son para la página principal "Dashboard"
// URL de la pagina principal: "http://172.17.52.36:8080/#/dashboard"

    //HOOKS
  beforeEach(() => {
    cy.visit('http://172.17.52.36:8080/#/auth/login')
    cy.get(':nth-child(1) > .form-control').type("cruzgasq")
    cy.get('.input-group > .form-control').type("Caprepa2020")
    cy.get('.btn').click()
  })

    //Smoke Test en Dashboard
    
    it("Smoke Test de Dashboard",()=>{
        cy.get('.content-page').should("be.visible")
        cy.get('.side-menu').should("be.visible")
        cy.get('.navbar-custom').should("be.visible")
    })

    //Menu Despliegue Funcionamiento
    it("Menu Dashboard Funcionamiento",()=>{
        //Mejora, se necesita dar doble click para que funcione el botón
        cy.get('.button-menu-mobile').wait(2000).click()
        cy.get('.button-menu-mobile').wait(2000).click()
        cy.get(':nth-child(2) > [data-bs-toggle="collapse"] > .menu-arrow').should("not.be.visible")

    })

    //Boton de Usuario
    it("Botón Usuario en la Página Dashboard",()=>{
      cy.get(':nth-child(4) > .nav-link').click()
      cy.get(':nth-child(4) > .dropdown-menu > .dropdown-item').should("be.visible")
      cy.get(':nth-child(4) > .nav-link').click()
      cy.get(':nth-child(4) > .dropdown-menu > .dropdown-item').should("not.be.visible")
    })

    //Boton Cerrar Sesión
    it("Botón Cerrar Sesión en la Página Dashboard",()=>{
      cy.get(':nth-child(4) > .nav-link').click()
      cy.get(':nth-child(4) > .dropdown-menu > .dropdown-item').should("be.visible")
      cy.get(':nth-child(4) > .dropdown-menu > .dropdown-item').click()
      cy.get('.row').should("be.visible")
    })

    //Botón Notification
    //Función Aún no Implementada
    /*
    it("Botón Notificacion Clear All",()=>{

      cy.get(':nth-child(3) > .nav-link').click()
      cy.get(':nth-child(3) > .dropdown-menu > .noti-title').should("be.visible")
      cy.get('.text-dark > small').click()
      cy.get('.simplebar-content > .active').should("not.be.visible")
    })
    */
})