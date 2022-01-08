// Implicit Binding

const usuario = {
  nombre: "Hernan",
  edad: 20,
  information() {
    console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
  },
  mascota: {
    nombre: "Hook",
    edad: 2,
    information() {
      console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
  },
};

usuario.information();
usuario.mascota.information();
