// Data Sources → Add your API-Key
const maptilerURL = 'Your API-Key';
const locationiqURL = 'Your API-Key';

// OSM Layer
var osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
  title: 'OSM',
  type: 'base1',
  visible: true
});

// WFS Layer
var newSourceFlurstuecke = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
  url: function(extent) {
    return 'https://gdi.berlin.de/services/wfs/alkis_flurstuecke?' +
      'service=WFS&version=2.0.0&request=GetFeature&' +
      'typenames=alkis_flurstuecke:flurstuecke&' +
      'srsname=EPSG:3857&' +
      'bbox=' + extent.join(',') + ',EPSG:3857&' +
      'outputFormat=application/json';
  },
  strategy: ol.loadingstrategy.bbox
});

var flurstueckeLayer = new ol.layer.Vector({
  source: newSourceFlurstuecke,
  style: function(feature, resolution) {
    
    const zoom = map.getView().getZoomForResolution(resolution);

    let width = 1; 
    if (zoom <= 15) {
      width = 0.05;   
    } else if (zoom > 15 && zoom <= 16) {
      width = 0.1;   
    } else if (zoom > 16 && zoom <= 17) {
      width = 0.4;   
    } else if (zoom > 17 && zoom < 18) {
      width = 1.0;   
    } else if (zoom >= 18) {
      width = 1.5;   
    }

    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#5C5441',
        width: width
      })
    });
  }
});


var newSourceStrassen = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
url: function(extent) {
  return 'https://gdi.berlin.de/services/wfs/alkis?' +
    'service=WFS&version=2.0.0&request=GetFeature&' +
    'typenames=alkis:tatsaechlichenutzungflaechen&' +
    'srsname=EPSG:3857&' +
    'outputFormat=application/json&' +
    "CQL_FILTER=" + encodeURIComponent("bezeich='AX_Strassenverkehr'");
},
  strategy: ol.loadingstrategy.bbox
});

var strassenLayer = new ol.layer.Vector({
  source: newSourceStrassen,
  style: function(feature, resolution) {
    const zoom = map.getView().getZoomForResolution(resolution);

    let width = 1; 
    if (zoom <= 15) {
      width = 0.05;   
    } else if (zoom > 15 && zoom <= 16) {
      width = 0.1;   
    } else if (zoom > 16 && zoom <= 17) {
      width = 0.4;   
    } else if (zoom > 17 && zoom < 18) {
      width = 1.0;   
    } else if (zoom >= 18) {
      width = 1.5;  
    }

    return new ol.style.Style({
      fill: new ol.style.Fill({
        color: '#DCC894'  
      }),
      stroke: new ol.style.Stroke({
        color: '#DCC894',
        width: width
      })
  })
}
});


// segMask Layer
var segMaskLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'data/predicted_masks/{z}/{x}/{y}.png',
  }),
  title: 'Predicted Land Cover Classes',
  type: 'base1',
  visible: false
});


// Straubes uebersichtsplan Layer
const geotiffLayerRight = new ol.layer.Tile({
  source: new ol.source.XYZ({
      url: 'data/historical_maps/{z}/{x}/{y}.png',
  }),
  title: 'Straube Maps',
  type: 'base2',
  visible: true
});



// OSM styled Layer
// Create a VectorTile source (tiles must match the style.json definition)
const osmStyledSourceBackground = new ol.source.VectorTile({
  format: new ol.format.MVT(),
  url: [locationiqURL, maptilerURL], // or the URL(s) in your style.json
});

const osmStyledSourceBuildings = new ol.source.VectorTile({
  format: new ol.format.MVT(),
  url: [locationiqURL, maptilerURL], // or the URL(s) in your style.json
});

const osmStyledSourceStreetsLabels = new ol.source.VectorTile({
  format: new ol.format.MVT(),
  url: [locationiqURL, maptilerURL], // or the URL(s) in your style.json
});


const osmStyledLayerBackground = new ol.layer.VectorTile({
  source: osmStyledSourceBackground,
  title: 'Bootstrapped Historical Maps (OSM)',
  type: 'base2',
  visible: false
});

