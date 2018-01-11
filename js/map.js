function initMap() {
	var mapDiv = document.getElementById("demo");
	var uluru = {lat: 40.9695547, lng: -5.6635247};
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: uluru});
	var marker = new google.maps.Marker({position: uluru, map: map});
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			locateMarker(map, marker, position.coords.latitude, position.coords.longitude); });
        navigator.geolocation.watchPosition(function(position) {
			locateMarker(map, marker, position.coords.latitude, position.coords.longitude); });	
	}else{
		mapDiv.innerHTML = "Geolocalización no disponible";
	}
}

function locateMarker(map, marker, lat, lng){
	var pos = new google.maps.LatLng(lat, lng);
	marker.setPosition(pos);
    map.panTo(pos);
}
