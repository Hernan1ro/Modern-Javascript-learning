function Vendedor(nombre) {
  this.nombre = nombre;
  this.sala = null;
}

Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(
      `Tenemos el siguiente articulo ${articulo}, iniciamos con un precio ${precio}`
    );
  },
  vendido: (comprador) => {
    console.log(`Vendido a ${comprador}`);
  },
};

function Comprador(nombre) {
  this.nombre = nombre;
  this.sala = null;
}

Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador.nombre}: ${cantidad}`);
  },
};

function Subasta() {
  let compradores = {};

  return {
    registrar: (usuario) => {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
    },
  };
}

// Crear objetos

const hernan = new Comprador("Hernán");
const pablo = new Comprador("Pablo");
const vendedor = new Vendedor("Vendedor de autos");
const subasta = new Subasta();

// tiene que registrarlo

subasta.registrar(hernan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta("Pintura", 200000);

hernan.oferta(3500, hernan);
pablo.oferta(50000, pablo);
hernan.oferta(342500, hernan);

vendedor.vendido("Lina");
