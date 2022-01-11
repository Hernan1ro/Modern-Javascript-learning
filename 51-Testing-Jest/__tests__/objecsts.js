const cliente = {
  nombre: "Hernan Mercado",
  balance: 500,
};

describe("testing al cliente", function () {
  test("El cliente es premium", function () {
    expect(cliente.balance).toBeGreaterThan(400);
  });

  test("Es hernan", function () {
    expect(cliente.nombre).toBe("Hernan Mercado");
  });

  test("No es otro cliente", function () {
    expect(cliente.nombre).not.toBe("Pedro");
  });

  test("No tiene 500", function () {
    expect(cliente.balance).not.toBe(300);
  });
});
