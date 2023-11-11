import type { Accountant } from "@prisma/client";
import { Link } from "@remix-run/react";

import { Heading, Paragraph } from "~/components/ui";

type AccountantCardProps = {
  accountant: Pick<Accountant, "id" | "name" | "logo" | "description">;
};

export default function AccountantCard({ accountant }: AccountantCardProps) {
  return (
    <Link
      to={`/resources/accountant/${accountant.id}/details`}
      key={accountant.id}
      className="rounded-[30px] border-2 border-secondary-200 p-8 duration-200 hover:border-transparent hover:shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)]"
    >
      <img
        src={accountant.logo}
        alt={accountant.name}
        className="h-44 w-full"
      />

      <div className="space-y-6 pt-8">
        <Heading variant="h6" className="font-bold">
          {accountant.name}
        </Heading>
        <Paragraph variant="body1">
          {accountant.description.slice(0, 300)}...
        </Paragraph>
      </div>
    </Link>
  );
}
