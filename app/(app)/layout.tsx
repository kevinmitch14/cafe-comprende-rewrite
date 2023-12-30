import { MapBox } from "@/components/mapbox";
import { getCafes } from "@/lib/getCafes";

export default async function AppLayout(props: { children: React.ReactNode }) {
  const cafeData = await getCafes();
  return (
    <div className="flex h-[90dvh] sm:h-[95dvh]">
      <div className="overflow-y-scroll md:w-[350px]">{props.children}</div>
      <MapBox cafeData={cafeData} />
    </div>
  );
}
