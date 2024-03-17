import { desc, eq, or, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { cafes, reviews } from "@/lib/db/schema";

export async function getCafes(
  country?: string,
  orderBy?: any,
  cafeId?: string,
) {
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
      orderBy === "popular"
        ? desc(sql`count (*)`)
        : orderBy === "high-low"
        ? desc(sql<number>`avg_rating`)
        : // TODO DEFAULT distance from user
          desc(cafes.updatedAt),
    )
    .where(
      or(
        country ? eq(cafes.country, country) : undefined,
        cafeId ? eq(cafes.id, cafeId) : undefined,
      ),
    );
  return cafesRes;
}

export type CafeWithReviews = Awaited<ReturnType<typeof getCafes>>[number];
