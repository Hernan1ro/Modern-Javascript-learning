const navegacion = document.querySelector(".navegacion");
console.log(navegacion);

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.children[0]);
// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector(".card");

// card.children[1].children[1].textContent = "HELLOOOO NIGAAAAA";

// console.log(card.children);

// card.children[0].src = "./img/hacer2.jpg";

// console.log(card.children[0]);

// Traversing the DOM del hijo al padre

// console.log(card.parentElement);
// console.log(card.parentNode);

// console.log(card.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");

// console.log(ultimoCard.previousElementSibling);
