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

const formSchema = z.object({
  name: z.string().min(1),
  placeId: z.string().min(3),
  latitude: z.string(),
  longitude: z.string(),
});

type ActionResult =
  | {
      type: "success";
      message: string;
    }
  | {
      type: "error";
      errors: Record<string, string[] | undefined>;
    }
  | { type: undefined; message: null };

function wait(ms: number): Promise<void> {
  // Wait for the specified amount of time
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function action(_: ActionResult, payload: FormData) {
  // await wait(500);
  console.log(Object.fromEntries(payload.entries()));
  const result = formSchema.safeParse(Object.fromEntries(payload.entries()));

  console.dir(
    { data: Object.fromEntries(payload.entries()), result },
    { depth: null },
  );

  if (result.success) {
    return {
      type: "success" as const,
      message: JSON.stringify(result),
    };
  }
  return {
    type: "error" as const,
    errors: result.error.flatten().fieldErrors,
  };
}
