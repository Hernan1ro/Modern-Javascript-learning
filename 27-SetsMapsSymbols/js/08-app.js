const ciudades = ["londres", "New york", "madrid", "Paris"];
const ordenes = new Set([123, 125, 234, 235]);
const datos = new Map();
datos.set("Nombre", "Hernan");
datos.set("Profesion", "Developer");

// Entries iterator
console.group("Entries Iterator");
for (let entry of ordenes.entries()) {
  console.log(entry);
}
for (let entry of ciudades.entries()) {
  console.log(entry);
}
for (let entry of datos.entries()) {
  console.log(entry);
}
console.groupEnd();

console.group("Values Iterator");
//Values iterator
for (let value of ciudades.values()) {
  console.log(value);
}
for (let value of ordenes.values()) {
  console.log(value);
}
for (let value of datos.values()) {
  console.log(value);
}
console.groupEnd();

// Keys iterator
console.group("Keys Iterator");
for (let key of ciudades.keys()) {
  console.log(key);
}
for (let key of ordenes.keys()) {
  console.log(key);
}
for (let key of datos.keys()) {
  console.log(key);
}

console.groupEnd();

// Iterador por default
console.group("Default iterador");
for (let ciudad of ciudades) {
  console.log(ciudad);
}
for (let orden of ordenes) {
  console.log(orden);
}
for (let dato of datos) {
  console.log(dato);
}
