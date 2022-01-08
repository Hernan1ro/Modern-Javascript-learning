//cuando se instala el service worker

self.addEventListener("install", (e) => {
  console.log("Instalado el Service Worker");

  console.log(e);
});

// Activar el service worker
self.addEventListener("activate", (e) => {
  console.log("Service worker activado");

  console.log(e);
});
