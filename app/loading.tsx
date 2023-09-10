import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <main className="flex h-screen items-center justify-center">
      <LoadingSpinner className="h-5 w-5" />
    </main>
  );
}
