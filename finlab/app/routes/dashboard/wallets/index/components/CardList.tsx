import Card from "react-credit-cards-2";
import { Link, useLoaderData } from "@remix-run/react";
// components
import { InfoTooltip } from "~/components/admin";
import {
  Card as CardComponent,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ScrollArea,
} from "~/components/ui";
import NewCardDialog from "./NewCardDialog";
//
import type { loader } from "../_route";

export default function CardList() {
  const { cards } = useLoaderData<typeof loader>();
  return (
    <CardComponent className="h-min space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Card Lists</span>
          <InfoTooltip message="All card available" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[340px]">
          <div className="flex flex-col gap-5 py-4">
            {cards.map((card) => (
              <Link
                to={`card/${card.id}/details`}
                prefetch="intent"
                key={card.id}
              >
                <Card
                  name={card.name}
                  number={card.number}
                  expiry={card.expiry}
                  cvc={card.cvc}
                />
              </Link>
            ))}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <NewCardDialog />
      </CardFooter>
    </CardComponent>
  );
}
