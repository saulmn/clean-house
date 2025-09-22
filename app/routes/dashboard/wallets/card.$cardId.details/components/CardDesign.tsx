import type { CallbackArgument } from "react-credit-cards-2";
import Card from "react-credit-cards-2";
// components
import {
  Card as CardComponent,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { InfoTooltip } from "@/components/admin";
//
import type { CardData } from "@/utils/payment";

type CardDesignProps = {
  card: CardData;
  handleCallback:
    | ((type: CallbackArgument, isValid: boolean) => void)
    | undefined;
};

export default function CardDesign({ card, handleCallback }: CardDesignProps) {
  return (
    <CardComponent className="h-min basis-full space-y-4 lg:basis-2/12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Card Design</span>
          <InfoTooltip message="Your card design" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Card
          name={card.name}
          number={card.number}
          expiry={card.expiry}
          cvc={card.cvc}
          callback={handleCallback}
        />
      </CardContent>
    </CardComponent>
  );
}
