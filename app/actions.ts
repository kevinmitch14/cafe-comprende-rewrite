"use server";

import { CafeWithDetailedReview } from "@/components/MultiStepForm/multi-step-form";
import { db } from "@/lib/db";
import { review } from "@/lib/db/schema";
import { cafe } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";

type Ratings = {
  wifi: string;
  vibe: string;
  location: string;
};

export async function addReview(
  selectedCafe: CafeWithDetailedReview,
  ratings: Ratings,
) {
  const values = {
    latitude: 10,
    longitude: 10,
    placeId: selectedCafe.placeId,
    name: selectedCafe.name,
    updatedAt: new Date().toISOString().substring(0, 23),
  };
  await db
    .insert(cafe)
    .values(values)
    .onDuplicateKeyUpdate({
      set: { updatedAt: new Date().toISOString().substring(0, 23) },
    });
  await db.insert(review).values({
    email: "test@gmail.com",
    placeId: selectedCafe.placeId,
    locationRating: Number(ratings.location),
    vibeRating: Number(ratings.vibe),
    wifiRating: Number(ratings.wifi),
    // rating: 5,
  });
  revalidatePath("/");
}
