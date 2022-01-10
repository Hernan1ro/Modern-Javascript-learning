// Constructor pattern

// Use a core class that is extended to the rest of objects
class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.emial = email;
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email);
    this.empresa = empresa;
  }
}

const cliente = new Cliente("Hernan", "Hernandmf@gmail.com", "Strydom");

console.log(cliente);
