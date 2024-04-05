describe("Test Funcionamiento Vales", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Vales
    
        //HOOKS
      beforeEach(() => {
        cy.visit('http://172.17.52.36:8080/#/auth/login')
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
 
        
      })
        //Funcionamiento correcto de todos los botones dentro del area de Vales
      it("Funcionamiento de Todos los Botones", () => {
        // Hace clic para expandir el área de botones si es necesario
        cy.get(':nth-child(8) > [data-bs-toggle="collapse"]').click()
        // Hace clic en cada botón dentro del área de botones
        cy.get('#parent_62 > .nav-second-level').click() //Es unicamente una sección, no se necesita For
        })
              
        //SMOKE TEST VALES/ALTA DE FOLIOS
      it('SMOKE TEST VALES/ALTA DE FOLIOS', () => {
        cy.get(':nth-child(8) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_62 > .nav-second-level').click()
        cy.get('.col-xl-12 > :nth-child(2) > .card-body').should("be.visible")
        cy.get('.header-title > .btn').should("be.visible")
      });
      
      /*CREAR UNO QUE NO CUENTE CON VALES ACTRIVOS PREGUNTAR A LOS DEVS A VER QPD
      it.only('CASO DE PRUEBA Nuevo Libre en VALES/ALTA DE FOLIOS', () => {
        cy.get(':nth-child(8) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_62 > .nav-second-level').click()
        cy.get('.header-title > .btn').click()
        cy.get('.ng-select-container').type("3 - WALDO ARTURO ORTIZ DELGADO").type("{enter}")
        cy.get('#step1Button').click()
        
      });
    */


    })