// Singleton pattern

// It does not allow to create multiple instances for a single object

let instancia = null;
class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    } else {
      return instancia;
    }
  }
}

const persona = new Persona("Hernan", "Hernandmf@gmail.com");
const persona2 = new Persona("lina", "lina@gmail.com");

console.log(persona);
console.log(persona2);
