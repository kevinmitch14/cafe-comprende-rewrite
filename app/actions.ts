"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";
import { db } from "@/lib/db";
import { cafe, review } from "@/lib/db/schema";

const newCafeReviewSchema = z.object({
  name: z.string(),
  placeId: z.string(),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
  country: z.union([z.string(), z.undefined()]).optional(),
  wifiRating: z.coerce.number(),
  locationRating: z.coerce.number(),
  vibeRating: z.coerce.number(),
});

export async function createReview(formData: FormData) {
  const entries = Object.fromEntries(formData.entries());
  const data = newCafeReviewSchema.parse(entries);

  await db
    .insert(cafe)
    .values({
      //TODO fix this @ts-ignore
      latitude: data.latitude,
      longitude: data.longitude,
      placeId: data.placeId,
      name: data.name,
      updatedAt: new Date().toISOString().substring(0, 23),
    })
    .onDuplicateKeyUpdate({
      set: { updatedAt: new Date().toISOString().substring(0, 23) },
    });
  await db.insert(review).values({
    email: "test@gmail.com",
    placeId: data.placeId,
    locationRating: data.locationRating,
    vibeRating: data.vibeRating,
    wifiRating: data.wifiRating,
  });
  revalidatePath("/");
}
