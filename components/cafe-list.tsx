import { CafeCard } from "@/components/cafe-card";
import { DETAILED_COUNTRY_INFORMATION } from "@/lib/countries";
import { type GetCafesProps, getCafes } from "@/lib/getCafes";

export async function CafeList({
  countryCode,
  orderBy,
}: {
  countryCode?: GetCafesProps["country"];
  orderBy?: GetCafesProps["orderBy"];
}) {
  const cafes = await getCafes({ country: countryCode, orderBy });
  const countryName = DETAILED_COUNTRY_INFORMATION.find(
    (i) => i.countryCode === countryCode,
  )?.name.common;

  if (countryCode && cafes.length === 0) {
    return (
      <p className="mx-auto p-4 font-medium">
        {countryName
          ? `No cafes in ${DETAILED_COUNTRY_INFORMATION.find(
              ({ countryCode }) => countryCode === countryCode,
            )?.name.common} ${DETAILED_COUNTRY_INFORMATION.find(
              ({ countryCode }) => countryCode === countryCode,
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
