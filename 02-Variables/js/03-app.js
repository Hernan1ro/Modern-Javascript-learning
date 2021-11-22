// ASINCRONISMO EN JAVASCRIPT
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomaain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}
function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${1}`);
}
// Promesas

async function obtenerPersonajes() {
  var ids = [1, 3, 4, 5, 6, 7];
  var promesas = ids.map(function (id) {
    return obtenerPersonaje(id);
  });
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}
obtenerPersonajes();
// Promise.all(promesas)
//   .then((personajes) => console.log(personajes))
//   .catch(onError);
// obtenerPersonaje(1)
//   .then(function (persona) {
//     console.log(`El personaje 1 es ${persona.name}`);
//     return obtenerPersonaje(2);
//   })
//   .then(function (persona) {
//     console.log(`El personaje 2 es ${persona.name}`);
//   })
//   .catch(function (id) {
//     console.log("Hubo un error nigga");
//   });
