"use client";

import Link from "next/link";
import { GetCafes } from "@/components/cafe-list";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEFAULT_MAP_FULL_ZOOM } from "@/lib/consts";
import { useCafeStore } from "@/lib/store/cafe-store";
import { useMapStore } from "@/lib/store/map-store";

export function CafeCard({ cafe }: { cafe: GetCafes }) {
  const { setSelectedCafe, setLatitude, setLongitude } = useCafeStore();
  const { map } = useMapStore();
  return (
    <Link href={`/cafe/${cafe.placeId}`}>
      <Card
        className="py-2"
        onClick={() => {
          map?.flyTo({
            animate: true,
            maxDuration: 500,
            center: {
              lat: cafe.latitude,
              lng: cafe.longitude,
            },
            zoom: DEFAULT_MAP_FULL_ZOOM,
          });
          setSelectedCafe({ ...cafe, type: "rated" });
        }}
        key={cafe.placeId}
      >
        <CardHeader className="p-3">
          <CardTitle className="truncate">{cafe.name}</CardTitle>
          <CardDescription>
            {`Rating: ${cafe.averageRating.toFixed(1)} - ${cafe.numberOfReviews}
          ${cafe.numberOfReviews > 1 ? "reviews" : "review"}`}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
