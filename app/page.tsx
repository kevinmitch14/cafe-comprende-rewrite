import MapBox from "@/components/mapbox";
import NavBar from "@/components/nav-bar";
import Sidebar from "@/components/sidebar";
import { getCafes } from "@/lib/getCafes";
import { MOCK_DATA } from "@/lib/mock-data";

export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const cafeData = await getCafes(searchParams.country?.toString() as string);
  return (
    <main>
      <NavBar />
      <div className="flex">
        <Sidebar country={searchParams.country?.toString() as string} />
        <MapBox cafeData={cafeData} />
      </div>
    </main>
  );
}
