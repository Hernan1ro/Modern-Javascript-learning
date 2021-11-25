// Maps

//Pensado para crear objetos, más optimos que objetos tradicionales cuando el volumen de información es grande
const cliente = new Map();

console.log(cliente);

cliente.set("Hernan", "Developer");
cliente.set("Lina", "Ingeniera");

console.log(cliente);
console.log(cliente.size);

//Verificar si tiene un valor q

console.log(cliente.has("Hernan"));
//borrar un objeto
console.log(cliente.delete("Hernan"));
console.log(cliente);
// borrar todos los elementos
cliente.clear();
console.log(cliente);

// Inicializar objeto Map con datos en su constructor

const paciente = new Map([
  ["Hernan", "paciente"],
  ["Lina", "Paciente"],
]);

console.log(paciente);
paciente.set("dr", "Dr asignado");
paciente.set("Nombre", "Antonio");

console.log(paciente);

// Los maps también son iterables
paciente.forEach((dato, index) => {
  console.log(index);
  console.log(dato);
});
