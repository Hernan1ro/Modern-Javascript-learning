const carrito = ["producto1", "producto2", "producto3", "producto4"];

describe("Testing al carrito de compras", () => {
  test("Probar que el array tenga 3 elementos", () => {
    expect(carrito).toHaveLength(4);
  });

  test("Verificar que el carrito no este vacìo", () => {
    expect(carrito).not.toHaveLength(0);
  });
});
