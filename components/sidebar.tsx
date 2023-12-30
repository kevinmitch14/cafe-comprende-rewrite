import { CafeList } from "@/components/cafe-list";
import { FilterPanel } from "@/components/filter-panel";
import { FilterPopover } from "@/components/filter-popover";

export function Sidebar({
  country,
  orderBy,
}: {
  country?: string;
  orderBy?: string;
}) {
  return (
    <div className="absolute z-50 flex w-[350px] min-w-[350px] flex-col gap-y-2 overflow-y-scroll px-2 pt-3 lg:static">
      <FilterPanel>
        <FilterPopover />
      </FilterPanel>
      <CafeList country={country} orderBy={orderBy} />
    </div>
  );
}
