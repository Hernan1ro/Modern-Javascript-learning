let encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);
let encabezado2 = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado2);

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); // se trae html

document.querySelector(".contenido-hero h1").innerHTML = "Hola niga";
// encabezado = "Hola Nigaaaaaaa";

console.log(encabezado);

const imagen = document.querySelector(".card img");

console.log(imagen);

// imagen.src = "img/hacer2.jpg";

console.log(imagen);
