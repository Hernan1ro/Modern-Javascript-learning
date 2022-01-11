describe("Carga la pagina principal", function () {
  it("Carga la página principal", function () {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.contains("h1", "Administrador de Pacientes de Veterinaria");
    cy.get("h1").should("exist");
  });
});
