const paises = [];

function nuevoPais(pais, callback) {
  paises.push(pais);
  console.log(`Agregando ${pais}`);
  callback();
}

function mostrarPaises() {
  console.log(paises);
}

function callbackHell() {
  setTimeout(function () {
    nuevoPais("Alemania", mostrarPaises);
    setTimeout(function () {
      nuevoPais("Francia", mostrarPaises);
      setTimeout(function () {
        nuevoPais("Inglaterra", mostrarPaises);
      }, 3000);
    }, 3000);
  }, 3000);
}

callbackHell();
