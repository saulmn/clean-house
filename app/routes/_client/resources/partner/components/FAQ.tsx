import { Container, Heading } from "~/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="bg-white py-10 lg:py-24">
      <Container>
        <div className="mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm">
          Some frequently asked questions 👍🏻
        </div>

        <Heading
          variant="h2"
          className="pb-20 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]"
        >
          Frequently asked questions
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How does the partner program work?
              </AccordionTrigger>
              <AccordionContent>
                The Partner Program is a service that allows participating
                partners to earn commission and fees on referred customers. We
                provide you with the materials and resources you’ll need to get
                started.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are there any fees?</AccordionTrigger>
              <AccordionContent>No fees to participate. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often do I get paid?</AccordionTrigger>
              <AccordionContent>
                Brex will send your earned fees on a monthly basis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Am I eligible?</AccordionTrigger>
              <AccordionContent>
                If you work primarily with US-based companies that you think
                would benefit from Brex’s unique financial products, we’d love
                to have you on board.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How much will I get paid?</AccordionTrigger>
              <AccordionContent>
                Brex offers partners tiered revenue share-based fee structures,
                which depend on the volume of customers you refer and how much
                money they spend on their Brex financial products. Apply to
                learn where your company fits in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
