import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
// components
import { Container, Heading, Paragraph, buttonVariants } from "~/components/ui";
// utils
import { cn } from "~/utils/cn";
import { BUY_URL } from "~/utils/setting";

export default function Hero() {
  return (
    <section className="bg-white pt-[68px] lg:relative lg:overflow-hidden">
      <Container className="h-full">
        <div className="py-9 lg:max-w-xl lg:py-20">
          <div className="mb-3 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs md:mb-8 md:text-sm">
            <span className="rounded-full bg-primary px-[5px] py-1 font-medium text-white">
              News!
            </span>
            <span className="pl-2 text-secondary-500">
              Update New features for active users ✨
            </span>
          </div>

          <Heading
            variant="h1"
            className="mb-6 font-bold text-[#1B2632] md:mb-10 lg:leading-tight lg:tracking-[-2.16px]"
          >
            Manages all your financial task using finlab
          </Heading>

          <Paragraph variant="body1" className="mb-10">
            We helping you to manage your business cashflow. we provide the best
            features that will help you to manage financial task easily.
          </Paragraph>

          <div className="mb-[60px] flex gap-2 md:gap-4 lg:mb-[74px]">
            <Link
              to="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "flex items-center whitespace-nowrap px-7 md:px-8"
              )}
            >
              Live preview
              <ArrowRight className="ml-2 inline-block" size={16} />
            </Link>
            <Link
              to={BUY_URL}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "whitespace-nowrap px-7 md:px-8"
              )}
              target="_blank"
            >
              Purchase now
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="">
              <Paragraph
                variant="subtitle1"
                className="mb-1 font-bold lg:text-5xl"
              >
                290K <span className="text-primary-500">+</span>
              </Paragraph>
              <Paragraph variant="body1">Download</Paragraph>
            </div>
            <div className="">
              <Paragraph
                variant="subtitle1"
                className="mb-1 font-bold lg:text-5xl"
              >
                110K <span className="text-primary-500">+</span>
              </Paragraph>
              <Paragraph variant="body1">Active user</Paragraph>
            </div>
            <div className="">
              <Paragraph
                variant="subtitle1"
                className="mb-1 font-bold lg:text-5xl"
              >
                900K <span className="text-primary-500">+</span>
              </Paragraph>
              <Paragraph variant="body1">Business teams</Paragraph>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute hidden w-full bg-primary-800 lg:right-0 lg:top-[68px] lg:block lg:w-[80vh]">
        <img
          src="images/landing-hero.png"
          alt="hero"
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
