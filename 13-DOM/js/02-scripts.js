// seleccionar un elemento por su clase

const header = document.getElementsByClassName("header");

// seleccionar un elemento por id el

const formulario = document.getElementById("formulario");

console.log(formulario);

// seleccionar con query selectors

const card = document.querySelectorAll(".card");

console.log(card);

const info = document.querySelector(".premium .info");
console.log(info);

const sedundoCard = document.querySelector(".hospedaje .card:nth-child(3)");
console.log(sedundoCard);

// seleccionar un id con query selector

const formulario1 = document.querySelector("#formulario");
console.log(formulario1);

// Seleccionar elementos Html

const nav = document.querySelector("nav");
console.log(nav);
