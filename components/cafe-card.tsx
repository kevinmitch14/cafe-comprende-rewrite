import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetCafes } from "@/components/cafe-list";
import RateCafeForm from "@/components/rate-cafe-form";
export default function CafeCard({ cafe }: { cafe: GetCafes }) {
  return (
    <Card key={cafe.placeId}>
      <CardHeader className="p-3">
        <CardTitle>{cafe.name}</CardTitle>
        <CardDescription>
          Rating: {cafe.averageRating.toFixed(1)}/ 5 - {cafe.numberOfReviews}{" "}
          {cafe.numberOfReviews > 1 ? "reviews" : "review"}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-3 pt-0">
        <RateCafeForm cafe={cafe} />
      </CardFooter>
    </Card>
  );
}
