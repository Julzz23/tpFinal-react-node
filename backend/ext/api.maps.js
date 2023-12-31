function initMap() {
  let origin = "Rivadavia 6123, Buenos Aires, Argentina";
  //TODO: VER CÓMO RECIBIR LA DIRECCION POR PARAMETRO:
  let destination = "Nazca 2123, Buenos Aires, Argentina";
  let directionsService = new google.maps.DirectionsService();
  let directionsRenderer = new google.maps.DirectionsRenderer();
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: -34.60919587526791, lng: -58.428670231251715 },
  });
  directionsRenderer.setMap(map);
  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: "DRIVING",
    },
    function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Error al calcular la ruta: " + status);
      }
    }
  );
}