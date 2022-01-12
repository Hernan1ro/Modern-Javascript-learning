describe("Carga la pagina principal", function () {
  it("Carga la página principal", function () {
    cy.visit("/index.html");

    // Verificar el elemento y su texto
    cy.contains(
      "[data-cy='titulo-proyecto']",
      "Administrador de Pacientes de Veterinaria"
    );
    // Verificar que exista
    cy.get("[data-cy='titulo-proyecto']").should("exist");

    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "No hay Citas, comienza creando una");
    // Verificar que exista el elemento y contenga un texto
    cy.get("[data-cy='titulo-proyecto']")
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");
  });
});
