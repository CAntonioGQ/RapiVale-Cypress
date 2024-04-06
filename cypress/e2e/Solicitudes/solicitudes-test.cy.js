describe("Test Funcionamiento Solicitudes", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Solicitudes
    
        //HOOKS
    beforeEach(() => {
    
        cy.visit('http://localhost:4200/#/auth/login')
        cy.viewport(1280, 720)
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()
        
 
        
      })

        //Funcionamiento correcto de todos los botones dentro del area de Solicitudes
        it("Funcionamiento de Todos los Botones", () => {
            // Hace clic para expandir el área de botones si es necesario
            cy.get(':nth-child(5) > [data-bs-toggle="collapse"]').click()
            // Hace clic en cada botón dentro del área de botones
            for (let i = 1; i <= 5; i++) {
              cy.get(`#parent_47 > :nth-child(${i}) > li > a`).click()
            }
            })

        it("SMOKE TEST SOLICITUDES/SOLICITUDES",()=>{
          cy.get(':nth-child(5) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(1)').click().wait(2000)
          cy.get('.col-9 > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('thead > :nth-child(1)').should("be.visible")
        })
        
        it("Caso de Prueba Nueva Solicitud/Solicitud",()=>{
          cy.get(':nth-child(9) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(5)').click().wait(2000)
          cy.get('.header-title > .btn').click()

          //Info. General
          cy.get('.col-10 > .form-control').wait(10000).select("Tapachula")
          cy.get('.col-8 > .form-control').select("Tapachula A")
          cy.get('.ng-select-container').type("JUAN CARLOS").type("{enter}")
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .col-md-6 > .input-group > .form-control').type("GARA650317MDFRDL07")
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .col-md-6 > .input-group > .input-group-text').click()
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(2) > :nth-child(2) > .form-control').select("Hombre")
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(3) > div > .form-control').select("Soltero(a)")
          cy.get('app-person-phone-form > form.ng-pristine > .row > :nth-child(1) > .input-group > .form-control').type("1234567890")
          cy.get('.ng-invalid.ng-dirty > .row > :nth-child(2) > div > .form-control').select("Celular")
          cy.get('.col-md-2 > .btn').click()
          cy.get(':nth-child(1) > .col-md-6 > div > .form-control').type("CalleTest")
          cy.get('app-person-address-form > form.ng-untouched > :nth-child(1) > :nth-child(2) > div > .form-control').type("9999")
          cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(3) > div > .form-control').type("9999")
          cy.get('.col-md-5 > div > .form-control').type("EntreCalleTest")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .col-md-6 > div > .form-control').type("EntreCalle2Test")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > .input-group > .form-control').type("80190")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > .input-group > .input-group-text').click()
          cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .form-control').select("Independencia")
          cy.get('.ng-invalid.ng-dirty > :nth-child(4) > .col-md-6 > div > .form-control').type("ReferenciaTest")
          cy.get('#generalInformation > [style="display: flex; flex-direction: row-reverse;"] > .btn').click()

          //Actividad Económica
          cy.get('form.ng-pristine > :nth-child(1) > .col-md-3 > :nth-child(2) > .form-control').select("Independiente")
          cy.get('.container-fluid > .ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2) > div > .form-control').select("Valeras")//Lo tengo que colocar doble por que a la primera no jala
          cy.get('.container-fluid > .ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2) > div > .form-control').select("Valeras")//Lo tengo que colocar doble por que a la primera no jala
          cy.get('.ng-invalid.ng-dirty > :nth-child(1) > .col-md-6 > :nth-child(2) > .form-control').select("Otros")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > :nth-child(1) > :nth-child(2) > .form-control').type("NombreNegocioTest")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div > .form-control').type("PuestoTest")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > :nth-child(2) > .form-control').type("9999")
          cy.get(':nth-child(2) > :nth-child(2) > .input-group > .form-control').type("12")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > .col-md-6 > div > .form-control').type("1234567890")
          cy.get(':nth-child(4) > :nth-child(2) > .input-group > .form-control').type("80190")
          cy.get(':nth-child(4) > :nth-child(2) > .input-group > .input-group-text').click()
          cy.get('.ng-invalid.ng-dirty > :nth-child(4) > :nth-child(1) > :nth-child(2) > .form-control').type("CalleTest")
          cy.get('.ng-invalid.ng-dirty > :nth-child(5) > :nth-child(1) > div > .form-control').type("1234")
          cy.get('.ng-invalid.ng-dirty > :nth-child(5) > :nth-child(2) > div > .form-control').type("1234")
          cy.get(':nth-child(5) > .col-md-6 > div > .form-control').select("Independencia")
          cy.get(':nth-child(6) > .col-md-6 > div > .form-control').type("ReferenciaTest")
          cy.get('#economicActivity > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          
          //Aval

          cy.get('app-endorsement-list > .row > :nth-child(2) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > .col-md-6 > :nth-child(2) > .form-control').select("Conyugue")
          cy.get('.modal-body > app-person-form > .container-fluid > :nth-child(1) > .col-lg-12 > .card > .card-body > .form-horizontal > :nth-child(1) > :nth-child(1) > :nth-child(3) > .col-md-6 > .input-group > .form-control').type("AESA780826MDFRLL00")
          cy.get('.modal-body > app-person-form > .container-fluid > :nth-child(1) > .col-lg-12 > .card > .card-body > .form-horizontal > :nth-child(1) > :nth-child(1) > :nth-child(3) > .col-md-6 > .input-group > .input-group-text > .fas').click()
          cy.get('.modal-body > app-person-form > .container-fluid > :nth-child(1) > .col-lg-12 > .card > .card-body > .form-horizontal > :nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(2) > :nth-child(2) > .form-control').select("Hombre")
          cy.get('.modal-body > app-person-form > .container-fluid > :nth-child(1) > .col-lg-12 > .card > .card-body > .form-horizontal > :nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(3) > :nth-child(2) > .form-control').select("Soltero(a)")
          cy.get('app-person-phone-form > form.ng-untouched > .row > :nth-child(1) > .input-group > .form-control').type("1234567890")
          cy.get('.modal-body > app-person-form > .container-fluid > :nth-child(1) > .col-lg-12 > .card > .card-body > .form-horizontal > :nth-child(1) > :nth-child(1) > :nth-child(7) > app-person-phone-form > .ng-invalid.ng-dirty > .row > :nth-child(2) > div > .form-control').select("Celular")
          cy.get('.modal-body > app-person-form > .container-fluid > :nth-child(1) > .col-lg-12 > .card > .card-body > .form-horizontal > :nth-child(1) > :nth-child(1) > :nth-child(7) > app-person-phone-form > form.ng-dirty > .row > .col-md-2 > .btn').click()          
          cy.get('form.ng-untouched > :nth-child(1) > .col-md-6 > div > .form-control').type("CalleTest")
          cy.get('app-person-address-form > form.ng-untouched > :nth-child(1) > :nth-child(2) > div > .form-control').type("9999")
          cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(3) > div > .form-control').type("9999")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .col-md-5 > :nth-child(1) > .form-control').type("EntreCalle1")
          cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .col-md-6 > div > .form-control').type("EntreCalle2")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > .input-group > .form-control').type("80190")
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > .input-group > .input-group-text').click()
          cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > :nth-child(2) > .form-control').select("Independencia")
          cy.get('.ng-invalid.ng-dirty > :nth-child(4) > .col-md-6 > div > .form-control').type("ReferenciaTest")
          cy.get(':nth-child(5) > .btn-primary').click()
          cy.get('#endorsements > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()

          //Beneficiario
          cy.get('app-beneficiary-list > .row > :nth-child(2) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > div > .form-control').type("NameTest")
          cy.get('.modal-body > :nth-child(2) > div > .form-control').type("2000-10-10")
          cy.get(':nth-child(3) > .col-md > div > .form-control').select("Conyugue")
          cy.get(':nth-child(5) > div > .form-control').type("1234567890")
          cy.get('.modal-body > .form-group > .btn-primary').click()
          cy.get('#beneficiaries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()

          //Referencia1
          //Puedes agregar la misma referencia con el mismo nombre y todo unicamente cambiando el numero de telefono??
          cy.get('app-reference-list > .row > :nth-child(3) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(1) > div > .form-control').type("FirstNameTest")
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > div > .form-control').type("SecondNameTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(1) > div > .form-control').type("LastNameFTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(2) > div > .form-control').type("LastNameMTest")
          cy.get(':nth-child(3) > .col-md > div > .form-control').select("Conyugue")
          cy.get('.col > :nth-child(2) > .input-group > .form-control').type("21")
          cy.get('div.ng-untouched > .form-control').type("1234567890")
          cy.get('.modal-body > .form-group > .btn-primary').click()

          //Referencia2
          cy.get('app-reference-list > .row > :nth-child(3) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(1) > div > .form-control').type("FirstNameTest")
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > div > .form-control').type("SecondNameTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(1) > div > .form-control').type("LastNameFTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(2) > div > .form-control').type("LastNameMTest")
          cy.get(':nth-child(3) > .col-md > div > .form-control').select("Conyugue")
          cy.get('.col > :nth-child(2) > .input-group > .form-control').type("21")
          cy.get('div.ng-untouched > .form-control').type("1214567890")
          cy.get('.modal-body > .form-group > .btn-primary').click()

          //Referencia3
          cy.get('app-reference-list > .row > :nth-child(3) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(1) > div > .form-control').type("FirstNameTest")
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > div > .form-control').type("SecondNameTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(1) > div > .form-control').type("LastNameFTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(2) > div > .form-control').type("LastNameMTest")
          cy.get(':nth-child(3) > .col-md > div > .form-control').select("Conyugue")
          cy.get('.col > :nth-child(2) > .input-group > .form-control').type("21")
          cy.get('div.ng-untouched > .form-control').type("1234567860")
          cy.get('.modal-body > .form-group > .btn-primary').click()

          //Referencia4
          cy.get('app-reference-list > .row > :nth-child(3) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(1) > div > .form-control').type("FirstNameTest")
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > div > .form-control').type("SecondNameTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(1) > div > .form-control').type("LastNameFTest")
          cy.get('.modal-body > :nth-child(2) > :nth-child(2) > div > .form-control').type("LastNameMTest")
          cy.get(':nth-child(3) > .col-md > div > .form-control').select("Conyugue")
          cy.get('.col > :nth-child(2) > .input-group > .form-control').type("21")
          cy.get('div.ng-untouched > .form-control').type("1234537890")
          cy.get('.modal-body > .form-group > .btn-primary').click()
          cy.get('#references > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()

          //Competencias
          cy.get('.header-title > .btn').click()
          cy.get('.modal-body > :nth-child(1) > .col-md > :nth-child(2) > .form-control').select("ConCredito")
          cy.get('.modal-body > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("12")
          cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').type("20000")
          cy.get('.modal-body > .form-group > .btn-primary').click()
          cy.get('#rivalries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()

          //Procesos
          cy.get('app-application-process-list > :nth-child(2) > :nth-child(3) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control').select("Investigación Domiciliaria")
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > div > .form-control').select("Solicitante")
          cy.get('.modal-body > :nth-child(1) > :nth-child(3) > :nth-child(2) > .form-control').select("ALMA LAURA GARCIA RODRIGUEZ")
          cy.get('.modal-body > :nth-child(2) > :nth-child(1) > :nth-child(2) > .form-control').select("CALLETEST 9999")
          cy.get('.modal-body > :nth-child(2) > :nth-child(2) > div > .form-control').select("Si")
          cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').type("NameTest")
          cy.get('.row.ng-untouched > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("CaractCasaTest")
          cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').type("CaractIntTest")
          cy.get('.row.ng-invalid > :nth-child(4) > :nth-child(2) > .input-group > .form-control').select("Bajo")


          cy.get(':nth-child(6) > :nth-child(2) > .input-group > .form-control').type("OTATESNOTATEST")
          cy.get('.modal-body > .form-group > .btn-primary').click()
          cy.get('#processes > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click().wait(5000)

          
          cy.get('app-application-files > .container-fluid > .row > .col-4 > .card-body > :nth-child(1) > .table > tbody > :nth-child(1) > :nth-child(2) > input[type="file"]').then($input => {
            cy.fixture('INEEJEMPLO.jpg', 'base64').then(fileContent => {
                const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpg')
                const testFile = new File([blob], 'INEEJEMPLO.jpg', { type: 'image/jpg' })
                const dataTransfer = new DataTransfer()
        
                dataTransfer.items.add(testFile)
                $input[0].files = dataTransfer.files
        
                cy.wrap($input).trigger('change', { force: true })
            })
        })
        })
             
        //SMOKE TEST Solicitudes/Pendiente de Contrato y Pagaré *ES UNICAMENTE UNA LISTA*
        it('SMOKE TEST Solicitudes/Pendiente de Contrato y Pagaré', () => {
          cy.get(':nth-child(5) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(2)').click().wait(2000)
          cy.get('.col-xl-12 > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible").wait(5000)
          cy.get('thead > tr > :nth-child(1)').should("be.visible")
        });

        //SMOKE TEST Solicitudes/En Autorizacion *ES UNICAMENTE UNA LISTA*
        it('SMOKE TEST Solicitudes/En Autorizacion', () => {
          cy.get(':nth-child(5) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(3)').click().wait(2000)
        });

        //SMOKE TEST Solicitudes/Autorizadas *ES UNICAMENTE UNA LISTA*
        it('SMOKE TEST Solicitudes/Autorizadas', () => {
          cy.get(':nth-child(5) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(4)').click()
          cy.get('.col-xl-12 > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('.header-title > .btn').should("be.visible")
        });

        //SMOKE Test Solicitudes/Rechazadas *ES UNICAMENTE UNA LISTA*
        it('SMOKE Test Solicitudes/Rechazadas', () => {
          cy.get(':nth-child(5) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(5)').click().wait(2000)
          cy.get('.col-xl-12 > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('.header-title > .btn').should("be.visible")
          cy.get('thead > tr > :nth-child(1)').should("be.visible")
        });

        // Caso de Prueba Requerimiento: Modificar Contrato para Quincenal
        it('Caso de Prueba Modificar Contrato para Quincenal: Palenque, Tuxtla, Tapachula Quincenal y Semanal Solicitud', () => {
          cy.get(':nth-child(9) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(5)').click().wait(10000)
          cy.get('.list-group > .active').contains("Solicitud")
          cy.get('.fe-chevron-down').click()
          cy.get('#selectTypeSearch').select("Sucursal")
          cy.get('.input-group > .form-control').type("Palenque")
          cy.get(':nth-child(1) > :nth-child(8) > .d-flex > .btn').click()
          cy.get('#generalInformation > [style="display: flex; flex-direction: row-reverse;"] > .btn').wait(60000).click()
          cy.get('#economicActivity > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#endorsements > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#beneficiaries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#references > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#rivalries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .btn-primary').click()
          cy.get('.swal2-input').type("Comentario")
          cy.get('.swal2-confirm').click().wait(8000)
          cy.get('#swal2-content').contains("Solicitud avanzada a la siguiente etapa")
          cy.get('.swal2-confirm').click()
        });

        it('Caso de Prueba Modificar Contrato para Quincenal: Palenque, Tuxtla, Tapachula Quincenal y Semanal PRE AUTORIZACION', () => {
          cy.get(':nth-child(9) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(5)').click().wait(10000)
          cy.get('.list-group > .active').contains("Solicitud")
          cy.get('[ng-reflect-ng-class=""]').click().wait(5000)
          cy.get('.fe-chevron-down').click()
          cy.get('#selectTypeSearch').select("Sucursal")
          cy.get('.input-group > .form-control').type("Tapachula")
          cy.get(':nth-child(1) > :nth-child(8) > .d-flex > .btn').click().wait(40000)
          cy.get('#generalInformation > [style="display: flex; flex-direction: row-reverse;"] > .btn').click()
          cy.get('#economicActivity > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#endorsements > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#beneficiaries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#references > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#rivalries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#processes > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#files > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('.form-horizontal > .row > :nth-child(1) > :nth-child(2) > .form-control').select("Quincenal Nuevas")
          cy.get('.form-horizontal > .row > :nth-child(2) > :nth-child(2) > .form-control').select("Experiencia (Valeras)")
          cy.get('.form-horizontal > .row > :nth-child(3) > div > .form-control').select("Nivel 1")
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(4) > .btn-primary').click()
          cy.get('#swal2-content').contains("Ingrese un comentario")
          cy.get('.swal2-input').type("Comentario")
          cy.get('.swal2-confirm').click().wait(5000)
          cy.get('#swal2-content').contains("Socio creado con éxito")
          cy.get('.swal2-confirm').click()
        });

        it('Caso de Prueba Modificar Contrato para Quincenal: Palenque, Tuxtla, Tapachula Quincenal y Semanal Descarga Contrato', () => {
          cy.get(':nth-child(9) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(1)').click().wait(20000)
          cy.get('.fe-chevron-down').click()
          cy.get(':nth-child(1) > .form-group > .form-control').type("Tuxta", "{enter}")
          cy.get('.form-group > .btn-primary').click()
          cy.get(':nth-child(1) > :nth-child(8) > .btn').click().wait(20000)
          cy.get('#generalInformation > [style="display: flex; flex-direction: row-reverse;"] > .btn').click()
          cy.get('#economicActivity > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#endorsements > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#beneficiaries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#references > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#rivalries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#processes > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#files > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#credit > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#credit > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
        });

        it.only('Caso de Prueba Requerimiento Motivos de Rechazo a Solicitudes de Afiliación para Pre Autorización RECHAZAR', ()=>{
          cy.get(':nth-child(9) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_47 > :nth-child(5)').click().wait(5000)
          cy.get('[ng-reflect-ng-class=""]').click()
          cy.get(':nth-child(1) > :nth-child(8) > .d-flex > .btn').click().wait(5000)
          cy.get('#generalInformation > [style="display: flex; flex-direction: row-reverse;"] > .btn').click()
          cy.get('#economicActivity > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#endorsements > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#beneficiaries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#references > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('#rivalries > [style="display: flex; flex-direction: row-reverse;"] > .btn-primary').click()
          cy.get('app-application-process-list > :nth-child(2) > :nth-child(3) > .btn').click()
          cy.get('.modal-body > :nth-child(1) > :nth-child(1) > div > .form-control').select("Investigación Domiciliaria")
          cy.get('.modal-body > :nth-child(1) > :nth-child(2) > div > .form-control').select("Solicitante")
          cy.get('.modal-body > :nth-child(1) > :nth-child(3) > div > .form-control').select("CELIA DOMINGUEZ RAMIREZ")
          cy.get('.modal-body > :nth-child(2) > :nth-child(1) > div > .form-control').select("A LOPEZ MATEO 50 ")
          cy.get('.modal-body > :nth-child(2) > :nth-child(2) > div > .form-control').select("Si")
          cy.get(':nth-child(1) > :nth-child(2) > .input-group > .form-control').select("Si")
          cy.get('.row.ng-invalid > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("12345")
          cy.get(':nth-child(3) > :nth-child(2) > .input-group > .form-control').type("12345")
          cy.get('.row.ng-invalid > :nth-child(4) > :nth-child(2) > .input-group > .form-control').type("12345")
          cy.get(':nth-child(5) > :nth-child(2) > .input-group > .form-control').type("1234")
          cy.get('.row.ng-invalid > :nth-child(6) > :nth-child(2) > .input-group > .form-control').type("12345")
          cy.get('.modal-body > :nth-child(6) > :nth-child(2) > .input-group > .form-control').type("12345")
        })
    })

  
/*    cy.get('app-application-files > .container-fluid > .row > .col-4 > .card-body > :nth-child(1) > .table > tbody > :nth-child(1) > :nth-child(2) > button.btn')
    cy.get('app-application-files > .container-fluid > .row > .col-4 > .card-body > :nth-child(1) > .table > tbody > :nth-child(2) > :nth-child(2) > button.btn')
    cy.get(':nth-child(1) > .table > tbody > :nth-child(3) > :nth-child(2) > button.btn')
    cy.get(':nth-child(1) > .table > tbody > :nth-child(4) > :nth-child(2) > button.btn')
    cy.get(':nth-child(1) > .table > tbody > :nth-child(5) > :nth-child(2) > button.btn')
    cy.get(':nth-child(1) > .table > tbody > :nth-child(6) > :nth-child(2) > button.btn')
    cy.get(':nth-child(1) > .table > tbody > :nth-child(7) > :nth-child(2) > button.btn')
    cy.get(':nth-child(1) > .table > tbody > :nth-child(8) > :nth-child(2) > button.btn')
    cy.get(':nth-child(1) > .table > tbody > :nth-child(9) > :nth-child(2) > button.btn')
    cy.get(':nth-child(10) > :nth-child(2) > button.btn')
    cy.get(':nth-child(11) > :nth-child(2) > button.btn')
    cy.get(':nth-child(12) > :nth-child(2) > button.btn')
    cy.get(':nth-child(13) > :nth-child(2) > button.btn')
    cy.get(':nth-child(14) > :nth-child(2) > button.btn')
    cy.get(':nth-child(15) > :nth-child(2) > button.btn')
    cy.get(':nth-child(16) > :nth-child(2) > button.btn')*/