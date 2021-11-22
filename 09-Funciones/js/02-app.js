const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciento ${id}...`),
  reproducir: (id) => console.log(`Reproduciento ${id}...`),
  reproducir: (id) => console.log(`Reproduciento ${id}...`),
  reproducir: (id) => console.log(`Reproduciento ${id}...`),
  reproducir: (id) => console.log(`Reproduciento ${id}...`),
  set nuevaCanción(cancion) {
    this.cancion = cancion;
    console.log(`${cancion} añadida exitosamente`);
  },
  get obtenerCancion() {
    console.log(this.cancion);
  },
};

reproductor.reproducir("Imaginations");

reproductor.nuevaCanción = "The best of you";
reproductor.obtenerCancion;
