import Image from "next/image";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SelectedCafe({
  selectedCafe,
  handleSelectCafe,
  handleInput,
}: {
  selectedCafe: google.maps.places.PlaceResult | null;
  handleSelectCafe: (val: google.maps.places.PlaceResult | null) => void;
  handleInput: (val: string) => void;
}) {
  if (!selectedCafe) return;
  return (
    selectedCafe && (
      <Card className="my-1.5 mt-3 min-w-[340px] p-3">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between">
            <CardTitle>{selectedCafe.name}</CardTitle>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="h-auto w-auto p-1"
            >
              <Cross2Icon
                onClick={() => {
                  handleSelectCafe(null);
                  handleInput("");
                }}
              />
            </Button>
          </div>
          <CardDescription>{selectedCafe.formatted_address}</CardDescription>
          <CardContent className="p-0">
            {selectedCafe.photos ? (
              <div className="grid grid-cols-3 gap-1">
                {selectedCafe.photos?.map((photo, idx) => {
                  const numberOfPhotos = selectedCafe.photos?.length;
                  if (idx >= numberOfPhotos! - (numberOfPhotos! % 3)) return;
                  return (
                    <div key={idx} className="relative h-20">
                      <Image
                        // TODO fix images in prod, allowed domains next image
                        key={crypto.randomUUID()}
                        src={
                          "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAUacShi1cALABEkNsXpWIq_FiJSEEQ9GECgslEwms1Prl777ByJZSYJwz_sOAczn5kofvqJ9ngIS9Q83w-sM4slsyOOWMvQyLYTd6HRsnHQNPg4L8QPc5i2I_NEy9czYtoGQZDhBOdSdZLqc3XxQbknSsPhuOH4Kw3l8Q0g2DdyzPTNHh058&3u2822&5m1&2e1&callback=none&key=AIzaSyBhcUiOcSbio-KNInHy-n3sUoCFtjMyL1c&token=21125"
                        }
                        alt=""
                        fill
                        sizes="100px"
                        className="h-auto rounded-md border object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </CardContent>
        </CardHeader>
        <CardContent className="p-0"></CardContent>
        <CardFooter className="flex justify-end p-0 pt-2">
          {/* TODO implement */}
          {/* <RateCafeForm cafe={selectedCafe} /> */}
        </CardFooter>
      </Card>
    )
  );
}
