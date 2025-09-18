import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
// components
import { Container, Heading, Paragraph, buttonVariants } from "~/components/ui";
// utils
import { cn } from "~/utils/cn";
import { BUY_URL } from "~/utils/setting";

export default function CallToAction() {
  return (
    <div className="space-y-10 bg-white">
      <Container className="flex flex-col justify-between overflow-hidden rounded-3xl bg-primary-800 !px-0 lg:flex-row lg:rounded-[50px]">
        <div className="basis-full py-10 pl-5 lg:basis-8/12 lg:pl-10">
          <div className="mb-3 w-fit rounded-full bg-[#3D7B83] px-6 py-1.5 text-sm text-white">
            Our best solution for you ✨
          </div>

          <Heading
            variant="h2"
            className="pb-8 font-bold leading-normal text-white"
          >
            Let’s start manage your finances with finlab
          </Heading>

          <Paragraph variant="body1" className="pb-9 text-secondary-100">
            Get in touch to learn how our spend solution can increase financial
            efficiency and speed for your company.
          </Paragraph>

          <div className="flex gap-2 md:gap-4">
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
        </div>

        <div>
          <img src="/images/cta.png" alt="hero" className="w-full" />
        </div>
      </Container>
    </div>
  );
}
