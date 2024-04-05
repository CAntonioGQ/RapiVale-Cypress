describe("Test Funcionamiento Credito", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Credito
        //HOOKS
      beforeEach(() => {
        cy.visit('http://172.17.52.36:8080/#/auth/login')
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
 
        
      })
        //Funcionamiento correcto de todos los botones dentro del area de Credito
    it("Funcionamiento de Todos los Botones", () => {
        // Hace clic para expandir el área de botones si es necesario
        cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
        // Hace clic en cada botón dentro del área de botones
        for (let i = 1; i <= 9; i++) {
          cy.get(`#parent_43 > :nth-child(${i}) > li > a`).click()
        }
        })
    
        //SMOKE TEST Y CASO DE PRUEBA Para funcionamiento de la pantalla Credito/Compras
        //AQUI NO SE PUEDE HACER MUCHO YA QUE UNICAMENTE ES UNA LISTA Y VALIDAMOS QUE SE MUESTRE LA INFO CORRECTAMENTE
        it("SMOKE TEST / CASO PRUEBA PANTALLA Credito/Compras",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(1)').click()
          cy.get('.col-xl-12 > :nth-child(2) > .card-body').should("be.visible")
          cy.get('app-purchase-list > .container-fluid > :nth-child(1) > .col-12 > .page-title-box').should("be.visible")
          cy.get('.fe-chevron-down').click()
          cy.get(':nth-child(4) > .form-group > .form-control').select("Habilitado")
          cy.get('.form-group > .btn-primary').click().wait(6000)
          cy.get(':nth-child(9) > .page-link').should("be.visible")
        })

        //SMOKE TEST PANTALLA Credito/Clientes
        it("SMOKE TEST PANTALLA Credito/Clientes",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(2)').click().wait(2000)
          cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
        })
        
        //CASO DE PRUEBA Agregar un Nuevo Cliente en Crédito/Clientes
        //Lo siguiente es para Info. General
        //Wilis Dice que no se registran desde aquí -> Hacer un reporte del por que está ahí si no se registran desde ahí
        it("CASO DE PRUEBA Agregar un Nuevo Cliente en Crédito/Clientes",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(2)').click().wait(2000)
          cy.get('.header-title > .btn').click()
          cy.get('.col-10 > .form-control').select("Guasave")
          cy.get(':nth-child(3) > .col-md-6 > .input-group > .form-control').type("GAQC020505HSLSVRA2").type("{enter}") //CON CURP INVALIDO FUNCIONA?? CHECAR ESTA Y LAS DEMAS LAS DEJE CON PUNTO ROJO
          cy.get(':nth-child(3) > .col-md-6 > .input-group > .input-group-text').click().wait(2000)
          cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .form-control').select("Hombre")
          cy.get(':nth-child(5) > :nth-child(3) > :nth-child(2) > .form-control').select("Soltero(a)")
          cy.get('form.ng-pristine > .row > :nth-child(1) > .input-group > .form-control').type("6672287601")
          cy.get('person-phone-form-component > .ng-invalid.ng-dirty > .row > :nth-child(2) > div > .form-control').select("Celular")
          cy.get('.col-md-2 > .btn').click() //Checar linea de arriba con numeros de telefono Borrar/Agregar mas
          cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').type("80190") // Si pongo CP no Existente se peteatea
          cy.get(':nth-child(1) > :nth-child(2) > .input-group > .input-group-text > .fas').click() // Si pongo CP no Existente se peteatea
          cy.get('person-address-form-component > .ng-invalid.ng-dirty > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').type("Calle de Prueba")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > :nth-child(1) > div > .form-control').type("3333")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div > .form-control').type("3333")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .col-md-6 > div > .form-control').select("Independencia")
          cy.get('person-address-form-component > form.ng-dirty > :nth-child(3) > .col-md-6 > div > .form-control').type("Referencia TEST")

          //Lo siguiente es para Info. Del Negocio
          cy.get('.nav > :nth-child(2) > .nav-link').click()
          cy.get('form.ng-untouched > :nth-child(1) > .col-md-6 > div > .form-control').type("InfoNegocioTest")
          cy.get(':nth-child(2) > :nth-child(2) > .input-group > .form-control').type("80190")
          cy.get(':nth-child(2) > :nth-child(2) > .input-group > .input-group-text > .fas').click()
          cy.get('app-business-form > .ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2) > :nth-child(2) > .form-control').type("99")
          cy.get('app-business-form > form.ng-dirty > :nth-child(2) > :nth-child(1) > div > .form-control').type("CalleTest")
          cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .form-control').select("Restaurante")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > div > .form-control').type("9999")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > div > .form-control').type("9999")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > .col-md-6 > div > .form-control').select("Independencia")
          cy.get(':nth-child(4) > .col-md-6 > div > .form-control').type("Referencia Test")

          //Lo siguiente es para AVALES
          cy.get('.nav > :nth-child(3) > .nav-link').click()
          cy.get('endorsement-list-component > .header-title > .btn').click()
          cy.get('.modal-body > :nth-child(1) > .col-md-6 > :nth-child(2) > .form-control').select("Conyugue")
          cy.get('.modal-body > person-form-component > :nth-child(1) > :nth-child(3) > .col-md-6 > .input-group > .form-control').type("GAQC020505HSLSVRA2")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > .col-md-6 > .input-group > .input-group-text > .fas').click().wait(2000)
          cy.get('.ng-invalid.ng-dirty > :nth-child(5) > :nth-child(2) > :nth-child(2) > .form-control').select("Hombre")
          cy.get('.ng-invalid.ng-dirty > :nth-child(5) > :nth-child(3) > div > .form-control').select("Soltero(a)")
          cy.get('form.ng-untouched > .row > :nth-child(1) > .input-group > .form-control').type("1234567890")
          cy.get('.modal-body > person-form-component > :nth-child(1) > :nth-child(7) > person-phone-form-component > .ng-invalid.ng-dirty > .row > :nth-child(2) > div > .form-control').select("Celular")
          cy.get('.ng-invalid.ng-dirty > :nth-child(7) > person-phone-form-component > form.ng-touched > .row > .col-md-2 > .btn').click()
          cy.get('form.ng-untouched > :nth-child(1) > :nth-child(2) > .input-group > .form-control').type("80190")
          cy.get('form.ng-untouched > :nth-child(1) > :nth-child(2) > .input-group > .input-group-text > .fas').click()
          cy.get('person-address-form-component > .ng-invalid.ng-dirty > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').type("CalleTest")
          cy.get('person-address-form-component > .ng-invalid.ng-dirty > :nth-child(2) > :nth-child(1) > div > .form-control').type("9999")
          cy.get('person-address-form-component > .ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div > .form-control').type("9999")
          cy.get('person-address-form-component > .ng-invalid.ng-dirty > :nth-child(2) > .col-md-6 > div > .form-control').select("Independencia")
          cy.get('.modal-body > person-form-component > :nth-child(1) > :nth-child(8) > person-address-form-component > form.ng-dirty > :nth-child(3) > .col-md-6 > div > .form-control').type("ReferenciaTest")
          cy.get('.modal-body > .form-group > .btn-primary').click()

          //Lo Siguiente es para BENEFICIARIOS
          cy.get('.nav > :nth-child(4) > .nav-link').click()
          cy.get('app-beneficiary-list > .header-title > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > .form-control').type("NOMBRETEST")
          cy.get('.modal-body > :nth-child(2) > div > .form-control').type("2020-10-10")
          cy.get(':nth-child(3) > .col-md > div > .form-control').select("Conyugue")
          cy.get(':nth-child(4) > .col-md > div > .form-control').select("Crédito")
          cy.get(':nth-child(5) > div > .form-control').type("1234567890")
          cy.get('.modal-body > .form-group > .btn-primary').click()

          //Lo siguiente es para REFERENCIAS
          cy.get(':nth-child(5) > .nav-link').click()
          cy.get('app-reference-list > .header-title > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > .form-control').type("ReferenciaTest")
          cy.get('.modal-body > :nth-child(2) > .col-md > :nth-child(2) > .form-control').select("Conyugue")
          cy.get('.modal-body > :nth-child(3) > div > .form-control').type("1234567890")
          cy.get('.modal-body > .form-group > .btn-primary').click()

          //Lo siguiente es para ARCHIVOS
          cy.get(':nth-child(6) > .nav-link').click()
          cy.get('.card-body > .table-responsive').click()
          cy.get('body').type('{rightarrow}')
          cy.get(':nth-child(2) > button.btn').should("be.visible")
          cy.get(':nth-child(2) > button.btn').click()

          //SUBIDA DE ARCHIVO INEEEJEMPLO.PNG
          cy.fixture('INEEJEMPLO.png').then(fileContent => {
            cy.get('input[type="file"]').then($input => {
              const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/png')
              const testFile = new File([blob], 'INEEJEMPLO.png', { type: 'image/png' })
              const dataTransfer = new DataTransfer()
          
              dataTransfer.items.add(testFile)
              $input[0].files = dataTransfer.files
          
              cy.wrap($input).trigger('change', { force: true })
            })

          })    
          cy.get('.form-group > .btn-primary').wait(5000).click()
          //cy.get('.form-group > .btn-primary').click()
        })

        //SMOKE TEST / Caso de Prueba Crédito/Pagos
        //No se puede hacer caso de prueba por que es unicamente una tabla :x
        it("SMOKE TEST / Caso de Prueba Crédito/Pagos",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(3)').click().wait(2000)
          cy.get('.col-xl-12 > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
        })

        //SMOKE TEST Credito/Estado de Cuenta Maestro
        it("SMOKE TEST Crédito/Estado de Cuenta Maestro",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(4)').click().wait(2000)
          cy.get('.card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
        })
        //Caso de Prueba Buscar un Socio en Credito/Estado de Cuenta Maestro
        it("Caso de Prueba Buscar un Socio en Credito/Estado de Cuenta Maestro",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(4)').click().wait(2000)
          cy.get('.ng-select-container').type("3 - WALDO ARTURO").wait(1000).type("{enter}")
          cy.get(':nth-child(2) > .form-control').type("2024-03-07")
          cy.get('.btn-primary').click().wait(5000)
          cy.get('#general-information-tap').should("be.visible")
          cy.get('#tel-tab').should("be.visible")
          cy.get('#signature-tab').should("be.visible")
        })

        //SMOKE TEST Credito/Notas de Credito
        it("SMOKE TEST Credito/Notas de Credito",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(5)').click().wait(2000)
          cy.get('#collapseOne > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
        })

        //Caso de Prueba Crear una Nueva Nota de Crédito en Credito/Notas de Credito
        //No se ve nada que pedo??
        it("Caso de Prueba Crear una Nueva Nota de Crédito en Credito/Notas de Credito",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(5)').click().wait(2000)
          cy.get('.card-header > .btn').click()
        })

        //SMOKE TEST Credito/Notas de Credito
        it("SMOKE TEST Credito/Notas de Credito",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(6)').click().wait(2000)
          cy.get('.col-10').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
        })

        //Caso de Prueba Crear Una Nueva Solicitud en Credito/Solicitudes
        it("Caso de Prueba Crear Una Nueva Solicitud en Credito/Solicitudes",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(6)').click().wait(2000)
          cy.get('.header-title > .btn').click()
          cy.get('#idRequestType > .ng-select-container').type("Prestamo Personal").type("{enter}")
          cy.get('#idDistributor > .ng-select-container').type("25 - MARIO ESTRADA").type("{enter}")
          cy.get('.modal-footer > .btn').click()
          cy.get('.card-header').wait(2000).should("be.visible")
        })

        //SMOKE TEST Credito/Solicitudes Autorizadas
        //ES UNICAMENTE UNA LISTA
        it("SMOKE TEST / Caso de Prueba Credito/Solicitudes Autorizadas",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(7)').click()
          cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .card-body').wait(5000).should("be.visible")
        })

        //SMOKE TEST Credito/Solicitudes Autorizadas
        //Es unicamente una lista
        it("SMOKE TEST / Caso de Prueba Credito/Solicitudes Autorizadas",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(7)').click().wait(5000)
          cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('thead > :nth-child(1)').should("be.visible")
        })
        //SMOKE TEST Credito/Solicitudes Canceladas
        //Es unicamente una lista
        it("SMOKE TEST / Caso de Prueba Credito/Solicitudes Canceladas",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(8)').click().wait(5000)
          cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('thead > :nth-child(1)').should("be.visible")

        })
        //SMOKE TEST Credito/Saldo a Favor
        it("SMOKE TEST Credito/Saldo a Favor",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(9)').click().wait(2000)
          cy.get('article.card > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
        })
        //CASO DE PRUEBA SALDO A FAVOR
        //AQUI QUE PEDO??
        it.only("Caso de Prueba Saldo a Favor",()=>{
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_43 > :nth-child(9)').click().wait(2000)
          cy.get('.ng-select-container').type("3 - WALDO ARTURO").type("{enter}")
          cy.get('.btn-primary').click()
        })

    })
