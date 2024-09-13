import { CafeList } from "@/components/cafe-list";
import { FilterPanel } from "@/components/filter-panel";
import { FilterPopover } from "@/components/filter-popover";
import type { CountryCode } from "@/lib/countries";
import type { GetCafesProps } from "@/lib/getCafes";

export function Sidebar({
  country,
  orderBy,
}: {
  country?: CountryCode;
  orderBy?: GetCafesProps["orderBy"];
}) {
  return (
    <div className="absolute left-1 z-50 flex w-[350px] min-w-[350px] flex-col gap-y-2 overflow-y-scroll px-2 pt-3">
      <FilterPanel>
        <FilterPopover />
      </FilterPanel>
      <CafeList countryCode={country} orderBy={orderBy} />
    </div>
  );
}
