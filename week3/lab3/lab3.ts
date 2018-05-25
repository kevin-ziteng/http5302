let map : any;
let geocoder : any;
let addresses : any[];
let mapMarkers : MapMarker[] = [];

// interface
interface LatLng{
    lat : number,
    lng : number,
}

class MapMarker{
    Address : string;
    Latlng : LatLng;

    public constructor(address:string){
        this.Address = address;  
    };
}

let Toronto : LatLng = { lat:43.649686, lng: -79.376255 };
// Toronto.lat = 43;
// Toronto.lng = -79.38;

$.ajax({
    url: './ac_locations.json',
    dataType: 'json',
    success:function(data){
        //console.log(data);
        addresses = data;
        for(let i of addresses){
            // add map marker to array of map markers
            let newMapMarker : MapMarker = new MapMarker(i.address);
            mapMarkers.push(newMapMarker);
        }
        
    }
});

window.onload = function(){
    console.log(mapMarkers);
    start(0);
    function start(counter){
        if(counter < mapMarkers.length){
            geo(mapMarkers[counter]);
            //console.log(counter);            
            counter++;
            start(counter);
            // setTimeout(function(){            
                
            // }, 100);                     
        }
    }
}

function initMap() {  
    map = new google.maps.Map(
        document.getElementById('map'), 
        {
            center: Toronto,
            zoom: 10
        }
    );
}

function geo(mapMark : MapMarker){
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': mapMark.Address}, function(results, status) {
        if (status == 'OK') {         
            mapMark.Latlng = { lat:results[0].geometry.location.lat(),
                               lng:results[0].geometry.location.lng() };  
            var marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: results[0].geometry.location
            });  
        } else {            
           setTimeout(function(){geo(mapMark);},2000);
           
          //alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

