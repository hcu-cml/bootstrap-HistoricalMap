# Bootstrapping unlimited training data for segmenting historical maps through explicit semantic layout control and automatic aleatoric uncertainty simulation - Viewer

![language](https://img.shields.io/badge/Python-v3.6-icons?logo=python&color=3776ab)
![language](https://img.shields.io/badge/JavaScript-v_NaN-icons?logo=javascript&color=f7df1e)
![language](https://img.shields.io/badge/CSS-v%20NaN-663399?logo=css&logoColor=663399)
![language](https://img.shields.io/badge/HTML-v_NaN-icons?logo=html5&color=e34f26
)

![alt text](img/fig_example_pic.png)

## Table of Contents
1. [Project Description](#project-description)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Starting the Viewer](#starting-the-viewer)
5. [Resources and Acknowledgements](#resources-and-acknowledgements)
6. [References](#references)


## Project Description

- We propose a novel method for historical map generation that utilizes state-of-the-art deep generative models, specifically Generative Adversarial Networks (GANs) and Stable Diffusion.

- Our method accepts arbitrary vector data as input to synthesize historical maps in diverse cartographic styles. 
- We demonstrate its efficacy and versatility by generating maps based on a historical urban map corpus of Berlin.

- In contrast, our method not only synthesizes historical maps but also generates corresponding semantic class annotations that can be used as ground-truth training data for deep learning models

- To further enhance the realism of the style-transferred data, we simulate corpus-specific data-dependent uncertainties, such as noise resulting from hand-drawn elements, preservation imperfections, or scanning artifacts, either manually or automatically using GAN-based or Stable Diffusion-based models.


This repository contains the source code of the visual viewer accompanying our paper:

> **Placeholder**
[Bootstrapping unlimited training data for segmenting historical
maps through explicit semantic layout control and automatic
aleatoric uncertainty simulation]() </br>
[**Lukas Arzoumanidis**](https://github.com/luarzou),
[**Julius Knechtel**](),
[**Jan-Henrik Haunert**](),
[**Youness Dehbi**](https://www.hcu-hamburg.de/en/youness-dehbi), 

- Was ist das Programm → was sieht man, wofür ist es
- evtl. nochmal kurz schreiben worum die Arbeit geht und dann schreiben was der viewer ist 

To visually match the historical Straube maps of Berlin, OpenStreetMap data was styled using a style document following the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/). 
This style document is a JSON object defining the visual appearance of a map and was created using the open-source visual editor [Maputnik](https://maputnik.github.io/).
It was then applied to the third-party tile services [Maptiler](https://www.maptiler.com/) and [locationIQ](https://locationiq.com/).  
To further match the Straube maps, additional Web Feature Services(WFS) were integrated. <br>
These and the 

### <u> Vector tile Services </u>

| Service | Information |
|:-    | :-     |
| [Maptiler](https://www.maptiler.com/) |• Provides OSM vector tiles |
|[locationIQ](https://locationiq.com/) |• Provides information about the building type <br> • Used to style state, and municipal buildings, private institutions and generic buildings differently  |

### <u> WFS Sources </u>

| Service | Usage | Description |
|:-    | :-     | :-     |
| [ALKIS Berlin Flurstücke](https://gdi.berlin.de/services/wfs/alkis_flurstuecke?service=WFS&version=2.0.0&request=getCapabilities) |• Vizualize parcel boundaries | https://daten.berlin.de/datensaetze/alkis-berlin-flurstucke-wfs-1bc014d7|
|[ALKIS Berlin](https://gdi.berlin.de/services/wfs/alkis?service=WFS&version=2.0.0&request=GetCapabilities) |• Expand streets to reach buildings | https://advmis.geodatenzentrum.de/trefferanzeige?docuuid=66e083ae-2564-3b82-9f77-0c770703f109|
|[ALKIS Berlin](https://gdi.berlin.de/services/wms/alkis?REQUEST=GetCapabilities&SERVICE=wms) |• Display ALKIS map| https://advmis.geodatenzentrum.de/trefferanzeige?docuuid=0a7c53a5-b29d-3f45-9734-1c811045e6c2|

### <u> Our own Layers </u>
- evtl. diese Sachen am Anfang einfach nennen und keine Tabelle haben

| Service | Information |
|:-    | :-     |
| SegMask |• Results of the semantic segmentation using a synthetically generated dataset → Welchen? |
|Straube Karten|• Map corpus analyzed in this study comprising 14 historical city maps of Berlin, Germany <br> • Provided by the [State Library of Berlin](https://staatsbibliothek-berlin.de/) |

https://commons.wikimedia.org/wiki/File:Straube-Plan_Berlin_1910.jpg

## Requirements
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Installation

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Starting the Viewer

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Resources and Acknowledgements
Our CycleGAN approach is based on the concept and implementation of [CycleGAN](https://colab.research.google.com/github/nivedwho/Colab/blob/main/CycleGAN.ipynb) introduced in the Paper ["Unpaired Image-to-Image Translation Using Cycle-Consistent Adversarial Networks."](https://ieeexplore.ieee.org/document/8237506) published by Jun-Yan Zhu, Taesung Park, Phillip Isola and Alexei A. Efros.

We thank [pytorch-fid](https://github.com/mseitzer/pytorch-fid) for FID calculation.



## References

### <u> Cite </u>
> **Placeholder**
<pre><code>@Article{isprs-annals-X-4-W6-2025-9-2025,
AUTHOR = {Arzoumanidis, L. and Nguyen, S. H. and Johannsen, L. and Rothaut, F. and Li, W. and Dehbi, Y.},
TITLE = {Object Detection for the Enrichment of Semantic 3D City Models with Roofing Materials},
JOURNAL = {ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences},
VOLUME = {X-4/W6-2025},
YEAR = {2025},
PAGES = {9--16},
DOI = {10.5194/isprs-annals-X-4-W6-2025-9-2025}
}</code></pre>

### <u> Previous Work </u>

[Semantic segmentation of historical maps using Self-Constructing Graph Convolutional Networks](https://www.tandfonline.com/doi/full/10.1080/15230406.2025.2468304) </br>
[**Lukas Arzoumanidis**](https://github.com/luarzou),
[**Julius Knechtel**](),
[**Jan-Henrik Haunert**](),
[**Youness Dehbi**](https://www.hcu-hamburg.de/en/youness-dehbi)



### <u> Troubleshooting </u>
In case the code is not working for you or you experience some code related problems, please consider opening an issue.