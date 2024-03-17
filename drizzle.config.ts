import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./lib/db",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL || "",
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});
