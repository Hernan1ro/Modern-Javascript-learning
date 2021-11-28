const cargarAPI = document.querySelector("#cargarAPI");

cargarAPI.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "https://picsum.photos/list";
  fetch(url)
    .then((res) => res.json())
    .then((res) => imprimirDatos(res));
}

function imprimirDatos(datos) {
  const contenido = document.querySelector(".contenido");

  let html = "";

  datos.forEach((dato) => {
    const { author, post_url } = dato;
    html += `
    <p>Autor: ${author}</p>
    <a href=${post_url} target="_blank">PostUrl</a>
    `;
  });
  contenido.innerHTML = html;
}
