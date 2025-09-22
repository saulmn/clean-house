import { Link } from "@remix-run/react";
import { Container, Heading, Paragraph, buttonVariants } from "@/components/ui";
import { cn } from "@/utils/cn";
import Logo from "@/components/Logo";


export default function Hero() {
  return (
    <section className="bg-white">
      {/* Navbar */}
      <header className="w-full border-b">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <Link to="/login" className={cn(buttonVariants({ size: "sm" }))}>
            Iniciar Sesión
          </Link>
        </Container>
      </header>

      {/* Hero content */}
      <Container className="py-12 md:py-20 lg:py-28 h-screen">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <Heading
              variant="h1"
              className="mb-4 font-bold text-[#1B2632] lg:leading-tight"
            >
              Clean House, artículos para la limpieza del hogar
            </Heading>
            <Paragraph
              variant="body1"
              className="mx-auto max-w-2xl text-[#4B5563] lg:mx-0"
            >
              Limpieza natural, herramientas, y recargas para hogares y negocios.
              Envío rápido y precios justos.
            </Paragraph>
          </div>

          {/* Main hero image */}
          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-border md:aspect-[5/3] lg:aspect-[4/3]">
              <img
                src="/images/hero/hero.jpeg"
                alt="Clean House - artículos para la limpieza"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* subtle decorative blur shadow */}
            <div className="pointer-events-none absolute -inset-x-6 -bottom-6 -top-6 -z-10 rounded-[28px] bg-gradient-to-br from-primary/5 to-transparent blur-2xl"></div>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="border-t py-4">
        <Container>
          <p className="text-center text-sm text-muted-foreground">
            Clean House 2025 - TLX 2025
          </p>
        </Container>
      </footer>
    </section>
  );
}
