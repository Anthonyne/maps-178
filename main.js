let latitude=41.6362152,longitude=-70.934205
mapboxgl.accessToken="pk.eyJ1IjoiYWdhbWVzIiwiYSI6ImNreDNrM3E5OTF6aGkyb2tqMDhhY3l4aWcifQ.9bBC9KFqPvJbUYUOHM-x8A"
var map=new mapboxgl.Map({
    container:"map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:16
})
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions:{
        enableHighAccuracy:true
    },
    trackUserLocation :true   
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)