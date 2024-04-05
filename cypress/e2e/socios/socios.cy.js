describe("Test Funcionamiento Socios", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la Socios
    
        //HOOKS
      beforeEach(() => {
        cy.visit('http://172.17.52.36:8080/#/auth/login')
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
 
        
      })
        //Funcionamiento correcto de todos los botones dentro del area de Socios
    it.only("Funcionamiento de Todos los Botones", () => {
        // Hace clic para expandir el área de botones si es necesario
        cy.get(':nth-child(10) > [data-bs-toggle="collapse"]').click()
        // Hace clic en cada botón dentro del área de botones
        cy.get('#parent_66 > :nth-child(1)').click() //Es unicamente una sección, no se necesita For
        cy.get('#parent_66 > :nth-child(2)').click() //Es unicamente una sección, no se necesita For
        })

        //PREGUNTAR PARA EL CONTEXTO
              
    })