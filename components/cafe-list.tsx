import { getCafes } from "@/lib/getCafes";
import CafeCard from "./cafe-card";
import { countryCodeToName } from "@/lib/countries";

export default async function CafeList({ country }: { country: string }) {
  const cafes = await getCafes(country);
  if (cafes.length === 0) {
    return (
      <p className="mx-auto p-4 font-medium">
        {`No cafes in ${countryCodeToName.get(country)}.`}
      </p>
    );
  }
  return cafes.map((cafe) => <CafeCard cafe={cafe} key={cafe.placeId} />);
}
