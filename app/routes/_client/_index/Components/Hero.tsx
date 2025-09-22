import { Link } from "@remix-run/react";
import { Container, Heading, Paragraph, buttonVariants } from "~/components/ui";
import { cn } from "~/utils/cn";
import Logo from "~/components/Logo";


export default function Hero() {
  return (
    <section className="bg-white">
      {/* Navbar */}
      <header className="w-full border-b">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <Link to="/login" className={cn(buttonVariants({ size: "sm" }))}>
            Login
          </Link>
        </Container>
      </header>

      {/* Hero content */}
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            variant="h1"
            className="mb-4 font-bold text-[#1B2632] lg:leading-tight"
          >
            Clean supplies for a spotless space
          </Heading>
          <Paragraph variant="body1" className="mx-auto max-w-2xl text-[#4B5563]">
            Eco‑friendly cleaners, tools, and refills for homes and businesses.
            Fast shipping and fair prices.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
}
