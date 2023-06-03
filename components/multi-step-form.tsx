"use client";

import { useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMultistepForm } from "@/lib/useMultiStepForm";
import { cn } from "@/lib/utils";
import ArrowRightIcon from "./icons/arrow-right-icon";
import LoadingSpinner from "./icons/loading-spinner";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import RatingBar from "./ui/rating-bar";
import { toast } from "./ui/use-toast";

function InitialStep() {
  return (
    <div className="flex flex-col gap-y-5 py-2">
      {ratings.map((category) => {
        return (
          <div key={category.name} className="flex flex-col gap-y-2">
            <div className="flex justify-between font-medium">
              <span>{category.name}</span>
              <span>{(category.rating / 20).toFixed(1)}</span>
            </div>
            <RatingBar percent={category.rating} />
          </div>
        );
      })}
    </div>
  );
}

const ratings = [
  { name: "Wifi", rating: (3.2 / 5) * 100 },
  { name: "Ambience", rating: (4.2 / 5) * 100 },
  { name: "Location", rating: (4.7 / 5) * 100 },
] as const;
const categories = ["wifi", "ambience", "location"] as const;

export default function MultiStepForm({ cafe }: { cafe: any }) {
  const { step, isFirstStep, isLastStep, nextStep, previousStep, resetStep } =
    useMultistepForm([
      <InitialStep key="initial" />,
      // TODO: change key of stepContent to animate
      <div key={"rating"} className="flex flex-col gap-y-2">
        {categories.map((metric) => {
          return (
            <div key={metric} className="animate-in fade-in duration-500">
              <div className="flex justify-between font-medium">
                <span>How was the {metric}?</span>
                <span>3.8</span>
              </div>
              {/* <form className="flex gap-x-1"> */}
              <RadioGroup
                name="rating"
                className="flex gap-x-1"
                defaultValue="option-one"
              >
                {/* <div className="flex items-center space-x-2"> */}
                <RadioGroupItem value="1" className="sr-only" id="option-one" />
                <Label htmlFor="option-one">
                  <Button variant={"outline"}>1</Button>
                </Label>
                {/* </div> */}
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={"2"}
                    className="sr-only"
                    id="option-one"
                  />
                  <Label htmlFor="option-one">
                    <Button variant={"outline"}>2</Button>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={"3"}
                    className="sr-only"
                    id="option-one"
                  />
                  <Label htmlFor="option-one">
                    <Button variant={"outline"}>3</Button>
                  </Label>
                </div>
              </RadioGroup>
              {/* </form> */}
            </div>
          );
        })}
      </div>,
    ]);
  // const accumCafeRating = cafe.reviews.reduce(
  //   (prev: number, current: any) => prev + current.rating,
  //   0,
  // );
  const numberOfCafeReviews = cafe.reviews.length;
  let [isPending, startTransition] = useTransition();
  const [dialogOpen, setDialogOpen] = useState(false);
  // const averageCafeRating = accumCafeRating / numberOfCafeReviews;

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
      >
        Rate
      </DialogTrigger>
      <DialogContent>
        {/* <form action={() => addItem(10)}> */}
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-y-1">
            <span>{cafe.name}</span>
            <Badge className="self-start">
              {numberOfCafeReviews}{" "}
              {numberOfCafeReviews > 1 ? "reviews" : "review"}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Harold&apos;s Cross, Dublin 12, Ireland
          </DialogDescription>
          <div className="py-6">
            <div>{step}</div>
          </div>
        </DialogHeader>
        <DialogFooter
          className={`${
            isFirstStep ? "justify-end" : "justify-between sm:justify-between"
          } flex flex-row`}
        >
          {!isFirstStep && (
            <Button
              className="gap-x-1"
              size={"sm"}
              variant={"link"}
              onClick={previousStep}
            >
              <ArrowRightIcon className="h-3 w-3 rotate-180" />
              <span>Back</span>
            </Button>
          )}
          {isFirstStep ? (
            <Button
              size={"sm"}
              onClick={nextStep}
              className="min-w-[45px] self-end"
            >
              Review
            </Button>
          ) : isLastStep ? (
            <Button
              size={"sm"}
              disabled={isPending}
              type="submit"
              onClick={() => {
                startTransition(async () => {
                  // await wait(1000);
                  toast({
                    title: "Review added!",
                    description: "Thank you for your input",
                    duration: 2000,
                  });
                  setDialogOpen(false);
                  resetStep();
                });
              }}
              className="min-w-[70px]"
            >
              {isPending ? <LoadingSpinner /> : "Submit"}
            </Button>
          ) : (
            <Button size={"sm"} onClick={nextStep} className="min-w-[45px]">
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          )}
        </DialogFooter>
        {/* </form> */}
      </DialogContent>
    </Dialog>
  );
}
