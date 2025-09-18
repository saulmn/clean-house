import { Button, Container, Heading, Paragraph } from "~/components/ui";

export default function Hero() {
  return (
    <section className="bg-white pt-[68px] ">
      <Container className="flex h-full basis-full flex-col justify-between py-5 lg:flex-row">
        <div className="py-20 lg:relative">
          <div className="mb-3 max-w-fit rounded-full bg-[#F4F4F7] px-1.5 py-2 text-xs lg:mb-8 lg:text-sm">
            <span className="rounded-full bg-primary px-[5px] py-1 font-medium text-white">
              News!
            </span>
            <span className="pl-2 text-secondary-500">
              Update New features for active users ✨
            </span>
          </div>

          <Heading
            variant="h1"
            className="mb-12 font-bold leading-tight tracking-[-2.16px] text-[#1B2632] lg:mb-14"
          >
            Contact Us{" "}
          </Heading>

          <div className="flex flex-col gap-8 md:flex-row lg:absolute lg:z-10">
            {CONTACT_TYPES.map((contact) => (
              <div
                key={contact.title}
                className="basis-1/2 rounded-3xl bg-white p-5 shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)] lg:w-96"
              >
                <div className="flex items-center justify-center pb-6">
                  {contact.icon}
                </div>

                <Paragraph className="pb-6 text-center text-3xl font-bold">
                  {contact.title}
                </Paragraph>

                <Paragraph variant="body1" className="pb-6 text-center">
                  {contact.description}
                </Paragraph>

                <Button size="lg" className="w-full">
                  {contact.button}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src="/images/support.png"
            alt="support"
            className="w-full lg:h-[700px]"
          />
        </div>
      </Container>
    </section>
  );
}

const CONTACT_TYPES = [
  {
    title: "Speak to a member of our CS team",
    description: "We will help you find the answer for your questions.",
    button: "Contact Customer Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="74"
        viewBox="0 0 75 74"
        fill="none"
      >
        <path
          d="M7.16667 37.6167H7.16676L7.16659 37.6074C7.01487 29.3843 10.0786 21.6209 15.7801 15.7978C21.4817 10.0055 29.1227 6.82083 37.3458 6.82083C54.1514 6.82083 67.8333 20.5028 67.8333 37.3083V54.8833C67.8333 55.8714 67.0089 56.6958 66.0208 56.6958C65.0328 56.6958 64.2083 55.8714 64.2083 54.8833V37.3083C64.2083 22.5101 52.1757 10.4458 37.3458 10.4458C30.0916 10.4458 23.3639 13.2422 18.3657 18.3347C13.3371 23.4576 10.6672 30.2771 10.7917 37.5593V55.1608C10.7917 56.1884 9.98942 57.0042 8.97917 57.0042C7.99115 57.0042 7.16667 56.1797 7.16667 55.1917V37.6167Z"
          fill="#31B099"
          stroke="#31B099"
        />
        <path
          d="M18.815 38.3875H18.4142C11.9392 38.3875 6.66667 43.66 6.66667 50.135V55.9317C6.66667 62.4067 11.9392 67.6792 18.4142 67.6792H18.815C25.29 67.6792 30.5625 62.4067 30.5625 55.9317V50.135C30.5625 43.66 25.29 38.3875 18.815 38.3875Z"
          fill="#31B099"
        />
        <path
          d="M56.5858 38.3875H56.185C49.71 38.3875 44.4375 43.66 44.4375 50.135V55.9317C44.4375 62.4067 49.71 67.6792 56.185 67.6792H56.5858C63.0608 67.6792 68.3333 62.4067 68.3333 55.9317V50.135C68.3333 43.66 63.0608 38.3875 56.5858 38.3875Z"
          fill="#31B099"
        />
      </svg>
    ),
  },
  {
    title: "Product support and help with your account",
    description:
      "Continuously updated, our help center is accessible 24 hours a day.",
    button: "Visit Our Help Center",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="74"
        viewBox="0 0 75 74"
        fill="none"
      >
        <path
          d="M40.0236 51.8941L40.0432 51.8765L40.0608 51.857C40.3645 51.5195 40.6188 51.1616 40.8008 50.691C40.9748 50.2715 41.0833 49.8076 41.0833 49.3333C41.0833 48.8566 40.9737 48.3905 40.7982 47.9694C40.6216 47.5454 40.3747 47.1585 40.0608 46.8097L40.0432 46.7901L40.0236 46.7725C39.6748 46.4586 39.2879 46.2118 38.864 46.0351C38.0009 45.6755 36.9991 45.6755 36.136 46.0351C35.7121 46.2118 35.3252 46.4586 34.9763 46.7725L34.9568 46.7901L34.9392 46.8097C34.6252 47.1585 34.3784 47.5454 34.2018 47.9693C34.0263 48.3905 33.9167 48.8566 33.9167 49.3333C33.9167 49.8076 34.0252 50.2715 34.1992 50.691C34.3812 51.1616 34.6354 51.5195 34.9392 51.857L34.9568 51.8765L34.9763 51.8941C35.3252 52.2081 35.7121 52.4549 36.136 52.6315C36.5572 52.807 37.0233 52.9167 37.5 52.9167C37.9767 52.9167 38.4428 52.807 38.864 52.6315C39.2879 52.4549 39.6748 52.2081 40.0236 51.8941ZM7.16666 37C7.16666 20.287 20.787 6.66666 37.5 6.66666C54.213 6.66666 67.8333 20.287 67.8333 37C67.8333 53.713 54.213 67.3333 37.5 67.3333C20.787 67.3333 7.16666 53.713 7.16666 37ZM37.5 21.8542C35.9597 21.8542 34.6875 23.1263 34.6875 24.6667V40.0833C34.6875 41.6236 35.9597 42.8958 37.5 42.8958C39.0403 42.8958 40.3125 41.6236 40.3125 40.0833V24.6667C40.3125 23.1263 39.0403 21.8542 37.5 21.8542Z"
          fill="#F0AB78"
          stroke="#F0AB78"
        />
      </svg>
    ),
  },
];
