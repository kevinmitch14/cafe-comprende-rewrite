"use client";

import { useEffect, useRef } from "react";
import { Cross2Icon, ExternalLinkIcon } from "@radix-ui/react-icons";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { GetCafes } from "@/components/cafe-list";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useCafeStore } from "@/lib/store/cafe-store";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

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
  const tempMarker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (latitude && longitude) {
      mapRef.current?.flyTo({
        center: { lat: latitude, lng: longitude },
        maxDuration: 1000,
        zoom: 15,
      });
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (tempMarker.current) tempMarker.current.remove();
    if (latitude && longitude && selectedCafe && mapRef.current) {
      tempMarker.current = new mapboxgl.Marker({ color: "#ef4444" })
        .setLngLat({ lat: latitude, lng: longitude })
        .addTo(mapRef.current as mapboxgl.Map);
    }
  }, [latitude, longitude, selectedCafe]);

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
    const geolocationControl = new mapboxgl.GeolocateControl({
      fitBoundsOptions: {
        duration: 0,
        animate: false,
        maxDuration: 0,
        zoom: 12,
      },
    });
    const navigationControl = new mapboxgl.NavigationControl();
    mapRef.current.addControl(navigationControl, "bottom-right");
    mapRef.current.addControl(geolocationControl, "bottom-right");
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

  useEffect(() => {
    if (!mapContainer.current) return;
    const resizeObserver = new ResizeObserver(() => {
      mapRef.current?.resize();
    });
    resizeObserver.observe(mapContainer.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="flex-1">
      <div
        className="relative inset-0 h-full w-full rounded-md"
        ref={mapContainer}
      >
        <div className="absolute bottom-0 w-full">
          <Drawer
            modal={false}
            open={!!selectedCafe}
            onClose={() => setSelectedCafe(null)}
            snapPoints={[0.3, 0.5, 1]}
          >
            <DrawerContent className="mx-[-1px] flex h-full max-h-[97%] flex-col rounded-t-[10px] border md:hidden">
              <div className={"mx-auto w-full max-w-md space-y-4 p-4 pt-5"}>
                <DrawerTitle>{selectedCafe?.name}</DrawerTitle>
                <div className="flex gap-x-1">
                  <a
                    // TODO cleanup this TS mess :(
                    href={`https://www.google.com/maps/dir/?api=1&destination_place_id=${
                      selectedCafe && "place_id" in selectedCafe
                        ? selectedCafe?.place_id
                        : selectedCafe && "placeId" in selectedCafe
                        ? selectedCafe?.placeId
                        : null
                    }&destination=${
                      selectedCafe && "place_id" in selectedCafe
                        ? selectedCafe?.place_id
                        : selectedCafe && "placeId" in selectedCafe
                        ? selectedCafe?.placeId
                        : null
                    }`}
                  >
                    <Badge
                      className="flex items-center gap-x-1"
                      variant={"secondary"}
                    >
                      Directions
                      <ExternalLinkIcon className="h-3 w-3 text-blue-500" />
                    </Badge>
                  </a>
                </div>
              </div>
              <DrawerClose
                onClick={() => setSelectedCafe(null)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
              >
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
