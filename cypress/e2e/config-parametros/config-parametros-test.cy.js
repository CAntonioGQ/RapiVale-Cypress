describe("Test Funcionamiento Configuración y Parametros", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Configuración y Parametros
    
        //HOOKS
      beforeEach(() => {
        cy.visit('http://172.17.52.36:8080/#/auth/login')
        cy.get(':nth-child(1) > .form-control').type("cruzgasq")
        cy.get('.input-group > .form-control').type("Caprepa2020")
        cy.get('.btn').click()

        
      })
      

      it("Funcionamiento de Todos los Botones", () => {
        // Hace clic para expandir el área de botones si es necesario
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
      
        // Hace clic en cada botón dentro del área de botones
        for (let i = 1; i <= 21; i++) {
          cy.get(`#parent_35 > :nth-child(${i}) > li > a`).click()
        }
      })

      //SMOKE TEST Pantalla Config. Parametros/Montos
      it("SMOKE Test Pantalla Config. Parametros/Montos",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(1)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar un nuevo MONTO CORRECTAMENTE en la pantalla Config. Parametros/Montos
      it("Agregar un nuevo monto",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(1)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get(':nth-child(1) > .col-8 > .form-control').select("Financiero")
        cy.get(':nth-child(2) > .col-8 > .form-control').type("900")
        cy.get('.btn-primary').click()
        cy.get('#swal2-content').then(($content) => {
          if ($content.text() === "Monto creado con éxito") {
              cy.get('.swal2-confirm').click();
          } else {
              // En caso de que ya esté agregado
              cy.get('#swal2-content').contains("El monto ya existe");
              cy.get('.swal2-confirm').click();
          }
      })
  })

      //SMOKE TEST Pantalla Config. Parametros/Plazos
      it("SMOKE Test Pantalla Config. Parametros/Plazos",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(2)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar un nuevo PLAZO CORRECTAMENTE en la pantalla Config. Parametros/Plazos
      //Puedes crear Plazos Infinitos con los mismos valores
      it("Test Funcionamiento para agregar un nuevo Plazo",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(2)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get(':nth-child(1) > .col-8 > .form-control').select("Financiero")
        cy.get(':nth-child(2) > .col-8 > .form-control').select("Diario")
        cy.get(':nth-child(3) > .col-8 > .form-control').type("12345")
        cy.get('.btn-primary').click()
        cy.get('#swal2-content').contains("Plazo creado con exito")
        cy.get('.swal2-confirm').click()
      })

      //SMOKE TEST Pantalla Config, Parametros/Intereses
      it("SMOKE Test Pantalla Config. Parametros/Intereses",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(3)').click().wait(2000)
        cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar un nuevo PLAZO CORRECTAMENTE en la pantalla Config. Parametros/Intereses
      it("Test Funcionamiento para Agregar un nuevo Interés",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(3)').click().wait(2000)
        cy.get('.header-title > .btn').click()
      // CONTEXTO PARA CONTINUAR -->  
      })

      //SMOKE TEST Pantalla Config. Parametros/Etapas
      it("SMOKE Test Pantalla Config. Parametros/Etapas",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(4)').click().wait(2000)
        cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })
      
      //Caso de prueba para agregar un nuevo PLAZO CORRECTAMENTE en la pantalla Config. Parametros/Etapas
      it("Test Funcionamiento para Agregar una nueva Etapa",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(4)').click().wait(2000)
        //CONTEXTO PARA CONTINUAR -->
      })

      //SMOKE TEST Pantalla Config. Parametros/Adm de Caja
      it("SMOKE Test Pantalla Config. Parametros/Adm de Caja",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(5)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva CAJA en la pantalla Config. Parametros/Adm De Caja
      // Puedo agregar nuevas cajas con literalmente los mismos campos
      it("Test Funcionamiento para Agregar una Nueva Caja",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(5)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get(':nth-child(2) > .col-8 > .form-control').type("NombreTest1")
        cy.get(':nth-child(3) > .col-8 > .form-control').select("Guasave")
        cy.get('.ng-select-container').type("Antonio Gastelum Quevedo").type("{enter}")
        cy.get(':nth-child(5) > .col-8 > .form-control').select("Caja Secundaria")
        cy.get(':nth-child(6) > .col-8 > .form-control').type("13:12:12") //Testear todas estas lineas a ver qpd
        cy.get(':nth-child(7) > .col-8 > .form-control').type("12:12:10") // Como el fin va a ser primero que el inicio jaja
        cy.get(':nth-child(8) > .col-8 > .form-control').type("1")
        cy.get(':nth-child(9) > .col-8 > .form-control').type("1")
        cy.get(':nth-child(10) > .col-8 > .form-control').type("1")
        cy.get(':nth-child(11) > .col-8 > .form-control').type("1")
        cy.get(':nth-child(5) > .btn-primary').click()
        cy.get('#swal2-content').contains("Caja creada exitosamente")
        cy.get('.swal2-confirm').click()
      })

      //SMOKE TEST Pantalla Config. Parametros/Coordinaciones
      it("SMOKE Test Pantalla Config. Parametros/Coordinaciones",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(6)').click().wait(2000)
        cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Coordinaciones
      it("Test Funcionamiento Para Agregar una nueva Coordinacion",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(6)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get(':nth-child(2) > .col-8 > .form-control').type("CoordTest11")
        cy.get(':nth-child(3) > .col-8 > .form-control').type("1200")
        cy.get(':nth-child(4) > .col-8 > .form-control').select("Mazatlan")
        cy.get('.col-8 > .ng-select-searchable > .ng-select-container').type("Antonio Gastelum Quevedo").type("{enter}") //Hay doble responsable??
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
          if ($content.text() === "Coordinacion creada exitosamente") {
              cy.get('.swal2-confirm').click();
          } else {
              // En caso de que ya esté agregado
              cy.get('#swal2-content').contains("El nombre de la coordinación ya existe.");
              cy.get('.swal2-confirm').click();
          }
        })
      })

      //SMOKE TEST Pantalla Config. Parametros/Configuración de Corte
      it("SMOKE Test Pantalla Config. Parametros/Configuración de Corte",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(7)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })
      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Config de Corte
      //TRUENA CAÑON XD *CHECAR* PARA CONTINUAR
      it("Test Funcionamiento Para Agregar un Nuevo Config. de Corte",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(7)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col > .col-8 > .form-control').type("NombreTest")
        cy.get('.col-md > .col-8 > .form-control').select("Semanal")
        cy.get(':nth-child(3) > :nth-child(1) > .col-8 > .form-control').type("3000")
        cy.get(':nth-child(3) > :nth-child(2) > .col-8 > .form-control').type("3000")
        cy.get(':nth-child(4) > :nth-child(1) > .col-8 > .form-control').type("3000")
        cy.get(':nth-child(4) > :nth-child(2) > .col-8 > .form-control').type("3000")
        cy.get('.btn-primary').click()
      })

      //SMOKE TEST Pantalla Config. Parametros/Tipos de Credito
      it("SMOKE Test Pantalla Config. Parametros/Tipo de Credito",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(8)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Tipos de Credito
      //Puedes hacer infinitos sin cambiar ningun valor
      it("Test Funcionamiento para Agregar un Nuevo Tipo de Credito",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(8)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("NombreTest")
        cy.get('.input-group > .form-control').type("6666677777") //TRUENA SI COLOCO MUCHOS NUMEROS
        cy.get('.col > .btn').click()
        cy.get(':nth-child(1) > .col-md > .mb-2 > .input-group > .form-control').type("TestNivelCredito")
        cy.get(':nth-child(2) > .col-md > .mb-2 > .input-group > .form-control').type("99999")
        cy.get('.col-md > .input-group > .form-control').type("9999999")
        cy.get('.btn-info').click()
        cy.get('.form-group > .btn-primary').click()
        cy.get('#swal2-content').contains("Tipo de crédito guardado con éxito")
        cy.get('.swal2-confirm').click()
      })

      //SMOKE TEST Pantalla Config. Parametros/Configuracion de Procesos de Solicitud
      it("SMOKE Test Pantalla Config. Parametros/Configuracion de Procesos de Solicitud",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(9)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Configuracion de Procesos de Solicitud
      it("Test Funcionamiento Para Agregar un Nuevo Campo de Procesos",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(9)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get(':nth-child(1) > .col-8 > .form-control').select("Investigación Telefónica")
        cy.get(':nth-child(2) > .col-8 > .form-control').select("Solicitante")
        cy.get(':nth-child(3) > .col-8 > .form-control').select("Cadena")
        cy.get(':nth-child(4) > .col-8 > .form-control').select("Si")
        cy.get(':nth-child(5) > .col-8 > .form-control').type("NombreTest1")
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
          if ($content.text() === "Campo de Proceso creado con exito") {
              cy.get('.swal2-confirm').click();
          } else {
              // En caso de que ya esté agregado
              cy.get('#swal2-content').contains("El Campo de Proceso ya existe.");
              cy.get('.swal2-confirm').click();
          }
        })
      })  
      //SMOKE TEST Pantalla Config. Parametros/Categorias
      it("SMOKE TEST Pantalla Config. Parametros/Categorias",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(10)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Categorias
      //Puedes agregar Infinitos con los mismo Valores---Checar
      it("Test Funcionamiento Para Agrega una Nueva Categoria",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(10)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col > .col-8 > .form-control').type("TestName")
        cy.get(':nth-child(2) > .col-8 > .form-control').type("99999") //Hacer prueba en esto
        cy.get(':nth-child(3) > .col-8 > .form-control').type("9999999")
        cy.get('.btn-primary').click()                   
        cy.get('#swal2-content').contains("Categoría guardada con éxito")
        cy.get('.swal2-confirm').click()
      })

      //SMOKE TEST Pantalla Config. Parametros/Configuracion de Comisiones
      it("SMOKE TEST Pantallla Config. Parametros/Config. de Comisiones",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(11)').click().wait(2000)
        cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Config. de Comisiones
      it("Test Funcionamiento Para Agregar una Nueva Comision",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(11)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("TestComision1")
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
          if ($content.text() === "Comisión creada con éxito") {
              cy.get('.swal2-confirm').click();
          } else {
              // En caso de que ya esté agregado
              cy.get('#swal2-content').contains("Ya existe una comisión con ese nombre.");
              cy.get('.swal2-confirm').click();
          }
        })
      })

      //SMOKE TEST Pantalla Config. Parametros/Oficios
      it("SMOKE TEST Pantalla Config. Parametros/Oficios",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(12)').click().wait(2000)
        cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Oficios
      it("Test Funcionamiento para Agregar un Nuevo Perfil en Oficios",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(12)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("TestName1")
        cy.get('.ng-select-container').type("Catálogo").type("{enter}")
        cy.get('.btn-primary').click()

        cy.get('#swal2-content').then(($content) => {
          if ($content.text() === "Perfil creado con éxito") {
              cy.get('.swal2-confirm').click();
          } else {
              // En caso de que ya esté agregado
              cy.get('#swal2-content').contains("Ese Pefil ya existe");
              cy.get('.swal2-confirm').click();
          }
        })
      })

      //SMOKE TEST Pantalla Config. Parametros/Giros
      it("SMOKE TEST Pantalla Config. Parametros/Giros",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(13)').click().wait(2000)
        cy.get(':nth-child(3) > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Giros
      it("Test Funcionamiento Para Agregar Un Nuevo Giro",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(13)').click().wait(2000)
        cy.get('.card-header > .btn').click()
        cy.get('.col-6 > .form-control').type("NameTest11")
        cy.get('.btn-primary').click()
        cy.get('#swal2-content').then(($content) => {
          if ($content.text() === "El Giro ha sido creado exitosamente") {
              cy.get('.swal2-confirm').click();
          } else {
              // En caso de que ya esté agregado
              cy.get('#swal2-content').contains("No ha sido posible crear el Giro debido a: Ese nombre no esta disponible");
              cy.get('.swal2-confirm').click();
          }
        })
      })

      //SMOKE TEST Pantalla Config. Parametros/Pregunta de Gestión de Llamadas
      it("SMOKE TEST Pantalla Config. Parametros/Preguntas de Gestión de Llamdas",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(14)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Pregunta de Gestión de Llamdas
      //PUEDES AGREGAR NUEVAS PREGUNTAS Y RESPUESTAS CON LOS MISMOS VALORES
      //ANTONIO AGREGA UN IF YA QUE SI FUNCIONA BIEN
      it("TEST Funcionamiento para Agregar una Nueva Pregunta en Preguntas de Gestion de Llamadas",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(14)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.ng-select-container').type("Llamada de Bienvenida").type("{enter}")
        cy.get(':nth-child(2) > .col-8 > .form-control').select("Si")
        cy.get(':nth-child(3) > .col-8 > .form-control').type("TestPregunta")
        cy.get(':nth-child(4) > .col-8 > .form-control').type("2")
        cy.get('.col-md-9 > .form-control').type("TestRespuesta")
        cy.get('.fe-plus').click()
        cy.get('.form-group > .btn-primary').click()
        cy.get('#swal2-content').contains("Pregunta creada con éxito")
        cy.get('.swal2-confirm').click()
      })
      //SMOKE TEST Pantalla Config. Parametros/Tipos de Solicitudes de Crédito
      it("SMOKE TEST Pantalla Config. Parametros/Tipos de Solicitudes de Crédito",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(15)').click().wait(2000)
        cy.get('div.card > .card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Tipos de Solicitudes de Crédito
      //CONTEXTO DE POR QUE NO SE AGREGAN LAS COSAS??
      it("Test Funcionamiento Para Agregar un Nuevo Tipo de Solicitud de Crédito",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(15)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("NameTest1123121")
        cy.get('.ng-select-container').type("Gestor cobranza").type("{enter}")
        cy.get('.input-group-text').click()
        cy.get('.btn-primary').click()
        
        cy.get('#swal2-content').then(($content) => {
          if ($content.text() === "Tipo de Solicitud de Crédito guardada con éxito.") {
              cy.get('.swal2-confirm').click();
          } else {
              // En caso de que ya esté agregado
              cy.get('#swal2-content').contains("[object Object]"); //ERROR
              cy.get('.swal2-confirm').click();
          }
        })
      })

      //SMOKE TEST Pantalla Config. Parametros/Requerimientos Para Préstamo Personal
      it("SMOKE TEST Pantalla Config. Parametros/Requerimientos Para Préstamo Personal",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(16)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")
      })


      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Requerimientos Para Préstamo Personal
      //Puedes agregar Infinitos sin cambiar ningun valor -->CHECAR
      it("Test Funcionamiento Para Agregar un Nuevo Requerimiento en Préstamos Personal",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(16)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col > .col-8 > .form-group > .form-control').select("Principiante")
        cy.get('.form-horizontal > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("999")
        cy.get('.form-horizontal > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("99")
        cy.get('.form-horizontal > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("99")
        cy.get(':nth-child(2) > .row > :nth-child(1) > .form-group > .input-group > .form-control').type("999999")
        cy.get(':nth-child(2) > .form-group > .input-group > .form-control').type("9999999")
        cy.get(':nth-child(3) > .form-group > .form-control').type("999999")
        cy.get(':nth-child(3) > .row > .col > .form-group > .input-group > .form-control').type("999") //CHECAR MONTO MINIMO Y MAXIMO
        cy.get(':nth-child(1) > .row > :nth-child(4) > :nth-child(2) > .input-group > .form-control').type("999999") //CHECAR MONTO MINIMO Y MAXIMO
        cy.get(':nth-child(5) > :nth-child(2) > .input-group > .form-control').type("9999")
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > :nth-child(2) > .input-group > .form-control').type("9999")
        cy.get('.btn-primary').click()
        cy.get('#swal2-content').contains("Requerimiento de Préstamo Personal guardado con éxito.")
        cy.get('.swal2-confirm').click()
      })

      //SMOKE TEST Pantalla Config. Parametros/Fechas de Corte
      it("SMOKE TEST Pantalla Config. Parametros/Fechas de Corte",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(17)').click().wait(2000)
        cy.get('.card-body').should("be.visible")
        cy.get('.page-title-box').should("be.visible")

      })

      //Caso de prueba para agregar una nueva Coordinacion Correctamente en la pantalla Config. Parametros/Fechas de Corte
      //TE LLEVA DIRECTO AL DASHBOARD VACÍO
      //SE PUEDEN AGREGAR LAS MISMAS FECHAS
      it("Test Funcionamiento Para Agregar una Nueva Fecha en Fechas de Corte",()=>{
        cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
        cy.get('#parent_35 > :nth-child(17)').click().wait(2000)
        cy.get('.header-title > .btn').click()
        cy.get('.col-8 > .form-control').type("2011-11-11")
        cy.get('.btn-primary').click()
        cy.get('#swal2-content').contains("Fecha anexada con exito")
        cy.get('.swal2-confirm').click()
      })
         //SMOKE TEST Config. y Parametros / Bancos
    it('SMOKE TEST Config. y Parametros / Bancos', () => {
      cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_35 > :nth-child(20)').click()
      cy.get('div.card > .card-body').should("be.visible")
      cy.get('.header-title > .btn').should("be.visible")
      cy.get('.page-title-box').should("be.visible")
      cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_35 > :nth-child(20)').click()
    });

    //Caso de Prueba Config y Parametros / Bancos
    it('Caso de Prueba Config. y Parametros / Bancos', () => {
      cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_35 > :nth-child(20)').click()
      cy.get('.header-title > .btn').click()
      cy.get('.col-8 > .form-control').type("BancoTest299999925")
      cy.get('.btn-primary').click()

      cy.get('#swal2-content').then(($content) => {
        if ($content.text() === "Banco guardado con éxito.") {
            cy.get('.swal2-confirm').click();
        } else {
            // En caso de que ya esté agregado
            cy.get('#swal2-content').contains("El banco ya existe.");
            cy.get('.swal2-confirm').click();
        }
    })
    });

    //Smoke Test Config y Parametros / No. de Cuentas
    it('Smoke Test Config y Parametros / No. de Cuentas', () => {
      cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_35 > :nth-child(21)').click()
      cy.get('thead > tr > :nth-child(1)').should("be.visible")
      cy.get('.header-title > .btn').should("be.visible")
      cy.get('.page-title-box').should("be.visible")
    });

    //Caso de Prueba Config y Parametros / No. de Cuentas
    it('Caso de Prueba Config y Parametros / No. de Cuentas', () => {
      cy.get(':nth-child(3) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_35 > :nth-child(21)').click()
      cy.get('.header-title > .btn').click()
      cy.get('.col-8 > .form-control').type("11111111111111111111111111")
      cy.get(':nth-child(2) > .col-md-12 > .col-8 > .ng-select-searchable > .ng-select-container').type("BancoTest").type("{enter}")
      cy.get(':nth-child(2) > .col-md-6 > .col-md-12 > .col-8 > .ng-select-searchable > .ng-select-container').type("RAZONTEST").type("{enter}")
      cy.get('.btn-primary').click()
      cy.get('#swal2-content').then(($content) => {
      if ($content.text() === "No. de cuenta guardada con éxito.") {
        cy.get('.swal2-confirm').click();
    } else {
        // En caso de que ya esté agregado
        cy.get('#swal2-content').contains("El No. de cuenta ya existe.");
        cy.get('.swal2-confirm').click();
    }
  })
    // Caso de prueba para agregar nueva razón social
    
    it('Agregar Nueva Razon Social', () => {
      
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(8)').click()
      cy.get('.header-title > .btn').click()
      cy.get(':nth-child(1) > .col-md-12 > .col-8 > .form-control').type("RAZONTEST")
      cy.get(':nth-child(2) > .col-md-12 > .col-8 > .form-control').type("DOMICILIOTEST")
      cy.get('.btn-primary').click()
      cy.get('#swal2-content').then(($content) => {
        if ($content.text() === "Razón social guardada con éxito.") {
            cy.get('.swal2-confirm').click();
        } else {
            // En caso de que ya esté agregado
            cy.get('#swal2-content').contains("La razón social ya existe.");
            cy.get('.swal2-confirm').click();
        }
    })
        })

});


      //LISTADO DE CONFIGURACIÓN DE COMISIÓN --> CONTEXTO
      //CONFIG. DE INTERESES POR SUCURSSAL --> NO HAY NADA
})



