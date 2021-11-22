// Objetos en JavaScript
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(respuesta) {
    console.log(`Hola ${this.nombre}`);
    if (respuesta) {
      var { nombre, apellido, altura } = this;
      respuesta(nombre, apellido);
    }
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(respuesta) {
    var { nombre, apellido, altura } = this;
    console.log(`Hola soy ${this.nombre} y soy un desarrollador`);
    if (respuesta) {
      respuesta(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ohh no sabía que eras Dev`);
  }
}

const hernan = new Desarrollador("Hernan", "Mercado", 1.78);
const jesus = new Persona("Jesus", "Mercado", 1.8);
const ricardo = new Persona("Ricardo", "Milos", 1.74);

hernan.saludar();
jesus.saludar(responderSaludo);
ricardo.saludar(responderSaludo);
