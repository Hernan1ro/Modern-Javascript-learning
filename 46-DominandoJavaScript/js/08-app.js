self.onload = function () {
  console.log("ventana lista");
};

self.addEventListener("DOMContentLoaded", () => {
  console.log("ventana lista desde listener");
});
window.nombre = "Monitor de 20 pulgadas";

const producto = {
  precio: 30,
  disponible: true,
  mostrarInfo: function () {
    return `El producto: ${self.nombre} tiene un precio de ${this.precio}`;
  },
};

console.log(producto.mostrarInfo());
