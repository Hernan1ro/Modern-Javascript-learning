/// <reference types="cypress"/>

describe("Valida el formulario", function () {
  it("submit al formulario y mostrar alerta error", function () {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get('[data-cy="formulario"]').submit();

    // Seleccionar alerta
    cy.get('[data-cy="alerta"]')
      .invoke("text")
      .should("equal", "Todos los campos son Obligatorios");

    cy.get('[data-cy="alerta"]').should("have.class", "alert-danger");
  });
});
