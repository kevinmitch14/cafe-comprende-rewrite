import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 p-4 pt-8">
      <Skeleton className="h-[20px] w-full rounded-full" />
      <Skeleton className="h-[20px] w-full rounded-full" />
      <Skeleton className="h-[20px] w-full rounded-full" />
      <Skeleton className="h-[20px] w-full rounded-full" />
    </div>
  );
}
