import Image from "next/image";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { RateCafeFormGoogle } from "@/components/rate-cafe-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleCafe } from "@/lib/store/cafe-store";

export function SelectedCafe({
  selectedCafe,
  removeSelectedCafe,
  handleInput,
}: {
  selectedCafe: GoogleCafe;
  removeSelectedCafe: (val: GoogleCafe | null) => void;
  handleInput: (val: string) => void;
}) {
  return (
    <Card className="my-1.5 mt-3 hidden p-3 md:block">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle>{selectedCafe.name}</CardTitle>
          <Button variant={"ghost"} size={"icon"} className="h-auto w-auto p-1">
            <Cross2Icon
              onClick={() => {
                removeSelectedCafe(null);
                handleInput("");
              }}
            />
          </Button>
        </div>
        <CardDescription>{selectedCafe.formatted_address}</CardDescription>
        <CardContent className="p-0">
          {selectedCafe.photos ? (
            <div className="grid grid-cols-3 gap-1">
              {selectedCafe.photos.map((photo, idx) => {
                const numberOfPhotos = selectedCafe.photos?.length;
                const photoUrl = photo.getUrl();
                if (idx >= numberOfPhotos! - (numberOfPhotos! % 3)) return;
                return (
                  <div key={photoUrl} className="relative h-20">
                    <Image
                      // TODO fix images in prod, allowed domains next image
                      src={photoUrl}
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
      <CardFooter className="flex justify-end p-0 pt-2">
        {/* TODO implement */}
        <RateCafeFormGoogle {...selectedCafe} />
      </CardFooter>
    </Card>
  );
}
