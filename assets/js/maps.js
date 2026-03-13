/**
 * AgriInvest Indonesia - Maps JavaScript
 * Handles Leaflet map initialization and configuration
 */

document.addEventListener('DOMContentLoaded', function() {
  initMaps();
});

// Store map instances for later access
window.mapInstances = {};

/**
 * Initialize all maps on the page
 */
function initMaps() {
  const mapContainers = document.querySelectorAll('.map-canvas');
  
  mapContainers.forEach(function(container) {
    const mapId = container.id;
    initMap(mapId, container);
  });
}

/**
 * Initialize a single map
 */
function initMap(mapId, container) {
  const lat = parseFloat(container.dataset.lat) || -2.5;
  const lng = parseFloat(container.dataset.lng) || 118.0;
  const zoom = parseInt(container.dataset.zoom) || 5;
  const region = container.dataset.region || 'indonesia';
  
  // Create map
  const map = L.map(mapId, {
    center: [lat, lng],
    zoom: zoom,
    scrollWheelZoom: false
  });
  
  // Add tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);
  
  // Store map instance
  window.mapInstances[mapId] = map;
  
  // Add region-specific markers and features
  switch(region) {
    case 'indonesia':
      addIndonesiaOverview(map);
      break;
    case 'lampung-utara':
      addLampungUtaraMarkers(map);
      break;
    case 'maluku':
      addMalukuMarkers(map);
      break;
    default:
      // Default: no additional markers
  }
  
  // Enable scroll zoom after first interaction
  map.once('focus', function() {
    map.scrollWheelZoom.enable();
  });
}

/**
 * Indonesia Overview Map - Shows both regions
 */
function addIndonesiaOverview(map) {
  // Lampung Utara marker
  const lampungMarker = L.marker([-4.5, 104.8]).addTo(map);
  lampungMarker.bindPopup(`
    <div class="map-popup">
      <h4>Lampung Utara</h4>
      <p><strong>Main Commodities:</strong></p>
      <ul>
        <li>Cassava, Maize, Peanuts</li>
        <li>Robusta Coffee, Pepper</li>
      </ul>
      <p><a href="./lampung-utara/">View Region →</a></p>
    </div>
  `);
  
  // Maluku marker
  const malukuMarker = L.marker([-3.0, 129.0]).addTo(map);
  malukuMarker.bindPopup(`
    <div class="map-popup">
      <h4>Maluku</h4>
      <p><strong>Main Commodities:</strong></p>
      <ul>
        <li>Nutmeg, Cloves, Coconut</li>
        <li>Sago, Maize + Rice Intercropping</li>
      </ul>
      <p><a href="./maluku/">View Region →</a></p>
    </div>
  `);
  
  // Fit bounds to show both markers
  const group = L.featureGroup([lampungMarker, malukuMarker]);
  map.fitBounds(group.getBounds().pad(0.3));
}

/**
 * Lampung Utara Map
 */
function addLampungUtaraMarkers(map) {
  // Center on Lampung Utara
  map.setView([-4.5, 104.8], 9);
  
  // Agricultural zones (approximate locations)
  const zones = [
    {
      lat: -4.45,
      lng: 104.75,
      name: 'Central-North Belt',
      commodities: ['Cassava', 'Maize', 'Coffee'],
      type: 'food-crops'
    },
    {
      lat: -4.55,
      lng: 104.85,
      name: 'Central-East Belt',
      commodities: ['Peanuts', 'Pepper', 'Coffee'],
      type: 'plantation'
    },
    {
      lat: -4.50,
      lng: 104.95,
      name: 'Medium Elevation Zone',
      commodities: ['Robusta Coffee', 'Pepper'],
      type: 'plantation'
    }
  ];
  
  // Custom icons
  const foodCropIcon = L.divIcon({
    className: 'custom-marker food-crop',
    html: '<i class="fas fa-wheat-awn" style="color: #2D5A27; font-size: 24px;"></i>',
    iconSize: [24, 24],
    iconAnchor: [12, 24]
  });
  
  const plantationIcon = L.divIcon({
    className: 'custom-marker plantation',
    html: '<i class="fas fa-tree" style="color: #8B6F47; font-size: 24px;"></i>',
    iconSize: [24, 24],
    iconAnchor: [12, 24]
  });
  
  zones.forEach(function(zone) {
    const icon = zone.type === 'food-crops' ? foodCropIcon : plantationIcon;
    
    const marker = L.marker([zone.lat, zone.lng], { icon: icon }).addTo(map);
    marker.bindPopup(`
      <div class="map-popup">
        <h4>${zone.name}</h4>
        <p><strong>Commodities:</strong></p>
        <ul>
          ${zone.commodities.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    `);
  });
  
  // Add legend
  const legend = L.control({ position: 'bottomright' });
  legend.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'map-legend-control');
    div.innerHTML = `
      <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <p style="margin: 0 0 5px; font-weight: bold; font-size: 12px;">Legend</p>
        <p style="margin: 2px 0; font-size: 11px;"><i class="fas fa-wheat-awn" style="color: #2D5A27;"></i> Food Crops</p>
        <p style="margin: 2px 0; font-size: 11px;"><i class="fas fa-tree" style="color: #8B6F47;"></i> Plantation</p>
      </div>
    `;
    return div;
  };
  legend.addTo(map);
}

