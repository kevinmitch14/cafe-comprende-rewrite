import { getCafes } from "@/lib/getCafes";
import CafeCard from "./cafe-card";
import { countryCodeToName } from "@/lib/countries";

export type GetCafes = Awaited<ReturnType<typeof getCafes>>[0];

export default async function CafeList({
  country,
  orderBy,
}: {
  country?: string;
  orderBy?: string;
}) {
  const cafes = await getCafes(country, orderBy);
  if (country && cafes.length === 0) {
    return (
      <p className="mx-auto p-4 font-medium">
        {`No cafes in ${countryCodeToName.get(country)}.`}
      </p>
    );
  }
  return cafes.map((cafe) => <CafeCard key={cafe.placeId} cafe={cafe} />);
}
