import { Button, Container, Heading, Paragraph } from "~/components/ui";

export default function Benefit() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 pb-14 lg:flex-row lg:gap-24 lg:pb-0">
          <div className="basis-1/2">
            <div className="mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm">
              For personal use 🤟🏻
            </div>

            <Heading
              variant="h2"
              className="pb-6 font-bold leading-tight tracking-[-1.68px] text-[#1B2632] lg:pb-8"
            >
              Create a culture of speed and financial discipline.
            </Heading>

            <Paragraph variant="body1" className="max-w-3xl pb-6 lg:pb-14">
              Gain real-time visibility and accountability across global spend,
              break down silos of separate systems, and give accounting teams
              more automation and accuracy.
            </Paragraph>

            <Button size="lg">Learn more</Button>
          </div>

          <div className="basis-1/2">
            <img
              src="/images/financial-discipline.png"
              alt="financial discipline"
              className="hidden w-full lg:block"
            />
            <img
              src="/images/financial-discipline-mobile.png"
              alt="financial discipline"
              className="w-full lg:hidden"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-24">
          <div className="basis-1/2">
            <img
              src="/images/make-it-easy.png"
              alt="make it easy"
              className="hidden w-full lg:block"
            />
            <img
              src="/images/make-easy-mobile.png"
              alt="make it easy"
              className="w-full lg:hidden"
            />
          </div>

          <div className="basis-1/2">
            <div className="mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm">
              For business startup 💼{" "}
            </div>

            <Heading
              variant="h2"
              className="pb-6 font-bold leading-tight tracking-[-1.68px] text-[#1B2632] lg:pb-8"
            >
              Make it easy to do the right thing, anywhere
            </Heading>

            <Paragraph variant="body1" className="max-w-3xl pb-6 lg:pb-14">
              Auto-generate receipts and make it easy to understand the policy
              and purpose for expenses, across cards, reimbursements, and bill
              pay — with amounts shown in USD and local currency.
            </Paragraph>

            <Button size="lg">Learn more</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
