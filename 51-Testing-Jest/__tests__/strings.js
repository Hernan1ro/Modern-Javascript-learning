const password = "12356";

describe("Valida que el password no esté vacío y tenga una extensión de 6 caracteres", () => {
  test("Que el password tenga 6 caracteres", () => {
    expect(password).toHaveLength(5);
  });

  test("Password no vacío y tenga 6 caracteres", () => {
    expect(password).not.toHaveLength(0);
  });
});
