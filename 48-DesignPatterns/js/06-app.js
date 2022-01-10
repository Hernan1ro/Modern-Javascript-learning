// Mixin Pattern

// Crear funciones externas para compartirlas entre clases
class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInformacion() {
    console.log(`Nombre persona ${this.nombre} Email: ${this.email}`);
  },
  mostrarNombre() {
    console.log(`Mi nombre es ${this.nombre}`);
  },
};

// Añadir funciones personas a la clase persona
Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona("Hernan", "Hernandmf@gmail.com");

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();
