// Namespace pattern

const restaurantApp = {};

restaurantApp.platillos = [
  {
    platillo: "Pizza",
    precio: 25,
  },
  {
    platillo: "Hamburguesa",
    precio: 20,
  },
  {
    platillo: "Hot Dog",
    precio: 15,
  },
];

restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log("Mostrando menu...");
    platillos.forEach((platillo, index) =>
      console.log(`${index} - ${platillo.platillo}: $${platillo.precio}`)
    );
  },
  ordenar: (id) => {
    console.log(
      `Tu platillo: ${restaurantApp.platillos[id].platillo} se está preparando`
    );
  },
  agrearPlatillo: (platillo, precio) => {
    const nuevoPlatillo = {
      platillo,
      precio,
    };
    restaurantApp.platillos.push(nuevoPlatillo);
  },
};

const { platillos } = restaurantApp;

console.log(restaurantApp);

restaurantApp.funciones.mostrarMenu(platillos);
restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agrearPlatillo("salchipapa", 209);
console.log(restaurantApp.platillos);
