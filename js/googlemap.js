$(document).ready(function () {
  $('.miniatures img').on({
    click: function(){

      var imageUrl = $(this).attr('src');
      $('#mainImage').attr('src', imageUrl);
    }
  });
});

// Get modal element
var modal = document.getElementById('myModal');
// Get open modal button
var modalBtn = document.getElementById('map_link');

//Turning of the link
modalBtn.addEventListener("click", function(e){
    e.preventDefault()
});
// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}
// Function to close modal outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

setTimeout('initMap()', 2000);
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(50);

    // Multiple markers location, latitude, and longitude
    var markers = [
    ['4 Avondale Road', 51.571715, -0.022729],
    ];

    // Info window content
    var infoWindowContent = [
      ['<div class="info_content">' +
      '<h3><a href="4avondale.html">4 Avondale Road</a></h3>' +
      '<a href="4avondale.html"><img src="./img/houses/4avondale/4Avondale_print.jpg" class="mini-map-img">'+'</a>' +
      '<p>Rooms From: &pound;125.00</p>' + '<p>Tube and Overground Station:<br />Walthamstow Central</p>' + '<p>Bedrooms: 6 <br />Bathrooms: 3</p>' + '<a href="4avondale.html">Go For More Detals...</a>' + '</div>']];

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Place each marker on the map
    for( i = 0; i < markers.length; i++ ) {
      var imgIcon = './img/orange-icon.png';
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: imgIcon
        });

        // Add info window to marker
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });

}
