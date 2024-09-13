import { Sidebar } from "@/components/sidebar";
import { countryCodeSchema } from "@/lib/countries";
import { orderByOptionsSchema } from "@/lib/getCafes";

export default function HomePage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const country = countryCodeSchema.optional().parse(searchParams.country);
  const orderBy = orderByOptionsSchema.optional().parse(searchParams.sort);
  return (
    <main>
      <Sidebar country={country} orderBy={orderBy} />
    </main>
  );
}
