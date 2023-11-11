import type { V2_MetaFunction } from "@remix-run/node";

import { Features, Hero, Solutions, Trusted } from "./Components";
import { CallToAction, Testimonial } from "../components";

export const meta: V2_MetaFunction = () => [
  { title: "Finlab - Remix Full Stack Client and Admin Finance Template" },
  {
    name: "theme-color",
    content: "#31B099",
  },
];

export default function Index() {
  return (
    <>
      <Hero />
      <Solutions />
      <Features />
      <Trusted />
      <Testimonial />
      <CallToAction />
    </>
  );
}
