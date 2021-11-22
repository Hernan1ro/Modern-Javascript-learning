const diaHoy = new Date();

moment.locale("es");

console.log(moment().format("MM Do YYYY h:mm:ss a"));

console.log(moment().format("llll"));

console.log(moment().add(3, "days").calendar());
