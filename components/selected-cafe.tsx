import Image from "next/image";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { RateCafeForm } from "@/components/rate-cafe-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { detailedCountryInformation } from "@/lib/countries";

function getCountry(address: google.maps.GeocoderAddressComponent[]) {
  return address.find((item) => item.types.includes("country"))!.long_name;
}

export function SelectedCafe({
  selectedCafe,
  handleSelectCafe,
  handleInput,
}: {
  selectedCafe: google.maps.places.PlaceResult | null;
  handleSelectCafe: (val: google.maps.places.PlaceResult | null) => void;
  handleInput: (val: string) => void;
}) {
  if (!selectedCafe) return;
  return (
    <Card className="my-1.5 mt-3 min-w-[340px] p-3">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle>{selectedCafe.name}</CardTitle>
          <Button variant={"ghost"} size={"icon"} className="h-auto w-auto p-1">
            <Cross2Icon
              onClick={() => {
                handleSelectCafe(null);
                handleInput("");
              }}
            />
          </Button>
        </div>
        <CardDescription>{selectedCafe.formatted_address}</CardDescription>
        <CardContent className="p-0">
          {selectedCafe.photos ? (
            <div className="grid grid-cols-3 gap-1">
              {selectedCafe.photos?.map((photo, idx) => {
                const numberOfPhotos = selectedCafe.photos?.length;
                if (idx >= numberOfPhotos! - (numberOfPhotos! % 3)) return;
                return (
                  <div key={idx} className="relative h-20">
                    <Image
                      // TODO fix images in prod, allowed domains next image
                      key={crypto.randomUUID()}
                      src={photo.getUrl()}
                      alt=""
                      fill
                      sizes="100px"
                      className="h-auto rounded-md border object-cover"
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
        </CardContent>
      </CardHeader>
      <CardContent className="p-0"></CardContent>
      <CardFooter className="flex justify-end p-0 pt-2">
        {/* TODO implement */}
        <RateCafeForm
          cafe={{
            averageLocationRating: 4,
            averageVibeRating: 4,
            averageRating: 3,
            averageWifiRating: 5,
            country:
              detailedCountryInformation.find(
                (c) =>
                  c.name.common ===
                  getCountry(selectedCafe.address_components!).toLowerCase(),
              )?.cca2 || "",
            latitude: selectedCafe.geometry?.location?.lat()!,
            longitude: selectedCafe.geometry?.location?.lng()!,
            name: selectedCafe.name!,
            placeId: selectedCafe.place_id!,
            numberOfReviews: 3,
          }}
        />
      </CardFooter>
    </Card>
  );
}
