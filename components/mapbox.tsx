"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { GetCafes } from "@/components/cafe-list";
import { useCafeStore } from "@/lib/store/cafe-store";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

const markerHeight = 50;
const markerRadius = 10;
const linearOffset = 25;

const popupOffsets = {
  top: [0, 0],
  "top-left": [0, 0],
  "top-right": [0, 0],
  bottom: [0, -markerHeight],
  "bottom-left": [
    linearOffset,
    (markerHeight - markerRadius + linearOffset) * -1,
  ],
  "bottom-right": [
    -linearOffset,
    (markerHeight - markerRadius + linearOffset) * -1,
  ],
  left: [markerRadius, (markerHeight - markerRadius) * -1],
  right: [-markerRadius, (markerHeight - markerRadius) * -1],
};

// TODO needs marker for temporary searched cafe.
export function MapBox({ cafeData }: { cafeData: GetCafes[] }) {
  const {
    selectedCafe,
    setSelectedCafe,
  latitude,
  longitude,
    setLatitude,
    setLongitude,
  } = useCafeStore();

  const mapContainer = useRef<any>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (latitude && longitude) {
      mapRef.current?.flyTo({
        center: {
          lat: latitude!,
          lng: longitude!,
        },
        maxDuration: 1000,
        zoom: 15,
      });
    }
  }, [latitude, longitude]);

  // TODO after DragEvent, do new serch
  useEffect(() => {
    if (mapRef.current) return; // initialize map only once
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v8",
      center: {
        lat: latitude ? Number(latitude) : 40,
        lon: longitude ? Number(longitude) : 2,
      },
      zoom: latitude && longitude ? 10 : 3,
      bearing: 0,
      pitch: 0,
      minZoom: 2,
      projection: { name: "mercator" },
    });
    const geolocationControl = new mapboxgl.GeolocateControl();
    const navigationControl = new mapboxgl.NavigationControl();
    mapRef.current.addControl(navigationControl, "top-right");
    mapRef.current.addControl(geolocationControl);
    mapRef.current.on("load", () => geolocationControl.trigger());
    cafeData.forEach((cafe) => {
      const marker = new mapboxgl.Marker()
        .setLngLat({ lat: cafe.latitude, lng: cafe.longitude })
        .addTo(mapRef.current as mapboxgl.Map);
      marker.getElement().addEventListener("click", () => {
        mapRef.current?.flyTo({
          duration: 500,
          zoom:
            mapRef.current.getZoom() > 6
              ? mapRef.current.getZoom()
              : latitude && longitude
              ? 10
              : 6,
          center: { lat: cafe.latitude, lng: cafe.longitude },
        });
        setSelectedCafe(cafe);
        setLatitude(cafe.latitude);
        setLongitude(cafe.longitude);
      });
    });
  }, [
    cafeData,
    latitude,
    longitude,
    setSelectedCafe,
    setLatitude,
    setLongitude,
  ]);

  return (
    <div className="flex-1 pl-2 pt-2">
      <div
        className="inset-0 h-full w-full rounded-tl-md"
        ref={mapContainer}
      ></div>
    </div>
  );
}
