// Data Sources → Add your API-Key
const maptilerURL = 'https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=YOUR-API-KEY';
const locationiqURL = 'https://tiles.locationiq.com/v3/pbf/tiles.json?key=YOUR-API-KEY';


// OSM Layer
var osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
  title: 'OpenStreeMap',
  type: 'base1',
  visible: true
});


// segMask Layer
var segMaskLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'data/predicted_masks/{z}/{x}/{y}.png',
  }),
  title: 'Predicted Land Cover Classes (uncertainty simulation through CycleGAN)',
  type: 'base1',
  visible: false
});


// Straubes uebersichtsplan Layer
const geotiffLayerRight = new ol.layer.Tile({
  source: new ol.source.XYZ({
      url: 'data/historical_maps/{z}/{x}/{y}.png',
      attributions: [`© <a href="https://gdi.berlin.de/geonetwork/srv/ger/catalog.search#/metadata/9271450c-f95a-358a-9cff-093484cb73ae" target="_blank" rel="noopener noreferrer">Staatsbibliothek zu Berlin SPK; Jul. Straube's Übersichtsplan von Berlin, Kart. X 18200</a>`]
  }),
  title: 'Straube Maps, Berlin 1910',
  type: 'base2',
  visible: true,
});


// Aerial images Berlin 1928 Layer
const aerialImageLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
      url: 'https://tiles.codefor.de/berlin/geoportal/luftbilder/1928/{z}/{x}/{y}.png',
      attributions: [`© <a href=\"https://gdi.berlin.de/geonetwork/srv/ger/catalog.search#/metadata/6b746499-7354-3a3a-aa70-60e1fb37f993\" target=\"_blank\">Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen Berlin / Luftbilder 1928, Maßstab 1:4000</a>`]
  }),
  title: 'Aerial Images, Berlin 1928',
  type: 'base2',
  visible: false
});



// OSM styled Layer
// Vector Tiles for streets and parcel boundaries
var streetSource = new ol.source.VectorTile({
  format: new ol.format.MVT(),
  url: 'data/streets_parcel_boundaries/{z}/{x}/{y}.pbf',
  attributions: [`© <a href=\"https://gdi.berlin.de/geonetwork/srv/api/records/0a7c53a5-b29d-3f45-9734-1c811045e6c2\" target=\"_blank\">Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen Berlin / ALKIS Berlin</a>`]
});

var streetLayer = new ol.layer.VectorTile({
  source: streetSource,
  style: function(feature, resolution) {
    const zoom = map.getView().getZoomForResolution(resolution);
    
    let width = 1;
    if (zoom <= 15) width = 0.05;
    else if (zoom > 15 && zoom <= 16) width = 0.1;
    else if (zoom > 16 && zoom <= 17) width = 0.4;
    else if (zoom > 17 && zoom < 18) width = 1.0;
    else if (zoom >= 18) width = 1.5;

    if (feature.get('BEZEICH') === 'AX_Strassenverkehr') {
      return new ol.style.Style({
        fill: new ol.style.Fill({ color: '#DCC894' }),
        stroke: new ol.style.Stroke({ color: '#DCC894', width: width })
      });
    } else if (feature.get('bezeich') === 'AX_Flurstueck') {
      return new ol.style.Style({
        stroke: new ol.style.Stroke({ color: '#5C5441', width: width })
      });
    } 
  },
});


// Create a VectorTile source
const osmStyledSourceBackground = new ol.source.VectorTile({
  format: new ol.format.MVT(),
  url: [locationiqURL, maptilerURL], 
});

const osmStyledSourceBuildings = new ol.source.VectorTile({
  format: new ol.format.MVT(),
  url: [locationiqURL, maptilerURL], 
});

const osmStyledSourceStreetsLabels = new ol.source.VectorTile({
  format: new ol.format.MVT(),
  url: [locationiqURL, maptilerURL], 
});


const osmStyledLayerBackground = new ol.layer.VectorTile({
  source: osmStyledSourceBackground,
  title: 'Style Transferred Historical Maps (OSM)',
  type: 'base2',
  visible: false
});

const osmStyledLayerBuildings = new ol.layer.VectorTile({
  source: osmStyledSourceBuildings,
});

const osmStyledLayerStreets = new ol.layer.VectorTile({
  source: osmStyledSourceStreetsLabels,
});

const osmStyledLayerLabels = new ol.layer.VectorTile({
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

osmStyledLayerBuildings.getSource().setAttributions('© <a href="https://locationiq.com/" target="_blank" rel="noopener noreferrer"> LocationIQ')

olms.applyStyle(osmStyledLayerStreets, 'libs/openstreetmap_style_22_alt_color.json', [      
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
            "Primary road link",
            "Trunk road link",
            "Highway road link",
            "Service road",
            "Raceway road",
            "Minor road",
            "Secondary road",
            "Tertiary road",
            "Primary road",
            "Trunk road",
            "Highway road",
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
            "Primary bridge under construction dash"
            ])
            
olms.applyStyle(osmStyledLayerLabels, 'libs/openstreetmap_style_22_alt_color.json', [            
            "Ferry line",
            "Ferry labels",
            "Road labels",
            "Tertiary road shield",
            "Secondary road shield",
            "Primary road shield",
            "Highway shield",
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


// hide layers not selected
const osmStyledGroupLayers = [
  osmStyledLayerBuildings,
  osmStyledLayerStreets,
  osmStyledLayerLabels,
  streetLayer
];

osmStyledGroupLayers.forEach(l => l.setVisible(false));

osmStyledLayerBackground.on('change:visible', function () {
  const isVisible = this.getVisible();

  osmStyledGroupLayers.forEach(layer => {
    layer.setVisible(isVisible);
  });
});


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
  layers: [base2Title, osmStyledLayerBackground, osmStyledLayerBuildings, osmStyledLayerStreets, streetLayer, osmStyledLayerLabels, geotiffLayerRight, aerialImageLayer, base1Title, osmLayer, segMaskLayer],
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
  rightLayers: [osmStyledLayerBackground, geotiffLayerRight, aerialImageLayer],
});
map.addControl(swipe_control);










