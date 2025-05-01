function initMap() {
  const contenedor = document.getElementById('mapa');

  // Coordenadas de fallback: MasterD
  const fallback = [40.350992, -3.824661];

  // Función para crear el mapa
  function crearMapa(coords) {
    const mapa = L.map(contenedor).setView(coords, 15);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapa);

    // Añadir marcador
    L.marker(coords).addTo(mapa)
      .bindPopup('Ubicación')
      .openPopup();
  }

  // Intentar obtener la geolocalización del usuario
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        crearMapa(coords);
      },
      (err) => {
        console.warn("No se pudo obtener la ubicación, se usará MasterD.");
        crearMapa(fallback);
      },
      { timeout: 10000 }
    );
  } else {
    crearMapa(fallback);
  }
}

window.addEventListener('load', initMap);
