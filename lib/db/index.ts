import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

if (!process.env.TURSO_DB_URL) {
  throw new Error("no TURSO_DB_URL found");
}
const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
export const db = drizzle(client, { schema, logger: true });
