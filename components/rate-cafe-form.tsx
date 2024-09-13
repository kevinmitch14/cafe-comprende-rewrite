"use client";

import React from "react";
import { createReview } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DETAILED_COUNTRY_INFORMATION } from "@/lib/countries";
import { upperFirstChar } from "@/lib/utils";

function getCountry(address: google.maps.GeocoderAddressComponent[]) {
  return address.find((item) => item.types.includes("country"))!.short_name;
}

export function RateCafeFormGoogle(cafe: GoogleCafe) {
  // TODO need to check if this is a rated cafe already
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { setSelectedCafe } = useCafeStore();

  function closeDialog() {
    setDialogOpen(false);
  }

  const cafeCountryInfo = DETAILED_COUNTRY_INFORMATION.find(
    ({ countryCode }) => countryCode === getCountry(cafe.address_components!),
  );

  const latitude = cafe.geometry?.location?.lat();
  const longitude = cafe.geometry?.location?.lng();

  async function handleAction(formData: FormData) {
    await createReview(formData);
    closeDialog();
    setSelectedCafe(null);
  }

  const ratings = [
    { name: "wifi" },
    { name: "vibe" },
    { name: "location" },
  ] as const;

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} variant={"outline"}>
          Rate this cafe
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader className="px-4">
          <DialogTitle className="mt-4 flex items-center justify-between gap-y-1">
            <span>{cafe.name}</span>
          </DialogTitle>
          <DialogDescription asChild>
            <div className="flex items-center gap-x-2">
              {cafeCountryInfo && (
                <>
                  <span className="text-sm font-medium">
                    {cafeCountryInfo.flag}
                  </span>
                  <span className="text-sm font-medium">
                    {cafeCountryInfo.name.common}
                  </span>
                </>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
        <form action={handleAction} className="flex flex-col gap-y-4 py-2">
          <input type="hidden" name="name" value={cafe.name} />
          <input type="hidden" name="placeId" value={cafe.place_id} />
          <input type="hidden" name="latitude" value={latitude} />
          <input type="hidden" name="longitude" value={longitude} />
          <input
            type="hidden"
            name="country"
            value={cafeCountryInfo?.countryCode ?? ""}
          />
          {ratings.map((category) => {
            return (
              <div key={category.name} className="space-y-2 px-4">
                <div className="text-sm font-medium text-gray-900">
                  <span>{upperFirstChar(category.name)}</span>
                </div>
                <RadioGroup
                  required
                  name={`${category.name}Rating`}
                  className="flex gap-x-4"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num}>
                      <label
                        htmlFor={`${category.name}-option-${num}`}
                        className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-input bg-transparent px-3 text-sm font-medium shadow-sm transition-colors duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 has-[:checked]:bg-black has-[:checked]:text-white "
                      >
                        <RadioGroupItem
                          required
                          className="hidden"
                          value={num.toString()}
                          id={`${category.name}-option-${num}`}
                        />
                        {num}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            );
          })}
          <SubmitButton className="mt-4">Submit</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export function RateCafeForm({ cafe }: { cafe: RatedCafe }) {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { setSelectedCafe } = useCafeStore();

  const ratings = [
    { name: "wifi", rating: cafe.averageWifiRating },
    { name: "vibe", rating: cafe.averageVibeRating },
    { name: "location", rating: cafe.averageLocationRating },
  ] as const;

  const cafeCountryInfo = detailedCountryInformation.find(
    ({ countryCode }) => countryCode === cafe.country,
  );
  function closeDialog() {
    setDialogOpen(false);
  }

  async function handleAction(formData: FormData) {
    await createReview(formData);
    closeDialog();
    setSelectedCafe(null);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} variant={"outline"}>
          Rate this cafe
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mt-4 flex items-center justify-between gap-y-1">
            <span>{cafe.name}</span>
            <Badge variant="secondary">
              {cafe.numberOfReviews === 1 && `${cafe.numberOfReviews} review`}
              {cafe.numberOfReviews > 1 && `${cafe.numberOfReviews} reviews`}
              {cafe.numberOfReviews === 0 && <p>Unrated</p>}
            </Badge>
          </DialogTitle>
          <DialogDescription asChild>
            <div className="flex items-center gap-x-2">
              {cafeCountryInfo && (
                <span className="text-sm font-medium">
                  {cafeCountryInfo.name.common}
                </span>
              )}
              <span className="font-medium text-blue-500">
                {cafe.latitude.toFixed(4)}, {cafe.longitude.toFixed(4)}
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <form action={handleAction} className="flex flex-col gap-y-4 py-2">
          <input type="hidden" name="name" value={cafe.name} />
          <input type="hidden" name="placeId" value={cafe.id} />
          <input type="hidden" name="latitude" value={cafe.latitude} />
          <input type="hidden" name="longitude" value={cafe.longitude} />
          <input type="hidden" name="country" value={cafe.country} />
          {ratings.map((category) => {
            return (
              <div key={category.name}>
                <div className="flex justify-between font-medium">
                  <span>{upperFirstChar(category.name)}</span>
                  <span>{category.rating.toFixed(1)}</span>
                </div>
                <RadioGroup
                  required
                  name={`${category.name}Rating`}
                  className="flex"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center gap-x-2">
                      <label
                        htmlFor={`${category.name}-option-${num}`}
                        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-input bg-transparent px-3 text-sm font-medium shadow-sm transition-colors duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 has-[:checked]:bg-black has-[:checked]:text-white "
                      >
                        <RadioGroupItem
                          required
                          className="hidden"
                          value={num.toString()}
                          id={`${category.name}-option-${num}`}
                        />
                        {num}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            );
          })}
          <SubmitButton className="mt-4">Submit</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
