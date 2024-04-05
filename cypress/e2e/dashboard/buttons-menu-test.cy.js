describe("Funcionamiento de Botones Menú Desplegable", () =>{
//Los siguientes casos de uso son unicamente para el Menú Desplegable(Side Menu)

    //HOOKS
  beforeEach(() => {
    cy.visit('http://172.17.52.36:8080/#/auth/login')
    cy.get(':nth-child(1) > .form-control').type("cruzgasq")
    cy.get('.input-group > .form-control').type("Caprepa2020")
    cy.get('.btn').click()
  })

  //Test para el correcto funcionamiento de todos los botones dentro del Side-Menu


  it("Funcionamiento de Todos los Botones", () => {
    // Obtiene todos los elementos del Side-Menu y hace clic en cada uno
    for (let i = 2; i <= 13; i++) {
        cy.get(`.side-menu > :nth-child(${i}) > [data-bs-toggle="collapse"]`).click()
    }
})

  it("Vista Correcta de Todos los Botones",()=>{
    for (let i = 2; i <= 13; i++) {
      cy.get(`.side-menu > :nth-child(${i}) > [data-bs-toggle="collapse"]`).should("be.visible")
    }
  })
})

