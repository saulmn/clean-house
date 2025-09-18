import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Heading,
} from "~/components/ui";
import InfoTooltip from "./InfoTooltip";
import { ReceiveMoneyDialog, SentMoneyDialog } from "~/components/admin";
// utils
import { useUser } from "~/utils";
import { formatCurrency } from "~/utils/formatNumber";
//
import type { SerializeFrom } from "@remix-run/node";
import type { Contact } from "@prisma/client";

type TotalBalanceProps = {
  contacts: SerializeFrom<Contact[]>;
};

export default function TotalBalance({ contacts }: TotalBalanceProps) {
  const user = useUser();

  return (
    <Card className="h-min space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Total Balance</span>
          <InfoTooltip message="All account amount" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Heading variant="h5" className="font-bold">
          {formatCurrency(user.balance)}
        </Heading>
      </CardContent>

      <CardFooter className="gap-4 lg:flex-col xl:flex-row">
        <SentMoneyDialog contacts={contacts} />

        <ReceiveMoneyDialog contacts={contacts} />
      </CardFooter>
    </Card>
  );
}
