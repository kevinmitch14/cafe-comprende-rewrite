"use server";

import { db } from "@/lib/db";
import { review } from "@/lib/db/schema";
import { Cafe, cafe } from "@/lib/db/schema";
import { InferModel } from "drizzle-orm";

type Ratings = {
  wifi: number;
  vibe: number;
  location: number;
};

export async function addReview(cafeInfo: Cafe, ratings: Ratings) {
  const addCafe = async () => {
    await db.insert(cafe).values({
      latitude: cafeInfo.latitude,
      longitude: cafeInfo.longitude,
      name: cafeInfo.name,
      placeId: cafeInfo.placeId,
      updatedAt: new Date().toISOString(),
    });
  };

  const addReview = async () => {
    await db.insert(review).values({
      email: "kevin@gmail.com",
      placeId: cafeInfo.placeId,
      wifiRating: ratings.wifi,
      locationRating: ratings.location,
      vibeRating: ratings.vibe,
      rating: 5,
    });
  };

  await addReview();
  await addCafe();
}
