document.addEventListener("DOMContentLoaded", () => {
  crmDB();
});

function crmDB() {
  // Crear base de datos 1.0
  let crmDB = window.indexedDB.open("crm", 1);
  //Si hay un error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la BD");
  };
  //Si se crea bien
  crmDB.onsuccess = function () {
    console.log("Base de datos creada");
  };
  // Configuracion de la base de datos
  crmDB.onupgradeneeded = function () {
    console.log("Este método solo se ejecuta una sola vez");
  };
}
