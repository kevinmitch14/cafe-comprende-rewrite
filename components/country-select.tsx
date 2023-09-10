"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  countryCodeToName,
  countryLabels,
  countryNameToCode,
} from "@/lib/countries";
import { cn } from "@/lib/utils";

export function CountrySelect() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = React.useState(
    countryCodeToName.get(searchParams.get("country")!) || "",
  );
  const pathname = usePathname();
  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      // @ts-ignore
      const params = new URLSearchParams(searchParams);
      params.set(name, countryNameToCode.get(value)!);
      return params.toString();
    },
    [searchParams],
  );

  const [isPending, startTransition] = React.useTransition();
  return (
    <div className="flex flex-1 items-center justify-between gap-x-1">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={isPending}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={
              "w-full justify-between px-3 font-normal hover:bg-background"
            }
            aria-label="Country filter dropdown"
          >
            {value
              ? countryLabels.find((country) => country.value === value)?.label
              : "Select country..."}
            {isPending ? (
              <LoadingSpinner className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            ) : (
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command className="max-h-96 w-full">
            <CommandInput placeholder="Search country..." className="h-9" />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className="overflow-scroll">
              {countryLabels.map((country) => (
                <CommandItem
                  key={country.value}
                  onSelect={(currentValue) => {
                    currentValue === value
                      ? router.push(pathname)
                      : startTransition(() => {
                          router.push(
                            pathname +
                              "?" +
                              createQueryString("country", country.value),
                          );
                        });
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {country.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
