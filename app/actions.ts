"use server";

import { revalidatePath } from "next/cache";
import { sql } from "drizzle-orm";
import * as z from "zod";
import { db } from "@/lib/db";
import { cafes, reviews } from "@/lib/db/schema";

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
    .insert(cafes)
    .values({
      id: data.placeId,
      latitude: data.latitude,
      longitude: data.longitude,
      name: data.name,
      country: data.country,
    })
    .onConflictDoUpdate({
      set: { updatedAt: sql`(strftime('%s'))` },
      target: cafes.id,
    });

  await db.insert(reviews).values({
    email: "test@gmail.com",
    cafeId: data.placeId,
    locationRating: data.locationRating,
    vibeRating: data.vibeRating,
    wifiRating: data.wifiRating,
  });
  revalidatePath("/");
}
