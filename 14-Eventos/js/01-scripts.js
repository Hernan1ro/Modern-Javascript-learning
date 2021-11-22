// eventos de carga de pagina

// console.log(1);

// document.addEventListener("DOMContentLoaded", () => {
//   console.log(2);
// });

// console.log(3);

// eventos del Mouse

// const nav = document.querySelector("nav");

// nav.addEventListener("click", () => {
//   console.log("Click en el nav");
// });
// nav.addEventListener("mouseenter", () => {
//   console.log("Oleee nigga");
//   nav.style.backgroundColor = "yellow";
// });

// eventos con el teclado

// const busqueda = document.querySelector(".busqueda");

// busqueda.addEventListener("input", (evento) => {
//   console.log("Escribiendo...");
//   // console.log(evento);
//   console.log(evento.target.value);
// });

// eventos en los formularios

// const fomulario = document.querySelector("#formulario");

// formulario.addEventListener("submit", validarFormulario);

// function validarFormulario(evento) {
//   evento.preventDefault();
//   console.log("buscando...");
//   console.log(evento.target.action);
// }

// eventos con el scroll
// window.addEventListener("scroll", (evento) => {
//   const premium = document.querySelector(".premium");
//   const ubicacion = premium.getBoundingClientRect();
//   console.log(ubicacion);
//   if (ubicacion.top < 500) {
//     console.log("El elmento ya está visible");
//   } else {
//     console.log("Aún no, da mas scroll nigga");
//   }
// });

// Event Bobbling

// const cardDiv = document.querySelector(".card");
// const info = document.querySelector(".info");
// const titulo = document.querySelector(".titulo");

// cardDiv.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en card");
// });
// info.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en info");
// });
// titulo.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en titulo");
// });

// Event Bobbling Delegation

// const cardDiv = document.querySelector(".card");
// cardDiv.addEventListener("click", (e) => {
//   if (e.target.classList.contains("titulo")) {
//     console.log("Diste click en Titulo");
//   } else if (e.target.classList.contains("precio")) {
//     console.log("Diste click en precio");
//   } else if (e.target.classList.contains("card")) {
//     console.log("Diste click en Card");
//   }
//   console.log(e.target.classList);
//   // console.log("click en card");
// });

// Prevenir Event Bubbling con un método
