---
title: 
layout: layouts/page.njk
permalink: /map/
eleventyNavigation:
  key: Map
  order: 3
---

<div id="map" style="height: 1000px; width: 100%;"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

<script>
  // Initialize the map
  const map = L.map('map').setView([39.8283, -98.5795], 4.5);
  
  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // For now, add a single marker
  L.marker([40.7128, -74.0060])
    .addTo(map)
    .bindPopup("New York City");
</script>
