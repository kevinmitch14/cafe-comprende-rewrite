"use client";

import React from "react";
import { PlaceAutoComplete } from "@/components/places-autocomplete";
import { SelectedCafe } from "@/components/selected-cafe";

export function FilterPanel({ children }: { children: React.ReactNode }) {
  const [selectedCafe, setSelectedCafe] =
    React.useState<google.maps.places.PlaceResult | null>(null);
  const [inputValue, setInputValue] = React.useState("");

  function handleSelectedCafe(cafe: google.maps.places.PlaceResult | null) {
    setSelectedCafe(cafe);
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
      <SelectedCafe
        selectedCafe={selectedCafe}
        handleSelectCafe={handleSelectedCafe}
        handleInput={handleInput}
      />
    </React.Fragment>
  );
}
