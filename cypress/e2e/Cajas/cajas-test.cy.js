describe("Test Funcionamiento Cajas", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Cajas
    
        //HOOKS
    beforeEach(() => {
        cy.visit('http://172.17.52.36:8080/#/auth/login')
        cy.viewport(1280, 720)
        cy.get(':nth-child(1) > .form-control').type("admin")
        cy.get('.input-group > .form-control').type("!577Cw013;")
        cy.get('.btn').click().wait(2000)
 
        
      })
        //Funcionamiento correcto de todos los botones dentro del area de Cajas
        it('Funcionamiento de Todos los Botones', () => {
            // Hace clic para expandir el área de botones si es necesario
            cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
            // Hace clic en cada botón dentro del área de botones
            for (let i = 1; i <= 5; i++) {
              cy.get(`#parent_49 > :nth-child(${i})`).click() 
              //Tarda en visualizarse la BD asi que se puede añadir un Delay
              //Listado de Cajas y Cajas da la misma respuesta
            }})
              
                    
          //SMOKE Test Cajas/Entradas y Salidas
        it('SMOKE Test Cajas/Entradas y Salidas', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(1)').click()
          cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.header-title > a.btn').should("be.visible")
          cy.get('.header-title > button.btn').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
        });

        
        //CONSULTAR CON WILIS A VER QUE PEDO **YA QUEDO NO SE TE OLVIDE HACERLO**
        //Caso de Prueba Agregar una nueva Caja en Cajas/Entradas y Salidas 
        
        it('Caso de Prueba Agregar Una Nueva Caja en Cajas/Entradas y Salidas', () => {
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(5)').click()
          cy.get('.header-title > a.btn').click()
          cy.get(':nth-child(1) > .col-8 > .form-control').select("Guasave")
          cy.get(':nth-child(2) > .col-8 > .form-control').select("Caja Principal Guasave")
          //cy.get('#swal2-content').contains("Esta Caja Llegó al Mínimo de Saldo.")
          //cy.get('.swal2-confirm').click() 
          cy.get(':nth-child(3) > .col-8 > .form-control').select("Entrada")
          cy.get(':nth-child(4) > .col-8 > .form-control').select("Cuenta")
          cy.get(':nth-child(5) > .col-8 > .form-control').select("SubCuenta")
          cy.get(':nth-child(6) > .col-8 > .form-control').type("99911119")
          cy.get(':nth-child(7) > .col-8 > .form-control').type("LOREMIPSUM")
          cy.get('.btn-primary').click()
          cy.get('#swal2-content').contains("Entrada/Salida guardada exitosamente")
          cy.get('.swal2-confirm').click()
          
          //cy.get('#swal2-content').contains("Esta Caja Llegó al Mínimo de Saldo.")
          //cy.get('.swal2-confirm').click() 


        });
        
        it('Caso de Prueba para funcionamiento de botón Excel en Cajas/Entradas y Salaidas', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(1)').click()
          cy.get('.header-title > button.btn').click()
        });
        //SMOKE TEST Cajas/Transferencias
        it('SMOKE TEST Cajas/Transferencias', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(2)').click()
          cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('.header-title > .btn').should("be.visible")
        });

        //CASO DE PRUEBA PARA AGREGAR UNA NUEVA TRANSFERENCIA EN Cajas/Transferencias
        //CHECAR LO DE LAS BOVEDAS NI SE QPD PERO CHECALO
        //Como hago una caja tipo boveda
        it('CASO DE PRUEBA GUARDAR TRANSFERENCIA EN CAJAS/TRANSFERENCIAS', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(2)').click()
          cy.get('[routerlink="create"]').click()
          cy.get(':nth-child(1) > :nth-child(1) > .col-8 > .form-control').wait(2000).select("Mazatlan")
          cy.get(':nth-child(1) > :nth-child(2) > .col-8 > .form-control').select("Caja Mazatlan")
          //cy.get('#swal2-content').contains("Esta Caja Llegó al Mínimo de Saldo.")
          //cy.get('.swal2-confirm').click() //Esto que pedo?
          cy.get(':nth-child(1) > :nth-child(3) > .col-8 > .form-control').type("8889").type("{enter}") //ESTO QUE PEDO?
          cy.get(':nth-child(4) > .col-8 > .form-control').type("NOTATESTNOTATESTNOTATESTNOTATESTNOTATEST")
          cy.get(':nth-child(2) > :nth-child(1) > .col-8 > .form-control').select("Cd Victoria")
          cy.get(':nth-child(2) > :nth-child(2) > .col-8 > .form-control').select("Caja Cd Victoria")
          cy.get(':nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Transferencia")
          cy.get('.btn-primary').click()
          cy.get('.swal2-confirm').click() 
        
        });

        //CASO DE PRUEBA PARA AGREGAR UNA NUEVA TRANSFERENCIA ENTRE MARCAS EN Cajas/Transferencias
        //Opcion 1

        it('CASO DE PRUEBA GUARDAR TRANSFERENCIA ENTRE MARCAS EN CAJAS/TRANSFERENCIAS', () => {
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(6)').click()
          cy.get('[routerlink="create/brand-transfer"]').click()
          cy.get('.col-8 > .form-control').select("Opcion 1: Transferir Hacia una Marca ( Fuera de RapiVale ).")
          cy.get(':nth-child(2) > :nth-child(1) > .col-8 > .form-control').wait(2000).select("Mazatlan")
          cy.get(':nth-child(2) > .col-8 > .form-control').select("Caja Principal Mazatlan")
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').type("120")
          cy.get(':nth-child(4) > .col-8 > .form-control').type("NotaTest")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-8 > .form-control').select("Vale Amigo")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(2) > .col-8 > .form-control').select("Rapi Saltillo Secunaria")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Monto Limite")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Transferencia")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Dotacion")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Banco")
          cy.get('.btn-primary').click()
          cy.get('#swal2-content').contains("Transferencia guardada exitosamente")
          cy.get('.swal2-confirm').click()
        });


        //CASO DE PRUEBA PARA AGREGAR UNA NUEVA TRANSFERENCIA ENTRE MARCAS EN Cajas/Transferencias
        //Opcion 2
        it('CASO DE PRUEBA GUARDAR TRANSFERENCIA ENTRE MARCAS EN CAJAS/TRANSFERENCIAS', () => {
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(6)').click()
          cy.get('[routerlink="create/brand-transfer"]').click()
          cy.get('.col-8 > .form-control').select("Opcion 2: Transferir a una Marca presente en Caja. ( Cajas Ancladas a RapiVale ).")
          cy.get(':nth-child(2) > :nth-child(1) > .col-8 > .form-control').wait(2000).select("Guasave")
          cy.get(':nth-child(2) > .col-8 > .form-control').select("Caja Principal Guasave")
          cy.get(':nth-child(3) > .col-8 > .form-control').type("123")
          cy.get(':nth-child(4) > .col-8 > .form-control').type("NotaTest")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-8 > .form-control').select("Vale Amigo")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(2) > .col-8 > .form-control').select("Monto Limite")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(2) > .col-8 > .form-control').select("Transferencia")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(2) > .col-8 > .form-control').select("Dotacion")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(2) > .col-8 > .form-control').select("Banco")
          cy.get('.btn-primary').click()
          cy.get('#swal2-content').contains("Transferencia guardada exitosamente")
          cy.get('.swal2-confirm').click()
        });

        //CASO DE PRUEBA PARA AGREGAR UNA NUEVA TRANSFERENCIA ENTRE MARCAS EN Cajas/Transferencias
        //Opcion 3
        it('CASO DE PRUEBA GUARDAR TRANSFERENCIA ENTRE MARCAS EN CAJAS/TRANSFERENCIAS', () => {
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(6)').click()
          cy.get('[routerlink="create/brand-transfer"]').click()
          cy.get('.col-8 > .form-control').select("Opcion 3: Transferir desde una Marca presente en Caja(Hacia Cajas de Sucursal Origen).")
          cy.get(':nth-child(2) > :nth-child(1) > .col-8 > .form-control').wait(2000).select("Guasave")
          cy.get(':nth-child(2) > .col-8 > .form-control').select("Caja Principal Guasave")
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Vale Amigo")
          cy.get(':nth-child(4) > .col-8 > .form-control').type("10")
          cy.get(':nth-child(5) > .col-8 > .form-control').type("NotaTest")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-8 > .form-control').select("Guasave")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(2) > .col-8 > .form-control').select("Caja Principal Guasave")
          cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Monto Limite")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Transferencia")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Dotacion")
          // cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(3) > .col-8 > .form-control').select("Banco")
          cy.get('.btn-primary').click()
          cy.get('#swal2-content').contains("Transferencia guardada exitosamente")
          cy.get('.swal2-confirm').click()
        });

        //SMOKE TEST Cajas/Corte de Caja
        it('SMOKE TEST Cajas/Corte de Caja', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(3)').click().wait(2000)
          cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('.header-title > .btn').should("be.visible")
        });

        //CASO DE PRUEBA Agregar un Nuevo Corte de Caja en Cajas/Corte de Caja
        //TRUENA, NO HAY BOTON DE ACEPTAR NI NADA QUE PEDO XD
        //ENTONCES CHECAR CUAL ES EL ULTIMO CORTE PARA PODER HACER BIEN LA PRUEBA}
        //Pregunta a Victor *Urgente*
        it.only('CASI DE PRUEBA Agregar un Nuevo Corte de Caja o Arqueo en Cajas/Corte de Caja', () => {
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(7)').click()
          cy.get('.header-title > .btn').click()
          cy.get('.ng-select-container').type("Culiacan").wait(2000).type("{enter}")
          cy.get(':nth-child(2) > .col-8 > .form-control').select("Caja Principal Culiacan")
          cy.get(':nth-child(3) > .col-8 > .form-control').select("Arqueo - Realizados: 11")  //MOVER ACA
          // cy.get(':nth-child(3) > .col-8 > .form-control').select("Corte - Realizados: 1")
          cy.get('#swal2-content').contains("El Arqueo comenzará al confirmar.")
          cy.get('.swal2-confirm').click()
          cy.get('#swal2-title').contains("Bien hecho!")
          cy.get('.swal2-confirm').click()
          cy.get(':nth-child(1) > :nth-child(5) > :nth-child(2) > .form-control').type("0")
          cy.get(':nth-child(6) > :nth-child(2) > .form-control').type("0")
          cy.get(':nth-child(7) > :nth-child(2) > .form-control').type("0")
          cy.get(':nth-child(8) > :nth-child(2) > .form-control').type("0")
          cy.get(':nth-child(9) > :nth-child(2) > .form-control').type("0")
          cy.get(':nth-child(10) > :nth-child(2) > .form-control').type("0")
          cy.get(':nth-child(2) > .mb-1 > :nth-child(2) > .form-control').type("0")
          cy.get('.btn-primary').click()
          cy.get('#swal2-title').contains("Bien hecho!")
          cy.get('.swal2-confirm').click()
          cy.get('div.col-11 > .form-control').type("NOTATEST")
          cy.get('.btn-primary').click()
          cy.get('#swal2-title').contains("Bien hecho!")
          cy.get('.swal2-confirm').click()


          
          });
          


        //Smoke Test CAJAS/CAJAS
        it('Smoke Test Listado de Cajas y Cajas', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').wait(500).click()
          cy.get('#parent_49 > :nth-child(4)').click()
          cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.page-title-box').should("be.visible")
          cy.get('thead > tr > :nth-child(1)').should("be.visible")
          cy.get(':nth-child(1) > :nth-child(10) > .btn > .fe-log-in').wait(500).should("be.visible")
        });
        


        //SMOKE TEST Cajas/Balance de Cajas por Sucursal
        //Inclui el caso de prueba aquí por que es unicamente una lista
        it('SMOKE Test Cajuas/Balance de Cajas por Sucursal', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(6)').click()
          cy.get('.ng-select-container').type("Guasave").wait(2000).type("{enter}")
          cy.get('.col-md-1 > .btn').click()
          cy.get('thead > tr > :nth-child(1)').should("be.visible")
          cy.get('thead > tr > :nth-child(2)').should("be.visible")
          cy.get('.col-md-1 > .btn').should("be.visible")
          cy.get(':nth-child(2) > tr > :nth-child(10) > .btn').click()
          cy.get('.modal-body').should("be.visible")

        });

        //SMOKE TEST Cajas/Transferencias Bancarias
        it('SMOKE TEST Transferencias Bancarias', () => {
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(1)').click()
          cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
          cy.get('.header-title > .btn').should("be.visible")
          cy.get('.page-title-box').should("be.visible")

        });

        it('CASO DE PRUEBA Transferencias Bancarias', () => {
          cy.get(':nth-child(4) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(1)').click()
          cy.get('.header-title > .btn').click()
          cy.get(':nth-child(1) > .col-8 > .form-control').select("Guasave")
          cy.get(':nth-child(2) > .col-8 > .form-control').select("Caja Principal Guasave")
          cy.get(':nth-child(3) > .col-8 > .form-control').select("Banorte")
          cy.get(':nth-child(4) > .col-8 > .form-control').select("199999 SOLUCIONES ECONOMICAS HI SA DE CV78787")
          cy.get(':nth-child(5) > .col-8 > .form-control').type("123")
          cy.get(':nth-child(6) > .col-8 > .form-control').type("notanotanota")
          cy.get('.btn-primary').click()
          cy.get('#swal2-content').contains("Rechazado exitosamente")
          cy.get('.swal2-confirm').click()
        });

        
        /*
        //O ESTÁ MAL HECHO O AUN NO LO IMPLEMENTAN, HABLAR CON VICTOR A VER QUE PEDO
        it('', () => {
          cy.get(':nth-child(6) > [data-bs-toggle="collapse"]').click()
          cy.get('#parent_49 > :nth-child(4)')
        });
        */
      })
            
              
    