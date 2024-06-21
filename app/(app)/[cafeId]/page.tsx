import Link from "next/link";
import {
  ArrowLeftIcon,
  BookmarkIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { RateCafeForm } from "@/components/rate-cafe-form";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { detailedCountryInformation } from "@/lib/countries";
import { getCafes } from "@/lib/getCafes";

export default async function CafePage({
  params,
}: {
  params: { cafeId: string };
}) {
  return (
    <div className="w-screen p-2 md:w-auto">
      <div className="flex justify-between">
        <Link href={"/"}>
          <Button className="flex gap-2" size={"sm"} variant={"secondary"}>
            <ArrowLeftIcon />
            <span>Back</span>
          </Button>
        </Link>
        <Button variant={"secondary"} size={"sm"}>
          {/* bookmarked ? <BookmarkFilledIcon/> :  */}
          <BookmarkIcon />
        </Button>
      </div>
      <CafeDetails placeId={params.cafeId} />
    </div>
  );
}

async function CafeDetails({ placeId }: { placeId: string }) {
  const [cafeData] = await getCafes(undefined, undefined, placeId);

  console.log({ cafeData });
  const countryFlag = detailedCountryInformation.find(
    (country) => country.countryCode === cafeData.country,
  )?.flag;

  const ratings = [
    { name: "location", value: cafeData.averageLocationRating },
    { name: "vibe", value: cafeData.averageVibeRating },
    { name: "wifi", value: cafeData.averageWifiRating },
    { name: "average", value: cafeData.averageRating },
  ];
  return (
    <div className="mt-4">
      <span className="ml-1">{countryFlag}</span>
      <h1 className="font-medium">{cafeData.name}</h1>
      <p className="text-xs font-medium text-gray-800">
        {cafeData.averageRating}/5 - {cafeData.numberOfReviews}{" "}
        {cafeData.numberOfReviews}
      </p>
      <div className="mt-2 flex flex-col gap-y-2.5">
        {ratings.map((rating) => {
          return (
            <div key={rating.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium capitalize">
                  {rating.name}
                </span>
                <span className="text-sm">{rating.value.toFixed(1)}</span>
              </div>
              <Progress value={rating.value * 20} />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex gap-x-1.5">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination_place_id=${cafeData.id}&destination=${cafeData.id}`}
        >
          <Button variant={"outline"} size={"sm"}>
            Directions
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </Button>
        </a>
        <RateCafeForm cafe={{ ...cafeData, type: "rated" }} />
      </div>
    </div>
  );
}
