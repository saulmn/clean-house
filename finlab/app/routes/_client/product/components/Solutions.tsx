import { Link } from "@remix-run/react";
// components
import { Container, Heading, Paragraph, buttonVariants } from "~/components/ui";
// utils
import { cn } from "~/utils/cn";

export default function Solutions() {
  return (
    <section className="bg-[#1E2836] py-10 lg:py-24">
      <Container>
        <div className="mx-auto mb-3 w-fit rounded-full bg-[#353E49] px-6 py-1.5 text-xs text-white lg:text-sm">
          Our best solution for you ✨
        </div>

        <Heading
          variant="h2"
          className="mb-10 text-center font-bold leading-tight tracking-[-1.68px] text-white lg:mb-16 "
        >
          We have solutions that work for you.
        </Heading>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex basis-1/2 flex-col justify-between overflow-hidden rounded-3xl bg-primary-800 pt-10">
            <div className="px-5 pb-8 lg:px-10 lg:pb-0">
              <Heading
                variant="h4"
                className="pb-3 text-center font-bold text-white"
              >
                Finlab for Personal
              </Heading>

              <Paragraph
                variant="body1"
                className="pb-12 text-center text-secondary-300"
              >
                Easy-to-use personal platform and spend management software in
                an integrated global solution.
              </Paragraph>

              <div className="flex justify-center">
                <Link
                  to="/solutions/personal"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "whitespace-nowrap text-white"
                  )}
                >
                  Learn more
                </Link>
              </div>
            </div>

            <img
              src="images/for-personal.png"
              alt="finlab personal"
              className="w-full"
            />
          </div>

          <div className="basis-1/2 overflow-hidden rounded-3xl bg-white pt-10">
            <div className="px-5 pb-8 lg:px-10 lg:pb-0">
              <Heading variant="h4" className="pb-3 text-center font-bold">
                Finlab for Startup
              </Heading>

              <Paragraph variant="body1" className="pb-12 text-center">
                Fast access to global cards, business account (send ACH and
                wires), spend management, and bill pay
              </Paragraph>

              <div className="flex justify-center">
                <Link
                  to="/solutions/startup"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "whitespace-nowrap"
                  )}
                >
                  Learn more
                </Link>
              </div>
            </div>

            <img
              src="images/for-stratup.png"
              alt="finlab starup"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
