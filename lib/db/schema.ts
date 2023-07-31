import { InferModel, relations } from "drizzle-orm";
import {
  mysqlTable,
  uniqueIndex,
  index,
  varchar,
  text,
  int,
  double,
  datetime,
  primaryKey,
} from "drizzle-orm/mysql-core";

export const account = mysqlTable(
  "Account",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    type: varchar("type", { length: 191 }).notNull(),
    provider: varchar("provider", { length: 191 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 191 }).notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: int("expires_at"),
    tokenType: varchar("token_type", { length: 191 }),
    scope: varchar("scope", { length: 191 }),
    idToken: text("id_token"),
    sessionState: varchar("session_state", { length: 191 }),
  },
  (table) => {
    return {
      providerProviderAccountIdKey: uniqueIndex(
        "Account_provider_providerAccountId_key",
      ).on(table.provider, table.providerAccountId),
      userIdIdx: index("Account_userId_idx").on(table.userId),
    };
  },
);

export const cafe = mysqlTable(
  "Cafe",
  {
    placeId: varchar("place_id", { length: 191 }).primaryKey().notNull(),
    latitude: double("latitude").notNull(),
    longitude: double("longitude").notNull(),
    name: varchar("name", { length: 191 }).notNull(),
    updatedAt: datetime("updatedAt", { mode: "string", fsp: 3 }).notNull(),
    country: varchar("country", {
      length: 2,
    })
      .notNull()
      .default("IE"),
  },
  (table) => {
    return {
      placeIdKey: uniqueIndex("Cafe_place_id_key").on(table.placeId),
    };
  },
);

export const review = mysqlTable(
  "Review",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    email: varchar("email", { length: 191 }).notNull(),
    placeId: varchar("place_id", { length: 191 }).notNull(),
    rating: int("rating").default(4).notNull(),
    wifiRating: double("wifi_rating").default(4).notNull(),
    vibeRating: double("vibe_rating").default(4).notNull(),
    locationRating: double("location_rating").default(4).notNull(),
  },
  (table) => {
    return {
      emailIdx: index("Review_email_idx").on(table.email),
      placeIdIdx: index("Review_place_id_idx").on(table.placeId),
    };
  },
);

export const session = mysqlTable(
  "Session",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    sessionToken: varchar("sessionToken", { length: 191 }).notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    expires: datetime("expires", { mode: "string", fsp: 3 }).notNull(),
  },
  (table) => {
    return {
      sessionTokenKey: uniqueIndex("Session_sessionToken_key").on(
        table.sessionToken,
      ),
      userIdIdx: index("Session_userId_idx").on(table.userId),
    };
  },
);

export const user = mysqlTable(
  "User",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    name: varchar("name", { length: 191 }),
    email: varchar("email", { length: 191 }),
    emailVerified: datetime("emailVerified", { mode: "string", fsp: 3 }),
    image: varchar("image", { length: 191 }),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("User_email_key").on(table.email),
    };
  },
);

export const verificationToken = mysqlTable(
  "VerificationToken",
  {
    identifier: varchar("identifier", { length: 191 }).notNull(),
    token: varchar("token", { length: 191 }).primaryKey().notNull(),
    expires: datetime("expires", { mode: "string", fsp: 3 }).notNull(),
  },
  (table) => {
    return {
      tokenKey: uniqueIndex("VerificationToken_token_key").on(table.token),
      identifierTokenKey: uniqueIndex(
        "VerificationToken_identifier_token_key",
      ).on(table.identifier, table.token),
    };
  },
);

export const cafeToUser = mysqlTable(
  "_CafeToUser",
  {
    a: varchar("A", { length: 191 }).notNull(),
    b: varchar("B", { length: 191 }).notNull(),
  },
  (table) => {
    return {
      abUnique: uniqueIndex("_CafeToUser_AB_unique").on(table.a, table.b),
      abIdx: index("_CafeToUser_AB_idx").on(table.b),
      cafeToUserAB: primaryKey(table.a, table.b),
    };
  },
);

export const cafeRelations = relations(cafe, ({ many }) => ({
  review: many(review),
}));
export const reviewRelations = relations(review, ({ one }) => ({
  review: one(cafe, {
    fields: [review.placeId],
    references: [cafe.placeId],
  }),
}));

export type Cafe = InferModel<typeof cafe>;
export type Review = InferModel<typeof review>;
export type CafeWithReview = Cafe & {
  review: Review[];
};