const osmStyledLayerBuildings = new ol.layer.VectorTile({
  source: osmStyledSourceBuildings,
});

const osmStyledLayerStreetsLabels = new ol.layer.VectorTile({
  source: osmStyledSourceStreetsLabels,
});

// Apply the style.json 
olms.applyStyle(osmStyledLayerBackground, 'libs/openstreetmap_style_22_alt_color.json', [
            "Runway",
            "Taxiway",
            "Landuse pattern",
            "Railway",
            "Cemetery",
            "Cemetery-outline",
            "Stadium",
            "Stadium-outline",
            "Pitch",
            "River",
            "River intermittent",
            "Other waterway",
            "Other waterway intermittent",
            "Water intermittent",
            "Water intermittent-outline",
            "Water",
            "Water-outline",
            "River bridge outline",
            "River bridge",
            "Park",
            "Park-outline",
            "Farm",
            "Glacier",
            "Glacier outline",
            "Allotments",
            "Allotments-outline",
            "Bare rock",
            "Beach",
            "Dune",
            "Scrub",
            "Scrub-outline",
            "Farmland",
            "Forest",
            "Forest-outline",
            "Garden",
            "Garden-outline",
            "Grass",
            "Grass-outline",
            "Heath",
            "Heath-outline",
            "Mangrove",
            "Meadow",
            "Orchard and vineyard",
            "Recreation ground",
            "Recreation ground-outline",
            "Sand",
            "Scree",
            "Scree-outline",
            "Wetland and swamp",
            "Wetland and swamp-outline",
            "Tidalflat",
            "Wood",
            "Wood-outline"]) 
olms.applyStyle(osmStyledLayerBuildings, 'libs/openstreetmap_style_22_alt_color.json', ['Building state', 
            'Building state-outline', 
            'Building private2', 
            'Building private', 
            'Building private-outline', 
            'Building all', 
            'Building all-outline', 
            'Building rail']) 

