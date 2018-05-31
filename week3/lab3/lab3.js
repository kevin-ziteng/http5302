var map;
var geocoder;
var addresses;
var mapMarkers = [];
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    ;
    return MapMarker;
}());
var Toronto = { lat: 43.649686, lng: -79.376255 };
// Toronto.lat = 43;
// Toronto.lng = -79.38;
window.onload = function () {
    $.ajax({
        url: './ac_locations.json',
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            addresses = data;
            for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
                var i = addresses_1[_i];
                // add map marker to array of map markers
                var newMapMarker = new MapMarker(i.address);
                geo(newMapMarker);
                mapMarkers.push(newMapMarker);
            }
        }
    });
    console.log(mapMarkers);
    // start(0);
    // function start(counter){
    //     if(counter < mapMarkers.length){
    //         geo(mapMarkers[counter]);
    //         //console.log(counter);            
    //         counter++;
    //         start(counter);
    //         // setTimeout(function(){            
    //         // }, 100);                     
    //     }
    // }
};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: Toronto,
        zoom: 10
    });
}
function geo(mapMark) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': mapMark.Address }, function (results, status) {
        if (status == 'OK') {
            mapMark.Latlng = { lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng() };
            var marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: results[0].geometry.location
            });
        }
        else {
            setTimeout(function () { console.log("wait"); geo(mapMark); }, 300);
            //alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
