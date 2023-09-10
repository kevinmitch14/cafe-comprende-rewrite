import Script from "next/script";
import React from "react";
import { Input } from "@/components/ui/input";

// TODO use a state manager to manage the currently picked cafe can use this to zoom on map
// TODO use Expiremental Autocomplete? https://developers.google.com/maps/documentation/javascript/place-autocomplete-new
export const PlaceAutoComplete = ({
  handleSelectCafe,
  handleInput,
  inputValue,
}: {
  handleSelectCafe: (cafe: google.maps.places.PlaceResult) => void;
  handleInput: (val: string) => void;
  inputValue: string;
}) => {
  const initService = React.useCallback(() => {
    const options = { types: ["cafe"] };
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    // TODO set fields for better billing (autocomplete.setFields);
    autocomplete.addListener("place_changed", () => {
      const selectedPlace = autocomplete.getPlace();
      console.log(selectedPlace);
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
      <Input
        id="pac-input"
        type="text"
        placeholder="Enter a location..."
        autoComplete="off"
        value={inputValue}
        onChange={(evt) => handleInput(evt.target.value)}
        className="flex-1"
      />
    </React.Fragment>
  );
};
