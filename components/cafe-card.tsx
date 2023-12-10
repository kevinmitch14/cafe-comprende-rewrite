"use client";

import { GetCafes } from "@/components/cafe-list";
import { RateCafeForm } from "@/components/rate-cafe-form";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCafeStore } from "@/lib/store/cafe-store";

export function CafeCard({ cafe }: { cafe: GetCafes }) {
  const { setSelectedCafe, setLatitude, setLongitude } = useCafeStore();
  return (
    <Card
      className="hover:cursor-pointer"
      onClick={() => {
        setLatitude(cafe.latitude);
        setLongitude(cafe.longitude);
        setSelectedCafe(cafe);
      }}
      key={cafe.placeId}
    >
      <CardHeader className="p-3">
        <CardTitle className="truncate">{cafe.name}</CardTitle>
        <CardDescription>
          {`Rating: ${cafe.averageRating.toFixed(1)}/ 5 - ${
            cafe.numberOfReviews
          }
          ${cafe.numberOfReviews > 1 ? "reviews" : "review"}`}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-3 pt-0">
        <RateCafeForm cafe={cafe} />
      </CardFooter>
    </Card>
  );
}
