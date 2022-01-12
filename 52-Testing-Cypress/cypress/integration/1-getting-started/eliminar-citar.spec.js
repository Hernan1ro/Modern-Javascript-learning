describe("Llena los campos para una nueva cita y la elimina", function () {
  it("Campos nueva cita", function () {
    cy.visit("/index.html");

    cy.get('[data-cy="mascota-input"]').type("Hook");
    cy.get('[data-cy="propietario-input"]').type("Hernan David Mercado");
    cy.get('[data-cy="telefono-input"]').type("300234342342");
    cy.get('[data-cy="fecha-input"]').type("1996-05-02");
    cy.get('[data-cy="hora-input"]').type("10:45");
    cy.get('[data-cy="sintomas-textarea"]').type("Escribir mucho cansa");

    cy.get('[data-cy="btn-submit"]').click();

    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "Administra tus Citas");

    // Seleccionar alerta
    cy.get('[data-cy="alerta"]')
      .invoke("text")
      .should("equal", "Se agregó correctamente");

    cy.get('[data-cy="alerta"]').should("have.class", "alert-success");
  });

  // Editar cita
  it("Edita la cita", () => {
    cy.get("[data-cy='btn-editar']").click();
    cy.get('[data-cy="mascota-input"]').clear().type("Dio brando");
    cy.get('[data-cy="btn-submit"]').click();

    // Comprobar mensaje de guardado
    cy.get('[data-cy="alerta"]')
      .invoke("text")
      .should("equal", "Guardado Correctamente");

    cy.get('[data-cy="alerta"]').should("have.class", "alert-success");
  });

  it("Elimina cita", () => {
    cy.get('[data-cy="btn-delete"]').click();

    cy.get('[data-cy="alerta"]')
      .invoke("text")
      .should("equal", "Guardado Correctamente");

    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "No hay Citas, comienza creando una");
  });
});
