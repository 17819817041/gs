<template>
    <div class="Login">
        <input
        id="pac-input"
        class="controls"
        type="text"
        placeholder="Search Box"
        />
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            lists: [],
            msg: 123654
        }
    },
    mounted () {
        let boolean = true
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 22.6, lng: 114.1},
            zoom: 8,
            mapTypeId: "roadmap",
            disableDefaultUI: true,
            zoomControl: boolean,
            mapTypeControl: boolean,
            scaleControl: boolean,
            streetViewControl: boolean,
            rotateControl: boolean,
            fullscreenControl: boolean,
        });

        const myLatLng = {lat: 22.6, lng: 114.1}
        new google.maps.Marker({
            position: myLatLng,
            map,
            title: "Hello World!",
        });

        let msg = this.msg
        var data = [
            {id:1,name:'小李'},
            {id:2,name:'小王'},
            {id:3,name:'小张'},
            {id:4,name:'小宋'},
            {id:4,name:'小宋'},
            {id:4,name:'小宋'},
        ]
        this.$nextTick(() => {
            const contentString = `
                <div>
                    ${data.map((item) => {
                        return `<div><span>${item.name}</span></div>`
                    }).join('')}
                </div>
            `
            const infowindow = new google.maps.InfoWindow({
                content: contentString,
            });
            const marker = new google.maps.Marker({
                position: myLatLng,
                map,
                title: "Uluru (Ayers Rock)",
            });
            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
            })
            const triangleCoords = [
                { lat: 22.27, lng: 113.46 },
                { lat: 22.28, lng: 113.50 },
                { lat: 22.30, lng: 113.55 },
                { lat: 22.32, lng: 113.57 },
                { lat: 22.35, lng: 113.59 },
                { lat: 22.37, lng: 113.60 },
                { lat: 22.40, lng: 113.62 },
            ];
            // Construct the polygon.
            const bermudaTriangle = new google.maps.Polygon({
                paths: triangleCoords,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
            });
            bermudaTriangle.setMap(map);
        })

        const input = document.getElementById("pac-input");
        const searchBox = new google.maps.places.SearchBox(input);
        console.log(searchBox)
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
            searchBox.setBounds(map.getBounds());
        });

        let markers = [];

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();

            if (places.length == 0) {
            return;
            }

            // Clear out the old markers.
            markers.forEach((marker) => {
            marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            const bounds = new google.maps.LatLngBounds();

            places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
                })
            );
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
            });
            map.fitBounds(bounds);
        });
        // this.initMap()
    },
    methods: {
        
    }
}
</script>

<style>
    #map {
        height: 600px;
        width: 100%;
    }
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #description {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    }

    #infowindow-content .title {
    font-weight: bold;
    }

    #infowindow-content {
    display: none;
    }

    #map #infowindow-content {
    display: inline;
    }

    .pac-card {
    background-color: #fff;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
    margin: 10px;
    padding: 0 0.5em;
    font: 400 18px Roboto, Arial, sans-serif;
    overflow: hidden;
    font-family: Roboto;
    padding: 0;
    }

    #pac-container {
    padding-bottom: 12px;
    margin-right: 12px;
    }

    .pac-controls {
    display: inline-block;
    padding: 5px 11px;
    }

    .pac-controls label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
    }

    #pac-input {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 250px;
        top: 66px !important;
        left: -3px !important;
        border-radius: 3px;
        height: 25px;
    }

    #pac-input:focus {
    border-color: #4d90fe;
    }

    #title {
    color: #fff;
    background-color: #4d90fe;
    font-size: 25px;
    font-weight: 500;
    padding: 6px 12px;
    }

    #target {
    width: 345px;
    }
</style>