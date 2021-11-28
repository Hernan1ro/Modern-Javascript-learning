const notificarBtn = document.querySelector("#notificar");
const verNotificacionBtn = document.querySelector("#verNotificacion");

notificarBtn.addEventListener("click", function () {
  Notification.requestPermission().then((resultado) => {
    console.log("El resultado es: ", resultado);
  });
});

verNotificacionBtn.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    console.log("ver");
    const greeting = new Notification("Esta es la notificacion", {
      icon: "img/ccj.png",
      body: "Código con juan, aprende de proyectos reales",
    });
    greeting.onclick = () => {
      window.open("https://www.google.com");
    };
  }
});
