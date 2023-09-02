import MapBox from "@/components/mapbox";
import NavBar from "@/components/nav-bar";
import Sidebar from "@/components/sidebar";
import { getCafes } from "@/lib/getCafes";
import { MOCK_DATA } from "@/lib/mock-data";

export const runtime = "edge";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const country = searchParams.country;
  const orderBy = searchParams.sort;
  const cafeData = await getCafes(country, orderBy);
  return (
    <main>
      <NavBar />
      <div className="flex">
        <Sidebar country={country} orderBy={orderBy} />
        <MapBox cafeData={cafeData} />
      </div>
    </main>
  );
}
