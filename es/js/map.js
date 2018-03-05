
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
    ['110 Napier Road', 51.557821, 0.008345],
    ['116 Murchinson Road', 51.564818, -0.005540],
    ['12 Tavistock Road', 51.554344, 0.011536],
    ['21 Colville Road', 51.592821, -0.031659],
    ['107 Calderon Road', 51.555729, -0.000169],
    ['22 Poppleton Road', 51.572994, 0.010736],
    ['227 Ramsay Road', 51.556375, 0.016667],
    ['33 Farmilo Road', 51.572545, -0.025613],
    ['4 Avondale Road', 51.571715, -0.022729],
    ['40 Richmond Road', 51.565153, 0.000669],
    ['45 Colville Road', 51.559025, -0.002837],
    ['55 Lascotts Road', 51.607881, -0.113963],
    ['55 Morley Road', 51.566241, -0.006047],
    ['57 Vansittart Road', 51.554062, 0.018079],
    ['576 High Road', 51.567456, -0.008841],
    ['58 Belgrave Road', 51.578072, -0.020122],
    ['66 Huxley Road', 51.561497, -0.007702],
    ['7 Sidmouth Road', 51.560374, -0.008327]
    ];

    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3><a href="110napier.html">110 Napier Road</a></h3>' +
        '<a href="110napier.html">'+'<img src="./img/houses/110NapierRoad/napier_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;110.00</p>' + '<p>Tube and Overground Station:<br />Layton </p>' + '<p>Bedrooms: 5 <br />Bathroom: 1</p>' + '<a href="110napier.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="116murchinson.html">116 Murchinson Road</a></h3>' +
        '<a href="116murchinson.html"><img src="./img/houses/116MurchinsonRoad/116MurchisonRd_Room02_02B.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;125.00</p>' + '<p>Tube and Overground Station:<br />Layton </p>' + '<p>Bedrooms: 3 <br />Bathroom: 1</p>' + '<a href="116murchinson.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="12travistock.html">12 Tavistock Road</a></h3>' +
        '<a href="12travistock.html"><img src="./img/houses/12TravistockRoad/12Tavistock_print.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;120</p>' + '<p>Tube and Overground Station:<br />Forest Gate</p>' + '<p>Bedrooms: 4 <br />Bathrooms: 2</p>' + '<a href="12travistock.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="21colville.html">21 Colville Road</a></h3>' +
        '<a href="21colville.html"><img src="./img/houses/21Colville/21_colville_first_05.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;120.00</p>' + '<p>Tube and Overground Station:<br />Leyton</p>' + '<p>Bedrooms: 4 <br />Bathroom: 1</p>' + '<a href="21colville.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="107calderon.html">107 Calderon Road</a></h3>' +
        '<a href="107calderon.html"><img src="./img/houses/107Calderon/107Calderon_print.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;120.00</p>' + '<p>Tube and Overground Station:<br />Leyton</p>' + '<p>Bedrooms: 5 <br />Bathrooms: 2</p>' + '<a href="107calderon.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="22poppleton.html">22 Poppleton Road</a></h3>' +
        '<a href="22poppleton.html"><img src="./img/houses/22poppleton/poppleton_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;95.00</p>' + '<p>Tube and Overground Station:<br />Leytonstone</p>' + '<p>Bedrooms: 7 <br />Bathrooms: 3</p>' + '<a href="22poppleton">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="227ramsay.html">227 Ramsay Road</a></h3>' +
        '<a href="227ramsay.html"><img src="./img/houses/227Ramsay/ramsay_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;115.00</p>' + '<p>Tube and Overground Station:<br />Forest Gate</p>' + '<p>Bedrooms: 6 <br />Bathrooms: 3</p>' + '<a href="227ramsay.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="33farmilo.html">33 Farmilo Road</a></h3>' +
        '<a href="33farmilo.html"><img src="./img/houses/33farmilo/farmilo_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;110.00</p>' + '<p>Tube and Overground Station:<br />Walthamstow Central</p>' + '<p>Bedrooms: 5 <br />Bathrooms: 2</p>' + '<a href="33farmilo.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="4avondale.html">4 Avondale Road</a></h3>' +
        '<a href="4avondale.html"><img src="./img/houses/4avondale/4Avondale_print.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;125.00</p>' + '<p>Tube and Overground Station:<br />Walthamstow Central</p>' + '<p>Bedrooms: 6 <br />Bathrooms: 3</p>' + '<a href="4avondale.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="40richmond.html">40 Richmond Road</a></h3>' +
        '<a href="40richmond.html"><img src="./img/houses/40Richmond/richmond_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;120.00</p>' + '<p>Tube and Overground Station:<br />Leytonstone</p>' + '<p>Bedrooms: 7 <br />Bathroom: 1</p>' + '<a href="40richmond.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="45colville.html">45 Colville Road</a></h3>' +
        '<a href="45colville.html"><img src="./img/houses/45Colville/45colville_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;95.00</p>' + '<p>Tube and Overground Station:<br />Leyton</p>' + '<p>Bedrooms: 4 <br />Bathrooms: 2</p>' + '<a href="45colville.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="55lascotts.html">55 Lascotts Road</a></h3>' +
        '<a href="55lascotts.html"><img src="./img/houses/55lascotts/lascotts_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;110.00</p>' + '<p>Tube and Overground Station:<br />Bounds Green</p>' + '<p>Bedrooms: 5 <br />Bathrooms: 2</p>' + '<a href="55lascotts.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="55morley.html">55 Morley Road</a></h3>' +
        '<a href="55morley.html"><img src="./img/houses/55morley/morley_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;125.00</p>' + '<p>Tube and Overground Station:<br />Leyton</p>' + '<p>Bedrooms: 5 <br />Bathroom: 1</p>' + '<a href="55morley.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="57vansittart.html">57 Vansittart Road</a></h3>' +
        '<a href="57vansittart.html"><img src="./img/houses/57vanisttart/57Vanisttart_print.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;125.00</p>' + '<p>Tube and Overground Station:<br />Forest Gate</p>' + '<p>Bedrooms: 5 <br />Bathroom: 1</p>' + '<a href="57vansittart.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="576high.html">576 High Road</a></h3>' +
        '<a href="576high.html"><img src="./img/houses/576high/high_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;115.00</p>' + '<p>Tube and Overground Station:<br />Forest Gate</p>' + '<p>Bedrooms: 3 <br />Bathroom: 1</p>' + '<a href="576high.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="58belgrave.html">58 Belgrave Road</a></h3>' +
        '<a href="58belgrave.html"><img src="./img/houses/58belgrave/58Belgrave_print.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;115.00</p>' + '<p>Tube and Overground Station:<br />Leytone</p>' + '<p>Bedrooms: 4 <br />Bathrooms: 2</p>' + '<a href="58belgrave.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="66huxley.html">66 Huxley Road</a></h3>' +
        '<a href="66huxley.html"><img src="./img/houses/66Huxley/huxley_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;100.00</p>' + '<p>Tube and Overground Station:<br />Leyton</p>' + '<p>Bedrooms: 7<br />Bathrooms: 3</p>' + '<a href="66huxley.html">Go For More Detals...</a>' + '</div>'],

        ['<div class="info_content">' +
        '<h3><a href="7sidmouth.html">7 Sidmouth Road</a></h3>' +
        '<a href="7sidmouth.html"><img src="./img/houses/7sidmouth/sidmouth_road_prin.jpg" class="mini-map-img">'+'</a>' +
        '<p>Rooms From: &pound;100.00</p>' + '<p>Tube and Overground Station:<br />Leyton</p>' + '<p>Bedrooms: 5<br />Bathrooms: 2</p>' + '<a href="7sidmouth.html">Go For More Detals...</a>' + '</div>'],



    ];

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
        this.setZoom(11);
        google.maps.event.removeListener(boundsListener);
    });

}
