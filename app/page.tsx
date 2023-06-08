import CafeCard from "@/components/cafe-card";
import { db } from "@/lib/db";
import { cafe } from "@/lib/db/schema";
import { MOCK_DATA } from "@/lib/mock-data";
import { desc } from "drizzle-orm";

export default async function Home() {
  const data = await db.query.cafe.findMany({
    with: {
      review: true,
    },
    orderBy: desc(cafe.updatedAt),
  });
  return (
    <main>
      <h1>Hello World</h1>
      {data.map((cafe) => {
        return <CafeCard key={cafe.placeId} cafe={cafe} />;
      })}
    </main>
  );
}
