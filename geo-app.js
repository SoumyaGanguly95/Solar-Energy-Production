var map = L.map("map").setView([51.96, 7.62], 11);
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

osm.addTo(map);

var layerSolarFarm = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
  layers: "	Solar-Farm-Workspace:dataset-polygon",
  format: "image/png",
  transparent: true,
  attribution: "mylayer",
});

layerSolarFarm.addTo(map);