/**
 * Maluku Map
 */
function addMalukuMarkers(map) {
  // Center on Maluku
  map.setView([-3.0, 129.0], 7);
  
  // Key areas
  const areas = [
    {
      lat: -3.2,
      lng: 128.5,
      name: 'Maluku Tengah',
      commodities: ['Nutmeg', 'Cloves', 'Coconut'],
      type: 'spices',
      description: 'Primary spice production area with Kementan support'
    },
    {
      lat: -2.8,
      lng: 129.5,
      name: 'Seram Island',
      commodities: ['Sago', 'Coconut', 'Maize-Rice'],
      type: 'food-security',
      description: 'Sago production and intercropping trials'
    },
    {
      lat: -3.5,
      lng: 129.0,
      name: 'Ambon Surrounding',
      commodities: ['Nutmeg', 'Cloves'],
      type: 'spices',
      description: 'Heritage spice production'
    }
  ];
  
  // Custom icons
  const spiceIcon = L.divIcon({
    className: 'custom-marker spice',
    html: '<i class="fas fa-seedling" style="color: #1E5F8A; font-size: 24px;"></i>',
    iconSize: [24, 24],
    iconAnchor: [12, 24]
  });
  
  const foodSecurityIcon = L.divIcon({
    className: 'custom-marker food-security',
    html: '<i class="fas fa-bowl-rice" style="color: #D4A84B; font-size: 24px;"></i>',
    iconSize: [24, 24],
    iconAnchor: [12, 24]
  });
  
  areas.forEach(function(area) {
    const icon = area.type === 'spices' ? spiceIcon : foodSecurityIcon;
    
    const marker = L.marker([area.lat, area.lng], { icon: icon }).addTo(map);
    marker.bindPopup(`
      <div class="map-popup">
        <h4>${area.name}</h4>
        <p>${area.description}</p>
        <p><strong>Commodities:</strong></p>
        <ul>
          ${area.commodities.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    `);
  });
  
  // Add legend
  const legend = L.control({ position: 'bottomright' });
  legend.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'map-legend-control');
    div.innerHTML = `
      <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <p style="margin: 0 0 5px; font-weight: bold; font-size: 12px;">Legend</p>
        <p style="margin: 2px 0; font-size: 11px;"><i class="fas fa-seedling" style="color: #1E5F8A;"></i> Spices</p>
        <p style="margin: 2px 0; font-size: 11px;"><i class="fas fa-bowl-rice" style="color: #D4A84B;"></i> Food Security</p>
      </div>
    `;
    return div;
  };
  legend.addTo(map);
}

/**
 * Add custom marker styles
 */
const style = document.createElement('style');
style.textContent = `
  .custom-marker {
    background: transparent;
    border: none;
  }
  .map-popup h4 {
    margin: 0 0 8px;
    color: #2D5A27;
    font-size: 14px;
  }
  .map-popup p {
    margin: 0 0 5px;
    font-size: 12px;
  }
  .map-popup ul {
    margin: 0;
    padding-left: 16px;
    font-size: 12px;
  }
  .map-popup li {
    margin: 2px 0;
  }
  .map-popup a {
    color: #2D5A27;
    font-weight: 500;
  }
  .leaflet-popup-content {
    margin: 10px;
  }
`;
document.head.appendChild(style);
