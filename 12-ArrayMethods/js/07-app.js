const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const meses3 = ["Diciembre dos punto cero", "Enero del otro año"];

// .contcat()
const resultado = meses.concat(meses2, meses3, "otro mes perro"); //

console.log(resultado);

// spread operator

const resultado2 = [...meses, ...meses2, ...meses3, "Otro mes nigga"];

console.log(resultado2);
