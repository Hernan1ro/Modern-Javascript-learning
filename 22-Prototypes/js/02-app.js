function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const luis = new Cliente("Luis", 5000);

console.log(luis);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(cliente) {
  const { nombre, saldo, categoria } = cliente;
  return `El cliente ${nombre} tiene un saldo de $${saldo} y se encuentra en la categoria ${categoria}`;
}

console.log(formatearCliente(luis));

function empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const codigoConJuan = new empresa("Codigo con juan", 4000, "Cursos en linea");

console.log(formatearEmpresa(codigoConJuan));
