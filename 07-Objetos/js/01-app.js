const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: "20 dolares",
  caracteristicas: {
    apariencia: "Horrible como un demonio",
    peso: "Chingados voy yo a saber",
  },
};

producto.image = "imagen.jpg";
// delete producto.nombre;

const {
  precio,
  nombre,
  caracteristicas: { apariencia },
} = producto;
console.log(precio);
console.log(producto);
console.log(apariencia);
