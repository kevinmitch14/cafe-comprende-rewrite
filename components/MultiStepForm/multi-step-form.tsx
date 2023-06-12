"use client";

import { useMultistepForm } from "@/lib/useMultiStepForm";
import { Button, buttonVariants } from "../ui/button";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "../ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { addReview } from "@/app/actions";
import InitialFormStep from "./initial-step";
import { RatingForm } from "./rating-step";
import { CafeWithReview } from "@/lib/db/schema";

const FormSchema = z.object({
  wifi: z.enum(["1", "2", "3", "4", "5"]),
  vibe: z.enum(["1", "2", "3", "4", "5"]),
  location: z.enum(["1", "2", "3", "4", "5"]),
});

export type CafeWithDetailedReview = CafeWithReview & {
  averageCafeRating: number;
  averageLocationRating: number;
  averageVibeRating: number;
  averageWifiRating: number;
};

export default function MultiStepForm({
  cafe,
}: {
  cafe: CafeWithDetailedReview;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { step, stepIndex, isFirstStep, isLastStep, nextStep, previousStep } =
    useMultistepForm([
      <InitialFormStep key="initial" cafe={cafe} />,
      <RatingForm form={form} key="form" cafe={cafe} />,
    ]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await addReview(cafe, data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setDialogOpen(false);
  }
  const [dialogOpen, setDialogOpen] = useState(false);
  const numberOfCafeReviews = cafe.review.length;

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          Rate
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex flex-col gap-y-1">
              <span>{cafe.name}</span>
              <Badge className="peer-c self-start">
                {numberOfCafeReviews}{" "}
                {numberOfCafeReviews > 1 ? "reviews" : "review"}
              </Badge>
            </DialogTitle>
            <DialogDescription>
              Harold&apos;s Cross, Dublin 12, Ireland
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={(e) => e.preventDefault()}>{step}</form>
          </Form>
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
            {isLastStep ? (
              <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
            ) : (
              <Button onClick={nextStep}>Review</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
