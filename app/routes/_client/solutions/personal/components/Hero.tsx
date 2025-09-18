import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
// components
import { Container, Heading, Paragraph, buttonVariants } from "~/components/ui";
// utils
import { cn } from "~/utils/cn";
import { BUY_URL } from "~/utils/setting";

export default function Hero() {
  return (
    <section className="bg-[#1E2836] pt-36">
      <Container className="h-full basis-full">
        <div className="mx-auto mb-3 max-w-fit rounded-full bg-[#353E49] px-1.5 py-2 text-xs lg:mb-8">
          <span className="rounded-full bg-primary px-[5px] py-1 font-medium text-white">
            News!
          </span>
          <span className="pl-2 text-white">
            Update New features for active users ✨
          </span>
        </div>

        <Heading
          variant="h1"
          className="mb-6 text-center font-bold text-white lg:mb-10 lg:leading-tight lg:tracking-[-2.16px]"
        >
          Finlab for Personal{" "}
        </Heading>

        <Paragraph
          variant="body1"
          className="mb-10 text-center text-secondary-200"
        >
          Easy-to-use personal platform and spend management software in an
          integrated global solution.
        </Paragraph>

        <div className="mb-14 flex items-center justify-center gap-2 md:gap-4 lg:mb-4">
          <Link
            to="/login"
            className={cn(
              buttonVariants({ size: "lg" }),
              "flex items-center whitespace-nowrap px-7 md:px-8"
            )}
          >
            Get started
            <ArrowRight className="ml-2 inline-block" size={16} />
          </Link>
          <Link
            to={BUY_URL}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "whitespace-nowrap px-7 text-white md:px-8"
            )}
            target="_blank"
          >
            Purchase now
          </Link>
        </div>

        <img
          src="/images/personal-hero.png"
          alt="finlab personal"
          className=""
        />
      </Container>
    </section>
  );
}
