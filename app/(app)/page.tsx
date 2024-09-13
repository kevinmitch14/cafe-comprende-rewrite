import { Sidebar } from "@/components/sidebar";

export default function HomePage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const country = searchParams.country;
  const orderBy = searchParams.sort;
  return (
    <main>
      <Sidebar country={country} orderBy={orderBy} />
    </main>
  );
}
