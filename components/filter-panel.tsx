"use client";

import React from "react";
import { PlaceAutoComplete } from "@/components/places-autocomplete";
import { useCafeStore } from "@/lib/store/cafe-store";

export function FilterPanel({ children }: { children: React.ReactNode }) {
  const { setSelectedCafe, setLatitude, setLongitude } = useCafeStore();
  const [inputValue, setInputValue] = React.useState("");

  function handleSelectedCafe(cafe: google.maps.places.PlaceResult | null) {
    setSelectedCafe(cafe);
    setLongitude(cafe?.geometry?.location?.lng()!);
    setLatitude(cafe?.geometry?.location?.lat()!);
  }

  function handleInput(val: string) {
    setInputValue(val);
  }

  return (
    <React.Fragment>
      <div className="flex gap-x-1">
        <PlaceAutoComplete
          inputValue={inputValue}
          handleSelectCafe={handleSelectedCafe}
          handleInput={handleInput}
        />
        {children}
      </div>
    </React.Fragment>
  );
}
