import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import getCenter from "geolib/es/getCenter";

const MapList = ({ listings }) => {
  const coordinates = listings.map((result) => ({
    longitude: result.location.lng,
    latitude: result.location.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    zoom: 11,
    latitude: center.latitude,
    longitude: center.longitude,
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/designedhead2/cl1wi76mz001h15oal9q4f4ks"
      mapboxApiAccessToken="pk.eyJ1IjoiZGVzaWduZWRoZWFkMiIsImEiOiJjbDF3aTYycmczYXZpM2xtbTRqZHpza3UyIn0.R-wCaH1raG2XQwjcDltj4Q"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {listings.map((result, i) => (
        <div key={i}>
          <Marker
            longitude={result.location.lng}
            latitude={result.location.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div
              onClick={() => setSelectedLocation(result)}
              className="map_marker"
            >
              £{result.price}
            </div>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.location.lat}
              longitude={result.location.lng}
            >
              {result.name}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGl>
  );
};

export default MapList;
