import React from "react";
import CafeList from "@/components/cafe-list";
import FilterPanel from "@/components/filter-panel";
import FilterPopover from "@/components/filter-popover";

export default function Sidebar({
  country,
  orderBy,
}: {
  country?: string;
  orderBy?: string;
}) {
  return (
    <div className="flex h-[calc(100vh-56px)] w-[350px] min-w-[350px] flex-col gap-y-2 overflow-y-scroll pl-2 pt-2">
      <FilterPanel>
        <FilterPopover />
      </FilterPanel>
      <CafeList country={country} orderBy={orderBy} />
    </div>
  );
}
