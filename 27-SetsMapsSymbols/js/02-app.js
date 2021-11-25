// WeakSet
// Solo aceptan objetos
const weakset = new WeakSet();

const cliente = {
  cliente: "Hernan",
  saldo: 100,
};

// const nomber = "Lina";

weakset.add(cliente);
// weakset.add(nomber);

// Verificar si existe un objeto
console.log(weakset.has(cliente));
// Eliminar u objeto weakset
weakset.delete(cliente);
console.log(weakset);

// no son iterables y no contiene un metodo para medir cuantos objetos tiene
