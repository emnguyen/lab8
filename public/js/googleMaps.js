function initMap() {
	// Create center marker at SSC
	var ucsd_ltlng = {lat: 32.8788033, lng:-117.2359121};

	// Create a map object and specify the DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}