  function initMap() {
  // The location of Uluru
  var house = {lat: 50.284752, lng: -3.893811};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: house});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: house, map: map});
}

