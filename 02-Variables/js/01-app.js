personas = [
  { altura: 1.5, libros: 14 },
  { altura: 1.8, libros: 26 },
];

const GenteAlta = ({ altura }) => altura > 1.7;

personasAltas = personas.filter(GenteAlta);

const reducer = (acum, persona) => {
  return acum + persona.libros;
};
var totalDeLibros = personas.reduce(reducer, 0);

console.log(totalDeLibros);
// console.log(personasAltas);

// let acum = 0;

// for (let i = 0; i < personas.length; i++) {
//   acum += personas[i].libros;
//   console.log(acum);
// }
// const pasarAlturaACm = (persona) => ({
//   ...persona,
//   altura: persona.altura * 100,
// });

// var personasCm = personas.map(pasarAlturaACm);

// console.log(personasCm);

// console.log(personas);
