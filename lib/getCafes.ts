import { desc, eq, or, sql } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/lib/db";
import { cafes, reviews } from "@/lib/db/schema";
import { countryCodeSchema } from "./countries";

const OrderByOptions = ["popular", "high-low"] as const;
export const orderByOptionsSchema = z.enum(OrderByOptions).optional();

const getCafesSchema = z.object({
  cafeId: z.string().optional(),
  country: countryCodeSchema.optional(),
  orderBy: orderByOptionsSchema.optional(),
});

export type GetCafesProps = z.infer<typeof getCafesSchema>;

export type GetCafes = Awaited<ReturnType<typeof getCafes>>;

export async function getCafes(args?: GetCafesProps) {
  const cafesRes = await db
    .select({
      id: cafes.id,
      name: cafes.name,
      country: cafes.country,
      numberOfReviews: sql<number>`count (*)`,
      latitude: cafes.latitude,
      longitude: cafes.longitude,
      averageLocationRating: sql<number>`avg (${reviews.locationRating})`,
      averageWifiRating: sql<number>`avg (${reviews.wifiRating})`,
      averageVibeRating: sql<number>`avg (${reviews.vibeRating})`,
      averageRating: sql<number>`avg (${reviews.locationRating} + ${reviews.wifiRating} + ${reviews.vibeRating})/3 as avg_rating`,
    })
    .from(cafes)
    .innerJoin(reviews, eq(reviews.cafeId, cafes.id))
    .groupBy(cafes.id)
    .orderBy(
      args?.orderBy === "popular"
        ? desc(sql`count (*)`)
        : args?.orderBy === "high-low"
        ? desc(sql<number>`avg_rating`)
        : // TODO DEFAULT distance from user
          desc(cafes.updatedAt),
    )
    .where(
      or(
        args?.country ? eq(cafes.country, args.country) : undefined,
        args?.cafeId ? eq(cafes.id, args.cafeId) : undefined,
      ),
    );
  return cafesRes;
}
