import { useLoaderData } from "@remix-run/react";

import { Container, Heading } from "~/components/ui";

import type { loader } from "../_route";
import AccountantCard from "./AccountantCard";

export default function SearchAccountant() {
  const { accountants } = useLoaderData<typeof loader>();

  return (
    <section className="bg-white pb-10 pt-10 lg:pt-24">
      <Container>
        <div className="mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500">
          Search accountant 🎉
        </div>

        <Heading
          variant="h2"
          className="pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]"
        >
          Let’s find an accountant
        </Heading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {accountants.map((accountant) => (
            <AccountantCard key={accountant.id} accountant={accountant} />
          ))}
        </div>
      </Container>
    </section>
  );
}
