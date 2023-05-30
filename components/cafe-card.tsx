import BookmarkIcon from "@/components/icons/bookmark-icon";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import ArrowRightIcon from "./icons/arrow-right-icon";
import RatingBar from "./ui/rating-bar";

export default function CafeCard({ cafe }: any) {
  const accumCafeRating = cafe.reviews.reduce(
    (prev: number, current: any) => prev + current.rating,
    0,
  );
  const numberOfCafeReviews = cafe.reviews.length;

  const averageCafeRating = accumCafeRating / numberOfCafeReviews;
  const internetPercentRating = (3.2 / 5) * 100;
  const noisePercentRating = (4.2 / 5) * 100;
  const locationPercentRating = (4.7 / 5) * 100;
  return (
    <Card key={cafe.place_id}>
      <CardHeader className="p-3">
        <CardTitle>{cafe.name}</CardTitle>
        <CardDescription>
          Rating: {averageCafeRating}/5 - ({numberOfCafeReviews})
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
              <p>Card Content</p>
            </CardContent> */}
      <CardFooter className="flex gap-x-2 p-3 pt-0">
        <Dialog>
          <DialogTrigger
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Rate
          </DialogTrigger>
          <DialogContent>
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
                <div className="flex flex-col gap-y-5 py-2">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between font-medium">
                      <span>Internet</span>
                      <span>3.2</span>
                    </div>
                    <RatingBar percent={internetPercentRating} />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between font-medium">
                      <span>Noise</span>
                      <span>4.2</span>
                    </div>
                    <RatingBar percent={noisePercentRating} />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between font-medium">
                      <span>Location</span>
                      <span>4.7</span>
                    </div>
                    <RatingBar percent={locationPercentRating} />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Dialog>
                <DialogTrigger className={cn(buttonVariants({ size: "sm" }))}>
                  Review <ArrowRightIcon className="ml-1 h-4 w-4" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex flex-col gap-y-1">
                      {cafe.name}
                    </DialogTitle>
                    <DialogDescription>
                      Harold&apos;s Cross, Dublin 12, Ireland
                    </DialogDescription>
                    <p>How was the Wifi?</p>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant={"outline"} size={"sm"}>
          <BookmarkIcon className="h-4 w-4 stroke-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}
