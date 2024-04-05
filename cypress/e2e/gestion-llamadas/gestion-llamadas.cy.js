describe("Test Funcionamiento Gestion de Llamadas", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Gestion de Llamadas
    
        //HOOKS
      beforeEach(() => {
        cy.visit('http://172.17.52.36:8080/#/auth/login')
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
 
        
      })
        //Funcionamiento correcto de todos los botones dentro del area de Gestion de Llamadas
    it.only("Funcionamiento de Todos los Botones", () => {
        // Hace clic para expandir el área de botones si es necesario
        cy.get(':nth-child(12) > [data-bs-toggle="collapse"]').click()
        // Hace clic en cada botón dentro del área de botones
        cy.get('#parent_83 > .nav-second-level').click() //Es unicamente una sección, no se necesita For
        })
              
    })