import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MultiStepForm from "./ui/multi-step-form";

export default function CafeCard({ cafe }: any) {
  const accumCafeRating = cafe.reviews.reduce(
    (prev: number, current: any) => prev + current.rating,
    0,
  );
  const numberOfCafeReviews = cafe.reviews.length;
  const averageCafeRating = accumCafeRating / numberOfCafeReviews;
  return (
    <Card key={cafe.place_id}>
      <CardHeader className="p-3">
        <CardTitle>{cafe.name}</CardTitle>
        <CardDescription>
          Rating: {averageCafeRating}/5 - ({numberOfCafeReviews}{" "}
          {numberOfCafeReviews > 1 ? "reviews" : "review"})
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-x-2 p-3 pt-0">
        <MultiStepForm cafe={cafe} />
      </CardFooter>
    </Card>
  );
}
