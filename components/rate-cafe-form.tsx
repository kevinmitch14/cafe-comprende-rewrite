"use client";

import React from "react";
import { createReview } from "@/app/actions";
import { GetCafes } from "@/components/cafe-list";
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
import { detailedCountryInformation } from "@/lib/countries";
import { upperFirstChar } from "@/lib/utils";

export function RateCafeForm({ cafe }: { cafe: GetCafes }) {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const ratings = [
    { name: "wifi", rating: cafe.averageWifiRating },
    { name: "vibe", rating: cafe.averageVibeRating },
    { name: "location", rating: cafe.averageLocationRating },
  ] as const;

  function closeDialog() {
    setDialogOpen(false);
  }

  async function handleAction(formData: FormData) {
    await createReview(formData);
    closeDialog();
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
              {cafe.numberOfReviews >= 1 && `${cafe.numberOfReviews} reviews`}
              {cafe.numberOfReviews === 0 && <p>Unrated</p>}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            <span className="text-sm font-medium">
              {
                detailedCountryInformation.find(
                  (country) => country.cca2 === cafe.country,
                )?.name.common
              }
            </span>
            <span>
              {cafe.latitude} - {cafe.longitude}
            </span>
          </DialogDescription>
        </DialogHeader>
        <form action={handleAction} className="flex flex-col gap-y-4 py-2">
          <input type="hidden" name="name" value={cafe.name} />
          <input type="hidden" name="placeId" value={cafe.placeId} />
          <input type="hidden" name="latitude" value={cafe.latitude} />
          <input type="hidden" name="longitude" value={cafe.longitude} />
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
