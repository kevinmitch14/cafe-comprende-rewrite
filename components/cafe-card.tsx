"use client";

import Link from "next/link";
import { GetCafes } from "@/components/cafe-list";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCafeStore } from "@/lib/store/cafe-store";

export function CafeCard({ cafe }: { cafe: GetCafes }) {
  const { setSelectedCafe, setLatitude, setLongitude } = useCafeStore();
  return (
    <Link href={`/cafe/${cafe.placeId}`} prefetch={false}>
      <Card
        className="py-2"
        onClick={() => {
          setLatitude(cafe.latitude);
          setLongitude(cafe.longitude);
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
