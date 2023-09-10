"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { ArrowRightIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { CountrySelect } from "@/components/country-select";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { createUrl } from "@/lib/utils";

const categories = ["Wifi", "Open Now", "Food", "Location", "Noise", "Price"];

export function FilterPopover() {
  const [panelOpen, setPanelOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const optionSearchParams = new URLSearchParams(searchParams.toString());
  const [isPending, startTransition] = React.useTransition();
  console.log(pathname, optionSearchParams.toString());

  function redirectToNewSearchParams(): void {
    return startTransition(() =>
      router.push(createUrl(pathname, optionSearchParams)),
    );
  }
  return (
    <Popover open={panelOpen} onOpenChange={setPanelOpen}>
      <PopoverTrigger className="shrink-0" asChild>
        <Button size={"icon"} variant={"outline"}>
          {isPending ? <LoadingSpinner /> : <MixerHorizontalIcon />}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-2">
          <React.Suspense fallback={<LoadingSpinner />}>
            <CountrySelect />
          </React.Suspense>
          {/* TODO Create a form here */}
          <Select
            onValueChange={(value) => {
              optionSearchParams.set("sort", value);
              return redirectToNewSearchParams();
            }}
          >
            <SelectTrigger>
              <SelectValue
                className="text-popover-foreground"
                placeholder="Sort by..."
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-low">
                Rating High <ArrowRightIcon className="inline" /> Low
              </SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
          <div className="grid grid-cols-3 items-center gap-1.5">
            {categories.map((category) => {
              return (
                <Toggle
                  onPressedChange={(pressed) => {
                    if (pressed) {
                      optionSearchParams.set(category.toLowerCase(), "y");
                    } else {
                      optionSearchParams.delete(category.toLowerCase());
                    }
                    return redirectToNewSearchParams();
                  }}
                  defaultPressed={searchParams.has(category.toLowerCase())}
                  className="text-xs"
                  aria-label={`Toggle ${category}`}
                  variant={"outline"}
                  size={"sm"}
                  key={crypto.randomUUID()}
                >
                  {category}
                </Toggle>
              );
            })}
          </div>
          <div className="flex gap-2">
            <Button
              className="flex-1"
              size={"sm"}
              variant={"secondary"}
              disabled={optionSearchParams.size < 1}
              onClick={() => {
                optionSearchParams.delete("country");
                optionSearchParams.delete("sort");
                categories.forEach((category) =>
                  optionSearchParams.delete(category.toLowerCase()),
                );
                setPanelOpen(false);
                return redirectToNewSearchParams();
              }}
            >
              Clear all filters
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
