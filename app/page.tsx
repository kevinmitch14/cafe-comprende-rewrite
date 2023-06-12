import CafeCard from "@/components/cafe-card";
import NavBar from "@/components/nav-bar";
import { getCafes } from "@/lib/getCafes";

export default async function Home() {
  const cafeData = await getCafes();

  return (
    <main>
      {/* @ts-ignore */}
      <NavBar />
      <div className="flex">
        <div className="flex max-h-[calc(100vh-56px)] flex-col gap-y-2 overflow-y-scroll px-2 pt-2">
          {cafeData.map((cafe) => {
            return <CafeCard key={cafe.placeId} cafe={cafe} />;
          })}
        </div>
      </div>
    </main>
  );
}
