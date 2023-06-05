import CafeCard from "@/components/cafe-card";
import { MOCK_DATA } from "@/lib/mock-data";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {MOCK_DATA.map((cafe) => {
        return <CafeCard key={cafe.place_id} cafe={cafe} />;
      })}
    </main>
  );
}
