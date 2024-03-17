import { CafeCard } from "@/components/cafe-card";
import { detailedCountryInformation } from "@/lib/countries";
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
  const countryName = detailedCountryInformation.find(
    (i) => i.countryCode === country,
  )?.name.common;

  if (country && cafes.length === 0) {
    return (
      <p className="mx-auto p-4 font-medium">
        {countryName
          ? `No cafes in ${detailedCountryInformation.find(
              (c) => c.countryCode === country,
            )?.name.common} ${detailedCountryInformation.find(
              (c) => c.countryCode === country,
            )?.flag}`
          : "Please chose a valid country."}
      </p>
    );
  }
  return (
    <div className="hidden gap-y-2 md:flex md:flex-col">
      {cafes.map((cafe) => (
        <CafeCard key={cafe.id} cafe={cafe} />
      ))}
    </div>
  );
}
