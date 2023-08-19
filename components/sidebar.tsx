import React, { Suspense } from "react";
import CountrySelect from "@/components/country-select";
import { CafesWithReviews } from "@/lib/getCafes";
import CafeList from "./cafe-list";
import LoadingSpinner from "./loading-spinner";

export default function Sidebar({
  country,
}: // cafeData,
{
  country: string;
  // cafeData: CafesWithReviews;
}) {
  return (
    <div className="flex h-[calc(100vh-56px)] w-[300px] min-w-[300px] flex-col gap-y-2 overflow-y-scroll px-2 pt-2">
      <Suspense fallback={<LoadingSpinner />}>
        <CountrySelect />
      </Suspense>
      <CafeList country={country} />
    </div>
  );
}
