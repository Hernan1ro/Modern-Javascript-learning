window.addEventListener("online", actualizarEstado);
window.addEventListener("offline", actualizarEstado);
window.addEventListener("DOMContentLoaded", () => {
  if (navigator.onLine) {
    console.log("Estas conectado a interneft");
  } else {
    console.log("No estás conectado");
  }
});

function actualizarEstado() {
  if (navigator.onLine) {
    console.log("Estas conectado a interneft");
  } else {
    console.log("No estás conectado");
  }
  console.log("online");
}

window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
