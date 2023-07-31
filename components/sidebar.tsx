import { MOCK_DATA } from "@/lib/mock-data";
import React from "react";
import CafeCard from "@/components/cafe-card";
import CountrySelect from "@/components/country-select";
import { countryCodeToName } from "@/lib/countries";
import { Button } from "./ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { CafesWithReviews } from "@/lib/getCafes";

export default function Sidebar({
  country,
  cafeData,
}: {
  country: string;
  cafeData: CafesWithReviews;
}) {
  const filteredCafeData = [...cafeData].filter(
    (cafe) => cafe.country === country,
  );
  const noFilter = country === undefined;
  return (
    <div className="flex h-[calc(100vh-56px)] w-[300px] min-w-[300px] flex-col gap-y-2 overflow-y-scroll px-2 pt-2">
      <CountrySelect />
      {noFilter
        ? cafeData.map((cafe) => {
            return <CafeCard key={cafe.placeId} cafe={cafe} />;
          })
        : filteredCafeData.map((cafe) => {
            return <CafeCard key={cafe.placeId} cafe={cafe} />;
          })}
      {!noFilter && filteredCafeData.length === 0 && (
        <div className="flex flex-col items-center gap-y-2 py-4">
          <p>No cafes in {countryCodeToName.get(country)} yet.</p>
          <Button>
            Add a cafe! <PlusCircledIcon className="ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
