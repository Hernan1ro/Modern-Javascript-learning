// Explicist binding

function persona(el1, el2) {
  console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
  nombre: "Hernan",
};

const musicaFavorita = ["Heavy Metal", "Rock"];

//no acepta arreglos
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// aceptas arreglos
persona.apply(informacion, musicaFavorita);

// Crea una nueva funcion
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);

nuevaFn();
