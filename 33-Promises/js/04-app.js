const paises = [];

const nuevoPais = (pais) =>
  new Promise((resolve) => {
    setTimeout(() => {
      paises.push(pais);
      resolve("El resultado de resolve");
    }, 3000);
  });

nuevoPais("Alemania")
  .then((res) => {
    console.log(res);
    console.log(paises);
    return nuevoPais("Francia");
  })
  .then((res) => {
    console.log(res);
    console.log(paises);
    return nuevoPais("Inglaterra");
  })
  .then((res) => {
    console.log(res);
    console.log(paises);
  });
