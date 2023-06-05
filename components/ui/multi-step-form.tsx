"use client";

import { useMultistepForm } from "@/lib/useMultiStepForm";
import { Button, buttonVariants } from "./button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "./use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import RatingBar from "./rating-bar";

const FormSchema = z.object({
  wifi: z.enum(["1", "2", "3", "4", "5"], {}),
  vibe: z.enum(["1", "2", "3", "4", "5"], {}),
  location: z.enum(["1", "2", "3", "4", "5"], {}),
});

const categories = ["wifi", "vibe", "location"] as const;
const ratings = [
  { name: "Wifi", rating: (3.2 / 5) * 100 },
  { name: "Vibe", rating: (4.2 / 5) * 100 },
  { name: "Location", rating: (4.7 / 5) * 100 },
] as const;

export function InitialFormStep() {
  return (
    <div className="flex flex-col gap-y-5 py-2">
      {ratings.map((category) => {
        return (
          <>
            <div key={category.name} className="flex flex-col gap-y-2">
              <div className="flex justify-between font-medium">
                <span>{category.name}</span>
                <span>{(category.rating / 20).toFixed(1)}</span>
              </div>
              <RatingBar percent={category.rating} />
            </div>
          </>
        );
      })}
    </div>
  );
}
export function RatingForm({ form }: { form: any }) {
  return (
    <div className="space-y-3">
      {categories.map((category) => {
        return (
          <FormField
            key={category}
            control={form.control}
            name={category}
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>
                  <div className="flex justify-between font-medium">
                    <span>How was the {category}?</span>
                    <span>Avg: 3.8</span>
                  </div>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-x-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => {
                      return (
                        <FormItem
                          key={num}
                          className="flex items-center gap-x-2"
                        >
                          <FormControl className="sr-only">
                            <RadioGroupItem
                              value={num.toString()}
                              className="peer"
                            />
                          </FormControl>
                          <FormLabel className="rounded-md hover:bg-blue-50 peer-aria-checked:bg-blue-50 peer-aria-checked:hover:bg-blue-50">
                            <div
                              className={cn(
                                buttonVariants({ variant: "outline" }),
                                "hover:bg-blue-50",
                              )}
                            >
                              {num}
                            </div>
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        );
      })}
    </div>
  );
}

export default function MultiStepForm({ cafe }: { cafe: any }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { step, stepIndex, isFirstStep, isLastStep, nextStep, previousStep } =
    useMultistepForm([
      <InitialFormStep key="initial" />,
      <RatingForm form={form} key="form" />,
    ]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
  const numberOfCafeReviews = 10;
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
