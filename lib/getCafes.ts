import { cache } from "react";
import { db } from "./db";
import { desc } from "drizzle-orm";
import { cafe } from "./db/schema";

export const getCafes = cache(async () => {
  const cafes = await db.query.cafe.findMany({
    with: {
      review: true,
    },
    orderBy: desc(cafe.updatedAt),
  });
  return cafes;
});
