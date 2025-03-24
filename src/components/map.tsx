"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

const markerIconUrl = "/marker-icon.png";
const markerShadowUrl = "/marker-shadow.png";

export default function Map({ latitude, longitude }: any) {
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    setCustomIcon(
      new L.Icon({
        iconUrl: markerIconUrl,
        shadowUrl: markerShadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })
    );
  }, []);

  if (!customIcon) return <p>Cargando mapa...</p>;

  return (
    <MapContainer
      center={{
        lat: latitude,
        lng: longitude,
      }}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={{
          lat: latitude,
          lng: longitude,
        }}
        icon={customIcon}
      >
      </Marker>
    </MapContainer>
  );
}
