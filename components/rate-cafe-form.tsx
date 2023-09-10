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
          <DialogTitle className="flex flex-col gap-y-1">
            <span>{cafe.name}</span>
            <Badge className="peer-c self-start">
              {cafe.numberOfReviews === 1 && `${cafe.numberOfReviews} review`}
              {cafe.numberOfReviews >= 1 && `${cafe.numberOfReviews} reviews`}
              {cafe.numberOfReviews === 0 && <p>Unrated</p>}
            </Badge>
          </DialogTitle>
          <DialogDescription>{}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-5 py-2">
          <form action={handleAction}>
            <input type="hidden" name="name" value={cafe.name} />
            <input type="hidden" name="placeId" value={cafe.placeId} />
            <input type="hidden" name="latitude" value={cafe.latitude} />
            <input type="hidden" name="longitude" value={cafe.longitude} />
            {ratings.map((category) => {
              return (
                <div key={category.name} className="flex flex-col gap-y-2">
                  <div className="flex justify-between font-medium">
                    <span className="capitalize">{category.name}</span>
                    <span>{category.rating.toFixed(1)}</span>
                  </div>
                  <RadioGroup
                    required
                    name={`${category.name}Rating`}
                    className="flex"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="flex items-center space-x-2">
                        <label
                          htmlFor={`${category.name}-option-${num}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-transparent px-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 has-[:checked]:bg-accent has-[:checked]:text-accent-foreground"
                        >
                          <RadioGroupItem
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
