'use client'
import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%", 
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

  return (
    <div className="w-full md:w-[50%] h-[300px] md:h-full rounded-lg overflow-hidden">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={(map) => (mapRef.current = map)}
        >
          {/* Use the Marker component directly - more reliable */}
          <Marker
            position={center}
            title="Our Office"
            icon={{
              url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23FF0000'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
              scaledSize: new window.google.maps.Size(32, 32),
              anchor: new window.google.maps.Point(16, 32)
            }}
          />
        </GoogleMap>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
          <p className="text-gray-600">Loading map...</p>
        </div>
      )}
    </div>
  );
}