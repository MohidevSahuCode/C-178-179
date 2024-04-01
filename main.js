let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"

//Add Mapbox Geocoder
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://style/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 4

})


var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
    element: img1
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map)
// Create a  Gateway of India, Mumbai Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
    element: img2
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map)

// Create a India Gate Marker and add it to the map.
var marker3 = new mapboxgl.Marker({
    element: img3
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map)

// Create a Lotus Temple, Delhi Marker and add it to the map.
var marker4 = new mapboxgl.Marker({
    element: img4
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map)

//Create a Victoria Memorial, Kolkata Marker and add it to the map.
var marker5 = new mapboxgl.Marker({
    element: img5
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map)


map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }).on('result', function (e) {
        destination = e.result.center
    })
)

$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})