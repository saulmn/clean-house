import { useFetcher } from "@remix-run/react";

import { Input } from "~/components/ui";

export default function AccountantSearchInput() {
  const searchAccountantFetcher = useFetcher();
  return (
    <searchAccountantFetcher.Form preventScrollReset className="pb-12">
      <Input
        placeholder="Search..."
        onChange={(e) =>
          searchAccountantFetcher.submit(
            { search: e.target.value },
            { method: "POST" }
          )
        }
      />
    </searchAccountantFetcher.Form>
  );
}
