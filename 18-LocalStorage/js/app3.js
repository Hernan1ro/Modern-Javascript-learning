const meses = ["enero", "febrero", "marzo"];

localStorage.setItem("mesesArray", JSON.stringify(meses));

const mesesArray = JSON.parse(localStorage.getItem("mesesArray"));
console.log(mesesArray);
mesesArray.push("abril");
console.log(mesesArray);

localStorage.setItem("mesesArray", JSON.stringify(mesesArray));

localStorage.clear();
