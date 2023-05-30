function abrirRota() {
    var destinoLat = -30.34433; // Latitude de destino desejada
    var destinoLng = -54.32789; // Longitude de destino desejada
  
    var url = `https://www.google.com/maps/dir/?api=1&destination=${destinoLat},${destinoLng}`;
    window.open(url, "_blank");
  }
  