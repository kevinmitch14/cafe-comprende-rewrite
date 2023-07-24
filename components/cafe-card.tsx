import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MultiStepForm from "./MultiStepForm/multi-step-form";
import { CafeWithReview } from "@/lib/db/schema";

export default function CafeCard({ cafe }: { cafe: CafeWithReview }) {
  const numberOfReviews = cafe.review.length;

  const averageCafeRating =
    cafe.review.reduce(
      (prev: number, current: any) => prev + current.rating,
      0,
    ) / numberOfReviews;

  const averageWifiRating =
    cafe.review.reduce(
      (prev: number, current: any) => prev + current.wifiRating,
      0,
    ) / numberOfReviews;

  const averageVibeRating =
    cafe.review.reduce(
      (prev: number, current: any) => prev + current.vibeRating,
      0,
    ) / numberOfReviews;

  const averageLocationRating =
    cafe.review.reduce(
      (prev: number, current: any) => prev + current.locationRating,
      0,
    ) / numberOfReviews;
  return (
    <Card key={cafe.placeId}>
      <CardHeader className="p-3">
        <CardTitle>{cafe.name}</CardTitle>
        <CardDescription>
          Rating:{" "}
          {Number.isInteger(averageCafeRating)
            ? averageCafeRating
            : averageCafeRating.toFixed(1)}{" "}
          / 5 - ({numberOfReviews} {numberOfReviews > 1 ? "reviews" : "review"})
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-3 pt-0">
        <MultiStepForm
          cafe={{
            ...cafe,
            averageCafeRating,
            averageLocationRating,
            averageVibeRating,
            averageWifiRating,
          }}
        />
      </CardFooter>
    </Card>
  );
}