olms.applyStyle(osmStyledLayerStreetsLabels, 'libs/openstreetmap_style_22_alt_color.json', [            "Ferry line",
            "Highway link tunnel outline",
            "Service tunnel outline",
            "Link tunnel outline",
            "Street tunnel outline",
            "Tertiary tunnel outline",
            "Secondary tunnel outline",
            "Trunk tunnel outline",
            "Trunk tunnel under construction outline",
            "Primary tunnel outline",
            "Highway tunnel under construction outline",
            "Highway tunnel outline",
            "Path tunnel second outline",
            "Path tunnel outline",
            "Cycleway path tunnel",
            "Bridleway path tunnel",
            "Footway path tunnel",
            "Highway link tunnel",
            "Service tunnel",
            "Service tunnel under construction",
            "Link tunnel",
            "Minor tunnel",
            "Minor tunnel under construction",
            "Tertiary tunnel",
            "Tertiary tunnel under construction",
            "Secondary tunnel",
            "Secondary tunnel under construction",
            "Primary tunnel",
            "Primary tunnel under construction",
            "Trunk tunnel",
            "Trunk tunnel under construction",
            "Highway tunnel",
            "Highway tunnel under construction",
            "Major rail tunnel",
            "Major rail tunnel hatching",
            "Pier",
            "Pier road",
            "Bridge area",
            "Platform area",
            "Pedestrian area",
            "Pedestrian road outline",
            "Pedestrian road",
            "Steps path outline",
            "Bridleway path outline",
            "Cycleway path outline",
            "Footway path outline",
            "Cycleway path",
            "Steps path",
            "Bridleway path",
            "Footway path",
            "Footpath-outline",
            "Footpath",
            // "Subway line",
            "Major rail",
            "Minor rail",
            "Major rail hatching",
            "Minor rail hatching",
            "Highway link bridge outline",
            "Service bridge outline",
            "Link bridge outline",
            "Street bridge outline",
            "Path bridge second outline",
            "Path bridge outline",
            "Secondary bridge outline",
            "Tertiary bridge outline",
            "Trunk bridge outline",
            "Primary bridge outline",
            "Highway bridge outline",
            "Cycleway bridge",
            "Bridleway bridge",
            "Footway bridge",
            "Highway link bridge",
            "Service bridge",
            "Service bridge under construction",
            "Link bridge",
            "Minor bridge",
            "Minor bridge under construction",
            "Tertiary bridge",
            "Secondary bridge",
            "Secondary bridge under construction",
            "Tertiary bridge under construction",
            "Primary bridge",
            "Trunk bridge",
            "Trunk bridge under construction",
            "Highway bridge",
            "Highway bridge under construction",
            "Major rail bridge",
            "Major rail bridge hatching",
            "Cablecar",
            "Cablecar dash",
            "Oneway path",
            "Oneway",
            "Oneway opposite",
            "Ferry labels",
            "Road labels",
            "Tertiary road shield",
            "Secondary road shield",
            "Primary road shield",
            "Highway shield",
            "Trunk road under construction dash",
            "Trunk bridge under construction dash",
            "Secondary road under construction dash",
            "Tertiary road under construction dash",
            "Primary road under construction dash",
            "Highway road under construction dash",
            "Highway bridge under construction dash",
            "Minor road under construction dash",
            "Tertiary bridge under construction dash",
            "Minor bridge under construction dash",
            "Secondary bridge under construction dash",
            "Primary bridge under construction",
            "Primary bridge under construction dash",
            "House number labels",
            "Major airport labels",
            "Airport labels",
            "Airport gate labels",
            "River labels",
            "Lakeline labels",
            "Water labels",
            "Shop",
            "Waste",
            "Mortuary",
            "Education",
            "Outdoor",
            "Sport",
            "Ferry",
            "Food",
            "Public",
            "Cultural",
            "Attraction",
            "Transport",
            "Health",
            "Campsite",
            "Accommodation",
            "Place of worship",
            "Bus stop",
            "Bus station",
            "Harbor",
            "Mall",
            "Train",
            "Local park",
            "Zoo",
            "Other border",
            "Country border",
            "Other labels",
            "Village labels",
            "Town labels",
            "State labels",
            "City labels",
            "Capital city labels",
            "Country labels",
            "Disputed border",
            "Other border",
            "Country border",
            "Other labels",
            "Village labels",
            "Town labels",
            "State labels",
            "City labels",
            "Capital city labels",
            "Country labels",
            "Disputed border"]) 

// Mock Layers for Titles
const base1Title = new ol.layer.Tile({
  title: 'Left Base Layers',
  type: 'header',            
  visible: false,
  source: new ol.source.Vector({ features: [] }) 
});

const base2Title = new ol.layer.Tile({
  title: 'Right Base Layers',
  type: 'header',
  visible: false,
  source: new ol.source.Vector({ features: [] })
});

// map center + view
var centerPoint = ol.proj.transform([13.404694, 52.518519], 'EPSG:4326', 'EPSG:3857');
var view = new ol.View({
  center: centerPoint,
  zoom: 16.0,
  projection: 'EPSG:3857',
  maxZoom: 18,
 minZoom: 15,
}); 

// map controls
var controls = [
  new ol.control.Attribution({collapsed: true}),
  new ol.control.Zoom(),
  new ol.control.ScaleLine(),
];

// map initialization
var map = new ol.Map({
  target: 'map',
  view: view,
  layers: [base2Title, osmStyledLayerBackground, osmStyledLayerBuildings, strassenLayer, osmStyledLayerStreetsLabels, flurstueckeLayer, geotiffLayerRight, base1Title, osmLayer, segMaskLayer],
  controls: controls
});


// layer switcher
var layerSwitcher = new LayerSwitcher({
  reverse: false,
  groupSelectStyle: 'children',
  tipLabel: 'Layers',    

});
map.addControl(layerSwitcher);

// swipe control
var swipe_control = new ol.control.Swipe({
  layers: [osmLayer, segMaskLayer],
  rightLayers: [osmStyledLayerBackground, geotiffLayerRight],
});
map.addControl(swipe_control);












