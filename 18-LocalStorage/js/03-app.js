localStorage.removeItem("nombre");

const meses = ["Enero", "Febrero", "Marzo"];

localStorage.setItem("ArrrayMeses", JSON.stringify(meses));

const mesesArray = localStorage.getItem("ArrrayMeses");
console.log(mesesArray);
mesesArrayjs = JSON.parse(localStorage.getItem("ArrrayMeses"));
console.log(mesesArrayjs);

// Actualizar el registro
mesesArrayjs.push("Nigga month");
console.log(mesesArrayjs);

localStorage.setItem("ArrrayMeses", JSON.stringify(mesesArrayjs));

localStorage.clear();
