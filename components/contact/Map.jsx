'use client'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';

// Create custom marker from Lucide MapPin
const redPinIcon = new L.DivIcon({
  className: "",
  html: ReactDOMServer.renderToString(<MapPin size={32} color="red" />),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function Map() {
  const position = [-1.327295, 36.850602];

  return (
    <div className="hidden md:flex md:w-[40%] md:h-[500px]">
      <MapContainer center={position} zoom={15} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position} icon={redPinIcon}>
          <Popup>Our Office Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
