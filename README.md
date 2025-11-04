# Domain-Adaptive Semantic Segmentation For Historical Map Corpora Using Synthetically Generated Training Data

![language](https://img.shields.io/badge/Python-v3.6-icons?logo=python&color=3776ab)
![language](https://img.shields.io/badge/JavaScript-icons?logo=javascript&color=5b5b5b) 
![language](https://img.shields.io/badge/CSS-5b5b5b?logo=css&logoColor=663399)
![language](https://img.shields.io/badge/HTML-icons?logo=html5&color=5b5b5b)


![alt text](img/fig_example_pic.png)


## Project Description

This repository contains the source code for our paper:

[Domain-adaptive semantic segmentation for homogeneous cartographic domains with uncertainty-aware synthetic data bootstrapping]() </br>
[**Lukas Arzoumanidis**](https://scholar.google.com/citations?user=cbWaN7MAAAAJ&hl=en),
[**Julius Knechtel**](https://www.igg.uni-bonn.de/geoinfo/en/team/knechtel),
[**Jan-Henrik Haunert**](https://www.igg.uni-bonn.de/geoinfo/en/team/haunert),
[**Youness Dehbi**](https://www.hcu-hamburg.de/en/youness-dehbi),

We showcase our method’s effectiveness by generating historical-style maps of Berlin via style transfer from an original historical map corpus. The predicted land cover classes, historical maps, and styled OSM data can be explored in our interactive web viewer: http://www.historicalmaps.luarzou.de/

## Domain-adaptive semantic segmentation
test

## Layers

| Layer | Information |
|:-    | :-     |
| Bootstrapped Historical Maps (OSM)| v.i. |
|Straube Maps|• Map corpus analysed in this study comprising 39 historical city maps of Berlin, Germany <br> • Provided by the [State Library of Berlin](https://staatsbibliothek-berlin.de/) |
| [OSM](https://www.openstreetmap.org/) | • Shows the default OSM tile style|
| Predicted Land Cover Classes |• Results of the semantic segmentation using a synthetically generated dataset |
| [ALKIS Berlin](https://www.berlin.de/sen/sbw/stadtdaten/geoinformation/liegenschaftskataster/alkis/)| • Shows a map of Germany’s Authoritative Cadastral Information System (ger.  Amtliches Liegenschaftskatasterinformationssystem, ALKIS) |


### Bootstrapped Historical Maps (OSM)

To visually match the historical Straube maps of Berlin, OpenStreetMap data was styled using a style document following the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/). 
This style document is a JSON object defining the visual appearance of a map and was created using the open-source visual editor [Maputnik](https://maputnik.github.io/).
It was then applied to third-party tile services. 
To further match the Straube maps, additional Web Feature Services(WFS) were integrated. <br>

#### <u> Vector tile Services </u>

| Service | Information |
|:-    | :-     |
| [Maptiler](https://www.maptiler.com/) |• Provides OSM vector tiles |
|[locationIQ](https://locationiq.com/) |• Provides information on building types <br> • Used to style state and municipal buildings, private institutions and generic buildings differently  |

#### <u> WFS Sources </u>

| Service | Usage | Description |
|:-    | :-     | :-     |
| [ALKIS Berlin Flurstücke](https://gdi.berlin.de/services/wfs/alkis_flurstuecke?service=WFS&version=2.0.0&request=getCapabilities) |• Visualise the parcel boundaries | https://daten.berlin.de/datensaetze/alkis-berlin-flurstucke-wfs-1bc014d7|
|[ALKIS Berlin](https://gdi.berlin.de/services/wfs/alkis?service=WFS&version=2.0.0&request=GetCapabilities) |• Expand the streets to reach the buildings | https://advmis.geodatenzentrum.de/trefferanzeige?docuuid=66e083ae-2564-3b82-9f77-0c770703f109|

## Setup & Starting the Viewer

You can host the viewer using Nginx or Apache2. The repository provides the source code with the basic viewer setup (excluding data and API keys). Before deployment, add your historical maps and predicted land use classes to the <code>data</code> directory.

## Resources and Acknowledgements

We thank [pytorch-fid](https://github.com/mseitzer/pytorch-fid) for FID calculation.


## References

### <u> Test Dataset </u>

The used test dataset can be found [here]().

### <u> Cite </u>

<pre><code>@Article{bootstrapHistoricalMaps,
AUTHOR = {},
TITLE = {},
JOURNAL = {},
YEAR = {},
PAGES = {x--x},
DOI = {}
}</code></pre>

### <u> Previous Work </u>

[Semantic segmentation of historical maps using Self-Constructing Graph Convolutional Networks](https://www.tandfonline.com/doi/full/10.1080/15230406.2025.2468304) </br>
[**Lukas Arzoumanidis**](https://scholar.google.com/citations?user=cbWaN7MAAAAJ&hl=en),
[**Julius Knechtel**](https://www.igg.uni-bonn.de/geoinfo/en/team/knechtel),
[**Jan-Henrik Haunert**](https://www.igg.uni-bonn.de/geoinfo/en/team/haunert),
[**Youness Dehbi**](https://www.hcu-hamburg.de/en/youness-dehbi)


[Deep Generation of Synthetic Training Data for the Automated Extraction of Semantic Knowledge from Historical Maps](https://ica-abs.copernicus.org/articles/7/7/2024/index.html) </br>
[**Lukas Arzoumanidis**](https://scholar.google.com/citations?user=cbWaN7MAAAAJ&hl=en),
**James Ormond Fethers**,
**Sethmiya Herath Mudiyanselage**,
[**Youness Dehbi**](https://www.hcu-hamburg.de/en/youness-dehbi)



### <u> Troubleshooting </u>
In case the code is not working for you or you experience some code related problems, please consider opening an issue.

