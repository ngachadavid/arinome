'use client'
import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: -1.327295,
  lng: 36.850602,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (isLoaded && mapRef.current && window.google && window.google.maps) {
      // ✅ Access AdvancedMarkerElement safely in JS
      const AdvancedMarkerElement =
        window.google.maps.marker.AdvancedMarkerElement;

      new AdvancedMarkerElement({
        map: mapRef.current,
        position: center,
        title: "Our Office",
      });
    }
  }, [isLoaded]);

  return (
    <div className="hidden md:flex md:w-[40%] md:h-[500px]">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={(map) => (mapRef.current = map)}
        />
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}
