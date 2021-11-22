const enlace = document.createElement("A");

// Agregandole el texto

enlace.textContent = "Nuevo Enlace";

// Añadiendo el href

enlace.href = "http://nuevo-enlace//";
enlace.target = "_black";
enlace.setAttribute("data-enlace", "nuevo-enlace");
enlace.classList.add("Nigga");

// const saludaNigga = () => {
//   alert("Hola nigaaaaa");
// };

enlace.onclick = saludaNigga;

console.log(enlace);

const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function saludaNigga() {
  alert("Hola NIGAAAAA");
}

// crear un card

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto de Niggas";
parrafo1.classList.add("categoria", "concierto");
console.log(parrafo1);
const parrafo2 = document.createElement("p");
parrafo2.textContent = "Música reggage";
parrafo2.classList.add("titulo");
console.log(parrafo2);
const parrafo3 = document.createElement("p");
parrafo3.textContent = "3000 lukas por persona";
parrafo3.classList.add("precio");
console.log(parrafo3);

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info);

const imagen = document.createElement("img");
imagen.src = "img/hacer4.jpg";
imagen.alt = "Texto Alternativo";

const card = document.createElement("div");
card.classList.add("card");
card.appendChild(imagen);
card.appendChild(info);
console.log(card);

// const hacer = document.querySelector("section");
// hacer.children[1].appendChild(card);
// console.log(hacer.children[1]);

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card, contenedor.children[2]);
console.log(contenedor);
