import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { buttonVariants } from "../ui/button";
import { CafeWithDetailedReview } from "./multi-step-form";
import { UseFormReturn } from "react-hook-form";

type FormType = UseFormReturn<
  { wifi: number; vibe: number; location: number },
  any,
  undefined
>;

export function RatingForm({
  form,
  cafe,
}: {
  form: any;
  cafe: CafeWithDetailedReview;
}) {
  const ratings = [
    { name: "wifi", rating: cafe.averageWifiRating },
    { name: "vibe", rating: cafe.averageVibeRating },
    { name: "location", rating: cafe.averageLocationRating },
  ] as const;

  return (
    <div className="space-y-3">
      {ratings.map((category) => {
        return (
          <FormField
            key={category.name}
            control={form.control}
            name={category.name}
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>
                  <div className="flex justify-between font-medium">
                    <span>
                      How was the{" "}
                      <span className="lowercase">{category.name}</span>?
                    </span>
                    <span>
                      Avg:{" "}
                      <span
                        className={`font-semibold ${
                          category.rating >= (75 / 100) * 5
                            ? "text-emerald-500"
                            : category.rating >= (50 / 100) * 5
                            ? "text-yellow-500"
                            : category.rating >= (25 / 100) * 5
                            ? "text-orange-500"
                            : "text-rose-500"
                        }`}
                      >
                        {category.rating.toFixed(1)}
                      </span>
                    </span>
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
