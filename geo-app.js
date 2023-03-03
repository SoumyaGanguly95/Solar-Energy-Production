var map = L.map("map").setView([52.3, 13.13], 10);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

osm.addTo(map);

// var wms_url = "";

var solarPowerLayer = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
  layers: "Solar-Farm-Workspace:solar-farm-polygon-data",
  format: "image/png",
  transparent: true,
  attribution: "mylayer",
});

solarPowerLayer.addTo(map);

// Define a function to handle click events on the Solar Power Layer
function onSolarPowerLayerClick(event) {
  var shape = event.layer.feature.properties;
  var popupContent = "<b>" + shape.Name + "</b><br>" + shape.area;
  event.layer.bindPopup(popupContent);
  console.log("Click");
}

// Add a click event listener to the Solar Power Layer
solarPowerLayer.on("click", onSolarPowerLayerClick);
