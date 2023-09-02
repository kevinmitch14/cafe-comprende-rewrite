"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { GetCafes } from "@/components/cafe-list";

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

export default function MapBox({ cafeData }: { cafeData: GetCafes[] }) {
  const mapContainer = useRef<any>(null);
  const mapRef = useRef<any>(null);
  useEffect(() => {
    if (mapRef.current) return; // initialize map only once
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v8",
      center: [12.4193, 50.7751],
      zoom: 3,
      bearing: 0,
      pitch: 0,
      minZoom: 2,
      projection: { name: "mercator" },
    });
    mapRef.current.addControl(new mapboxgl.GeolocateControl());
    const navigationControl = new mapboxgl.NavigationControl();
    mapRef.current.addControl(navigationControl, "top-right");
    cafeData.forEach((cafe) => {
      const popup = new mapboxgl.Popup({ offset: 1, focusAfterOpen: false })
        .setLngLat([cafe.longitude, cafe.latitude])
        .setHTML(`<p>${cafe.name}</p>`)
        .addTo(mapRef.current);
      new mapboxgl.Marker()
        .setLngLat([cafe.longitude, cafe.latitude])
        .setPopup(popup)
        .addTo(mapRef.current);
    });
  }, [cafeData]);

  return (
    <div className="flex-1 pl-2 pt-2">
      <div
        className="inset-0 h-full w-full rounded-tl-md"
        ref={mapContainer}
      ></div>
    </div>
  );
}
