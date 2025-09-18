import { Container, Heading, Paragraph } from "~/components/ui";

export default function Benefit() {
  return (
    <section className="bg-white pb-10 pt-10 lg:pt-24">
      <Container>
        <div className="mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-sm text-secondary-500">
          Benefit partnership with us 🎉
        </div>

        <Heading
          variant="h2"
          className="pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]"
        >
          Why partner with Finlab ?
        </Heading>

        <div className="grid grid-cols-1 gap-5 pb-14 lg:grid-cols-3">
          {PARTNER_BENEFITS.map((benefit) => (
            <div
              key={benefit.label}
              className="space-y-5 rounded-[30px] border-2 border-secondary-200 bg-white p-8 duration-200 hover:border-transparent hover:shadow-[0px_34px_184px_-10px_rgba(0,0,0,0.06)]"
            >
              <div>{benefit.icon}</div>

              <Heading variant="h5" className="pb-2 text-[28px] font-bold">
                {benefit.label}
              </Heading>

              <Paragraph variant="body1" className="pb-10">
                {benefit.description}
              </Paragraph>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <img
            src="/images/partner-benefit.png"
            alt="partner benefit"
            className=" w-full"
          />
        </div>
      </Container>
    </section>
  );
}

const PARTNER_BENEFITS = [
  {
    label: "Improve client experiences with the best financial products",
    description: "Manage your clients with a single sign-in using pro access.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
      >
        <path
          d="M45.1954 33.5534V33.0534V10.8534C45.1954 9.59733 45.0244 8.63153 44.7414 7.94658C44.4594 7.26405 44.0847 6.89905 43.6889 6.75048C43.2929 6.60181 42.7692 6.6298 42.1053 6.95724C41.4394 7.28568 40.6724 7.89834 39.8426 8.84022L45.1954 33.5534ZM45.1954 33.5534H45.6954H55.2229C57.3231 33.5534 58.4308 34.2001 58.7871 34.9896C59.1431 35.7786 58.8954 37.0359 57.5003 38.6111L57.4991 38.6124L36.6249 62.3541L36.6249 62.3541L34.1586 65.1596C33.3286 66.1017 32.5615 66.7145 31.8955 67.0429C31.2316 67.3704 30.7079 67.3984 30.3119 67.2497C29.9161 67.1011 29.5414 66.7361 29.2594 66.0536C28.9764 65.3686 28.8054 64.4029 28.8054 63.1468V40.9468V40.4468H28.3054H18.7779C16.6777 40.4468 15.57 39.8001 15.2138 39.0106C14.8577 38.2215 15.1054 36.9643 16.5005 35.3891L16.5017 35.3877L37.3759 11.6461L37.3759 11.6461L39.8422 8.84061L45.1954 33.5534Z"
          fill="#31B099"
          stroke="#31B099"
        />
      </svg>
    ),
  },
  {
    label: "Earn commission on the customers you refer to Finlab",
    description:
      "Supported by access to sales materials and co-branded collateral.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
      >
        <path
          d="M29.291 42.3961C29.291 45.3869 31.6036 47.7919 34.4402 47.7919H40.2368C42.7035 47.7919 44.7077 45.6952 44.7077 43.0744C44.7077 40.2686 43.4744 39.2511 41.6552 38.6036L32.3743 35.3661C30.5552 34.7186 29.3219 33.7319 29.3219 30.8952C29.3219 28.3052 31.326 26.1777 33.7927 26.1777H39.5893C42.426 26.1777 44.7385 28.5827 44.7385 31.5736"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37 23.125V50.875"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M67.8327 36.9998C67.8327 54.0198 54.0194 67.8332 36.9994 67.8332C19.9793 67.8332 6.16602 54.0198 6.16602 36.9998C6.16602 19.9798 19.9793 6.1665 36.9994 6.1665"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52.416 9.25V21.5833H64.7493"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M67.8327 6.1665L52.416 21.5832"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Power countless integration use cases",
    description:
      "Make payments, reporting, and more work like magic with the Brex API and no-code platforms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
      >
        <path
          d="M63.209 29.2915C67.834 29.2915 67.834 30.8332 67.834 33.9165V40.0832C67.834 43.1665 67.834 44.7082 63.209 44.7082"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.8327 24.6665L25.0052 32.3748C23.8027 34.4407 25.2827 36.9998 27.6569 36.9998H34.7486C37.1227 36.9998 38.6027 39.559 37.4311 41.6248L30.8327 49.3332"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5827 58.5832C9.24935 58.5832 6.16602 55.4998 6.16602 43.1665V30.8332C6.16602 18.4998 9.24935 15.4165 21.5827 15.4165"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.084 15.4165C52.4173 15.4165 55.5007 18.4998 55.5007 30.8332V43.1665C55.5007 55.4998 52.4173 58.5832 40.084 58.5832"
          stroke="#31B099"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
