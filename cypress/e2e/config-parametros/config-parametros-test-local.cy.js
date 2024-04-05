describe("Local Configuracion Parametros", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Configuración y Parametros
    
        //HOOKS
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/dashboard')
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
  
        
        })
  
      // ESTO ESTÁ UNICAMENTE EN LOCAL!!!!!!!!!!!!!!
    it('SMOKE TEST Colores', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(22)').click()
        cy.get('div.card > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      });

      //Casp de Prueba Colores
    it('Caso de Prueba Colores', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(22)').click()
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("TEST42")
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
        if ($content.text().includes("Color guardado con éxito.")) {
            cy.get('.swal2-confirm').should('be.visible').click();
        } else if ($content.text().includes("El color ya existe.")) {
            cy.get('.swal2-confirm').should('be.visible').click();
        } else {
            // Manejar cualquier otro caso aquí si es necesario
        }
    });
});
        
    //SMOKE TEST Marcas
    it('SMOKE TEST Marcas', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(23)').click()
        cy.get('div.card > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
        
    });
    
    //Caso de Pruebas Marcas
    it('Caso de Pruebas Marcas', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(23)').click()
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("Test3213213")
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
            if ($content.text().includes("Marca guardada con éxito.")) {
                cy.get('.swal2-confirm').should('be.visible').click();
            } else if ($content.text().includes("La marca ya existe.")) {
                cy.get('.swal2-confirm').should('be.visible').click();
            } else {
                // Manejar cualquier otro caso aquí si es necesario
            }
        });
    });  

    //SMOKE TEST Modelos
    it('SMOKE TEST Modelos', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(24)').click()
        cy.get('tr > :nth-child(1)').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
        cy.get('.header-title > .btn').should("be.visible")
    });

    //Caso de Pruebas Modelos
    it('Caso de Pruebas Modelos', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(24)').click()
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("ModeloTest41")
        cy.get('.ng-select-container').type("Test2").type("{enter}")
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
            if ($content.text().includes("Modelo guardado con éxito.")) {
                cy.get('.swal2-confirm').should('be.visible').click();
            } else if ($content.text().includes("El modelo ya existe.")) {
                cy.get('.swal2-confirm').should('be.visible').click();
            } else {
                // Manejar cualquier otro caso aquí si es necesario
            }
        });
    });

    //SMOKE Test Articulos
    it('SMOKE Test Articulos', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(25)').click()
        cy.get('thead > tr > :nth-child(1)').should("be.visible")
        cy.get('.header-title > .btn').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
    });

    //Caso de Prueba Articulos
    it('Caso de Prueba Articulos', () => {
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get(':nth-child(25)').click()
        cy.get('.header-title > .btn').click()
        cy.get(':nth-child(1) > .col-md-12 > .col-8 > .form-control').type("DescriptTest")
        cy.get(':nth-child(2) > .col-md-12 > .col-8 > .form-control').type("SKUTEST38")
        cy.get(':nth-child(3) > .col-md-12 > .col-8 > .ng-select-searchable > .ng-select-container').type("ModeloTest111111").type("{enter}")
        cy.get(':nth-child(2) > .col-md-4 > .col-md-12 > .col-8 > .ng-select-searchable > .ng-select-container').type("TEST20").type("{enter}")
        //cy.get('.form-check-input').click() //DESACTIVAR SI NO ES SERIALIZABLE
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
            if ($content.text().includes("Artículo guardado con éxito.")) {
                cy.get('.swal2-confirm').should('be.visible').click();
            } else if ($content.text().includes("El artículo ya existe.")) {
                cy.get('.swal2-confirm').should('be.visible').click();
            } else {
                // Manejar cualquier otro caso aquí si es necesario
            }
        });
    });
    
})