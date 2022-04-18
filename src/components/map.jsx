import { useEffect, useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import getCenter from "geolib/es/getCenter";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

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

  const [selectedLocation, setSelectedLocation] = useState(null);
  //images url
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    if (listings?.imageSlideshow !== null) {
      let tmp = [];
      listings?.imageSlideshow?.map((f) => {
        if (f.asset?.url !== undefined) {
          tmp = [...tmp, f.asset.url];
        }
      });

      setUrls(tmp);
    }
  }, [listings?.imageSlideshow]);
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
        </div>
      ))}
      {selectedLocation && (
        <Popup
          onClose={() => setSelectedLocation(null)}
          closeButton={true}
          latitude={selectedLocation.location.lat}
          longitude={selectedLocation.location.lng}
          anchor="bottom"
          offsetTop={-12}
          id="popup"
        >
          <div className="popup_info">
            <img
              className="popup_image"
              src={selectedLocation.listingImages[0].asset.url}
            />
            <div id="tile_ratings" className="popup_ratings_container">
              <StarIcon className="popup_icon" />
              <p className="popup_rating">{selectedLocation.rating} </p>
              <p className="popup_number">
                ({selectedLocation.numberOfReviews})
              </p>
            </div>
            <p className="popup_title">{selectedLocation.name}</p>
            <p className="popup_price">
              <span className="popup_bold">£{selectedLocation.price}</span>{" "}
              night
            </p>
          </div>
        </Popup>
      )}
    </ReactMapGl>
  );
};

export default MapList;
