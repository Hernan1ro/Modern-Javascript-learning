const cliente = {
  nombre: "Hernan d",
  balance: 500,
  tipo: "Premium",
};

describe("Testing al cliente", function () {
  test("Es Hernan David", function () {
    expect(cliente).toMatchSnapshot();
  });
});
