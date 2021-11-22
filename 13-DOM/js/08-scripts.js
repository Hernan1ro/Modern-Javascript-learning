const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo");
    this.textContent = "Idioma y moneda";
  } else if (!footer.classList.contains("activo")) {
    footer.classList.add("activo");
    this.classList.add("activo");
    this.textContent = "Cerrar";
  }
}
