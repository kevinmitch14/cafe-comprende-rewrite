import { db } from "./db";
import { desc, eq } from "drizzle-orm";
import { cafe } from "./db/schema";

export const getCafes = async (country?: string) => {
  const cafes = await db.query.cafe.findMany({
    where: country ? eq(cafe.country, country) : undefined,
    with: {
      review: true,
    },
    orderBy: desc(cafe.updatedAt),
  });
  return cafes;
};

type StripArray<T> = T extends (infer U)[] ? U : never;

export type CafesWithReviews = Awaited<ReturnType<typeof getCafes>>;
export type CafeWithReviews = StripArray<CafesWithReviews>;
