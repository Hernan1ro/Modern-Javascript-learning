const cargarTxBtn = document.querySelector("#cargarTxt");

cargarTxBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/datos.txt";
  fetch(url)
    .then((res) => {
      console.log(res);
      console.log(res.status);
      console.log(res.statusText);
      console.log(res.url);
      console.log(res.type);
      return res.text();
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((err) => console.log(err));
}
