"use client";

import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  Cross2Icon,
  PlusCircledIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { RemoveScroll } from "react-remove-scroll";
import { GetCafes } from "@/components/cafe-list";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  DEFAULT_MAP_FULL_ZOOM,
  DEFAULT_MAP_LATITUDE,
  DEFAULT_MAP_LONGITUDE,
} from "@/lib/consts";
import { type BearState, useCafeStore } from "@/lib/store/cafe-store";
import { useMapStore } from "@/lib/store/map-store";
import { Button } from "./ui/button";

const sampleImages = [
  "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
];

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
  const { map: zustandMap, setMap } = useMapStore();

  const cafeId = useSelectedLayoutSegments()[1];
  const activeCafe = cafeData.find((c) => c.placeId === cafeId)!;
  if (activeCafe && !selectedCafe) {
    setSelectedCafe({ type: "rated", ...activeCafe });
  }

  const mapCenter = zustandMap?.getCenter();
  if (
    selectedCafe &&
    selectedCafe.type === "rated" &&
    mapCenter?.lat === DEFAULT_MAP_LATITUDE &&
    mapCenter?.lng === DEFAULT_MAP_LONGITUDE
  ) {
    zustandMap?.flyTo({
      center: {
        lat: selectedCafe.latitude,
        lng: selectedCafe.longitude,
      },
      zoom: DEFAULT_MAP_FULL_ZOOM,
      animate: false,
    });
  }
  const mapContainer = useRef<any>(null);
  const tempMarker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!zustandMap) return;
    if (tempMarker.current) tempMarker.current.remove();
    if (latitude && longitude && selectedCafe && zustandMap) {
      tempMarker.current = new mapboxgl.Marker({ color: "#ef4444" })
        .setLngLat({ lat: latitude, lng: longitude })
        .addTo(zustandMap as mapboxgl.Map);
    }
  }, [zustandMap, latitude, longitude, selectedCafe]);

  // TODO after DragEvent, do new serch
  useEffect(() => {
    if (zustandMap) return; // initialize map only once
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v8",
      center: {
        lat: latitude ? Number(latitude) : DEFAULT_MAP_LATITUDE,
        lon: longitude ? Number(longitude) : DEFAULT_MAP_LONGITUDE,
      },
      zoom: latitude && longitude ? DEFAULT_MAP_FULL_ZOOM : 3,
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
        zoom: DEFAULT_MAP_FULL_ZOOM,
      },
    });
    const navigationControl = new mapboxgl.NavigationControl();
    map.addControl(navigationControl, "bottom-right");
    map.addControl(geolocationControl, "bottom-right");
    map.on("load", () => geolocationControl.trigger());
    cafeData.forEach((cafe) => {
      const marker = new mapboxgl.Marker()
        .setLngLat({ lat: cafe.latitude, lng: cafe.longitude })
        .addTo(map);
      marker.getElement().addEventListener("click", () => {
        map.flyTo({
          duration: 500,
          zoom:
            map.getZoom() > 6
              ? map.getZoom()
              : latitude && longitude
              ? DEFAULT_MAP_FULL_ZOOM
              : 6,
          center: { lat: cafe.latitude, lng: cafe.longitude },
        });
        setSelectedCafe({ ...cafe, type: "rated" });
        setLatitude(cafe.latitude);
        setLongitude(cafe.longitude);
      });
    });
    setMap(map);
  }, [
    cafeData,
    latitude,
    longitude,
    setSelectedCafe,
    setLatitude,
    setLongitude,
    zustandMap,
    setMap,
  ]);

  useEffect(() => {
    if (!mapContainer.current || !zustandMap) return;
    const resizeObserver = new ResizeObserver(() => {
      zustandMap.resize();
    });
    resizeObserver.observe(mapContainer.current);
    return () => resizeObserver.disconnect();
  }, [zustandMap]);

  return (
    <div className="flex-1">
      <div
        className="relative inset-0 h-full w-full rounded-md"
        ref={mapContainer}
      />
      <CafeDrawer selectedCafe={selectedCafe} />
    </div>
  );
}

function CafeDrawer({
  selectedCafe,
}: {
  selectedCafe: BearState["selectedCafe"];
}) {
  const { setSelectedCafe } = useCafeStore();

  if (!selectedCafe) return;
  return (
    <Drawer
      modal={false}
      open={!!selectedCafe}
      onClose={() => setSelectedCafe(null)}
      snapPoints={[0.4, 0.9]}
    >
      <DrawerPortal>
        <DrawerContent className="mx-[-1px] h-full max-h-[97%] flex-col border bg-background md:hidden">
          <div className={"mx-auto w-full max-w-md space-y-3 p-4 pt-5"}>
            <DrawerTitle>{selectedCafe.name}</DrawerTitle>
            {/* https://github.com/emilkowalski/vaul/issues/168 */}
            <CafeDrawerContent cafe={selectedCafe} />
          </div>
          <DrawerClose
            onClick={() => setSelectedCafe(null)}
            className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
          >
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DrawerClose>
        </DrawerContent>
      </DrawerPortal>
      <DrawerOverlay />
    </Drawer>
  );
}

function CafeDrawerContent({
  cafe,
}: {
  cafe: NonNullable<BearState["selectedCafe"]>;
}) {
  if (cafe.type === "google")
    return (
      <>
        <div className="flex items-center gap-x-1 text-sm font-medium text-muted-foreground">
          <StarFilledIcon />
          {cafe.rating}
        </div>
        {cafe.photos && (
          <RemoveScroll className="flex snap-x snap-mandatory items-center gap-x-2 overflow-x-auto">
            {cafe.photos.map((photo) => {
              const url = photo.getUrl();
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  width={150}
                  height={150}
                  src={url}
                  alt={`Image for ${cafe.name}`}
                  key={url}
                  className="aspect-square snap-center snap-always rounded-lg"
                />
              );
            })}
          </RemoveScroll>
        )}{" "}
      </>
    );
  return (
    <>
      <div className="flex items-center gap-x-1 text-sm font-medium text-muted-foreground">
        <StarFilledIcon />
        {cafe.averageRating.toFixed(1)}
      </div>
      <RemoveScroll className="flex snap-x snap-mandatory items-center gap-x-2 overflow-x-auto">
        {[...sampleImages, ...sampleImages].map((link, idx) => (
          <Image
            key={idx}
            width={150}
            height={150}
            className="aspect-square snap-center snap-always rounded-lg"
            src={link}
            alt={`Image ${idx}`}
          />
        ))}
        <Button asChild className="h-auto" variant={"secondary"}>
          <div className="flex min-w-[150px] snap-center snap-always flex-col items-center justify-center gap-2 self-stretch rounded-lg bg-muted">
            <PlusCircledIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground">
              Add photo
            </span>
          </div>
        </Button>
      </RemoveScroll>
    </>
  );
}
