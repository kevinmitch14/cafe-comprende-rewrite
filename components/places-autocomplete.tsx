import Script from "next/script";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { BearState } from "@/lib/store/cafe-store";

// TODO use a state manager to manage the currently picked cafe can use this to zoom on map
// TODO use Expiremental Autocomplete? https://developers.google.com/maps/documentation/javascript/place-autocomplete-new
export const PlaceAutoComplete = ({
  selectedCafe,
  handleSelectCafe,
  removeSelectedCafe,
  handleInput,
  inputValue,
}: {
  selectedCafe: BearState["selectedCafe"];
  handleSelectCafe: BearState["setSelectedCafe"];
  removeSelectedCafe: () => void;
  handleInput: (val: string) => void;
  inputValue: string;
}) => {
  const initService = React.useCallback(() => {
    const options: google.maps.places.AutocompleteOptions = { types: ["cafe"] };
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    // TODO set fields for better billing (autocomplete.setFields);
    autocomplete.addListener("place_changed", () => {
      const selectedPlace = autocomplete.getPlace();
      handleSelectCafe(selectedPlace);
      handleInput(selectedPlace.name as string);
    });
  }, [handleInput, handleSelectCafe]);

  React.useEffect(() => {
    window.initService = initService;
  }, [initService]);

  return (
    <React.Fragment>
      <Script
        defer
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_LOCAL}&callback=initService&libraries=places`}
      />
      <div className="relative flex-1">
        <Input
          id="pac-input"
          type="text"
          placeholder="Enter a location..."
          autoComplete="off"
          value={inputValue}
          onChange={(evt) => handleInput(evt.target.value)}
          className="select-none border bg-background text-base"
        />
        {selectedCafe && (
          <Cross2Icon
            onClick={() => {
              removeSelectedCafe();
              handleInput("");
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
          />
        )}
      </div>
    </React.Fragment>
  );
};
