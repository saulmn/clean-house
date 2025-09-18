import { Button, Container, Heading, Paragraph } from "~/components/ui";

export default function Features() {
  return (
    <section className="bg-white pb-10 pt-20 lg:pt-24">
      <Container>
        <div className="mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500">
          Our best features for you 👏🏻
        </div>

        <Heading
          variant="h2"
          className="pb-6 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]"
        >
          Culture of financial discipline
        </Heading>

        <Paragraph
          variant="body1"
          className="mx-auto max-w-3xl pb-10 text-center"
        >
          finlab is adaptable to meet the financial processing requirements of
          global companies and support with multiple local bank channels and
          digital wallets.
        </Paragraph>

        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="w-full rounded-[30px] border-2 border-secondary-200 p-8"
            >
              <Paragraph className="pb-6 text-3xl font-bold">
                {feature.title}
              </Paragraph>

              <Paragraph variant="body1">{feature.description}</Paragraph>

              <img src={feature.image} alt="" className="mt-16" />
            </div>
          ))}
        </div>

        <div className=" flex items-center justify-center ">
          <Button variant="outline" size="lg">
            Learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}

const FEATURES = [
  {
    title: "Manage your future with savings plans",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo.",
    image: "/images/saving-plan.png",
  },
  {
    title: "Know the currency of each country",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo.",
    image: "/images/currency.png",
  },
  {
    title: "Easily analyze your financial activity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio nunc ullamcorper mauris commodo.",
    image: "/images/analyze.png",
  },
];
