const JSONArrayBtn = document.querySelector("#cargarJSONArray");
JSONArrayBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  url = "data/empleados.json";
  fetch(url)
    .then((response) => response.json())
    .then((response) => imprimirDatos(response));
}

function imprimirDatos(empleados) {
  const contenido = document.querySelector(".contenido");
  let html = "";
  empleados.forEach((empleado) => {
    const { nombre, id, trabajo, empresa } = empleado;
    html += `
    <p>Empleado: ${nombre}</p>
    <p>Id: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>   
    `;
    contenido.innerHTML = html;
  });
}
