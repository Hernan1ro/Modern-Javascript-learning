const nombreCache = "apv-v1";

const archivos = [
  "/",
  "/index.html",
  "/error.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
];

//cuando se instala el service worker
self.addEventListener("install", (e) => {
  console.log("Instalado el Service Worker");

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("Cacheando");
      cache.addAll(archivos);
    })
  );
});

// Activar el service worker
self.addEventListener("activate", (e) => {
  console.log("Service worker activado");

  e.waitUntil(
    caches.keys().then((keys) => {
      // console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map(
            (key) => caches.delete(key) // Delete de old ones
          )
      );
    })
  );
});

// evento fetch para descargar archivos estaticos

self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);

  e.respondWith(
    caches
      .match(e.request)
      .then((respuestaCache) => {
        return respuestaCache;
      })
      .catch(() => caches.match("/error.html"))
  );
});
