import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
// components
import { Container, Heading, Paragraph, buttonVariants } from "~/components/ui";
// utils
import { cn } from "~/utils/cn";
import { BUY_URL } from "~/utils/setting";

export default function Hero() {
  return (
    <section className="bg-white pt-24 lg:pt-[68px] ">
      <Container className="flex h-full basis-full flex-col items-center justify-between py-5 lg:flex-row">
        <div className="basis-1/2 lg:py-20">
          <div className="mb-5 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs lg:text-sm">
            <span className="rounded-full bg-primary px-[5px] py-1 font-medium text-white">
              News!
            </span>
            <span className="pl-2 text-secondary-500">
              Update New features for active users ✨
            </span>
          </div>

          <Heading
            variant="h1"
            className="mb-6 font-bold text-[#1B2632] lg:mb-8 lg:leading-tight lg:tracking-[-2.16px]"
          >
            Easy way to find an accountant you trust here{" "}
          </Heading>

          <Paragraph variant="body1" className="mb-6 lg:pb-10">
            Need accounting support? Check out finlab directory of vetted
            accounting professionals who can help you streamline your finances
            and get the most out of your finlab account.
          </Paragraph>

          <div className="mb-10 flex gap-2 md:gap-4">
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
        </div>
        <img
          src="/images/accountants.png"
          alt="accountants"
          className="w-full lg:h-[700px] lg:w-auto"
        />
      </Container>
    </section>
  );
}
