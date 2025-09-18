import { Container, Heading, Paragraph } from "~/components/ui";

export default function Features() {
  return (
    <section className="bg-white py-10 lg:pt-24">
      <Container className="flex flex-col-reverse gap-10 md:flex-row md:gap-0">
        <div className="basis-full md:basis-1/2">
          <img
            src="images/feature-landing.png"
            alt="finlab features"
            className="hidden w-full md:block md:h-[830px] lg:h-[910px]"
          />
          <img
            src="images/mobile-feature.png"
            alt="finlab features"
            className="w-full object-cover md:hidden"
          />
        </div>

        <div className="basis-full md:basis-1/2">
          <div className="mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm">
            Our best solution for you ✨
          </div>

          <Heading
            variant="h2"
            className="mb-6 font-bold leading-tight tracking-[-1.68px] text-[#1B2632] lg:mb-8"
          >
            Let’s see what we can do for you{" "}
          </Heading>

          <Paragraph variant="body1" className="pb-10 lg:pb-12">
            We have many features that can certainly help you manage finances
            and spend money
          </Paragraph>

          <div className="space-y-5">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="group rounded-[10px] bg-[#F4F4F7] p-5 duration-200 hover:bg-primary-500"
              >
                <div className="flex items-center gap-6 pb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-300 text-secondary-300 group-hover:border-white group-hover:text-white">
                    {index + 1}
                  </span>
                  <Heading
                    variant="h6"
                    className="font-medium group-hover:text-white"
                  >
                    {feature.label}
                  </Heading>
                </div>

                <Paragraph variant="body1" className="group-hover:text-white">
                  {feature.description}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const FEATURES = [
  {
    label: "Saving Money Plans",
    description:
      "Finlab is adaptable to meet the financial processing requirements of global companies and support with multiple currencies",
  },
  {
    label: "Multi-device support access",
    description:
      "Finlab support your needs with quick delivery through various channels, including mobile & dekstop",
  },
  {
    label: "Hight level Security",
    description:
      "We ensure that the app is used safely and correctly, and that you can manage your own wallet in one place",
  },
];
