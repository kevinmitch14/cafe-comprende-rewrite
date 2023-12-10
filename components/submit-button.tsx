"use client";

import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";

export function SubmitButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} type="submit">
      <LoadingSpinner className={`${!pending && "hidden"} absolute`} />
      <span className={`${pending && "opacity-0"}`}>{children}</span>
    </Button>
  );
}
