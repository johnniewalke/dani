// Função para inicializar o mapa e criar a rota
function initMap() {
    // Verifica se o navegador suporta geolocalização
    if (navigator.geolocation) {
      // Obtém a localização atual do usuário
      navigator.geolocation.getCurrentPosition(function(position) {
        // Obtém as coordenadas da localização atual
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
  
        // Cria o objeto LatLng com as coordenadas da localização atual
        var userLocation = new google.maps.LatLng(latitude, longitude);
  
        // Cria o mapa e define o centro como a localização atual
        var map = new google.maps.Map(document.getElementById('map'), {
          center: userLocation,
          zoom: 14
        });
  
        // Cria o marcador da localização atual
        var userMarker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: 'Sua Localização'
        });
  
        // Cria o marcador do destino
        var destination = new google.maps.LatLng(destinyLatitude, destinyLongitude);
        var destinationMarker = new google.maps.Marker({
          position: destination,
          map: map,
          title: 'Destino'
        });
  
        // Cria a rota entre a localização atual e o destino
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        var request = {
          origin: userLocation,
          destination: destination,
          travelMode: 'DRIVING'
        };
        directionsService.route(request, function(result, status) {
          if (status == 'OK') {
            directionsRenderer.setDirections(result);
          }
        });
      });
    } else {
      alert('Seu navegador não suporta geolocalização.');
    }
  }
  