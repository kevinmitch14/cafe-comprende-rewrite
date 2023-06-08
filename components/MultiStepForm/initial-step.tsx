import RatingBar from "../ui/rating-bar";
import { CafeWithDetailedReview } from "./multi-step-form";

export default function InitialFormStep({
  cafe,
}: {
  cafe: CafeWithDetailedReview;
}) {
  const ratings = [
    { name: "wifi", rating: cafe.averageWifiRating },
    { name: "vibe", rating: cafe.averageVibeRating },
    { name: "location", rating: cafe.averageLocationRating },
  ] as const;

  return (
    <div className="flex flex-col gap-y-5 py-2">
      {ratings.map((category) => {
        return (
          <div key={category.name} className="flex flex-col gap-y-2">
            <div className="flex justify-between font-medium">
              <span className="capitalize">{category.name}</span>
              <span>{category.rating.toFixed(1)}</span>
            </div>
            <RatingBar percent={category.rating} />
          </div>
        );
      })}
    </div>
  );
}
