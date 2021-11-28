const paises = ["francia", "España", "portugal", "Australia", "Inglaterra"];

function nuevoPais(pais, callback) {
  setTimeout(function () {
    paises.push(pais);
    callback();
  }, 2000);
}

function mostrarPaises() {
  setTimeout(function () {
    paises.forEach((pais) => console.log(pais));
  }, 1000);
}

mostrarPaises();
nuevoPais("Alemani", mostrarPaises);
