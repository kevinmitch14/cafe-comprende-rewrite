import { getCafes } from "@/lib/getCafes";
import CafeCard from "./cafe-card";

export default async function CafeList({ country }: { country: string }) {
  const cafes = await getCafes(country);

  return cafes.map((cafe) => <CafeCard cafe={cafe} key={cafe.placeId} />);
}
