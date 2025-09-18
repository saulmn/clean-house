import { Link } from "@remix-run/react";
// components
import { Container, Heading, Paragraph, buttonVariants } from "~/components/ui";
// utils
import { cn } from "~/utils/cn";

export default function Solutions() {
  return (
    <section className="bg-[#1E2836] py-10 lg:py-24">
      <Container className="flex flex-col items-center justify-center">
        <div className="mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm">
          Our best solution for you ✨
        </div>

        <Heading
          variant="h2"
          className="mb-16 text-center font-bold leading-tight tracking-[-1.68px] text-white "
        >
          We have solutions that work for you.
        </Heading>

        <div className="mb-6 flex w-full flex-col items-center overflow-hidden rounded-3xl bg-primary-800 lg:relative lg:flex-row">
          <div className="basis-full p-5 md:basis-5/12">
            <Heading variant="h4" className="pb-3 font-bold text-white">
              Finlab for Personal
            </Heading>

            <Paragraph variant="body1" className="pb-12 text-secondary-300">
              Easy-to-use personal platform and spend management software in an
              integrated global solution.
            </Paragraph>

            <Link
              to="/solutions/personal"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mb-16 text-white md:mb-0"
              )}
            >
              Learn more
            </Link>
          </div>

          <div className="basis-full md:basis-7/12">
            <img
              src="images/finlab-personal.png"
              alt="finlab personal"
              className="bottom-0 h-full lg:absolute"
            />
          </div>
        </div>

        <div className="mb-6 flex w-full flex-col items-center overflow-hidden rounded-3xl bg-white lg:relative lg:flex-row">
          <div className="basis-full p-5 md:basis-5/12">
            <Heading variant="h4" className="pb-3 font-bold text-secondary-500">
              Finlab for Startup
            </Heading>

            <Paragraph variant="body1" className="pb-12">
              Easy-to-use personal platfrom and spend management software in an
              integrated global solution.
            </Paragraph>

            <Link
              to="/solutions/startup"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mb-16 md:mb-0"
              )}
            >
              Learn more
            </Link>
          </div>

          <div className="basis-7/12">
            <img
              src="images/finlab-startup.png"
              alt="finlab startup"
              className="bottom-0 right-0 h-full lg:absolute"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
