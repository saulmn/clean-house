import { Container, Paragraph } from "~/components/ui";

export default function Testimonial() {
  return (
    <section className="bg-white py-10 lg:py-24">
      <Container>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="44"
            viewBox="0 0 60 44"
            fill="none"
            className="h-16 w-11"
          >
            <path
              d="M26.4065 31.1595C26.4065 23.7977 21.7266 19.3463 15.7096 19.3463C13.8711 19.3463 12.3669 19.6887 11.0297 20.2023C11.0297 14.2101 16.0439 9.58756 23.2309 8.2179V0C9.85977 1.71207 0.5 12.8405 0.5 27.2218C0.5 37.4942 6.18272 44 14.0382 44C21.3924 44 26.4065 38.6926 26.4065 31.1595ZM59.5 31.1595C59.5 23.7977 54.653 19.3463 48.636 19.3463C46.7974 19.3463 45.2932 19.6887 43.9561 20.3735C43.9561 14.2101 49.1374 9.58756 56.3244 8.2179V0C42.9533 1.71207 33.5935 12.8405 33.5935 27.2218C33.5935 37.4942 39.2762 44 47.1317 44C54.4858 44 59.5 38.6926 59.5 31.1595Z"
              fill="#31B099"
            />
          </svg>
        </div>

        <Paragraph
          variant="subtitle1"
          className="pb-14 text-center text-3xl font-bold leading-[150%] tracking-tight lg:text-5xl"
        >
          <span className=" text-secondary-400">
            “Love the simplicity if the service.
          </span>{" "}
          A digital wallet platform that provides complete financial solutions
          to meet your entire financial tasks “
        </Paragraph>

        <div className="mb-8 h-0.5 w-full bg-[#D9D9D947]" />

        <div className="flex items-center gap-3 lg:gap-5">
          <img
            src="/images/makima.png"
            alt="makima"
            className="h-[53px] w-[53px] rounded-full object-cover lg:h-[80px] lg:w-[80px]"
          />
          <div>
            <Paragraph className="text-base font-bold lg:text-2xl">
              Makima Ackerman
            </Paragraph>
            <Paragraph variant="body2" className="text-sm lg:text-base">
              Founder of Devil Hunter Corp
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
}
