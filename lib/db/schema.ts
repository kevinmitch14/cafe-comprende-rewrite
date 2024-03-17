import { InferSelectModel, sql } from "drizzle-orm";
import {
  index,
  integer,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const cafes = sqliteTable("cafes", {
  id: text("id", { length: 191 }).primaryKey(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  name: text("name", { length: 191 }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s'))` as unknown as Date),
  country: text("country_code", {
    length: 2,
  }),
});

export const reviews = sqliteTable(
  "reviews",
  {
    id: integer("id").primaryKey(),
    email: text("email", { length: 191 }).notNull(),
    rating: real("rating").default(4).notNull(),
    wifiRating: real("wifi_rating").notNull(),
    vibeRating: real("vibe_rating").notNull(),
    locationRating: real("location_rating").notNull(),
    cafeId: text("cafe_id", { length: 191 })
      .notNull()
      .references(() => cafes.id),
  },
  (table) => {
    return {
      placeIdIdx: index("place_id_idx").on(table.cafeId),
    };
  },
);

export type Cafe = InferSelectModel<typeof cafes>;
export type Review = InferSelectModel<typeof reviews>;
export type CafeWithReview = Cafe & {
  review: Review[];
};
