import { desc, eq, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { cafe, review } from "@/lib/db/schema";

export async function getCafes(country?: string, orderBy?: any) {
  const cafes = await db
    .select({
      placeId: cafe.placeId,
      name: cafe.name,
      country: cafe.country,
      numberOfReviews: sql<number>`count (*)`,
      latitude: cafe.latitude,
      longitude: cafe.longitude,
      averageLocationRating: sql<number>`avg (${review.locationRating})`,
      averageWifiRating: sql<number>`avg (${review.wifiRating})`,
      averageVibeRating: sql<number>`avg (${review.vibeRating})`,
      averageRating: sql<number>`avg (${review.locationRating} + ${review.wifiRating} + ${review.vibeRating})/3 as avg_rating`,
    })
    .from(cafe)
    .innerJoin(review, eq(review.placeId, cafe.placeId))
    .groupBy(cafe.placeId)
    .orderBy(
      orderBy === "popular"
        ? desc(sql`count (*)`)
        : orderBy === "high-low"
        ? desc(sql<number>`avg_rating`)
        : // TODO DEFAULT distance from user
          desc(cafe.updatedAt),
    )
    .where(country ? eq(cafe.country, country) : undefined);
  return cafes;
}

export type CafeWithReviews = Awaited<ReturnType<typeof getCafes>>[number];
