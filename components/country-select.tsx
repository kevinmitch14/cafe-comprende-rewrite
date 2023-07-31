"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
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

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { countryCodeToName, countryNameToCode } from "@/lib/countries";

const countries = [
  { value: "united states", label: "United States" },
  { value: "china", label: "China" },
  { value: "japan", label: "Japan" },
  { value: "germany", label: "Germany" },
  { value: "united kingdom", label: "United Kingdom" },
  { value: "india", label: "India" },
  { value: "france", label: "France" },
  { value: "italy", label: "Italy" },
  { value: "canada", label: "Canada" },
  { value: "south korea", label: "South Korea" },
  { value: "australia", label: "Australia" },
  { value: "russia", label: "Russia" },
  { value: "brazil", label: "Brazil" },
  { value: "spain", label: "Spain" },
  { value: "mexico", label: "Mexico" },
  { value: "indonesia", label: "Indonesia" },
  { value: "netherlands", label: "Netherlands" },
  { value: "switzerland", label: "Switzerland" },
  { value: "saudi arabia", label: "Saudi Arabia" },
  { value: "turkey", label: "Turkey" },
  { value: "taiwan", label: "Taiwan" },
  { value: "poland", label: "Poland" },
  { value: "sweden", label: "Sweden" },
  { value: "belgium", label: "Belgium" },
  { value: "austria", label: "Austria" },
  { value: "united arab emirates", label: "United Arab Emirates" },
  { value: "norway", label: "Norway" },
  { value: "iran", label: "Iran" },
  { value: "nigeria", label: "Nigeria" },
  { value: "israel", label: "Israel" },
  { value: "ireland", label: "Ireland" },
  { value: "hong kong", label: "Hong Kong" },
  { value: "denmark", label: "Denmark" },
  { value: "singapore", label: "Singapore" },
  { value: "malaysia", label: "Malaysia" },
  { value: "philippines", label: "Philippines" },
  { value: "pakistan", label: "Pakistan" },
  { value: "finland", label: "Finland" },
  { value: "south africa", label: "South Africa" },
  { value: "thailand", label: "Thailand" },
  { value: "colombia", label: "Colombia" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "vietnam", label: "Vietnam" },
  { value: "egypt", label: "Egypt" },
  { value: "argentina", label: "Argentina" },
  { value: "algeria", label: "Algeria" },
  { value: "ukraine", label: "Ukraine" },
  { value: "chile", label: "Chile" },
  { value: "iraq", label: "Iraq" },
  { value: "peru", label: "Peru" },
];

export default function CountrySelect() {
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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? countries.find((country) => country.value === value)?.label
            : "Select country..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="max-h-96">
          <CommandInput placeholder="Search country..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {countries.map((country) => (
              <CommandItem
                key={country.value}
                onSelect={(currentValue) => {
                  currentValue === value
                    ? router.push(pathname)
                    : router.push(
                        pathname +
                          "?" +
                          createQueryString("country", country.value),
                      );
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
  );
}
