const tareas = ["Tareas", "Comer", "Proyecto", "Estudiar Javascript"];

// tareas.forEach((pendiente, index) => console.log(pendiente + index));

// for (let tarea of tareas) {
//   console.log(tarea);
// }

const automovil = {
  modelo: "Tesla",
  año: "2007",
  motor: "Electrico",
};

// for (let propiedad in automovil) {
//   console.log(`${automovil[propiedad]}`);
// }

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(llave);
  console.log(valor);
}
