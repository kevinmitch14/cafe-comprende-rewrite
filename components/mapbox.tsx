"use client";

import { useEffect, useRef } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { GetCafes } from "@/components/cafe-list";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
        className="relative inset-0 h-full w-full rounded-tl-md"
        ref={mapContainer}
      >
        <div className="absolute bottom-0 w-full">
          <Sheet modal={false} open={!!selectedCafe}>
            <SheetContent
              className="absolute rounded-t-lg border-2"
              side={"bottom"}
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3">
                  {selectedCafe?.name}
                </SheetTitle>
                <SheetDescription>
                  A short description about this cafe.
                </SheetDescription>
                <div className="flex gap-x-1">
                  <Badge variant={"secondary"}>Open Now</Badge>
                  <Badge variant={"secondary"}>Directions</Badge>
                </div>
                <SheetClose
                  onClick={() => setSelectedCafe(null)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                >
                  <Cross2Icon className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
