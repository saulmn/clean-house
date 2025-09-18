import Marquee from "react-fast-marquee";
// components
import { Button, Container, Heading, Paragraph } from "~/components/ui";

export default function Trusted() {
  return (
    <section className=" bg-[#1E2836] py-10 lg:py-24">
      <Container className="flex h-min flex-col items-end justify-between gap-5 pb-10 lg:flex-row lg:gap-0">
        <div className="basis-full lg:basis-1/2">
          <div className="mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm">
            Our best solution for you ✨
          </div>

          <Heading
            variant="h2"
            className="font-bold leading-tight tracking-[-1.68px] text-white "
          >
            20k+ company trust us as a financial companion
          </Heading>
        </div>

        <div className="basis-full lg:basis-1/2 lg:pl-10">
          <Paragraph variant="body1" className="pb-6 text-secondary-300">
            {/* We have helped more than 20,000 companies in the world to manage
            their finances. We always want to give the best for all our users. */}
            Our platform is adaptable to meet the financial processing
            requirements of global companies and support with multiple local
            bank channels and digital wallets.
          </Paragraph>

          <Button size="lg" variant="outline" className="text-white">
            Learn more
          </Button>
        </div>
      </Container>

      <div className="min-h-[40px] space-y-6">
        <Marquee>
          {COMPANIES.map((item, i) => (
            <div
              key={item.label}
              className="mx-3 flex min-w-[200px] items-center justify-center rounded-2xl bg-[#353E4A] py-10"
            >
              <img
                src={item.image}
                alt={item.label}
                className="mx-auto h-10 w-20"
              />
            </div>
          ))}
        </Marquee>

        <Marquee direction="right">
          {COMPANIES.map((item) => (
            <div
              key={item.label}
              className="mx-3 flex min-w-[200px] items-center justify-center rounded-2xl bg-[#353E4A] py-10"
            >
              <img
                src={item.image}
                alt={item.label}
                className="mx-auto h-10 w-20"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

const COMPANIES = [
  {
    label: "Shopify",
    image: "logos/shopify.svg",
  },
  {
    label: "airwallex",
    image: "logos/airwallex.svg",
  },
  {
    label: "alibaba",
    image: "logos/alibaba.svg",
  },
  {
    label: "amazon",
    image: "logos/amazon.svg",
  },
  {
    label: "automatic",
    image: "logos/automatic.svg",
  },
  {
    label: "google",
    image: "logos/google.svg",
  },
  {
    label: "gosht",
    image: "logos/gosht.svg",
  },
  {
    label: "rakuten",
    image: "logos/rakuten.svg",
  },
  {
    label: "razorpay",
    image: "logos/razorpay.svg",
  },
  {
    label: "shopify",
    image: "logos/shopify.svg",
  },
];
