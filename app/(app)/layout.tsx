import { MapBox } from "@/components/mapbox";
import { NavBar } from "@/components/nav-bar";
import { getCafes } from "@/lib/getCafes";

export default async function AppLayout(props: { children: React.ReactNode }) {
  const cafeData = await getCafes();
  return (
    <>
      <NavBar />
      <div className="flex h-[95dvh] md:h-[93dvh]">
        <div className="overflow-y-scroll md:w-[350px]">{props.children}</div>
        <MapBox cafeData={cafeData} />
      </div>
    </>
  );
}
