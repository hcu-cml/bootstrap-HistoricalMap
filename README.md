# Bootstrapping unlimited training data for segmenting historical maps through explicit semantic layout control and automatic aleatoric uncertainty simulation - Viewer

![language](https://img.shields.io/badge/Python-v3.6-icons?logo=python&color=3776ab)
<!-- ![language](https://img.shields.io/badge/JavaScript-ES2017-icons?logo=javascript&color=f7df1e) 
![language](https://img.shields.io/badge/CSS-3-663399?logo=css&logoColor=663399)
![language](https://img.shields.io/badge/HTML-5-icons?logo=html5&color=e34f26
)
![Node.js](https://img.shields.io/badge/Node.js-v20.0+-green?logo=node.js) -->



![alt text](img/fig_example_pic.png)

## Table of Contents
1. [Project Description](#project-description)
2. [Layers](#layers)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Starting the Viewer](#starting-the-viewer)
5. [Resources and Acknowledgements](#resources-and-acknowledgements)
6. [References](#references)


## Project Description

This repository contains the source code for the visual viewer that accompanies our paper:

[Bootstrapping unlimited training data for segmenting historical
maps through explicit semantic layout control and automatic
aleatoric uncertainty simulation]() </br>
[**Lukas Arzoumanidis**](https://scholar.google.com/citations?user=cbWaN7MAAAAJ&hl=en),
[**Julius Knechtel**](https://www.igg.uni-bonn.de/geoinfo/en/team/knechtel),
[**Jan-Henrik Haunert**](https://www.igg.uni-bonn.de/geoinfo/en/team/haunert),
[**Youness Dehbi**](https://www.hcu-hamburg.de/en/youness-dehbi),  


 Which proposes a novel method for historical map generation that utilizes state-of-the-art deep generative models, specifically Generative Adversarial Networks (GANs) and Stable Diffusion. Our method accepts arbitrary vector data as input to synthesize historical maps in diverse cartographic styles. In addition to historical maps, it generates corresponding semantic class annotations for land cover classes that can be used as ground-truth training data for deep learning models.

In our paper, we demonstrate the efficacy and versatility of our method by generating maps based on a historical urban map corpus of Berlin. This viewer presents the predicted land cover classes alongside the historical map corpus and OpenStreetMap (OSM) data styled to match the historical maps.

## Layers

| Layer | Information |
|:-    | :-     |
| Bootstrapped Historical Maps (OSM)| v.i. |
|Straube Maps|• Map corpus analysed in this study comprising 14 historical city maps of Berlin, Germany <br> • Provided by the [State Library of Berlin](https://staatsbibliothek-berlin.de/) |
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



## Requirements
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Installation

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Starting the Viewer

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Resources and Acknowledgements
Our CycleGAN approach is based on the concept and implementation of [CycleGAN](https://colab.research.google.com/github/nivedwho/Colab/blob/main/CycleGAN.ipynb), introduced in the paper ["Unpaired Image-to-Image Translation Using Cycle-Consistent Adversarial Networks."](https://ieeexplore.ieee.org/document/8237506) published by Jun-Yan Zhu, Taesung Park, Phillip Isola and Alexei A. Efros.

We thank [pytorch-fid](https://github.com/mseitzer/pytorch-fid) for FID calculation.



## References

### <u> Cite </u>

<pre><code>@Article{bootstrapHistoricalMaps,
AUTHOR = {},
TITLE = {},
JOURNAL = {},
YEAR = {2026},
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
[**Sethmiya Herath Mudiyanselage**](https://www.researchgate.net/profile/Sethmiya-Herath-Mudiyanselage),
[**Youness Dehbi**](https://www.hcu-hamburg.de/en/youness-dehbi)



### <u> Troubleshooting </u>
In case the code is not working for you or you experience some code related problems, please consider opening an issue.

