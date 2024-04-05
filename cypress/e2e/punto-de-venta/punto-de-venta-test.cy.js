describe("Test Funcionamiento Punto de Venta", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Punto de Venta
    
        //HOOKS
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.viewport(1280, 720)
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
 
        
      })
        //Funcionamiento correcto de todos los botones dentro del area de Punto de Venta
    it("Funcionamiento de Todos los Botones", () => {
      
        // Hace clic para expandir el área de botones si es necesario
        cy.get(':nth-child(9) > [data-bs-toggle="collapse"]').click()
        // Hace clic en cada botón dentro del área de botones
        cy.get('#parent_64 > .nav-second-level').click() //Es unicamente una sección, no se necesita For
        })
              
    // SMOKE TEST PUNTO DE VENTA
    it('SMOKE TEST Punto de Venta', () => {
      cy.get('.side-menu > :nth-child(9) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_64 > .nav-second-level').click()
      cy.get('#step1').should("be.visible")
      cy.get('#step2').should("be.visible")
      cy.get('#step3').should("be.visible")
      cy.get('#step4').should("be.visible")
      cy.get('#step5').should("be.visible")
      cy.get('#step6').should("be.visible")
      cy.get('#step7').should("be.visible")
      cy.get('#step8').should("be.visible")
      cy.get('.page-title-box').should("be.visible")
    });

    //CASO DE PRUEBA PUNTO DE VENTA
    it.only('CASO DE PRUEBA PUNTO DE VENTA', () => {
      cy.get(':nth-child(11) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_64 > .nav-second-level').click()
      cy.get('.col-8 > .ng-select-searchable > .ng-select-container').type("Coatzacoalcos").wait(8000).type("{enter}")
      cy.get('.modal-footer > .btn').click()
      //Seleccione Socio
      cy.get('#idDistributor > .ng-select-container > .ng-value-container > .ng-input > input').type("77 - MIRNA").wait(1000).type("{downarrow}").type("{enter}")
      cy.get('#step1Button').wait(500).click()
      //SeleccioneFolio
      cy.get('.accordion-body > :nth-child(1) > .form-group > .ng-select-searchable > .ng-select-container').click().type("{downarrow}").type("{enter}")
      cy.get('#flush-collapseTwo > .accordion-body > .row > .col > .btn').click()
      cy.get('#flush-collapseThree > .accordion-body > .row > .col > :nth-child(2)').click().wait(2000)
      
      //Cliente Existente:
      // cy.get('#flush-collapseThree > .accordion-body > .row > .col > :nth-child(1)').click()
      // cy.get('#idCustomer > .ng-select-container').type("255 - ").wait(2000).type("{enter}") //El cliente existente
      // cy.get('person-phone-form-component > form.ng-pristine > .row > :nth-child(1) > .input-group > .form-control').type("1234567890")
      // cy.get('person-phone-form-component > form.ng-pristine > .row > :nth-child(2) > div > .form-control').type("Celular").type("{enter}")
      // cy.get('.col-md-2 > .btn').click()

      //Llenar Hoja para Nuevo Cliente
      //iNFO. GENERAL
      cy.get(':nth-child(3) > .col-md-6 > .input-group > .form-control').type("SAHA780803MDFNRL02")
      cy.get(':nth-child(3) > .col-md-6 > .input-group > .input-group-text > .fas').click()
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .form-control').select("Mujer")
      cy.get(':nth-child(5) > :nth-child(3) > div > .form-control').select("Soltero(a)")
      cy.get('form.ng-untouched > .row > :nth-child(1) > .input-group > .form-control').type("6672287601") //Puedes agregar a mas de 1 persona con el mismo número
      cy.get('person-phone-form-component > .ng-invalid.ng-dirty > .row > :nth-child(2) > div > .form-control').select("Celular")
      cy.get('.col-md-2 > .btn').click()
      cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').type("80190")
      cy.get(':nth-child(1) > :nth-child(2) > .input-group > .input-group-text > .fas').click()
      cy.get('person-address-form-component > .ng-invalid.ng-dirty > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').type("CalleTest")
      cy.get('.ng-invalid.ng-dirty > :nth-child(2) > :nth-child(1) > div > .form-control').type("12345")
      cy.get('.ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div > .form-control').type("12345")
      cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .col-md-6 > div > .form-control').select("Independencia")
      cy.get('person-address-form-component > form.ng-dirty > :nth-child(3) > .col-md-6 > div > .form-control').type("LOREMITSUML")

      //iNFO DE NEGOCIO
      cy.get('.nav > :nth-child(2) > .nav-link').click()
      cy.get('form.ng-untouched > :nth-child(1) > .col-md-6 > div > .form-control').type("NEGOCIOTEST")
      cy.get('form.ng-invalid > :nth-child(2) > :nth-child(1) > div > .form-control').type("loremi")
      cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > div > .form-control').type("12345")
      cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > div > .form-control').type("**![!")
      cy.get(':nth-child(4) > .col-md-6 > div > .form-control').type("loremum")
      cy.get('app-business-form > form.ng-invalid > :nth-child(1) > :nth-child(2) > :nth-child(2) > .form-control').type("12")
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .form-control').select("Restaurante")
      cy.get(':nth-child(2) > :nth-child(2) > .input-group > .form-control').type("80190")
      cy.get(':nth-child(2) > :nth-child(2) > .input-group > .input-group-text > .fas').click()
      cy.get('.ng-invalid.ng-dirty > :nth-child(3) > .col-md-6 > div > .form-control').select("Independencia")

      //REFERENCIAS
      cy.get('.nav > :nth-child(3) > .nav-link').click()
      cy.get('.header-title > .btn').click()
      cy.get('.modal-body > :nth-child(1) > :nth-child(2) > .form-control').type("loremi")
      cy.get('.modal-body > :nth-child(2) > .col-md > div > .form-control').select("Conyugue")
      cy.get('.modal-body > :nth-child(3) > :nth-child(2) > .form-control').type("1234567890")
      cy.get('.form-group > .btn-primary').click()
      cy.get('.modal-footer > .btn-primary').click()
      cy.get('#swal2-content').contains("Cliente guardado correctamente")
      cy.get('.swal2-confirm').click()
      cy.get(':nth-child(5) > .col > .btn').click()

      //TIPO DE CARGO
      cy.get('.accordion-body > :nth-child(2) > .form-control').select("Financiero")
      cy.get('#flush-collapseFour > .accordion-body > .row > .col > .btn').click()

      //Datos de Canje del Vale
      cy.get('.row > :nth-child(1) > :nth-child(1) > .ng-select-searchable > .ng-select-container').type("2000").type("{enter}")
      cy.get(':nth-child(2) > .ng-select-searchable > .ng-select-container').type("12").type("{enter}")
      cy.get('.row > :nth-child(1) > .col > .btn').click()

      //Tabla de Amortizacion
      cy.get('#flush-collapseSix > .accordion-body > .row > .col > .btn').click()

      //Generar Compra
      cy.get('#flush-collapseSeven > .accordion-body > .row > .col > .btn').click()
      cy.get('#swal2-content').contains("Compra generada correctamente.")
      cy.get('.swal2-confirm').click()

      //Finalizar Canje
      cy.get('[style="margin-right: 5px;"]').click()
      cy.get('#swal2-content').contains("Folio reenviado correctamente.")
      cy.get('.swal2-confirm').click()
      cy.get('#flush-collapseEight > .accordion-body > .row > .col > :nth-child(2)').click()
    })

    // Escucha el evento uncaught:exception para evitar que Cypress falle la prueba automáticamente
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignora el error que se produce al intentar salir del modo de pantalla completa
      if (err.message.includes('exitFullscreen')) {
        return false
      }
      // Devuelve true para que otros errores no relacionados con exitFullscreen no sean ignorados
      return true
    })

    
    })

    /*

      */  