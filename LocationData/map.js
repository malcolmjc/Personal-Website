$(document).ready(function () {
    let mapSet = false;
    $("#projects").click(() => {
        if (!mapSet) {
            setTimeout(()=> {
                var map = L.map('map').setView([38.58157189999999, -68.49439960000001], 3);

                var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map);
                
                var heat = L.heatLayer(addressPoints, {maxZoom: 3.5}).addTo(map);
                mapSet = true;
            }, 200);
        }
    });
});