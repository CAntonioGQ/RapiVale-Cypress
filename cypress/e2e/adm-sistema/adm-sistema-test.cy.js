describe("Test Funcionamiento Administracion de Sistema", () =>{
    //Los siguientes casos de uso son para el correcto funcionamiento de la parte Administración de Sistemas
    
        //HOOKS
    beforeEach(() => {
      cy.visit('http://172.17.52.36:8080/#/auth/login')
      cy.get(':nth-child(1) > .form-control').type("cruzgasq")
      cy.get('.input-group > .form-control').type("Caprepa2020")
      cy.get('.btn').click()

        
      })

    //Funcionamiento correcto de todos los botones dentro del area de Administracion de Sistemas
    it("Funcionamiento de Todos los Botones", () => {
        // Hace clic para expandir el área de botones si es necesario
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()  
      // Hace clic en cada botón dentro del área de botones
      for (let i = 1; i <= 7; i++) {
        cy.get(`#parent_31 > :nth-child(${i}) > li > a`).click()
      }
    })

    //SMOKE TEST Pantalla Administracion de Sistema/Usuario
    it("Smoke Test Admm. De Sistema/Usuario",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(1)').click().wait(1000)
      cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
      cy.get('.header-title > .btn').should("be.visible")
    })
    //Caso de prueba para agregar un nuevo USUARIO CORRECTAMENTE en la pantalla Administracion de Sistema/Usuario
    it("Agregar Nuevo USUARIO Adm. de Sistema",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(1)').click().wait(1000) //Agrego Delay por retardo en BD
      cy.get('.header-title > .btn').click()
      cy.get(':nth-child(2) > .col-8 > .form-control').type("TestName")
      cy.get(':nth-child(1) > :nth-child(3) > .col-8 > .form-control').type("*")
      cy.get(':nth-child(1) > :nth-child(4) > .col-8 > .form-control').type("TestFatherLastName")
      cy.get(':nth-child(5) > .col-8 > .form-control').type("TestMotherLastName")
      cy.get(':nth-child(2) > :nth-child(3) > .col-8 > .form-control').type("testmail@gmail.com")
      cy.get(':nth-child(2) > :nth-child(4) > .col-8 > .form-control').type("*") 
      cy.get(':nth-child(3) > .col-8 > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').type("Administrador").type("{enter}") 
      cy.get(':nth-child(4) > .col-8 > .ng-select-multiple > .ng-select-container > .ng-value-container > .ng-input > input').type("Mazatlan").type("{enter}")
      cy.get('.btn-primary').click()

      cy.get('.swal2-header').should("be.visible").then(() => {
        cy.get('#swal2-title').then(($title) => {
            if ($title.text() === "Bien hecho!") {
                cy.get('.swal2-confirm').click()
            } else {
                // En caso que el usuario ya se encuentre registrado
                cy.get('.swal2-popup').should("be.visible")
                cy.get('#swal2-content').contains("El usuario ya esta registrado")
                cy.get('.swal2-confirm').click()
            }
        })
    })
    })

    //SMOKE TEST Pantalla Administracion de Sistema/Perfiles
    it("Smoke Test Adm. De Sistema/Perfiles",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(2) > li > a').click().wait(2000)
      cy.get('.content-page').should("be.visible")
      cy.get('.page-title-box').should("be.visible")

    })

    //Caso de prueba para agregar un nuevo PERFIL CORRECTAMENTE en la pantalla Administracion de Sistema/Perfiles
    it("Agregar un Nuevo Perfil en Adm de Sistema",()=>{ //OCUPO CONTEXTO PARA AVANZAR
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(2)').click().wait(1000)
      cy.get('.header-title > .btn').click()

    })

    //SMOKE TEST Pantalla Administracion de Sistema/Sucursales
    it("Smoke Test Adm. De Sistema/Sucursales",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(3)').click().wait(2000)
      cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
      cy.get('.page-title-box').should("be.visible")
    })

    //Caso de prueba para agregar una nueva Sucursal CORRECTAMENTE en la pantalla Administracion de Sistema/Sucursales
    //Checar lo de la caja compartida 
    it("Agregar una Nueva Sucursal",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(3)').click().wait(2000)
      cy.get('.header-title > .btn').click()
      cy.get(':nth-child(1) > .col-8 > .form-control').type("p")
      cy.get(':nth-child(2) > .col-8 > .form-control').type("")
      cy.get(':nth-child(3) > .col-8 > .form-control').type("")
      cy.get('.btn-primary').click()
      cy.get('.swal2-confirm').click()
    })

    //SMOKE TEST Pantalla Administracion de Sistema/Menus
    it("Smoke Test Adm. De Sistemas/Menus",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(4)').click().wait(2000)
      cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
      cy.get('#headingOne').should("be.visible")
    })

    //Caso de prueba para agregar un nuevo MENU CORRECTAMENTE en la pantalla Administracion de Sistema/Menus
    //Puedo Crear menus infinitos con exactamente los mismos datos
    it("Agregar un Nuevo Menu",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(4)').click().wait(2000)
      cy.get('.header-title > .btn').click()
      cy.get(':nth-child(1) > :nth-child(1) > .col-8 > .form-control').type("MenuNameTest")
      cy.get('.ng-input > input').type("Administracion de sistema").type("{enter}")
      cy.get(':nth-child(3) > .col-8 > .form-control').type("icontest")//Contexto
      cy.get(':nth-child(4) > .col-8 > .form-control').type("URLTEST")//Contexto
      cy.get(':nth-child(2) > .row > .col-8 > .form-control').type("MenuActionTest")//Contexto
      cy.get('.input-group-text > .fas').click()
      cy.get('tbody > :nth-child(1) > :nth-child(1)').should("be.visible")
      cy.get('.btn-primary').click()
      cy.get('.swal2-header').contains("Bien hecho!")
      cy.get('.swal2-confirm').click()
    })

    //SMOKE TEST Pantalla Administracion de Sistema/Competencias
    it("Smoke Test Adm. De Sistemas/Competencias",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(5)').click().wait(1000)
      cy.get('.card > .card-body').should("be.visible")
      cy.get('#headingOne').should("be.visible")
    })

    //Caso de prueba para agregar un nueva COMPETENCIA CORRECTAMENTE en la pantalla Administracion de Sistema/Competencia
    it("Agregar una Nueva Competencia",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(5)').click().wait(1000)
      cy.get('.header-title > .btn').click()
      cy.get('.col-8 > .form-control').type("TestCompetencia787").then(() => {
        cy.get('.btn-primary').click();
        
        cy.get('#swal2-content').then(($content) => {
            if ($content.text() === "Competidor creado con exito") {
                cy.get('.swal2-confirm').click();
            } else {
                // En caso de que ya esté agregado
                cy.get('#swal2-content').contains("El competidor ya existe");
                cy.get('.swal2-confirm').click();
            }
        })
    })
    
    })
    //SMOKE TEST Pantalla Administracion de Sistema/Proveedores de SMS
    //AUN NO ESTÁ IMPLEMENTADO NADA
    it("Smoke Test Adm. De Sistemas/Proveedores de SMS",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(6)').click().wait(1000)
      cy.get('.content-page')

    })

    //SMOKE TEST Pantalla Administracion de Sistema/Catalogo de Marcas
    it("Smoke Test Adm. De Sistemas/Catalogo de Marcas",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(7)').click().wait(1000)
      cy.get('.table').should("be.visible")
      cy.get('.page-title-box').should("be.visible")
    })
    //Caso de prueba para agregar un nueva COMPETENCIA CORRECTAMENTE en la pantalla Administracion de Sistema/Catalogo
    //PUEDES CREAR CATALOGOS INFINITOS CON EL MISMO NOMBRE :(
    it("Agregar un Nuevo Catalogo",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(7)').click().wait(1000)
      cy.get('.header-title > .btn').click()
      cy.get('.col-8 > .form-control').type("TestCatalogo")
      cy.get('.btn-primary').click()
      cy.get('#swal2-content').contains("Marca Creada con éxito")
      cy.get('.swal2-confirm').click()


    })
    
    //SMOKE TEST Pantalla Administracion de Sistema/Razones Sociales
    //Aún no está implementado NADA
    it("Smoke Test Adm. De Sistemas/Razones Sociales",()=>{
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(8)').click()
      cy.get('.content-page').should("be.visible")
    })

    // Razones Sociales NUEVO
    it('Smoke Test Razones Sociales', () => {
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(8)').click()
      cy.get('.header-title > .btn').should("be.visible")
      cy.get('.page-title-box').should("be.visible")
      cy.get('thead > tr > :nth-child(1)').should("be.visible")
    });



    //SMOKE TEST Contacto de Alertas
    it('SMOKE Test Contacto de Alertas', () => {
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(9)').click()
      cy.get('#accordion > :nth-child(2) > .card-body').should("be.visible")
      cy.get('.header-title > .btn').should("be.visible")
      cy.get('.page-title-box').should("be.visible")
    });

    it.only('Caso de Prueba Adm de Sistemas/Contacto de Aler5tas', () => {
      cy.get('.side-menu > :nth-child(2) > [data-bs-toggle="collapse"]').click()
      cy.get('#parent_31 > :nth-child(9)').click()
      cy.get('.header-title > .btn').click()
      cy.get(':nth-child(1) > .col-8 > .form-control').type("CRUZ ANTONIO GASTELUM QUEVEDO")
      cy.get(':nth-child(2) > .col-8 > .form-control').type("macruzgraphiAcaaa1376@gmail.com")
      cy.get('.input-group > .form-control').type("6111187622")
      cy.get(':nth-child(4) > .col-8 > .ng-select-multiple > .ng-select-container').type("Corte").type("{enter}")
      cy.get(':nth-child(5) > .col-8 > .ng-select-multiple > .ng-select-container').type("Caja Mazatlan").type("{enter}")
      cy.get('.btn-primary').click()
      cy.get('.swal2-confirm').click()
      
    });

 
})

