import { useMemo } from "react";
import Map, { Layer, NavigationControl, Source } from "react-map-gl";
import type { SymbolLayer } from "react-map-gl";

import type { FeatureCollection } from "geojson";
import { Map as MapType } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const layerStyle: SymbolLayer = {
  id: "point",
  type: "symbol",
  layout: {
    // Define how the icon will be displayed
    "icon-image": "hotel-icon", // This must match an image added to the map's style
    "icon-size": 0.5, // Adjust the size of the icon as needed
  },
};

interface MyBookrMapProps {
  longitude: number;
  latitude: number;
}

const MybookrMap = ({ longitude, latitude }: MyBookrMapProps) => {
  const geojson = useMemo<FeatureCollection>(() => {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [longitude, latitude] },
          properties: {},
        },
      ],
    };
  }, [longitude, latitude]);

  const addIcon = (map: MapType) => {
    // Load an SVG image to be used as the icon
    map.loadImage(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAxlBMVEVHcEwnj7cojLkfj68ojbkojbknjLkojroni7cojbkojLgnjLcojLkojboojrgni7kvj78njbgnjbknjbcojboojrkmjLgojbgnjLkmi7gmjbgpjLgmjLUnircnjLgnj7kojbknjbkojboojLgnjLgojbn///9Dm8I2lL1eqcvk8fbJ4+282+mhzeGGv9fx+Puu1OWTxtyUxtx4uNOhzeBDm8Gu1OS83Ol5uNReqcqGv9iUxdxrsc/J4u7x9/vX6vJ5t9Py+Pu+vv11AAAAJXRSTlMAIO8Q379gf4Dv72Dfz3+AEM+AgJ9fUJCPkJBQUGDPYK+vr7Cg4+3vwgAAAbhJREFUeF6V1Nd22zAMgGFQy5FHG7fO7B4Aqe2VdK/3f6nSTBBLokRL/53OwXcA3gis/HfX7wMPEYPwOhJwIn8SYqOl0/gTD+1WvYTHrSadQLzF3ubCBhceOppetsEzPNHEmh8lLnFAF0cgvCFgKoCb46CW7Qfs6dC3Bkjuq+/IvQCT4O/UgE1telMR0Ra5qW/A6ggkbhigKjPS5ZI5rxDYAdTXw3RV5OxrKyIbJEWlp7NEsW+sWLRAbg7PSoWIFgj5IgYqJ1265cPbAH2I6uCPOTxBzgYRXDFICno8HB3gFkIGpPthpl3gEwQMyu3h0RagL7v6zjnUdDeghpmeBOu/mSYpcifBBiX9y/Ij8AaAFI9BMA7M4cM4EMKVBe7uM91adYJbiNrgLiVT1glmcN4GP+lXovtNqgsIgLAFdrRmbYMFALwcA2YanHsjgABeMQysAHjFAMALeIWSKSVSypJyqXv4KKiQCaVSGfAcHls83ODI7AiaP+N96ijXIBbAwQwH9BpqnTkBP8AhHPPcK88F4jdgJYJ+sOT3DjsrPoOexOfOcR/6E7NFE4Q87jI3YaBBHHy8iezp/yUfCUtk8GTTAAAAAElFTkSuQmCC",
      (error, image) => {
        if (error) throw error;

        // Add image to the style using the 'hotel-icon' ID
        if (!map.hasImage("hotel-icon") && image) {
          map.addImage("hotel-icon", image);
        }
      },
    );
  };

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 9,
      }}
      touchPitch={false}
      scrollZoom={false}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mybookrio/clw6i1re8000q01qg91ok0h12"
      onLoad={(event) => addIcon(event.target)}
    >
      <NavigationControl position="top-left" showZoom showCompass={false} />
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );
};

export default MybookrMap;
