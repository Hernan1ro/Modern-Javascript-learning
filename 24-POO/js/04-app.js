// Propiedades Privadas en las clases //
class Cliente {
  #nombre;
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getNombre() {
    return this.#nombre;
  }
}

const Hernan = new Cliente();

// Nombre es privado
// console.log(Hernan.#nombre);

// Acceso del nombre por medio de metodos de la clase
Hernan.setNombre("Hernan");
console.log(Hernan.getNombre());
