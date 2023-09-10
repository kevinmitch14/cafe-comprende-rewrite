import { CafeCard } from "@/components/cafe-card";
import { countryCodeToName } from "@/lib/countries";
import { getCafes } from "@/lib/getCafes";

export type GetCafes = Awaited<ReturnType<typeof getCafes>>[0];

export async function CafeList({
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
