const obtenerNombre = (info) => ({
  mostrarNombre() {
    console.log(`Nombre: ${info.nombre}`);
  },
});

const guardarEmail = (info) => ({
  agregarEmail(email) {
    console.log(`Agregando información a ${info.nombre}`);
    info.email = email;
  },
});

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };

  return Object.assign(info, obtenerNombre(info), guardarEmail(info));
}

function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto,
  };
  return Object.assign(info, obtenerNombre(info));
}

const cliente = Cliente("Hernan", null, "Strydom");

cliente.mostrarNombre();
cliente.agregarEmail("Hernandmf@gmail.com");

const empleado = Empleado("Daniel", null, "Vicepresidente junior");

empleado.mostrarNombre();
