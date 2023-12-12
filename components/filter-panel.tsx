"use client";

import React from "react";
import { PlaceAutoComplete } from "@/components/places-autocomplete";
import { useCafeStore } from "@/lib/store/cafe-store";

export function FilterPanel({ children }: { children: React.ReactNode }) {
  const { selectedCafe, setSelectedCafe, setLatitude, setLongitude } =
    useCafeStore();
  const [inputValue, setInputValue] = React.useState("");

  function handleSelectedCafe(cafe: google.maps.places.PlaceResult | null) {
    setSelectedCafe(cafe);
    setLongitude(cafe?.geometry?.location?.lng()!);
    setLatitude(cafe?.geometry?.location?.lat()!);
  }

  function handleInput(val: string) {
    setInputValue(val);
  }

  function removeSelectedCafe() {
    setSelectedCafe(null);
  }

  return (
    <React.Fragment>
      <div className="flex gap-x-1">
        <PlaceAutoComplete
          selectedCafe={selectedCafe}
          inputValue={inputValue}
          handleSelectCafe={handleSelectedCafe}
          removeSelectedCafe={removeSelectedCafe}
          handleInput={handleInput}
        />
        {children}
      </div>
    </React.Fragment>
  );
}
